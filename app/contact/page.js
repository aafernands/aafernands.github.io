"use client";

import React, { useState, useEffect } from "react";
import styles from "../../styles/contact.module.css";

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
        <h1>Contact Us</h1>
        <p>If you have any questions, feel free to reach out to us!</p>

        {formSubmitted ? (
          <p>Thank you for contacting us! Redirecting in {countdown} seconds...</p>
        ) : (
          <form onSubmit={handleSubmit} style={{ display: showForm ? "block" : "none" }}>
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />

            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />

            <label htmlFor="message">Message:</label>
            <textarea
              id="message"
              name="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            ></textarea>

            <button type="submit">Submit</button>
          </form>
        )}
      </main>
    </div>
  );
}
