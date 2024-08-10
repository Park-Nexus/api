/*
  Warnings:

  - You are about to drop the column `imageUrls` on the `ParkingLot` table. All the data in the column will be lost.
  - You are about to drop the column `spotId` on the `ParkingRecord` table. All the data in the column will be lost.
  - You are about to drop the column `plotId` on the `PaymentRecord` table. All the data in the column will be lost.
  - You are about to drop the column `spotId` on the `Reservation` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[reservationId]` on the table `ParkingRecord` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[reservationId]` on the table `PaymentRecord` will be added. If there are existing duplicate values, this will fail.
  - Changed the type of `status` on the `ParkingLot` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Added the required column `parkingSpotId` to the `ParkingRecord` table without a default value. This is not possible if the table is not empty.
  - Made the column `reservationId` on table `ParkingRecord` required. This step will fail if there are existing NULL values in that column.
  - Changed the type of `status` on the `ParkingRecord` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Added the required column `vehicleType` to the `ParkingSpot` table without a default value. This is not possible if the table is not empty.
  - Made the column `reservationId` on table `PaymentRecord` required. This step will fail if there are existing NULL values in that column.
  - Added the required column `parkingSpotId` to the `Reservation` table without a default value. This is not possible if the table is not empty.
  - Changed the type of `status` on the `Reservation` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- CreateEnum
CREATE TYPE "ACCOUNT__ROLE_ALIAS" AS ENUM ('ADMIN', 'USER', 'PLOT_OWNER');

-- CreateEnum
CREATE TYPE "USER__GENDER_ALIAS" AS ENUM ('MALE', 'FEMALE', 'OTHER');

-- DropForeignKey
ALTER TABLE "ParkingRecord" DROP CONSTRAINT "ParkingRecord_reservationId_fkey";

-- DropForeignKey
ALTER TABLE "ParkingRecord" DROP CONSTRAINT "ParkingRecord_spotId_fkey";

-- DropForeignKey
ALTER TABLE "PaymentRecord" DROP CONSTRAINT "PaymentRecord_reservationId_fkey";

-- DropForeignKey
ALTER TABLE "Reservation" DROP CONSTRAINT "Reservation_spotId_fkey";

-- AlterTable
ALTER TABLE "ParkingLot" DROP COLUMN "imageUrls",
ADD COLUMN     "mediaUrls" TEXT[],
ADD COLUMN     "userId" TEXT,
DROP COLUMN "status",
ADD COLUMN     "status" "PARKING_LOT__STATUS_ALIAS" NOT NULL;

-- AlterTable
ALTER TABLE "ParkingLotService" ADD COLUMN     "vehicleTypes" "VEHICLE__TYPE_ALIAS"[];

-- AlterTable
ALTER TABLE "ParkingRecord" DROP COLUMN "spotId",
ADD COLUMN     "parkingSpotId" TEXT NOT NULL,
ALTER COLUMN "reservationId" SET NOT NULL,
DROP COLUMN "status",
ADD COLUMN     "status" "PARKING_RECORD__STATUS_ALIAS" NOT NULL;

-- AlterTable
ALTER TABLE "ParkingSpot" ADD COLUMN     "vehicleType" "VEHICLE__TYPE_ALIAS" NOT NULL;

-- AlterTable
ALTER TABLE "PaymentRecord" DROP COLUMN "plotId",
ALTER COLUMN "reservationId" SET NOT NULL;

-- AlterTable
ALTER TABLE "Reservation" DROP COLUMN "spotId",
ADD COLUMN     "parkingSpotId" TEXT NOT NULL,
DROP COLUMN "status",
ADD COLUMN     "status" "RESERVATION__STATUS_ALIAS" NOT NULL;

-- CreateTable
CREATE TABLE "Account" (
    "id" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "role" "ACCOUNT__ROLE_ALIAS" NOT NULL,

    CONSTRAINT "Account_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "firstName" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "adderss" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "avatarUrl" TEXT,
    "gender" "USER__GENDER_ALIAS" NOT NULL,
    "accountId" TEXT NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "UserNotification" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "message" TEXT NOT NULL,
    "read" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "userId" TEXT NOT NULL,

    CONSTRAINT "UserNotification_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ParkingLotReview" (
    "id" TEXT NOT NULL,
    "rating" INTEGER NOT NULL,
    "comment" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "parkingLotId" TEXT NOT NULL,
    "userId" TEXT NOT NULL,

    CONSTRAINT "ParkingLotReview_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Account_email_key" ON "Account"("email");

-- CreateIndex
CREATE UNIQUE INDEX "User_accountId_key" ON "User"("accountId");

-- CreateIndex
CREATE UNIQUE INDEX "ParkingRecord_reservationId_key" ON "ParkingRecord"("reservationId");

-- CreateIndex
CREATE UNIQUE INDEX "PaymentRecord_reservationId_key" ON "PaymentRecord"("reservationId");

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_accountId_fkey" FOREIGN KEY ("accountId") REFERENCES "Account"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserNotification" ADD CONSTRAINT "UserNotification_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Vehicle" ADD CONSTRAINT "Vehicle_ownerId_fkey" FOREIGN KEY ("ownerId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ParkingLot" ADD CONSTRAINT "ParkingLot_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ParkingLotReview" ADD CONSTRAINT "ParkingLotReview_parkingLotId_fkey" FOREIGN KEY ("parkingLotId") REFERENCES "ParkingLot"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ParkingLotReview" ADD CONSTRAINT "ParkingLotReview_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Reservation" ADD CONSTRAINT "Reservation_parkingSpotId_fkey" FOREIGN KEY ("parkingSpotId") REFERENCES "ParkingSpot"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Reservation" ADD CONSTRAINT "Reservation_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ParkingRecord" ADD CONSTRAINT "ParkingRecord_parkingSpotId_fkey" FOREIGN KEY ("parkingSpotId") REFERENCES "ParkingSpot"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ParkingRecord" ADD CONSTRAINT "ParkingRecord_reservationId_fkey" FOREIGN KEY ("reservationId") REFERENCES "Reservation"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PaymentRecord" ADD CONSTRAINT "PaymentRecord_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PaymentRecord" ADD CONSTRAINT "PaymentRecord_reservationId_fkey" FOREIGN KEY ("reservationId") REFERENCES "Reservation"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
