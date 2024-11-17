/*
  Warnings:

  - You are about to drop the column `userId` on the `PayoutRecord` table. All the data in the column will be lost.
  - Added the required column `parkingLotId` to the `PayoutRecord` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "PayoutRecord" DROP CONSTRAINT "PayoutRecord_userId_fkey";

-- AlterTable
ALTER TABLE "PaymentRecord" ADD COLUMN     "payoutRecordId" INTEGER;

-- AlterTable
ALTER TABLE "PayoutRecord" DROP COLUMN "userId",
ADD COLUMN     "parkingLotId" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "PaymentRecord" ADD CONSTRAINT "PaymentRecord_payoutRecordId_fkey" FOREIGN KEY ("payoutRecordId") REFERENCES "PayoutRecord"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PayoutRecord" ADD CONSTRAINT "PayoutRecord_parkingLotId_fkey" FOREIGN KEY ("parkingLotId") REFERENCES "ParkingLot"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
