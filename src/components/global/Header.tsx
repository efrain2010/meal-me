import React from "react";
import { getRoutes } from "../../core/router/router.paths";
import { Link } from "react-router-dom";
import { styled } from "styled-components";

export const Header = () => {
  return (
    <header>
      MealMe <AppLinks />
    </header>
  );
};

const AppLinks = () => {
  const routes = getRoutes();

  return (
    <Nav>
      {routes.map(({ label, path }) => (
        <Link key={label} to={path}>
          <li>{label}</li>
        </Link>
      ))}
    </Nav>
  );
};

const Nav = styled.nav`
  display: flex;
  gap: 0.1rem;
`;
