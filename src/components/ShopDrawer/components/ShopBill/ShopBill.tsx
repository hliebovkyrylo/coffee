import { MinusIcon, PlusIcon } from "lucide-react";
import styles from "./ShopBill.module.css";
import { CoffeeWithQuantity, useCartStore } from "@/store/useCartStore";

interface ShopBillProps {
  coffee: CoffeeWithQuantity;
}

export const ShopBill = ({ coffee }: ShopBillProps) => {
  const cart = useCartStore();

  return (
    <div className={styles.billItem}>
      <img src={coffee.coffee.imageUrl} alt={coffee.coffee.name} />
      <div className={styles.itemDetails}>
        <div>
          <div className={styles.name}>{coffee.coffee.name}</div>
          <div className={styles.count}>
            <div>{coffee.quantity}</div>
            <button
              disabled={coffee.quantity <= 1}
              onClick={() => cart.remove(coffee.coffee)}
              className={styles.minus}
            >
              -
            </button>
            <button
              disabled={coffee.quantity >= coffee.coffee.quantity}
              onClick={() => cart.add(coffee.coffee)}
              className={styles.plus}
            >
              +
            </button>
          </div>
        </div>
        <div className={styles.price}>
          ${coffee.quantity * coffee.coffee.purchasePrice}
        </div>
      </div>
    </div>
  );
};
