import * as React from "react";
import { styled } from "@mui/material/styles";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import Link from "next/link"; // Import Link from Next.js
import styles from "../styles/FrequentQuestionsSection.module.css"; // Import the CSS module
import {
	Container,
	Typography,
	Button,
	Box,
	Card,
	CardMedia,
	CardContent,
	Grid,
	TextField,
} from "@mui/material";

const Accordion = styled((props) => (
	<MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
	border: `1px solid ${theme.palette.divider}`,
	"&:not(:last-child)": {
		borderBottom: 0,
	},
	"&::before": {
		display: "none",
	},
}));

const AccordionSummary = styled((props) => (
	<MuiAccordionSummary
		expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: "0.9rem" }} />}
		{...props}
	/>
))(({ theme }) => ({
	backgroundColor: "rgba(0, 0, 0, .03)",
	flexDirection: "row-reverse",
	"& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
		transform: "rotate(90deg)",
	},
	"& .MuiAccordionSummary-content": {
		marginLeft: theme.spacing(1),
	},
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
	padding: theme.spacing(2),
	borderTop: "1px solid rgba(0, 0, 0, .125)",
}));

export default function FrequentQuestionsSection() {
	const [expanded, setExpanded] = React.useState("panel1");
	const [searchQuery, setSearchQuery] = React.useState("");

	const handleChange = (panel) => (event, newExpanded) => {
		setExpanded(newExpanded ? panel : false);
	};

	const handleSearchChange = (event) => {
		setSearchQuery(event.target.value.toLowerCase()); // Convert to lowercase for case-insensitive search
	};

	// Define the FAQ items
	const faqItems = [
		{
			id: "panel1",
			question: "What services does FNDS LABS provide?",
			answer: "FNDS LABS specializes in custom web development, responsive design, SEO optimization, e-commerce solutions, and ongoing website maintenance. We also offer content management system (CMS) integration and web hosting services.",
		},
		{
			id: "panel2",
			question: "How long does it take to build a website?",
			answer: "The timeline depends on the complexity of your project. A basic website typically takes 2-4 weeks, while more advanced projects, like e-commerce sites, may take 6-8 weeks or longer. We’ll provide a detailed timeline after understanding your requirements.",
		},
		{
			id: "panel3",
			question: "How much does a website cost?",
			answer: "Pricing varies based on the scope of work, features, and design complexity. Our basic web packages start at just $99 per month. For more details, check out our pricing page.",
		},
		{
			id: "panel4",
			question: "Will my website be mobile-friendly?",
			answer: "Absolutely! Every website we build is fully responsive, ensuring it looks and functions perfectly on all devices, including desktops, tablets, and smartphones.",
		},
		{
			id: "panel5",
			question: "Can I update my website on my own?",
			answer: "Yes, we integrate user-friendly CMS platforms like WordPress or custom solutions that allow you to manage and update your website without needing technical expertise. We also provide training if needed.",
		},
		{
			id: "panel6",
			question: "Do you offer ongoing support and maintenance?",
			answer: "Yes, we offer monthly maintenance plans to keep your website secure, updated, and running smoothly. This includes regular backups, performance monitoring, and updates to plugins or software.",
		},
		{
			id: "panel7",
			question: "Do you provide SEO services?",
			answer: "Yes, we offer SEO optimization services to help improve your website's visibility on search engines. Our team will ensure your website is optimized for both on-page and off-page SEO.",
		},
		{
			id: "panel8",
			question: "What is the process for starting a project with FNDS LABS?",
			answer: "The process starts with a consultation where we discuss your goals and requirements. After that, we provide a proposal and timeline. Once approved, we begin the design and development phase. Finally, we launch the site and offer ongoing support.",
		},
		{
			id: "panel9",
			question: "Can I see examples of your previous work?",
			answer: (<>
				Yes! You can check out our{" "}
				<Link legacyBehavior href="/#portfolio">
					<a>portfolio</a>
				</Link>{" "}
				on our website. We have worked on a wide range of projects, from small business websites to large-scale e-commerce platforms.
			</>),
		},
		{
			id: "panel10",
			question: "How can I get in touch with FNDS LABS?",
			answer: "You can contact us through our website's contact form, email us directly at contact@fndslabs.com, or call us at (123) 456-7890. We are happy to answer any questions you may have.",
		},
	];

	// Filter the FAQ items based on the search query
	const filteredFaqItems = faqItems.filter((item) =>
		item.question.toLowerCase().includes(searchQuery)
	);

	return (
		<Container id="questions" className={styles.questionsSection}>
			<Typography variant="h2" className={styles.title}>
				Frequent Questions
			</Typography>

			{/* Search Bar */}
			<TextField
				label="Search Questions"
				variant="outlined"
				fullWidth
				onChange={handleSearchChange}
				value={searchQuery}
				style={{ marginBottom: "20px" }}
			/>

			{/* Render Filtered Accordion Items */}
			{filteredFaqItems.map((item) => (
				<Accordion
					key={item.id}
					expanded={expanded === item.id}
					onChange={handleChange(item.id)}
				>
					<AccordionSummary aria-controls={`${item.id}-content`} id={`${item.id}-header`}>
						<Typography component="span">
							<strong>{item.question}</strong>
						</Typography>
					</AccordionSummary>
					<AccordionDetails>
						<Typography>{item.answer}</Typography>
					</AccordionDetails>
				</Accordion>
			))}
		</Container>
	);
}
