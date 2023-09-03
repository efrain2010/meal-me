import React, { FC } from "react";
import { SplitView, UnstyledLink } from "../../atoms";
import { Field, Form, Formik, FormikValues } from "formik";
import { CrudHeader } from "../CrudHeader/CrudHeader";

interface Props {
  mainComponent: React.ReactNode;
}

export const CrudLayout: FC<Props & MenuProps> = ({ navigation, mainComponent }) => {
  return (
    <>
      <CrudHeader />
      <SplitView
        split="15:85"
        startComponentAs="aside"
        startComponent={<Menu navigation={navigation} />}
        endComponent={mainComponent}
      />
    </>
  );
};

interface MenuProps {
  navigation: Array<{ label: string; url: string }>;
}

const Menu: FC<MenuProps> = ({ navigation }) => {
  return (
    <nav className="list-none bg">
      {navigation.map((link, index) => (
        <li key={`${link.url}-${index}`}>
          <UnstyledLink to={"link.url"}>{link.label}</UnstyledLink>
        </li>
      ))}
    </nav>
  );
};
