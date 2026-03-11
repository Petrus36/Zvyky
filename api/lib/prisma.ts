import { PrismaClient } from '@prisma/client'

// Vercel serverless functions are stateless, but the Node.js process can be
// reused between warm invocations. This pattern prevents creating a new
// PrismaClient on every hot-reload in development and reuses the existing
// client in warm serverless invocations in production.
const globalForPrisma = globalThis as unknown as { prisma?: PrismaClient }

export const prisma =
  globalForPrisma.prisma ??
  new PrismaClient({
    log: process.env.NODE_ENV === 'development' ? ['error', 'warn'] : ['error'],
  })

// Only cache the client outside of production to avoid module hot-reload
// creating dozens of connections during development.
if (process.env.NODE_ENV !== 'production') {
  globalForPrisma.prisma = prisma
}
