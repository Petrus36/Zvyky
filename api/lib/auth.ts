import type { VercelRequest, VercelResponse } from '@vercel/node'
import jwt from 'jsonwebtoken'

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

  try {
    const token = authHeader.slice(7)
    jwt.verify(token, process.env.JWT_SECRET || 'zvyky_secret_change_in_production')
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


