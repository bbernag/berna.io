import Link from "next/link";
import Layout from "@components/Layout";
import styles from "./Posts.module.scss";
import getAllPosts from "@helpers/getAllPosts";
import IPost from "@types/Post";

type IBlog = {
  posts: IPost[];
};

export default function Blog({ posts }: IBlog) {
  return (
    <Layout>
      <main className={styles.posts}>
        <div className={styles.container}>
          {posts.map((post) => {
            const { title, author, date, slug } = post;

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

export async function getStaticProps() {
  const posts = getAllPosts();

  return { props: { posts } };
}
