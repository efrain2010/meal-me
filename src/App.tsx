import React, { FC } from "react";
import { Header } from "./components/global/Header";
import { Footer } from "./components/global/Footer";
import { Home } from "./components/pages/home/Home";

export const App: FC = () => {
  console.log("I'm in client and server side");
  return (
    <>
      <Header />
      <Home />
      <Footer />
    </>
  );
};
