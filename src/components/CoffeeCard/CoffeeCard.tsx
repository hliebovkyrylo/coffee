import type { GetAllCoffeeResult } from "@/lib/services/coffeeService";
import styles from "./CoffeeCard.module.css";

interface CoffeeCardProps {
  coffee: GetAllCoffeeResult[number]
}

export const CoffeeCard = ({ coffee }: CoffeeCardProps) => {
  return (
    <div className={styles.productCard}>
      <img
        src="https://img.freepik.com/premium-photo/white-cup-coffee-coffee-beans-black-background_198067-1042376.jpg?semt=ais_hybrid"
        alt={"Brazil Sitio Penha 250g"}
        className={styles.productImage}
      />
      <div className={styles.productDetails}>
        <h3 className={styles.productName}>{"Brazil Sitio Penha 250g"}</h3>
        <p className={styles.productRoast}>{"Espresso roast"}</p>
        <p className={styles.flavorProfile}>
          Flavor Profile: {"toffee & milk chocolate, red apple, orange zest"}
        </p>
        <div className={styles.productFooter}>
          <span className={styles.price}>€4</span>
          <button>Add to cart</button>
        </div>
      </div>
    </div>
  );
};
