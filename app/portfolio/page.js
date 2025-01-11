import styles from "../page.module.css";


export default function Testimonials() {
	const currentDate = new Date().getFullYear();

	return (
        <div className={styles.page}>
        <main className={styles.main}>
          <h1>Welcome to my Portfolio!</h1>
          <p>Projects created by Alex Fernandes {currentDate} </p>
        </main>
        
      </div>
	);
}
