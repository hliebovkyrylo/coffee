import { CoffeeFilters } from "@/schemas/coffeeFiltersSchema";
import prisma from "../utils/db";
import { Prisma, PrismaClient } from "@prisma/client";
import { OrderItem, PurchasedCoffee } from "@/@types";
import { InsufficientError, NotFoundError } from "../errors";

export class CoffeeService {
  async getAllCoffees(filters: CoffeeFilters) {
    const whereClause = this.buildWhereClause(filters);
    const orderBy = this.buildOrderByClause(filters);

    try {
      const result = await prisma.coffee.findMany({
        where: whereClause,
        include: {
          type: true,
          composition: true,
          country: true,
        },
        orderBy: orderBy,
      });
      return result;
    } catch (error) {
      throw error;
    }
  }

  async processOrder(orderItems: OrderItem[]) {
    let totalAmount = 0;
    const purchasedCoffees: PurchasedCoffee[] = [];

    const getCoffeeAndValidateStock = async (
      tx: Prisma.TransactionClient,
      item: OrderItem
    ) => {
      const coffee = await tx.coffee.findFirst({ where: { name: item.name } });
      if (!coffee) throw new NotFoundError(`Coffee '${item.name}' not found`);
      if (coffee.quantity < item.quantity)
        throw new InsufficientError(
          `Insufficient stock for ${item.name}. Available: ${coffee.quantity} packages`
        );
      return coffee;
    };

    try {
      await prisma.$transaction(async (tx: Prisma.TransactionClient) => {
        for (const item of orderItems) {
          const coffee = await getCoffeeAndValidateStock(tx, item);

          totalAmount += coffee.purchasePrice * item.quantity;

          await tx.coffee.update({
            where: { id: coffee.id },
            data: { quantity: { decrement: item.quantity } },
          });

          purchasedCoffees.push({
            id: coffee.id,
            name: coffee.name,
            imageUrl: coffee.imageUrl,
            quantity: item.quantity,
            price: coffee.purchasePrice,
          });
        }
      });

      return { totalAmount, purchasedItems: purchasedCoffees };
    } catch (error) {
      throw error;
    }
  }

  private buildWhereClause(filters: CoffeeFilters): Prisma.CoffeeWhereInput {
    const whereClause: Prisma.CoffeeWhereInput = {};

    if (filters.name) {
      whereClause.name = { contains: filters.name, mode: "insensitive" };
    }

    if (
      filters.salePriceMin !== undefined ||
      filters.salePriceMax !== undefined
    ) {
      whereClause.salePrice = {};
      if (filters.salePriceMin !== undefined)
        whereClause.salePrice.gte = filters.salePriceMin;
      if (filters.salePriceMax !== undefined)
        whereClause.salePrice.lte = filters.salePriceMax;
    }

    if (
      filters.netWeightMin !== undefined ||
      filters.netWeightMax !== undefined
    ) {
      whereClause.netWeight = {};
      if (filters.netWeightMin !== undefined)
        whereClause.netWeight.gte = filters.netWeightMin;
      if (filters.netWeightMax !== undefined)
        whereClause.netWeight.lte = filters.netWeightMax;
    }

    if (filters.type) {
      whereClause.type = {
        name: { equals: filters.type, mode: "insensitive" },
      };
    }

    if (filters.composition) {
      whereClause.composition = {
        name: { equals: filters.composition, mode: "insensitive" },
      };
    }

    if (filters.country) {
      whereClause.country = {
        name: { equals: filters.country, mode: "insensitive" },
      };
    }

    return whereClause;
  }

  private buildOrderByClause(
    filters: CoffeeFilters
  ): Prisma.CoffeeOrderByWithRelationInput {
    if (filters.sortBy === "name") {
      return { name: filters.sortOrder || "asc" };
    } else if (filters.sortBy === "salePrice") {
      return { salePrice: filters.sortOrder || "asc" };
    }
    return {};
  }
}
