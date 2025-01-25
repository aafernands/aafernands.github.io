"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { Box, Drawer, IconButton, AppBar, Toolbar } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import styles from "../styles/navbar.module.css";

export default function Navbar() {
  const router = useRouter();
  const [open, setOpen] = useState(false);

  const toggleDrawer = () => {
    setOpen(!open);
  };

  const handleNavigation = (path) => {
    setOpen(false);
    router.push(path);
  };

  return (
    <AppBar position="fixed" className={styles.appbar}>
      <Toolbar
        sx={{
          backgroundColor: "white",
          color: "#000000",
          marginLeft: "20px",
          padding: "20px",
          textAlign: "center",
        }}
        className={styles.toolbar}
      >
        <div className={styles.logo}>
          <a onClick={() => handleNavigation("/")} style={{ cursor: "pointer" }}>
            <img
              src="../logo.png"
              alt="ALX Web Dev Logo"
              className={styles.logoImage}
            />
          </a>
        </div>

        <ul className={styles.navLinks}>
          {[
            { name: "Home", path: "/" },
            { name: "About", path: "/about" },
            { name: "Contact", path: "/contact" },
            { name: "Portfolio", path: "/#portfolio" },
            { name: "Testimonials", path: "/#reviews" },
            { name: "Pricing", path: "/pricing" },
          ].map((item) => (
            <li key={item.name}>
              <a
                onClick={() => handleNavigation(item.path)}
                aria-label={item.name}
                style={{ cursor: "pointer" }}
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>

        <IconButton className={styles.menuIcon} onClick={toggleDrawer}>
          <MenuIcon sx={{ marginRight: "5px", color: "#000000", fontSize: "2.5rem" }} />
        </IconButton>
      </Toolbar>

      <Drawer anchor="left" open={open} onClose={toggleDrawer}>
        <div className={styles.drawerMenu}>
          <ul>
            {[
              { name: "Home", path: "/" },
              { name: "About", path: "/about" },
              { name: "Contact", path: "/contact" },
              { name: "Portfolio", path: "/#portfolio" },
              { name: "Testimonials", path: "/#reviews" },
              { name: "Pricing", path: "/pricing" },
            ].map((item) => (
              <li key={item.name}>
                <a
                  onClick={() => handleNavigation(item.path)}
                  aria-label={item.name}
                  style={{ cursor: "pointer" }}
                >
                  {item.name}
                </a>
                <hr style={{ border: "0.1px solid #272727", margin: "8px 0" }} />
              </li>
            ))}
          </ul>

          <Box style={{ marginTop: "auto", padding: "16px", textAlign: "center" }}>
            <a href="https://facebook.com/alxwebdev" target="_blank" rel="noopener noreferrer">
              <FacebookIcon sx={{ fontSize: "2rem", margin: "0 8px", color: "white" }} />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <InstagramIcon sx={{ fontSize: "2rem", margin: "0 8px", color: "white" }} />
            </a>
            <p style={{ marginTop: "8px", fontSize: "0.9rem", color: "#666" }}>
              alx@webdevlopment.com
            </p>
          </Box>
        </div>
      </Drawer>
    </AppBar>
  );
}
