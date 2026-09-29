export const profile = {
  name: "Eric Marès",
  role: "Software Engineer · Full Stack & Applied AI",
  location: "Córdoba, Spain",
  email: "ericmares13@gmail.com",
  linkedin: "https://www.linkedin.com/in/eric-mares-aguilera",
  github: "https://github.com/Sitray",
  cvFilename: "eric-mares-cv.pdf",
};

export const experience = [
  {
    company: "The Knot Worldwide",
    role: "Software Engineer",
    period: "Jul 2024 — Present",
    start: "2024-07",
    end: null,
    description:
      "The Bump — a platform serving millions of monthly active users.",
    accomplishments: [
      "Deliver features end to end across frontend, backend, content, and data, working with Product, Design, Editorial, and Engineering.",
      "Built AI-powered baby-name matching that compares partners’ preferences, identifies shared matches, and offers personalized suggestions using Next.js, TypeScript, Tailwind CSS, Node.js, and the OpenAI API.",
      "Automated recurring operational tasks in internal admin tools, enabling editorial self-service. Saved approximately 2 hours of development and 2 hours of Product validation.",
      "Develop and maintain services and internal tools with React, Fastify, PostgreSQL, and Contentful in a Docker and Kubernetes environment.",
      "Contribute to code reviews and technical decisions across the team.",
    ],
  },
  {
    company: "ALTEN",
    role: "Junior Software Engineer",
    period: "Nov 2022 — Jun 2024",
    start: "2022-11",
    end: "2024-06",
    description: "Client projects for ABB Robotics and PortAventura.",
    accomplishments: [
      "Delivered modules for ABB’s Optifact Suite for industrial automation and automotive applications, including work on ABB Insights and ABB Edge Config Tool.",
      "Built industrial IoT and edge telemetry features with Node.js, React, TypeScript, and GraphQL.",
      "Automated deployment workflows with Docker, Ansible, and GitHub Actions in Azure IoT Edge pipelines.",
      "Developed new React screens for PortAventura.",
    ],
  },
  {
    company: "Wheel Hub",
    role: "Junior Full Stack Developer",
    period: "Feb 2022 — Nov 2022",
    start: "2022-02",
    end: "2022-11",
    description: "Hospital project for the Generalitat de Catalunya.",
    accomplishments: [
      "Developed web interfaces with React, Next.js, and TypeScript, using Sass and Tailwind CSS for styling.",
      "Implemented backend functionality with Node.js and Express, using TypeORM and MySQL for data persistence.",
    ],
  },
];

export const toolkit = [
  { name: "Frontend", items: "React, Next.js, TypeScript, Tailwind CSS, Sass" },
  {
    name: "Backend & data",
    items: "Node.js, Fastify, Express, GraphQL, PostgreSQL, MySQL, TypeORM",
  },
  { name: "AI & content", items: "OpenAI API, Contentful" },
  {
    name: "Infrastructure",
    items: "Docker, Kubernetes, Ansible, GitHub Actions, Azure IoT Edge",
  },
];

export function assetPath(base: string, filename: string) {
  return `${base.replace(/\/$/, "")}/${filename}`;
}
