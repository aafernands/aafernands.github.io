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
import styles from "../styles/howItWorksSection.module.css"; // Import the CSS module

const PortfolioSection = () => {
	const [currentSlide, setCurrentSlide] = useState(0);

	return (
		<Container id="reviews" className={styles.servicesSection}>
			<Typography variant="h4" className={styles.title}>
				how it works
			</Typography>
			<Typography variant="body1" className={styles.description}>
			See what our customers are saying about us!
			</Typography>
			<main className={styles.main}>
				<section className={styles.section}>
					<h2>How It Works</h2>
					<ol>
						<li>
							<strong>Share Your Vision:</strong> Use our intuitive request
							system to tell us about your project.
						</li>
						<li>
							<strong>Collaborate:</strong> Work directly with our team to
							refine your ideas and see mockups.
						</li>
						<li>
							<strong>Launch:</strong> Watch your website come to life, fully
							optimized and ready to perform.
						</li>
					</ol>
					<button className={styles.ctaButton}>Start Your Project Today</button>
				</section>

				

				
				
			</main>
		
		</Container>
	);
};

export default PortfolioSection;
