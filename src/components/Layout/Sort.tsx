import React from "react";
import styles from "@/styles/sort.module.css";

export const Sort = ({ items, setItems }) => {
  const handleSortChange = (criteria) => {
    let sortedItems = [...items];
    if (criteria === "name") {
      sortedItems.sort((a, b) => b.name.localeCompare(a.name));
    } else if (criteria === "price") {
      sortedItems.sort((a, b) => b.price - a.price);
    }
    setItems(sortedItems);
  };

  return (
    <div className={styles.sortMenu}>
      <label className={styles.sortLabel}>Сортировать:</label>
      <select
        className={styles.sortSelect}
        onChange={(e) => handleSortChange(e.target.value)}
      >
        <option value="name">По имени (по убыванию)</option>
        <option value="price">По цене (по убыванию)</option>
      </select>
    </div>
  );
};
