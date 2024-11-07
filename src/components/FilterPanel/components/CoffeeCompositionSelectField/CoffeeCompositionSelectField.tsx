import { useState } from "react";
import styles from "../../FilterPanel.module.css";
import { useQuery } from "@tanstack/react-query";
import { api, endpoints } from "@/lib/api";

interface CoffeeCompositionSelectFieldProps {
  value?: string;
  onChange: (value: string) => void;
}

export const CoffeeCompositionSelectField = ({
  value,
  onChange,
}: CoffeeCompositionSelectFieldProps) => {
  const { data: compositions = [] } = useQuery({
    queryKey: [endpoints.getCoffeeCompositionList()],
    queryFn: () => api.getCoffeeCompositionList(),
    select: ({ data }) => data.data,
  });

  return (
    <div className={styles.filterItem}>
      <label className={styles.filterItemLabel} htmlFor="coffeeBlend">
        Склад кави
      </label>
      <select
        id="coffeeBlend"
        name="coffeeBlend"
        value={value}
        onChange={(event) => onChange(event.target.value)}
        className={styles.filterSelect}
      >
        <option value="">Всі</option>
        {compositions.map((composition) => (
          <option key={composition.id} value={composition.id}>
            {composition.name}
          </option>
        ))}
      </select>
    </div>
  );
};
