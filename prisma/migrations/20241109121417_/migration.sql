/*
  Warnings:

  - You are about to drop the column `amount` on the `PaymentRecord` table. All the data in the column will be lost.
  - Added the required column `amountInUsd` to the `PaymentRecord` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "PaymentRecord" DROP COLUMN "amount",
ADD COLUMN     "amountInUsd" DOUBLE PRECISION NOT NULL;
