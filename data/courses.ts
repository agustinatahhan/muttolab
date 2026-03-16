export interface Course {
  slug: string;
  title: string;
  shortDescription: string;
  description: string;
  image: string;
  contents: string[];
  category: string;
  duration?: string;
  level?: string;
}

export const courses: Course[] = [
  {
    slug: "ia-para-emprendedoras",
    title: "IA para Emprendedores",
    shortDescription:
      "Aprende a usar inteligencia artificial para potenciar tu negocio desde cero, sin conocimientos técnicos.",
    description:
      "Descubrí cómo la inteligencia artificial puede transformar la forma en que gestionás tu negocio. Este curso te enseña a usar herramientas de IA de manera práctica y accesible, desde la generación de contenido hasta la automatización de tareas repetitivas. Diseñado especialmente para emprendedores que quieren aprovechar la tecnología sin necesitar conocimientos técnicos previos.",
    image: "/images/courses/ia-para-emprendedoras.svg",
    contents: [
      "¿Qué es la inteligencia artificial y cómo aplicarla a tu negocio?",
      "ChatGPT y otros asistentes: guía práctica",
      "Generación de contenido para redes sociales con IA",
      "Automatización de respuestas y atención al cliente",
      "Herramientas de diseño con IA: Canva AI, Adobe Firefly",
      "Creación de imágenes con IA para tu marca",
      "Planificación y gestión de proyectos con IA",
      "Casos prácticos de emprendedoras que usan IA",
    ],
    category: "Inteligencia Artificial",
    duration: "6 semanas",
    level: "Principiante",
  },
  {
    slug: "notebooklm-y-productividad",
    title: "NotebookLM y Productividad Digital",
    shortDescription:
      "Dominá NotebookLM y otras herramientas de productividad para organizar tu negocio de forma inteligente.",
    description:
      "NotebookLM es una de las herramientas más poderosas para organizar información y generar conocimiento a partir de tus documentos. En este curso te enseñamos a sacarle el máximo provecho junto con otras herramientas de productividad digital para que puedas gestionar tu emprendimiento de manera más eficiente.",
    image: "/images/courses/notebooklm.svg",
    contents: [
      "Introducción a NotebookLM: qué es y para qué sirve",
      "Cómo cargar y organizar tus documentos",
      "Generación de resúmenes y análisis automáticos",
      "Preguntas y respuestas sobre tus propios documentos",
      "Integración con Google Workspace",
      "Notion para emprendedoras: guía completa",
      "Trello y Asana para gestionar proyectos",
      "Construcción de un sistema de productividad personal",
    ],
    category: "Productividad",
    duration: "4 semanas",
    level: "Principiante",
  },
  {
    slug: "automatizaciones-para-negocios",
    title: "Automatizaciones para tu Negocio",
    shortDescription:
      "Automatizá tareas repetitivas y liberá tiempo para enfocarte en lo que realmente importa de tu negocio.",
    description:
      "Las automatizaciones son la clave para escalar un negocio sin trabajar el doble. En este curso te enseñamos a usar Make (ex Integromat) y otras herramientas para conectar tus aplicaciones y automatizar flujos de trabajo, sin escribir una sola línea de código.",
    image: "/images/courses/automatizaciones.svg",
    contents: [
      "¿Qué son las automatizaciones y por qué las necesitás?",
      "Introducción a Make (ex Integromat)",
      "Zapier: conectá tus apps favoritas",
      "Automatización de email marketing",
      "Gestión automática de leads y clientes",
      "Integración con Instagram y WhatsApp Business",
      "Automatización de reportes y métricas",
      "Proyecto final: diseñá tu sistema de automatización",
    ],
    category: "Automatización",
    duration: "5 semanas",
    level: "Intermedio",
  },
  {
    slug: "pomelli-marketing-con-ia",
    title: "Pomelli: Marketing con IA",
    shortDescription:
      "Usá Pomelli de Google Labs para crear campañas de marketing y contenido visual profesional en minutos, sin ser diseñadora ni redactora.",
    description:
      "Pomelli es una herramienta experimental de inteligencia artificial desarrollada por Google Labs junto a DeepMind, diseñada especialmente para que pequeñas empresas y emprendedores creen campañas de marketing y contenido visual profesional de forma rápida y sencilla. Su magia está en que analiza el sitio web de tu negocio para entender su ADN: colores, estilo y tono de comunicación, y a partir de eso genera imágenes y textos automáticos que realmente representan tu marca. En este curso te enseñamos a sacarle el máximo provecho para que tu negocio se vea tan profesional como el de las grandes marcas, sin necesitar un equipo creativo.",
    image: "/images/courses/pomelli.svg",
    contents: [
      "¿Qué es Pomelli y por qué es un game-changer para pequeños negocios?",
      "Cómo conectar tu sitio web para que Pomelli lea el ADN de tu marca",
      "Generación automática de imágenes alineadas a tu identidad visual",
      "Creación de textos y copies para redes sociales, email y anuncios",
      "Armado de campañas de marketing completas en minutos",
      "Ajuste y personalización del contenido generado",
      "Integración del contenido de Pomelli en tu estrategia de redes",
      "Casos prácticos: antes y después con negocios reales",
    ],
    category: "Google Labs · IA",
    duration: "3 semanas",
    level: "Principiante",
  },
];

export function getCourseBySlug(slug: string): Course | undefined {
  return courses.find((c) => c.slug === slug);
}
