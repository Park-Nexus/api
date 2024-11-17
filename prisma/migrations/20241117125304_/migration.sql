/*
  Warnings:

  - You are about to drop the column `amountInUsd` on the `PayoutRecord` table. All the data in the column will be lost.
  - Added the required column `totalNetInUsd` to the `PayoutRecord` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "PayoutRecord" DROP COLUMN "amountInUsd",
ADD COLUMN     "totalNetInUsd" DOUBLE PRECISION NOT NULL;
