-- CreateTable
CREATE TABLE "ImageExif" (
    "id" SERIAL NOT NULL,
    "url" TEXT NOT NULL,
    "exif" JSONB NOT NULL,

    CONSTRAINT "ImageExif_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "ImageExif_url_key" ON "ImageExif"("url");
