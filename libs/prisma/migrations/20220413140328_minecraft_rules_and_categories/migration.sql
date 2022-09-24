-- CreateTable
CREATE TABLE "MinecraftRuleCategory" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "icon" TEXT NOT NULL,

    CONSTRAINT "MinecraftRuleCategory_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "MinecraftRule" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "categoryId" INTEGER NOT NULL,

    CONSTRAINT "MinecraftRule_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "MinecraftRuleCategory_name_key" ON "MinecraftRuleCategory"("name");

-- AddForeignKey
ALTER TABLE "MinecraftRule" ADD CONSTRAINT "MinecraftRule_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "MinecraftRuleCategory"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
