-- CreateTable
CREATE TABLE "ClockifyTimer" (
    "id" SERIAL NOT NULL,
    "projectId" TEXT NOT NULL,

    CONSTRAINT "ClockifyTimer_pkey" PRIMARY KEY ("id")
);
