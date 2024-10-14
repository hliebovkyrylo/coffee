import prisma from "../utils/db";

export class CoffeeService {
  async getAllCoffees() {
    return prisma.coffee.findMany();
  }
}
