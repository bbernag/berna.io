import React from "react";

import Header from "../Header";

type ILayout = React.PropsWithChildren;

function Layout({ children }: ILayout) {
  return (
    <>
      <Header />
      {children}
    </>
  );
}

export default Layout;
