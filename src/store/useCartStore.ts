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
  combine(cartStoreInitialState, (set, get) => ({
    add(coffee: GetAllCoffeeResult[number]) {
      const coffees = get().coffees;
      const existingIndex = coffees.findIndex(
        (value) => value.coffee.id === coffee.id
      );

      if (existingIndex === -1) {
        return;
      }

      coffees[existingIndex].quantity += 1;

      set({ coffees });
    },
    remove(coffee: GetAllCoffeeResult[number]) {
      const coffees = get().coffees;
      const existingIndex = coffees.findIndex(
        (value) => value.coffee.id === coffee.id
      );

      if (existingIndex === -1) {
        return;
      }

      coffees[existingIndex].quantity -= 1;

      set({ coffees });
    },
    toggle(coffee: GetAllCoffeeResult[number]) {
      const coffees = get().coffees;
      const existingIndex = coffees.findIndex(
        (value) => value.coffee.id === coffee.id
      );
      if (existingIndex === -1) {
        return set({ coffees: coffees.concat({ coffee, quantity: 1 }) });
      }
      return set({
        coffees: coffees.filter((existing) => existing.coffee.id !== coffee.id),
      });
    },
    clear() {
      set({ coffees: [] });
    },
  }))
);
