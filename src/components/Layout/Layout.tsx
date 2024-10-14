import { ReactNode } from "react";
import { Header } from "./components/Header";

export const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <Header />
      <div className="container">{children}</div>
    </>
  );
};
