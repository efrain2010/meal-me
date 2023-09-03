import React, { FC, PropsWithChildren } from "react";
import { Link, LinkProps } from "react-router-dom";

export const UnstyledLink: FC<PropsWithChildren<LinkProps>> = ({ to, children }) => (
  <Link to={to}>{children}</Link>
);
