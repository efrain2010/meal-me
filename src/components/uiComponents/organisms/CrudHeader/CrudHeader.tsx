import React from "react";
import { Text } from "../../index";

export const CrudHeader = () => {
  return (
    <header className="flex bg-emerald-900">
      <Text className="flex-1" as="h1" size="px18">
        MealMe CRUD
      </Text>
      <i>🦖</i>
    </header>
  );
};
