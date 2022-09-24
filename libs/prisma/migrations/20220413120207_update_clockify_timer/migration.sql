/*
  Warnings:

  - The primary key for the `ClockifyTimer` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `ClockifyTimer` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[projectId]` on the table `ClockifyTimer` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `startTime` to the `ClockifyTimer` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "ClockifyTimer" DROP CONSTRAINT "ClockifyTimer_pkey",
DROP COLUMN "id",
ADD COLUMN     "startTime" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "ClockifyTimer_projectId_key" ON "ClockifyTimer"("projectId");
