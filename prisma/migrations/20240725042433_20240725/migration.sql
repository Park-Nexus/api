/*
  Warnings:

  - You are about to drop the column `userId` on the `ParkingLot` table. All the data in the column will be lost.
  - You are about to drop the `Account` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `AuthToken` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `User` table. If the table is not empty, all the data it contains will be lost.

*/
-- CreateEnum
CREATE TYPE "PARKING_RECORD__STATUS_ALIAS" AS ENUM ('ON_GOING', 'COMPLETED');

-- DropForeignKey
ALTER TABLE "AuthToken" DROP CONSTRAINT "AuthToken_accountId_fkey";

-- DropForeignKey
ALTER TABLE "ParkingLot" DROP CONSTRAINT "ParkingLot_ownerId_fkey";

-- DropForeignKey
ALTER TABLE "ParkingRecord" DROP CONSTRAINT "ParkingRecord_userId_fkey";

-- DropForeignKey
ALTER TABLE "PaymentRecord" DROP CONSTRAINT "PaymentRecord_userId_fkey";

-- DropForeignKey
ALTER TABLE "Reservation" DROP CONSTRAINT "Reservation_userId_fkey";

-- DropForeignKey
ALTER TABLE "User" DROP CONSTRAINT "User_accountId_fkey";

-- DropForeignKey
ALTER TABLE "Vehicle" DROP CONSTRAINT "Vehicle_ownerId_fkey";

-- AlterTable
ALTER TABLE "ParkingLot" DROP COLUMN "userId";

-- DropTable
DROP TABLE "Account";

-- DropTable
DROP TABLE "AuthToken";

-- DropTable
DROP TABLE "User";

-- DropEnum
DROP TYPE "ACCOUNT__ROLE_ALIAS";

-- DropEnum
DROP TYPE "USER__GENDER_ALIAS";

-- DropEnum
DROP TYPE "USER__STATUS_ALIAS";
