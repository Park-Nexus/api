-- CreateTable
CREATE TABLE "ParkingLotPrice" (
    "id" SERIAL NOT NULL,
    "vehicleType" "VEHICLE__TYPE_ALIAS" NOT NULL,
    "price" DOUBLE PRECISION NOT NULL,
    "parkingLotId" INTEGER NOT NULL,

    CONSTRAINT "ParkingLotPrice_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "ParkingLotPrice" ADD CONSTRAINT "ParkingLotPrice_parkingLotId_fkey" FOREIGN KEY ("parkingLotId") REFERENCES "ParkingLot"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
