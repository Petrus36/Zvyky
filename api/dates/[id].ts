import type { VercelRequest, VercelResponse } from '@vercel/node'
import { withPrisma } from '../lib/prisma'
import { requireAuth, setCors } from '../lib/auth'

export default async function handler(req: VercelRequest, res: VercelResponse) {
  setCors(res)
  if (req.method === 'OPTIONS') return res.status(200).end()

  const { id } = req.query as { id: string }

  // PUT — admin only, update a date record
  if (req.method === 'PUT') {
    return requireAuth(req, res, async () => {
      const { location, courseType, startDate, description, isActive } = req.body as {
        location?: string
        courseType?: string
        startDate?: string
        description?: string
        isActive?: boolean
      }

      const updated = await withPrisma(prisma =>
        prisma.courseDate.update({
          where: { id },
          data: { location, courseType, startDate, description, isActive },
        })
      )
      return res.json(updated)
    })
  }

  // DELETE — admin only
  if (req.method === 'DELETE') {
    return requireAuth(req, res, async () => {
      await withPrisma(prisma => prisma.courseDate.delete({ where: { id } }))
      return res.json({ ok: true })
    })
  }

  return res.status(405).end()
}



