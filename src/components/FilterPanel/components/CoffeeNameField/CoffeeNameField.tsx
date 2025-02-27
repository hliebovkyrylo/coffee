import styles from "../../FilterPanel.module.css";

interface CoffeeNameFieldProps {
  value?: string
  onChange: (value: string) => void
}

export const CoffeeNameField = ({ value, onChange }: CoffeeNameFieldProps) => {
  return (
    <div className={styles.filterField}>
      <label className={styles.filterLabel} htmlFor="name">
        Назва
      </label>
      <input
        type="text"
        id="name"
        value={value}
        onChange={(event) => onChange(event.target.value)}
        name="name"
        className={styles.filterInput}
        placeholder="Введіть назву"
      />
    </div>
  );
};
