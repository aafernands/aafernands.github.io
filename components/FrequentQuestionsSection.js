import * as React from "react";
import { styled } from "@mui/material/styles";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary, {
  accordionSummaryClasses,
} from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import Link from "next/link"; // Import Link from Next.js
import styles from "../styles/portfolioSection.module.css"; // Import the CSS module

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
  ...theme.applyStyles("dark", {
    backgroundColor: "rgba(255, 255, 255, .05)",
  }),
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: "1px solid rgba(0, 0, 0, .125)",
}));

export default function FrequentQuestionsSection() {
  const [expanded, setExpanded] = React.useState("panel1");

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <div>
			<Typography variant="h2" className={styles.title}>
      Frequent Questions
			</Typography>
      <br></br>
      <Accordion
        expanded={expanded === "panel1"}
        onChange={handleChange("panel1")}
      >
        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
          <Typography component="span">
            <strong>What services does FNDS LABS provide?</strong>{" "}
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            FNDS LABS specializes in custom web development, responsive design,
            SEO optimization, e-commerce solutions, and ongoing website
            maintenance. We also offer content management system (CMS)
            integration and web hosting services.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion
        expanded={expanded === "panel2"}
        onChange={handleChange("panel2")}
      >
        <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
          <Typography component="span">
            <strong>How long does it take to build a website?</strong>
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            The timeline depends on the complexity of your project. A basic
            website typically takes 2-4 weeks, while more advanced projects,
            like e-commerce sites, may take 6-8 weeks or longer. We’ll provide a
            detailed timeline after understanding your requirements.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion
        expanded={expanded === "panel3"}
        onChange={handleChange("panel3")}
      >
        <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
          <Typography component="span">
            <strong>How much does a website cost?</strong>
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Pricing varies based on the scope of work, features, and design
            complexity. Our basic web packages start at just $99 per month. For
            more details, check out our{" "}
            <Link href="/pricing">pricing page</Link>.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion
        expanded={expanded === "panel4"}
        onChange={handleChange("panel4")}
      >
        <AccordionSummary aria-controls="panel4d-content" id="panel4d-header">
          <Typography component="span">
            <strong>Will my website be mobile-friendly?</strong>
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Absolutely! Every website we build is fully responsive, ensuring it
            looks and functions perfectly on all devices, including desktops,
            tablets, and smartphones.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion
        expanded={expanded === "panel5"}
        onChange={handleChange("panel5")}
      >
        <AccordionSummary aria-controls="panel5d-content" id="panel5d-header">
          <Typography component="span">
            <strong>Can I update my website on my own?</strong>
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Yes, we integrate user-friendly CMS platforms like WordPress or
            custom solutions that allow you to manage and update your website
            without needing technical expertise. We also provide training if
            needed.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion
        expanded={expanded === "panel6"}
        onChange={handleChange("panel6")}
      >
        <AccordionSummary aria-controls="panel6d-content" id="panel6d-header">
          <Typography component="span">
            <strong>Do you offer ongoing support and maintenance?</strong>
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Yes, we offer monthly maintenance plans to keep your website secure,
            updated, and running smoothly. This includes regular backups,
            performance monitoring, and updates to plugins or software.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion
        expanded={expanded === "panel7"}
        onChange={handleChange("panel7")}
      >
        <AccordionSummary aria-controls="panel7d-content" id="panel7d-header">
          <Typography component="span">
            <strong>What is your process for starting a project?</strong>
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Our process begins with a consultation to understand your needs and
            goals. We then create a project plan, including timelines and
            milestones. After design approval, we move into development,
            testing, and finally, launch.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion
        expanded={expanded === "panel8"}
        onChange={handleChange("panel8")}
      >
        <AccordionSummary aria-controls="panel8d-content" id="panel8d-header">
          <Typography component="span">
            <strong>Can you help with search engine optimization/SEO?</strong>
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Yes, we offer comprehensive SEO services to help improve your
            website’s visibility on search engines. This includes keyword
            research, on-page optimization, link building, and more.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion
        expanded={expanded === "panel9"}
        onChange={handleChange("panel9")}
      >
        <AccordionSummary aria-controls="panel9d-content" id="panel9d-header">
          <Typography component="span">
            <strong>What platforms do you work with?</strong>
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            We work with a variety of platforms, including WordPress, Shopify,
            Wix, and custom-built solutions using React, Node.js, and other
            modern web technologies.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel8"}
        onChange={handleChange("panel8")}
      >
        <AccordionSummary aria-controls="panel8d-content" id="panel8d-header">
          <Typography component="span">
            <strong>How can I get in touch with you?</strong>
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            You can reach us via our <Link href="/contact">Contact Page</Link> or email us directly at <a href="mailto:support@fndslabs.com">support@fndslabs.com</a>.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
