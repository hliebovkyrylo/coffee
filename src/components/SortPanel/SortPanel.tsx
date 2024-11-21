import React from "react";
import Dropdown from "react-dropdown";
import styles from "./SortPanel.module.css";

interface SortPanelProps {
  sortBy?: string;
  sortOrder?: string;
  onChange: (sortBy: string, sortOrder: string) => void;
}

export const SortPanel = ({ sortBy, sortOrder, onChange }: SortPanelProps) => {
  return (
    <div className={styles.sortMenu}>
      <Dropdown
        options={[
          { label: "За ціною", value: "price" },
          { label: "За назвою", value: "name" },
        ]}
        value={sortBy}
        placeholder={"Сортувати за"}
        controlClassName={styles.dropdownControl}
        onChange={(e) => onChange(e.value, sortOrder ? sortOrder : "")}
        menuClassName={styles.dropdownMenu}
      />
      <Dropdown
        options={[
          { label: "За зростанням", value: "asc" },
          { label: "За спаданням", value: "desc" },
        ]}
        value={sortOrder}
        placeholder={"Виберіть порядок"}
        onChange={(e) => onChange(sortBy ? sortBy : "", e.value)}
        controlClassName={styles.dropdownControl}
        menuClassName={styles.dropdownMenu}
      />
    </div>
  );
};
