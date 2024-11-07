import { MinusIcon, PlusIcon } from "lucide-react";
import styles from "./ShopBill.module.css";
import { CoffeeWithQuantity } from "@/store/useCartStore";

interface ShopBillProps {
  coffee: CoffeeWithQuantity
}

export const ShopBill = ({ coffee }: ShopBillProps) => {
  return (
    <div className={styles.billItem}>
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTImuKSsVkRpgL6uyGAOl7_pFrRcZoqX3qkrw&s"
        alt="Caramel Frappuccino"
      />
      <div className={styles.itemDetails}>
        <div>
          <div className={styles.name}>Caramel Frappuccino</div>
          <div className={styles.count}>
            <div>1</div>
            <button className={styles.minus}>-</button>
            <button className={styles.plus}>+</button>
          </div>
        </div>
        <div className={styles.price}>$3,95</div>
      </div>
    </div>
  );
};
