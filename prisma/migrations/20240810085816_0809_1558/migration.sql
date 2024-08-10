/*
  Warnings:

  - You are about to drop the column `userId` on the `ParkingLot` table. All the data in the column will be lost.
  - You are about to drop the column `userId` on the `ParkingRecord` table. All the data in the column will be lost.
  - Added the required column `updatedAt` to the `ParkingLotService` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `ParkingSpot` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "ParkingLot" DROP CONSTRAINT "ParkingLot_userId_fkey";

-- AlterTable
ALTER TABLE "ParkingLot" DROP COLUMN "userId",
ALTER COLUMN "ownerId" DROP NOT NULL;

-- AlterTable
ALTER TABLE "ParkingLotReview" ADD COLUMN     "mediaUrls" TEXT[];

-- AlterTable
ALTER TABLE "ParkingLotService" ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "mediaUrls" TEXT[],
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "ParkingRecord" DROP COLUMN "userId";

-- AlterTable
ALTER TABLE "ParkingSpot" ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL;

-- AddForeignKey
ALTER TABLE "ParkingLot" ADD CONSTRAINT "ParkingLot_ownerId_fkey" FOREIGN KEY ("ownerId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;
