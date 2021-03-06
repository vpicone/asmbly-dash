import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import styles from "../styles/Home.module.css";
import { tools } from "../lib/tools";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Asmbly Dashboard</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <span style={{ color: "var(--brand)" }}>Asmbly Dash</span>
        </h1>

        <p className={styles.description}>
          Click a tool below to learn more or report an issue
        </p>

        <div className={styles.grid}>
          {tools.map((tool) => {
            return (
              <Link key={tool.id} href={`tools/${tool.id}`}>
                <a className={styles.card}>
                  <h2>{tool.name}</h2>
                  <p>
                    Find in-depth safety information and instructions for{" "}
                    {tool.name}.
                  </p>
                  <span data-zone={tool.zone} className={styles.tag}>
                    {tool.zone}
                  </span>
                </a>
              </Link>
            );
          })}
        </div>
      </main>
    </div>
  );
};

export default Home;
