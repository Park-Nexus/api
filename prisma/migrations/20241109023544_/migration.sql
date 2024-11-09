/*
  Warnings:

  - Added the required column `endTime` to the `Reservation` table without a default value. This is not possible if the table is not empty.

*/
-- AlterEnum
-- This migration adds more than one value to an enum.
-- With PostgreSQL versions 11 and earlier, this is not possible
-- in a single migration. This can be worked around by creating
-- multiple migrations, each migration adding only one value to
-- the enum.


ALTER TYPE "RESERVATION__STATUS_ALIAS" ADD VALUE 'ON_GOING';
ALTER TYPE "RESERVATION__STATUS_ALIAS" ADD VALUE 'CANCELED';
ALTER TYPE "RESERVATION__STATUS_ALIAS" ADD VALUE 'OVERSTAYED';

-- AlterTable
ALTER TABLE "Reservation" ADD COLUMN     "endTime" TIMESTAMP(3) NOT NULL;
