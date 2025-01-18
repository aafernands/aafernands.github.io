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
    text: "Working with Alex was an absolute pleasure. He delivered a high-quality website for our cleaning business that exceeded our expectations. The process was smooth, and Alex was always responsive and open to feedback. Highly recommend his services!",
    author: "John D., New Shine Pro",
    link: "#",
  },
  {
    text: "I was impressed with how quickly Alex created a weather app for our project. He took the time to understand our needs and delivered an intuitive and visually appealing solution. The app works flawlessly, and the user interface is simple yet effective.",
    author: "Sarah L., WeatherApp",
    link: "#",
  },
  {
    text: "Alex helped us develop a real estate app that allows users to search for properties effortlessly. His expertise in React and MongoDB was evident throughout the project. The app is fast, responsive, and easy to navigate.",
    author: "Michael R., Realtor App",
    link: "#",
  },
  {
    text: "Alex is a fantastic web developer who truly understands the needs of his clients. He built a stunning portfolio site for me that not only looks great but is also easy to navigate. Highly recommend his services!",
    author: "[Your Name], Portfolio Client",
    link: "#",
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
                  <Avatar>
                    <FontAwesomeIcon icon={faUserCircle} size="2x" />
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
                <Typography variant="body2" color="textSecondary">
                  {review.text}
                </Typography>
                <Typography
                  variant="subtitle2"
                  color="textPrimary"
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
