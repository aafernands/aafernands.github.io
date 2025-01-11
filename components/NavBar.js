"use client";

import Link from 'next/link';
import { useState } from 'react';
import styles from '../styles/navbar.module.css'; // Import the CSS module
import { Drawer, IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const toggleDrawer = () => {
    setOpen(!open);
  };

  return (
    <nav className={styles.navbar}>
      {/* Logo on the left */}
      <div className={styles.logo}>
        <Link href="/">
          {/* Replace with your logo */}
          <img src="../logoColors.jpg" alt="FNDS Labs Logo" className={styles.logoImage} />
        </Link>
      </div>

      {/* Desktop Menu on the right */}
      <ul className={styles.navLinks}>
        <li><Link href="/">Home</Link></li>
        {/* <li><Link href="/about">About</Link></li> */}
        <li><Link href="/contact">Contact</Link></li>
        {/* <li><Link href="/testimonials">Testimonials</Link></li>
        <li><Link href="/pricing">Pricing</Link></li> */}
      </ul>

      {/* Mobile Menu Icon */}
      <IconButton className={styles.menuIcon} onClick={toggleDrawer}>
        <MenuIcon />
      </IconButton>

      {/* Mobile Drawer */}
      <Drawer anchor="left" open={open} onClose={toggleDrawer}>
        <div className={styles.drawerMenu}>
          <ul>
            <li><Link href="/">Home</Link></li>
            {/* <li><Link href="/about">About</Link></li> */}
            <li><Link href="/contact">Contact</Link></li>
            {/* <li><Link href="/testimonials">Testimonials</Link></li>
            <li><Link href="/pricing">Pricing</Link></li> */}
          </ul>
        </div>
      </Drawer>
    </nav>
  );
}
