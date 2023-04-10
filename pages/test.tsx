import Head from "next/head";
import { useState } from "react";
import styles from "@/styles/Test.module.css";

export default function BadAccessibilityTest() {
  return (
    <>
      <Head>
        <title>Verto Loyalty Test</title>
      </Head>
      <main className={styles.main}>
        <h1 className={styles.text}>Hello!</h1>
      </main>

      <div className={styles.bg}></div>
    </>
  );
}
