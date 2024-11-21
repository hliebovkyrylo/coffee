import type { GetAllCoffeeResult } from "@/lib/services/coffeeService";
import { CoffeeCard } from "../CoffeeCard";
import styles from "./CoffeeList.module.css";

interface CoffeeListProps {
  data: GetAllCoffeeResult;
}

export const CoffeeList = ({ data }: CoffeeListProps) => {
  return (
    <div className={styles.container}>
      {data.map((coffee) => (
        <CoffeeCard coffee={coffee} key={coffee.id} />
      ))}
    </div>
  );
};
