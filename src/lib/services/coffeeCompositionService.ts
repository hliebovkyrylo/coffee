import prisma from "../utils/db";

export class CoffeeCompositionService {
  async getAllCoffeeCompositions() {
    return prisma.coffeeComposition.findMany();
  }
}
