// app/layout.js
import './globals.css'; // Your global styles
import { Inter } from 'next/font/google'; // Example of a font import
import Navbar from '../components/NavBar'; // Import Navbar component
import Footer from '../components/Footer'; // Import Footer component

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({ children }) {
  const currentDate = new Date().getFullYear();

  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>FNDS Labs</title>
        {/* Add any other global head elements like meta tags, links, etc. */}
      </head>
      <body className={inter.className}>
        <Navbar />
        {children} {/* This will render the content of each page */}
        <Footer />
      </body>
    </html>
  );
}
