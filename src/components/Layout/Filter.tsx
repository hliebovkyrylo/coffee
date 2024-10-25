import React, { useEffect, useState } from "react";
import styles from "@/styles/filter.module.css";

export const Filter = ({ onFilterChange }) => {
  const [coffeeTypes, setCoffeeTypes] = useState([]);
  const [coffeeBlends, setCoffeeBlends] = useState([]);
  const [countries, setCountries] = useState([]);

  
  useEffect(() => {
    fetch('/api/coffeeTypes')
      .then((res) => res.json())
      .then((data) => setCoffeeTypes(data));
    
    fetch('/api/coffeeBlends')
      .then((res) => res.json())
      .then((data) => setCoffeeBlends(data));

    fetch('/api/countries')
      .then((res) => res.json())
      .then((data) => setCountries(data));
  }, []);

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    onFilterChange(name, value);
  };

  return (
    <div className={styles.filterPanel}>
     
      <div className={styles.filterItem}>
        <label htmlFor="name">Назва</label>
        <input
          type="text"
          id="name"
          name="name"
          className={styles.filterInput}
          placeholder="Введіть назву"
          onChange={handleFilterChange}
        />
      </div>

   
      <div className={styles.filterItem}>
        <label htmlFor="price">Ціна (продаж)</label>
        <input
          type="number"
          id="priceMin"
          name="priceMin"
          className={styles.filterInput}
          placeholder="Мін."
          onChange={handleFilterChange}
        />
        <input
          type="number"
          id="priceMax"
          name="priceMax"
          className={styles.filterInput}
          placeholder="Макс."
          onChange={handleFilterChange}
        />
      </div>

     
      <div className={styles.filterItem}>
        <label htmlFor="weight">Маса</label>
        <input
          type="number"
          id="weightMin"
          name="weightMin"
          className={styles.filterInput}
          placeholder="Мін."
          onChange={handleFilterChange}
        />
        <input
          type="number"
          id="weightMax"
          name="weightMax"
          className={styles.filterInput}
          placeholder="Макс."
          onChange={handleFilterChange}
        />
      </div>

   
      <div className={styles.filterItem}>
        <label htmlFor="coffeeType">Вид кави</label>
        <select
          id="coffeeType"
          name="coffeeType"
          className={styles.filterSelect}
          onChange={handleFilterChange}
        >
          <option value="">Всі</option>
          {coffeeTypes.map((type) => (
            <option key={type} value={type}>
              {type}
            </option>
          ))}
        </select>
      </div>

    
      <div className={styles.filterItem}>
        <label htmlFor="coffeeBlend">Склад кави</label>
        <select
          id="coffeeBlend"
          name="coffeeBlend"
          className={styles.filterSelect}
          onChange={handleFilterChange}
        >
          <option value="">Всі</option>
          {coffeeBlends.map((blend) => (
            <option key={blend} value={blend}>
              {blend}
            </option>
          ))}
        </select>
      </div>

      
      <div className={styles.filterItem}>
        <label htmlFor="country">Країна-виробник</label>
        <select
          id="country"
          name="country"
          className={styles.filterSelect}
          onChange={handleFilterChange}
        >
          <option value="">Всі</option>
          {countries.map((country) => (
            <option key={country} value={country}>
              {country}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};
