import { PrismaClient } from '@prisma/client'

// Cache the Prisma client on globalThis so that:
// - In development: hot-reload doesn't create dozens of connections
// - In production serverless: warm function instances reuse the same client
const globalForPrisma = globalThis as unknown as { prisma?: PrismaClient }

export const prisma =
  globalForPrisma.prisma ??
  new PrismaClient({
    log: ['error'],
  })

globalForPrisma.prisma = prisma
