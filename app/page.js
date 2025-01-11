// app/page.js (Home Page)

import Head from 'next/head';

import styles from "./page.module.css";

export default function Home() {
  const currentDate = new Date().getFullYear();

  return (
    <div className={styles.container}>
    <Head>
      <title>Your Vision, Our Code</title>
      <meta name="description" content="Custom web solutions, simplified." />
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <header className={styles.header}>
      <h1>Your Vision, Our Code</h1>
      <p>Custom web solutions, simplified.</p>
      <button className={styles.ctaButton}>Let’s Build Something Amazing Together</button>
    </header>

    <main className={styles.main}>
      <section className={styles.section}>
        <h2>Why Choose Us?</h2>
        <ul>
          <li><strong>Custom Designs:</strong> Your website should be as unique as your brand.</li>
          <li><strong>Speedy Delivery:</strong> Deadlines matter. We ensure your project is delivered on time.</li>
          <li><strong>Full Transparency:</strong> Stay informed every step of the way.</li>
        </ul>
      </section>

      <section className={styles.section}>
        <h2>How It Works</h2>
        <ol>
          <li><strong>Share Your Vision:</strong> Use our intuitive request system to tell us about your project.</li>
          <li><strong>Collaborate:</strong> Work directly with our team to refine your ideas and see mockups.</li>
          <li><strong>Launch:</strong> Watch your website come to life, fully optimized and ready to perform.</li>
        </ol>
        <button className={styles.ctaButton}>Start Your Project Today</button>
      </section>

      <section className={styles.section}>
        <h2>Features We Offer</h2>
        <ul>
          <li><strong>Responsive Design:</strong> Websites that look and work perfectly on all devices.</li>
          <li><strong>SEO Optimization:</strong> Be found by the people who matter most.</li>
          <li><strong>Custom Integrations:</strong> From e-commerce to analytics, we make it happen.</li>
          <li><strong>Ongoing Support:</strong> We’re here for you, even after launch.</li>
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
        <blockquote className='blockquote'>
          <p>"The team made my vision a reality. My website is not only beautiful but also functional and user-friendly."</p>
          <footer>– Happy Client</footer>
        </blockquote>
        <blockquote>
          <p>"Fast, professional, and transparent. I couldn’t have asked for a better experience."</p>
          <footer>– Another Happy Client</footer>
        </blockquote>
        <button className={styles.ctaButton}>Read More Reviews</button>
      </section>

      <section className={styles.section}>
        <h2>Ready to Get Started?</h2>
        <p>Let’s create something extraordinary together. Get in touch today!</p>
        <button className={styles.ctaButton}>Contact Us</button>
      </section>
      </main>
      </div>
  );
}
