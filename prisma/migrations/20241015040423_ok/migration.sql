/*
  Warnings:

  - Added the required column `type` to the `ParkingLotService` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "PARKING_LOT_SERVICE__TYPE_ALIAS" AS ENUM ('CAR_WASH', 'CAR_REPAIR', 'TIRE_REPAIR', 'OIL_CHANGE', 'CHARGING');

-- AlterTable
ALTER TABLE "ParkingLotService" ADD COLUMN     "type" "PARKING_LOT_SERVICE__TYPE_ALIAS" NOT NULL;
