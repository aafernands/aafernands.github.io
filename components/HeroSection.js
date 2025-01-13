import React from "react";
import {
	AppBar,
	Toolbar,
	Typography,
	Button,
	Container,
	Grid,
} from "@mui/material";
import Link from "next/link";
import styles from "../styles/HeroSection.module.css";

const HeroSection = () => {
	return (
		<div className={styles.mainContainer}>
			{/* Header Section */}
			<AppBar position="static" className={styles.appbar}>
				<Toolbar className={styles.toolbar}>
					<Typography variant="h6" className={styles.logo}>
						FNDS Labs
					</Typography>
					<div className={styles.navLinks}>
						<Button color="inherit" className={styles.navButton}>
							How it Works
						</Button>
						<Button color="inherit" className={styles.navButton}>
							Our Work
						</Button>
						<Button color="inherit" className={styles.navButton}>
							Scope of Work
						</Button>
						<Button color="inherit" className={styles.navButton}>
							Pricing
						</Button>
						<Button color="inherit" className={styles.navButton}>
							FAQ
						</Button>
						<Button color="inherit" className={styles.navButton}>
							Careers
						</Button>
					</div>
					<div className={styles.rightButtons}>
						<Button variant="outlined" className={styles.bookButton}>
							Book a Call
						</Button>
						<Button variant="contained" className={styles.ctaButton}>
							See Plans
						</Button>
					</div>
				</Toolbar>
			</AppBar>

			{/* Hero Section */}
			<Container className={styles.heroSection}>
				<div className={styles.textContainer}>
					<Typography variant="h2" className={styles.heroTitle}>
						Building your online presence with{" "}
						<span className={styles.highlight}>creative and innovative</span>{" "}
						solutions.
					</Typography>
					{/* <div className={styles.featureList}>
            <Typography className={styles.featureItem}>✔ <strong>Custom Designs:</strong> Your website should be as unique as
						your brand. </Typography>
            <Typography className={styles.featureItem}>✔ <strong>Speedy Delivery:</strong> Deadlines matter. We ensure your
						project is delivered on time.</Typography>
            <Typography className={styles.featureItem}>✔ Deadlines matter. We ensure your
						project is delivered on time.</Typography>
          </div>
 */}
				</div>
				<div className={styles.imageContainer}>
					<Link href="/">
						<img
							src="./imageHero.png" // Make sure the image path is correct
							alt="Hero Image"
							className={styles.heroImage}
						/>
					</Link>
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
