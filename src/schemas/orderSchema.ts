import { z } from "zod";

export const orderItemsSchema = z
  .array(
    z.object({
      id: z.string().regex(/^[0-9a-f]{24}$/),
      quantity: z.number().min(1),
    })
  )
  .min(1);

export type OrderItems = z.infer<typeof orderItemsSchema>;
export type OrderItem = OrderItems[number];
