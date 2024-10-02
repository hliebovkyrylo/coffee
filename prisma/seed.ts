import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const coffeeTypeData = [
    { where: { name: "зерно" }, create: { name: "зерно" } },
    { where: { name: "молота" }, create: { name: "молота" } },
  ];

  const coffeeCompositionData = [
    { where: { name: "арабіка" }, create: { name: "арабіка" } },
    { where: { name: "робуста" }, create: { name: "робуста" } },
  ];

  await prisma.$transaction([
    ...coffeeTypeData.map((data) =>
      prisma.coffeeType.upsert({
        where: data.where,
        update: {},
        create: data.create,
      })
    ),
    ...coffeeCompositionData.map((data) =>
      prisma.coffeeComposition.upsert({
        where: data.where,
        update: {},
        create: data.create,
      })
    ),
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
