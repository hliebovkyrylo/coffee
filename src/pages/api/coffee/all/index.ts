import { CoffeeService } from "@/lib/services/coffeeService";
import { errorResponse, successResponse } from "@/lib/utils/apiResponse";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const coffeeService = new CoffeeService();

  try {
    if (req.method === "GET") {
      const filters = parseFilters(req.query);

      const coffees = await coffeeService.getAllCoffees(filters);

      res.status(200).json(successResponse(coffees));
    } else {
      res.status(405).json(errorResponse("Method not allowed", 405));
    }
  } catch (error) {
    res.status(500).json(errorResponse("Internal server error", 500));
  }
}

function parseFilters(query: NextApiRequest["query"]) {
  const {
    name,
    salePriceMin,
    salePriceMax,
    netWeightMin,
    netWeightMax,
    type,
    composition,
    country,
    sortBy,
    sortOrder,
  } = query;

  return {
    name: name as string | undefined,
    salePriceMin: salePriceMin ? Number(salePriceMin) : undefined,
    salePriceMax: salePriceMax ? Number(salePriceMax) : undefined,
    netWeightMin: netWeightMin ? Number(netWeightMin) : undefined,
    netWeightMax: netWeightMax ? Number(netWeightMax) : undefined,
    type: type as string | undefined,
    composition: composition as string | undefined,
    country: country as string | undefined,
    sortBy: sortBy === "name" || sortBy === "salePrice" ? sortBy : undefined,
    sortOrder:
      sortOrder === "asc" || sortOrder === "desc" ? sortOrder : undefined,
  } as const;
}
