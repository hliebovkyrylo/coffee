import { PrismaClient } from "@prisma/client";
import fs from "fs";
import path from "path";

const prisma = new PrismaClient();

async function main() {
  const countryData = JSON.parse(fs.readFileSync(path.join("public", "countries.json"), "utf-8"))

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
    ...countryData.map((data: { name: string }) => 
      prisma.country.upsert({
        where: { name: data.name },
        update: {},
        create: { name: data.name },
      })
    )
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
