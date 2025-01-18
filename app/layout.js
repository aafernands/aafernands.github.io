"use client";

// layout.js
import { ThemeProvider, CssBaseline, Container } from "@mui/material";
import { lightTheme } from "../themes"; // Import the light theme
import { Roboto, Montserrat } from "next/font/google"; // Import fonts
import Navbar from "../components/NavBar"; // Your Navbar component
import Footer from "../components/Footer"; // Your Footer component

// Import fonts
const roboto = Roboto({ subsets: ["latin"], weight: ["400", "700"] });
const montserrat = Montserrat ({ subsets: ["latin"], weight: ["400", "700"] });

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<head>
				<meta charSet="UTF-8" />
				<meta name="viewport" content="width=device-width, initial-scale=1.0" />
			</head>
			<body className={`${roboto.className} ${montserrat.className}`}>
				<ThemeProvider theme={lightTheme}>
					{" "}
					{/* Apply theme here */}
					<CssBaseline /> {/* Normalize styles */}
					<Navbar /> {/* Your Navbar */}
					<Container sx={{ bgcolor: "#f5f5f5", py: "86px" }}>
						{children}
					</Container>{" "}
					{/* Main content */}
					<Footer /> {/* Your Footer */}
				</ThemeProvider>
			</body>
		</html>
	);
}
