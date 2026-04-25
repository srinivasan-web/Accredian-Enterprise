import { Manrope, Space_Grotesk } from "next/font/google";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ScrollProgress from "@/components/layout/ScrollProgress";
import "./globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-body",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
});

export const metadata = {
  title: "Accredian Enterprise",
  description:
    "A modular enterprise learning landing page with solutions, frameworks, FAQs, and testimonials.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${manrope.variable} ${spaceGrotesk.variable}`}>
        <ScrollProgress />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
