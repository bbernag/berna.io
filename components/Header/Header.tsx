import Link from "next/link";
import React from "react";
import styles from "./Header.module.scss";

interface IHeader {}

function Header({}: IHeader) {
  return (
    <div className={styles.header}>
      <div className={styles.container}>
        <div className={styles.left}>
          <Link href="/">Home</Link>
        </div>
        <div className={styles.right}>
          <Link href="/posts">Posts</Link>
          <Link href="/snippets">Snippets</Link>
        </div>
      </div>
    </div>
  );
}

export default Header;
