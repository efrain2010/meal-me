import React from "react";
import { Route, Routes } from "react-router-dom";
import { RouterPaths } from "./router.paths";

type RouterPathsType = keyof ReturnType<typeof RouterPaths>;

interface RouterProps {
  components: Record<RouterPathsType, React.ReactNode>;
}

export const Router: React.FC<RouterProps> = ({ components }) => {
  const paths = RouterPaths();

  return (
    <Routes>
      {Object.entries(components).map(([index, component]) => (
        <Route key={index} path={paths[index as RouterPathsType]} element={component} />
      ))}
    </Routes>
  );
};
