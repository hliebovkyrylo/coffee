import React, { useState } from "react";
import styles from "@/styles/sort.module.css";

export const Sort = ({ items, setItems }) => {

  const handleSortChange = (criteria) => {
    let sortedItems;

    if (criteria === 'name') {
      sortedItems = [...items].sort((a, b) => b.name.localeCompare(a.name));
    } else if (criteria === 'price') {
      sortedItems = [...items].sort((a, b) => b.price - a.price);
    }

    setItems(sortedItems); 
  };

  return (
    <div className={styles.sortMenu}>
      <label className={styles.sortLabel}>Sort by:</label>
      <select className={styles.sortSelect} onChange={(e) => handleSortChange(e.target.value)}>
        <option value="name">Name (from highest to lowest)</option>
        <option value="price">Price (sale) (highest to lowest)</option>
      </select>
    </div>
  );
};
