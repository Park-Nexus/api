import { PrismaClient } from "../../prisma/client";

export const prisma = new PrismaClient();

async function checkDbConnection() {
  try {
    await prisma.$connect();
    console.log("Database connection successful");
  } catch (error) {
    console.error("Database connection failed", error);
  } finally {
    await prisma.$disconnect();
  }
}
checkDbConnection();

export * from "../../prisma/client";
