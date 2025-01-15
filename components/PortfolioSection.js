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
import styles from "../styles/portfolioSection.module.css"; // Import the CSS module

const projects = [
	{
		title: "Project 1",
		description: "A brief description of Project 1.",
		image: "./project1.png", // Replace with actual image paths
		link: "/project1",
	},
	{
		title: "Project 2",
		description: "A brief description of Project 2.",
		image: "./project2.png",
		link: "/project2",
	},
	{
		title: "Project 3",
		description: "A brief description of Project 3.",
		image: "./project3.png",
		link: "/project3",
	},
];

const PortfolioSection = (isDarkMode) => {
	const [currentSlide, setCurrentSlide] = useState(0);

	// Automatically slide every 5 seconds
	useEffect(() => {
		const timer = setInterval(() => {
			setCurrentSlide((prev) => (prev + 1) % projects.length);
		}, 5000);
		return () => clearInterval(timer);
	}, []);

	const handlePrev = () => {
		setCurrentSlide((prev) => (prev - 1 + projects.length) % projects.length);
	};

	const handleNext = () => {
		setCurrentSlide((prev) => (prev + 1) % projects.length);
	};

	return (
		<Container id="portfolio" className={styles.portfolioSection}>
			<Typography variant="h4" className={styles.title}>
				portfolio
			</Typography>
			<Typography variant="body1" className={styles.description}>
				Explore some of our creative and innovative projects. Each project is
				designed with care and attention to detail.
			</Typography>
			<Box className={styles.slideshowContainer}>
				<IconButton onClick={handlePrev} className={styles.arrowButton}>
					<ArrowBackIos />
				</IconButton>
				<Box className={styles.slide}>
					<img
						src={projects[currentSlide].image}
						alt={projects[currentSlide].title}
						className={styles.projectImage}
					/>
					<Typography variant="h6" className={styles.projectTitle}>
						{projects[currentSlide].title}
					</Typography>
					<Typography variant="body2" className={styles.projectDescription}>
						{projects[currentSlide].description}
					</Typography>
				</Box>
				<IconButton onClick={handleNext} className={styles.arrowButton}>
					<ArrowForwardIos />
				</IconButton>
			</Box>
			<Box className={styles.dots}>
				{projects.map((_, index) => (
					<Box
						key={index}
						className={`${styles.dot} ${
							index === currentSlide ? styles.activeDot : ""
						}`}
						onClick={() => setCurrentSlide(index)}
					/>
				))}
			</Box>
			<Button target="blank" href="https://figma.com" variant="contained" className={styles.seeMoreButton}>
				See More Projects
			</Button>
		</Container>
	);
};

export default PortfolioSection;
