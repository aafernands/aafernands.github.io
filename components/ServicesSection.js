import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaintRoller, faBoltLightning, faShieldAlt, faEnvelope, faTruck } from "@fortawesome/free-solid-svg-icons";
import { Box, Typography, Grid, Paper } from "@mui/material";
import styles from "../styles/servicesSection.module.css";  // Make sure to add this CSS file

const services = [
  { name: "Custom Design", icon: faPaintRoller },
  { name: "High-Speed Hosting", icon: faBoltLightning },
  { name: "SSL & Security", icon: faShieldAlt },
  { name: "Email Support", icon: faEnvelope },
  { name: "Fast Delivery", icon: faTruck },
];

const Services = () => {
  return (
    <Box className={styles.servicesContainer}>
      <Typography variant="h2" align="center" gutterBottom>
        Our Services
      </Typography>
      <Grid container spacing={2} justifyContent="center">
        {services.map((service, index) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
            <Paper className={styles.serviceCard} elevation={3}>
              <FontAwesomeIcon icon={service.icon} className={styles.icon} />
              <Typography variant="h6" className={styles.serviceName}>
                {service.name}
              </Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Services;
