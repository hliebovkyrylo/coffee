import prisma from "../utils/db";

export class CountryService {
  async getAllCountries(name?: string) {
    return prisma.country.findMany({
      where: name
        ? {
            name: {
              contains: name,
              mode: "insensitive",
            },
          }
        : undefined,
    });
  }
}
