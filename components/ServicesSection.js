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
import styles from "../styles/servicesSection.module.css"; // Import the CSS module

const PortfolioSection = () => {
	const [currentSlide, setCurrentSlide] = useState(0);

	return (
		<Container id="reviews" className={styles.servicesSection}>
			<Typography variant="h4" className={styles.title}>
				services
			</Typography>
			<Typography variant="body1" className={styles.description}>
			See what our customers are saying about us!
			</Typography>
			<section className={styles.section}>
					<h2>Features We Offer</h2>
					<ul>
						<li>
							<strong>Responsive Design:</strong> Websites that look and work
							perfectly on all devices.
						</li>
						<li>
							<strong>SEO Optimization:</strong> Be found by the people who
							matter most.
						</li>
						<li>
							<strong>Custom Integrations:</strong> From e-commerce to
							analytics, we make it happen.
						</li>
						<li>
							<strong>Ongoing Support:</strong> We’re here for you, even after
							launch.
						</li>
					</ul>
					<button className={styles.ctaButton}>Explore Our Services</button>
				</section>
		
		</Container>
	);
};

export default PortfolioSection;
