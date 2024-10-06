// import React from "react";
// import ServicesCard from "../components/ServicesCard.js";
// import webDev from "../images/cards/webDev.jpg";
// import webDesign from "../images/cards/webDesign.jpg";
// import seo from "../images/cards/seo.jpg";
// import ui from "../images/cards/ui.jpg";

// import Typography from "@mui/material/Typography";
// import Container from "@mui/material/Container";
// import { makeStyles } from "@mui/styles";
// import Grid from "@mui/material/Grid";

// const useStyles = makeStyles((theme) => ({
//     ServicesCard: {
//     marging: "20px",
//     padding: "20px",
//     textAlign: "center",
//     bgcolor: "",
//     boxShadow: "2.5px 5px 4px #fff",
//     color: "white",
//   },
//   root: {
//     bgcolor: "red",
//   },
// }));

// function Services(props) {
//   const classes = useStyles();

//   return (
//     <Container>
//       <Grid item xs={12} style={{ textAlign: "center" }}>
//         <Typography id="service" variant="h4" component="h2" gutterBottom>
//           SERVICE OFFERS{" "}
//         </Typography>
//         <br />

//         <Typography variant="p" component="p" gutterBottom>
//           At FNDS Labs, we are dedicated to delivering exceptional web
//           development and design solutions tailored to meet your unique needs.
//           Our comprehensive range of services ensures that every aspect of your
//           online presence is optimized for success. Explore our offerings below
//           and discover how we can elevate your digital experience.
//         </Typography>
//       </Grid>

//       <Grid container spacing={2}>
//         <Grid item xs={12}>
//           <Grid
//             style={{
//               padding: 30,
//               bgcolor: "transparent",
//               alignContent: "flex-end",
//               display: "flex",
//               justifyContent: "space-around",
//               alignItems: "flex-start",
//             }}
//             container
//             justify="center"
//             alignItems="center"
//             spacing={2}
//           >
//             <Grid item md={4}>
//               <ServicesCard
//                 className={classes.ServicesCard}
//                 image={webDev}
//                 title="WP DEVELOPMENT"
//                 description="We provide top-notch WordPress development services to bring your vision to life. From custom themes and plugins to seamless integrations and maintenance, we ensure your website is functional, scalable, and easy to manage."
//               />
//             </Grid>
//             <Grid item md={4}>
//               <ServicesCard
//                 className={classes.ServicesCard}
//                 image={webDesign}
//                 title="WEB DESIGN"
//                 description="Our web design services combine aesthetics with functionality. We craft visually stunning websites that are fully responsive and optimized for performance, ensuring a seamless experience across all devices."
//               />
//             </Grid>
//             <Grid item md={4}>
//               <ServicesCard
//                 className={classes.ServicesCard}
//                 image={seo}
//                 title="SEO OPTIMIZATION"
//                 description="Maximize your online presence with our SEO optimization services. We use the latest strategies to improve your website’s search engine ranking, driving organic traffic and increasing visibility to help you reach your target audience."
//               />
//             </Grid>
//             <Grid item md={4}>
//               <ServicesCard
//                 className={classes.ServicesCard}
//                 image={ui}
//                 title="UI/UX DESIGN"
//                 description="Our UI/UX design services focus on creating engaging and intuitive interfaces. We prioritize user experience to ensure your website or application is not only visually appealing but also user-friendly, enhancing satisfaction and loyalty."
//               />
//             </Grid>
//           </Grid>
//         </Grid>
//       </Grid>
//     </Container>
//   );
// }

// export default Services;

import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import Chip from "@mui/material/Chip";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Link from "@mui/material/Link";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import ChevronRightRoundedIcon from "@mui/icons-material/ChevronRightRounded";
import WebRoundedIcon from "@mui/icons-material/WebRounded";
import CodeRoundedIcon from "@mui/icons-material/CodeRounded";
import BuildRoundedIcon from "@mui/icons-material/BuildRounded";

const services = [
  {
    icon: <WebRoundedIcon />,
    title: "Web Development",
    description:
      "We offer responsive and interactive web development services using the latest technologies.",
    imageLight: 'url("/path/to/your/light-image-web.png")',
    imageDark: 'url("/path/to/your/dark-image-web.png")',
  },
  {
    icon: <CodeRoundedIcon />,
    title: "App Development",
    description:
      "Our team can develop mobile and desktop applications tailored to your needs.",
    imageLight: 'url("/path/to/your/light-image-app.png")',
    imageDark: 'url("/path/to/your/dark-image-app.png")',
  },
  {
    icon: <BuildRoundedIcon />,
    title: "Maintenance & Support",
    description:
      "We provide ongoing maintenance and support to ensure your products are always up to date.",
    imageLight: 'url("/path/to/your/light-image-maintenance.png")',
    imageDark: 'url("/path/to/your/dark-image-maintenance.png")',
  },
];

