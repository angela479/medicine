import Head from "next/head";
import Link from "next/link";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Medical Store</title>
      </Head>
      <h1>Welcome to the Medical Store</h1>
      <Link href="/medicines">
        <button className={styles.button}>View Medicines</button>
      </Link>
    </div>
  );
}
