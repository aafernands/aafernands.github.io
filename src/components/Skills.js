import * as React from "react";
import Box from "@mui/material/Box";

import Card from "@mui/material/Card";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import CodeIcon from "@mui/icons-material/Code";
import StorageIcon from "@mui/icons-material/Storage";
import IntegrationInstructionsIcon from "@mui/icons-material/IntegrationInstructions";
import GitHubIcon from "@mui/icons-material/GitHub";
import DesignServicesIcon from "@mui/icons-material/DesignServices";

const items = [
  {
    icon: <CodeIcon />,
    title: "Front-end Development: ",
    description:
      "Proficient in HTML5, CSS3, JavaScript, and various front-end frameworks like React.js and Bootstrap.",
  },
  {
    icon: <StorageIcon />,
    title: "Back-end Development:",
    description:
      "Experienced in Node.js, Express, MongoDB, and MySQL for building robust server-side applications.",
  },
  {
    icon: <IntegrationInstructionsIcon />,
    title: "Full Stack Proficiency:",
    description:
      "Skilled in integrating front-end and back-end technologies to develop scalable and responsive web applications.",
  },
  {
    icon: <GitHubIcon />,
    title: "Version Control and Deployment:",
    description:
      "Familiar with Git for version control and deploying applications using platforms like GitHub and Heroku.",
  },
  {
    icon: <DesignServicesIcon />,
    title: "UI/UX Design Principles:",
    description:
      "Knowledgeable about designing intuitive user interfaces and enhancing user experience through responsive design and accessibility practices.",
  },
];

export default function Highlights() {
  return (
    <Box
      id="highlights"
      sx={{
        pt: { xs: 4, sm: 12 },
        pb: { xs: 8, sm: 16 },
        color: "white",
        bgcolor: "#140524",
      }}
    >
      <Container
        sx={{
          position: "relative",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: { xs: 3, sm: 6 },
        }}
      >
        <Grid container spacing={2.5}>
          {items.map((item, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Stack
                direction="column"
                color="inherit"
                component={Card}
                spacing={1}
                useFlexGap
                sx={{
                  p: 3,
                  height: "100%",
                  borderColor: "grey.800",
                  background: "transparent",
                  textAlign: "center",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    opacity: "50%",
                    fontSize: "8rem",
                    mb: 2,
                  }}
                >
                  {item.icon}
                </Box>
                <div>
                  <Typography fontWeight="medium" gutterBottom>
                    {item.title}
                  </Typography>
                  <Typography variant="body2" sx={{ color: "grey.400" }}>
                    {item.description}
                  </Typography>
                </div>
              </Stack>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
