"use client";

import React, { useState, useEffect } from "react";
import {
	Container,
	Typography,
	Button,
	Box,
	Grid,
	IconButton,
} from "@mui/material";
import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";
import styles from "../styles/reviewsSection.module.css"; // Import the CSS module

const PortfolioSection = () => {
	const [currentSlide, setCurrentSlide] = useState(0);

	return (
		<Container id="reviews" className={styles.reviewsSection}>
			<Typography variant="h2" className={styles.title}>
			Testimonials
			</Typography>
			<Typography variant="body1" className={styles.description}>
			See what our customers are saying about us!
			</Typography>
			<div className={styles.page}>
				<main className={styles.main}>
					
					<ul className={styles.reviewsList}>
						<li className={styles.reviewsItem}>
							<blockquote>
								"Working with Alex was an absolute pleasure. He delivered a
								high-quality website for our cleaning business that exceeded our
								expectations. The process was smooth, and Alex was always
								responsive and open to feedback. We now have a website that
								perfectly represents our brand and has helped us attract new
								clients. Highly recommend his services!"
							</blockquote>
							<p>- John D., New Shine Pro</p>
							<a href="#" className={styles.reviewLink}>
								Read more on Google Reviews
							</a>
						</li>

						<li className={styles.reviewsItem}>
							<blockquote>
								"I was impressed with how quickly Alex created a weather app for
								our project. He took the time to understand our needs and
								delivered an intuitive and visually appealing solution. The app
								works flawlessly, and the user interface is simple yet
								effective. I look forward to working with him on future
								projects!"
							</blockquote>
							<p>- Sarah L., WeatherApp</p>
							<a href="#" className={styles.reviewLink}>
								Read more on Google Reviews
							</a>
						</li>

						<li className={styles.reviewsItem}>
							<blockquote>
								"Alex helped us develop a real estate app that allows users to
								search for properties effortlessly. His expertise in React and
								MongoDB was evident throughout the project. The app is fast,
								responsive, and easy to navigate, making it a great tool for our
								clients. I'm grateful for his hard work and dedication."
							</blockquote>
							<p>- Michael R., Realtor App</p>
							<a href="#" className={styles.reviewLink}>
								Read more on Google Reviews
							</a>
						</li>

						<li className={styles.reviewsItem}>
							<blockquote>
								"Alex is a fantastic web developer who truly understands the
								needs of his clients. He built a stunning portfolio site for me
								that not only looks great but is also easy to navigate. His
								attention to detail and ability to deliver on time made the
								entire experience seamless. I highly recommend his services for
								anyone looking for a professional web developer."
							</blockquote>
							<p>- [Your Name], Portfolio Client</p>
							<a href="#" className={styles.reviewLink}>
								Read more on Google Reviews
							</a>
						</li>
					</ul>
				</main>
			</div>
		
		</Container>
	);
};

export default PortfolioSection;
