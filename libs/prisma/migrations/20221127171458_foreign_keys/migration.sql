-- DropForeignKey
ALTER TABLE "GalleryCategory" DROP CONSTRAINT "GalleryCategory_galleryId_fkey";

-- DropForeignKey
ALTER TABLE "GalleryTag" DROP CONSTRAINT "GalleryTag_galleryId_fkey";

-- DropForeignKey
ALTER TABLE "MinecraftRule" DROP CONSTRAINT "MinecraftRule_categoryId_fkey";

-- DropForeignKey
ALTER TABLE "Post" DROP CONSTRAINT "Post_imagePublic_id_fkey";

-- DropForeignKey
ALTER TABLE "Post" DROP CONSTRAINT "Post_postCategoryId_fkey";

-- DropForeignKey
ALTER TABLE "_GalleryToGalleryImage" DROP CONSTRAINT "_GalleryToGalleryImage_A_fkey";

-- DropForeignKey
ALTER TABLE "_GalleryToGalleryImage" DROP CONSTRAINT "_GalleryToGalleryImage_B_fkey";

-- DropForeignKey
ALTER TABLE "_PostToPostTag" DROP CONSTRAINT "_PostToPostTag_A_fkey";

-- DropForeignKey
ALTER TABLE "_PostToPostTag" DROP CONSTRAINT "_PostToPostTag_B_fkey";
