-- DropIndex
DROP INDEX "Reservation_checkInCode_key";

-- DropIndex
DROP INDEX "Reservation_checkOutCode_key";

-- AlterTable
ALTER TABLE "Reservation" ALTER COLUMN "checkInCode" DROP DEFAULT,
ALTER COLUMN "checkOutCode" DROP DEFAULT;
