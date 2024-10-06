import * as React from "react";
import { Typography, Grid } from "@mui/material";
import Projects from "../components/Projects/Projects";

function Portfolio() {
  return (
    <Grid item xs={12}>
     <Typography
          style={{ color: "white" }}
          id="projects"
          variant="h2"
          component="h2"
          gutterBottom
        >
                    <br />

        PROJECTS{" "}
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
        Take a look at the projects I've worked on—each one is a reflection of
        my dedication to turning ideas into something real and meaningful. From
        concept to completion, I've put my heart into crafting solutions that
        not only solve problems but also spark creativity and drive success.
        
      </Typography>
      <Projects />
    </Grid>
  );
}
export default Portfolio;
