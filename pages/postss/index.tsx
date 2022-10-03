import fs from "fs";
import path from "path";
import matter from "gray-matter";
// import Image from "next/image";
import Link from "next/link";
// import Header from "../../components/Header";
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

export default function Blog({ posts, ...rest }: IBlog) {
  console.log("rest", rest);

  return null;
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
// export async function getStaticProps() {
// const root = path.join(process.cwd(), "/pages/posts");
// const listing = await fs.promises.readdir(root);

// const posts = listing.map((post) => {
//   return post.replace(".mdx", "");
// });

// return { props: { items: posts, posts, listing: posts } };
// }

export async function getStaticProps() {
  const markdownWithMeta = fs.readFileSync(
    path.join("pages/posts/post.mdx"),
    "utf-8"
  );

  const { data: frontMatter, content } = matter(markdownWithMeta);

  return {
    props: {
      frontMatter,
      content,
    },
  };
}
