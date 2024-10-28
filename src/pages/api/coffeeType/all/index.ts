import { CoffeeTypeService } from "@/lib/services/coffeeTypeService";
import { errorResponse, successResponse } from "@/lib/utils/apiResponse";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const coffeeTypeService = new CoffeeTypeService();

  if (req.method === "GET") {
    try {
      const coffeeTypes = await coffeeTypeService.getAllCoffeeTypes();
      return res.status(200).json(successResponse(coffeeTypes));
    } catch (error) {
      return res.status(500).json(errorResponse("Internal server error", 500));
    }
  } else {
    return res.status(405).json(errorResponse("Method not allowed", 405));
  }
}
