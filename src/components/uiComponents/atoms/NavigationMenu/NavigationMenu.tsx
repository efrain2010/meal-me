import React, { FC } from "react";
import { Link } from "react-router-dom";

interface MenuProps {
  navigation: Array<{ label: string; url: string }>;
}

export const NavigationMenu: FC<MenuProps> = ({ navigation }) => {
  return (
    <nav className="list-none">
      {navigation.map((link, index) => (
        <li key={`${link.url}-${index}`}>
          <Link to={"link.url"}>{link.label}</Link>
        </li>
      ))}
    </nav>
  );
};
