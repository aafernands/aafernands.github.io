import styles from "../page.module.css";

export default function Pricing() {
	return (
		<div className={styles.page}>
			<main className={styles.main}>
				<h1>Pricing</h1>
				<p>Choose the plan that works best for you:</p>
				<ul>
					<li>Basic Plan: $10/month</li>
					<li>Premium Plan: $25/month</li>
					<li>Enterprise Plan: $50/month</li>
				</ul>
			</main>
		</div>
	);
}
