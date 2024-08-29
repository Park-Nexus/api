/*
  Warnings:

  - You are about to drop the column `imageUrls` on the `Vehicle` table. All the data in the column will be lost.
  - Added the required column `imageUrl` to the `Vehicle` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "ParkingLot" ALTER COLUMN "approvedAt" DROP NOT NULL;

-- AlterTable
ALTER TABLE "Vehicle" DROP COLUMN "imageUrls",
ADD COLUMN     "imageUrl" TEXT NOT NULL;
