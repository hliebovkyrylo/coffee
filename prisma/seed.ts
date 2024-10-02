import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  await Promise.all([
    // CoffeeType
    prisma.coffeeType.upsert({
      where: { name: "зерно" },
      update: {},
      create: { name: "зерно" },
    }),
    prisma.coffeeType.upsert({
      where: { name: "молота" },
      update: {},
      create: { name: "молота" },
    }),
    // CoffeeComposition
    prisma.coffeeComposition.upsert({
      where: { name: "арабіка" },
      update: {},
      create: { name: "арабіка" },
    }),
    prisma.coffeeComposition.upsert({
      where: { name: "робуста" },
      update: {},
      create: { name: "робуста" },
    }),
  ]);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
