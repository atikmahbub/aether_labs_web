import type { Metadata, Viewport } from "next";
import { Archivo, IBM_Plex_Sans, Space_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";

const archivo = Archivo({
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  variable: "--font-head",
});

const ibmPlexSans = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-body",
});

const spaceMono = Space_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-mono",
});

export const metadata: Metadata = {
  title: "Doodle Dash Labs — We Build What's Next",
  description:
    "Premium software engineering studio. We build web apps, mobile apps, AI agent systems and SaaS platforms. End-to-end, from architecture to launch.",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
  openGraph: {
    type: "website",
    title: "Doodle Dash Labs — We Build What's Next",
    description:
      "Premium software engineering studio. We build web apps, mobile apps, AI agent systems and SaaS platforms. End-to-end, from architecture to launch.",
  },
};

export const viewport: Viewport = {
  themeColor: "#F4F6FA",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${archivo.variable} ${ibmPlexSans.variable} ${spaceMono.variable}`}
    >
      <body>
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
