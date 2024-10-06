import React, { useState, useEffect } from "react";
import {
  Container,
  Grid,
  Box,
  TextField,
  Button,
  Typography,
} from "@mui/material";

const Contact = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [countdown, setCountdown] = useState(3); // Change countdown to 3 seconds
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
    <Container>
      <Grid item xs={12}>
        <Grid
          id="contact"
          container
          justifyContent="center"
          alignItems="center"
          style={{ minHeight: "100vh" }}
        >
          <Grid item xs={12} md={8} lg={6}>
            <Box
              component="form"
              onSubmit={handleSubmit}
              sx={{
                display: showForm ? "flex" : "none", // Conditional display
                flexDirection: "column",
                gap: 2,
                color: "white",
                padding: "20px",
                borderRadius: "8px",
                boxShadow: 3,
                bgcolor: "#140524",
              }}
            >
              <br />

              <Typography
                sx={{
                  color: "white", // Change to white
                }}
                variant="h2"
                component="h2"
                gutterBottom
              >
                CONTACT ME
              </Typography>
              <br />

              <TextField
                name="name"
                label="Name"
                variant="outlined"
                fullWidth
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                InputProps={{
                  style: { color: "white" }, // Input text color
                  classes: {
                    notchedOutline: "MuiOutlinedInput-notchedOutline",
                  },
                  sx: {
                    "& .MuiOutlinedInput-notchedOutline": {
                      borderColor: "white", // Set border to white
                    },
                    "&:hover .MuiOutlinedInput-notchedOutline": {
                      borderColor: "white", // White border on hover
                    },
                    "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                      borderColor: "white", // White border when focused
                    },
                  },
                }}
                InputLabelProps={{
                  style: { color: "white" }, // Label text color
                }}
              />
              <TextField
                name="email"
                label="Email"
                variant="outlined"
                fullWidth
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                InputProps={{
                  style: { color: "white" }, // Input text color
                  classes: {
                    notchedOutline: "MuiOutlinedInput-notchedOutline",
                  },
                  sx: {
                    "& .MuiOutlinedInput-notchedOutline": {
                      borderColor: "white", // Set border to white
                    },
                    "&:hover .MuiOutlinedInput-notchedOutline": {
                      borderColor: "white", // White border on hover
                    },
                    "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                      borderColor: "white", // White border when focused
                    },
                  },
                }}
                InputLabelProps={{
                  style: { color: "white" }, // Label text color
                }}
              />
              <TextField
                name="message"
                label="Message"
                variant="outlined"
                fullWidth
                required
                multiline
                rows={4}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                InputProps={{
                  style: { color: "white" }, // Input text color
                  classes: {
                    notchedOutline: "MuiOutlinedInput-notchedOutline",
                  },
                  sx: {
                    "& .MuiOutlinedInput-notchedOutline": {
                      borderColor: "white", // Set border to white
                    },
                    "&:hover .MuiOutlinedInput-notchedOutline": {
                      borderColor: "white", // White border on hover
                    },
                    "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                      borderColor: "white", // White border when focused
                    },
                  },
                }}
                InputLabelProps={{
                  style: { color: "white" }, // Label text color
                }}
              />
              <Button
                variant="contained"
                sx={{
                  bgcolor: "#8964b0", // Custom button background color
                  color: "white", // Text color white
                }}
                type="submit"
                fullWidth
              >
                Send
              </Button>
            </Box>
            {formSubmitted && (
              <Box
                sx={{
                  padding: "20px",
                  border: "1px solid lightgray",
                  borderRadius: "8px",
                  boxShadow: 3,
                  bgcolor: "white",
                }}
                mt={2}
                display="flex"
                flexDirection="column"
                alignItems="center"
              >
                <Typography
                  style={{ color: "green" }}
                  variant="h5"
                  component="h2"
                  gutterBottom
                  align="center"
                >
                  Thank you for your message!
                </Typography>
                <Typography variant="body1" align="center">
                  You will be redirected in {countdown} seconds...
                </Typography>
              </Box>
            )}
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Contact;
