import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import InputLabel from "@mui/material/InputLabel";
import Link from "@mui/material/Link";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";

import { visuallyHidden } from "@mui/utils";
import styles from "../styles/hero.module.css";

export default function Hero() {
	return (
		<Box id="hero" className={styles.heroContainer}>
			<Grid container spacing={2}>
				{/* Left Column */}
				<Grid item xs={12} sm={12} md={7} lg={7}>
					<Box>
						<Typography variant="h1" className={styles.heroText}>
							Your&nbsp;Vision&nbsp;
							<Typography
								component="span"
								variant="h1"
								className={styles.heroTextPrimary}
							>
								Our Code!
							</Typography>
						</Typography>

						<Typography
							component="span"
							variant="p"
							className={styles.heroDescription}
						>
							Custom web solutions, simplified.
						</Typography>
					</Box>
				</Grid>

				{/* Right Column */}
				<Grid item xs={12} sm={12} md={5} lg={5}>
					<Box className={styles.heroContainerRight}>
						<Link href="/">
							<img
								src="./imageHero.png"
								alt="Hero Image"
								className={styles.heroImage}
							/>
						</Link>
					</Box>
				</Grid>
			</Grid>

			{/* Features Section */}
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
		</Box>
	);
}
