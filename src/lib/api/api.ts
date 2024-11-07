import axios from "axios";
import { endpoints } from "./endpoints";
import { CoffeeFilters } from "@/schemas/coffeeFiltersSchema";
import { OrderItems } from "@/schemas/orderSchema";
import { SuccessResponse } from "../utils/apiResponse";
import type { GetAllCoffeeResult } from "../services/coffeeService";
import { CoffeeComposition, CoffeeType, Country } from "@prisma/client";

export const api = {
  getCoffeeList: (params: CoffeeFilters) => {
    return axios.get<SuccessResponse<GetAllCoffeeResult>>(
      endpoints.getCoffeeList(),
      {
        params,
      }
    );
  },
  getCountryList: (name?: string) => {
    return axios.get<SuccessResponse<Country[]>>(endpoints.getCountryList(), {
      params: { name },
    });
  },
  getCoffeeTypeList: (name?: string) => {
    return axios.get<SuccessResponse<CoffeeType[]>>(
      endpoints.getCoffeeTypeList(),
      { params: { name } }
    );
  },
  getCoffeeCompositionList: (name?: string) => {
    return axios.get<SuccessResponse<CoffeeComposition[]>>(endpoints.getCoffeeCompositionList(), {
      params: { name },
    });
  },
  orderCoffee: (data: OrderItems) => {
    return axios.post(endpoints.orderCoffee(), data);
  },
};
