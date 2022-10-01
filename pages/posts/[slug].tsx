import React from "react";
import fs from "fs";
import matter from "gray-matter";
import md from "markdown-it";
import { IPost, IFrontMatter } from "./index";
import Layout from "../../components/Layout";
import styles from "./Slug.module.scss";

type PostProps = {
  frontmatter: IFrontMatter;
  content: string;
};

// The page for each post
export default function Post({ frontmatter, content }: PostProps) {
  const { title, author, category, date, bannerImage, tags } = frontmatter;

  React.useEffect(() => {
    console.log("mounted");
  }, []);

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
          <div
            dangerouslySetInnerHTML={{ __html: md().render(content) }}
            className={styles.content}
          />
        </div>
      </main>
    </Layout>
  );
}

// Generating the paths for each post
export async function getStaticPaths() {
  // Get list of all files from our posts directory
  const files = fs.readdirSync("posts");
  // Generate a path for each one
  const paths = files.map((fileName) => ({
    params: {
      slug: fileName.replace(".md", ""),
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
  const fileName = fs.readFileSync(`posts/${slug}.md`, "utf-8");
  const { data: frontmatter, content } = matter(fileName);
  return {
    props: {
      frontmatter,
      content,
    },
  };
}
