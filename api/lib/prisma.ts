import { PrismaClient } from '@prisma/client'
import { PrismaNeon } from '@prisma/adapter-neon'
import { Pool, neonConfig } from '@neondatabase/serverless'
import ws from 'ws'

// `ws` is what Neon documents for Node/serverless; undici's WebSocket often breaks when Vercel bundles the function
neonConfig.webSocketConstructor = ws as unknown as typeof globalThis.WebSocket

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
    await prisma.$disconnect()
    await pool.end()
  }
}
