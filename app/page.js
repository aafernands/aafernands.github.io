"use client";

import styles from "./page.module.css";
import UnderConstruction from "../components/UnderConstruction";
import HeroSection from "../components/HeroSection.js";
import PortfolioSection from "../components/PortfolioSection.js";
import ReviewsSection from "../components/ReviewsSection.js";
import ServicesSection from "../components/ServicesSection.js";
import FrequentQuestionsSection from "../components/FrequentQuestionsSection.js";
import { Container } from "@mui/material";

export default function Home() {
  if (process.env.SHOW_UNDER_CONSTRUCTION === "true") {
    return <UnderConstruction />;
  }
  return (
    <Container>
      <HeroSection />
      <PortfolioSection />
      <ReviewsSection />
      <ServicesSection />
      <FrequentQuestionsSection />
    </Container>
  );
}
