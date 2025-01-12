import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

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
} from "@fortawesome/free-solid-svg-icons";
import styles from "../../styles/pricing.module.css"; // Ensure the correct path to your CSS file

const Pricing = () => {
	const plans = [
		{
			name: "Starter Plan",
			pages: "1-3 Pages",
			price: "$99",
			oldPrice: "$69",
			month: "/month",
			setupFee: "$199 (one-time)",
			features: [
				"24/7 Server Maintenance",
				"SSL & Security",
				"Dashboard Access",
				"Blazing Fast Hosting",
				"Responsive Design",
				"Email Support",
				"Delivery: 1-2 weeks",
			],
		},
		{
			name: "Affordable Plan",
			pages: "4-6 Pages",
			price: "$199",
			oldPrice: "249",
			month: "/month",
			setupFee: "$399 (one-time)",
			features: [
				"24/7 Server Maintenance",
				"Enhanced Security",
				"1-on-1 Training",
				"SEO Setup",
				"Blazing Fast Hosting",
				"Responsive Design",
				"Email & Phone Support",
				"Delivery: 2-3 weeks",
			],
			popular: true,
		},
		{
			name: "Ultimate Package",
			pages: "Unlimited Pages",
			price: "$299",
			month: "/month",
			oldPrice: "$349",
			setupFee: "$999 (one-time)",
			features: [
				"Dedicated Account Manager",
				"Advanced SEO Strategy",
				"Google My Business Setup",
				"Content Updates",
				"24/7 Priority Support",
				"Blazing Fast Hosting",
				"Complete Security Suite",
				"Custom Business Profile Listing",
				"Delivery: 3-4 weeks",
			],
			premium: true,
		},
	];

	const iconMapping = {
		"24/7 Server Maintenance": faPhone,
		"SSL & Security": faShieldAlt,
		"1-on-1 Training": faChalkboardTeacher,
		"SEO Setup": faSearch,
		"Blazing Fast Hosting": faMobileAlt,
		"Responsive Design": faMobileAlt,
		"Email Support": faEnvelope,
		"Dashboard Access": faEnvelope,
		"Enhanced Security": faShieldAlt,
		"Email & Phone Support": faEnvelope,
		"Delivery: 1-2 weeks": faTruck,
		"Delivery: 2-3 weeks": faTruck,
		"Delivery: 3-4 weeks": faTruck,
		"Dedicated Account Manager": faUserShield,
		"Advanced SEO Strategy": faSearch,
		"Google My Business Setup": faBusinessTime,
		"Content Updates": faChalkboardTeacher,
		"Priority Support": faUserShield,
		"Complete Security Suite": faShieldAlt,
		"Custom Business Profile Listing": faBusinessTime,
	};

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
						{plan.popular && (
							<div className={styles.popularBadge}>Most Popular</div>
						)}
						{plan.premium && (
							<div className={styles.premiumBadge}>Ultimate</div>
						)}
						<h2 className={styles.planName}>{plan.name}</h2>
						<p className={styles.pages}>{plan.pages}</p>
						<div className={styles.priceContainer}>
							<span className={styles.oldPrice}>{plan.oldPrice}</span>
							<span className={styles.price}>{plan.price}</span>
							<span className={styles.month}>{plan.month}</span>
						</div>
						<p className={styles.setupFee}>Setup Fee: {plan.setupFee}</p>
						<ul className={styles.featuresList}>
							{plan.features.map((feature, i) => {
								const icon = iconMapping[feature]; // Get the icon for the feature
								return (
									<li key={i} className={styles.feature}>
										{icon ? (
											<FontAwesomeIcon icon={icon} className={styles.icon} />
										) : (
											<span className={styles.icon}>✔</span> // Default icon if not found
										)}
										{feature}
									</li>
								);
							})}
						</ul>

						<div className={styles.planCardCta}>
							<button className={styles.ctaButton}>Select Plan</button>
							<a
								href="https://calendly.com/fndslabs-15min-call/15min"
								target="_blank"
								rel="noopener noreferrer"
								className={styles.scheduleLink} // Optional: add a class for custom styling
							>
								<br />
								<br />
								Schedule a Call
							</a>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default Pricing;
