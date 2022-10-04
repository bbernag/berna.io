import React from "react";
import Header from "../Header";

type ILayout = React.PropsWithChildren;

function Layout({ children }: ILayout) {
  return (
    <main>
      <Header />
      {children}
    </main>
  );
}

export default Layout;
