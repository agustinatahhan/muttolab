export interface UseCaseItem {
  icon: string;
  title: string;
  description: string;
}

export interface BundleModule {
  week: string;
  title: string;
  description: string;
}

export interface Course {
  slug: string;
  title: string;
  subtitle: string;
  shortDescription: string;
  description: string;
  image: string;
  category: string;
  format: string;
  durationHours: string;
  level: string;
  price: number;
  /** Price without bundle (used for bundles to show savings) */
  originalPrice?: number;
  isBundle?: boolean;
  bundleModules?: BundleModule[];
  /** What participants get when buying the bundle */
  bundleTakeaways?: string[];
  contents?: string[];
  useCases?: UseCaseItem[];
  targetAudience: string[];
  requirements: string;
  groupSize: string;
  importantNote?: string;
}

export const courses: Course[] = [
  /* ─────────────────────────────────────────────────────
     CURSO 1 · IA para emprendedores
  ───────────────────────────────────────────────────── */
  {
    slug: "ia-para-emprendedores",
    title: "IA para emprendedores: tu nuevo equipo de trabajo",
    subtitle: "Taller presencial · 3 hs · Nivel inicial",
    shortDescription:
      "Aprendé a usar ChatGPT, Claude y Gemini para hacer crecer tu negocio — sin saber de tecnología. Practicá en vivo con ejemplos reales de tu emprendimiento.",
    description: `¿Y si la inteligencia artificial pudiera trabajar para vos?

Este taller presencial está diseñado para cualquier persona que quiera empezar a usar la IA sin sentirse perdida: emprendedores, profesionales, docentes o cualquiera que quiera ahorrar tiempo. Sin tecnicismos, sin complicaciones — con ejemplos concretos y mucha práctica.

Vas a conocer las tres herramientas de IA más usadas hoy: ChatGPT, Claude y Gemini. Vamos a ver en vivo para qué sirve cada una, en qué se diferencian y cuál puede ser tu mejor aliada según lo que hacés.

Arrancamos juntos con una introducción práctica donde mostramos ejemplos reales en pantalla. Después hay una pausa para distender, y en la segunda parte sos vos el protagonista: practicás con un caso de tu propio negocio o trabajo, con acompañamiento en todo momento.`,
    image: "/images/courses/ia-para-emprendedoras.svg",
    category: "Inteligencia Artificial",
    format: "Presencial",
    durationHours: "3 hs",
    level: "Inicial",
    price: 70000,
    targetAudience: [
      "Escuchás hablar de IA pero no sabés por dónde empezar",
      "Querés ahorrar tiempo en tu negocio o trabajo",
      "Preferís aprender haciendo, no solo escuchando",
    ],
    useCases: [
      {
        icon: "💬",
        title: "Chatear con IA como si fuera tu asistente personal",
        description:
          "Aprendés a hacerle preguntas precisas a ChatGPT, Claude o Gemini para que te ayude a redactar emails, preparar reuniones, responder clientes o resolver problemas del día a día.",
      },
      {
        icon: "📊",
        title: "Analizar planillas, Excel o datos de tu negocio",
        description:
          "Subís una planilla de ventas o gastos y la IA te genera tablas comparativas, gráficos, resúmenes y conclusiones en segundos — sin saber una fórmula.",
      },
      {
        icon: "✍️",
        title: "Generar contenido para redes y comunicaciones",
        description:
          "Creás posts para Instagram, descripciones de productos, newsletters o mensajes de WhatsApp en el tono de tu marca, en segundos y sin bloqueo creativo.",
      },
      {
        icon: "🔍",
        title: "Investigar temas o competencia en minutos",
        description:
          "Le pedís a la IA que investigue un mercado, resuma tendencias o compare competidores — y te devuelve un informe listo para usar, no 40 tabs abiertos.",
      },
      {
        icon: "📝",
        title: "Redactar presupuestos, propuestas y contratos",
        description:
          "Describís tu servicio y la IA arma el borrador de una propuesta comercial, presupuesto o contrato básico que después solo ajustás a tu medida.",
      },
      {
        icon: "🎯",
        title: "Planificar proyectos y organizar tareas",
        description:
          "Le contás tu proyecto a la IA y te devuelve un plan de acción con pasos, fechas y prioridades — como tener un project manager propio.",
      },
    ],
    requirements: "Solo necesitás traer tu notebook",
    groupSize: "Grupos pequeños para atención personalizada",
  },

  /* ─────────────────────────────────────────────────────
     CURSO 2 · NotebookLM
  ───────────────────────────────────────────────────── */
  {
    slug: "notebooklm-cerebro-digital",
    title: "NotebookLM: tu cerebro digital para leer menos y entender más",
    subtitle: "Taller presencial · 3 hs · Nivel inicial",
    shortDescription:
      "Aprendé a usar NotebookLM para resumir documentos, analizar información y sacarle el jugo a cualquier material — en minutos. Practicá en vivo con tus propios archivos.",
    description: `¿Tenés documentos acumulados que nunca terminás de leer?

NotebookLM es una herramienta de Google que convierte cualquier documento, PDF, presentación o página web en una fuente de conocimiento interactiva. Le hacés preguntas, te hace resúmenes, te ayuda a conectar ideas — y en este taller vas a aprender a usarla desde cero.

Vamos a recorrer juntos todo lo que NotebookLM puede hacer: cómo cargar tus materiales, cómo interrogarlos con precisión, cómo generar resúmenes útiles y cómo usarlo para preparar informes, reuniones o presentaciones en mucho menos tiempo.

La primera parte es una demostración en vivo con casos reales. Después hay una pausa, y en la segunda parte cada participante trabaja con sus propios documentos y necesidades concretas, con acompañamiento durante todo el proceso.

"Ya seas profesional, mamá, papá o docente — NotebookLM se adapta a lo que necesitás."`,
    image: "/images/courses/notebooklm.svg",
    category: "Productividad · IA",
    format: "Presencial",
    durationHours: "3 hs",
    level: "Inicial",
    price: 70000,
    useCases: [
      {
        icon: "📄",
        title: "Contratos y documentos legales",
        description:
          "Subís el PDF y le preguntás cuáles son las cláusulas más importantes — en segundos tenés un resumen claro sin leer 40 páginas.",
      },
      {
        icon: "📊",
        title: "Informes y reportes",
        description:
          "Cargás varios archivos y NotebookLM los cruza, encuentra patrones y te ayuda a redactar conclusiones.",
      },
      {
        icon: "🎓",
        title: "Capacitarte o estudiar algo nuevo",
        description:
          "Subís apuntes, libros o artículos y le pedís que te explique los conceptos clave como si fuera tu propio tutor.",
      },
      {
        icon: "🎙️",
        title: "Audio y video",
        description:
          "Podés subir transcripciones y convertirlas en resúmenes accionables para no perder ninguna idea importante.",
      },
      {
        icon: "📝",
        title: "Reuniones frecuentes",
        description:
          "Cargás las notas o actas anteriores y le preguntás: ¿qué quedó pendiente del mes pasado? — NotebookLM te responde al instante.",
      },
      {
        icon: "🧒",
        title: "Hijos en la escuela o universidad",
        description:
          "Subís los apuntes y NotebookLM genera un mapa conceptual, explica temas difíciles con palabras simples, o crea un podcast de audio para que estudien escuchando.",
      },
      {
        icon: "👩‍🏫",
        title: "Docentes",
        description:
          "Subís el contenido de tu materia y NotebookLM genera pruebas, guías de estudio, resúmenes por tema o actividades — todo en minutos con el lenguaje de tus propios materiales.",
      },
    ],
    targetAudience: [
      "Trabajás con mucha información y necesitás procesarla más rápido",
      "Querés preparar reuniones, informes o presentaciones con menos esfuerzo",
      "Querés ayudar a tus hijos a estudiar de una forma diferente",
      "Sos docente y querés optimizar la preparación de tus clases",
      "Nunca usaste NotebookLM pero te genera curiosidad",
    ],
    requirements:
      "Traé tu notebook con los documentos que usés en tu trabajo o en tu día a día",
    groupSize: "Grupos pequeños para atención personalizada",
  },

  /* ─────────────────────────────────────────────────────
     CURSO 3 · Pomelli
  ───────────────────────────────────────────────────── */
  {
    slug: "pomelli-marketing-con-ia",
    title: "Pomelli: campañas de marketing profesionales con un solo clic",
    subtitle: "Taller presencial · 2 a 4 hs · Nivel inicial",
    shortDescription:
      "Aprendé a usar la herramienta gratuita de Google que analiza tu negocio y genera campañas visuales listas para publicar — sin diseñadores, sin agencias. Practicá en vivo con tu propia marca.",
    description: `¿Y si tu sitio web pudiera crear tus campañas de marketing solo?

Pomelli es una herramienta experimental de Google Labs y Google DeepMind que ayuda a pequeñas y medianas empresas a generar campañas en redes sociales que mantienen la identidad de su marca. Es gratuita, no necesitás saber diseño, y en este taller vas a aprender a sacarle el máximo provecho.

Pomelli funciona en tres pasos: primero analiza tu sitio web e imágenes para crear un perfil llamado "Business DNA" que incluye tu tono de voz, paleta de colores, tipografías y estilo visual. Luego sugiere ideas de campañas basadas en ese perfil. Por último, genera los materiales de marketing que podés editar antes de descargar.

La primera parte es una demostración en vivo con casos reales. Después hay una pausa, y en la segunda parte cada participante trabaja con su propia marca o negocio, generando su primera campaña real con acompañamiento en todo momento.`,
    image: "/images/courses/pomelli.svg",
    category: "Google Labs · IA",
    format: "Presencial",
    durationHours: "2 a 4 hs",
    level: "Inicial",
    price: 80000,
    useCases: [
      {
        icon: "📱",
        title: "Gestión de redes sociales",
        description:
          "Ingresás tu sitio web y Pomelli genera posts para Instagram, Facebook y LinkedIn con tus colores, tu tipografía y tu tono — listos para publicar.",
      },
      {
        icon: "🎨",
        title: "Sin diseñador ni agencia",
        description:
          "Pomelli combina textos, imágenes y variaciones de layout con coherencia de marca, sin necesidad de empezar desde cero cada vez.",
      },
      {
        icon: "📸",
        title: "Fotos profesionales de productos",
        description:
          "Con la función Photoshoot podés convertir fotos de tus productos en imágenes de calidad profesional de estudio, ideales para tu sitio y tus redes.",
      },
      {
        icon: "🎬",
        title: "Contenido en video",
        description:
          "Con Pomelli Animate podés transformar tu contenido estático en animaciones de video con un solo clic.",
      },
      {
        icon: "⚡",
        title: "Consistencia sin esfuerzo",
        description:
          "Todas las piezas que genera Pomelli respetan automáticamente tu identidad visual — sin copiar y pegar colores, sin buscar el logo cada vez.",
      },
    ],
    targetAudience: [
      "Querés crear contenido para redes sin depender de un diseñador",
      "Necesitás más consistencia visual en tu marca",
      "Querés producir campañas en minutos en lugar de días",
      "Nunca usaste Pomelli pero te genera curiosidad",
    ],
    requirements: "Traé tu notebook y la URL de tu sitio web o redes sociales",
    groupSize: "Grupos pequeños para atención personalizada",
    importantNote:
      "Pomelli está actualmente disponible en inglés y en beta para algunos países. En el taller te enseñamos cómo acceder y usarlo sin problema desde cualquier lugar.",
  },

  /* ─────────────────────────────────────────────────────
     BUNDLE · Programa Completo de IA
  ───────────────────────────────────────────────────── */
  {
    slug: "programa-completo-ia",
    title: "Programa Completo de IA: 3 talleres, 3 semanas",
    subtitle: "Presencial · 3 módulos · Nivel inicial",
    shortDescription:
      "Dominá las herramientas de IA más potentes del momento en un programa completo de 3 semanas. Un módulo por semana, todo desde cero, con práctica real desde el primer día.",
    description: `¿Por qué hacer los 3 talleres juntos?

Porque la IA no es una sola herramienta — es un ecosistema. Cada módulo de este programa te da una habilidad distinta que se complementa con las otras, y juntas transforman la manera en que trabajás.

Este programa está pensado para cualquier persona que quiera dominar las herramientas de IA más relevantes del momento: emprendedores, profesionales, docentes, padres y madres, o cualquiera que quiera que la tecnología trabaje para ellos.`,
    image: "/images/courses/bundle-ia.svg",
    category: "Programa Completo",
    format: "Presencial",
    durationHours: "3 módulos",
    level: "Inicial",
    price: 190000,
    originalPrice: 220000,
    isBundle: true,
    bundleModules: [
      {
        week: "Semana 1",
        title: "Introducción a la IA",
        description:
          "Conocés ChatGPT, Claude y Gemini. Entendés para qué sirve cada uno, los probás en vivo y encontrás cuál se adapta mejor a lo que hacés.",
      },
      {
        week: "Semana 2",
        title: "NotebookLM",
        description:
          "Aprendés a convertir cualquier documento, PDF o apunte en una fuente de conocimiento interactiva. Ideal para el trabajo, para tus hijos y para preparar clases si sos docente.",
      },
      {
        week: "Semana 3",
        title: "Pomelli",
        description:
          "Generás campañas de marketing completas y con la identidad visual de tu marca — sin diseñadores, sin agencias, en minutos.",
      },
    ],
    bundleTakeaways: [
      "Manejo práctico de 5 herramientas de IA",
      "Ejemplos reales aplicados a tu trabajo o negocio",
      "Tiempo libre que hoy perdés en tareas repetitivas",
      "La confianza de saber que la tecnología trabaja para vos",
    ],
    targetAudience: [
      "Querés empezar a usar IA de forma práctica y sin rodeos",
      "Preferís aprender en grupo, con acompañamiento real",
      "Querés aplicarlo a tu trabajo, tu negocio o tu vida cotidiana",
    ],
    requirements: "Solo necesitás traer tu notebook",
    groupSize: "Grupos reducidos de hasta 8 personas",
  },
];

export function getCourseBySlug(slug: string): Course | undefined {
  return courses.find((c) => c.slug === slug);
}

export function formatPrice(price: number): string {
  return `$${price.toLocaleString("es-AR")}`;
}
