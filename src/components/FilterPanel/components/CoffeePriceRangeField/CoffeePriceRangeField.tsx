import styles from "../../FilterPanel.module.css";

interface CoffeePriceRangeFieldProps {
  min?: number;
  onChangeMin: (value: number) => void;
  max?: number;
  onChangeMax: (value: number) => void;
}

export const CoffeePriceRangeField = ({
  min,
  max,
  onChangeMax,
  onChangeMin,
}: CoffeePriceRangeFieldProps) => {
  return (
    <div className={styles.filterItem}>
      <label className={styles.filterItemLabel} htmlFor="price">
        Ціна (продаж)
      </label>
      <input
        type="number"
        id="priceMin"
        name="priceMin"
        className={styles.filterInput}
        placeholder="Мін."
        value={min}
        min={0}
        max={max}
        onChange={(event) => onChangeMin(event.target.valueAsNumber)}
      />
      <input
        type="number"
        id="priceMax"
        name="priceMax"
        className={styles.filterInput}
        placeholder="Макс."
        min={min}
        value={max}
        onChange={(event) => onChangeMax(event.target.valueAsNumber)}
      />
    </div>
  );
};
