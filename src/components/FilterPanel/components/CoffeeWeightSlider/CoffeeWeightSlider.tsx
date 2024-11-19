import Slider from "rc-slider";
import styles from "../../FilterPanel.module.css";

interface CoffeeWeightSliderProps {
  value: number[];
  onChange: (value: number[]) => void;
}

export const CoffeeWeightSlider = ({
  value,
  onChange,
}: CoffeeWeightSliderProps) => {
  return (
    <div className={styles.filterField}>
      <label className={styles.filterLabel}>Вага</label>
      <Slider
        range
        className={styles.slider}
        step={10}
        min={0}
        max={500}
        defaultValue={[0, 500]}
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
