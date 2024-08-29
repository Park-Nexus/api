/*
  Warnings:

  - The values [PLOT_OWNER] on the enum `ACCOUNT__ROLE_ALIAS` will be removed. If these variants are still used in the database, this will fail.
  - Added the required column `approvedAt` to the `ParkingLot` table without a default value. This is not possible if the table is not empty.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "ACCOUNT__ROLE_ALIAS_new" AS ENUM ('ADMIN', 'USER', 'PARKING_LOT_OWNER');
ALTER TABLE "Account" ALTER COLUMN "role" TYPE "ACCOUNT__ROLE_ALIAS_new" USING ("role"::text::"ACCOUNT__ROLE_ALIAS_new");
ALTER TYPE "ACCOUNT__ROLE_ALIAS" RENAME TO "ACCOUNT__ROLE_ALIAS_old";
ALTER TYPE "ACCOUNT__ROLE_ALIAS_new" RENAME TO "ACCOUNT__ROLE_ALIAS";
DROP TYPE "ACCOUNT__ROLE_ALIAS_old";
COMMIT;

-- AlterTable
ALTER TABLE "ParkingLot" ADD COLUMN     "approvedAt" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "isApproved" BOOLEAN NOT NULL DEFAULT false;
