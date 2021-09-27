import { useRouter } from "next/router";
import Head from "next/head";
import Link from "next/link";
import Error from "next/error";
import { tools } from "../../lib/tools";
import styles from "../../styles/DetailPage.module.css";

const ToolPage = () => {
  const router = useRouter();
  console.log(router.query);
  const tool = tools.find((tool) => tool.name === router.query.name);
  if (!tool) {
    return <Error statusCode={404} />;
  }

  const { name } = tool;

  return (
    <div className={styles.container}>
      <Head>
        <title>{name} | Asmbly</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>{name}</h1>
        <h2>Safety</h2>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iste
          voluptatum inventore debitis sit? Quis, totam commodi? Rem
          consequuntur, assumenda, sunt officiis necessitatibus doloribus
          tempora voluptatum ut a quam, odit ducimus?
        </p>

        <h2>Tips and suggestions</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor nobis
          at, sit excepturi exercitationem nihil cupiditate accusamus temporibus
          dolorem sapiente et ab, voluptate magnam non nesciunt quae cumque
          fugit voluptatum.
        </p>

        <h2>Report a problem</h2>
        <form className={styles.form}>
          <label htmlFor="name">Your name</label>
          <input name="name" type="text" />
          <label htmlFor="when">When did the problem occur?</label>
          <input name="when" type="date" />
          <label htmlFor="what">What happened?</label>
          <input name="what" type="textarea" />
        </form>
      </main>
    </div>
  );
};

export default ToolPage;
