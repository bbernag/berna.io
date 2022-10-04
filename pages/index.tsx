import Head from "next/head";
import Layout from "@components/Layout";
import getAllPosts from "@helpers/getAllPosts";
import IPost from "@types/Post";
import styles from "../styles/Home.module.css";
import Link from "next/link";

const Home = ({ posts }: { posts: IPost[] }) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Berna.io</title>
        <meta
          name="description"
          content="Blog para aprender front-end development"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <div>
          {posts.map((post) => {
            return (
              <div key={post.title}>
                <Link href={`/posts/${post.slug}`}>
                  <h1>{post.title}</h1>
                </Link>
              </div>
            );
          })}
        </div>
      </Layout>
    </div>
  );
};

export const getStaticProps = async () => {
  const posts = getAllPosts();

  return { props: { posts } };
};

export default Home;
