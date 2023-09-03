import React from "react";
import { getRoutes } from "../../../core/router/router.paths";
import { UnstyledLink } from "../../uiComponents";

export const Header = () => {
  return (
    <header className="flex flex-row">
      <aside className="flex-auto">
        <h1>MealMe</h1>
      </aside>
      <AppLinks />
    </header>
  );
};

const AppLinks = () => {
  const routes = getRoutes();

  return (
    <nav className="flex list-none gap-x-1">
      {Object.entries(routes).map(([indexLabel, data]) => (
        <li key={indexLabel}>
          <UnstyledLink to={data.path} className="text-blue-600">
            {indexLabel}
          </UnstyledLink>
        </li>
      ))}
    </nav>
  );
};
