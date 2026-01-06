import ContactClient from './ContactClient';
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Kingsley Umeh | Senior Full-Stack Developer",
  description: "Get in touch with Kingsley Umeh, a senior full-stack developer available for freelance projects, collaborations, and consulting opportunities.",
  keywords: [
    "contact",
    "hire developer",
    "freelance",
    "consulting",
    "portfolio",
    "Kingsley Umeh",
    "software engineer",
    "React developer",
    "Next.js developer",
    "Node.js developer"
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://umeh-kingsley-portfolio.netlify.app/contact",
    title: "Contact Kingsley Umeh | Senior Full-Stack Developer",
    description: "Get in touch for freelance projects, collaborations, and consulting opportunities.",
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
    title: "Contact Kingsley Umeh | Senior Full-Stack Developer",
    description: "Get in touch for freelance projects, collaborations, and consulting opportunities.",
    images: ["/me.jpg"],
    creator: "@lordkign2",
  },
};

export default function ContactPage() {
  return <ContactClient />;
}