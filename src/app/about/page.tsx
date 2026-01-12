import AboutClient from './AboutClient';
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Kingsley Umeh | Senior Full-Stack Developer Experience & Skills",
  description: "Learn more about Kingsley Umeh, a senior full-stack developer with 4+ years of experience building scalable web applications and mobile apps using cutting-edge technologies. Discover my expertise in React, Next.js, Node.js, and more.",
  keywords: [
    "full stack developer",
    "React developer",
    "Next.js developer",
    "Node.js developer",
    "TypeScript developer",
    "web development",
    "mobile app development",
    "Flutter developer",
    "frontend developer",
    "backend developer",
    "software engineer",
    "portfolio",
    "Kingsley Umeh",
    "umeh kingsley",
    "hire developer",
    "freelance developer",
    "developer experience",
    "coding skills",
    "programming expertise",
    "software development",
    "tech background",
    "career profile",
    "technical skills",
    "development experience"
  ],
  openGraph: {
    type: "profile",
    locale: "en_US",
    url: "https://umeh-kingsley-portfolio.netlify.app/about",
    title: "About Kingsley Umeh | Senior Full-Stack Developer Experience & Skills",
    description: "Professional profile of Kingsley Umeh, senior full-stack developer with 4+ years of experience. Specializing in React, Next.js, Node.js, and cutting-edge web technologies.",
    siteName: "Kingsley Umeh Portfolio",
    images: [
      {
        url: "/me.jpeg",
        width: 1200,
        height: 630,
        alt: "Kingsley Umeh - Professional Full-Stack Developer Profile",
      },
    ],
    countryName: "Nigeria",
    determiner: "the",
    alternateLocale: ["en-US"]
  },
  twitter: {
    card: "summary_large_image",
    title: "About Kingsley Umeh | Senior Full-Stack Developer Experience & Skills",
    description: "Professional profile of Kingsley Umeh, senior full-stack developer with 4+ years of experience. Specializing in React, Next.js, Node.js, and cutting-edge web technologies.",
    images: ["/me.jpeg"],
    creator: "@lordkign2",
    site: "@lordkign2"
  },
  alternates: {
    canonical: "https://umeh-kingsley-portfolio.netlify.app/about"
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

export default function AboutPage() {
  return <AboutClient />;
}