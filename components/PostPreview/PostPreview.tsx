import React from "react";
import IPost from "@types/Post";
import Link from "next/link";
import styles from "./PostPreview.module.scss";
import dayjs from "dayjs";
import DATE_FORMATS from "@helpers/dateFormats";
import PostMetaInfo from "@components/PostMetaInfo";

function PostPreview({ slug, title, author, date, description }: IPost) {
  return (
    <div className={styles.postPreview}>
      <Link href={`/posts/${slug}`}>
        <h6 className={styles.title}>{title}</h6>
      </Link>
      <PostMetaInfo author={author} date={date} />
      <div className={styles.description}>
        <span>{description}</span>
      </div>
    </div>
  );
}

export default PostPreview;
