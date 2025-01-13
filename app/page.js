import styles from "./page.module.css";
import UnderConstruction from "../components/UnderConstruction";
import { Grid, Container, Typography, Box } from "@mui/material";
import Hero from "../components/Hero.js"

export const metadata = {
  title: "Your Vision, Our Code",
  description: "Custom web solutions, simplified.",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function Home() {
  const currentDate = new Date().getFullYear();

  // Check if the environment variable is set to 'true'
  if (process.env.SHOW_UNDER_CONSTRUCTION === "true") {
    return <UnderConstruction />;
  }

  return (
    <div>
      {/* Full viewport container */}
      <div className={styles.container}>
      <Container maxWidth="lg">

      <Hero />

      </Container>


      </div>

      {/* Header below the main content */}
      <header className={styles.header}>
        <p>Custom web solutions, simplified.</p>
      </header>

      {/* Main content below the header */}
      <main className={styles.main}>
        <section className={styles.section}>
          <h2>Why Choose Us?</h2>
          <ul>
            <li>
              <strong>Custom Designs:</strong> Your website should be as unique
              as your brand.
            </li>
            <li>
              <strong>Speedy Delivery:</strong> Deadlines matter. We ensure your
              project is delivered on time.
            </li>
            <li>
              <strong>Full Transparency:</strong> Stay informed every step of
              the way.
            </li>
          </ul>
        </section>
        <section className={styles.section}>
          <h2>How It Works</h2>
          <ol>
            <li>
              <strong>Share Your Vision:</strong> Use our intuitive request
              system to tell us about your project.
            </li>
            <li>
              <strong>Collaborate:</strong> Work directly with our team to
              refine your ideas and see mockups.
            </li>
            <li>
              <strong>Launch:</strong> Watch your website come to life, fully
              optimized and ready to perform.
            </li>
          </ol>
          <button className={styles.ctaButton}>Start Your Project Today</button>
        </section>

        <section className={styles.section}>
          <h2>Features We Offer</h2>
          <ul>
            <li>
              <strong>Responsive Design:</strong> Websites that look and work
              perfectly on all devices.
            </li>
            <li>
              <strong>SEO Optimization:</strong> Be found by the people who
              matter most.
            </li>
            <li>
              <strong>Custom Integrations:</strong> From e-commerce to
              analytics, we make it happen.
            </li>
            <li>
              <strong>Ongoing Support:</strong> We’re here for you, even after
              launch.
            </li>
          </ul>
          <button className={styles.ctaButton}>Explore Our Services</button>
        </section>

        <section className={styles.section}>
          <h2>Pricing Made Simple</h2>
          <div className={styles.pricingGrid}>
            <div className={styles.pricingCard}>
              <h3>Basic</h3>
              <p>Perfect for small businesses and personal projects.</p>
            </div>
            <div className={styles.pricingCard}>
              <h3>Pro</h3>
              <p>For growing businesses that need advanced features.</p>
            </div>
            <div className={styles.pricingCard}>
              <h3>Premium</h3>
              <p>The ultimate solution for enterprises and complex needs.</p>
            </div>
          </div>
          <button className={styles.ctaButton}>See Pricing Plans</button>
        </section>

        <section className={styles.section}>
          <h2>What Our Clients Say</h2>
          <blockquote className="blockquote">
            <p>
              "The team made my vision a reality. My website exceeded
              expectations!"
            </p>
            <footer>– Happy Client</footer>
          </blockquote>
        </section>
      </main>
    </div>
  );
}
