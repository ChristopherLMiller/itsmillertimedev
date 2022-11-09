/*
  Warnings:

  - You are about to drop the column `signature` on the `Image` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[title]` on the table `PostCategory` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[title]` on the table `PostTag` will be added. If there are existing duplicate values, this will fail.
  - Changed the type of `bytes` on the `Image` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Added the required column `slug` to the `PostCategory` table without a default value. This is not possible if the table is not empty.
  - Added the required column `title` to the `PostCategory` table without a default value. This is not possible if the table is not empty.
  - Added the required column `slug` to the `PostTag` table without a default value. This is not possible if the table is not empty.
  - Added the required column `title` to the `PostTag` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Image" DROP COLUMN "signature",
DROP COLUMN "bytes",
ADD COLUMN     "bytes" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "PostCategory" ADD COLUMN     "slug" TEXT NOT NULL,
ADD COLUMN     "title" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "PostTag" ADD COLUMN     "slug" TEXT NOT NULL,
ADD COLUMN     "title" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "PostCategory_title_key" ON "PostCategory"("title");

-- CreateIndex
CREATE UNIQUE INDEX "PostTag_title_key" ON "PostTag"("title");
