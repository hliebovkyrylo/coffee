import styles from "../../FilterPanel.module.css";

interface CoffeeWeightRangeFieldProps {
  min?: number;
  onChangeMin: (value: number) => void;
  max?: number;
  onChangeMax: (value: number) => void;
}

export const CoffeeWeightRangeField = ({
  min,
  max,
  onChangeMax,
  onChangeMin,
}: CoffeeWeightRangeFieldProps) => {
  return (
    <div className={styles.filterItem}>
      <label className={styles.filterItemLabel} htmlFor="weight">
        Маса
      </label>
      <input
        type="number"
        value={min}
        min={0}
        max={max}
        onChange={(event) => onChangeMin(event.target.valueAsNumber)}
        id="weightMin"
        name="weightMin"
        className={styles.filterInput}
        placeholder="Мін."
      />
      <input
        type="number"
        id="weightMax"
        min={min}
        value={max}
        onChange={(event) => onChangeMax(event.target.valueAsNumber)}
        name="weightMax"
        className={styles.filterInput}
        placeholder="Макс."
      />
    </div>
  );
};
