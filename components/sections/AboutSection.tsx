import Image from "next/image";
import AnimateIn from "@/components/ui/AnimateIn";

const tools = [
  "Inteligencia artificial",
  "NotebookLM",
  "Automatizaciones",
  "Productividad digital",
  "Herramientas para negocios",
  "Presencia online",
];

export default function AboutSection() {
  return (
    <section id="sobre-nosotras" className="bg-brand-bg">
      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-center">
          {/* Image */}
          <AnimateIn direction="left" className="order-2 lg:order-1">
            <div className="relative">
              <div className="relative aspect-4/5 max-w-md mx-auto lg:mx-0 rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src="/us/us.JPG"
                  alt="Muttolab - Madre e hija"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
              <div
                className="absolute -bottom-4 -right-4 w-32 h-32 rounded-full -z-10 opacity-60"
                style={{ background: "#ffceeb" }}
                aria-hidden
              />
              <div
                className="absolute -top-4 -left-4 w-20 h-20 rounded-full -z-10 opacity-40"
                style={{ background: "#ff6634" }}
                aria-hidden
              />
            </div>
          </AnimateIn>

          {/* Text */}
          <div className="order-1 lg:order-2">
            <AnimateIn direction="right" delay={0.05}>
              <span className="text-primary text-sm font-semibold tracking-widest uppercase">
                Quiénes somos
              </span>
              <h2 className="section-title mt-3 mb-6">
                Madre e hija,{" "}
                <span style={{ color: "#ff6634" }}>apasionadas</span> por la
                tecnología
              </h2>
            </AnimateIn>

            <AnimateIn direction="right" delay={0.15}>
              <p className="text-gray-600 text-base leading-relaxed mb-4">
                Somos madre e hija trabajando juntas en tecnología, y queremos
                ayudar a{" "}
                <strong className="text-black">mujeres emprendedoras</strong> a
                aprovechar las herramientas digitales para hacer crecer sus
                proyectos.
              </p>
              <p className="text-gray-600 text-base leading-relaxed mb-8">
                Creemos que la tecnología no debería ser una barrera, sino una
                herramienta accesible para todas. Por eso enseñamos de forma
                práctica, sin tecnicismos, con el foco en resultados reales
                para tu negocio.
              </p>
            </AnimateIn>

            <AnimateIn direction="right" delay={0.25}>
              <p className="text-sm font-semibold text-gray-800 mb-4 uppercase tracking-wider">
                Enseñamos
              </p>
              <div className="flex flex-wrap gap-2">
                {tools.map((tool) => (
                  <span
                    key={tool}
                    className="bg-white border border-gray-100 text-gray-700 text-sm px-4 py-1.5 rounded-full shadow-sm"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </AnimateIn>
          </div>
        </div>
      </div>
    </section>
  );
}
