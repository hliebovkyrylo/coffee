import { CoffeeTypeService } from "@/lib/services/coffeeTypeService";
import { errorResponse, successResponse } from "@/lib/utils/apiResponse";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const coffeeTypeService = new CoffeeTypeService();

  try {
    if (req.method == "GET") {
      const coffeeTypes = await coffeeTypeService.getAllCoffeeTypes();
      res.status(200).json(successResponse(coffeeTypes));
    } else {
      res.status(405).json(errorResponse("Method not allowed", 405));
    }
  } catch (error) {
    res.status(500).json(errorResponse("Internal server error", 500));
  }
}
