// app/layout.js
import './globals.css'; // Your global styles
import { Inter } from 'next/font/google'; // Example of a font import
import { Montserrat } from 'next/font/google'; // Another font import
import { Ubuntu } from 'next/font/google'; // Import Ubuntu font
import Navbar from '../components/NavBar'; // Import Navbar component
import Footer from '../components/Footer'; // Import Footer component

const inter = Inter({ subsets: ['latin'] });
const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '700'],
});
const ubuntu = Ubuntu({
  subsets: ['latin'],
  weight: ['400', '700'], // Specify font weights you need
});

export default function RootLayout({ children }) {
  const currentDate = new Date().getFullYear();

  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>FNDS Labs</title>
        {/* You no longer need the link to the external font here */}
      </head>
      <body className={`${montserrat.className} ${ubuntu.className}`}>
        <Navbar />
        {children} {/* This will render the content of each page */}
        <Footer />

        {/* Injecting Tidio script */}
        <div
          dangerouslySetInnerHTML={{
            __html: `
              <script src="//code.tidio.co/sf7zqeagqkbig5d56iqlot3fq8nygg0k.js" async></script>
            `,
          }}
        />
      </body>
    </html>
  );
}
