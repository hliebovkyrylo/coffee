import React, { Dispatch, SetStateAction } from "react";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import styles from "./FilterPanel.module.css";
import { CoffeeFilters } from "@/schemas/coffeeFiltersSchema";

interface FilterPanelProps {
  filters: CoffeeFilters;
  setFilters: Dispatch<SetStateAction<CoffeeFilters>>;
}

export const FilterPanel = ({ filters, setFilters }: FilterPanelProps) => {
  const onFilterChange =
    <Filter extends keyof CoffeeFilters>(key: Filter) =>
      (value: CoffeeFilters[Filter]) => {
        const normalizedValue = value === "" || value === "Всі" ? null : value;
        setFilters({ ...filters, [key]: normalizedValue });
      };

  const dropdownOptions = ["Всі", "Всі", "Всі"];

  return (
    <div className={styles.filterPanel}>
      <div className={styles.filterField}>
        <label className={styles.filterLabel} htmlFor="name">Назва</label>
        <input
          id="name"
          type="text"
          value={filters.name || ""}
          placeholder="Введіть назву..."
          className={styles.filterInput}
          onChange={(e) => {
            const value = e.target.value.trim() === "" ? null : e.target.value;
            onFilterChange("name")(value);
          }}
        />
      </div>

      <div className={styles.filterField}>
        <label className={styles.filterLabel}>Ціна</label>
        <Slider
          range
          min={0}
          max={99}
          value={[
            filters.salePriceMin ?? 0,
            filters.salePriceMax ?? 99,
          ]}
          className={styles.slider}
          onChange={(value: [number, number]) => {
            onFilterChange("salePriceMin")(value[0]);
            onFilterChange("salePriceMax")(value[1]);
          }}
          onAfterChange={(value) => {
            if (value[0] === 0 && value[1] === 99) {
              setFilters((prev) => ({
                ...prev,
                salePriceMin: null,
                salePriceMax: null,
              }));
            }
          }}
        />
        <div className={styles.sliderValues}>
          <span>{filters.salePriceMin ?? 0}</span>
          <span>{filters.salePriceMax ?? 99}</span>
        </div>
      </div>

      <div className={styles.filterField}>
        <label className={styles.filterLabel}>Маса</label>
        <Slider
          range
          min={0}
          max={250}
          value={[
            filters.netWeightMin ?? 0,
            filters.netWeightMax ?? 250,
          ]}
          className={styles.slider}
          onChange={(value: [number, number]) => {
            onFilterChange("netWeightMin")(value[0]);
            onFilterChange("netWeightMax")(value[1]);
          }}
          onAfterChange={(value) => {
            if (value[0] === 0 && value[1] === 250) {
              setFilters((prev) => ({
                ...prev,
                netWeightMin: null,
                netWeightMax: null,
              }));
            }
          }}
        />
        <div className={styles.sliderValues}>
          <span>{filters.netWeightMin ?? 0}</span>
          <span>{filters.netWeightMax ?? 250}</span>
        </div>
      </div>

      {[
        { label: "Вид", key: "type" },
        { label: "Склад", key: "composition" },
        { label: "Країна-виробник", key: "country" },
      ].map(({ label, key }) => (
        <div key={key} className={styles.filterField}>
          <label className={styles.filterLabel}>{label}</label>
          <Dropdown
            options={dropdownOptions}
            value={filters[key as keyof CoffeeFilters] || "Всі"}
            className={styles.dropdown}
            controlClassName={styles.dropdownControl}
            menuClassName={styles.dropdownMenu}
            onChange={(option) => {
              const value = option.value === "Всі" ? null : option.value;
              onFilterChange(key as keyof CoffeeFilters)(value);
            }}
          />
        </div>
      ))}
    </div>
  );
};
