import { useState } from "react";
import styles from "../../FilterPanel.module.css";
import { useQuery } from "@tanstack/react-query";
import { api, endpoints } from "@/lib/api";

interface CoffeeTypeSelectFieldProps {
  value?: string;
  onChange: (value: string) => void;
}

export const CoffeeTypeSelectField = ({
  value,
  onChange,
}: CoffeeTypeSelectFieldProps) => {
  const { data: coffeeTypes = [] } = useQuery({
    queryKey: [endpoints.getCoffeeTypeList()],
    queryFn: () => api.getCoffeeTypeList(),
    select: ({ data }) => data.data,
  });

  return (
    <div className={styles.filterItem}>
      <label className={styles.filterItemLabel} htmlFor="coffeeType">
        Вид кави
      </label>
      <select
        value={value}
        onChange={(event) => onChange(event.target.value)}
        id="coffeeType"
        name="coffeeType"
        className={styles.filterSelect}
      >
        <option value="">Всі</option>
        {coffeeTypes.map((coffeeType) => (
          <option key={coffeeType.id} value={coffeeType.id}>
            {coffeeType.name}
          </option>
        ))}
      </select>
    </div>
  );
};
