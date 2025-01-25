"use client";

// layout.js
import { ThemeProvider, CssBaseline, Container } from "@mui/material";
import { lightTheme } from "../themes";
import { Roboto, Montserrat } from "next/font/google";
import Navbar from "../components/NavBar";
import Footer from "../components/Footer";

const roboto = Roboto({ subsets: ["latin"], weight: ["400", "700"] });
const montserrat = Montserrat({ subsets: ["latin"], weight: ["400", "700"] });

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<head>
				<meta charSet="UTF-8" />
				<meta name="viewport" content="width=device-width, initial-scale=1.0" />
				<script
					src="https://code.tidio.co/sf7zqeagqkbig5d56iqlot3fq8nygg0k.js"
					async
				></script>
			</head>
			<body className={`${roboto.className} ${montserrat.className}`}>
				<ThemeProvider theme={lightTheme}>
					<CssBaseline />
					<Navbar />
					<Container sx={{ bgcolor: "white", py: "86px" }}>
						{children}
					</Container>{" "}
					<Footer />
				</ThemeProvider>
			</body>
		</html>
	);
}
