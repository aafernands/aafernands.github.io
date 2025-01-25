"use client";

import { useRouter } from "next/navigation";
import Link from "next/link";
import { Typography, Box, List, ListItem, ListItemText } from "@mui/material";
import { Facebook, Instagram } from "@mui/icons-material";

const Footer = () => {
	const router = useRouter();

	const handleNavigation = (path) => {
		router.push(path);
	};


	
	const currentDate = new Date().getFullYear();

	return (
		<Box
			sx={{
				paddingTop: "40px",
				paddingBottom: "20px",
				textAlign: "center",
				boxShadow: "0 -4px 6px rgba(0, 0, 0, 0.1)",
			}}
		>
			<Box sx={{ paddingBottom: "40px" }}>
				<Link href="/" passHref>
					<Box
						component="img"
						src="../logoWhite.png"
						alt="FNDS Labs Logo"
						sx={{
							maxWidth: "150px",
						}}
					/>
				</Link>
			</Box>

			<Box
				sx={{
					display: "flex",
					justifyContent: "center",
					padding: "0px",
				}}
			>
				<List
					sx={{
						display: "flex",
						flexDirection: "column",
						justifyContent: "center",
						alignContent: "center",
						textAlign: "center",
						padding: "10px",
					}}
				>
					{[
						{ name: "Home", path: "/" },
						{ name: "About", path: "/about" },
						{ name: "Contact", path: "/contact" },
						{ name: "Portfolio", path: "/#portfolio" },
						{ name: "Testimonials", path: "/#reviews" },
						{ name: "Pricing", path: "/pricing" },
					].map((item) => (
						<ListItem
							key={item.name}
							sx={{
								textAlign: "center",
								display: "inline-block",
								margin: "0 15px",
								padding: 0,
								gap: "10px",
							}}
						>
							<Link
								href={item.path}
								passHref
								aria-label={item.name}
								style={{
									cursor: "pointer",
									color: "#171717",
									textDecoration: "none",
									color: "black",
									"&:hover": {
										color: "red !important",
									},
								}}
							>
								{item.name}
							</Link>
						</ListItem>
					))}
				</List>
			</Box>

			{/* Social Media Links */}
			<Box sx={{ marginTop: "20px" }}>
				<a
					href="https://www.facebook.com/fndslabs/"
					target="_blank"
					rel="noopener noreferrer"
					style={{ color: "#171717", marginRight: "15px" }}
				>
					<Facebook />
				</a>
				<a
					href="https://www.instagram.com/fnds.labs"
					target="_blank"
					rel="noopener noreferrer"
					style={{ color: "#171717", '&:hover': {
						color: "red !important",
					} }}
				>
					<Instagram />
				</a>
			</Box>

			{/* Copyright */}
			<Typography variant="body2" sx={{ marginTop: "10px" }}>
				© {currentDate} FNDS Labs. All rights reserved.
			</Typography>
		</Box>
	);
};

export default Footer;
