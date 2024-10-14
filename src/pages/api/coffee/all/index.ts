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
      const coffees = await coffeeService.getAllCoffees();
      res.status(201).json(successResponse({ coffees }));
    } else {
      res.status(405).json(errorResponse("Method not allowed", 405));
    }
  } catch (error) {
    res.status(500).json(errorResponse("Internal server error", 500));
  }
}
