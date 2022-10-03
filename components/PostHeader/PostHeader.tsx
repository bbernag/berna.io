import Head from "next/head";
import React from "react";
import PostMetadata from "../../interfaces/PostMetadata";
import styles from "./PostHeader.module.scss";

function PostHeader({ title, author, dateCreated }: PostMetadata) {
  return (
    <>
      <main className={styles.post}>
        <div className={styles.container}>
          <div>
            <h1 className={styles.title}>{title}</h1>
            <div className={styles.subtitleContainer}>
              <span className={styles.subtitle}>
                {author} || {dateCreated}
              </span>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default PostHeader;
