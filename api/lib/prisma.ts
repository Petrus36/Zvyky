import { PrismaClient } from '@prisma/client'

/** Standard Prisma + TCP to Neon (pooler URL). Avoids Neon serverless/WebSocket stack, which often crashes when Vercel bundles `api/*.ts`. */
export async function withPrisma<T>(
  fn: (prisma: PrismaClient) => Promise<T>
): Promise<T> {
  const connectionString = process.env.DATABASE_URL
  if (!connectionString) {
    throw new Error(
      'DATABASE_URL is not set. On Vercel: add it in Project Settings → Environment Variables, then redeploy.'
    )
  }
  const prisma = new PrismaClient({ log: ['error'] })
  try {
    return await fn(prisma)
  } finally {
    await prisma.$disconnect()
  }
}
