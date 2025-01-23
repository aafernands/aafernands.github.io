"use client";

import React, { useState, useEffect } from "react";
import styles from "./contact.module.css";
import { Facebook, Instagram, LinkedIn } from "@mui/icons-material"; // Added social media icons

export default function Contact() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [countdown, setCountdown] = useState(3); // Countdown timer
  const [showForm, setShowForm] = useState(true); // Manage form visibility
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);

    try {
      const response = await fetch("https://formspree.io/f/xkgwgjro", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        setFormSubmitted(true);
        setShowForm(false); // Hide the form after submission
        setCountdown(3); // Reset countdown timer
      } else {
        console.error("Form submission error:", response.statusText);
      }
    } catch (error) {
      console.error("Form submission error:", error);
    }
  };

  useEffect(() => {
    let timer;
    if (formSubmitted) {
      timer = setInterval(() => {
        setCountdown((prevCountdown) => {
          if (prevCountdown === 1) {
            clearInterval(timer);
            setFormSubmitted(false); // Reset form submission state
            setShowForm(true); // Show the form again
            setName(""); // Clear form fields
            setEmail("");
            setMessage("");
          }
          return prevCountdown - 1;
        });
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [formSubmitted]);

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h1 className={styles.title}>Contact Us</h1>
        <p className={styles.description}>
          We’d love to hear from you! If you have any questions, feel free to
          reach out to us.
        </p>

        {/* Contact Information */}
        <div className={styles.contactInfo}>
          <h2>Contact Information</h2>
          <p>Email: contact@fndslabs.com</p>
          <p>Phone: +1 (123) 456-7890</p>
          <p>Address: 1234 Web St, New York, NY 10001</p>
        </div>

        {/* Google Map Embed */}
        <div className={styles.map}>
          <h2>Our Location</h2>
          <iframe
            src="https://www.google.com/maps/embed?pb=..."
            width="100%"
            height="300"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>

        {/* Social Media Links */}
        <div className={styles.socialMedia}>
          <a
            href="https://www.facebook.com/fndslabs/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Facebook />
          </a>
          <a
            href="https://www.instagram.com/fnds.labs"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Instagram />
          </a>
          <a
            href="https://www.linkedin.com/company/fndslabs"
            target="_blank"
            rel="noopener noreferrer"
          >
            <LinkedIn />
          </a>
        </div>

        {/* Form */}
        {showForm && (
          <form onSubmit={handleSubmit} className={styles.form}>
            <label htmlFor="name" className={styles.label}>
              Name:
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className={styles.input}
              required
            />

            <label htmlFor="email" className={styles.label}>
              Email:
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={styles.input}
              required
            />

            <label htmlFor="message" className={styles.label}>
              Message:
            </label>
            <textarea
              id="message"
              name="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className={styles.textarea}
              required
            ></textarea>

            <button type="submit" className={styles.button}>
              Submit
            </button>
          </form>
        )}

        {/* Success Message */}
        {formSubmitted && (
          <p className={styles.successMessage}>
            Thank you for reaching out! We’ll get back to you soon.
          </p>
        )}

        {/* Countdown Timer */}
        {formSubmitted && !showForm && (
          <p className={styles.countdown}>Redirecting in {countdown}...</p>
        )}
      </main>
    </div>
  );
}
