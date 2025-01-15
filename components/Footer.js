"use client";

import { useRouter } from "next/navigation"; // Correct import
import Link from 'next/link';
import { Facebook, Instagram } from '@mui/icons-material';
import styles from "../styles/footer.module.css"; // Import the CSS module
import { Typography } from "@mui/material";

const Footer = () => {
  const router = useRouter(); // Initialize the router

  // Handle navigation
  const handleNavigation = (path) => {
    router.push(path); // Navigate to the path
  };

  const currentDate = new Date().getFullYear(); // Get the current year dynamically

  return (
    <footer className={styles.footer}>
      {/* Logo Section */}
      <div className={styles.logo}>
        <Link href="/">
          <img src="../logoBlack.png" alt="FNDS Labs Logo" className={styles.logoImage} />
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
                style={{ cursor: "pointer" }}
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* Social Media Links */}
      <div className={styles.socialMedia}>
        <a href="https://www.facebook.com/fndslabs/" target="_blank" rel="noopener noreferrer">
          <Facebook className={styles.icon} />
        </a>
        <a href="https://www.instagram.com/fnds.labs" target="_blank" rel="noopener noreferrer">
          <Instagram className={styles.icon} />
        </a>
      </div>

      {/* Copyright */}
      <Typography variant="p">© {currentDate} FNDS Labs. All rights reserved.</Typography>
    </footer>
  );
};

export default Footer;
