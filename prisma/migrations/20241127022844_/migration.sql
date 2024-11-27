/*
  Warnings:

  - You are about to drop the `Otp` table. If the table is not empty, all the data it contains will be lost.

*/
-- CreateEnum
CREATE TYPE "OTP_CODE__TYPE_ALIAS" AS ENUM ('REGISTER', 'LOGIN', 'FORGOT_PASSWORD');

-- DropForeignKey
ALTER TABLE "Otp" DROP CONSTRAINT "Otp_accountId_fkey";

-- DropTable
DROP TABLE "Otp";

-- DropEnum
DROP TYPE "OTP__TYPE_ALIAS";

-- CreateTable
CREATE TABLE "OtpCode" (
    "id" SERIAL NOT NULL,
    "code" TEXT NOT NULL,
    "type" "OTP_CODE__TYPE_ALIAS" NOT NULL,
    "expiredAt" TIMESTAMP(3) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "accountId" TEXT NOT NULL,

    CONSTRAINT "OtpCode_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "OtpCode" ADD CONSTRAINT "OtpCode_accountId_fkey" FOREIGN KEY ("accountId") REFERENCES "Account"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
