/*
  Warnings:

  - Added the required column `name` to the `ParkingSpot` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "ParkingSpot" ADD COLUMN     "name" TEXT NOT NULL;
