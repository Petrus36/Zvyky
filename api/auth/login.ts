import type { VercelRequest, VercelResponse } from '@vercel/node'
import { createHmac } from 'crypto'
import { setCors } from '../lib/auth'

const ADMIN_USERNAME = 'admin'
const ADMIN_PASSWORD = 'zvyky2025'

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

    const secret = process.env.JWT_SECRET || 'zvyky_secret_change_in_production'
    const token  = createJWT({ adminId: 'admin' }, secret)
    return res.json({ token })
  } catch (err) {
    const message = err instanceof Error ? err.message : String(err)
    return res.status(500).json({ error: 'Server error', detail: message })
  }
}
