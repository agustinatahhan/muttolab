"use client";

import { motion } from "framer-motion";

const EASE = [0.22, 1, 0.36, 1] as const;

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay, ease: EASE },
});

export default function Hero() {
  return (
    <section className="relative min-h-screen bg-brand-bg flex items-center overflow-hidden">
      {/* Decorative blobs */}
      <motion.div
        aria-hidden
        className="absolute -top-32 -right-32 w-125 h-125 rounded-full opacity-20 pointer-events-none"
        style={{ background: "radial-gradient(circle, #ff6634 0%, transparent 70%)" }}
        initial={{ scale: 0.6, opacity: 0 }}
        animate={{ scale: 1, opacity: 0.2 }}
        transition={{ duration: 1.4, ease: "easeOut" }}
      />
      <motion.div
        aria-hidden
        className="absolute bottom-0 -left-20 w-87.5 h-87.5 rounded-full opacity-30 pointer-events-none"
        style={{ background: "radial-gradient(circle, #ffceeb 0%, transparent 70%)" }}
        initial={{ scale: 0.6, opacity: 0 }}
        animate={{ scale: 1, opacity: 0.3 }}
        transition={{ duration: 1.4, delay: 0.2, ease: "easeOut" }}
      />

      <div className="section-container relative z-10 w-full">
        <div className="max-w-3xl">
          {/* Badge */}
          <motion.div
            className="inline-flex items-center gap-2 bg-secondary/60 text-primary text-xs font-semibold px-4 py-2 rounded-full mb-8 tracking-wide uppercase"
            {...fadeUp(0)}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-primary inline-block" />
            Cursos &amp; Servicios de Tecnología
          </motion.div>

          {/* Title */}
          <motion.h1
            className="section-title text-5xl md:text-6xl lg:text-7xl mb-6"
            {...fadeUp(0.1)}
          >
            Tecnología para{" "}
            <span style={{ color: "#ff6634" }}>emprendedores</span>
            
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            className="section-subtitle text-xl md:text-2xl max-w-2xl mb-10"
            {...fadeUp(0.2)}
          >
            Te ayudamos a usar la tecnología e inteligencia artificial para
            potenciar tus proyectos.
          </motion.p>

          {/* CTAs */}
          <motion.div className="flex flex-wrap gap-4" {...fadeUp(0.3)}>
            <a href="#cursos" className="btn-primary text-base px-8 py-4">
              Ver cursos
            </a>
            <a href="#contacto" className="btn-secondary text-base px-8 py-4">
              Contactarnos
            </a>
          </motion.div>

          {/* Stats */}
          {/* <motion.div
            className="flex flex-wrap gap-10 mt-16 pt-10 border-t border-black/10"
            {...fadeUp(0.45)}
          >
            {stats.map((stat) => (
              <div key={stat.label}>
                <p
                  className="text-3xl font-bold"
                  style={{
                    fontFamily: "var(--font-league-spartan)",
                    color: "#ff6634",
                  }}
                >
                  {stat.value}
                </p>
                <p className="text-sm text-gray-500 mt-0.5">{stat.label}</p>
              </div>
            ))}
          </motion.div> */}
        </div>
      </div>

    </section>
  );
}
