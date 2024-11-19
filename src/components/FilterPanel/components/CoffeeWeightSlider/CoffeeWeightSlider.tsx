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
      <div className={styles.sliderContent}>
        <div className={styles.sliderValues}>{value[0]}</div>
        <Slider
          range
          styles={{
            track: {
              backgroundColor: "#E6E5E3",
              height: 4,
            },
            handle: {
              borderColor: "#E6E5E3",
              backgroundColor: "#fff",
              height: 28,
              width: 28,
            },
          }}
          className={styles.slider}
          min={0}
          max={500}
          defaultValue={[0, 500]}
          onChange={(value) => {
            if (Array.isArray(value)) {
              onChange(value);
            }
          }}
        />
        <div className={styles.sliderValues}>{value[1]}</div>
      </div>
    </div>
  );
};
