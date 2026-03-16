import type { Metadata } from "next";
import { League_Spartan, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";

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
  title: "Muttolab | Tecnología para mujeres emprendedoras",
  description:
    "Cursos y servicios de tecnología e inteligencia artificial para mujeres emprendedoras. Aprende a potenciar tu negocio con herramientas digitales.",
  keywords: [
    "tecnología",
    "emprendedoras",
    "cursos IA",
    "inteligencia artificial",
    "mujeres",
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
        {" "}
        <Navbar />
        {children}
      </body>
    </html>
  );
}
