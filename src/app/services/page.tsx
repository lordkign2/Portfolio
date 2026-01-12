import ServicesClient from './ServicesClient';
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services | Kingsley Umeh - Custom Web Development & Business Packages",
  description: "Professional web development services including custom websites, business packages, and digital solutions designed to grow your business. Full-service development from concept to launch.",
  keywords: [
    "web development services",
    "custom website",
    "business website",
    "SEO",
    "Google Ads",
    "web design",
    "portfolio",
    "Kingsley Umeh",
    "umeh kingsley",
    "digital marketing",
    "conversion optimization",
    "professional website",
    "full-stack development",
    "e-commerce development",
    "API development",
    "database design",
    "cloud solutions",
    "mobile app development",
    "Flutter development",
    "UI/UX design",
    "responsive web design",
    "website maintenance",
    "website optimization",
    "business solutions"
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://umeh-kingsley-portfolio.netlify.app/services",
    title: "Services | Kingsley Umeh - Custom Web Development & Business Packages",
    description: "Professional web development services designed to grow your business and convert visitors into paying customers. Full-service development from concept to launch.",
    siteName: "Kingsley Umeh Portfolio",
    images: [
      {
        url: "/me.jpeg",
        width: 1200,
        height: 630,
        alt: "Kingsley Umeh - Web Development Services Provider",
      },
    ],
    countryName: "Nigeria",
    determiner: "the",
    alternateLocale: ["en-US"]
  },
  twitter: {
    card: "summary_large_image",
    title: "Services | Kingsley Umeh - Custom Web Development & Business Packages",
    description: "Professional web development services designed to grow your business and convert visitors into paying customers. Full-service development from concept to launch.",
    images: ["/me.jpeg"],
    creator: "@lordkign2",
    site: "@lordkign2"
  },
  alternates: {
    canonical: "https://umeh-kingsley-portfolio.netlify.app/services"
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

export default function ServicesPage() {
  return <ServicesClient />;
}