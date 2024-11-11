import { PrismaClient } from "./client";
import bcrypt from "bcrypt";

const prisma = new PrismaClient();

const adminEmail = process.env.ADMIN_EMAIL;
const adminPwd = process.env.ADMIN_PASSWORD;
const passwordRounds = process.env.PASSWORD_ROUNDS;

async function main() {
  const adminPassword = await bcrypt.hash(adminPwd, parseInt(passwordRounds));

  const admin = await prisma.account.upsert({
    where: { email: adminEmail },
    update: {
      password: adminPassword,
      role: "ADMIN",
    },
    create: {
      email: adminEmail,
      password: adminPassword,
      role: "ADMIN",
    },
  });

  await prisma.user.upsert({
    where: { accountId: admin.id },
    update: {
      firstName: "ParkNexus",
      lastName: "Inc.",
      gender: "OTHER",
      phone: "0888827768",
    },
    create: {
      firstName: "ParkNexus",
      lastName: "Inc.",
      gender: "OTHER",
      phone: "0888827768",
      accountId: admin.id,
      stripeCustomerId: "",
    },
  });

  console.log("Admin account seeded: ", admin.email);
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
