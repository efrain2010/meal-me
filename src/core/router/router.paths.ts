export const RouterPaths = () => {
  const crudPath = "crud";

  return {
    home: "/",

    // CRUD Urls
    crudIngredients: `${crudPath}/ingredients`,
  };
};

export const getRoutes = () =>
  Object.entries(RouterPaths()).map(([label, path]) => ({
    path,
    label,
  }));
