/*
  Warnings:

  - You are about to drop the column `updatedAt` on the `UserNotification` table. All the data in the column will be lost.

*/
-- CreateEnum
CREATE TYPE "PAYOUT_STATUS_ALIAS" AS ENUM ('PENDING', 'COMPLETED', 'FAILED');

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "stripeConnectAccountId" TEXT;

-- AlterTable
ALTER TABLE "UserNotification" DROP COLUMN "updatedAt";

-- CreateTable
CREATE TABLE "PayoutRecord" (
    "id" SERIAL NOT NULL,
    "transferId" TEXT,
    "amountInUsd" DOUBLE PRECISION NOT NULL,
    "status" "PAYOUT_STATUS_ALIAS" NOT NULL DEFAULT 'PENDING',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "userId" INTEGER NOT NULL,

    CONSTRAINT "PayoutRecord_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "PayoutRecord_transferId_key" ON "PayoutRecord"("transferId");

-- AddForeignKey
ALTER TABLE "PayoutRecord" ADD CONSTRAINT "PayoutRecord_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
