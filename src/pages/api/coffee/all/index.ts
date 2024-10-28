import { CoffeeService } from "@/lib/services/coffeeService";
import { errorResponse, successResponse } from "@/lib/utils/apiResponse";
import { NextApiRequest, NextApiResponse } from "next";
import { z } from "zod";

const coffeeFiltersSchema = z.object({
  name: z.string().optional(),
  salePriceMin: z.coerce.number().min(0).optional(),
  salePriceMax: z.coerce.number().min(0).optional(),
  netWeightMin: z.coerce.number().min(0).optional(),
  netWeightMax: z.coerce.number().min(0).optional(),
  type: z.string().optional(),
  composition: z.string().optional(),
  country: z.string().optional(),
  sortBy: z.enum(["name", "salePrice"]).optional(),
  sortOrder: z.enum(["asc", "desc"]).optional(),
});

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const coffeeService = new CoffeeService();

  try {
    if (req.method === "GET") {
      const validation = coffeeFiltersSchema.safeParse(req.query);

      if (!validation.success) {
        return res
          .status(400)
          .json(errorResponse("Invalid query parameters", 400));
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
