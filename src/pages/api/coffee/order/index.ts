import { InsufficientError, NotFoundError } from "@/lib/errors";
import { CoffeeService } from "@/lib/services/coffeeService";
import { errorResponse, successResponse } from "@/lib/utils/apiResponse";
import { orderItemSchema } from "@/schemas/orderSchema";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const coffeeService = new CoffeeService();

  if (req.method === "POST") {
    try {
      const validation = orderItemSchema.safeParse(req.body);

      if (!validation.success) {
        return res.status(400).json(errorResponse("Invalid body", 400));
      }

      const orderItems = validation.data; 
      const coffees = await coffeeService.processOrder(orderItems);

      res.status(200).json(successResponse(coffees));
    } catch (error) {
      if (error instanceof NotFoundError) {
        return res.status(404).json(errorResponse(error.message, 404));
      }

      if (error instanceof InsufficientError) {
        return res.status(400).json(errorResponse(error.message, 400));
      }

      return res.status(500).json(errorResponse("Internal server error", 500));
    }
  } else {
    res.status(405).json(errorResponse("Method not allowed", 405));
  }
}
