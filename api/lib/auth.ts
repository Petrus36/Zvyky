import type { VercelRequest, VercelResponse } from '@vercel/node'
import { createHmac, timingSafeEqual } from 'crypto'

/** Verify a HS256 JWT using only Node.js crypto (no npm package needed) */
function verifyJWT(token: string, secret: string): boolean {
  try {
    const parts = token.split('.')
    if (parts.length !== 3) return false

    // Verify signature
    const data     = `${parts[0]}.${parts[1]}`
    const expected = createHmac('sha256', secret).update(data).digest('base64url')
    const actual   = parts[2]
    if (expected.length !== actual.length) return false
    if (!timingSafeEqual(Buffer.from(expected), Buffer.from(actual))) return false

    // Verify expiry
    const payload = JSON.parse(Buffer.from(parts[1], 'base64url').toString()) as Record<string, unknown>
    if (typeof payload.exp === 'number' && payload.exp < Math.floor(Date.now() / 1000)) return false

    return true
  } catch {
    return false
  }
}

/** Call this at the start of any admin-only route handler */
export function requireAuth(
  req: VercelRequest,
  res: VercelResponse,
  fn: () => Promise<unknown>
): Promise<unknown> | void {
  const authHeader = req.headers['authorization']
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    res.status(401).json({ error: 'Unauthorized' })
    return
  }

  const secret = process.env.JWT_SECRET || 'zvyky_secret_change_in_production'
  const token  = authHeader.slice(7)

  if (!verifyJWT(token, secret)) {
    res.status(401).json({ error: 'Invalid or expired token' })
    return
  }

  return fn()
}

/** Allow all origins – needed for same-domain SPA calls */
export function setCors(res: VercelResponse) {
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS')
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization')
}
