import React, { ChangeEvent, FC, useEffect, useState } from "react";
import styles from "@/styles/filter.module.css";

interface Props {
  onFilterChange: (name: string, value: string | [number, number]) => void;
}

export const Filter: FC<Props> = ({ onFilterChange }) => {
  const [coffeeTypes, setCoffeeTypes] = useState<string[]>([]);
  const [coffeeBlends, setCoffeeBlends] = useState<string[]>([]);
  const [countries, setCountries] = useState<string[]>([]);
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 100]);
  const [weightRange, setWeightRange] = useState<[number, number]>([0, 500]);
 

  useEffect(() => {
    fetch("/api/coffeeTypes")
      .then((res) => res.json())
      .then((data) => setCoffeeTypes(data));

    fetch("/api/coffeeBlends")
      .then((res) => res.json())
      .then((data) => setCoffeeBlends(data));

    fetch("/api/countries")
      .then((res) => res.json())
      .then((data) => setCountries(data));
  }, []);


  const handleSliderChange = (name: string, values: [number, number]) => {
    onFilterChange(name, values);
  };

  const handlePriceChange = (index: 0 | 1, value: number) => {
    const newRange: [number, number] = index === 0 ? [value, priceRange[1]] : [priceRange[0], value];
    setPriceRange(newRange);
    handleSliderChange("priceRange", newRange);
  };

  const handleWeightChange = (index: 0 | 1, value: number) => {
    const newRange: [number, number] = index === 0 ? [value, weightRange[1]] : [weightRange[0], value];
    setWeightRange(newRange);
    handleSliderChange("weightRange", newRange);
  };

  return (
    <div className={styles.filterPanel}>
      <input
        type="text"
        id="name"
        name="name"
        className={styles.filterInput}
        placeholder="Поиск по названию"
        onChange={(e) => onFilterChange(e.target.name, e.target.value)}
      />

      <div className={styles.sliderContainer}>
        <label>Цена: {priceRange[0]} - {priceRange[1]} грн</label>
        <div className={styles.rangeWrapper}>
          <input
            type="range"
            min="0"
            max="100"
            value={priceRange[0]}
            onChange={(e) => handlePriceChange(0, +e.target.value)}
          />
          <input
            type="range"
            min="0"
            max="100"
            value={priceRange[1]}
            onChange={(e) => handlePriceChange(1, +e.target.value)}
          />
        </div>
      </div>

      <div className={styles.sliderContainer}>
        <label>Масса: {weightRange[0]} - {weightRange[1]} г</label>
        <div className={styles.rangeWrapper}>
          <input
            type="range"
            min="0"
            max="500"
            value={weightRange[0]}
            onChange={(e) => handleWeightChange(0, +e.target.value)}
          />
          <input
            type="range"
            min="0"
            max="500"
            value={weightRange[1]}
            onChange={(e) => handleWeightChange(1, +e.target.value)}
          />
        </div>
      </div>

      <select
        id="coffeeType"
        name="coffeeType"
        className={styles.filterSelect}
        onChange={(e) => onFilterChange(e.target.name, e.target.value)}
      >
        <option value="">Вид кофе</option>
        {coffeeTypes.map((type) => (
          <option key={type} value={type}>
            {type}
          </option>
        ))}
      </select>

      <select
        id="coffeeBlend"
        name="coffeeBlend"
        className={styles.filterSelect}
        onChange={(e) => onFilterChange(e.target.name, e.target.value)}
      >
        <option value="">Состав кофе</option>
        {coffeeBlends.map((blend) => (
          <option key={blend} value={blend}>
            {blend}
          </option>
        ))}
      </select>


      <select
        id="country"
        name="country"
        className={styles.filterSelect}
        onChange={(e) => onFilterChange(e.target.name, e.target.value)}
      >
        <option value="">Страна</option>
        {countries.map((country) => (
          <option key={country} value={country}>
            {country}
          </option>
        ))}
      </select>
    </div>
  );
};
