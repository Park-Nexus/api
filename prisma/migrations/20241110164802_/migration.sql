/*
  Warnings:

  - You are about to drop the column `checkInCode` on the `Reservation` table. All the data in the column will be lost.
  - You are about to drop the column `checkOutCode` on the `Reservation` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[code]` on the table `Reservation` will be added. If there are existing duplicate values, this will fail.
  - The required column `code` was added to the `Reservation` table with a prisma-level default value. This is not possible if the table is not empty. Please add this column as optional, then populate it before making it required.

*/
-- AlterTable
ALTER TABLE "Reservation" DROP COLUMN "checkInCode",
DROP COLUMN "checkOutCode",
ADD COLUMN     "code" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Reservation_code_key" ON "Reservation"("code");
