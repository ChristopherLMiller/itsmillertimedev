/*
  Warnings:

  - The primary key for the `Image` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- AlterTable
ALTER TABLE "Image" DROP CONSTRAINT "Image_pkey",
ADD CONSTRAINT "Image_pkey" PRIMARY KEY ("public_id");

-- CreateTable
CREATE TABLE "Page" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "summary" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "visibility" "PublicationStatus" NOT NULL,
    "published" BOOLEAN NOT NULL,
    "publishedAt" TIMESTAMP(3),
    "imagePublic_id" TEXT,
    "isPublic" BOOLEAN NOT NULL,

    CONSTRAINT "Page_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Page_slug_key" ON "Page"("slug");

-- AddForeignKey
ALTER TABLE "Page" ADD CONSTRAINT "Page_imagePublic_id_fkey" FOREIGN KEY ("imagePublic_id") REFERENCES "Image"("public_id") ON DELETE SET NULL ON UPDATE CASCADE;
