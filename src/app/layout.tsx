import { type Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import PageCinematicTransition from "@/components/PageCinematicTransition";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import TargetCursor from "@/components/ui/TargetCursor";
import JsonLd from "@/components/JsonLd";
import GoogleAnalytics from "@/components/GoogleAnalytics";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://umeh-kingsley-portfolio.netlify.app'),
  title: {
    default: "Kingsley Umeh | Senior Full-Stack Developer & Tech Innovator",
    template: "%s | Kingsley Umeh - Professional Full-Stack Developer"
  },
  description: "Senior Full-Stack Developer specializing in React, Next.js, Node.js, and cutting-edge web technologies. Creating exceptional digital experiences with 4+ years of expertise. Hire expert developers for your next project.",
  keywords: [
    "full stack developer",
    "React developer",
    "Next.js developer",
    "Node.js developer",
    "TypeScript developer",
    "web development services",
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
    "Google Ads integration",
    "conversion rate optimization"
  ],
  authors: [{ name: "Kingsley Umeh", url: "https://umeh-kingsley-portfolio.netlify.app/" }],
  creator: "Kingsley Umeh",
  publisher: "Kingsley Umeh",
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://umeh-kingsley-portfolio.netlify.app/"
  },
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
        alt: "Kingsley Umeh - Professional Full-Stack Developer Portfolio",
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
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
  verification: {
    google: '0nUoGf7qyjKw3SZuwmaKdExiAe2aCQGT4rzxyFfSJwc'
  },
  archives: ["https://umeh-kingsley-portfolio.netlify.app/archive"],
  category: "technology",
  classification: "developer portfolio",
  generator: "Next.js",
  referrer: "origin-when-cross-origin",
  themeColor: "#ffffff"
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <JsonLd />
        <GoogleAnalytics />
        <meta name="google-site-verification" content="0nUoGf7qyjKw3SZuwmaKdExiAe2aCQGT4rzxyFfSJwc" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="grain-overlay" />
        <Navbar />
        <div className="hidden md:block">
          <TargetCursor />
        </div>
        <PageCinematicTransition>{children}</PageCinematicTransition>
        <Footer />
      </body>
    </html>
  );
}
