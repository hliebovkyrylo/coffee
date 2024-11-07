import React from "react";
import styles from "./Header.module.css";
import { CarIcon, ShoppingCartIcon } from "lucide-react";
import { ShopDrawer } from "@/components/ShopDrawer";
import { useCartStore } from "@/store/useCartStore";

export const Header = () => {
  const cart = useCartStore();

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.logo}>Coffee</div>
        <div className={styles.right_section}>
          <ShopDrawer>
            <button className={styles.shopping_cart}>
              <ShoppingCartIcon width={20} height={20} />
              <p>Shopping Cart ({cart.coffees.length})</p>
            </button>
          </ShopDrawer>
        </div>
      </div>
    </header>
  );
};
