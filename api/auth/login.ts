import type { VercelRequest, VercelResponse } from '@vercel/node'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import { prisma } from '../lib/prisma'
import { setCors } from '../lib/auth'

export default async function handler(req: VercelRequest, res: VercelResponse) {
  setCors(res)
  if (req.method === 'OPTIONS') return res.status(200).end()
  if (req.method !== 'POST') return res.status(405).end()

  try {
    const { username, password } = req.body as { username: string; password: string }
    if (!username || !password) {
      return res.status(400).json({ error: 'Missing credentials' })
    }

    const admin = await prisma.admin.findUnique({ where: { username } })
    if (!admin) {
      return res.status(401).json({ error: 'Invalid credentials' })
    }

    const valid = await bcrypt.compare(password, admin.password)
    if (!valid) {
      return res.status(401).json({ error: 'Invalid credentials' })
    }

    const token = jwt.sign(
      { adminId: admin.id },
      process.env.JWT_SECRET || 'zvyky_secret_change_in_production',
      { expiresIn: '7d' }
    )

    return res.json({ token })
  } catch (err) {
    console.error('Login error:', err)
    const message = err instanceof Error ? err.message : String(err)
    return res.status(500).json({ error: 'Server error', detail: message })
  }
}

