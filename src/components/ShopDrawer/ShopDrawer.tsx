import { Drawer } from "vaul";
import styles from "./ShopDrawer.module.css";
import { ReactNode, useMemo } from "react";
import { ShopBill } from "./components/ShopBill";
import { useCartStore } from "@/store/useCartStore";

interface ShopDrawerProps {
  children?: ReactNode;
}

export const ShopDrawer = ({ children }: ShopDrawerProps) => {
  const { coffees } = useCartStore();

  const total = useMemo(() => {
    return 0;
  }, [coffees]);

  return (
    <Drawer.Root direction="right">
      <Drawer.Trigger asChild>{children}</Drawer.Trigger>
      <Drawer.Portal>
        <Drawer.Overlay className={styles.overlay} />
        <Drawer.Content
          className={styles.content}
          style={
            { "--initial-transform": "calc(100% + 8px)" } as React.CSSProperties
          }
        >
          <div className={styles.container}>
            <div>
              <Drawer.Title className={styles.title}>Bills</Drawer.Title>
              {coffees.map((bill) => (
                <ShopBill coffee={bill} key={bill.coffee.id} />
              ))}
              <div className={styles.total}>
                <div>Total: </div>
                <div>${total.toFixed(3)}</div>
              </div>
            </div>
            <div>
              <button
                disabled={coffees.length === 0}
                className={styles.printButton}
              >
                Print Bills
              </button>
            </div>
          </div>
        </Drawer.Content>
      </Drawer.Portal>
    </Drawer.Root>
  );
};
