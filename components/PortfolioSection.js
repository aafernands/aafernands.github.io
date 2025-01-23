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
    description:
      "A responsive website for an authentic Italian restaurant, showcasing the menu, story, and reservation options with a modern, user-friendly design.",
    image: "./project1.png", // Replace with actual image paths
    liveDemo: "https://bella-vitta-restaurant.vercel.app/",
    githubLink: "https://github.com/aafernands/bella-vitta-restaurant",
    technologies: ["React", "Material UI", "Node.js", "Next.js"],
    tags: ["Responsive", "E-commerce"],
    date: "January 2025",
  },
  {
    title: "WeatherApp",
    description:
      "A simple and intuitive web application for checking the weather in any city worldwide.",
    image: "./project2.png",
    liveDemo: "https://weatherapp-demo.com",
    githubLink: "https://github.com/aafernands/weatherapp",
    technologies: ["JavaScript", "Bootstrap", "API Integration"],
    tags: ["API", "Utility"],
    date: "December 2024",
  },
  {
    title: "Realtor App",
    description:
      "A real estate app to browse and save properties, featuring user authentication and favorite listings.",
    image: "./project3.png",
    liveDemo: "https://realtorapp-demo.com",
    githubLink: "https://github.com/aafernands/realtorapp",
    technologies: ["React", "MongoDB", "JWT"],
    tags: ["Full Stack", "Authentication"],
    date: "November 2024",
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
                  bgcolor: "white",
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
                  sx={{
                    objectFit: "contain",
                    borderRadius: 1,
                    padding: "10px",
                    margin: "10px",
                  }}
                />
                <CardContent sx={{ textAlign: "center" }}>
                  <Typography variant="h6">{project.title}</Typography>
                  <Typography variant="body2" color="text.secondary">
                    {project.description}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{ marginTop: "10px" }}
                  >
                                          <br></br>

                    <strong>Technologies:</strong> {project.technologies.join(", ")}
                  </Typography>
                  <br></br>

                  <Box
                    sx={{
                      display: "flex",
                      gap: "5px",
                      flexWrap: "wrap",
                      marginTop: "10px",
                    }}
                  >
                    {project.tags.map((tag, i) => (
                      <Box
                        key={i}
                        sx={{
                          backgroundColor: "#f0f0f0",
                          borderRadius: "12px",
                          padding: "5px 10px",
                          fontSize: "0.8rem",
                        }}
                      >
                        {tag}
                      </Box>
                    ))}
                  </Box>
                  <br></br>

                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      marginTop: "10px",
                    }}
                  >
                    <Button
                      href={project.liveDemo}
                      target="_blank"
                      variant="contained"
                      size="small"
                      sx={{ margin: "5px" }}
                    >
                      Live Demo
                    </Button>
                    <Button
                      href={project.githubLink}
                      target="_blank"
                      variant="outlined"
                      size="small"
                      sx={{ margin: "5px" }}
                    >
                      GitHub
                    </Button>
                  </Box>
                  <Typography
                    variant="caption"
                    color="text.secondary"
                    sx={{ marginTop: "10px" }}
                  >
                    Last Updated: {project.date}
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
