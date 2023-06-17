-- AlterTable
ALTER TABLE "Image" ADD COLUMN     "modelId" INTEGER;

-- CreateTable
CREATE TABLE "Manufacturer" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "slug" TEXT NOT NULL,

    CONSTRAINT "Manufacturer_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Model" (
    "id" SERIAL NOT NULL,
    "slug" TEXT NOT NULL,
    "completed" BOOLEAN NOT NULL DEFAULT true,
    "visibility" "Visibility" NOT NULL,
    "metaTitle" TEXT NOT NULL,
    "summary" TEXT NOT NULL,
    "featuredImage" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "clockifyProjectId" TEXT,
    "contents" TEXT NOT NULL,
    "yearReleased" INTEGER NOT NULL,
    "completedAt" TIMESTAMP(3) NOT NULL,
    "imagePublic_id" TEXT NOT NULL,
    "manufacturerId" INTEGER NOT NULL,
    "scaleId" INTEGER NOT NULL,

    CONSTRAINT "Model_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ModelTags" (
    "id" SERIAL NOT NULL,
    "slug" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "modelId" INTEGER,

    CONSTRAINT "ModelTags_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Scale" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "slug" TEXT NOT NULL,

    CONSTRAINT "Scale_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Manufacturer_slug_key" ON "Manufacturer"("slug");

-- CreateIndex
CREATE UNIQUE INDEX "Model_slug_key" ON "Model"("slug");

-- CreateIndex
CREATE INDEX "Model_id_slug_idx" ON "Model"("id", "slug");

-- CreateIndex
CREATE UNIQUE INDEX "ModelTags_slug_key" ON "ModelTags"("slug");

-- CreateIndex
CREATE INDEX "ModelTags_id_slug_idx" ON "ModelTags"("id", "slug");

-- CreateIndex
CREATE UNIQUE INDEX "Scale_slug_key" ON "Scale"("slug");

-- CreateIndex
CREATE INDEX "Scale_id_slug_idx" ON "Scale"("id", "slug");

-- AddForeignKey
ALTER TABLE "Model" ADD CONSTRAINT "Model_manufacturerId_fkey" FOREIGN KEY ("manufacturerId") REFERENCES "Manufacturer"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Model" ADD CONSTRAINT "Model_scaleId_fkey" FOREIGN KEY ("scaleId") REFERENCES "Scale"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ModelTags" ADD CONSTRAINT "ModelTags_modelId_fkey" FOREIGN KEY ("modelId") REFERENCES "Model"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Image" ADD CONSTRAINT "Image_modelId_fkey" FOREIGN KEY ("modelId") REFERENCES "Model"("id") ON DELETE SET NULL ON UPDATE CASCADE;
