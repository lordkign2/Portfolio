import PortfolioHome from "@/components/PortfolioHome";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    absolute: "Kingsley Umeh | Senior Full-Stack Developer & Tech Innovator",
    template: "%s | Kingsley Umeh - Professional Full-Stack Developer"
  },
  description: "Welcome to the portfolio of Kingsley Umeh, a senior full-stack developer with 4+ years of experience creating exceptional digital experiences with React, Next.js, Node.js, and cutting-edge web technologies. Hire expert developers for your project.",
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
    "hire developer",
    "freelance developer",
    "custom web applications",
    "e-commerce development",
    "API development",
    "database design",
    "cloud solutions",
    "UI/UX design",
    "SEO optimization",
    "responsive web design",
    "tech innovator"
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://umeh-kingsley-portfolio.netlify.app/",
    title: "Kingsley Umeh | Senior Full-Stack Developer & Tech Innovator",
    description: "Professional full-stack development services specializing in React, Next.js, Node.js, and cutting-edge web technologies. Hire expert developers for your project.",
    siteName: "Kingsley Umeh Portfolio",
    images: [
      {
        url: "/me.jpeg",
        width: 1200,
        height: 630,
        alt: "Kingsley Umeh - Professional Full-Stack Developer",
      },
    ],
    countryName: "Nigeria",
    determiner: "the",
    alternateLocale: ["en-US"]
  },
  twitter: {
    card: "summary_large_image",
    title: "Kingsley Umeh | Senior Full-Stack Developer & Tech Innovator",
    description: "Professional full-stack development services specializing in React, Next.js, Node.js, and cutting-edge web technologies. Hire expert developers for your project.",
    images: ["/me.jpeg"],
    creator: "@lordkign2",
    site: "@lordkign2"
  },
  alternates: {
    canonical: "https://umeh-kingsley-portfolio.netlify.app/"
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

export default function Home() {
  return <PortfolioHome />;
}