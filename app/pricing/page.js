import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Box } from "@mui/material";

import {
  faPhone,
  faShieldAlt,
  faChalkboardTeacher,
  faSearch,
  faMobileAlt,
  faEnvelope,
  faUserShield,
  faBusinessTime,
  faTruck,
  faPaintRoller,
  faBoltLightning,
} from "@fortawesome/free-solid-svg-icons";
import styles from "./pricing.module.css"; // Ensure the correct path to your CSS file

const Pricing = (isDarkMode) => {
  const basicFeatures = [
    "Basic Custom Design",
    "High-Speed Hosting",
    "SSL & Security",
    "Email Support",
    "Delivery: 1-2 weeks",
  ];

  const standardFeatures = [
    "Includes all features from the Basic Plan, plus:",
    "Custom Design",
    "1-on-1 Training",
    "SEO Setup",
    "Email & Phone Support",
    "Delivery: 2-3 weeks",
  ];

  const premiumFeatures = [
    "Includes all features from the Standard Plan, plus:",
    "Advanced Custom Design",
    "Complete Security Suite",
    "Dedicated Account Manager",
    "Advanced SEO Strategy",
    "Google My Business Setup",
    "Content Updates",
    "Custom Business Profile Listing",
    "24/7 Priority Support",
    "Delivery: 3-4 weeks",
  ];

  const featureDescriptions = {
    "High-Speed Hosting":
      "We offer fast and reliable hosting with Vercel, Bluehost, and Firebase, ensuring your website loads quickly and performs smoothly.",
    "SSL & Security":
      "We ensure your website is secure with SSL encryption, protecting both you and your visitors.",
    "Email Support":
      "Get prompt email support to assist with any questions or issues you may have.",
    "Delivery: 1-2 weeks":
      "We guarantee a quick turnaround time, delivering your website within 1-2 weeks.",
    "Cancel Anytime": "You can cancel your plan anytime without any hassle.",
    "No Setup Fee":
      "No hidden charges. You only pay for the services you need.",
    "Delivery: 2-3 weeks":
      "Standard plan offers slightly more customization with delivery in 2-3 weeks.",
    "1-on-1 Training":
      "Personalized training to help you manage your website effectively.",
    "SEO Setup":
      "Basic SEO setup to ensure your website is search-engine friendly from the start.",
    "Email & Phone Support":
      "Get support through both email and phone to resolve any issues quickly.",
    "Delivery: 3-4 weeks":
      "Premium plan includes more advanced features with a 3-4 week delivery time.",
    "Advanced Custom Design":
      "Get a fully customized design tailored to your business needs.",
    "Complete Security Suite":
      "A comprehensive security package to keep your website safe from threats.",
    "Dedicated Account Manager":
      "Enjoy personalized service with a dedicated account manager to assist with your needs.",
    "Advanced SEO Strategy":
      "Implement an advanced SEO strategy to maximize your website's visibility and ranking.",
    "Google My Business Setup":
      "Get your business listed on Google My Business to improve local SEO and visibility.",
    "Content Updates":
      "We offer ongoing content updates to keep your website fresh and up-to-date.",
    "Custom Business Profile Listing":
      "Create a custom business profile listing to enhance your online presence.",
    "24/7 Priority Support":
      "Access priority support anytime, day or night, for urgent issues.",
    "Basic Custom Design":
      "Pre-designed template with basic customization (colors, logo, and text) to quickly refresh your website and ensure it looks great on all devices.",

    "Custom Design":
      "Custom design tailored to your brand with up to 3 revisions, perfect for updating your website to better reflect your vision and optimized for all devices.",

    "Advanced Custom Design":
      "Fully custom design with unlimited revisions and advanced features, ideal for a complete website overhaul or adding advanced functionalities, optimized for all devices.",
  };

  const plans = [
    {
      name: "Basic Plan",
      pages: "1-3 Pages",
      price: "$99",
      oldPrice: "$149",
      month: "/month",
      setupFee: " Set up fee $299 (One-Time)",
      targetAudience: "Perfect for small businesses or personal websites.",
      features: basicFeatures, // Use basic features for Basic Plan
      stripeLink: "https://buy.stripe.com/7sIdSaeAn3TW39mcMN", // Add Stripe link for this plan
    },
    {
      name: "Standard Plan",
      pages: "4-6 Pages",
      price: "$199",
      oldPrice: "$249",
      month: "/month",
      setupFee: "Set up fee $499 (One-Time)",
      targetAudience: "Great for growing businesses needing more features.",
      features: standardFeatures, // Use standard features (including basic) for Standard Plan
      popular: true,
      stripeLink: "https://buy.stripe.com/cN2cO6dwj1LO25icMO", // Add Stripe link for this plan
    },
    {
      name: "Premium Plan",
      pages: "Unlimited Pages",
      price: "$399",
      oldPrice: "$449",
      month: "/month",
      setupFee: "Set up fee $899 (One-Time)",
      targetAudience:
        "Ideal for businesses needing advanced features and customization.",
      features: premiumFeatures, // Use premium features (including standard) for Premium Plan
      premium: true,
      stripeLink: "https://buy.stripe.com/cN23dw9g38aceS47sv", // Add Stripe link for this plan
    },
  ];

  const iconMapping = {
    "Includes all features from the Basic Plan, plus:": faBusinessTime,
    "Includes all features from the Standard Plan, plus:": faBusinessTime,
    "Responsive Design": faMobileAlt,
    "SSL & Security": faShieldAlt,
    "Email Support": faEnvelope,
    "24/7 Priority Support": faEnvelope,
    "High-Speed Hosting": faBoltLightning,
    "1-on-1 Training": faChalkboardTeacher,
    "SEO Setup": faSearch,
    "Email & Phone Support": faEnvelope,
    "Delivery: 1-2 weeks": faTruck,
    "Delivery: 2-3 weeks": faTruck,
    "Delivery: 3-4 weeks": faTruck,
    "Advanced Custom Design": faUserShield,
    "Complete Security Suite": faShieldAlt,
    "Dedicated Account Manager": faUserShield,
    "Advanced SEO Strategy": faSearch,
    "Google My Business Setup": faBusinessTime,
    "Content Updates": faChalkboardTeacher,
    "Custom Business Profile Listing": faBusinessTime,
    "Priority Support": faUserShield,
    "Cancel Anytime": faPhone,
    "Basic Custom Design": faPaintRoller,
    "Custom Design": faPaintRoller,
    "Advanced Custom Design": faPaintRoller,
  };

  return (
    <Box className={styles.pricingContainer}>
      <h1 className={styles.title}>Affordable Web Design & Hosting Plans</h1>
      <p className={styles.subtitle}>
        Choose the plan that best fits your needs. All plans come with
        professional design, reliable hosting, and excellent support. Cancel
        anytime.
      </p>

      <div className={styles.plansContainer}>
        {plans.map((plan, index) => (
          <div
            key={index}
            className={`${styles.planCard} ${
              plan.popular ? styles.popularPlan : ""
            } ${plan.premium ? styles.premiumPlan : ""}`}
          >
            {plan.popular && (
              <div className={styles.popularBadge}>Most Popular</div>
            )}
            {plan.premium && (
              <div className={styles.premiumBadge}>Ultimate</div>
            )}
            <h2 className={styles.planName}>{plan.name}</h2>
            <p className={styles.targetAudience}>{plan.targetAudience}</p>
            <p className={styles.pages}>{plan.pages}</p>
            <div className={styles.priceContainer}>
              <span className={styles.oldPrice}>{plan.oldPrice}</span>
              <span className={styles.price}>{plan.price}</span>
              <span className={styles.month}>{plan.month}</span>
            </div>
            <span className={styles.setupFee}>{plan.setupFee}</span>

            <ul className={styles.featuresList}>
              {plan.features.map((feature, i) => {
                const icon = iconMapping[feature];
                return (
                  <li key={i} className={styles.feature}>
                    {icon ? (
                      <FontAwesomeIcon icon={icon} className={styles.icon} />
                    ) : (
                      <span className={styles.icon}>✔</span>
                    )}
                    {feature}
                    <p className={styles.featureDescription}>
                      {featureDescriptions[feature]}
                    </p>
                  </li>
                );
              })}
            </ul>

            <div className={styles.planCardCta}>
              <a
                href={plan.stripeLink}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.ctaButton}
              >
                Select Plan
              </a>
              <a
                href="https://calendly.com/fndslabs-15min-call/15min"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.scheduleLink}
              >
                <br />
                <br />
                Schedule a Call
              </a>
            </div>
          </div>
        ))}
      </div>
    </Box>
  );
};

export default Pricing;
