import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faBoltLightning,
	faShieldAlt,
	faChalkboardTeacher,
	faSearch,
	faMobileAlt,
	faEnvelope,
	faUserShield,
	faBusinessTime,
	faTruck,
	faPaintRoller,
} from "@fortawesome/free-solid-svg-icons";
import {
	Box,
	Card,
	CardContent,
	CardActions,
	Typography,
	Button,
	Grid,
	List,
	ListItem,
	ListItemIcon,
	ListItemText,
	Divider,
	Link,
} from "@mui/material";
import styles from "./pricing.module.css";

const plans = [
	{
		name: "Basic Plan",
		pages: "1-3 Pages",
		price: "$99",
		oldPrice: "$149",
		month: "/month",
		setupFee: "Set up fee $299 (One-Time)",
		targetAudience: "Perfect for small businesses or personal websites.",
		features: [
			{
				title: "Basic Custom Design",
				description:
					"Pre-designed template with basic customization (colors, logo, and text) to quickly refresh your website and ensure it looks great on all devices.",
				icon: faPaintRoller,
			},
			{
				title: "High-Speed Hosting",
				description:
					"We offer fast and reliable hosting with Vercel, Bluehost, and Firebase, ensuring your website loads quickly and performs smoothly.",
				icon: faBoltLightning,
			},
			{
				title: "SSL & Security",
				description:
					"We ensure your website is secure with SSL encryption, protecting both you and your visitors.",
				icon: faShieldAlt,
			},
			{
				title: "Email Support",
				description:
					"Get prompt email support to assist with any questions or issues you may have.",
				icon: faEnvelope,
			},
			{
				title: "Delivery: 1-2 weeks",
				description:
					"We guarantee a quick turnaround time, delivering your website within 1-2 weeks.",
				icon: faBusinessTime,
			},
		],
	},
	{
		name: "Standard Plan",
		pages: "4-6 Pages",
		price: "$199",
		oldPrice: "$249",
		month: "/month",
		setupFee: "Set up fee $499 (One-Time)",
		targetAudience: "Great for growing businesses.",
		features: [
			{
				title: "Includes all features from the Basic Plan, plus:",
				icon: faBusinessTime,
			},
			{
				title: "Custom Design",
				description:
					"Custom design tailored to your brand with up to 3 revisions, perfect for updating your website to better reflect your vision and optimized for all devices.",
				icon: faPaintRoller,
			},
			{
				title: "1-on-1 Training",
				description:
					"Personalized training to help you manage your website effectively.",
				icon: faChalkboardTeacher,
			},
			{
				title: "SEO Setup",
				description:
					"Basic SEO setup to ensure your website is search-engine friendly from the start.",
				icon: faSearch,
			},
			{
				title: "Email & Phone Support",
				description:
					"Get support through both email and phone to resolve any issues quickly.",
				icon: faEnvelope,
			},
			{
				title: "Delivery: 2-3 weeks",
				description:
					"Standard plan offers slightly more customization with delivery in 2-3 weeks.",
				icon: faBusinessTime,
			},
		],
	},
	{
		name: "Premium Plan",
		pages: "5+ Pages",
		price: "$399",
		oldPrice: "$449",
		month: "/month",
		setupFee: "Set up fee $899 (One-Time)",
		targetAudience: "Ideal for businesses looking for advanced solutions.",
		features: [
			{
				title: "Includes all features from the Basic Plan, plus:",
				icon: faBusinessTime,
			},
			{
				title: "Advanced Custom Design",
				description:
					"Fully custom design with unlimited revisions and advanced features, ideal for a complete website overhaul or adding advanced functionalities, optimized for all devices.",
				icon: faPaintRoller,
			},
			{
				title: "Complete Security Suite",
				description:
					"A comprehensive security package to keep your website safe from threats.",
				icon: faShieldAlt,
			},
			{
				title: "Dedicated Account Manager",
				description:
					"Enjoy personalized service with a dedicated account manager to assist with your needs.",
				icon: faUserShield,
			},
			{
				title: "Advanced SEO Strategy",
				description:
					"Implement an advanced SEO strategy to maximize your website's visibility and ranking.",
				icon: faSearch,
			},
			{
				title: "Google My Business Setup",
				description:
					"Get your business listed on Google My Business to improve local SEO and visibility.",
				icon: faBusinessTime,
			},
			{
				title: "Content Updates",
				description:
					"We offer ongoing content updates to keep your website fresh and up-to-date.",
				icon: faChalkboardTeacher,
			},
			{
				title: "Custom Business Profile Listing",
				description:
					"Create a custom business profile listing to enhance your online presence.",
				icon: faBusinessTime,
			},
			{
				title: "24/7 Priority Support",
				description:
					"Access priority support anytime, day or night, for urgent issues.",
				icon: faEnvelope,
			},
			{
				title: "Delivery: 3-4 weeks",
				description:
					"Premium plan includes more advanced features with a 3-4 week delivery time.",
				icon: faEnvelope,
			},
		],
	},
];

