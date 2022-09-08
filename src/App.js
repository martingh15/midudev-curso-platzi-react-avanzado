import React from "react";
import { ListOfCategories } from "./components/ListOfCategories";
import { GlobalStyle } from "./globalStyles";

export const App = () => {
  return (
    <>
      <GlobalStyle />
      <ListOfCategories />
    </>
  );
};
