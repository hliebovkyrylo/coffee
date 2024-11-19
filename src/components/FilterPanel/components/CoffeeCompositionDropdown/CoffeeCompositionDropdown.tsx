import styles from "../../FilterPanel.module.css";
import { useQuery } from "@tanstack/react-query";
import { api, endpoints } from "@/lib/api";
import Dropdown from "react-dropdown";

interface CoffeeCompositionDropdownProps {
  value?: string;
  onChange: (value: string) => void;
}

export const CoffeeCompositionDropdown = ({
  value,
  onChange,
}: CoffeeCompositionDropdownProps) => {
  const { data: compositions = [] } = useQuery({
    queryKey: [endpoints.getCoffeeCompositionList()],
    queryFn: () => api.getCoffeeCompositionList(),
    select: ({ data }) => data.data,
  });

  const dropdownOptions = [
    { label: "Всі", value: "" },
    ...compositions.map((composition) => ({
      label: composition.name,
      value: composition.name,
    })),
  ];

  return (
    <div className={styles.filterField}>
      <label className={styles.filterLabel}>Склад кави</label>
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
