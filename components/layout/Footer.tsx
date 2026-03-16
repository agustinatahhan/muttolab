import Image from "next/image";
import Link from "next/link";

const navLinks = [
  { label: "Cursos", href: "#cursos" },
  { label: "Sobre nosotras", href: "#sobre-nosotras" },
  { label: "Servicios", href: "#servicios" },
  { label: "Contacto", href: "#contacto" },
];

export default function Footer() {
  return (
    <footer className="bg-black text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-10">
          {/* Logo + tagline */}
          <div className="flex flex-col gap-3">
            <Link href="/">
              <Image
                src="/logo/logo.png"
                alt="Muttolab"
                width={130}
                height={36}
                className="h-8 w-auto object-contain brightness-0 invert"
              />
            </Link>
            <p className="text-gray-400 text-sm max-w-xs">
              Tecnología e IA para mujeres emprendedoras.
            </p>
          </div>

          {/* Nav links */}
          <ul className="flex flex-wrap gap-x-8 gap-y-3">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-sm text-gray-400 hover:text-white transition-colors duration-200"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Divider + copyright */}
        <div className="border-t border-white/10 mt-10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-gray-500 text-xs">
            © {new Date().getFullYear()} Muttolab. Todos los derechos reservados.
          </p>
          <p className="text-gray-500 text-xs">
            Hecho con ❤️ para mujeres emprendedoras
          </p>
        </div>
      </div>
    </footer>
  );
}
