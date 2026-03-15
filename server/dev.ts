/**
 * Local development API server.
 * Wraps all the Vercel serverless handlers so they work with plain `npm run dev`.
 * On Vercel (production) this file is NOT used — the api/ folder handles everything.
 */
import { config } from 'dotenv'
// Load .env.local first (created by vercel dev / vercel pull), then fall back to .env
config({ path: '.env.local' })
config({ path: '.env' })

import express, { type Request, type Response } from 'express'
import type { VercelRequest, VercelResponse } from '@vercel/node'

// ── Import all API handlers ──────────────────────────────────────────────────
import loginHandler         from '../api/auth/login.js'
import pricesHandler        from '../api/prices.js'
import datesHandler         from '../api/dates.js'
import registrationsHandler from '../api/registrations.js'

// Bracket filenames need a dynamic import workaround
const { default: datesIdHandler }         = await import('../api/dates/[id].js')
const { default: registrationsIdHandler } = await import('../api/registrations/[id].js')
// ────────────────────────────────────────────────────────────────────────────

const app = express()
app.use(express.json())

/** Cast Express req/res to Vercel types — they share the same Node.js base */
function wrap(handler: (req: VercelRequest, res: VercelResponse) => unknown) {
  return (req: Request, res: Response) =>
    handler(req as unknown as VercelRequest, res as unknown as VercelResponse)
}

/** Same as wrap but also copies route :id param into req.query.id (Vercel convention) */
function wrapWithId(handler: (req: VercelRequest, res: VercelResponse) => unknown) {
  return (req: Request, res: Response) => {
    const vReq = req as unknown as VercelRequest
    vReq.query = { ...vReq.query, id: req.params.id }
    return handler(vReq, res as unknown as VercelResponse)
  }
}

// ── Routes (must mirror the api/ folder structure) ───────────────────────────
app.all('/api/auth/login',        wrap(loginHandler))
app.all('/api/prices',            wrap(pricesHandler))
app.all('/api/dates',             wrap(datesHandler))
app.all('/api/dates/:id',         wrapWithId(datesIdHandler))
app.all('/api/registrations',     wrap(registrationsHandler))
app.all('/api/registrations/:id', wrapWithId(registrationsIdHandler))
// ────────────────────────────────────────────────────────────────────────────

const PORT = 3001
app.listen(PORT, () => {
  console.log(`✅ Dev API server → http://localhost:${PORT}`)
})

