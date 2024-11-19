import Slider from "rc-slider";
import styles from "../../FilterPanel.module.css";

interface CoffeePriceSliderProps {
  value: number[];
  onChange: (value: number[]) => void;
}

export const CoffeePriceSlider = ({
  value,
  onChange,
}: CoffeePriceSliderProps) => {
  return (
    <div className={styles.filterField}>
      <label className={styles.filterLabel}>Ціна</label>
      <Slider
        range
        className={styles.slider}
        step={0.01}
        defaultValue={[0, 100]}
        onChange={(value) => {
          if (Array.isArray(value)) {
            onChange(value);
          }
        }}
      />
      <div className={styles.sliderValues}>
        <span>{value[0]}</span>
        <span>{value[1]}</span>
      </div>
    </div>
  );
};
