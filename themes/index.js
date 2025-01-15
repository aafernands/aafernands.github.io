import { createTheme } from "@mui/material/styles";

// Light Theme
export const lightTheme = createTheme({
	palette: {
		mode: "light",
		primary: {
			main: "var(--button-bg)", // Blue
			contrastText: "var(--button-text)", // White for contrast
		},
		secondary: {
			main: "var(--input-border)", // Black
			contrastText: "var(--button-text)",
		},
		accent: {
			green: "eeeee", // Green
			orange: "#ff9800", // Orange
		},
		background: {
			default: "var(--background)", // Light gray
			paper: "var(--form-background)", // White
		},
		text: {
			primary: "var(--foreground)", // Black
			secondary: "var(--input-border)", // Gray
		},
	},
	typography: {
		fontFamily: "'Ubuntu', 'Roboto', sans-serif",
		h1: {
			fontWeight: 700,
			fontSize: "2.5rem",
		},
		h2: {
			fontWeight: 600,
			fontSize: "2rem",
		},
		h3: {
			fontWeight: 600,
			fontSize: "2rem",
		},
		body1: {
			fontSize: "1rem",
			color: "var(--foreground)#171717",
		},
		button: {
			textTransform: "none",
			fontWeight: 600,
		},
	},
});

// Dark Theme
export const darkTheme = createTheme({
	palette: {
		mode: "dark",
		primary: {
			main: "var(--button-bg)", // Light blue
			contrastText: "--button-text", // Black for contrast
		},
		secondary: {
			main: "--input-border", // White
			contrastText: "--foreground",
		},
		accent: {
			green: "#4caf50", // Green
			orange: "#ff9800", // Orange
		},
		background: {
			default: "var(--background)", // Dark gray
			paper: "var(--form-background)", // Slightly lighter dark
		},
		text: {
			primary: "var(--foreground)", // White
			secondary: "var(--input-border)", // Light gray
		},
	},
	typography: {
		fontFamily: "'Ubuntu', 'Roboto', sans-serif",
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
			color: "#cccccc",
		},
		button: {
			textTransform: "none",
			fontWeight: 600,
		},
	},
});
