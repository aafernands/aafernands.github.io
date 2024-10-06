import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { createTheme, ThemeProvider } from "@mui/material";

const theme = createTheme({
  typography: {
    // fontFamily: 'Questrial, Arial, sans-serif', // Ensure fallback fonts are provided
    // fontFamily: 'alatsi-regular, Arial, sans-serif', // Ensure fallback fonts are provided

    h1: {
      fontSize: "3rem",
      color: "black",
      textAlign: "center",
      fontFamily: 'Anton, Arial, sans-serif', // Ensure fallback fonts are provided
    },
    h2: {
      fontSize: "2rem",
      color: "black",
      textAlign: "center",
      fontFamily: 'Anton, Arial, sans-serif', // Ensure fallback fonts are provided
    },
    h3: {
      fontSize: "1rem",
      color: "black",
      textAlign: "center",
      fontFamily: 'Anton, Arial, sans-serif', // Ensure fallback fonts are provided
    },
    h4: {
      fontSize: "1rem",
      color: "black",
      textAlign: "center",
      fontFamily: 'Anton, Arial, sans-serif', // Ensure fallback fonts are provided
    },
    h5: {
      fontSize: '1rem',
      color: "white",
      textAlign: "left",
      fontFamily: 'Aldrich, Arial, sans-serif', // Ensure fallback fonts are provided
    },
    h6: {
      fontSize: '1rem',
      // fontWeight: "bold",
      color: "#25291C",
      textAlign: "center",
      fontFamily: 'Questrial, Arial, sans-serif', // Ensure fallback fonts are provided
    },
    p: {
      color: "black",
      textAlign: "left",
      fontFamily: 'Aldrich, Arial, sans-serif', // Ensure fallback fonts are provided
    },
  
    body2: {
      fontFamily: "Aldrich, Arial, sans-serif", // Ensure fallback fonts are provided
      textAlign: "center",

    },
    button: {
     color: "rgb(255,235,59)" 
    }
  },
  palette: {
    primary: {
      main: '#1976d2', // Custom primary color
    },
    secondary: {
      main: '#FFEB3B', // Custom secondary color
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          fontSize: '1rem',
          textTransform: 'none',
          padding: '8px 16px',
          borderRadius: '8px',
          
          // Add any other custom styles here
        },
        containedPrimary: {
          bgcolor: '#EDD500', // Custom background color for primary contained buttons
          color: '#25291C',
          '&:hover': {
            bgcolor: '#E6E6EA', // Custom hover color for primary contained buttons
          },
        },
        outlinedSecondary: {
          borderColor: '#dc004e', // Custom border color for secondary outlined buttons
          color: '#dc004e',
          '&:hover': {
            borderColor: '#ff3366', // Custom hover border color for secondary outlined buttons
            color: '#ff3366',
          },
        },
      },
    },
  },

});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
