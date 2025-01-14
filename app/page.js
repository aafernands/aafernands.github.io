"use client";

import styles from "./page.module.css";
import UnderConstruction from "../components/UnderConstruction";
import HeroSection from "../components/HeroSection.js";
import PortfolioSection from "../components/PortfolioSection.js";
import ReviewsSection from "../components/ReviewsSection.js";
import ServicesSection from "../components/ServicesSection.js";
import HowItWorksSection from "../components/HowItWorksSection.js";
import {
	Container,
	ThemeProvider,
	CssBaseline,
	createTheme,
} from "@mui/material";
import { dark } from "@mui/material/styles/createPalette";

// Create a custom theme
const darkTheme = createTheme({
	palette: {
		mode: "dark",
		primary: {
			main: "#171717",
		},
	},
	typography: {
		fontFamily: "'Montserrat', 'Ubuntu', sans-serif",
	},
});

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

		<ThemeProvider theme={darkTheme}>
			<CssBaseline />
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
		</ThemeProvider>
	);
}
