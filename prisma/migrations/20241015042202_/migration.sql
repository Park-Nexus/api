/*
  Warnings:

  - The primary key for the `ParkingLotPrice` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `ParkingLotPrice` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "ParkingLotPrice" DROP CONSTRAINT "ParkingLotPrice_pkey",
DROP COLUMN "id",
ADD CONSTRAINT "ParkingLotPrice_pkey" PRIMARY KEY ("vehicleType", "parkingLotId");
