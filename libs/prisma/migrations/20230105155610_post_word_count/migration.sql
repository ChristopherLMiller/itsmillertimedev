-- AlterTable
ALTER TABLE "Post" ADD COLUMN     "wordCount" INTEGER NOT NULL DEFAULT 0;

-- CreateIndex
CREATE INDEX "PostCategory_id_slug_idx" ON "PostCategory"("id", "slug");

-- CreateIndex
CREATE INDEX "PostTag_id_slug_idx" ON "PostTag"("id", "slug");
