import type { Metadata } from "next";
import { League_Spartan, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import ContactSection from "@/components/sections/ContactSection";

const leagueSpartan = League_Spartan({
  variable: "--font-league-spartan",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Muttolab | Tecnología e IA para emprendedores",
  description:
    "Talleres presenciales de inteligencia artificial, NotebookLM y Pomelli para emprendedores, profesionales y cualquier persona que quiera aprovechar la tecnología.",
  keywords: [
    "tecnología",
    "emprendedores",
    "talleres IA",
    "inteligencia artificial",
    "NotebookLM",
    "Pomelli",
    "negocios",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${leagueSpartan.variable} ${inter.variable}`}>
      <body className="antialiased">
        <Navbar />
        {children}
        <ContactSection />
      </body>
    </html>
  );
}
