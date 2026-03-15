-- CreateTable
CREATE TABLE "Admin" (
    "id" TEXT NOT NULL,
    "username" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Admin_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CoursePrice" (
    "key" TEXT NOT NULL,
    "price" INTEGER NOT NULL,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "CoursePrice_pkey" PRIMARY KEY ("key")
);

-- CreateTable
CREATE TABLE "CourseDate" (
    "id" TEXT NOT NULL,
    "location" TEXT NOT NULL,
    "courseType" TEXT NOT NULL,
    "startDate" TEXT NOT NULL,
    "description" TEXT NOT NULL DEFAULT '',
    "isActive" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "CourseDate_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Registration" (
    "id" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "location" TEXT NOT NULL,
    "courseType" TEXT NOT NULL,
    "hasFirstAid" BOOLEAN NOT NULL DEFAULT false,
    "firstAidDate" TEXT,
    "preferredStartDate" TEXT,
    "notes" TEXT,
    "status" TEXT NOT NULL DEFAULT 'pending',
    "meno" TEXT NOT NULL,
    "priezvisko" TEXT NOT NULL,
    "rodnePriezvisko" TEXT NOT NULL,
    "datumNarodenia" TEXT NOT NULL,
    "miestoNarodenia" TEXT NOT NULL,
    "rodneCislo" TEXT NOT NULL,
    "ulica" TEXT NOT NULL,
    "mesto" TEXT NOT NULL,
    "psc" TEXT NOT NULL,
    "drzitelSkupiny" TEXT NOT NULL DEFAULT '',
    "drzitelPreukazu" TEXT NOT NULL DEFAULT '',
    "ziadamSkupiny" TEXT NOT NULL,
    "zakladNa" TEXT NOT NULL,
    "podpisVMeste" TEXT NOT NULL,
    "podpisDna" TEXT NOT NULL,
    "isMinor" BOOLEAN NOT NULL DEFAULT false,
    "zakonnyZastupcaMeno" TEXT,
    "zakonnyZastupcaPriezvisko" TEXT,
    "zakonnyZastupcaRodneCislo" TEXT,
    "zakonnyZastupcaSkupina" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Registration_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Admin_username_key" ON "Admin"("username");


