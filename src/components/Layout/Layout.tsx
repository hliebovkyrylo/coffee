import { ReactNode } from "react";
import { Header } from "./Header";
import { Sort } from "./Sort";
import { Filter } from "./Filter";

export const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <>
    <div className="container">{children}
      <Header />
      <Sort/>
      <Filter/>
      </div>
    </>
  );
};
