import type { Metadata } from "next";
import AboutSection from "@/components/sections/AboutSection";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Nosotras | Muttolab",
  description:
    "Somos madre e hija apasionadas por la tecnología. Conocé nuestra historia y por qué enseñamos IA y herramientas digitales para emprendedores y profesionales.",
};

export default function NosotrasPage() {
  return (
    <>
      <main className="pt-20">
        {/* Breadcrumb */}
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-4 pb-0">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-primary transition-colors duration-200"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18"/>
            </svg>
            Volver al inicio
          </Link>
        </div>

        <AboutSection compact />
      </main>
      
    </>
  );
}
