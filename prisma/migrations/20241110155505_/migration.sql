/*
  Warnings:

  - You are about to drop the column `code` on the `Reservation` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[checkInCode]` on the table `Reservation` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[checkOutCode]` on the table `Reservation` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "Reservation" DROP COLUMN "code",
ADD COLUMN     "checkInCode" TEXT NOT NULL DEFAULT 'worgheqwefwergj',
ADD COLUMN     "checkOutCode" TEXT NOT NULL DEFAULT 'worghergj';

-- CreateIndex
CREATE UNIQUE INDEX "Reservation_checkInCode_key" ON "Reservation"("checkInCode");

-- CreateIndex
CREATE UNIQUE INDEX "Reservation_checkOutCode_key" ON "Reservation"("checkOutCode");
