"use client";

import { useRouter } from "next/navigation"; // Correct import
import { useState } from "react";
import {
	Button,
	Drawer,
	IconButton,
	Switch,
	AppBar,
	Toolbar,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import styles from "../styles/navbar.module.css";

export default function Navbar({ isDarkMode, toggleTheme }) {
	const router = useRouter(); // Initialize the router
	const [open, setOpen] = useState(false);

	// Toggle the drawer state
	const toggleDrawer = () => {
		setOpen(!open);
	};

	// Handle navigation and close the drawer
	const handleNavigation = (path) => {
		setOpen(false); // Close the drawer
		router.push(path); // Navigate to the path
	};

	return (
		<AppBar position="fixed" className={styles.appbar}>
			<Toolbar
				sx={{
					backgroundColor: isDarkMode ? "#1e1e1e" : "#f5f5f5", // Dynamic background
					color: isDarkMode ? "#ffffff" : "#000000", // Dynamic text color
					padding: "20px",
					textAlign: "center",
				}}
				className={styles.toolbar}
			>
				{/* Logo */}
				<div className={styles.logo}>
					<a
						onClick={() => handleNavigation("/")}
						style={{ cursor: "pointer" }}
					>
						<img
							src={isDarkMode ? "../logoBlack.png" : "../logoWhite.png"} // Dynamic logo
							alt="FNDS Labs Logo"
							className={styles.logoImage}
						/>
					</a>
				</div>

				{/* Theme Toggle */}
				<Switch checked={isDarkMode} onChange={toggleTheme} />

				{/* Desktop Menu */}
				<ul className={styles.navLinks}>
					{[
						{ name: "Home", path: "/" },
						{ name: "About", path: "/about" },
						{ name: "Contact", path: "/contact" },
						{ name: "Portfolio", path: "/#portfolio" },
						{ name: "Testimonials", path: "/#reviews" },
						{ name: "Pricing", path: "/pricing" },
					].map((item) => (
						<li key={item.name}>
							<a
								onClick={() => handleNavigation(item.path)}
								aria-label={item.name}
								style={{ cursor: "pointer" }}
							>
								{item.name}
							</a>
						</li>
					))}
				</ul>

				{/* Buttons */}
				<div className={styles.rightButtons}>
					<Button
						target="_blank"
						href="https://calendly.com/fndslabs-15min-call/15min"
						variant="outlined"
						sx={{
							color: isDarkMode ? "#ffffff" : "#000000",
							borderColor: isDarkMode ? "#ffffff" : "#000000",
							"&:hover": {
								backgroundColor: isDarkMode ? "#333333" : "#e0e0e0",
							},
						}}
						aria-label="Book a Call"
					>
						Book a Call
					</Button>
					<Button
						href="/pricing"
						variant="contained"
						sx={{
							backgroundColor: isDarkMode ? "#333333" : "#000000",
							color: isDarkMode ? "#ffffff" : "#ffffff",
							"&:hover": {
								backgroundColor: isDarkMode ? "#444444" : "#222222",
							},
						}}
						aria-label="See Plans"
					>
						See Plans
					</Button>
				</div>

				{/* Mobile Menu Icon */}
				<IconButton className={styles.menuIcon} onClick={toggleDrawer}>
					<MenuIcon />
				</IconButton>
			</Toolbar>

			{/* Mobile Drawer */}
			<Drawer anchor="left" open={open} onClose={toggleDrawer}>
				<div className={styles.drawerMenu}>
					<Switch checked={isDarkMode} onChange={toggleTheme} />

					<ul>
						{[
							{ name: "Home", path: "/" },
							{ name: "About", path: "/about" },
							{ name: "Contact", path: "/contact" },
							{ name: "Portfolio", path: "/#portfolio" },
							{ name: "Testimonials", path: "/#reviews" },
							{ name: "Pricing", path: "/pricing" },
						].map((item) => (
							<li key={item.name}>
								<a
									onClick={() => handleNavigation(item.path)}
									aria-label={item.name}
									style={{ cursor: "pointer" }}
								>
									{item.name}
								</a>
							</li>
						))}
					</ul>
				</div>
			</Drawer>
		</AppBar>
	);
}
