import React, { FC } from "react";
import { Header } from "./global/Header";
import { Footer } from "./global/Footer";
import { RouteComponents } from "./RouteComponents";

export const App: FC = () => {
  return (
    <>
      <Header />
      <RouteComponents />
      <Footer />
    </>
  );
};
