// Central site metadata — used by layout metadata, OG image, sitemap,
// robots and JSON-LD so everything stays in sync.

export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL || "https://doodledash.uk"
).replace(/\/$/, "");

export const siteConfig = {
  name: "Doodle Dash Labs",
  shortName: "Doodle Dash",
  url: SITE_URL,
  email: "hello@doodledash.uk",
  title: "Doodle Dash Labs — We Build What's Next",
  tagline: "We Build What's Next",
  description:
    "Doodle Dash Labs is a premium software engineering studio. We design and build web apps, mobile apps, AI agent systems and SaaS platforms end-to-end — from architecture to launch.",
  ogImageAlt:
    "Doodle Dash Labs — premium software & AI product studio. We build web apps, mobile apps, AI agents and SaaS platforms.",
  locale: "en_GB",
  twitter: "@doodledashlabs",
  keywords: [
    "Doodle Dash Labs",
    "software engineering studio",
    "product studio",
    "web app development",
    "mobile app development",
    "AI agent development",
    "AI agents",
    "AI orchestration",
    "RAG pipelines",
    "SaaS development",
    "SaaS platform development",
    "MERN stack development",
    "React Native development",
    "custom software development",
    "full stack development agency",
    "startup software development",
    "software development UK",
    "AI product studio",
  ],
} as const;
