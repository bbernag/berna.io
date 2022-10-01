import fs from "fs";
import matter from "gray-matter";
// import Image from "next/image";
import Link from "next/link";
import Header from "../../components/Header";
import Layout from "../../components/Layout";
import styles from "./Posts.module.scss";

// The Blog Page Content

export type IFrontMatter = {
  title: string;
  author: string;
  category: string;
  date: string;
  bannerImage: string;
  tags: string[];
};

export type IPost = {
  title: string;
  slug: string;
  author: string;
  date: string;
  frontmatter: IFrontMatter;
};

type IBlog = {
  posts: IPost[];
};

export default function Blog({ posts }: IBlog) {
  return (
    <Layout>
      <main className={styles.posts}>
        <div className={styles.container}>
          {posts.map((post) => {
            //extract slug and frontmatter
            const { slug, frontmatter } = post;
            //extract frontmatter properties
            const { title, author, date } = frontmatter;

            //JSX for individual blog listing
            return (
              <article key={title} className="mt-1">
                <Link href={`/posts/${slug}`}>
                  <h1>{title}</h1>
                </Link>
                <h3>{author}</h3>
                <h3>{date}</h3>
              </article>
            );
          })}
        </div>
      </main>
    </Layout>
  );
}

//Generating the Static Props for the Blog Page
export async function getStaticProps() {
  // get list of files from the posts folder
  const files = fs.readdirSync("posts");

  // get frontmatter & slug from each post
  const posts = files.map((fileName) => {
    const slug = fileName.replace(".md", "");
    const readFile = fs.readFileSync(`posts/${fileName}`, "utf-8");
    const { data: frontmatter } = matter(readFile);

    return {
      slug,
      frontmatter,
    };
  });

  // Return the pages static props
  return {
    props: {
      posts,
    },
  };
}
