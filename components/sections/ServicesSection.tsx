import AnimateIn from "@/components/ui/AnimateIn";

const services = [
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    title: "Sitios Web",
    description:
      "Diseñamos y desarrollamos sitios web modernos, rápidos y optimizados para emprendedores, marcas personales y empresas que quieren causar una primera impresión impecable.",
    tags: ["Landing pages", "Portafolios", "Corporativos"],
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
      </svg>
    ),
    title: "Ecommerce",
    description:
      "Creamos tu tienda online completa: catálogo, pagos, gestión de pedidos y todo lo que necesitás para vender tus productos o servicios de forma profesional y segura.",
    tags: ["Tiendas online", "Catálogos", "Pagos digitales"],
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
      </svg>
    ),
    title: "Automatizaciones",
    description:
      "Conectamos tus apps y automatizamos procesos repetitivos —emails, leads, reportes, notificaciones— para que vos y tu equipo puedan enfocarse en lo que realmente mueve tu negocio.",
    tags: ["CRM", "Email marketing"],
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
    title: "Integraciones con IA",
    description:
      "Implementamos soluciones de inteligencia artificial en tu empresa o emprendimiento: asistentes virtuales, generación de contenido automática, análisis de datos y mucho más.",
    tags: ["Chatbots IA", "Análisis"],
  },
];

const audiences = [
  { label: "Emprendedores", icon: "💡" },
  { label: "Marcas personales", icon: "✨" },
  { label: "Pequeñas empresas", icon: "🏢" },
  { label: "Profesionales independientes", icon: "👩‍💻" },
];

export default function ServicesSection() {
  return (
    <section id="servicios" className="bg-brand-bg">
      <div className="section-container">
        {/* Header */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-end mb-16">
          <AnimateIn>
            <span className="text-primary text-sm font-semibold tracking-widest uppercase">
              Nuestros servicios
            </span>
            <h2 className="section-title mt-3">
              Soluciones tech para{" "}
              <span style={{ color: "#ff6634" }}>impulsar tu marca</span>
            </h2>
          </AnimateIn>
          <AnimateIn delay={0.1} direction="right">
            {/* <p className="section-subtitle mt-0">
              Trabajamos con emprendedores, marcas personales, empresas y
              profesionales que necesitan llevar su presencia digital al
              siguiente nivel con tecnología a medida.
            </p> */}
            {/* Audience pills */}
            <div className="flex flex-wrap gap-2 mt-6">
              {audiences.map((a) => (
                <span
                  key={a.label}
                  className="inline-flex items-center gap-1.5 bg-secondary/40 text-gray-700 text-xs font-medium px-3 py-1.5 rounded-full"
                >
                  {a.icon} {a.label}
                </span>
              ))}
            </div>
          </AnimateIn>
        </div>

        {/* Service cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, i) => (
            <AnimateIn key={service.title} delay={i * 0.1}>
              <div className="group bg-white rounded-2xl p-8 h-full flex flex-col transition-all duration-300 hover:shadow-xl hover:-translate-y-1 hover:bg-primary cursor-default">
                {/* Icon */}
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-secondary/60 text-primary mb-6 transition-all duration-300 group-hover:bg-white/20 group-hover:text-white">
                  {service.icon}
                </div>

                <h3
                  className="text-xl font-bold text-black mb-3 transition-colors duration-300 group-hover:text-white"
                  style={{ fontFamily: "var(--font-league-spartan)" }}
                >
                  {service.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed transition-colors duration-300 group-hover:text-white/80 flex-1">
                  {service.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 mt-5">
                  {service.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-2.5 py-1 rounded-full border border-gray-400/30 bg-white/60 text-gray-500 group-hover:bg-white/20 group-hover:text-white/70 group-hover:border-none transition-colors duration-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </AnimateIn>
          ))}
        </div>

        {/* Bottom CTA banner */}
        <AnimateIn delay={0.15} className="mt-12">
          <div className="bg-brand-bg rounded-2xl px-8 py-8 flex flex-col sm:flex-row items-center justify-between gap-6 border border-gray-100">
            <div>
              <p className="font-bold text-black text-lg" style={{ fontFamily: "var(--font-league-spartan)" }}>
                ¿Tenés un proyecto en mente?
              </p>
              <p className="text-gray-500 text-sm mt-1">
                Contanos qué necesitás y te armamos una propuesta a medida, sin compromiso.
              </p>
            </div>
            <a href="#contacto" className="btn-primary shrink-0">
              Solicitar presupuesto
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </AnimateIn>
      </div>
    </section>
  );
}
