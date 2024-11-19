import React from "react";

import styles from "./SortPanel.module.css";

interface SortPanelProps {
  sortBy?: string;
  sortOrder?: string;
  onChange: (sortBy: string, sortOrder: string) => void;
}

export const SortPanel = ({ sortBy, sortOrder, onChange }: SortPanelProps) => {
  const handleSortByChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    onChange(e.target.value, sortOrder || "asc");
  };

  const handleSortOrderChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    onChange(sortBy || "name", e.target.value);
  };

  return (
    <div className={styles.sortMenu}>
      <select
        className={styles.sortSelect}
        value={sortBy}
        onChange={handleSortByChange}
      >
        <option value="name">За назвою</option>
        <option value="price">За ціною</option>
      </select>
      <select
        className={styles.sortSelect}
        value={sortOrder}
        onChange={handleSortOrderChange}
      >
        <option value="asc">За зростанням</option>
        <option value="desc">За спаданням</option>
      </select>
    </div>
  );
};
