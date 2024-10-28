import prisma from "../utils/db";

export class CoffeeTypeService {
  async getAllCoffeeTypes() {
    return prisma.coffeeType.findMany();
  }
}
