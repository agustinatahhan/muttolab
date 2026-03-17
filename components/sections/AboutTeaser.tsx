import Image from "next/image";
import Link from "next/link";
import AnimateIn from "@/components/ui/AnimateIn";

export default function AboutTeaser() {
  return (
    <section className="bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="flex flex-col items-center gap-10 md:gap-16">

          {/* Photo */}
          {/* <AnimateIn direction="left" className="shrink-0">
            <div className="relative w-28 h-28 md:w-36 md:h-36 rounded-full overflow-hidden ring-4 ring-white shadow-xl">
              <Image
                src="/us/uss.png"
                alt="Muttolab — el equipo"
                fill
                className="object-cover object-top"
                sizes="144px"
              />
            </div>
          </AnimateIn> */}

          {/* Text */}
          <AnimateIn delay={0.1} className="flex-1 text-center md:text-left">
            <span className="text-primary text-xs font-semibold tracking-widest uppercase">
              Quiénes somos
            </span>
            <p
              className="mt-3 text-2xl md:text-3xl font-bold text-black leading-snug "
              style={{ fontFamily: "var(--font-league-spartan)" }}
            >
              Somos madre e hija, y creemos que la tecnología puede estar al alcance de{" "}
              <span style={{ color: "#ff6634" }}>todos</span>.
            </p>
            <p className="mt-4 text-gray-500 text-base ">
              Enseñamos herramientas de inteligencia artificial de forma práctica,
              sin tecnicismos, para que cualquier persona pueda aprovecharlas en su
              trabajo, negocio o vida cotidiana.
            </p>
          </AnimateIn>

          {/* CTA */}
          <AnimateIn delay={0.2} direction="right" className="shrink-0">
            <Link href="/nosotras" className="btn-secondary whitespace-nowrap">
              Conocenos
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </AnimateIn>

        </div>
      </div>
    </section>
  );
}
