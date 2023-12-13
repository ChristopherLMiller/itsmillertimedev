-- AlterTable
ALTER TABLE "User" ALTER COLUMN "meta" DROP NOT NULL;

-- CreateIndex
CREATE INDEX "Manufacturer_id_slug_idx" ON "Manufacturer"("id", "slug");
