/*
  Warnings:

  - You are about to drop the column `logMessage` on the `PayoutRecord` table. All the data in the column will be lost.
  - The `status` column on the `PayoutRecord` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- CreateEnum
CREATE TYPE "PAYOUT__STATUS_ALIAS" AS ENUM ('PENDING', 'COMPLETED', 'FAILED');

-- CreateEnum
CREATE TYPE "PAYOUT__ERROR_TYPE_ALIAS" AS ENUM ('INSUFFICIENT_BALANCE', 'TRANSFER_FAILED', 'NO_STRIPE_ACCOUNT', 'STRIPE_ACCOUNT_INVALID');

-- AlterTable
ALTER TABLE "PayoutRecord" DROP COLUMN "logMessage",
ADD COLUMN     "errorType" "PAYOUT__ERROR_TYPE_ALIAS",
DROP COLUMN "status",
ADD COLUMN     "status" "PAYOUT__STATUS_ALIAS" NOT NULL DEFAULT 'PENDING';

-- DropEnum
DROP TYPE "PAYOUT_STATUS_ALIAS";
