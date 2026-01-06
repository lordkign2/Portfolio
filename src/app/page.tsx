import PortfolioHome from "@/components/PortfolioHome";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kingsley Umeh | Senior Full-Stack Developer & Tech Innovator",
  description: "Welcome to the portfolio of Kingsley Umeh, a senior full-stack developer with 4+ years of experience creating exceptional digital experiences with React, Next.js, Node.js, and cutting-edge web technologies.",
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
    "Web Applications",
    "Tech Innovator"
  ],
  openGraph: {
    title: "Kingsley Umeh | Senior Full-Stack Developer & Tech Innovator",
    description: "Creating exceptional digital experiences with cutting-edge web technologies. Explore my portfolio of innovative projects and solutions.",
    url: "https://umeh-kingsley-portfolio.netlify.app/",
    siteName: "Kingsley Umeh Portfolio",
    images: [
      {
        url: "/me.jpg",
        width: 1200,
        height: 630,
        alt: "Kingsley Umeh - Senior Full-Stack Developer",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kingsley Umeh | Senior Full-Stack Developer & Tech Innovator",
    description: "Creating exceptional digital experiences with cutting-edge web technologies. Explore my portfolio of innovative projects and solutions.",
    images: ["/me.jpg"],
    creator: "@lordkign2",
  },
};

export default function Home() {
  return <PortfolioHome />;
}