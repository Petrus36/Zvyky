import { PrismaClient } from '@prisma/client'
import bcrypt from 'bcryptjs'

const prisma = new PrismaClient()

const DEFAULT_PRICES: Record<string, number> = {
  malacky_B_standard:    1111,
  malacky_B_friend:      1061,
  malacky_B_student:     1050,
  malacky_A1:             999,
  malacky_A2:             999,
  malacky_kondicne:        45,
  malacky_osobitny:      1555,
  bratislava_B_standard: 1111,
  bratislava_B_welcome:   999,
  bratislava_kondicne:     45,
  bratislava_osobitny:   1555,
}

async function main() {
  console.log('🌱 Seeding database...')

  // ── Admin user ──────────────────────────────────────────────────────────────
  const hash = await bcrypt.hash('zvyky2025', 10)
  await prisma.admin.upsert({
    where:  { username: 'admin' },
    update: {},
    create: { username: 'admin', password: hash },
  })
  console.log('✅ Admin user: admin / zvyky2025')

  // ── Default prices ──────────────────────────────────────────────────────────
  for (const [key, price] of Object.entries(DEFAULT_PRICES)) {
    await prisma.coursePrice.upsert({
      where:  { key },
      update: {},
      create: { key, price },
    })
  }
  console.log('✅ Default prices seeded')

  // ── Sample course dates ─────────────────────────────────────────────────────
  const sampleDates = [
    { location: 'Malacky',    courseType: 'B',  startDate: '2025-04-07', description: 'Jarný kurz B – Malacky',   isActive: true  },
    { location: 'Malacky',    courseType: 'A1', startDate: '2025-04-14', description: 'Kurz A1 – Malacky',         isActive: true  },
    { location: 'Malacky',    courseType: 'A2', startDate: '2025-05-05', description: 'Kurz A2 – Malacky',         isActive: true  },
    { location: 'Bratislava', courseType: 'B',  startDate: '2025-04-21', description: 'Jarný kurz B – Bratislava', isActive: true  },
    { location: 'Malacky',    courseType: 'B',  startDate: '2025-06-02', description: 'Letný kurz B – Malacky',    isActive: false },
  ]

  // Only seed dates if none exist yet
  const existingCount = await prisma.courseDate.count()
  if (existingCount === 0) {
    for (const d of sampleDates) {
      await prisma.courseDate.create({ data: d })
    }
    console.log('✅ Sample course dates seeded')
  } else {
    console.log('ℹ️  Course dates already exist, skipping')
  }

  console.log('🎉 Seed complete!')
}

main()
  .catch(err => {
    console.error('❌ Seed error:', err)
    process.exit(1)
  })
  .finally(() => prisma.$disconnect())

