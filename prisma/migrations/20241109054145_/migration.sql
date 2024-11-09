-- AlterTable
ALTER TABLE "ParkingSpot" ADD COLUMN     "deleteAt" TIMESTAMP(3);

-- AlterTable
ALTER TABLE "Vehicle" ADD COLUMN     "deleteAt" TIMESTAMP(3);
