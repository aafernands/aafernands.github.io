import "./globals.css";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { Ubuntu, Montserrat, Inter } from "next/font/google";
import { Container, ThemeProvider, CssBaseline } from "@mui/material";
import Navbar from "../components/NavBar";
import Footer from "../components/Footer";

const inter = Inter({ subsets: ["latin"] });
const montserrat = Montserrat({
	subsets: ["latin"],
	weight: ["400", "700"],
});
const ubuntu = Ubuntu({
	subsets: ["latin"],
	weight: ["400", "700"],
});

export const metadata = {
	title: "FNDS Labs | Your Vision, Our Code",
	description: "Custom web solutions, simplified.",
	icons: {
		icon: "/favicon.ico",
	},
};

export default function RootLayout({ children }) {
	const currentDate = new Date().getFullYear();

	return (
		<html lang="en">
			<head>
				<meta charSet="UTF-8" />
				<meta name="viewport" content="width=device-width, initial-scale=1.0" />
				<script src="//code.tidio.co/sf7zqeagqkbig5d56iqlot3fq8nygg0k.js" async></script>
			</head>
			<body className={`${montserrat.className} ${ubuntu.className}`}>
				<Navbar />
				<Container
					sx={{
						// bgcolor: "white",
						px: "20px",
					}}
				>
					{children}
				</Container>
				<Footer />
			</body>
		</html>
	);
}
