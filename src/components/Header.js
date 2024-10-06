import React from "react";
import { Box, Button, Container, Typography } from "@mui/material";
import "./styles.css"

const Greeting = () => {
  const scrollToProjects = () => {
    const projectsSection = document.getElementById("projects");

    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <Container
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        // bgcolor: "#f0f0f0",
      }}
    >
      <Box
        sx={{
          // padding: "20px",
          textAlign: "center"
        }}
      >
        <Typography
        
          color="#25291C"
          variant="h1"
          component="div"
          sx={{ 
            flexGrow: 1,
            background: "linear-gradient(40deg, #ea00ff, #ea00ff, #03d5ff, #03d5ff)",
            WebkitBackgroundClip: "text", // For making the gradient visible in text
            WebkitTextFillColor: "transparent" // Makes the text transparent so gradient shows through
          }}        >
          HI THERE! I'M ALEX FERNANDES
        </Typography>
        <br />
        <br />
        <br />
        <Typography
          style={{ textAlign: "center"  }}
          variant="p"
          component="p"
          gutterBottom
          sx={{ 
            color: "#8964b0"
          }}
        >
          I'm a Web Developer student based in New Jersey, United States. I
          strive to build immersive and beautiful web applications through
          carefully crafted code and user-centric design.
        </Typography>
        <br />
        <Button  onClick={scrollToProjects} variant="contained" color="secondary">
          PROJECTS
        </Button>
        
      </Box>
    </Container>
  );
};

export default Greeting;
