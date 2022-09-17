/*
  Warnings:

  - The primary key for the `ClockifyTimer` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- AlterTable
ALTER TABLE "ClockifyTimer" DROP CONSTRAINT "ClockifyTimer_pkey",
ADD COLUMN     "id" SERIAL NOT NULL,
ADD CONSTRAINT "ClockifyTimer_pkey" PRIMARY KEY ("id");
