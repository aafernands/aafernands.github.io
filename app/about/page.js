import Link from "next/link"; // Import Link for navigation (e.g., for the button)
import styles from "./about.module.css"; // Import the CSS module for the About page styling

const About = () => {
	const currentYear = new Date().getFullYear();

	return (
		<div className={styles.aboutContainer}>
			<section className={styles.aboutSection}>
				<h1 className={styles.title}>Our Story</h1>
				<p className={styles.paragraph}>
					Welcome to FNDS Labs! We are a passionate team of web developers based
					in New Jersey, USA. Founded by Alex Fernandes, our mission is simple:
					to provide affordable, innovative, and high-quality web development
					services to small businesses and entrepreneurs.
				</p>
				<p className={styles.paragraph}>
					From Local Beginnings to Global Reach
				</p>
				<p className={styles.paragraph}>
					Starting out in New Jersey, we initially focused on helping small
					businesses in the area build a strong online presence. As our
					reputation grew, so did our client base. Today, we are proud to serve
					clients from all around the world, helping businesses of all sizes
					build the websites they need to succeed.
				</p>
				<p className={styles.paragraph}>Why Choose FNDS Labs?</p>
				<p className={styles.paragraph}>
					At FNDS Labs, we believe that your website should be more than just a
					digital business card. It should be a powerful tool that drives
					growth, attracts customers, and helps your business succeed. With our
					expertise in modern web development, we create websites that are not
					only visually appealing but also functional, responsive, and optimized
					for performance.
				</p>
				<p className={styles.paragraph}>
					Let s Create Something Amazing Together!
				</p>
				<Link href="/contact" className={styles.contactButton}>
					Get in Touch
				</Link>
			</section>
		</div>
	);
};

export default About;
