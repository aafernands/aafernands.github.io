// app/page.js (Home Page)
import styles from "./page.module.css";

export default function Home() {
  const currentDate = new Date().getFullYear();

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h1>Welcome to FNDS Labs!</h1>
        <p>Your go-to place for web development and tech innovations.</p>
      </main>
      
    </div>
  );
}
