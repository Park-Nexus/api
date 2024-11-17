/*
  Warnings:

  - Added the required column `totalFeeInUsd` to the `PayoutRecord` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "PayoutRecord" ADD COLUMN     "totalFeeInUsd" DOUBLE PRECISION NOT NULL;
