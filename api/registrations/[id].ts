import type { VercelRequest, VercelResponse } from '@vercel/node'
import { withPrisma } from '../lib/prisma.js'
import { requireAuth, setCors } from '../lib/auth.js'

export default async function handler(req: VercelRequest, res: VercelResponse) {
  setCors(res)
  if (req.method === 'OPTIONS') return res.status(200).end()

  const { id } = req.query as { id: string }

  // PUT — admin only, update registration status (pending / approved / rejected)
  if (req.method === 'PUT') {
    return requireAuth(req, res, async () => {
      const { status } = req.body as { status: string }
      const updated = await withPrisma(prisma =>
        prisma.registration.update({
          where: { id },
          data:  { status },
        })
      )
      return res.json({
        ...updated,
        createdAt: updated.createdAt.toISOString().split('T')[0],
      })
    })
  }

  return res.status(405).end()
}



