import React from "react";
import fs from "fs";
import Layout from "../../components/Layout";
import styles from "./Slug.module.scss";
import getPost from "../../helpers/getPost";
import { serialize } from "next-mdx-remote/serialize";
import { MDXRemote } from "next-mdx-remote";
import Code from "../../components/Code";
import IPost from "@types/Post";

type IPostProps = {
  data: IPost;
  content: Record<string, any>;
};

const Post = ({ content, data }: IPostProps) => {
  const { title, author, date } = data;

  return (
    <Layout>
      <main className={styles.post}>
        <div className={styles.container}>
          <div>
            <h1 className={styles.title}>{title}</h1>
            <div className={styles.subtitleContainer}>
              <span className={styles.subtitle}>
                {author} || {date}
              </span>
            </div>
          </div>
          <MDXRemote {...content} components={{ code: Code }} />
        </div>
      </main>
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
