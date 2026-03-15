import type { VercelRequest, VercelResponse } from '@vercel/node'
import { jwtVerify } from 'jose'

/** Call this at the start of any admin-only route handler */
export async function requireAuth(
  req: VercelRequest,
  res: VercelResponse,
  fn: () => Promise<unknown>
): Promise<unknown> {
  const authHeader = req.headers['authorization']
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    res.status(401).json({ error: 'Unauthorized' })
    return
  }

  const secret = new TextEncoder().encode(
    process.env.JWT_SECRET || 'zvyky_secret_change_in_production'
  )

  try {
    const token = authHeader.slice(7)
    await jwtVerify(token, secret)
    return fn()
  } catch {
    res.status(401).json({ error: 'Invalid or expired token' })
  }
}

/** Allow all origins – needed for same-domain SPA calls */
export function setCors(res: VercelResponse) {
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS')
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization')
}
