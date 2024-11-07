import { Drawer } from "vaul";
import styles from "./ShopDrawer.module.css";
import { ReactNode, useMemo, useState } from "react";
import { ShopBill } from "./components/ShopBill";
import { useCartStore } from "@/store/useCartStore";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { api, endpoints } from "@/lib/api";
import { AxiosError } from "axios";
import { ErrorResponse } from "@/lib/utils/apiResponse";

interface ShopDrawerProps {
  children?: ReactNode;
}

export const ShopDrawer = ({ children }: ShopDrawerProps) => {
  const cart = useCartStore();
  const [error, setError] = useState("");
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: api.orderCoffee,
    onSuccess() {
      cart.clear();
      queryClient.invalidateQueries({
        exact: false,
        queryKey: [endpoints.getCoffeeList()],
      });
    },
    onError(response: AxiosError<ErrorResponse>) {
      setError(response.response?.data.error_message || "");
    },
  });

  const total = cart.coffees.reduce(
    (summa, cartItem) =>
      summa + cartItem.coffee.purchasePrice * cartItem.quantity,
    0
  );

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
              {cart.coffees.map((bill) => (
                <ShopBill coffee={bill} key={bill.coffee.id} />
              ))}
              <div className={styles.total}>
                <div>Total: </div>
                <div>${total.toFixed(3)}</div>
              </div>
            </div>
            <div>
              {error && <p className={styles.error}>{error}</p>}
              <button
                onClick={() =>
                  mutation.mutate(
                    cart.coffees.map((cartItem) => ({
                      id: cartItem.coffee.id,
                      quantity: cartItem.quantity,
                    }))
                  )
                }
                disabled={cart.coffees.length === 0}
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
