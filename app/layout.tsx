import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "ESSET LETIWLID | Charitable Organization — Ethiopia",
  description:
    "ESSET LETIWLID is an Ethiopian charitable organization working across 7 mission pillars: Food Security, Cultural Heritage Preservation, Youth Technology Empowerment, Environment & Biodiversity, Rights, Community Health & Education, and Ethics & Moral Development.",
  icons: {
    icon: "/esset_icon_core.png",
    apple: "/esset_icon_core.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col font-sans">
        <Navbar />
        <PageTransition>
          <main className="flex-1">{children}</main>
        </PageTransition>
        <Footer />
      </body>
    </html>
  );
}
