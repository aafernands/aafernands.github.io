import styles from "../page.module.css";

export default function Testimonials() {
	return (
		<div className={styles.page}>
			<main className={styles.main}>
				<h1>Testimonials</h1>
				<p>See what our customers are saying about us!</p>
				<ul>
					<li>"Great service!" - Customer A</li>
					<li>"Highly recommend!" - Customer B</li>
					<li>"Fantastic experience!" - Customer C</li>
				</ul>
			</main>
		</div>
	);
}
