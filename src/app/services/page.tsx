import ServicesClient from './ServicesClient';
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services | Kingsley Umeh - Professional Web Development Solutions",
  description: "Professional web development services including custom websites, business packages, and digital solutions designed to grow your business.",
  keywords: [
    "web development services",
    "custom website",
    "business website",
    "SEO",
    "Google Ads",
    "web design",
    "portfolio",
    "Kingsley Umeh",
    "digital marketing",
    "conversion optimization",
    "professional website"
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://umeh-kingsley-portfolio.netlify.app/services",
    title: "Services | Kingsley Umeh - Professional Web Development Solutions",
    description: "Professional web development services designed to grow your business and convert visitors into paying customers.",
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
    title: "Services | Kingsley Umeh - Professional Web Development Solutions",
    description: "Professional web development services designed to grow your business and convert visitors into paying customers.",
    images: ["/me.jpg"],
    creator: "@lordkign2",
  },
};

export default function ServicesPage() {
  return <ServicesClient />;
}