const Pricing = () => {
	return (
		<Box className={styles.pricingContainer}>
			<Typography variant="h2" align="center" gutterBottom>
				Affordable Web Development plans
			</Typography>
			<Box sx={{ marginBottom: "20px" }}>
				<Typography variant="p" align="center" gutterBottom>
					Choose the plan that best fits your needs. All plans come with
					professional design, reliable hosting, and excellent support. Cancel
					anytime.
				</Typography>
			</Box>

			<Grid container spacing={4}>
				{plans.map((plan, index) => (
					<Grid item xs={12} sm={6} md={4} key={index}>
						<Card>
								<Box className={styles.cardHeader}>
									<Typography variant="h5" align="center" gutterBottom>
										{plan.name}
									</Typography>
									<Typography
										variant="subtitle1"
										align="center"
										color="textSecondary"
									>
										{plan.pages}
									</Typography>

									<Box className={styles.priceContainer}>
										<Typography
											className={styles.oldPrice}
											variant="subtitle1"
											align="center"
											color="textSecondary"
										>
											{plan.oldPrice}
										</Typography>

										<Typography
											className={styles.price}
											variant="h4"
											align="center"
										>
											{plan.price}
											<span
												style={{
													position: "relative",
													top: "-15px",
													fontSize: "1.0rem",
												}}
											>
												{plan.month}
											</span>
										</Typography>
									</Box>
								</Box>
                <CardContent className={styles.cardContent}>

								<Typography
									variant="body2"
									align="center"
									color="textSecondary"
									gutterBottom
								>
									{plan.setupFee}
								</Typography>
								<Typography variant="body2" align="center" gutterBottom>
									{plan.targetAudience}
								</Typography>
								<List>
									{plan.features.map((feature, idx) => (
										<React.Fragment key={idx}>
											<ListItem>
												<ListItemIcon>
													<FontAwesomeIcon
														className={styles.icon}
														icon={feature.icon}
													/>
												</ListItemIcon>
												<ListItemText
													primary={feature.title}
													secondary={feature.description}
												/>
											</ListItem>
											{/* Add Divider between features */}
											{idx < plan.features.length - 1 && <Divider light />}
										</React.Fragment>
									))}
								</List>

								<Box
									style={{
										display: "flex",
										flexDirection: "column",
										alignItems: "center",
										justifyContent: "center",
										textAlign: "center", // Optional: if you want the text inside the link to be centered
									}}
								>
									<Link
										href="https://calendly.com/fndslabs-15min-call/15min"
										className={styles.schedulleLink}
									>
										Schedule a call
									</Link>
								</Box>
								<Button variant="contained" fullWidth>
									Select Plan
								</Button>
							</CardContent>
						</Card>
					</Grid>
				))}
			</Grid>
		</Box>
	);
};

export default Pricing;
