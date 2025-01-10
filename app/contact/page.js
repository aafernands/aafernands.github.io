import styles from "../page.module.css";

export default function Contact() {
	return (
		<div className={styles.page}>
			<main className={styles.main}>
				<h1>Contact Us</h1>
				<p>If you have any questions, feel free to reach out to us!</p>
				<form>
					<label htmlFor="name">Name:</label>
					<input type="text" id="name" name="name" required />

					<label htmlFor="email">Email:</label>
					<input type="email" id="email" name="email" required />

					<button type="submit">Submit</button>
				</form>
			</main>
		</div>
	);
}
