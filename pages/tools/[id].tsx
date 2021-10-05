import { useState } from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import Image from "next/image";
import Error from "next/error";
import { tools } from "../../lib/tools";
import styles from "../../styles/DetailPage.module.css";

const ToolPage = () => {
  const router = useRouter();
  const [formName, setFormName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const tool = tools.find((tool) => tool.id === router.query.id);
  if (!tool) {
    return <Error statusCode={404} />;
  }

  const { name } = tool;
  const { image = tools[0].image } = tool;

  const handleSubmit = (e: any, toolName: string) => {
    e.preventDefault();
    setSubmitted(true);
    let data = {
      name,
      email,
      message,
      toolName,
    };
    fetch("/api/contact", {
      method: "POST",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    setFormName("");
    setEmail("");
    setMessage("");
    setTimeout(() => {
      setSubmitted(false);
    }, 1000);
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>{name} | Asmbly</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>{name}</h1>
        <img
          width="650"
          height="600"
          className={styles.image}
          src={tool.image}
          alt={`${tool.name} in the workshop`}
        />
        <h2>Tips and suggestions</h2>
        <p>{tool.description}</p>

        <h2>Safety</h2>
        <p>{tool.safety}</p>

        <h2 id="report">Report a problem</h2>
        <form className={styles.form}>
          <div className={styles.inputGroup}>
            <label htmlFor="name">Name</label>
            <input
              value={formName}
              onChange={(e) => {
                setFormName(e.target.value);
              }}
              type="text"
              name="name"
              className={styles.inputField}
            />
          </div>
          <div className={styles.inputGroup}>
            <label htmlFor="email">Email</label>
            <input
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              type="email"
              name="email"
              className={styles.inputField}
            />
          </div>
          <div className={styles.inputGroup}>
            <label htmlFor="message">Message</label>
            <textarea
              value={message}
              onChange={(e) => {
                setMessage(e.target.value);
              }}
              rows={5}
              name="message"
              className={styles.inputField}
            />
          </div>
          <input
            disabled={!message}
            onClick={(e) => handleSubmit(e, tool.name)}
            type="submit"
          />
          {submitted ? <p style={{ marginLeft: "auto" }}>Thanks!</p> : null}
        </form>
      </main>
    </div>
  );
};

export default ToolPage;
