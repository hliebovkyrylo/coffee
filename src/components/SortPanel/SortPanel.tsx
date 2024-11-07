import React, { useState } from "react";

import styles from "./SortPanel.module.css";

interface SortPanelProps {
  sortBy?: string
  onChange: (sortBy: string) => void
}

export const SortPanel = ({ sortBy, onChange }: SortPanelProps) => {
  return (
    <div className={styles.sortMenu}>
      <label className={styles.sortLabel}>Sort by:</label>
      <select
        className={styles.sortSelect}
        value={sortBy}
        onChange={(e) => onChange(e.target.value)}
      >
        <option value="name">Name (from highest to lowest)</option>
        <option value="price">Price (sale) (highest to lowest)</option>
      </select>
    </div>
  );
};
