/*
  Warnings:

  - You are about to drop the column `transactionFeeInUsd` on the `PaymentRecord` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "PaymentRecord" DROP COLUMN "transactionFeeInUsd";
