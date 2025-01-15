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

const HeroSection = () => {
	return (
		<div className={styles.mainContainer}>
			<Container className={styles.heroSection}>
				<Box className={styles.textContainer}>
					<Typography variant="h2" className={styles.heroTitle}>
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
