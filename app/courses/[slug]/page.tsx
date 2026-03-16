import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { getCourseBySlug, courses } from "@/data/courses";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return courses.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const course = getCourseBySlug(slug);
  if (!course) return {};
  return {
    title: `${course.title} | Muttolab`,
    description: course.shortDescription,
  };
}

export default async function CourseDetailPage({ params }: Props) {
  const { slug } = await params;
  const course = getCourseBySlug(slug);

  if (!course) notFound();

  return (
    <>
      <Navbar />
      <main className="bg-brand-bg min-h-screen pt-20">
        {/* Hero */}
        <div className="bg-white border-b border-gray-100">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Text */}
            <div>
              <Link
                href="/#cursos"
                className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-primary transition-colors mb-6"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
                Volver a cursos
              </Link>

              <span
                className="inline-block bg-secondary/60 text-primary text-xs font-semibold px-3 py-1 rounded-full mb-4 tracking-wide uppercase"
              >
                {course.category}
              </span>

              <h1
                className="text-4xl md:text-5xl font-bold text-black leading-tight mb-4"
                style={{ fontFamily: "var(--font-league-spartan)" }}
              >
                {course.title}
              </h1>

              <p className="text-gray-500 text-lg leading-relaxed mb-8">
                {course.shortDescription}
              </p>

              {/* Meta badges */}
              <div className="flex flex-wrap gap-3 mb-8">
                {course.duration && (
                  <span className="flex items-center gap-1.5 bg-brand-bg text-gray-600 text-sm px-4 py-2 rounded-full">
                    <svg className="w-4 h-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6l4 2m6-2a10 10 0 11-20 0 10 10 0 0120 0z" />
                    </svg>
                    {course.duration}
                  </span>
                )}
                {course.level && (
                  <span className="flex items-center gap-1.5 bg-brand-bg text-gray-600 text-sm px-4 py-2 rounded-full">
                    <svg className="w-4 h-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                    {course.level}
                  </span>
                )}
              </div>

              <a href="/#contacto" className="btn-primary text-base px-8 py-4">
                Me interesa este curso
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>

            {/* Image */}
            <div className="relative aspect-video lg:aspect-4/5 max-w-lg w-full mx-auto rounded-3xl overflow-hidden shadow-2xl bg-secondary/30">
              <Image
                src={course.image}
                alt={course.title}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
              />
            </div>
          </div>
        </div>

        {/* Body */}
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Description */}
          <div className="lg:col-span-2">
            <h2
              className="text-2xl font-bold text-black mb-5"
              style={{ fontFamily: "var(--font-league-spartan)" }}
            >
              Sobre el curso
            </h2>
            <p className="text-gray-600 leading-relaxed text-base">
              {course.description}
            </p>
          </div>

          {/* Contents */}
          <div>
            <div className="bg-white rounded-2xl p-7 shadow-sm border border-gray-100 sticky top-24">
              <h3
                className="text-lg font-bold text-black mb-5"
                style={{ fontFamily: "var(--font-league-spartan)" }}
              >
                Contenido del curso
              </h3>
              <ul className="flex flex-col gap-3">
                {course.contents.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-gray-600">
                    <span
                      className="w-5 h-5 rounded-full flex items-center justify-center text-white text-xs font-bold shrink-0 mt-0.5"
                      style={{ background: "#ff6634" }}
                    >
                      {i + 1}
                    </span>
                    {item}
                  </li>
                ))}
              </ul>

              <div className="mt-7 pt-6 border-t border-gray-100">
                <a href="/#contacto" className="btn-primary w-full justify-center text-sm">
                  Consultar inscripción
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
