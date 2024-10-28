import { CoffeeFilters } from "@/schemas/coffeeFiltersSchema";
import prisma from "../utils/db";
import { Prisma } from "@prisma/client";

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
