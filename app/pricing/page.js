import React from "react";
import styles from "../../styles/pricing.module.css"; // Make sure to link to your CSS file

const Pricing = () => {
  const plans = [
    {
      name: "Starter Plan",
      pages: "1-3 Pages",
      price: "$69/month",
      setupFee: "$199 (one-time)",
      features: [
        "24/7 Server Maintenance",
        "SSL & Security",
        "Dashboard Access",
        "Blazing Fast Hosting",
        "Responsive Design",
        "Email Support",
      ],
    },
    {
      name: "Affordable Plan",
      pages: "4-6 Pages",
      price: "$89/month",
      setupFee: "$399 (one-time)",
      features: [
        "24/7 Server Maintenance",
        "Enhanced Security",
        "1-on-1 Training",
        "SEO Setup",
        "Blazing Fast Hosting",
        "Responsive Design",
        "Email & Phone Support",
      ],
      popular: true,
    },
    {
      name: "Ultimate Package",
      pages: "Unlimited Pages",
      price: "$209/month",
      setupFee: "$1,000 (one-time)",
      features: [
        "Dedicated Account Manager",
        "Advanced SEO Strategy",
        "Google My Business Setup",
        "Content Updates",
        "24/7 Priority Support",
        "Blazing Fast Hosting",
        "Complete Security Suite",
        "Custom Business Profile Listing",
      ],
      premium: true,
    },
  ];

  return (
    <div className={styles.pricingContainer}>
      <h1 className={styles.title}>Affordable Web Design & Hosting Plans</h1>
      <p className={styles.subtitle}>
        Choose the plan that best fits your needs. All plans come with
        professional design, reliable hosting, and excellent support.
      </p>

      <div className={styles.plansContainer}>
        {plans.map((plan, index) => (
          <div
            key={index}
            className={`${styles.planCard} ${
              plan.popular ? styles.popularPlan : ""
            } ${plan.premium ? styles.premiumPlan : ""}`}
          >
            {plan.popular && <div className={styles.popularBadge}>Most Popular</div>}
            {plan.premium && <div className={styles.premiumBadge}>Ultimate</div>}
            <h2 className={styles.planName}>{plan.name}</h2>
            <p className={styles.pages}>{plan.pages}</p>
            <p className={styles.price}>{plan.price}</p>
            <p className={styles.setupFee}>Setup Fee: {plan.setupFee}</p>
            <ul className={styles.featuresList}>
              {plan.features.map((feature, i) => (
                <li key={i} className={styles.feature}>
                  <span className={styles.icon}>✔</span> {feature}
                </li>
              ))}
            </ul>
            <button className={styles.ctaButton}>Select Plan</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pricing;
