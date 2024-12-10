import { PrismaClient } from "../../prisma/client";

export const prisma = new PrismaClient().$extends({
  query: {
    $allModels: {
      async findMany({ args, query }) {
        args = { ...args, where: { deletedAt: null } };
        return query(args);
      },
    },
  },
});

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
