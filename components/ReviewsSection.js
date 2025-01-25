"use client";

import React from "react";
import {
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  CardHeader,
  Avatar,
  Box,
} from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faUserCircle } from "@fortawesome/free-solid-svg-icons";
import styles from "../styles/reviewsSection.module.css";

const reviews = [
  {
    text: "Alex was an absolute pleasure to work with. His attention to detail and ability to deliver high-quality results are unmatched. Highly recommend his services!",
    author: "John D.",
    link: "#",
    image: "./john.png",
  },
  {
    text: "I was impressed with Alex's ability to understand our needs and deliver an intuitive and visually appealing solution. The process was seamless, and the results were outstanding.",
    author: "Sarah L.",
    link: "#",
    image: "./sarah.png",
  },
  {
    text: "Alex's expertise and dedication were evident throughout the project. He delivered a fast, responsive, and easy-to-navigate solution that exceeded our expectations.",
    author: "Michael R.",
    link: "#",
    image: "./michael.png",
  },
  {
    text: "Alex is a fantastic developer who truly understands the needs of his clients. He created a stunning and user-friendly solution for us. Highly recommend his services!",
    author: "Emily W.",
    link: "#",
    image: "./emily.png",
  },
];

const PortfolioSection = () => {
  return (
    <Container id="reviews" className={styles.reviewsSection}>
      <Typography variant="h2" className={styles.title}>
        Testimonials
      </Typography>
      <Typography variant="body1" className={styles.description}>
        See what our customers are saying about us!
      </Typography>
      <Grid container spacing={3}>
        {reviews.map((review, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card className={styles.card}>
              <CardHeader
                avatar={
                  <Avatar src={review.image} alt={review.author}>
                    {!review.image && (
                      <FontAwesomeIcon icon={faUserCircle} size="2x" />
                    )}
                  </Avatar>
                }
                title={
                  <Box display="flex" alignItems="center">
                    <Typography variant="h6" sx={{ marginRight: 1 }}>
                      5.0
                    </Typography>
                    {[...Array(5)].map((_, i) => (
                      <FontAwesomeIcon
                        key={i}
                        icon={faStar}
                        color="gold"
                        size="sm"
                      />
                    ))}
                  </Box>
                }
              />
              <CardContent>
                <Typography variant="body2" color="text.secondary">
                  {review.text}
                </Typography>
                <Typography
                  variant="subtitle2"
                  color="text.primary"
                  sx={{ marginTop: 1 }}
                >
                  {review.author}
                </Typography>
                <Typography
                  variant="body2"
                  component="a"
                  href={review.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.reviewLink}
                >
                  Read more on Google Reviews
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default PortfolioSection;
