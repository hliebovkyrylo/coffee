import { CountryService } from "@/lib/services/countryService";
import { errorResponse, successResponse } from "@/lib/utils/apiResponse";
import { NextApiRequest, NextApiResponse } from "next";
import { z } from "zod";

const countryQuerySchema = z.object({
  name: z.string().optional(),
});

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const countryService = new CountryService();

  try {
    if (req.method === "GET") {
      const validation = countryQuerySchema.safeParse(req.query);

      if (!validation.success) {
        return res
          .status(400)
          .json(errorResponse("Invalid query parameters", 400));
      }

      const { name } = validation.data;
      const countries = await countryService.getAllCountries(
        name as string | undefined
      );
      res.status(200).json(successResponse(countries));
    } else {
      res.status(405).json(errorResponse("Method not allowed", 405));
    }
  } catch (error) {
    res.status(500).json(errorResponse("Internal server error", 500));
  }
}
