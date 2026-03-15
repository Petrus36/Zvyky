import type { VercelRequest, VercelResponse } from '@vercel/node'
import { createHmac } from 'crypto'

const ADMIN_USERNAME = 'admin'
const ADMIN_PASSWORD = 'zvyky2025'

/** base64url without relying on Node 14.18+ encoding name */
function b64url(str: string): string {
  return Buffer.from(str)
    .toString('base64')
    .replace(/\+/g, '-')
    .replace(/\//g, '_')
    .replace(/=/g, '')
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS')
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization')

  if (req.method === 'OPTIONS') return res.status(200).end()
  if (req.method !== 'POST') return res.status(405).end()

  try {
    let body: Record<string, unknown> = {}
    if (req.body && typeof req.body === 'object') {
      body = req.body as Record<string, unknown>
    } else if (typeof req.body === 'string') {
      try { body = JSON.parse(req.body) } catch { body = {} }
    }

    const username = String(body.username ?? '').trim()
    const password = String(body.password ?? '').trim()

    if (username !== ADMIN_USERNAME || password !== ADMIN_PASSWORD) {
      return res.status(401).json({ error: 'Invalid credentials' })
    }

    const now    = Math.floor(Date.now() / 1000)
    const header = b64url(JSON.stringify({ alg: 'HS256', typ: 'JWT' }))
    const claims = b64url(JSON.stringify({ adminId: 'admin', iat: now, exp: now + 604800 }))
    const data   = `${header}.${claims}`
    const secret = process.env.JWT_SECRET || 'zvyky_secret_change_in_production'
    const sig    = createHmac('sha256', secret).update(data).digest('base64')
      .replace(/\+/g, '-').replace(/\//g, '_').replace(/=/g, '')

    return res.json({ token: `${data}.${sig}` })
  } catch (err) {
    const message = err instanceof Error ? err.message : String(err)
    return res.status(500).json({ error: 'Server error', detail: message })
  }
}
