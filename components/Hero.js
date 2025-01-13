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
        <Grid item xs={12} lg={7}>
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



            <p>Custom web solutions, simplified.</p>


          </Box>
        </Grid>

        {/* Right Column */}
        <Grid item xs={12} lg={4}>
          <Box>
            Right Column (4 parts)
          </Box>
        </Grid>
      </Grid>

      <Grid container className={styles.box1} item xs={8}></Grid>
      <Grid className={styles.box2} item xs={4}>
        <Typography className={styles.heroDescription}>
          Custom web solutions{" "}
        </Typography>
      </Grid>
    </Box>
  );
}
