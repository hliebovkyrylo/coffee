import { z } from "zod";

export const orderItemSchema = z
  .array(
    z.object({
      name: z.string().min(1),
      quantity: z.number().min(1),
    })
  )
  .min(1);
