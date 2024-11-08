-- CreateTable
CREATE TABLE "_ParkingLotServiceToReservation" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_ParkingLotServiceToReservation_AB_unique" ON "_ParkingLotServiceToReservation"("A", "B");

-- CreateIndex
CREATE INDEX "_ParkingLotServiceToReservation_B_index" ON "_ParkingLotServiceToReservation"("B");

-- AddForeignKey
ALTER TABLE "_ParkingLotServiceToReservation" ADD CONSTRAINT "_ParkingLotServiceToReservation_A_fkey" FOREIGN KEY ("A") REFERENCES "ParkingLotService"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ParkingLotServiceToReservation" ADD CONSTRAINT "_ParkingLotServiceToReservation_B_fkey" FOREIGN KEY ("B") REFERENCES "Reservation"("id") ON DELETE CASCADE ON UPDATE CASCADE;
