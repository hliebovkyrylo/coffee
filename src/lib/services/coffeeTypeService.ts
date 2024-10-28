import prisma from "../utils/db";

export class CoffeeTypeService {
  async getAllCoffeeTypes() {
    try {
      return prisma.coffeeType.findMany();
    } catch (error) {
      throw error;
    }
  }
}
