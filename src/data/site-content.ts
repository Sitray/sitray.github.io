import { experience, profile, toolkit } from "./profile";

export const locales = ["en", "es"] as const;
export type Locale = (typeof locales)[number];

type LocalizedJob = {
  role: string;
  description: string;
  accomplishments: string[];
};

type SiteContent = {
  lang: Locale;
  localeName: string;
  title: string;
  description: string;
  location: string;
  role: string;
  skipLink: string;
  wordmarkLabel: string;
  navigationLabel: string;
  languageNavigationLabel: string;
  nav: {
    experience: string;
    contact: string;
    cv: string;
  };
  cv: {
    download: string;
    downloadLabel: string;
    documentLanguage: string;
  };
  heroSummary: string;
  /** Exact substrings of heroSummary rendered as emphasized proof. */
  heroHighlights: string[];
  experienceYears: (years: number) => string;
  contactCta: string;
  present: string;
  remote: string;
  sections: {
    experience: string;
    skills: string;
    education: string;
    languages: string;
    contact: string;
  };
  jobs: LocalizedJob[];
  toolkitLabels: string[];
  education: {
    qualification: string;
    additionalLearning: string;
  };
  languages: Array<{ name: string; proficiency: string }>;
  footerBackToTop: string;
};

export const siteContent: Record<Locale, SiteContent> = {
  en: {
    lang: "en",
    localeName: "English",
    title: `${profile.name} — ${profile.role}`,
    description:
      "Eric Marès — Software Engineer in Córdoba, Spain. Full-stack development and applied AI with TypeScript, React, Next.js, and Node.js. Experience at The Knot Worldwide, ALTEN, and Wheel Hub.",
    location: profile.location,
    role: profile.role,
    skipLink: "Skip to content",
    wordmarkLabel: `${profile.name}, back to top`,
    navigationLabel: "Main navigation",
    languageNavigationLabel: "Language selection",
    nav: {
      experience: "Experience",
      contact: "Contact",
      cv: "CV",
    },
    cv: {
      download: "Download CV",
      downloadLabel: "Download CV (PDF)",
      documentLanguage: "PDF",
    },
    heroSummary:
      "I build AI-powered product features that ship to production. At The Knot Worldwide, I built personalized baby-name matching with the OpenAI API for The Bump, a platform serving millions of monthly active users, on a full-stack foundation of TypeScript, React, Next.js, and Node.js.",
    heroHighlights: ["OpenAI API", "millions of monthly active users"],
    experienceYears: (years) => `${years}+ years of experience`,
    contactCta: "Contact me",
    present: "Present",
    remote: "Fully remote",
    sections: {
      experience: "Experience",
      skills: "Skills",
      education: "Education",
      languages: "Languages",
      contact: "Contact",
    },
    jobs: [
      {
        role: experience[0].role,
        description: experience[0].description,
        accomplishments: experience[0].accomplishments,
      },
      {
        role: experience[1].role,
        description: experience[1].description,
        accomplishments: experience[1].accomplishments,
      },
      {
        role: experience[2].role,
        description: experience[2].description,
        accomplishments: experience[2].accomplishments,
      },
    ],
    toolkitLabels: toolkit.map((group) => group.name),
    education: {
      qualification: "Multiplatform Application Development",
      additionalLearning: "Additional learning: React Native — The Practical Guide",
    },
    languages: [
      { name: "Catalan & Spanish", proficiency: "Native" },
      { name: "English", proficiency: "Professional working proficiency" },
    ],
    footerBackToTop: "Back to top",
  },
  es: {
    lang: "es",
    localeName: "Español",
    title: "Eric Marès — Ingeniero de software · Full Stack e IA aplicada",
    description:
      "Eric Marès — Ingeniero de software en Córdoba, España. Desarrollo full stack e IA aplicada con TypeScript, React, Next.js y Node.js. Experiencia en The Knot Worldwide, ALTEN y Wheel Hub.",
    location: "Córdoba, España",
    role: "Ingeniero de software · Full Stack e IA aplicada",
    skipLink: "Ir al contenido",
    wordmarkLabel: `${profile.name}, volver al inicio`,
    navigationLabel: "Navegación principal",
    languageNavigationLabel: "Selección de idioma",
    nav: {
      experience: "Experiencia",
      contact: "Contacto",
      cv: "CV en inglés",
    },
    cv: {
      download: "Descargar CV en inglés",
      downloadLabel: "Descargar CV en inglés (PDF)",
      documentLanguage: "PDF en inglés",
    },
    heroSummary:
      "Construyo funcionalidades de producto con IA que llegan a producción. En The Knot Worldwide creé la búsqueda personalizada de nombres de bebé con la API de OpenAI para The Bump, una plataforma con millones de usuarios activos mensuales, sobre una base full stack de TypeScript, React, Next.js y Node.js.",
    heroHighlights: ["API de OpenAI", "millones de usuarios activos mensuales"],
    experienceYears: (years) => `Más de ${years} años de experiencia`,
    contactCta: "Contactar",
    present: "Actualidad",
    remote: "Totalmente remoto",
    sections: {
      experience: "Experiencia",
      skills: "Habilidades",
      education: "Formación",
      languages: "Idiomas",
      contact: "Contacto",
    },
    jobs: [
      {
        role: "Ingeniero de software",
        description:
          "The Bump — una plataforma que presta servicio a millones de usuarios activos mensuales.",
        accomplishments: [
          "Creé una funcionalidad de búsqueda de nombres de bebé con IA que compara las preferencias de las parejas, identifica coincidencias y ofrece sugerencias personalizadas con Next.js, TypeScript, Tailwind CSS, Node.js y la API de OpenAI.",
          "Desarrollo funcionalidades de principio a fin en frontend, backend, contenido y datos, colaborando con Producto, Diseño, Editorial e Ingeniería.",
          "Automaticé tareas operativas recurrentes en herramientas internas de administración, permitiendo el autoservicio del equipo editorial. Se ahorraron aproximadamente 2 horas de desarrollo y 2 horas de validación de Producto.",
          "Desarrollo y mantengo servicios y herramientas internas con React, Fastify, PostgreSQL y Contentful en un entorno de Docker y Kubernetes.",
          "Participo en revisiones de código y decisiones técnicas del equipo.",
        ],
      },
      {
        role: "Ingeniero de software júnior",
        description: "Proyectos para ABB Robotics y PortAventura.",
        accomplishments: [
          "Desarrollé módulos para Optifact Suite de ABB, una solución de automatización industrial y aplicaciones de automoción, incluido trabajo en ABB Insights y ABB Edge Config Tool.",
          "Creé funcionalidades industriales de IoT y telemetría edge con Node.js, React, TypeScript y GraphQL.",
          "Automaticé flujos de despliegue con Docker, Ansible y GitHub Actions en canalizaciones de Azure IoT Edge.",
          "Desarrollé nuevas pantallas en React para PortAventura.",
        ],
      },
      {
        role: "Desarrollador full stack júnior",
        description: "Proyecto hospitalario para la Generalitat de Catalunya.",
        accomplishments: [
          "Desarrollé interfaces web con React, Next.js y TypeScript, utilizando Sass y Tailwind CSS para los estilos.",
          "Implementé funcionalidades de backend con Node.js y Express, utilizando TypeORM y MySQL para la persistencia de datos.",
        ],
      },
    ],
    toolkitLabels: ["IA y contenido", "Frontend", "Backend y datos", "Infraestructura"],
    education: {
      qualification: "Desarrollo de Aplicaciones Multiplataforma",
      additionalLearning: "Formación adicional: React Native — The Practical Guide",
    },
    languages: [
      { name: "Catalán y español", proficiency: "Nativo" },
      { name: "Inglés", proficiency: "Competencia profesional" },
    ],
    footerBackToTop: "Volver al inicio",
  },
};

