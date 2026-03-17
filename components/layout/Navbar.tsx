"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { label: "Cursos", href: "#cursos" },
  { label: "Servicios", href: "#servicios" },
  { label: "Nosotras", href: "/nosotras" },
  { label: "Contacto", href: "#contacto" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (!href.startsWith("#")) return;
    e.preventDefault();
    setMenuOpen(false);
    if (isHome) {
      const el = document.querySelector(href);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    } else {
      window.location.href = `/${href}`;
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled || menuOpen
          ? "bg-white/95 backdrop-blur-sm shadow-sm"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 shrink-0">
            <Image
              src="/logo/logo.png"
              alt="Muttolab"
              width={140}
              height={40}
              className="h-8 w-auto object-contain"
              priority
            />
          </Link>

          {/* Desktop nav */}
          <ul className="hidden md:flex items-center gap-8">
            {navLinks.map((link) =>
              link.href.startsWith("#") ? (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="text-sm font-medium text-gray-700 hover:text-primary transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ) : (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm font-medium text-gray-700 hover:text-primary transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              )
            )}
          </ul>

          {/* Desktop CTA */}
          <a
            href="#contacto"
            onClick={(e) => handleNavClick(e, "#contacto")}
            className="hidden md:inline-flex btn-primary text-sm"
          >
            Hablemos
          </a>

          {/* Hamburger */}
          <button
            className="md:hidden flex flex-col gap-1.5 p-2"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Abrir menú"
          >
            <span
              className={`block w-5 h-0.5 bg-black transition-all duration-300 ${
                menuOpen ? "rotate-45 translate-y-2" : ""
              }`}
            />
            <span
              className={`block w-5 h-0.5 bg-black transition-all duration-300 ${
                menuOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block w-5 h-0.5 bg-black transition-all duration-300 ${
                menuOpen ? "-rotate-45 -translate-y-2" : ""
              }`}
            />
          </button>
        </div>

        {/* Mobile menu */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ${
            menuOpen ? "max-h-64 pb-6" : "max-h-0"
          }`}
        >
          <ul className="flex flex-col gap-4 pt-2">
            {navLinks.map((link) =>
              link.href.startsWith("#") ? (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="block text-sm font-medium text-gray-700 hover:text-primary transition-colors duration-200 py-1"
                  >
                    {link.label}
                  </a>
                </li>
              ) : (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className="block text-sm font-medium text-gray-700 hover:text-primary transition-colors duration-200 py-1"
                  >
                    {link.label}
                  </Link>
                </li>
              )
            )}
            <li>
              <a
                href="#contacto"
                onClick={(e) => handleNavClick(e, "#contacto")}
                className="btn-primary text-sm mt-2 w-fit"
              >
                Hablemos
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
