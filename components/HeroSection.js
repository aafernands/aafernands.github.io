import React from "react";
import {
	AppBar,
	Toolbar,
	Typography,
	Button,
	Container,
	Grid,
	Box,
} from "@mui/material";
import Link from "next/link";
import styles from "../styles/HeroSection.module.css";

const HeroSection = ({ isDarkMode }) => {
	return (
		<div className={styles.mainContainer}>
			<Container className={styles.heroSection}>
				<Box className={styles.textContainer}>
					<Typography
						variant="h1"
						sx={{
							fontSize: {
								xs: "2.5rem", // Extra small screens
								sm: "4rem", // Small screens
								md: "5rem", // Medium screens
								lg: "6rem", // Large screens
								xl: "7rem", // Extra large screens
							},
						}}
					>
						Building your online presence with{" "}
						<span className={styles.highlight}>creative and innovative</span>{" "}
						solutions.
					</Typography>
				</Box>
				<Box className={styles.imageContainer}>
					<Link href="/">
						<img
							src="./largeHero.png" // Make sure the image path is correct
							alt="Hero Image"
							className={styles.heroImage}
						/>
					</Link>
				</Box>

				{/* Buttons */}
			</Container>
			<Container className={styles.heroSection}>
				<div className={styles.rightButtons}>
					<Button
						target="_blank"
						href="https://calendly.com/fndslabs-15min-call/15min"
						variant="outlined"
						style={{ color: isDarkMode ? "red" : "blue" }} // Dynamic icon color

						aria-label="Book a Call"
					>
						Book a Call
					</Button>
					<Button
						href="/pricing"
						variant="contained"
						style={{ color: isDarkMode ? "#90caf9" : "#1976d2" }} // Dynamic icon color

						aria-label="See Plans"
					>
						See Plans
					</Button>
				</div>
			</Container>

			<Grid container className={styles.features} spacing={2}>
				<Grid item xs={12} lg={4}>
					<Typography className={styles.heroDescription}>
						<strong>Custom Designs:</strong> Your website should be as unique as
						your brand.
					</Typography>
				</Grid>
				<Grid item xs={12} lg={4}>
					<Typography className={styles.heroDescription}>
						<strong>Speedy Delivery:</strong> Deadlines matter. We ensure your
						project is delivered on time.
					</Typography>
				</Grid>
				<Grid item xs={12} lg={4}>
					<Typography className={styles.heroDescription}>
						<strong>Full Transparency:</strong> Stay informed every step of the
						way.
					</Typography>
				</Grid>
			</Grid>
		</div>
	);
};

export default HeroSection;
