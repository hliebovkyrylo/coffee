import { Drawer } from "vaul";
import styles from "./ShopDrawer.module.css";
import { ReactNode } from "react";
import { ShopBill } from "./components/ShopBill";

interface ShopDrawerProps {
  children?: ReactNode;
}

export const ShopDrawer = ({ children }: ShopDrawerProps) => {
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
              <ShopBill />
              <ShopBill />
              <ShopBill />
              <div className={styles.total}>
                <div>Total: </div>
                <div>$20,141</div>
              </div>
            </div>
            <div>
              <button className={styles.printButton}>Print Bills</button>
            </div>
          </div>
        </Drawer.Content>
      </Drawer.Portal>
    </Drawer.Root>
  );
};
