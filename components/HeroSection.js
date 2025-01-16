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
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import largeHero from "../public/largeHero.png";

const HeroSection = () => {
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
                xs: "2.5rem", // Extra small screens
                sm: "3rem", // Small screens
                md: "3.5rem", // Medium screens
                lg: "4rem", // Large screens
                xl: "5rem", // Extra large screens
              },
            }}
          >
            Building your online presence with{" "}
            <span className={styles.highlight}>creative and innovative</span>{" "}
            solutions!
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
          <Box display="flex" alignItems="flex-start">
            <FontAwesomeIcon
              icon={faCircleCheck}
              style={{
                color: "red",
              }}
            />

            <Typography
              sx={{
                fontSize: {
                  xs: "1.1rem",
                  sm: "1.5rem",
                  md: "1.8rem",
                  margin: "-10px 0px 0px 10px",
                },
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
                color: "orange",
              }}
            />
            <Typography
              sx={{
                fontSize: {
                  xs: "1.1rem",
                  sm: "1.5rem",
                  md: "1.8rem",
                  margin: "-10px 0px 0px 10px",
                },
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
                color: "blue",
              }}
            />
            <Typography
              sx={{
                fontSize: {
                  xs: "1.1rem",
                  sm: "1.5rem",
                  md: "1.8rem",
                  margin: "-10px 0px 0px 10px",
                },
              }}
              className={styles.heroDescription}
            >
              <strong>Full Transparency:</strong> Stay informed every step of
              the way.
            </Typography>
          </Box>
        </Grid>
        <Container className={styles.heroSection}>
          <div className={styles.rightButtons}>
            {/* First Button: Book a Call */}
            <Button
              target="_blank"
              href="https://calendly.com/fndslabs-15min-call/15min"
              variant="outlined"
              aria-label="Book a Call"
            >
              Book a Call
            </Button>

            {/* Second Button: See Plans */}
            <Button href="/pricing" variant="contained" aria-label="See Plans">
              See Plans
            </Button>
          </div>
        </Container>
      </Grid>
    </div>
  );
  console.log("isDarkMode:", isDarkMode);
};

export default HeroSection;
