-- CreateTable
CREATE TABLE "ImageBase64" (
    "public_id" TEXT NOT NULL,
    "encoded" TEXT NOT NULL,

    CONSTRAINT "ImageBase64_pkey" PRIMARY KEY ("public_id")
);
