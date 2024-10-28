import { CoffeeCompositionService } from "@/lib/services/coffeeCompositionService";
import { errorResponse, successResponse } from "@/lib/utils/apiResponse";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const coffeeCompositionService = new CoffeeCompositionService();

  if (req.method !== "GET")
    return res.status(405).json(errorResponse("Method not allowed", 405));
  try {
    const coffeeCompositions =
      await coffeeCompositionService.getAllCoffeeCompositions();
    return res.status(200).json(successResponse(coffeeCompositions));
  } catch (error) {
    return res.status(500).json(errorResponse("Internal server error", 500));
  }
}
