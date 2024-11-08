/*
  Warnings:

  - You are about to drop the column `dateTime` on the `Reservation` table. All the data in the column will be lost.
  - Added the required column `startTime` to the `Reservation` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Reservation" DROP COLUMN "dateTime",
ADD COLUMN     "startTime" TIMESTAMP(3) NOT NULL;
