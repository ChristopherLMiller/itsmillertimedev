/*
  Warnings:

  - A unique constraint covering the columns `[slug]` on the table `PostCategory` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[slug]` on the table `PostTag` will be added. If there are existing duplicate values, this will fail.

*/
-- DropIndex
DROP INDEX "PostCategory_title_key";

-- DropIndex
DROP INDEX "PostTag_title_key";

-- CreateIndex
CREATE UNIQUE INDEX "PostCategory_slug_key" ON "PostCategory"("slug");

-- CreateIndex
CREATE UNIQUE INDEX "PostTag_slug_key" ON "PostTag"("slug");
