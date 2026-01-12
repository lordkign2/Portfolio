import ContactClient from './ContactClient';
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Kingsley Umeh | Hire Full-Stack Developer - Get Quote",
  description: "Get in touch with Kingsley Umeh, a senior full-stack developer available for freelance projects, collaborations, and consulting opportunities. Receive a custom quote for your web development needs.",
  keywords: [
    "contact",
    "hire developer",
    "freelance",
    "consulting",
    "portfolio",
    "Kingsley Umeh",
    "umeh kingsley",
    "software engineer",
    "React developer",
    "Next.js developer",
    "Node.js developer",
    "web development quote",
    "custom web application",
    "project inquiry",
    "business consultation",
    "development services",
    "hire freelancer",
    "tech support",
    "project collaboration",
    "remote developer",
    "full-stack solutions"
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://umeh-kingsley-portfolio.netlify.app/contact",
    title: "Contact Kingsley Umeh | Hire Full-Stack Developer - Get Quote",
    description: "Get in touch for freelance projects, collaborations, and consulting opportunities. Receive a custom quote for your web development needs.",
    siteName: "Kingsley Umeh Portfolio",
    images: [
      {
        url: "/me.jpeg",
        width: 1200,
        height: 630,
        alt: "Kingsley Umeh - Available for Hire as Full-Stack Developer",
      },
    ],
    countryName: "Nigeria",
    determiner: "the",
    alternateLocale: ["en-US"]
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Kingsley Umeh | Hire Full-Stack Developer - Get Quote",
    description: "Get in touch for freelance projects, collaborations, and consulting opportunities. Receive a custom quote for your web development needs.",
    images: ["/me.jpeg"],
    creator: "@lordkign2",
    site: "@lordkign2"
  },
  alternates: {
    canonical: "https://umeh-kingsley-portfolio.netlify.app/contact"
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

export default function ContactPage() {
  return <ContactClient />;
}