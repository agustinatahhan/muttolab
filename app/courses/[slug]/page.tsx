import { notFound } from "next/navigation";
import Link from "next/link";
import { getCourseBySlug, courses, formatPrice } from "@/data/courses";
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

  const savings = course.originalPrice
    ? course.originalPrice - course.price
    : null;

  return (
    <>
      <Navbar />
      <main className="bg-brand-bg min-h-screen pt-20">

        {/* ── Intro ── */}
        <div className="bg-white border-b border-gray-100">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
            <Link
              href="/#cursos"
              className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-primary transition-colors mb-6"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18"/>
              </svg>
              Volver a cursos
            </Link>

            {/* <span className="inline-block bg-secondary/60 text-primary text-xs font-semibold px-3 py-1 rounded-full mb-4 tracking-wide uppercase">
              {course.category}
            </span> */}

            <h1
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-black leading-tight mb-4 max-w-3xl"
              style={{ fontFamily: "var(--font-league-spartan)" }}
            >
              {course.title}
            </h1>

            <p className="text-gray-500 text-xl leading-relaxed mb-8 max-w-2xl">
              {course.shortDescription}
            </p>

            {/* Meta pills */}
            <div className="flex flex-wrap gap-2">
              <span className="flex items-center gap-1.5 bg-brand-bg text-gray-600 text-sm px-4 py-2 rounded-full">
                <svg className="w-4 h-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                </svg>
                {course.format}
              </span>
              <span className="flex items-center gap-1.5 bg-brand-bg text-gray-600 text-sm px-4 py-2 rounded-full">
                <svg className="w-4 h-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6l4 2m6-2a10 10 0 11-20 0 10 10 0 0120 0z"/>
                </svg>
                {course.durationHours}
              </span>
              <span className="flex items-center gap-1.5 bg-orange-50 text-primary text-sm px-4 py-2 rounded-full font-medium">
                🗓 Cupos limitados
              </span>
            </div>
          </div>
        </div>

        {/* ── Body ── */}
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 grid grid-cols-1 lg:grid-cols-3 gap-12">

          {/* Main content */}
          <div className="lg:col-span-2 space-y-12">

            {/* Description */}
            <section>
              <h2 className="text-2xl font-bold text-black mb-5" style={{ fontFamily: "var(--font-league-spartan)" }}>
                {course.isBundle ? "¿Por qué hacer los 3 talleres juntos?" : "Sobre el taller"}
              </h2>
              <div className="text-gray-600 leading-relaxed text-base whitespace-pre-line">
                {course.description}
              </div>
            </section>

            {/* Bundle modules */}
            {course.isBundle && course.bundleModules && (
              <section>
                <h2 className="text-2xl font-bold text-black mb-6" style={{ fontFamily: "var(--font-league-spartan)" }}>
                  ¿Qué incluye el programa?
                </h2>
                <div className="space-y-4">
                  {course.bundleModules.map((mod, i) => (
                    <div key={i} className="flex gap-5 bg-white rounded-2xl p-6 border border-gray-100">
                      <div
                        className="w-10 h-10 rounded-xl flex items-center justify-center text-white font-bold text-sm shrink-0"
                        style={{ background: "#ff6634" }}
                      >
                        {i + 1}
                      </div>
                      <div>
                        <p className="text-xs text-primary font-semibold uppercase tracking-wider mb-1">
                          {mod.week}
                        </p>
                        <h3 className="font-bold text-black mb-1" style={{ fontFamily: "var(--font-league-spartan)" }}>
                          {mod.title}
                        </h3>
                        <p className="text-sm text-gray-500 leading-relaxed">{mod.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Bundle takeaways */}
            {course.isBundle && course.bundleTakeaways && (
              <section>
                <h2 className="text-2xl font-bold text-black mb-6" style={{ fontFamily: "var(--font-league-spartan)" }}>
                  ¿Qué te llevás al terminar?
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {course.bundleTakeaways.map((item, i) => (
                    <div key={i} className="flex items-start gap-3 bg-white rounded-xl p-4 border border-gray-100">
                      <span
                        className="w-6 h-6 rounded-full flex items-center justify-center text-white shrink-0 mt-0.5"
                        style={{ background: "#ff6634" }}
                      >
                        <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"/>
                        </svg>
                      </span>
                      <p className="text-sm text-gray-700">{item}</p>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Use cases */}
            {course.useCases && course.useCases.length > 0 && (
              <section>
                <h2 className="text-2xl font-bold text-black mb-6" style={{ fontFamily: "var(--font-league-spartan)" }}>
                  ¿Para qué lo vas a usar vos?
                </h2>
                <div className="space-y-4">
                  {course.useCases.map((uc, i) => (
                    <div key={i} className="flex gap-4 bg-white rounded-2xl p-5 border border-gray-100">
                      <span className="text-2xl leading-none mt-0.5">{uc.icon}</span>
                      <div>
                        <h3 className="font-bold text-black text-sm mb-1" style={{ fontFamily: "var(--font-league-spartan)" }}>
                          {uc.title}
                        </h3>
                        <p className="text-sm text-gray-500 leading-relaxed">{uc.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Target audience */}
            <section>
              <h2 className="text-2xl font-bold text-black mb-6" style={{ fontFamily: "var(--font-league-spartan)" }}>
                Este taller es para vos si...
              </h2>
              <ul className="space-y-3">
                {course.targetAudience.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-gray-600">
                    <span className="text-primary font-bold mt-0.5">—</span>
                    {item}
                  </li>
                ))}
              </ul>
            </section>

            {/* Important note */}
            {course.importantNote && (
              <div className="bg-orange-50 border border-primary/20 rounded-2xl p-6">
                <p className="text-sm font-semibold text-primary mb-1">⚠️ Dato importante</p>
                <p className="text-sm text-gray-600 leading-relaxed">{course.importantNote}</p>
              </div>
            )}
          </div>

          {/* Sticky sidebar */}
          <aside>
            <div className="bg-white rounded-2xl p-7 shadow-sm border border-gray-100 sticky top-24 space-y-5">

              {/* Price */}
              <div>
                {savings && (
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-gray-400 line-through text-sm">{formatPrice(course.originalPrice!)}</span>
                    <span className="bg-primary text-white text-xs font-bold px-2 py-0.5 rounded-full">
                      -{formatPrice(savings)}
                    </span>
                  </div>
                )}
                <p className="text-3xl font-bold text-black" style={{ fontFamily: "var(--font-league-spartan)" }}>
                  {formatPrice(course.price)}
                </p>
              </div>

              {/* Details */}
              <div className="space-y-3 pt-2 border-t border-gray-100 text-sm text-gray-600">
                <div className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-primary shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                  </svg>
                  {course.format}
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-primary shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6l4 2m6-2a10 10 0 11-20 0 10 10 0 0120 0z"/>
                  </svg>
                  {course.durationHours}
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-primary shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z"/>
                  </svg>
                  {course.groupSize}
                </div>
                <div className="flex items-start gap-2">
                  <svg className="w-4 h-4 text-primary shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                  </svg>
                  {course.requirements}
                </div>
              </div>

              <Link href="/" className="btn-primary w-full justify-center text-sm pt-4">
                Consultar inscripción
              </Link>

              <p className="text-center text-xs text-gray-400">🗓 Cupos limitados</p>
            </div>
          </aside>
        </div>
      </main>
   
    </>
  );
}
