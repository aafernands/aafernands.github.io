import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import logo from "../images/logo.png";
import { makeStyles } from "@mui/styles";
import MenuDrawer from "./MenuDrawer";
import { Link as RouterLink } from "react-router-dom";
import Button from "@mui/material/Button";

const useStyles = makeStyles(() => ({
  toolbar: {
    minHeight: "56px", // Increased for better touch support
    justifyContent: "space-between",
    backgroundColor: "#02182B",
  },
  img: {
    height: "40px", // Increased for better visibility
    marginRight: "10px",
  },
  title: {
    flexGrow: 1,
    textAlign: "center",
    display: "block", // Ensuring the title is shown on all screens
  },
  link: {
    display: "flex",
    alignItems: "center",
    textDecoration: "none",
    color: "inherit",
  },
}));

export default function ButtonAppBar() {
  const classes = useStyles();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar className={classes.toolbar}>
          <RouterLink to="/" className={classes.link} onClick={scrollToTop}>
            <img src={logo} alt="Logo" className={classes.img} />
            <Typography variant="h5" component="div" className={classes.title}>
              Alex Fernandes
            </Typography>
          </RouterLink>
          <MenuDrawer />{" "}
          <a
            href="/resume.pdf"
            download="Alex_Fernandes_Resume.pdf"
            style={{ textDecoration: "none" }}
          >
            <Button variant="contained" color="secondary">
              RESUME
            </Button>
          </a>
        </Toolbar>
        
      </AppBar>
    </Box>
  );
}
