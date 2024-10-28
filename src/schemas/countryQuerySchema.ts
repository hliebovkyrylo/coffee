import { z } from "zod";

export const countryQuerySchema = z.object({
  name: z.string().optional(),
});

export type CountryQuery = z.infer<typeof countryQuerySchema>;