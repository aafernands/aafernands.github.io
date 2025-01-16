"use client";

import { useEffect, useState } from "react";
import "./globals.css"; // Import global CSS
import "@fortawesome/fontawesome-svg-core/styles.css";
import { Ubuntu, Montserrat } from "next/font/google";
import {
  Container,
  ThemeProvider,
  CssBaseline,
  createTheme,
} from "@mui/material";
import Navbar from "../components/NavBar";
import Footer from "../components/Footer";

const montserrat = Montserrat({ subsets: ["latin"], weight: ["400", "700"] });
const ubuntu = Ubuntu({ subsets: ["latin"], weight: ["400", "700"] });

export default function RootLayout({ children }) {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  const theme = createTheme({
    palette: {
      mode: isDarkMode ? "dark" : "light",
      primary: {
        main: isDarkMode ? "#90caf9" : "#1976d2",
      },
      background: {
        default: isDarkMode ? "#121212" : "#ffffff",
        paper: isDarkMode ? "#1e1e1e" : "#f5f5f5",
      },
    },
    typography: {
      fontFamily: "'Montserrat', 'Ubuntu', sans-serif",
    },
  });

  useEffect(() => {
    const root = document.documentElement;
    const themeVars = isDarkMode
      ? {
          "--background": "#121212",
          "--foreground": "#ededed",
          "--form-background": "#333",
          "--input-background": "#444",
          "--input-border": "#ffffff",
          "--button-bg": "#1976d2",
          "--button-hover-bg": "#005bb5",
          "--button-text": "#ffffff",
          "--review-bg": "rgba(255, 255, 255, 0.1)",
        }
      : {
          "--background": "#ffffff",
          "--foreground": "#171717",
          "--form-background": "#ffffff",
          "--input-background": "#ffffff",
          "--input-border": "#55555555",
          "--button-bg": "#90caf9",
          "--button-hover-bg": "#0056b3",
          "--button-text": "#000000",
          "--review-bg": "rgba(0, 0, 0, 0.05)",
        };

    Object.entries(themeVars).forEach(([key, value]) =>
      root.style.setProperty(key, value)
    );
  }, [isDarkMode]);

  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body className={`${montserrat.className} ${ubuntu.className}`}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Navbar isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
          <Container>
            {children}
          </Container>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
