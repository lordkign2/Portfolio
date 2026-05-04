import { NextResponse } from 'next/server';

// RSS feed data - in a real app, this would come from a CMS or database
const portfolioUpdates = [
  {
    title: "AI Task Manager - Complete Project Case Study",
    description: "Explore the development of an AI-powered task management application with intelligent scheduling and productivity features. Built with React, Node.js, and machine learning APIs.",
    link: "https://umeh-kingsley-portfolio.netlify.app/case-studies/ai-task-manager",
    pubDate: "Mon, 15 Jan 2024 10:00:00 GMT",
    guid: "ai-task-manager-2024-01-15",
    category: "Web Development"
  },
  {
    title: "City Explorer Platform - Location-Based Services",
    description: "Discover how I built a comprehensive city exploration platform with real-time data, interactive maps, and user-generated content. Features React Native mobile app and web dashboard.",
    link: "https://umeh-kingsley-portfolio.netlify.app/case-studies/city-explorer-platform",
    pubDate: "Wed, 10 Jan 2024 14:30:00 GMT",
    guid: "city-explorer-2024-01-10",
    category: "Mobile Development"
  },
  {
    title: "Freelancer's Pricing Guide - Dynamic Pricing Tool",
    description: "A sophisticated pricing calculator designed for freelancers with market analysis, competitor insights, and intelligent pricing recommendations. Built with Next.js and advanced analytics.",
    link: "https://umeh-kingsley-portfolio.netlify.app/case-studies/freelancers-pricing-guide",
    pubDate: "Fri, 12 Jan 2024 09:15:00 GMT",
    guid: "freelancer-pricing-2024-01-12",
    category: "SaaS Development"
  },
  {
    title: "Housing Waitlist Platform - Real Estate Solution",
    description: "Complete real estate waitlist management system with automated notifications, document processing, and CRM integration. Scalable architecture supporting thousands of users.",
    link: "https://umeh-kingsley-portfolio.netlify.app/case-studies/housing-waitlist-platform",
    pubDate: "Mon, 08 Jan 2024 16:45:00 GMT",
    guid: "housing-waitlist-2024-01-08",
    category: "Real Estate Tech"
  },
  {
    title: "MIL Hub - Military Resource Platform",
    description: "Comprehensive resource management platform for military personnel with secure authentication, document management, and integrated communication tools.",
    link: "https://umeh-kingsley-portfolio.netlify.app/case-studies/mil-hub",
    pubDate: "Fri, 05 Jan 2024 11:20:00 GMT",
    guid: "mil-hub-2024-01-05",
    category: "Enterprise Software"
  },
  {
    title: "Palette Pigeon UI Kit - Design System",
    description: "Comprehensive UI component library with 50+ reusable components, theme system, and accessibility features. Optimized for performance and developer experience.",
    link: "https://umeh-kingsley-portfolio.netlify.app/case-studies/palette-pigeon-ui-kit",
    pubDate: "Sun, 14 Jan 2024 13:00:00 GMT",
    guid: "palette-pigeon-2024-01-14",
    category: "UI/UX Design"
  },
  {
    title: "Personal Portfolio Website - Advanced SEO & Analytics",
    description: "State-of-the-art portfolio website with advanced SEO optimization, Google Analytics 4 integration, and performance optimization. Showcasing modern web development best practices.",
    link: "https://umeh-kingsley-portfolio.netlify.app/case-studies/personal-portfolio-website",
    pubDate: "Sat, 20 Jan 2024 10:30:00 GMT",
    guid: "personal-portfolio-2024-01-20",
    category: "Portfolio Development"
  },
  {
    title: "Starnumx Technology Website - Corporate Platform",
    description: "Modern corporate website for technology company with content management, blog functionality, and lead generation features. Optimized for conversions and user engagement.",
    link: "https://umeh-kingsley-portfolio.netlify.app/case-studies/starnumx-technology-website",
    pubDate: "Thu, 18 Jan 2024 15:00:00 GMT",
    guid: "starnumx-tech-2024-01-18",
    category: "Corporate Web Development"
  },
  {
    title: "Weather Dashboard Application - Real-time Data Visualization",
    description: "Interactive weather dashboard with real-time data, forecasting, and beautiful visualizations. Features location-based services and historical data analysis.",
    link: "https://umeh-kingsley-portfolio.netlify.app/case-studies/weather-dashboard-application",
    pubDate: "Mon, 22 Jan 2024 12:00:00 GMT",
    guid: "weather-dashboard-2024-01-22",
    category: "Data Visualization"
  }
];

export function GET() {
  const siteUrl = 'https://umeh-kingsley-portfolio.netlify.app';
  const siteTitle = 'Kingsley Umeh - Full-Stack Developer Portfolio';
  const siteDescription = 'Senior Full-Stack Developer specializing in React, Next.js, Node.js, and cutting-edge web technologies. Creating exceptional digital experiences with 4+ years of expertise.';
  
  const rssItems = portfolioUpdates.map(item => `
    <item>
      <title><![CDATA[${item.title}]]></title>
      <description><![CDATA[${item.description}]]></description>
      <link>${item.link}</link>
      <guid>${item.guid}</guid>
      <pubDate>${item.pubDate}</pubDate>
      <category><![CDATA[${item.category}]]></category>
      <author>lordkign1@gmail.com (Kingsley Umeh)</author>
    </item>
  `).join('');

  const rssXml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" 
     xmlns:content="http://purl.org/rss/1.0/modules/content/"
     xmlns:dc="http://purl.org/dc/elements/1.1/"
     xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title><![CDATA[${siteTitle}]]></title>
    <description><![CDATA[${siteDescription}]]></description>
    <link>${siteUrl}</link>
    <atom:link href="${siteUrl}/rss.xml" rel="self" type="application/rss+xml" />
    <language>en-us</language>
    <copyright>Copyright 2024, Kingsley Umeh. All rights reserved.</copyright>
    <managingEditor>lordkign1@gmail.com (Kingsley Umeh)</managingEditor>
    <webMaster>lordkign1@gmail.com (Kingsley Umeh)</webMaster>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    <generator>Kingsley Umeh Portfolio RSS Generator</generator>
    <ttl>1440</ttl>
    <image>
      <url>${siteUrl}/me.jpeg</url>
      <title>${siteTitle}</title>
      <link>${siteUrl}</link>
      <width>1200</width>
      <height>630</height>
      <description>Kingsley Umeh - Professional Full-Stack Developer</description>
    </image>
    ${rssItems}
  </channel>
</rss>`;

  return new NextResponse(rssXml, {
    status: 200,
    headers: {
      'Content-Type': 'application/rss+xml; charset=utf-8',
      'Cache-Control': 'public, max-age=3600, s-maxage=3600',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET',
      'X-Content-Type-Options': 'nosniff',
    },
  });
}
