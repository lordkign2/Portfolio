import AboutClient from './AboutClient';
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Kingsley Umeh | Senior Full-Stack Developer",
  description: "Learn more about Kingsley Umeh, a senior full-stack developer with 4+ years of experience building scalable web applications and mobile apps using cutting-edge technologies.",
  keywords: [
    "web development",
    "full-stack developer",
    "React",
    "Next.js",
    "portfolio",
    "Kingsley Umeh",
    "software engineer",
    "TypeScript",
    "JavaScript",
    "Node.js",
    "Frontend",
    "Backend",
    "Web Applications"
  ],
  openGraph: {
    type: "profile",
    locale: "en_US",
    url: "https://umeh-kingsley-portfolio.netlify.app/about",
    title: "About Kingsley Umeh | Senior Full-Stack Developer",
    description: "Senior Full-Stack Developer with 4+ years of experience. Specializing in React, Next.js, Node.js, and cutting-edge web technologies.",
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
    title: "About Kingsley Umeh | Senior Full-Stack Developer",
    description: "Senior Full-Stack Developer with 4+ years of experience. Specializing in React, Next.js, Node.js, and cutting-edge web technologies.",
    images: ["/me.jpg"],
    creator: "@lordkign2",
  },
};

export default function AboutPage() {
  return <AboutClient />;
}