"use client"

import { useRouter } from "next/navigation";
import { useState } from "react";
import { Drawer, IconButton, AppBar, Toolbar } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
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
          padding: "20px",
          textAlign: "center",
        }}
        className={styles.toolbar}
      >
        <div className={styles.logo}>
          <a onClick={() => handleNavigation("/")} style={{ cursor: "pointer" }}>
            <img
              src="../logo.png"
              alt="FNDS Labs Logo"
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
          <MenuIcon sx={{ color: "#000000" }} />
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
              </li>
            ))}
          </ul>
        </div>
      </Drawer>
    </AppBar>
  );
}