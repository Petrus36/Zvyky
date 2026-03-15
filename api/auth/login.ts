import type { VercelRequest, VercelResponse } from '@vercel/node'
import { timingSafeEqual, createHmac } from 'crypto'
import { setCors } from '../lib/auth'

// ── Hardcoded admin credentials ──────────────────────────────────────────────
const ADMIN_USERNAME = 'admin'
const ADMIN_PASSWORD = 'zvyky2025'
// ─────────────────────────────────────────────────────────────────────────────

/** Constant-time string comparison */
function safeEqual(a: string, b: string): boolean {
  try {
    const bufA = Buffer.from(a)
    const bufB = Buffer.from(b)
    if (bufA.length !== bufB.length) return false
    return timingSafeEqual(bufA, bufB)
  } catch {
    return false
  }
}

/** Build a signed HS256 JWT using only Node.js crypto (no npm package needed) */
function createJWT(payload: Record<string, unknown>, secret: string): string {
  const header  = Buffer.from(JSON.stringify({ alg: 'HS256', typ: 'JWT' })).toString('base64url')
  const now     = Math.floor(Date.now() / 1000)
  const body    = Buffer.from(JSON.stringify({ ...payload, iat: now, exp: now + 7 * 24 * 60 * 60 })).toString('base64url')
  const data      = `${header}.${body}`
  const signature = createHmac('sha256', secret).update(data).digest('base64url')
  return `${data}.${signature}`
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  setCors(res)
  if (req.method === 'OPTIONS') return res.status(200).end()
  if (req.method !== 'POST') return res.status(405).end()

  try {
    // @vercel/node auto-parses JSON body, but guard against raw-string edge cases
    let body: Record<string, unknown> = {}
    if (req.body && typeof req.body === 'object') {
      body = req.body as Record<string, unknown>
    } else if (typeof req.body === 'string') {
      try { body = JSON.parse(req.body) } catch { body = {} }
    }

    const username = typeof body.username === 'string' ? body.username : ''
    const password = typeof body.password === 'string' ? body.password : ''

    if (!username || !password) {
      return res.status(400).json({ error: 'Missing credentials' })
    }

    if (!safeEqual(username, ADMIN_USERNAME) || !safeEqual(password, ADMIN_PASSWORD)) {
      return res.status(401).json({ error: 'Invalid credentials' })
    }

    const secret = process.env.JWT_SECRET || 'zvyky_secret_change_in_production'
    const token  = createJWT({ adminId: 'admin' }, secret)
    return res.json({ token })
  } catch (err) {
    console.error('Login error:', err)
    const message = err instanceof Error ? err.message : String(err)
    return res.status(500).json({ error: 'Server error', detail: message })
  }
}
