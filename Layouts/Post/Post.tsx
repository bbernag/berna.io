import Head from "next/head";
import React from "react";
import Header from "../../components/Header";
import PostHeader from "../../components/PostHeader";
import PostMetadata from "../../interfaces/PostMetadata";
import styles from "./Post.module.scss";

interface IPostLayout {
  children: React.ReactElement;
  meta: PostMetadata;
}

function PostLayout({ children, meta }: IPostLayout) {
  return (
    <>
      <Head>
        <link
          rel="stylesheet"
          href="https://unpkg.com/dracula-prism/dist/css/dracula-prism.css"
        ></link>
      </Head>
      <Header />
      <main className={styles.container}>
        <PostHeader {...meta} />
        {children}
      </main>
    </>
  );
}

export default PostLayout;
