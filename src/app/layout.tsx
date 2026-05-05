import { type Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import PageCinematicTransition from "@/components/PageCinematicTransition";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import TargetCursor from "@/components/ui/TargetCursor";
import JsonLd from "@/components/JsonLd";
import EnhancedAnalytics from "@/components/EnhancedAnalytics";
import CookieConsent from "@/components/CookieConsent";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
  preload: true,
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
  preload: false,
});

export const metadata: Metadata = {
  metadataBase: new URL('https://umeh-kingsley-portfolio.netlify.app'),
  title: {
    default: "Kingsley Umeh | Senior Full-Stack Developer & Tech Innovator",
    template: "%s | Kingsley Umeh - Professional Full-Stack Developer"
  },
  description: "Senior Full-Stack Developer specializing in React, Next.js, Node.js, and cutting-edge web technologies. Creating exceptional digital experiences with 4+ years of expertise. Hire expert developers for your next project.",
  // Additional SEO metadata
  other: {
    'msapplication-TileColor': '#ffffff',
    'msapplication-config': '/browserconfig.xml',
    'apple-mobile-web-app-title': 'Kingsley Umeh Portfolio',
    'application-name': 'Kingsley Umeh Portfolio',
    'msapplication-tooltip': 'Professional Full-Stack Developer Portfolio',
    'msapplication-starturl': '/',
    'msapplication-navbutton-color': '#ffffff',
    'apple-mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-status-bar-style': 'default',
    'format-detection': 'telephone=no',
    'mobile-web-app-capable': 'yes',
    'theme-color': '#ffffff',
  },
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
        {/* Preconnect to external domains */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        <link rel="preconnect" href="https://www.google-analytics.com" />
        <link rel="preconnect" href="https://umeh-kingsley-portfolio.netlify.app" />
        
        {/* DNS prefetch for likely navigation */}
        <link rel="dns-prefetch" href="//github.com" />
        <link rel="dns-prefetch" href="//linkedin.com" />
        <link rel="dns-prefetch" href="//twitter.com" />
        
        {/* Critical CSS preload */}
        <link rel="preload" href="/_next/static/css/main.css" as="style" />
        
        {/* Structured Data */}
        <JsonLd />
        
        {/* Enhanced Analytics */}
        <EnhancedAnalytics />
        
        {/* Verification */}
        <meta name="google-site-verification" content="0nUoGf7qyjKw3SZuwmaKdExiAe2aCQGT4rzxyFfSJwc" />
        <meta name="msvalidate.01" content="0nUoGf7qyjKw3SZuwmaKdExiAe2aCQGT4rzxyFfSJwc" />
        <meta name="yandex-verification" content="0nUoGf7qyjKw3SZuwmaKdExiAe2aCQGT4rzxyFfSJwc" />
        
        {/* Additional meta tags for SEO */}
        <meta name="distribution" content="global" />
        <meta name="rating" content="general" />
        <meta name="revisit-after" content="7 days" />
        <meta name="language" content="English" />
        <meta name="geo.region" content="NG-LA" />
        <meta name="geo.placename" content="Lagos" />
        <meta name="geo.position" content="6.5244;3.3792" />
        <meta name="ICBM" content="6.5244, 3.3792" />
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
        <div dangerouslySetInnerHTML={{ __html: JsonLd() }} />
        <EnhancedAnalytics />
        <CookieConsent />
        <Footer />
        <CookieConsent />
      </body>
    </html>
  );
}
