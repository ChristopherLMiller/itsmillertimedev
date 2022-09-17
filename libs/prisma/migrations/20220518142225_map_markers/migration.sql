-- CreateTable
CREATE TABLE "Marker" (
    "id" SERIAL NOT NULL,
    "lat" DECIMAL(65,30) NOT NULL,
    "lon" DECIMAL(65,30) NOT NULL,
    "siteURL" TEXT NOT NULL,
    "galleryURL" TEXT NOT NULL,

    CONSTRAINT "Marker_pkey" PRIMARY KEY ("id")
);
