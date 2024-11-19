import type { GetAllCoffeeResult } from "@/lib/services/coffeeService";
import styles from "./CoffeeCard.module.css";
import { useCartStore } from "@/store/useCartStore";
import { useMemo } from "react";

interface CoffeeCardProps {
  coffee: GetAllCoffeeResult[number];
}

export const CoffeeCard = ({ coffee }: CoffeeCardProps) => {
  const cart = useCartStore();

  const isAdded = useMemo(
    () =>
      !!cart.coffees.find((cartCoffee) => cartCoffee.coffee.id === coffee.id),
    [cart, coffee]
  );

  return (
    <div className={styles.productCard}>
      <img
        src={coffee.imageUrl}
        alt={coffee.name}
        className={styles.productImage}
      />
      <div className={styles.productDetails}>
        <h3 className={styles.productName}>{coffee.name}</h3>
        <p className={styles.productRoast}>{coffee.type.name}</p>
        <p className={styles.flavorProfile}>
          Склад кави: {coffee.composition.name}
        </p>
        <div className={styles.productFooter}>
          <span className={styles.price}>€{coffee.salePrice}</span>
          {coffee.quantity !== 0 ? (
            <button onClick={() => cart.toggle(coffee)}>
              {isAdded ? "Remove from cart" : "Add to cart"}
            </button>
          ) : (
            "Not available"
          )}
        </div>
      </div>
    </div>
  );
};
