import { PrismaClient } from '@prisma/client'
import { PrismaNeon } from '@prisma/adapter-neon'
import { neon } from '@neondatabase/serverless'

function createPrismaClient() {
  const connectionString = process.env.DATABASE_URL!
  const sql    = neon(connectionString)
  const adapter = new PrismaNeon(sql)
  return new PrismaClient({ adapter, log: ['error'] })
}

// Cache the client so warm serverless instances reuse the same connection
const globalForPrisma = globalThis as unknown as { prisma?: PrismaClient }

export const prisma =
  globalForPrisma.prisma ?? createPrismaClient()

globalForPrisma.prisma = prisma
