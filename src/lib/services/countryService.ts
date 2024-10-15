import prisma from "../utils/db";

export class CountryService {
  async getAllCountries() {
    return prisma.country.findMany();
  }
}
