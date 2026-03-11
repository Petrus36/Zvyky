import type { VercelRequest, VercelResponse } from '@vercel/node'
import { prisma } from './lib/prisma'
import { requireAuth, setCors } from './lib/auth'

export default async function handler(req: VercelRequest, res: VercelResponse) {
  setCors(res)
  if (req.method === 'OPTIONS') return res.status(200).end()

  // GET — public, shows upcoming course dates on the website
  if (req.method === 'GET') {
    try {
      const dates = await prisma.courseDate.findMany({
        orderBy: { startDate: 'asc' },
      })
      return res.json(dates)
    } catch (err) {
      console.error('GET dates error:', err)
      const message = err instanceof Error ? err.message : String(err)
      return res.status(500).json({ error: 'Failed to fetch dates', detail: message })
    }
  }

  // POST — admin only, add new date
  if (req.method === 'POST') {
    return requireAuth(req, res, async () => {
      const { location, courseType, startDate, description, isActive } = req.body as {
        location: string
        courseType: string
        startDate: string
        description?: string
        isActive?: boolean
      }

      const date = await prisma.courseDate.create({
        data: {
          location,
          courseType,
          startDate,
          description: description || '',
          isActive: isActive ?? true,
        },
      })
      return res.status(201).json(date)
    })
  }

  return res.status(405).end()
}

