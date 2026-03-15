import type { VercelRequest, VercelResponse } from '@vercel/node'

/** Dead-simple diagnostic endpoint — no imports, no Prisma, no JWT.
 *  Visit /api/ping to verify Vercel functions are running at all. */
export default function handler(_req: VercelRequest, res: VercelResponse) {
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.json({ ok: true, ts: Date.now(), node: process.version })
}

