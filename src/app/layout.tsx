import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import PageCinematicTransition from "@/components/PageCinematicTransition";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import TargetCursor from "@/components/ui/TargetCursor";
import JsonLd from "@/components/JsonLd";

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
    template: "%s | Kingsley Umeh"
  },
  description: "Senior Full-Stack Developer specializing in React, Next.js, Node.js, and cutting-edge web technologies. Creating exceptional digital experiences with 4+ years of expertise.",
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
  authors: [{ name: "Kingsley Umeh", url: "https://umeh-kingsley-portfolio.netlify.app/" }],
  creator: "Kingsley Umeh",
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
  alternates: {
    canonical: "https://umeh-kingsley-portfolio.netlify.app/"
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://umeh-kingsley-portfolio.netlify.app/",
    title: "Kingsley Umeh | Senior Full-Stack Developer & Tech Innovator",
    description: "Creating exceptional digital experiences with cutting-edge web technologies. Explore my portfolio of innovative projects and solutions.",
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
    title: "Kingsley Umeh | Senior Full-Stack Developer & Tech Innovator",
    description: "Creating exceptional digital experiences with cutting-edge web technologies. Explore my portfolio of innovative projects and solutions.",
    images: ["/me.jpg"],
    creator: "@lordkign2",
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
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
        <meta name="google-site-verification" content="0nUoGf7qyjKw3SZuwmaKdExiAe2aCQGT4rzxyFfSJwc" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
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
