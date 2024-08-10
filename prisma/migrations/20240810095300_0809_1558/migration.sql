/*
  Warnings:

  - The values [CONFIRMED,CANCELLED] on the enum `RESERVATION__STATUS_ALIAS` will be removed. If these variants are still used in the database, this will fail.
  - The primary key for the `Account` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `id` column on the `Account` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The primary key for the `ParkingLot` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `id` column on the `ParkingLot` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The primary key for the `ParkingLotReview` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `id` column on the `ParkingLotReview` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The primary key for the `ParkingLotService` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `id` column on the `ParkingLotService` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The primary key for the `ParkingRecord` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `id` column on the `ParkingRecord` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `vehicleId` column on the `ParkingRecord` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `reservationId` column on the `ParkingRecord` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `parkingSpotId` column on the `ParkingRecord` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The primary key for the `ParkingSpot` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `id` column on the `ParkingSpot` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The primary key for the `PaymentRecord` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `reservationId` on the `PaymentRecord` table. All the data in the column will be lost.
  - You are about to drop the column `status` on the `PaymentRecord` table. All the data in the column will be lost.
  - The `id` column on the `PaymentRecord` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The primary key for the `Reservation` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `checkOutAt` on the `Reservation` table. All the data in the column will be lost.
  - You are about to drop the column `totalPrice` on the `Reservation` table. All the data in the column will be lost.
  - You are about to drop the column `userId` on the `Reservation` table. All the data in the column will be lost.
  - The `id` column on the `Reservation` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The primary key for the `User` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `id` column on the `User` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The primary key for the `UserNotification` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `id` column on the `UserNotification` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The primary key for the `Vehicle` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `id` column on the `Vehicle` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - A unique constraint covering the columns `[parkingRecordId]` on the table `PaymentRecord` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `ownerId` to the `ParkingLot` table without a default value. This is not possible if the table is not empty.
  - Changed the type of `parkingLotId` on the `ParkingLotReview` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `userId` on the `ParkingLotReview` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `parkingLotId` on the `ParkingLotService` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Made the column `checkInAt` on table `ParkingRecord` required. This step will fail if there are existing NULL values in that column.
  - Changed the type of `parkingLotId` on the `ParkingSpot` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Added the required column `method` to the `PaymentRecord` table without a default value. This is not possible if the table is not empty.
  - Added the required column `parkingRecordId` to the `PaymentRecord` table without a default value. This is not possible if the table is not empty.
  - Changed the type of `userId` on the `PaymentRecord` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `vehicleId` on the `Reservation` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Made the column `checkInAt` on table `Reservation` required. This step will fail if there are existing NULL values in that column.
  - Changed the type of `parkingSpotId` on the `Reservation` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `accountId` on the `User` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `userId` on the `UserNotification` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `ownerId` on the `Vehicle` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- CreateEnum
CREATE TYPE "PAYMENT_RECORD__METHOD_ALIAS" AS ENUM ('CASH');

-- AlterEnum
BEGIN;
CREATE TYPE "RESERVATION__STATUS_ALIAS_new" AS ENUM ('PENDING', 'COMPLETED', 'EXPIRED');
ALTER TABLE "Reservation" ALTER COLUMN "status" TYPE "RESERVATION__STATUS_ALIAS_new" USING ("status"::text::"RESERVATION__STATUS_ALIAS_new");
ALTER TYPE "RESERVATION__STATUS_ALIAS" RENAME TO "RESERVATION__STATUS_ALIAS_old";
ALTER TYPE "RESERVATION__STATUS_ALIAS_new" RENAME TO "RESERVATION__STATUS_ALIAS";
DROP TYPE "RESERVATION__STATUS_ALIAS_old";
COMMIT;

-- DropForeignKey
ALTER TABLE "ParkingLot" DROP CONSTRAINT "ParkingLot_ownerId_fkey";

-- DropForeignKey
ALTER TABLE "ParkingLotReview" DROP CONSTRAINT "ParkingLotReview_parkingLotId_fkey";

-- DropForeignKey
ALTER TABLE "ParkingLotReview" DROP CONSTRAINT "ParkingLotReview_userId_fkey";

-- DropForeignKey
ALTER TABLE "ParkingLotService" DROP CONSTRAINT "ParkingLotService_parkingLotId_fkey";

-- DropForeignKey
ALTER TABLE "ParkingRecord" DROP CONSTRAINT "ParkingRecord_parkingSpotId_fkey";

-- DropForeignKey
ALTER TABLE "ParkingRecord" DROP CONSTRAINT "ParkingRecord_reservationId_fkey";

-- DropForeignKey
ALTER TABLE "ParkingRecord" DROP CONSTRAINT "ParkingRecord_vehicleId_fkey";

-- DropForeignKey
ALTER TABLE "ParkingSpot" DROP CONSTRAINT "ParkingSpot_parkingLotId_fkey";

-- DropForeignKey
ALTER TABLE "PaymentRecord" DROP CONSTRAINT "PaymentRecord_reservationId_fkey";

-- DropForeignKey
ALTER TABLE "PaymentRecord" DROP CONSTRAINT "PaymentRecord_userId_fkey";

-- DropForeignKey
ALTER TABLE "Reservation" DROP CONSTRAINT "Reservation_parkingSpotId_fkey";

-- DropForeignKey
ALTER TABLE "Reservation" DROP CONSTRAINT "Reservation_userId_fkey";

-- DropForeignKey
ALTER TABLE "Reservation" DROP CONSTRAINT "Reservation_vehicleId_fkey";

-- DropForeignKey
ALTER TABLE "User" DROP CONSTRAINT "User_accountId_fkey";

-- DropForeignKey
ALTER TABLE "UserNotification" DROP CONSTRAINT "UserNotification_userId_fkey";

-- DropForeignKey
ALTER TABLE "Vehicle" DROP CONSTRAINT "Vehicle_ownerId_fkey";

-- DropIndex
DROP INDEX "PaymentRecord_reservationId_key";

-- AlterTable
ALTER TABLE "Account" DROP CONSTRAINT "Account_pkey",
DROP COLUMN "id",
ADD COLUMN     "id" BIGSERIAL NOT NULL,
ADD CONSTRAINT "Account_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "ParkingLot" DROP CONSTRAINT "ParkingLot_pkey",
DROP COLUMN "id",
ADD COLUMN     "id" BIGSERIAL NOT NULL,
DROP COLUMN "ownerId",
ADD COLUMN     "ownerId" BIGINT NOT NULL,
ADD CONSTRAINT "ParkingLot_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "ParkingLotReview" DROP CONSTRAINT "ParkingLotReview_pkey",
DROP COLUMN "id",
ADD COLUMN     "id" BIGSERIAL NOT NULL,
DROP COLUMN "parkingLotId",
ADD COLUMN     "parkingLotId" BIGINT NOT NULL,
DROP COLUMN "userId",
ADD COLUMN     "userId" BIGINT NOT NULL,
ADD CONSTRAINT "ParkingLotReview_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "ParkingLotService" DROP CONSTRAINT "ParkingLotService_pkey",
DROP COLUMN "id",
ADD COLUMN     "id" BIGSERIAL NOT NULL,
DROP COLUMN "parkingLotId",
ADD COLUMN     "parkingLotId" BIGINT NOT NULL,
ADD CONSTRAINT "ParkingLotService_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "ParkingRecord" DROP CONSTRAINT "ParkingRecord_pkey",
DROP COLUMN "id",
ADD COLUMN     "id" BIGSERIAL NOT NULL,
DROP COLUMN "vehicleId",
ADD COLUMN     "vehicleId" BIGINT,
DROP COLUMN "reservationId",
ADD COLUMN     "reservationId" BIGINT,
ALTER COLUMN "checkInAt" SET NOT NULL,
DROP COLUMN "parkingSpotId",
ADD COLUMN     "parkingSpotId" BIGINT,
ADD CONSTRAINT "ParkingRecord_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "ParkingSpot" DROP CONSTRAINT "ParkingSpot_pkey",
DROP COLUMN "id",
ADD COLUMN     "id" BIGSERIAL NOT NULL,
DROP COLUMN "parkingLotId",
ADD COLUMN     "parkingLotId" BIGINT NOT NULL,
ADD CONSTRAINT "ParkingSpot_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "PaymentRecord" DROP CONSTRAINT "PaymentRecord_pkey",
DROP COLUMN "reservationId",
DROP COLUMN "status",
ADD COLUMN     "method" "PAYMENT_RECORD__METHOD_ALIAS" NOT NULL,
ADD COLUMN     "parkingRecordId" BIGINT NOT NULL,
DROP COLUMN "id",
ADD COLUMN     "id" BIGSERIAL NOT NULL,
DROP COLUMN "userId",
ADD COLUMN     "userId" BIGINT NOT NULL,
ADD CONSTRAINT "PaymentRecord_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "Reservation" DROP CONSTRAINT "Reservation_pkey",
DROP COLUMN "checkOutAt",
DROP COLUMN "totalPrice",
DROP COLUMN "userId",
DROP COLUMN "id",
ADD COLUMN     "id" BIGSERIAL NOT NULL,
DROP COLUMN "vehicleId",
ADD COLUMN     "vehicleId" BIGINT NOT NULL,
ALTER COLUMN "checkInAt" SET NOT NULL,
DROP COLUMN "parkingSpotId",
ADD COLUMN     "parkingSpotId" BIGINT NOT NULL,
ADD CONSTRAINT "Reservation_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "User" DROP CONSTRAINT "User_pkey",
DROP COLUMN "id",
ADD COLUMN     "id" BIGSERIAL NOT NULL,
DROP COLUMN "accountId",
ADD COLUMN     "accountId" BIGINT NOT NULL,
ADD CONSTRAINT "User_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "UserNotification" DROP CONSTRAINT "UserNotification_pkey",
DROP COLUMN "id",
ADD COLUMN     "id" BIGSERIAL NOT NULL,
DROP COLUMN "userId",
ADD COLUMN     "userId" BIGINT NOT NULL,
ADD CONSTRAINT "UserNotification_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "Vehicle" DROP CONSTRAINT "Vehicle_pkey",
DROP COLUMN "id",
ADD COLUMN     "id" BIGSERIAL NOT NULL,
DROP COLUMN "ownerId",
ADD COLUMN     "ownerId" BIGINT NOT NULL,
ADD CONSTRAINT "Vehicle_pkey" PRIMARY KEY ("id");

-- CreateTable
CREATE TABLE "AccountToken" (
    "id" BIGSERIAL NOT NULL,
    "token" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "accountId" BIGINT NOT NULL,

    CONSTRAINT "AccountToken_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "ParkingRecord_reservationId_key" ON "ParkingRecord"("reservationId");

-- CreateIndex
CREATE UNIQUE INDEX "PaymentRecord_parkingRecordId_key" ON "PaymentRecord"("parkingRecordId");

-- CreateIndex
CREATE UNIQUE INDEX "User_accountId_key" ON "User"("accountId");

-- AddForeignKey
ALTER TABLE "AccountToken" ADD CONSTRAINT "AccountToken_accountId_fkey" FOREIGN KEY ("accountId") REFERENCES "Account"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_accountId_fkey" FOREIGN KEY ("accountId") REFERENCES "Account"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserNotification" ADD CONSTRAINT "UserNotification_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Vehicle" ADD CONSTRAINT "Vehicle_ownerId_fkey" FOREIGN KEY ("ownerId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ParkingLot" ADD CONSTRAINT "ParkingLot_ownerId_fkey" FOREIGN KEY ("ownerId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ParkingLotReview" ADD CONSTRAINT "ParkingLotReview_parkingLotId_fkey" FOREIGN KEY ("parkingLotId") REFERENCES "ParkingLot"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ParkingLotReview" ADD CONSTRAINT "ParkingLotReview_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ParkingLotService" ADD CONSTRAINT "ParkingLotService_parkingLotId_fkey" FOREIGN KEY ("parkingLotId") REFERENCES "ParkingLot"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ParkingSpot" ADD CONSTRAINT "ParkingSpot_parkingLotId_fkey" FOREIGN KEY ("parkingLotId") REFERENCES "ParkingLot"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Reservation" ADD CONSTRAINT "Reservation_parkingSpotId_fkey" FOREIGN KEY ("parkingSpotId") REFERENCES "ParkingSpot"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Reservation" ADD CONSTRAINT "Reservation_vehicleId_fkey" FOREIGN KEY ("vehicleId") REFERENCES "Vehicle"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ParkingRecord" ADD CONSTRAINT "ParkingRecord_vehicleId_fkey" FOREIGN KEY ("vehicleId") REFERENCES "Vehicle"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ParkingRecord" ADD CONSTRAINT "ParkingRecord_parkingSpotId_fkey" FOREIGN KEY ("parkingSpotId") REFERENCES "ParkingSpot"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ParkingRecord" ADD CONSTRAINT "ParkingRecord_reservationId_fkey" FOREIGN KEY ("reservationId") REFERENCES "Reservation"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PaymentRecord" ADD CONSTRAINT "PaymentRecord_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PaymentRecord" ADD CONSTRAINT "PaymentRecord_parkingRecordId_fkey" FOREIGN KEY ("parkingRecordId") REFERENCES "ParkingRecord"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
