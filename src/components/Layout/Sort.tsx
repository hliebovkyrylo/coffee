import React from "react";

import styles from "@/styles/sort.module.css";

export const Sort = () => {
  return (
    <div className={styles.sortMenu}>
        <label>Sort by:</label>
        <button 
          className={styles.sortButton} 
          onClick={() => handleSortChange('name')}
        >
          Name (from highest to lowest)
        </button>
        <button 
          className={styles.sortButton} 
          onClick={() => handleSortChange('price')}
        >
          Price (sale) (highest to lowest)
        </button>
      </div>
      
  );
}