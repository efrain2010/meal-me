import React, { FC, memo } from "react";
import { Header } from "./global/Header/Header";
import { Footer } from "./global/Footer/Footer";
import { RouteComponents } from "./RouteComponents";
import { useIsCrudPath } from "../core/router/helpers";

export const App: FC = () => {
  return (
    <>
      <ConditionalHeader />
      <RouteComponents />
      <ConditionalFooter />
    </>
  );
};

const ConditionalHeader = memo(() => {
  const isCrudPath = useIsCrudPath();

  if (isCrudPath) {
    return null;
  }

  return <Header />;
});

const ConditionalFooter = memo(() => {
  const isCrudPath = useIsCrudPath();

  if (isCrudPath) {
    return null;
  }

  return <Footer />;
});
