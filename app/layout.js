"use client";

import { useEffect, useState } from "react";
import "./globals.css"; // Import global CSS
import "@fortawesome/fontawesome-svg-core/styles.css";
import { Ubuntu, Montserrat, Inter } from "next/font/google";
import {
  Container,
  ThemeProvider,
  CssBaseline,
  createTheme,
} from "@mui/material";
import Navbar from "../components/NavBar";
import Footer from "../components/Footer";

// Font configurations
const inter = Inter({ subsets: ["latin"] });
const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "700"],
});
const ubuntu = Ubuntu({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export default function RootLayout({ children }) {
  const [isDarkMode, setIsDarkMode] = useState(false); // State for dark mode toggle

  const toggleTheme = () => {
    setIsDarkMode((prevMode) => !prevMode); // Toggle between dark and light mode
  };

  const theme = createTheme({
    palette: {
      mode: isDarkMode ? "dark" : "light", // Dynamic theme based on isDarkMode
    },
    typography: {
      fontFamily: "'Montserrat', 'Ubuntu', sans-serif",
    },
  });

  // Update CSS variables based on theme mode
  useEffect(() => {
    const root = document.documentElement;
    const isDark = isDarkMode;

    // Set CSS variables dynamically based on theme
    root.style.setProperty(
      "--background",
      isDark ? "black" : "white"
    );
    root.style.setProperty(
      "--foreground",
      isDark ? "#ededed" : "#171717"
    );
    root.style.setProperty(
      "--form-background",
      isDark ? "#333" : "#ffffff"
    );
    root.style.setProperty(
      "--input-background",
      isDark ? "#444" : "#ffffff"
    );
    root.style.setProperty(
      "--input-border",
      isDark ? "#ffffff" : "#55555555"
    );
    root.style.setProperty(
      "--input-focus-border",
      isDark ? "#aaaaaa" : "#007bff"
    );
    root.style.setProperty(
      "--input-focus-shadow",
      "rgba(0, 123, 255, 0.5)"
    );
    root.style.setProperty(
      "--button-bg",
      isDark ? "red" : "blue"
    );
    root.style.setProperty(
      "--button-hover-bg",
      isDark ? "#005bb5" : "#0056b3"
    );
    root.style.setProperty(
      "--button-text",
      isDark ? "#00000000" : "#fff"
    );
    root.style.setProperty(
      "--success-message",
      "#28a745"
    );
    root.style.setProperty(
      "--review-bg",
      isDark ? "rgba(255, 255, 255, 0.1)" : "rgba(0, 0, 0, 0.05)"
    );
    root.style.setProperty(
      "--button-primary-hover",
      isDark ? "#999999" : "#616161"
    );
  }, [isDarkMode]);

  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <script
          src="//code.tidio.co/sf7zqeagqkbig5d56iqlot3fq8nygg0k.js"
          async
        ></script>
      </head>
      <body className={`${montserrat.className} ${ubuntu.className}`}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Navbar isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
          <Container
            sx={{
              backgroundColor: isDarkMode ? "#171717" : "#F7F7F7",
            }}
          >
            {children}
          </Container>
          <Footer isDarkMode={isDarkMode} />
        </ThemeProvider>
      </body>
    </html>
  );
}
