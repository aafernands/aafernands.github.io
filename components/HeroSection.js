import React from "react";
import {
	Typography,
	Button,
	Container,
	Grid,
	Box,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";

import styles from "../styles/HeroSection.module.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";

const HeroSection = () => {
	const theme = useTheme();

	return (
		<div className={styles.mainContainer}>
			<Container className={styles.heroSection}>
				<Box className={styles.textContainer}>
					<Typography
						variant="h1"
						sx={{
							padding: "0rem",
							margin: "0rem",
							fontWeight: 700,
							fontSize: {
								xs: "2.5rem",
								sm: "3rem",
								md: "3.5rem",
								lg: "4rem",
								xl: "5rem",
							},
						}}
					>
						Building your online presence with{" "}
						<span className={styles.highlight}>creative and innovative</span>{" "}
						solutions!
					</Typography>
				</Box>
			</Container>

			<Grid container className={styles.features} spacing={2}>
				<Grid item xs={12} lg={4}>
					<Box display="flex" alignItems="flex-start">
						<FontAwesomeIcon
							icon={faCircleCheck}
							style={{
								color: "#90CAF9",
							}}
						/>
						<Typography
							sx={{
								fontSize: {
									xs: "1.1rem",
									sm: "1.5rem",
									md: "1.8rem",
								},
								margin: "-10px 0px 0px 10px",
							}}
							className={styles.heroDescription}
						>
							<strong>Custom Designs:</strong> Your website should be as unique
							as your brand.
						</Typography>
					</Box>
				</Grid>

				<Grid item xs={12} lg={4}>
					<Box display="flex" alignItems="flex-start">
					<FontAwesomeIcon
							icon={faCircleCheck}
							style={{
								color: "#90CAF9",
							}}
						/>
						<Typography
							sx={{
								fontSize: {
									xs: "1.1rem",
									sm: "1.5rem",
									md: "1.8rem",
								},
								margin: "-10px 0px 0px 10px",
							}}
							className={styles.heroDescription}
						>
							<strong>Speedy Delivery:</strong> Deadlines matter. We ensure your
							project is delivered on time.
						</Typography>
					</Box>
				</Grid>

				<Grid item xs={12} lg={4}>
					<Box display="flex" alignItems="flex-start">
						<FontAwesomeIcon
							icon={faCircleCheck}
							style={{
								color: "#90CAF9",
							}}
						/>
						<Typography
							sx={{
								fontSize: {
									xs: "1.1rem",
									sm: "1.5rem",
									md: "1.8rem",
								},
								margin: "-10px 0px 0px 10px",
							}}
							className={styles.heroDescription}
						>
							<strong>Full Transparency:</strong> Stay informed every step of
							the way.
						</Typography>
					</Box>
				</Grid>
			</Grid>

			<Container className={styles.heroSection}>
				<Box className={styles.rightButtons}>
					{/* First Button: Book a Call */}
					<Button
						target="blank"
						href="https://calendly.com/fndslabs-15min-call/15min"
						variant="outlined"
						aria-label="Book a Call"
						sx={{
							margin: "0 10px",
							color: "white, #000)",
						}}
					>
						Book a Call
					</Button>

					{/* Second Button: Get Started */}
					<Button
						href="/pricing"
						variant="contained"
						aria-label="Get Started"
						sx={{
							margin: "0 10px",
							backgroundColor: "var(--button-bg, #1976d2)",
							color: "var(--button-text, #fff)",
							"&:hover": {
								backgroundColor: "var(--button-bg-hover, #1565c0)",
							},
						}}
					>
						Get Started
					</Button>
				</Box>
			</Container>
		</div>
	);
};

export default HeroSection;
