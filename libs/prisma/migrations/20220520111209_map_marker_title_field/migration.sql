/*
  Warnings:

  - Added the required column `title` to the `Marker` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Marker" ADD COLUMN     "title" TEXT NOT NULL;
