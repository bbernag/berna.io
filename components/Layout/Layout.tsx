import React from "react";
import styles from "./Layout.module.scss";

type ILayout = React.PropsWithChildren;

function Layout({ children }: ILayout) {
  return (
    <main className={styles.main}>
      {/* <Header /> */}
      {children}
    </main>
  );
}

export default Layout;
