import { GetAllCoffeeResult } from "@/lib/services/coffeeService";
import { create } from "zustand";
import { combine } from "zustand/middleware";

export interface CoffeeWithQuantity {
  coffee: GetAllCoffeeResult[number];
  quantity: number;
}

interface UseCartStore {
  coffees: CoffeeWithQuantity[];
}

export const cartStoreInitialState: UseCartStore = {
  coffees: [],
};

export const useCartStore = create(
  combine(cartStoreInitialState, (set) => ({
    add(coffee: GetAllCoffeeResult[number]) {},
    remove(coffee: GetAllCoffeeResult[number]) {},
    toggle(coffee: GetAllCoffeeResult[number]) {},
  }))
);
