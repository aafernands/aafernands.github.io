// themes/index.js
import { createTheme } from "@mui/material/styles";

// Light Theme
export const lightTheme = createTheme({
  palette: {
    mode: "light", // Light mode
    primary: {
      main: "#1976d2", // Primary color
    },
    secondary: {
      main: "#d32f2f", // Secondary color
    },
    background: {
      default: "#ffffff", // Light background color
      paper: "#f5f5f5", // Paper background color
    },
    text: {
      primary: "#000000", // Primary text color
      secondary: "#757575", // Secondary text color
    },
  },
  typography: {
    fontFamily: "'Montserrat', 'Roboto', sans-serif",
    h1: {
      fontWeight: 700,
      fontSize: "2.5rem",
    },
    h2: {
      fontWeight: 600,
      fontSize: "2rem",
    },
    body1: {
      fontSize: "1rem",
      color: "#000000", // Body text color
    },
    button: {
      textTransform: "none",
      fontWeight: 600,
    },
  },
});
