"use client";

import { useRouter } from "next/navigation"; // Correct import
import Link from "next/link";
import { Facebook, Instagram } from "@mui/icons-material";
import styles from "../styles/footer.module.css"; // Import the CSS module
import { Typography, Box } from "@mui/material";

const Footer = ({ isDarkMode }) => {
  const router = useRouter(); // Initialize the router

  // Handle navigation
  const handleNavigation = (path) => {
    router.push(path); // Navigate to the path
  };

  const currentDate = new Date().getFullYear(); // Get the current year dynamically

  return (
    <Box
      sx={{
        backgroundColor: isDarkMode ? "black" : "white", // Dynamic background
        color: isDarkMode ? "#ffffff" : "#000000", // Dynamic text color
        paddingTop: "60px",
        paddingBottom: "20px",
        textAlign: "center",
      }}
    >
      {/* Logo Section */}
      <div className={styles.logo}>
        <Link href="/">
          <img
            src={isDarkMode ? "../logoBlack.png" : "../logoWhite.png"} // Dynamic logo
            alt="FNDS Labs Logo"
            className={styles.logoImage}
          />
        </Link>
      </div>

      {/* Menu Links */}
      <div className={styles.menuLinks}>
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
                style={{
                  cursor: "pointer",
                  color: isDarkMode ? "#90caf9" : "#1976d2", // Dynamic link color
                }}
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* Social Media Links */}
      <div className={styles.socialMedia}>
        <a
          href="https://www.facebook.com/fndslabs/"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: isDarkMode ? "#90caf9" : "#1976d2" }} // Dynamic icon color
        >
          <Facebook className={styles.icon} />
        </a>
        <a
          href="https://www.instagram.com/fnds.labs"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: isDarkMode ? "#90caf9" : "#1976d2" }} // Dynamic icon color
        >
          <Instagram className={styles.icon} />
        </a>
      </div>

      {/* Copyright */}
      <Typography variant="body2" sx={{ marginTop: "10px" }}>
        © {currentDate} FNDS Labs. All rights reserved.
      </Typography>
    </Box>
  );
};

export default Footer;
