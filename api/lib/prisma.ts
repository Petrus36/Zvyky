import { PrismaClient } from '@prisma/client'
import { PrismaNeon } from '@prisma/adapter-neon'
import { Pool } from '@neondatabase/serverless'

function createPrismaClient() {
  const pool    = new Pool({ connectionString: process.env.DATABASE_URL! })
  const adapter = new PrismaNeon(pool)
  return new PrismaClient({ adapter, log: ['error'] })
}

const globalForPrisma = globalThis as unknown as { prisma?: PrismaClient }

export const prisma =
  globalForPrisma.prisma ?? createPrismaClient()

globalForPrisma.prisma = prisma
