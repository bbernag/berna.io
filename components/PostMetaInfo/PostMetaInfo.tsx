import DATE_FORMATS from "@helpers/dateFormats";
import dayjs from "dayjs";
import React from "react";
import styles from "./PostMetaInfo.module.scss";

interface IPostMetaInfo {
  author: string;
  date: string;
}

function PostMetaInfo({ author, date }: IPostMetaInfo) {
  return (
    <div className={styles.postMetaInfo}>
      <span className={styles.author}>{author}</span>
      {" | "}
      <span className={styles.date}>{dayjs(date).format(DATE_FORMATS.LL)}</span>
    </div>
  );
}

export default PostMetaInfo;