export function formatMonth(isoDate: string, locale: Locale) {
  const [year, month] = isoDate.split("-");
  const monthIndex = Number(month) - 1;
  const monthNames = {
    en: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    es: [
      "ene.",
      "feb.",
      "mar.",
      "abr.",
      "may.",
      "jun.",
      "jul.",
      "ago.",
      "sept.",
      "oct.",
      "nov.",
      "dic.",
    ],
  } as const;

  return locale === "es"
    ? `${monthNames.es[monthIndex]} de ${year}`
    : `${monthNames.en[monthIndex]} ${year}`;
}

/** Splits text into plain and highlighted segments, in order. */
export function splitHighlights(text: string, phrases: readonly string[]) {
  const segments: Array<{ text: string; highlight: boolean }> = [];
  const pattern = phrases
    .filter(Boolean)
    .map((phrase) => phrase.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"))
    .join("|");
  if (!pattern) return [{ text, highlight: false }];
  let cursor = 0;
  for (const match of text.matchAll(new RegExp(pattern, "g"))) {
    const index = match.index ?? 0;
    if (index > cursor)
      segments.push({ text: text.slice(cursor, index), highlight: false });
    segments.push({ text: match[0], highlight: true });
    cursor = index + match[0].length;
  }
  if (cursor < text.length)
    segments.push({ text: text.slice(cursor), highlight: false });
  return segments;
}
