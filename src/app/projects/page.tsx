import ProjectsClient from './ProjectsClient';
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects | Kingsley Umeh - Full-Stack Development Portfolio",
  description: "Explore Kingsley Umeh's portfolio of web development projects, including React, Next.js, and full-stack applications showcasing cutting-edge technologies and innovative solutions. View live demos and GitHub repositories.",
  keywords: [
    "web development projects",
    "React projects",
    "Next.js projects",
    "full-stack applications",
    "portfolio",
    "Kingsley Umeh",
    "umeh kingsley",
    "software engineering",
    "TypeScript projects",
    "JavaScript projects",
    "Node.js projects",
    "mobile app projects",
    "Flutter projects",
    "frontend projects",
    "backend projects",
    "e-commerce solutions",
    "API development projects",
    "database design projects",
    "cloud solutions",
    "UI/UX projects",
    "responsive web design",
    "custom web applications",
    "innovative solutions",
    "tech showcase"
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://umeh-kingsley-portfolio.netlify.app/projects",
    title: "Projects | Kingsley Umeh - Full-Stack Development Portfolio",
    description: "Explore innovative web development projects built with React, Next.js, Node.js, and cutting-edge technologies. View live demos and GitHub repositories.",
    siteName: "Kingsley Umeh Portfolio",
    images: [
      {
        url: "/me.jpeg",
        width: 1200,
        height: 630,
        alt: "Kingsley Umeh - Full-Stack Development Portfolio",
      },
    ],
    countryName: "Nigeria",
    determiner: "the",
    alternateLocale: ["en-US"]
  },
  twitter: {
    card: "summary_large_image",
    title: "Projects | Kingsley Umeh - Full-Stack Development Portfolio",
    description: "Explore innovative web development projects built with React, Next.js, Node.js, and cutting-edge technologies. View live demos and GitHub repositories.",
    images: ["/me.jpeg"],
    creator: "@lordkign2",
    site: "@lordkign2"
  },
  alternates: {
    canonical: "https://umeh-kingsley-portfolio.netlify.app/projects"
  },
  authors: [{ name: "Kingsley Umeh", url: "https://umeh-kingsley-portfolio.netlify.app/" }],
  publisher: "Kingsley Umeh",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function ProjectsPage() {
  return <ProjectsClient />;
}