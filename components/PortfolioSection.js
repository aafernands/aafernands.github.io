import React from "react";
import {
  Container,
  Typography,
  Button,
  Box,
  Card,
  CardMedia,
  CardContent,
  Grid,
} from "@mui/material";
import styles from "../styles/portfolioSection.module.css"; // Import the CSS module

const projects = [
  {
    title: "Bella Vita Ristorante",
    description: "A responsive website for an authentic Italian restaurant, showcasing the menu, story, and reservation options with a modern, user-friendly design.",
    image: "./bellavita.png", // Replace with actual image paths
    link: "/project1",
  },
  {
    title: "Project 2",
    description: "A brief description of Project 2.",
    image: "./project2.png",
    link: "/project2",
  },
  {
    title: "Project 3",
    description: "A brief description of Project 3.",
    image: "./project3.png",
    link: "/project3",
  },
];

const PortfolioSection = () => {
  return (
    <>
      <Container id="portfolio" className={styles.portfolioSection}>
        <Typography variant="h2" className={styles.title}>
          Portfolio
        </Typography>
        <Typography variant="body1" className={styles.paragraph}>
          Explore some of our creative and innovative projects. Each project is
          designed with care and attention to detail.
        </Typography>

        {/* Grid for Responsive Layout */}
        <Grid container spacing={3}>
          {projects.map((project, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  boxShadow: 3,
                  borderRadius: 2,
                  transition: "transform 0.3s",
                  "&:hover": {
                    transform: "scale(1.05)",
                  },
                }}
                variant="outlined"
              >
                <CardMedia
                  component="img"
                  height="200"
                  image={project.image}
                  alt={project.title}
                  sx={{ objectFit: "contain", borderRadius: 1, padding: "10px" }}
                />
                <CardContent sx={{ textAlign: "center" }}>
                  <Typography variant="h6">{project.title}</Typography>
                  <Typography variant="body2" color="text.secondary">
                    {project.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Button Outside the Container */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          marginTop: 4,
        }}
      >
        <Button
          target="blank"
          href="https://figma.com"
          variant="contained"
          aria-label="See More Projects"
          sx={{
            padding: "8px 16px",
            color: "white",
            textTransform: "none",
            borderRadius: 2,
            boxShadow: 2,
          }}
        >
          See More Projects
        </Button>
      </Box>
    </>
  );
};

export default PortfolioSection;
