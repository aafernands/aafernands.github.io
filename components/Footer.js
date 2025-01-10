import styles from "../styles/footer.module.css"; // Import the CSS module

const Footer = () => {
  const currentDate = new Date().getFullYear(); // Get the current year dynamically

  return (
    <footer className={styles.footer}>
      <p>© {currentDate} FNDS Labs. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
