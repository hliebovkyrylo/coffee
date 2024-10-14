import React from "react";

import styles from "./SortPanel.module.css";

export const SortPanel = () => {
  const handleSortChange = (key: string) => {};
  return (
    <div className={styles.sortMenu}>
      <label>Sort by:</label>
      <button
        className={styles.sortButton}
        onClick={() => handleSortChange("name")}
      >
        Name (from highest to lowest)
      </button>
      <button
        className={styles.sortButton}
        onClick={() => handleSortChange("price")}
      >
        Price (sale) (highest to lowest)
      </button>
    </div>
  );
};
