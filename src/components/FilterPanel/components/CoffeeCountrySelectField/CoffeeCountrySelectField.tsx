import styles from "../../FilterPanel.module.css";
import { api, endpoints } from "@/lib/api";
import { useQuery } from "@tanstack/react-query";

interface CoffeeCountrySelectFieldProps {
  value?: string;
  onChange: (value: string) => void;
}

export const CoffeeCountrySelectField = ({
  value,
  onChange,
}: CoffeeCountrySelectFieldProps) => {
  const { data: countries = [] } = useQuery({
    queryKey: [endpoints.getCountryList()],
    queryFn: () => api.getCountryList(),
    select: ({ data }) => data.data,
  });

  return (
    <div className={styles.filterItem}>
      <label className={styles.filterItemLabel} htmlFor="country">
        Країна-виробник
      </label>
      <select
        value={value}
        onChange={(event) => onChange(event.target.value)}
        id="country"
        name="country"
        className={styles.filterSelect}
      >
        <option value="">Всі</option>
        {countries.map((country) => (
          <option key={country.id} value={country.id}>
            {country.name}
          </option>
        ))}
      </select>
    </div>
  );
};
