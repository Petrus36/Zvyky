import type { VercelRequest, VercelResponse } from '@vercel/node'
import { prisma } from './lib/prisma'

/** GET /api/health — diagnose DB connection (no auth) */
export default async function handler(req: VercelRequest, res: VercelResponse) {
  res.setHeader('Access-Control-Allow-Origin', '*')
  if (req.method !== 'GET') return res.status(405).end()

  try {
    await prisma.$queryRaw`SELECT 1`
    return res.json({ ok: true, db: 'connected' })
  } catch (err) {
    const detail = err instanceof Error ? err.message : String(err)
    return res.status(500).json({ ok: false, db: 'error', detail })
  }
}
