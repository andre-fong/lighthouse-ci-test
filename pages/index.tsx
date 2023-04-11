import Head from "next/head";
import { useState } from "react";
import styles from "@/styles/Home.module.css";

export default function Home() {
  const [loveVerto, setLoveVerto] = useState<boolean | undefined>(undefined);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const input = document.getElementById("answer") as HTMLInputElement;
    const answer = input.value;

    if (answer === "yes") {
      setLoveVerto(true);
    } else if (answer === "no") {
      setLoveVerto(false);
    } else {
      setLoveVerto(undefined);
      alert("Answer properly or else.");
    }
  }

  return (
    <>
      <Head>
        <title>Verto Loyalty Test</title>
      </Head>
      <main className={styles.main}>
        <h1>Do you love Verto?</h1>

        <form className={styles.fields} onSubmit={handleSubmit}>
          <input id="answer" placeholder="Type yes or no" />
          <input id="submit" type="submit" value="Submit" />
        </form>

        {loveVerto === true && <h2>You rock!!!</h2>}
        {loveVerto === false && <h2>👎👎👎👎👎👎👎👎👎👎👎</h2>}
      </main>
    </>
  );
}
