/*
  Warnings:

  - You are about to drop the `ImageBase64` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `ImageExif` table. If the table is not empty, all the data it contains will be lost.

*/
-- AlterTable
ALTER TABLE "Image" ADD COLUMN     "exif" JSONB;

-- DropTable
DROP TABLE "ImageBase64";

-- DropTable
DROP TABLE "ImageExif";
