import type { VercelRequest, VercelResponse } from '@vercel/node'

export default async function handler(_req: VercelRequest, res: VercelResponse) {
  res.setHeader('Access-Control-Allow-Origin', '*')

  const checks: Record<string, string> = {}

  // 1. Check DATABASE_URL is set
  checks.database_url = process.env.DATABASE_URL ? '✅ set' : '❌ NOT SET'
  checks.jwt_secret = process.env.JWT_SECRET ? '✅ set' : '⚠️ not set (using default)'
  checks.node_env = process.env.NODE_ENV ?? 'undefined'

  // 2. Try to import and use Prisma
  try {
    const { prisma } = await import('./lib/prisma')
    checks.prisma_import = '✅ imported'
    try {
      await prisma.$queryRaw`SELECT 1`
      checks.db_connect = '✅ connected'
    } catch (e: unknown) {
      checks.db_connect = `❌ ${e instanceof Error ? e.message : String(e)}`
    }
  } catch (e: unknown) {
    checks.prisma_import = `❌ ${e instanceof Error ? e.message : String(e)}`
  }

  const allOk = Object.values(checks).every(v => v.startsWith('✅'))
  return res.status(allOk ? 200 : 500).json(checks)
}

