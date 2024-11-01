import { z } from "zod";

export const orderItemSchema = z
  .array(
    z.object({
      id: z.string().regex(/^[0-9a-f]{24}$/),
      quantity: z.number().min(1),
    })
  )
  .min(1);
