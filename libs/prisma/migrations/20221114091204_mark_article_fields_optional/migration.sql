/*
  Warnings:

  - You are about to drop the `Article` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `ArticleTag` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_ArticleToArticleTag` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `updatedAt` to the `Image` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Post" DROP CONSTRAINT "Post_imagePublic_id_fkey";

-- DropForeignKey
ALTER TABLE "_ArticleToArticleTag" DROP CONSTRAINT "_ArticleToArticleTag_A_fkey";

-- DropForeignKey
ALTER TABLE "_ArticleToArticleTag" DROP CONSTRAINT "_ArticleToArticleTag_B_fkey";

-- AlterTable
ALTER TABLE "Image" ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "Post" ALTER COLUMN "updatedAt" DROP DEFAULT,
ALTER COLUMN "publishedAt" DROP NOT NULL,
ALTER COLUMN "imagePublic_id" DROP NOT NULL;

-- DropTable
DROP TABLE "Article";

-- DropTable
DROP TABLE "ArticleTag";

-- DropTable
DROP TABLE "_ArticleToArticleTag";

-- AddForeignKey
ALTER TABLE "Post" ADD CONSTRAINT "Post_imagePublic_id_fkey" FOREIGN KEY ("imagePublic_id") REFERENCES "Image"("public_id") ON DELETE SET NULL ON UPDATE CASCADE;
