import { PrismaClient } from '@prisma/client'
import { PrismaNeon } from '@prisma/adapter-neon'
import { Pool, neonConfig } from '@neondatabase/serverless'

// Use undici WebSocket (Node 18+ built-in) — more reliable on Vercel than 'ws'
import { WebSocket } from 'undici'
neonConfig.webSocketConstructor = WebSocket as unknown as typeof globalThis.WebSocket

/** Create a fresh Prisma client with Pool. Call pool.end() when done (required for Vercel serverless). */
export async function withPrisma<T>(
  fn: (prisma: PrismaClient) => Promise<T>
): Promise<T> {
  const connectionString = process.env.DATABASE_URL
  if (!connectionString) {
    throw new Error(
      'DATABASE_URL is not set. On Vercel: add it in Project Settings → Environment Variables, then redeploy.'
    )
  }
  const pool = new Pool({ connectionString })
  const adapter = new PrismaNeon(pool)
  const prisma = new PrismaClient({ adapter, log: ['error'] })
  try {
    return await fn(prisma)
  } finally {
    await pool.end()
  }
}
