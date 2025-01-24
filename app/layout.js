"use client";

// layout.js
import { ThemeProvider, CssBaseline, Container } from "@mui/material";
import { lightTheme } from "../themes"; 
import { Roboto, Montserrat } from "next/font/google"; 
import Navbar from "../components/NavBar"; 
import Footer from "../components/Footer"; 

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
					<Container sx={{ bgcolor: "white", py: "86px" }}>
						{/* #f5f5f5 */}
						{children}
					</Container>{" "}
					{/* Main content */}
					<Footer /> {/* Your Footer */}
				</ThemeProvider>
			</body>
		</html>
	);
}
