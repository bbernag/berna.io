import Head from "next/head";
import Layout from "@components/Layout";
import getAllPosts from "@helpers/getAllPosts";
import IPost from "@types/Post";
import PersonalCard from "@components/PersonalCard/PersonalCard";
import PostPreview from "@components/PostPreview/PostPreview";
import styles from "./Main.module.scss";

const Home = ({ posts }: { posts: IPost[] }) => {
  return (
    <div className={styles.main}>
      <Head>
        <title>Berna.io</title>
        <meta
          name="description"
          content="Blog para aprender front-end development"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <div className={styles.personalCardWrapper}>
          <PersonalCard />
        </div>
        <div className={styles.postList}>
          {posts.map((post) => {
            return <PostPreview {...post} key={post.title} />;
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
