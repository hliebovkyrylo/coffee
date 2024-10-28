import { z } from "zod";

export const coffeeFiltersSchema = z.object({
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

export type CoffeeFilters = z.infer<typeof coffeeFiltersSchema>;