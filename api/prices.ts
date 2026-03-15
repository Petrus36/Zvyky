import type { VercelRequest, VercelResponse } from '@vercel/node'
import { prisma } from './lib/prisma'
import { requireAuth, setCors } from './lib/auth'

const DEFAULT_PRICES: Record<string, number> = {
  malacky_B_standard:    1111,
  malacky_B_friend:      1061,
  malacky_B_student:     1050,
  malacky_A1:             999,
  malacky_A2:             999,
  malacky_kondicne:        45,
  malacky_osobitny:      1555,
  bratislava_B_standard: 1111,
  bratislava_B_welcome:   999,
  bratislava_kondicne:     45,
  bratislava_osobitny:   1555,
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  setCors(res)
  if (req.method === 'OPTIONS') return res.status(200).end()

  // GET — public, anyone can read current prices
  if (req.method === 'GET') {
    try {
      const rows = await prisma.coursePrice.findMany()
      const prices = { ...DEFAULT_PRICES }
      for (const row of rows) {
        prices[row.key] = row.price
      }
      return res.json(prices)
    } catch (err) {
      console.error('GET prices error:', err)
      return res.json(DEFAULT_PRICES) // fallback to defaults on DB error
    }
  }

  // PUT — admin only, bulk update
  if (req.method === 'PUT') {
    return requireAuth(req, res, async () => {
      try {
        const updates = req.body as Record<string, number>
        await Promise.all(
          Object.entries(updates).map(([key, price]) =>
            prisma.coursePrice.upsert({
              where:  { key },
              update: { price: Number(price) },
              create: { key, price: Number(price) },
            })
          )
        )
        return res.json({ ok: true })
      } catch (err) {
        console.error('PUT prices error:', err)
        const detail = err instanceof Error ? err.message : String(err)
        return res.status(500).json({ error: 'Failed to save prices', detail })
      }
    })
  }

  return res.status(405).end()
}


