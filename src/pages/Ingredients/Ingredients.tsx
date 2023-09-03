import React from "react";
import { Ingredients as IngredientsLogicComponent } from "../../components/logicComponents";
import { CrudLayout } from "../../components/uiComponents";

export const Ingredients = () => {
  return <CrudLayout navigation={[]} mainComponent={<IngredientsLogicComponent />} />;
};
