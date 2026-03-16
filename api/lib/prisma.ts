import { PrismaClient } from '@prisma/client'

const globalForPrisma = globalThis as unknown as { prisma?: PrismaClient }

export const prisma =
  globalForPrisma.prisma ?? new PrismaClient({
    log: ['error'],
    datasourceUrl: process.env.DATABASE_URL_UNPOOLED ?? process.env.DATABASE_URL,
  })

globalForPrisma.prisma = prisma
