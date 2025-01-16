"use client";

import { useState } from "react";
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
    document.documentElement.setAttribute(
      "data-theme",
      !isDarkMode ? "dark" : "light"
    );
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

  return (
    <html lang="en" data-theme={isDarkMode ? "dark" : "light"}>
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body className={`${montserrat.className} ${ubuntu.className}`}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Navbar isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
          <Container sx={{py: "86px", bgcolor: "red"}} >{children}</Container>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
