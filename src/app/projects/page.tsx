import ProjectsClient from './ProjectsClient';
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects | Kingsley Umeh - Senior Full-Stack Developer",
  description: "Explore Kingsley Umeh's portfolio of web development projects, including React, Next.js, and full-stack applications showcasing cutting-edge technologies and innovative solutions.",
  keywords: [
    "web development projects",
    "React projects",
    "Next.js projects",
    "full-stack applications",
    "portfolio",
    "Kingsley Umeh",
    "software engineering",
    "TypeScript projects",
    "JavaScript projects",
    "Node.js projects"
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://umeh-kingsley-portfolio.netlify.app/projects",
    title: "Projects | Kingsley Umeh - Senior Full-Stack Developer",
    description: "Explore innovative web development projects built with React, Next.js, Node.js, and cutting-edge technologies.",
    siteName: "Kingsley Umeh Portfolio",
    images: [
      {
        url: "/me.jpg",
        width: 1200,
        height: 630,
        alt: "Kingsley Umeh - Senior Full-Stack Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Projects | Kingsley Umeh - Senior Full-Stack Developer",
    description: "Explore innovative web development projects built with React, Next.js, Node.js, and cutting-edge technologies.",
    images: ["/me.jpg"],
    creator: "@lordkign2",
  },
};

export default function ProjectsPage() {
  return <ProjectsClient />;
}