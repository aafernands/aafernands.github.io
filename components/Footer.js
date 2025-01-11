// Importing necessary Material UI components and icons
import { Facebook, Instagram } from '@mui/icons-material';
import Link from 'next/link';
import styles from "../styles/footer.module.css"; // Import the CSS module

const Footer = () => {
  const currentDate = new Date().getFullYear(); // Get the current year dynamically

  return (
    <footer className={styles.footer}>
      {/* Logo Section */}
      <div className={styles.logo}>
      <Link href="/">
        <img src="../logoColors.jpg" alt="FNDS Labs Logo" className={styles.logoImage} />
        </Link>

      </div>

      {/* Placeholder Message */}
      <div className={styles.message}>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>
        <p>Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris.</p>
        <p>Fusce nec tellus sed augue semper porta. Mauris massa.</p>
      </div>

      {/* Menu Links */}
      <div className={styles.menuLinks}>
        <a href="#testimonials">Testimonials</a>
        <a href="#pricing">Pricing</a>
        <a href="#about">About</a>
        <a href="#services">Services</a>
        <a href="#contact">Contact</a>
      </div>

      {/* Social Media Links */}
      <div className={styles.socialMedia}>
        <a href="https://www.facebook.com/fndslabs" target="_blank" rel="noopener noreferrer">
          <Facebook className={styles.icon} />
        </a>
        <a href="https://www.instagram.com/fnds.labs" target="_blank" rel="noopener noreferrer">
          <Instagram className={styles.icon} />
        </a>
      </div>

      {/* Copyright */}
      <p>© {currentDate} FNDS Labs. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
