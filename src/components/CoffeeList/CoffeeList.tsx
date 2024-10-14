import { CoffeeCard } from "../CoffeeCard";
import styles from "./CoffeeList.module.css";

export const CoffeeList = () => {
  return (
    <div className={styles.container}>
      <CoffeeCard />
      <CoffeeCard />
      <CoffeeCard />
      <CoffeeCard />
      <CoffeeCard />
      <CoffeeCard />
      <CoffeeCard />
    </div>
  );
};
