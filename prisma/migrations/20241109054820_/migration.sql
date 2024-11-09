/*
  Warnings:

  - You are about to drop the column `deleteAt` on the `ParkingSpot` table. All the data in the column will be lost.
  - You are about to drop the column `parkingRecordId` on the `PaymentRecord` table. All the data in the column will be lost.
  - You are about to drop the `ParkingRecord` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[reservationId]` on the table `PaymentRecord` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `reservationId` to the `PaymentRecord` table without a default value. This is not possible if the table is not empty.
  - Added the required column `status` to the `PaymentRecord` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "PAYMENT_RECORD__STATUS_ALIAS" AS ENUM ('AWAITING', 'PAID');

-- DropForeignKey
ALTER TABLE "ParkingRecord" DROP CONSTRAINT "ParkingRecord_parkingSpotId_fkey";

-- DropForeignKey
ALTER TABLE "ParkingRecord" DROP CONSTRAINT "ParkingRecord_reservationId_fkey";

-- DropForeignKey
ALTER TABLE "ParkingRecord" DROP CONSTRAINT "ParkingRecord_vehicleId_fkey";

-- DropForeignKey
ALTER TABLE "PaymentRecord" DROP CONSTRAINT "PaymentRecord_parkingRecordId_fkey";

-- DropIndex
DROP INDEX "PaymentRecord_parkingRecordId_key";

-- AlterTable
ALTER TABLE "ParkingSpot" DROP COLUMN "deleteAt",
ADD COLUMN     "deletedAt" TIMESTAMP(3);

-- AlterTable
ALTER TABLE "PaymentRecord" DROP COLUMN "parkingRecordId",
ADD COLUMN     "reservationId" INTEGER NOT NULL,
ADD COLUMN     "status" "PAYMENT_RECORD__STATUS_ALIAS" NOT NULL;

-- DropTable
DROP TABLE "ParkingRecord";

-- DropEnum
DROP TYPE "PARKING_RECORD__STATUS_ALIAS";

-- CreateIndex
CREATE UNIQUE INDEX "PaymentRecord_reservationId_key" ON "PaymentRecord"("reservationId");

-- AddForeignKey
ALTER TABLE "PaymentRecord" ADD CONSTRAINT "PaymentRecord_reservationId_fkey" FOREIGN KEY ("reservationId") REFERENCES "Reservation"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
