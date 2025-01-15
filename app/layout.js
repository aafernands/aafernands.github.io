"use client";

import { useEffect, useState } from "react";
import "./globals.css"; // Import global CSS
import "@fortawesome/fontawesome-svg-core/styles.css";
import { Ubuntu, Montserrat, Inter } from "next/font/google";


import {
	Container,
	ThemeProvider,
	CssBaseline,
	createTheme,
} from "@mui/material";
import Navbar from "../components/NavBar";
import Footer from "../components/Footer";

// Font configurations
const inter = Inter({ subsets: ["latin"] });
const montserrat = Montserrat({
	subsets: ["latin"],
	weight: ["400", "700"],
});
const ubuntu = Ubuntu({
	subsets: ["latin"],
	weight: ["400", "700"],
});

export default function RootLayout({ children }) {
	const [isDarkMode, setIsDarkMode] = useState(true); // State for dark mode toggle

	const toggleTheme = () => {
		setIsDarkMode((prevMode) => !prevMode); // Toggle between dark and light mode
	};

	const theme = createTheme({
		palette: {
			mode: isDarkMode ? "dark" : "light", // Dynamic theme based on isDarkMode
		},
		typography: {
			fontFamily: "'Montserrat', 'Ubuntu', sans-serif",
		},
	});

	// Update CSS variables based on theme mode
	useEffect(() => {
		document.documentElement.style.setProperty(
			"--background",
			isDarkMode ? "#171717" : "#f5f5f5"
		);
		document.documentElement.style.setProperty(
			"--foreground",
			isDarkMode ? "#ededed" : "#171717"
		);
	}, [isDarkMode]);

	return (
		<html lang="en">
			<head>
				<meta charSet="UTF-8" />
				<meta name="viewport" content="width=device-width, initial-scale=1.0" />
				<script
					src="//code.tidio.co/sf7zqeagqkbig5d56iqlot3fq8nygg0k.js"
					async
				></script>
			</head>
			<body className={`${montserrat.className} ${ubuntu.className}`}>
				<ThemeProvider theme={theme}>
					<CssBaseline />
					<Navbar isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
					<Container
						sx={{
							px: "20px",
						}}
					>
						{children}
					</Container>
					<Footer isDarkMode={isDarkMode} />
				</ThemeProvider>
			</body>
		</html>
	);
}
