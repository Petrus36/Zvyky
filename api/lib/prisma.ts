import { PrismaClient } from '@prisma/client'
import { PrismaNeon } from '@prisma/adapter-neon'
import { Pool, neonConfig } from '@neondatabase/serverless'

// Required for Node.js (Vercel serverless uses Node.js, not Edge)
import ws from 'ws'
neonConfig.webSocketConstructor = ws

function createPrismaClient() {
  const connectionString = process.env.DATABASE_URL
  if (!connectionString) {
    throw new Error(
      'DATABASE_URL is not set. On Vercel: add it in Project Settings → Environment Variables, then redeploy.'
    )
  }
  const pool    = new Pool({ connectionString })
  const adapter = new PrismaNeon(pool)
  return new PrismaClient({ adapter, log: ['error'] })
}

const globalForPrisma = globalThis as unknown as { prisma?: PrismaClient }

export const prisma =
  globalForPrisma.prisma ?? createPrismaClient()

globalForPrisma.prisma = prisma
