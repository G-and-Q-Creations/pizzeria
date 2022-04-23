import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Header from "../components/Header";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Live Laugh Pizza</title>
        <meta name="description" content="Goeun & Quigley eat pizza" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {Header()}
      we love pizza!

    </div>
  );
};

export default Home;
