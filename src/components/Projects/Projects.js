import React from "react";
import Thumbnail from "./Thumbnail"; // Import the Thumbnail component
import password from "./Password.png"; // Import the images
import quiz from "./Quiz.png"; 
import weather from "./Weather.png"; 
import scheduler from "./Scheduler.png"; 
import books from "./Books.png"; 
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  gridItem: {
    padding: theme.spacing(2),

  },
}));

function Projects(props) {
  const classes = useStyles();

  return (
    <Container className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6} md={4} className={classes.gridItem}>
          <Thumbnail
            linkLive="https://aafernands.github.io/password-generator/"
            linkGithub="https://github.com/aafernands/password-generator"
            image={password}
            title="Password Generator"
            description="Prevent a threat to security by obtaining a secure and random password with this password generator."
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4} className={classes.gridItem}>
          <Thumbnail
            linkLive="https://aafernands.github.io/quiz-game/"
            linkGithub="https://github.com/aafernands/quiz-game"
            image={quiz}
            title="Quiz Game"
            description="Answer this fun trivia multiple questions quiz within the time limit. Incorrect answers wil penalize your socre by 10 seconds."
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4} className={classes.gridItem}>
          <Thumbnail
            linkLive="https://aafernands.github.io/weatherApp/"
            linkGithub="https://github.com/aafernands/weatherApp"
            image={weather}
            title="Weather Dashboard"
            description="Search for a city to get weather information like hunidity, wind speed, UV index and a 5 day weather forecast"
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4} className={classes.gridItem}>
          <Thumbnail
            linkLive="https://aafernands.github.io/work-day-scheduler/"
            linkGithub="https://github.com/aafernands/work-day-scheduler/"
            image={scheduler}
            title="Note Taker"
            description="Organize your daily tasks with this work day scheduller app. Save the notes and on specific time."
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4} className={classes.gridItem}>
          <Thumbnail
            linkLive="https://alex-books-search-app.herokuapp.com/"
            linkGithub="https://github.com/aafernands/google-books"
            image={books}
            title="Google Books Search"
            description="Search the world's most comprehensive index of full-text books."
          />
        </Grid>
      </Grid>
    </Container>
  );
}

export default Projects;
