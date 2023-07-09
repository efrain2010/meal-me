export const RouterPaths = () => {
  return {
    home: "/",
    ingredients: "/ingredients",
  };
};

export const getRoutes = () =>
  Object.entries(RouterPaths()).map(([label, path]) => ({
    path,
    label,
  }));
