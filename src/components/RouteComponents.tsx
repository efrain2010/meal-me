import React from "react";
import { Router } from "../core/router/Router";
import { Home } from "../pages/Home/Home";
import { Ingredients } from "../pages/Ingredients/Ingredients";

export const RouteComponents = () => {
  return (
    <Router
      components={{
        home: <Home />,
        crudIngredients: <Ingredients />,
      }}
    />
  );
};
