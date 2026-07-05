import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import Navbar from "./components/Navbar";
import "./globals.css";

const playfairDisplay = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Jejak Rasa — Menelusuri Rasa, Mengungkap Cerita Jatinegara",
  description:
    "Di balik hiruk-pikuk aktivitas perkotaan Jakarta, Jatinegara menyimpan jejak sejarah dan budaya yang telah berkembang selama ratusan tahun.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="id"
      className={`${playfairDisplay.variable} ${inter.variable} antialiased`}
    >
      <body className="min-h-screen bg-cream font-sans text-foreground">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
