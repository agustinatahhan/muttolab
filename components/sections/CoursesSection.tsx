import { courses } from "@/data/courses";
import CourseCard from "@/components/courses/CourseCard";
import AnimateIn from "@/components/ui/AnimateIn";

const pillars = [
  { icon: "🤖", text: "Inteligencia Artificial" },

  { icon: "📱", text: "Presencia Digital" },
  { icon: "🚀", text: "Productividad" },
];

export default function CoursesSection() {
  return (
    <section id="cursos" className="bg-white">
      <div className="section-container">
        {/* Header */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-end mb-16">
          <AnimateIn>
            <span className="text-primary text-sm font-semibold tracking-widest uppercase">
              Cursos para emprendedores
            </span>
            <h2 className="section-title mt-3">
              Aprendé tecnología diseñada{" "}
              <span style={{ color: "#ff6634" }}>para vos</span>
            </h2>
          </AnimateIn>
          <AnimateIn delay={0.1} direction="right">
            <p className="section-subtitle mt-0">
              Nuestros cursos están pensados desde cero para emprendedores: sin tecnicismos, 100% prácticos, con resultados
              reales para tu negocio.
            </p>
            {/* Pillars */}
            <div className="flex flex-wrap gap-2 mt-6">
              {pillars.map((p) => (
                <span
                  key={p.text}
                  className="inline-flex items-center gap-1.5 bg-brand-bg text-gray-700 text-xs font-medium px-3 py-1.5 rounded-full border border-gray-100"
                >
                  {p.icon} {p.text}
                </span>
              ))}
            </div>
          </AnimateIn>
        </div>

        {/* Course grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {courses.map((course, i) => (
            <AnimateIn key={course.slug} delay={i * 0.08}>
              <CourseCard course={course} />
            </AnimateIn>
          ))}
        </div>

        {/* Bottom CTA */}
        <AnimateIn delay={0.2} className="mt-14 text-center">
          <p className="text-gray-500 text-sm mb-4">
            ¿No encontrás lo que buscás? También hacemos{" "}
            <strong className="text-black">cursos a medida</strong> para equipos y empresas.
          </p>
          <a href="#contacto" className="btn-secondary text-sm">
            Consultá un curso personalizado
          </a>
        </AnimateIn>
      </div>
    </section>
  );
}
