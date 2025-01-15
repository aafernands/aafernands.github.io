"use client";

import styles from "./page.module.css";
import UnderConstruction from "../components/UnderConstruction";
import HeroSection from "../components/HeroSection.js";
import PortfolioSection from "../components/PortfolioSection.js";
import ReviewsSection from "../components/ReviewsSection.js";
import ServicesSection from "../components/ServicesSection.js";
import HowItWorksSection from "../components/HowItWorksSection.js";
import { Container } from "@mui/material";

export default function Home() {
	if (process.env.SHOW_UNDER_CONSTRUCTION === "true") {
		return <UnderConstruction />;
	}
	return (
		// <ThemeProvider theme={darkTheme}>
		// 	<Container sx={{ bgcolor: "red", px: "10px" }}>
		// 		<h1>Hello World!</h1>
		// 	</Container>
		// </ThemeProvider>

		<Container
			sx={{
				bgcolor: "",
				px: "10px",
			}}
		>
			<HeroSection />
			<PortfolioSection />
			<ReviewsSection />
			<ServicesSection />
			<HowItWorksSection />
		</Container>
	);
}
