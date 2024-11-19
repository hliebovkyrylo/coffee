import React, { Dispatch, SetStateAction } from "react";
import "react-dropdown/style.css";
import "rc-slider/assets/index.css";
import styles from "./FilterPanel.module.css";
import { CoffeeFilters } from "@/schemas/coffeeFiltersSchema";
import { CoffeeTypeDropdown } from "./components/CoffeeTypeDropdown";
import { CoffeeCompositionDropdown } from "./components/CoffeeCompositionDropdown";
import { CoffeeCountryDropdown } from "./components/CoffeeCountryDropdown";
import { CoffeeNameField } from "./components/CoffeeNameField";
import { CoffeePriceSlider } from "./components/CoffeePriceSlider";

interface FilterPanelProps {
  filters: CoffeeFilters;
  setFilters: Dispatch<SetStateAction<CoffeeFilters>>;
}

export const FilterPanel = ({ filters, setFilters }: FilterPanelProps) => {
  const onFilterChange =
    <Filter extends keyof CoffeeFilters>(key: Filter) =>
    (value: CoffeeFilters[Filter]) => {
      setFilters({ ...filters, [key]: value });
    };

  return (
    <div className={styles.filterPanel}>
      <CoffeeNameField value={filters.name} onChange={onFilterChange("name")} />
      <CoffeePriceSlider
        value={[filters.salePriceMin ?? 0, filters.salePriceMax ?? 100]}
        onChange={(value) =>
          setFilters((prev) => ({
            ...prev,
            salePriceMin: value[0],
            salePriceMax: value[1],
          }))
        }
      />
      <CoffeePriceSlider
        value={[filters.netWeightMin ?? 0, filters.netWeightMax ?? 100]}
        onChange={(value) =>
          setFilters((prev) => ({
            ...prev,
            netWeightMin: value[0],
            netWeightMax: value[1],
          }))
        }
      />
      <CoffeeTypeDropdown
        value={filters.type}
        onChange={onFilterChange("type")}
      />
      <CoffeeCompositionDropdown
        value={filters.composition}
        onChange={onFilterChange("composition")}
      />
      <CoffeeCountryDropdown
        value={filters.country}
        onChange={onFilterChange("country")}
      />
    </div>
  );
};
