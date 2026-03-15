/**
 * Local development API server — wraps Vercel-style handlers for Node http.
 */
import 'dotenv/config'
import { createServer, IncomingMessage, ServerResponse } from 'node:http'
import type { VercelRequest, VercelResponse } from '@vercel/node'

import loginHandler         from '../api/auth/login.js'
import pricesHandler        from '../api/prices.js'
import datesHandler         from '../api/dates.js'
import datesIdHandler       from '../api/dates/[id].js'
import registrationsHandler from '../api/registrations.js'
import regsIdHandler        from '../api/registrations/[id].js'

type Handler = (req: VercelRequest, res: VercelResponse) => unknown

const ROUTES: Array<{ re: RegExp; keys: string[]; handler: Handler }> = [
  { re: /^\/api\/auth\/login$/,            keys: [],     handler: loginHandler },
  { re: /^\/api\/prices$/,                 keys: [],     handler: pricesHandler },
  { re: /^\/api\/dates$/,                  keys: [],     handler: datesHandler },
  { re: /^\/api\/dates\/([^/]+)$/,         keys: ['id'], handler: datesIdHandler },
  { re: /^\/api\/registrations$/,          keys: [],     handler: registrationsHandler },
  { re: /^\/api\/registrations\/([^/]+)$/, keys: ['id'], handler: regsIdHandler },
]

function matchRoute(pathname: string) {
  for (const r of ROUTES) {
    const m = pathname.match(r.re)
    if (m) {
      const params: Record<string, string> = {}
      r.keys.forEach((k, i) => { params[k] = m[i + 1] })
      return { handler: r.handler, params }
    }
  }
  return null
}

function wrapRes(raw: ServerResponse): VercelResponse {
  // Save the real end() before we touch anything
  const realEnd = raw.end.bind(raw) as (...args: unknown[]) => void

  let pendingStatus = 200

  const vRes = raw as unknown as VercelResponse

  // status() — just stores the code, doesn't write yet
  vRes.status = (code: number) => {
    pendingStatus = code
    return vRes
  }

  // json() — flushes status + Content-Type + body
  vRes.json = (data: unknown) => {
    if (!raw.headersSent) {
      raw.statusCode = pendingStatus
      raw.setHeader('Content-Type', 'application/json')
      realEnd(JSON.stringify(data))
    }
    return vRes
  }

  // end() shim so handlers that call res.end() also work
  ;(raw as unknown as Record<string, unknown>)['end'] = (body?: string) => {
    if (!raw.headersSent) {
      raw.statusCode = pendingStatus
    }
    realEnd(body ?? '')
    return vRes
  }

  return vRes
}

const PORT = 3001

createServer((req: IncomingMessage, rawRes: ServerResponse) => {
  const url = new URL(req.url ?? '/', `http://localhost:${PORT}`)
  const hit = matchRoute(url.pathname)

  if (!hit) {
    rawRes.statusCode = 404
    rawRes.setHeader('Content-Type', 'application/json')
    rawRes.end(JSON.stringify({ error: 'Not found' }))
    return
  }

  let body = ''
  req.on('data', (chunk: Buffer) => { body += chunk.toString() })
  req.on('end', () => {
    let parsed: unknown
    try { parsed = body ? JSON.parse(body) : undefined } catch { parsed = body }

    const vReq = Object.assign(req, {
      query:   { ...Object.fromEntries(url.searchParams), ...hit.params },
      cookies: {},
      body:    parsed,
    }) as unknown as VercelRequest

    const vRes = wrapRes(rawRes)

    Promise.resolve(hit.handler(vReq, vRes)).catch(err => {
      console.error('[API error]', err)
      if (!rawRes.headersSent) {
        rawRes.statusCode = 500
        rawRes.setHeader('Content-Type', 'application/json')
        rawRes.end(JSON.stringify({ error: 'Internal server error', detail: String(err) }))
      }
    })
  })
}).listen(PORT, () => {
  console.log(`✅  Local API → http://localhost:${PORT}/api`)
})
