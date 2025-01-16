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
import Accordion from "./FrequentQuestionsSection.js";

const PortfolioSection = () => {
	const [currentSlide, setCurrentSlide] = useState(0);

	return (
		<Container id="reviews" className={styles.servicesSection}>
			
			<Typography variant="body1" className={styles.description}>
			
			</Typography>
		</Container>
	);
};

export default PortfolioSection;
