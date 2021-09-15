import styles from "../styles/Home.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <div className={styles.title}>
      <h1> Homepage Next</h1>
      <p className={styles.text}>
        Lorem ipdsum oiejr learning osm e new awesome react framework called
        NEXT js IT IS basically the most amazing fullstack framework I have ever
        used. Without a doubt.
      </p>
      <Link href="/ninjas">
        <a className={styles.btn}> See Ninja Listing </a>
      </Link>
    </div>
  );
}
