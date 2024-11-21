import styles from "../../FilterPanel.module.css";
import { useQuery } from "@tanstack/react-query";
import { api, endpoints } from "@/lib/api";
import Dropdown from "react-dropdown";

interface CoffeeTypeDropdownProps {
  value?: string;
  onChange: (value: string) => void;
}

export const CoffeeTypeDropdown = ({
  value,
  onChange,
}: CoffeeTypeDropdownProps) => {
  const { data: coffeeTypes = [] } = useQuery({
    queryKey: [endpoints.getCoffeeTypeList()],
    queryFn: () => api.getCoffeeTypeList(),
    select: ({ data }) => data.data,
  });

  const dropdownOptions = [
    { label: "Всі", value: "" },
    ...coffeeTypes.map((coffeeType) => ({
      label: coffeeType.name,
      value: coffeeType.name,
    })),
  ];

  return (
    <div className={styles.filterField}>
      <label className={styles.filterLabel}>Вид кави</label>
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
