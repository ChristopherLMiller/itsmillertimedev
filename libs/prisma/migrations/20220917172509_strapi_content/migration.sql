-- CreateEnum
CREATE TYPE "PublicationStatus" AS ENUM ('PUBLISHED', 'DRAFT');

-- CreateEnum
CREATE TYPE "Visibility" AS ENUM ('PUBLIC', 'PROTECTED', 'PRIVATE');

-- AlterTable
ALTER TABLE "Marker" ALTER COLUMN "siteURL" DROP NOT NULL,
ALTER COLUMN "galleryURL" DROP NOT NULL;

-- CreateTable
CREATE TABLE "ArticleTag" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "articleId" INTEGER,

    CONSTRAINT "ArticleTag_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Article" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "title" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "seo_title" TEXT NOT NULL,
    "seo_excerpt" TEXT NOT NULL,
    "featured_image" TEXT NOT NULL,
    "published" "PublicationStatus" NOT NULL DEFAULT 'DRAFT',
    "publishedAt" TIMESTAMP(3),

    CONSTRAINT "Article_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Gallery" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "title" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "meta" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "visibility" "Visibility" NOT NULL DEFAULT 'PUBLIC',
    "isNsfw" BOOLEAN NOT NULL DEFAULT false,
    "image" TEXT NOT NULL,

    CONSTRAINT "Gallery_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "GalleryCategory" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "galleryId" INTEGER,

    CONSTRAINT "GalleryCategory_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "GalleryImage" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "title" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "published" "PublicationStatus" NOT NULL,
    "publishedAt" TIMESTAMP(3) NOT NULL,
    "visibility" "Visibility",
    "url" TEXT NOT NULL,

    CONSTRAINT "GalleryImage_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "GalleryTag" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "galleryId" INTEGER,

    CONSTRAINT "GalleryTag_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_GalleryToGalleryImage" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "ArticleTag_slug_key" ON "ArticleTag"("slug");

-- CreateIndex
CREATE INDEX "ArticleTag_id_slug_idx" ON "ArticleTag"("id", "slug");

-- CreateIndex
CREATE UNIQUE INDEX "Article_slug_key" ON "Article"("slug");

-- CreateIndex
CREATE UNIQUE INDEX "Gallery_slug_key" ON "Gallery"("slug");

-- CreateIndex
CREATE INDEX "Gallery_id_slug_idx" ON "Gallery"("id", "slug");

-- CreateIndex
CREATE UNIQUE INDEX "GalleryCategory_slug_key" ON "GalleryCategory"("slug");

-- CreateIndex
CREATE INDEX "GalleryCategory_id_slug_idx" ON "GalleryCategory"("id", "slug");

-- CreateIndex
CREATE UNIQUE INDEX "GalleryImage_slug_key" ON "GalleryImage"("slug");

-- CreateIndex
CREATE INDEX "GalleryImage_id_slug_idx" ON "GalleryImage"("id", "slug");

-- CreateIndex
CREATE UNIQUE INDEX "GalleryTag_slug_key" ON "GalleryTag"("slug");

-- CreateIndex
CREATE INDEX "GalleryTag_id_slug_idx" ON "GalleryTag"("id", "slug");

-- CreateIndex
CREATE UNIQUE INDEX "_GalleryToGalleryImage_AB_unique" ON "_GalleryToGalleryImage"("A", "B");

-- CreateIndex
CREATE INDEX "_GalleryToGalleryImage_B_index" ON "_GalleryToGalleryImage"("B");

-- CreateIndex
CREATE INDEX "ClockifyTimer_id_idx" ON "ClockifyTimer"("id");

-- CreateIndex
CREATE INDEX "ImageExif_id_idx" ON "ImageExif"("id");

-- CreateIndex
CREATE INDEX "Marker_id_idx" ON "Marker"("id");

-- CreateIndex
CREATE INDEX "MinecraftRule_id_idx" ON "MinecraftRule"("id");

-- CreateIndex
CREATE INDEX "MinecraftRuleCategory_id_idx" ON "MinecraftRuleCategory"("id");

-- AddForeignKey
ALTER TABLE "ArticleTag" ADD CONSTRAINT "ArticleTag_articleId_fkey" FOREIGN KEY ("articleId") REFERENCES "Article"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "GalleryCategory" ADD CONSTRAINT "GalleryCategory_galleryId_fkey" FOREIGN KEY ("galleryId") REFERENCES "Gallery"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "GalleryTag" ADD CONSTRAINT "GalleryTag_galleryId_fkey" FOREIGN KEY ("galleryId") REFERENCES "Gallery"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_GalleryToGalleryImage" ADD CONSTRAINT "_GalleryToGalleryImage_A_fkey" FOREIGN KEY ("A") REFERENCES "Gallery"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_GalleryToGalleryImage" ADD CONSTRAINT "_GalleryToGalleryImage_B_fkey" FOREIGN KEY ("B") REFERENCES "GalleryImage"("id") ON DELETE CASCADE ON UPDATE CASCADE;
