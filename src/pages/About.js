import * as React from "react";
import { Typography, Container, Grid } from "@mui/material";
import Skills from "../components/Skills";
import "./styles.css";
import Box from "@mui/material/Box";

const About = () => {
  return (
    <Container
      sx={{
        color: "white",
        bgcolor: "#140524",
        margin: "0px",
      }}
    >
      <Grid item xs={12} style={{ textAlign: "center" }}>
        <Typography
          style={{ color: "white" }}
          id="about"
          variant="h2"
          component="h2"
          gutterBottom
        >
          <br />
          ABOUT ME{" "}
        </Typography>
        <br />
        <hr />
        <br />
        <Typography
          style={{ color: "#bdbdbd", textAlign: "center" }}
          variant="p"
          component="p"
          gutterBottom
        >
          I am a front-end web developer from New Jersey, dedicated to building
          responsive and user-friendly websites. With experience as a
          freelancer, I’ve worked on various projects, helping businesses
          establish and enhance their online presence. My focus is on writing
          clean, efficient code and delivering visually engaging, intuitive
          designs, while continuously staying updated with the latest trends in
          web development.
        </Typography>
      </Grid>
      <Skills />
    </Container>
  );
};
export default About;
