import React, { Dispatch, SetStateAction } from "react";
import styles from "./FilterPanel.module.css";
import { CoffeeNameField } from "./components/CoffeeNameField";
import { CoffeePriceRangeField } from "./components/CoffeePriceRangeField";
import { CoffeeWeightRangeField } from "./components/CoffeeWeightRangeField";
import { CoffeeTypeSelectField } from "./components/CoffeeTypeSelectField";
import { CoffeeCompositionSelectField } from "./components/CoffeeCompositionSelectField";
import { CoffeeCountrySelectField } from "./components/CoffeeCountrySelectField";
import { CoffeeFilters } from "@/schemas/coffeeFiltersSchema";

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
      <CoffeeNameField
        value={filters.name || ""}
        onChange={onFilterChange("name")}
      />
      <CoffeePriceRangeField
        min={filters.salePriceMin}
        max={filters.salePriceMax}
        onChangeMin={onFilterChange("salePriceMin")}
        onChangeMax={onFilterChange("salePriceMax")}
      />
      <CoffeeWeightRangeField
        min={filters.netWeightMin}
        max={filters.netWeightMax}
        onChangeMin={onFilterChange("netWeightMin")}
        onChangeMax={onFilterChange("netWeightMax")}
      />
      <CoffeeTypeSelectField
        value={filters.type}
        onChange={onFilterChange("type")}
      />
      <CoffeeCompositionSelectField
        value={filters.composition}
        onChange={onFilterChange("composition")}
      />
      <CoffeeCountrySelectField
        value={filters.country}
        onChange={onFilterChange("country")}
      />
    </div>
  );
};
