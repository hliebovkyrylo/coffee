import { CoffeeList } from "@/components/CoffeeList";
import { FilterPanel } from "@/components/FilterPanel";
import { SortPanel } from "@/components/SortPanel";
import { PageHeading } from "@/components/PageHeading";
import { useState } from "react";
import { CoffeeFilters, SortBy } from "@/schemas/coffeeFiltersSchema";
import { useQuery } from "@tanstack/react-query";
import { api, endpoints } from "@/lib/api";
import useDebounce from "@/hooks/useDebounce";
import { GetAllCoffeeResult } from "@/lib/services/coffeeService";
import { useCartStore } from "@/store/useCartStore";

export default function Home() {
  const [filters, setFilters] = useState<CoffeeFilters>({});
  const debouncedFilters = useDebounce(filters, 400);
  const { data = [] } = useQuery({
    queryKey: [endpoints.getCoffeeList(), debouncedFilters],
    queryFn: () => api.getCoffeeList(debouncedFilters),
    select: ({ data }) => data.data,
  });

  return (
    <div>
      <PageHeading>Coffee Shop</PageHeading>
      <SortPanel
        sortBy={filters.sortBy}
        onChange={(sortBy) =>
          setFilters({ ...filters, sortBy: sortBy as SortBy })
        }
      />
      <FilterPanel filters={filters} setFilters={setFilters} />

      <CoffeeList data={data} />
    </div>
  );
}
