-- AlterTable
ALTER TABLE "Page" ADD COLUMN     "content" TEXT;

-- CreateIndex
CREATE INDEX "Page_id_idx" ON "Page"("id");
