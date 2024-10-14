import React from "react";
import styles from './FilterPanel.module.css'

export const FilterPanel = () => {
  return (
    <div className={styles.filterPanel}>
      <div className={styles.filterItem}>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          className={styles.filterInput}
          placeholder="Введите название"
        />
      </div>

      <div className={styles.filterItem}>
        <label htmlFor="price">Price</label>
        <input
          type="number"
          id="priceMin"
          className={styles.filterInput}
          placeholder="Мин."
        />
        <input
          type="number"
          id="priceMax"
          className={styles.filterInput}
          placeholder="Макс."
        />
      </div>

      <div className={styles.filterItem}>
        <label htmlFor="weight">Weight</label>
        <input
          type="number"
          id="weightMin"
          className={styles.filterInput}
          placeholder="Мин."
        />
        <input
          type="number"
          id="weightMax"
          className={styles.filterInput}
          placeholder="Макс."
        />
      </div>

      <div className={styles.filterItem}>
        <label htmlFor="coffeeType">Type of coffee</label>
      </div>

      <div className={styles.filterItem}>
        <label htmlFor="coffeeBlend">Composition of coffee</label>
      </div>

      <div className={styles.filterItem}>
        <label htmlFor="country">Country of manufacture</label>
      </div>

      <button className={styles.applyButton}>Apply filters</button>
    </div>
  );
};
