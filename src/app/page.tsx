import PortfolioHome from "@/components/PortfolioHome";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    absolute: "Kingsley Umeh | Full-Stack Engineer for Marketplaces & RBAC Systems",
    template: "%s | Kingsley Umeh - Full-Stack Engineer"
  },
  description: "Full-stack engineer specializing in scalable marketplace systems, admin dashboards, and role-based architectures using React, Node.js, and MongoDB.",
  keywords: [
    "full stack engineer",
    "marketplace systems engineer",
    "RBAC implementation",
    "admin dashboard developer",
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
    "tech innovator",
    "MongoDB architect",
    "REST API architecture"
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://umeh-kingsley-portfolio.netlify.app/",
    title: "Kingsley Umeh | Full-Stack Engineer for Marketplaces & RBAC Systems",
    description: "Engineering scalable marketplace systems and internal tools with React, Node.js, MongoDB, and role-based access control.",
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
    title: "Kingsley Umeh | Full-Stack Engineer for Marketplaces & RBAC Systems",
    description: "Engineering scalable marketplace systems and internal tools with React, Node.js, MongoDB, and role-based access control.",
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