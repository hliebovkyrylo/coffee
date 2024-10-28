import { CoffeeService } from "@/lib/services/coffeeService";
import { errorResponse, successResponse } from "@/lib/utils/apiResponse";
import { coffeeFiltersSchema } from "@/schemas/coffeeFiltersSchema";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const coffeeService = new CoffeeService();

  try {
    if (req.method === "GET") {
      const validation = coffeeFiltersSchema.safeParse(req.query);

      if (!validation.success) {
        return res.status(400).json(errorResponse("Invalid query parameters", 400));
      }

      const filters = validation.data;
      const coffees = await coffeeService.getAllCoffees(filters);

      res.status(200).json(successResponse(coffees));
    } else {
      res.status(405).json(errorResponse("Method not allowed", 405));
    }
  } catch (error) {
    res.status(500).json(errorResponse("Internal server error", 500));
  }
}
