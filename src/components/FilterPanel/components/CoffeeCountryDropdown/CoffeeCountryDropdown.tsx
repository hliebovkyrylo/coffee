import styles from "../../FilterPanel.module.css";
import { api, endpoints } from "@/lib/api";
import { useQuery } from "@tanstack/react-query";
import Dropdown from "react-dropdown";

interface CoffeeCountryDropdownProps {
  value?: string;
  onChange: (value: string) => void;
}

export const CoffeeCountryDropdown = ({
  value,
  onChange,
}: CoffeeCountryDropdownProps) => {
  const { data: countries = [] } = useQuery({
    queryKey: [endpoints.getCountryList()],
    queryFn: () => api.getCountryList(),
    select: ({ data }) => data.data,
  });

  const dropdownOptions = [
    { label: "Всі", value: "" },
    ...countries.map((countries) => ({
      label: countries.name,
      value: countries.name,
    })),
  ];

  return (
    <div className={styles.filterField}>
      <label className={styles.filterLabel}>
        Країна-виробник
      </label>
      <Dropdown
        options={dropdownOptions}
        value={value || "Всі"}
        onChange={(event) => onChange(event.value)}
        className={styles.dropdown}
        controlClassName={styles.dropdownControl}
        menuClassName={styles.dropdownMenu}
      />
    </div>
  );
};
