import React from "react";
import fs from "fs";
import Layout from "../../components/Layout";
import styles from "./Post.module.scss";
import getPost from "../../helpers/getPost";
import { serialize } from "next-mdx-remote/serialize";
import { MDXRemote } from "next-mdx-remote";
import Code from "../../components/Code";
import IPost from "@interfaces/Post";
import PostMetaInfo from "@components/PostMetaInfo";
import BackButton from "@components/BackButton";

type IPostProps = {
  data: IPost;
  content: Record<string, any>;
};

const Components = {
  code: Code,
};

const Post = ({ content, data }: IPostProps) => {
  const { title, author, date } = data;

  return (
    <Layout>
      <div className={styles.post}>
        <div className={styles.container}>
          <BackButton />
          <div className={styles.postHeader}>
            <h1 className={styles.title}>{title}</h1>
            <div className={styles.subtitleContainer}>
              <PostMetaInfo author={author} date={date} />
            </div>
          </div>
          {/* @ts-ignore */}
          <MDXRemote {...content} components={Components} />
        </div>
      </div>
    </Layout>
  );
};

// // Generating the paths for each post
export async function getStaticPaths() {
  // Get list of all files from our posts directory
  const files = fs.readdirSync("posts");
  // Generate a path for each one
  const paths = files.map((fileName) => ({
    params: {
      slug: fileName.replace(".mdx", ""),
    },
  }));

  // return list of paths
  return {
    paths,
    fallback: false,
  };
}

// Generate the static props for the page
export async function getStaticProps({
  params: { slug },
}: {
  params: { slug: string };
}) {
  const post = await getPost(slug);
  const mdxSource = await serialize(post.content);

  return {
    props: {
      data: post.data,
      content: mdxSource,
    },
  };
}

export default Post;