export default function Services() {
  const [selectedServiceIndex, setSelectedServiceIndex] = React.useState(0);

  const handleServiceClick = (index) => {
    setSelectedServiceIndex(index);
  };

  const selectedService = services[selectedServiceIndex];

  return (
    <Container id="services" sx={{ py: { xs: 8, sm: 16 } }}>
      <Grid container spacing={6}>
        <Grid item xs={12} md={6}>
          <Typography
            style={{ color: "#06090A" }}
            id="about"
            variant="h2"
            component="h2"
            gutterBottom
          >
            Our Services
          </Typography>
          <br />
      <hr />
      <br />
          <Typography
            variant="body1"
            color="text.secondary"
            sx={{ mb: { xs: 2, sm: 4 } }}
          >
            Explore the various services we offer to help your business succeed.
          </Typography>
          <Grid
            container
            item
            gap={1}
            sx={{ display: { xs: "auto", sm: "none" } }}
          >
            {services.map(({ title }, index) => (
              <Chip
                key={index}
                label={title}
                onClick={() => handleServiceClick(index)}
                sx={{
                  borderColor: (theme) => {
                    if (theme.palette.mode === "light") {
                      return selectedServiceIndex === index
                        ? "primary.light"
                        : "";
                    }
                    return selectedServiceIndex === index
                      ? "primary.light"
                      : "";
                  },
                  background: (theme) => {
                    if (theme.palette.mode === "light") {
                      return selectedServiceIndex === index ? "none" : "";
                    }
                    return selectedServiceIndex === index ? "none" : "";
                  },
                  backgroundColor:
                    selectedServiceIndex === index ? "primary.main" : "",
                  "& .MuiChip-label": {
                    color: selectedServiceIndex === index ? "#fff" : "",
                  },
                }}
              />
            ))}
          </Grid>
          <Box
            component={Card}
            variant="outlined"
            sx={{
              display: { xs: "auto", sm: "none" },
              mt: 4,
            }}
          >
            <Box
              sx={{
                backgroundImage: (theme) =>
                  theme.palette.mode === "light"
                    ? services[selectedServiceIndex].imageLight
                    : services[selectedServiceIndex].imageDark,
                backgroundSize: "cover",
                backgroundPosition: "center",
                minHeight: 280,
              }}
            />
            <Box sx={{ px: 2, pb: 2 }}>
              <Typography
                color="text.primary"
                variant="body2"
                fontWeight="bold"
              >
                {selectedService.title}
              </Typography>
              <Typography
                color="text.secondary"
                variant="body2"
                sx={{ my: 0.5 }}
              >
                {selectedService.description}
              </Typography>
              <Link
                color="primary"
                variant="body2"
                fontWeight="bold"
                sx={{
                  display: "inline-flex",
                  alignItems: "center",
                  "& > svg": { transition: "0.2s" },
                  "&:hover > svg": { transform: "translateX(2px)" },
                }}
              >
                <span>Learn more</span>
                <ChevronRightRoundedIcon
                  fontSize="small"
                  sx={{ mt: "1px", ml: "2px" }}
                />
              </Link>
            </Box>
          </Box>
          <Stack
            direction="column"
            justifyContent="center"
            alignItems="flex-start"
            spacing={2}
            useFlexGap
            sx={{ width: "100%", display: { xs: "none", sm: "flex" } }}
          >
            {services.map(({ icon, title, description }, index) => (
              <Card
                key={index}
                variant="outlined"
                component={Button}
                onClick={() => handleServiceClick(index)}
                sx={{
                  p: 3,
                  height: "fit-content",
                  width: "100%",
                  background: "none",
                  backgroundColor:
                    selectedServiceIndex === index
                      ? "action.selected"
                      : undefined,
                  borderColor: (theme) => {
                    if (theme.palette.mode === "light") {
                      return selectedServiceIndex === index
                        ? "primary.light"
                        : "grey.200";
                    }
                    return selectedServiceIndex === index
                      ? "primary.dark"
                      : "grey.800";
                  },
                }}
              >
                <Box
                  sx={{
                    width: "100%",
                    display: "flex",
                    textAlign: "left",
                    flexDirection: { xs: "column", md: "row" },
                    alignItems: { md: "center" },
                    gap: 2.5,
                  }}
                >
                  <Box
                    sx={{
                      color: (theme) => {
                        if (theme.palette.mode === "light") {
                          return selectedServiceIndex === index
                            ? "primary.main"
                            : "grey.300";
                        }
                        return selectedServiceIndex === index
                          ? "primary.main"
                          : "grey.700";
                      },
                    }}
                  >
                    {icon}
                  </Box>
                  <Box sx={{ textTransform: "none" }}>
                    <Typography
                      color="text.primary"
                      variant="body2"
                      fontWeight="bold"
                    >
                      {title}
                    </Typography>
                    <Typography
                      color="text.secondary"
                      variant="body2"
                      sx={{ my: 0.5 }}
                    >
                      {description}
                    </Typography>
                    <Link
                      color="primary"
                      variant="body2"
                      fontWeight="bold"
                      sx={{
                        display: "inline-flex",
                        alignItems: "center",
                        "& > svg": { transition: "0.2s" },
                        "&:hover > svg": { transform: "translateX(2px)" },
                      }}
                      onClick={(event) => {
                        event.stopPropagation();
                      }}
                    >
                      <span>Learn more</span>
                      <ChevronRightRoundedIcon
                        fontSize="small"
                        sx={{ mt: "1px", ml: "2px" }}
                      />
                    </Link>
                  </Box>
                </Box>
              </Card>
            ))}
          </Stack>
        </Grid>
        <Grid
          item
          xs={12}
          md={6}
          sx={{ display: { xs: "none", sm: "flex" }, width: "100%" }}
        >
          <Card
            variant="outlined"
            sx={{
              height: "100%",
              width: "100%",
              display: { xs: "none", sm: "flex" },
              pointerEvents: "none",
            }}
          >
            <Box
              sx={{
                m: "auto",
                width: 420,
                height: 500,
                backgroundSize: "contain",
                backgroundImage: (theme) =>
                  theme.palette.mode === "light"
                    ? services[selectedServiceIndex].imageLight
                    : services[selectedServiceIndex].imageDark,
              }}
            />
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
}
