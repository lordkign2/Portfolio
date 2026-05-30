# Kingsley Umeh Portfolio — Frontend Architecture & Web Performance Rules (RULES.md)

This document establishes the official engineering standards, rendering boundaries, performance targets, accessibility compliance, and code quality expectations for the Kingsley Umeh portfolio codebase. As a public performance review of its author's craftsmanship, every line of code in this repository must adhere to the professional practices detailed herein.

---

## Table of Contents
1. [Operating Philosophy](#operating-philosophy)
2. [Classification System](#classification-system)
3. [1. Next.js App Router & Server/Client Boundaries](#1-nextjs-app-router--serverclient-boundaries)
4. [2. Core Web Vitals & Web Performance Targets](#2-core-web-vitals--web-performance-targets)
5. [3. SEO, Metadata & Structured Data Quality](#3-seo-metadata--structured-data-quality)
6. [4. Accessibility (a11y) & Interactive Correctness](#4-accessibility-a11y--interactive-correctness)
7. [5. Cinematic Animations & GPU-Accelerated Rendering](#5-cinematic-animations--gpu-accelerated-rendering)
8. [6. Engineering Craftsmanship & Architectural Consistency](#6-engineering-craftsmanship--architectural-consistency)
9. [Appendix A: Prioritized Action Items (P0 / P1 / P2)](#appendix-a-prioritized-action-items-p0--p1--p2)
10. [Appendix B: Known Divergences & Allowable Exceptions](#appendix-b-known-divergences--allowable-exceptions)

---

## Operating Philosophy

A professional portfolio website is not a simple static brochure — it is a live, production-grade performance review. It will be scrutinized by senior developers, engineering managers, and clients who evaluate technical competence through actual implementation details. A visually breathtaking website that relies on architectural shortcuts, inflated bundle sizes, poor accessibility, or broken SEO is a failure of craftsmanship. 

Every decision made in this codebase must be intentional, performance-first, and highly optimized.

---

## Classification System

All standards, findings, and practices documented in this repository are categorized according to the following system:

- **`[OBSERVED]`** — A design pattern or architectural behavior verified present in the codebase.
- **`[RECOMMENDED]`** — A modern best practice to be adopted when writing or refactoring components.
- **`[REQUIRED]`** — A non-negotiable standard that must be satisfied for production-quality code.
- **`[DEBT]`** — A pattern that currently works but violates architectural principles and must be refactored.
- **`[DANGEROUS]`** — Creates a severe risk of bundle inflation, rendering failure, SEO penalization, or WCAG non-compliance.
- **`[PROHIBITED]`** — Anti-patterns that must never be introduced or committed to the repository.

---

## 1. Next.js App Router & Server/Client Boundaries

In Next.js App Router (React 19), the boundary between React Server Components (RSC) and Client Components is the core architectural discipline.

### 1.1 Server-by-Default Design
- **`[REQUIRED]`** All pages, sub-layouts, and sitemaps under `src/app/` MUST remain React Server Components by default to leverage zero-bundle-size rendering and static HTML streaming.
- **`[PROHIBITED]`** Never place the `"use client"` directive at the top of a page layout or route index file unless it is absolutely impossible to decouple the interactive elements.
- **`[RECOMMENDED]`** Follow the "interactivity split" pattern: Keep `page.tsx` as a Server Component handling static rendering, static metadata generation, and sitemap registration, while extracting interactive forms or lists into a separate client-side leaf component (e.g. `ProjectsClient.tsx`).

### 1.2 Minimizing Client Bundles
- **`[REQUIRED]`** Client Components (`"use client"`) must represent the leaf nodes of the component tree, never the container wrappers.
- **`[DEBT]`** Heavy animation sub-components (such as `LetterGlitch.tsx`, `Particles.tsx`, and `DotGrid.tsx`) MUST be loaded dynamically with `React.lazy` or Next's `dynamic()` to prevent blocking the initial paint of the page.
- **`[RECOMMENDED]`** Set `optimizePackageImports` in `next.config.ts` for heavy dependency trees such as `lucide-react`, `framer-motion`, and `gsap` to enforce aggressive tree-shaking.

---

## 2. Core Web Vitals & Web Performance Targets

Performance is a measurable commitment to our visitors. The site must target and achieve the following Core Web Vitals:

| Metric | Description | Target | Rule Level |
|--------|-------------|--------|------------|
| **LCP** | Largest Contentful Paint | $\le 2.5\text{s}$ | **`[REQUIRED]`** |
| **CLS** | Cumulative Layout Shift | $\le 0.1$ | **`[REQUIRED]`** |
| **INP** | Interaction to Next Paint | $\le 200\text{ms}$ | **`[REQUIRED]`** |
| **FCP** | First Contentful Paint | $\le 1.8\text{s}$ | **`[RECOMMENDED]`** |
| **TTFB**| Time to First Byte | $\le 800\text{ms}$ | **`[RECOMMENDED]`** |

### 2.1 Visual Shifts & Preloading
- **`[REQUIRED]`** Preconnect to high-priority domains (e.g. Google Fonts, Google Analytics) inside the root `layout.tsx` `<head>` block to accelerate resource discovery.
- **`[PROHIBITED]`** Do not use layout-shifting entry animations on above-the-fold content. The main hero header text must render instantly without relying on delayed JavaScript-driven measurements.
- **`[REQUIRED]`** All image elements must use the Next.js `Image` component (`next/image`) with explicit `width`, `height`, and appropriate `priority` tags for above-the-fold items to eliminate CLS.

---

## 3. SEO, Metadata & Structured Data Quality

SEO is a first-class engineering discipline. If a portfolio site cannot be indexed accurately or shared cleanly on social platforms, it fails its primary objective.

### 3.1 Metadata & Social Previews
- **`[REQUIRED]`** All indexable pages MUST export a typed `Metadata` object.
- **`[REQUIRED]`** Every individual case study page MUST include comprehensive social share headers:
  - `openGraph.images`: An absolute URL pointing to the high-quality project screenshot (minimum 1200x630px).
  - `twitter.card`: Set to `summary_large_image`.
  - `keywords`: Rich, search-relevant terms tailored to the specific case study's tech stack and scope.
- **`[REQUIRED]`** Explicit canonical alternates MUST be defined for every page to avoid duplicate indexing:
  ```ts
  alternates: { canonical: "https://umeh-kingsley-portfolio.netlify.app/page-route" }
  ```

### 3.2 Structured Data (JSON-LD) Integrity
- **`[PROHIBITED]`** Never inject placeholder, unverified, or fake schema ratings (such as `AggregateRating` schemas boasting 50 fabricated positive reviews) into the structured data. This violates Google's Structured Data Guidelines and risks search index manual actions.
- **`[PROHIBITED]`** Do not register active `SearchAction` structures if the site does not implement a functional search endpoint. Sitelinks searchboxes must resolve to a real search path.
- **`[REQUIRED]`** Ensure absolute geographic consistency across all data sources. HTML meta elements (such as `geo.region` and `ICBM`) and JSON-LD geo fields (in `Organization` and `ProfessionalService` schemas) must agree on coordinates and locality:
  - Locality: **Lagos, Nigeria**
  - Latitude: **6.5244**
  - Longitude: **3.3792**
  - region: **NG-LA**

### 3.3 Robots & Sitemap Rules
- **`[PROHIBITED]`** Wildcard rules (like `Disallow: /*.xml$`) are banned in `robots.txt` because they accidentally block critical infrastructure engines from crawling the sitemap.
- **`[REQUIRED]`** Sitemaps must list only core content pages and actual portfolio case studies. Never include utility metadata files or infrastructure components inside the `sitemap.xml`.

---

## 4. Accessibility (a11y) & Interactive Correctness

Accessibility is a measurement of correctness, not a regulatory compliance checklist. The portfolio must adhere to WCAG 2.2 AA standards.

### 4.1 Custom Cursor UX Safeguards
- **`[DANGEROUS]`** Hiding the default system cursor (`cursor: none`) is acceptable for cinematic aesthetic purposes but creates a high risk of user navigation failure on low-end devices or non-standard interfaces.
- **`[REQUIRED]`** Custom cursor tracking components (e.g. `TargetCursor.tsx`) MUST be conditionally disabled on mobile and touch-only devices (typically screens under `768px` wide) where physical mouse cursors do not exist.
- **`[REQUIRED]`** If the default cursor is hidden, ensure all interactive buttons, link items, and form elements retain visible focus states (`:focus`, `:focus-visible`) for keyboard navigators.

### 4.2 Semantic HTML & Keyboard Access
- **`[REQUIRED]`** Interactive elements that act as buttons must be semantic `<button>` elements, or carry explicit `role="button"` and `tabIndex={0}` attributes with corresponding keyboard event handlers (for `Enter` and `Space` keys).
- **`[REQUIRED]`** Form fields must have corresponding `<label>` tags or clear `aria-label` attributes to ensure readability by screen-readers.

---

## 5. Cinematic Animations & GPU-Accelerated Rendering

Animations must be smooth and performant. Laggy animations convey an impression of poor engineering judgement.

### 5.1 Properties & Layout Reflows
- **`[REQUIRED]`** Scroll-driven or continuous loop animations MUST only animate GPU-compositable properties to avoid layout calculations and paint storms:
  - Use `transform` (scale, translate, rotate) and `opacity`.
  - **`[PROHIBITED]`** Do not animate layout triggers such as `width`, `height`, `top`, `left`, `margin`, or `padding`.
- **`[REQUIRED]`** High-frequency render steps in custom client animations must utilize `will-change: transform` or `will-change: opacity` to force GPU layering.

### 5.2 Respecting Reduced Motion
- **`[REQUIRED]`** All Framer Motion or GSAP custom timelines must respect the user's OS-level motion settings. Use the `prefers-reduced-motion` CSS media query or React hooks to completely disable or simplify cinematic transitions for users who request reduced motion.

---

## 6. Engineering Craftsmanship & Architectural Consistency

Standards are reinforced by ruthless consistency across the repository.

### 6.1 Path Aliasing & File Naming
- **`[REQUIRED]`** Always use the `@/` path alias for absolute internal imports from the `src/` directory (e.g. `import Navbar from "@/components/Navbar"`).
- **`[PROHIBITED]`** Banned: Relative directory paths reaching above two levels (e.g. `import foo from "../../../components/foo"`).
- **`[REQUIRED]`** Strictly maintain PascalCase for component files (e.g. `FeaturedCaseStudiesSection.tsx`) and camelCase for hook/data files (e.g. `useTheme.ts`, `projects.ts`).

### 6.2 Event Tracking Guidelines
- **`[REQUIRED]`** Never invoke Google Analytics `window.gtag` directly inside interactive components. Use the centralized tracking classes and utility functions exported from `src/lib/analytics.ts` or `src/utils/eventTracker.ts` to log custom visitor interactions.

---

## Appendix A: Prioritized Action Items (P0 / P1 / P2)

The following priority matrix catalogs verified defects and technical debt observed in the portfolio codebase:

### P0 (Fix Before Publishing)
1. **`[OBSERVED]`** **Duplicate & Mixed JSON-LD Elements in Root Layout**
   - **Location**: `src/app/layout.tsx` (lines 192-194)
   - **Specific Risk**: Calling `<div dangerouslySetInnerHTML={{ __html: JsonLd() }} />` inside `<body>` after a React component call of `<JsonLd />` inside `<head>` attempts to invoke a JSX component as a string-returning function, crashing dynamic React renders.
   - **Remediation**: Remove the duplicate `dangerouslySetInnerHTML` call and the duplicate `EnhancedAnalytics` from `<body>`, keeping only the single `<JsonLd />` component render inside the `<head>` tag.
   - **Status**: **RESOLVED**

### P1 (Fix This Week)
2. **`[OBSERVED]`** **Duplicate Cookie Consent Banners in Root Layout**
   - **Location**: `src/app/layout.tsx` (lines 194 and 196)
   - **Specific Risk**: Redundant rendering of `<CookieConsent />` multiple times in `<body>` creates visual overlap, degrades DOM size, and violates single-responsibility layout structure.
   - **Remediation**: Eliminate the duplicate banner at the footer, maintaining exactly one `<CookieConsent />` call under the page container.
   - **Status**: **RESOLVED**

3. **`[OBSERVED]`** **Wildcard robots.txt Blocks Sitemap Parsing**
   - **Location**: `public/robots.txt`
   - **Specific Risk**: Directives like `Disallow: /*.xml$` blocked core crawlers from discovering and indexing `/sitemap.xml`, neutralizing organic search discovery.
   - **Remediation**: Delete the XML/TXT wildcard filters while retaining specific user-agent directives.
   - **Status**: **RESOLVED**

---

## Appendix B: Known Divergences & Allowable Exceptions

The following exceptions are officially allowed within this engineering design system:

1. **Client Interactivity on Homepage Sections**: Hompage sections located in `src/components/sections/` are permitted to declare `"use client"` because they incorporate heavy scroll-driven entrance animations (Framer Motion) and interactions that cannot be purely achieved on the server. However, their internal heavy visual elements MUST be deferred or dynamic imported to prevent bundle bloating.
2. **WebGL Fallbacks in Glitch Text**: The custom interactive component `LetterGlitch` operates via a lightweight WebGL library (`OGL`). On devices where WebGL context generation is unavailable, it is permitted to fall back gracefully to vanilla CSS text rendering without breaking the core content representation.
3. **Double Package Manager Configs**: Both `package-lock.json` and `pnpm-lock.yaml` are maintained in the repository to guarantee deployment support across different hosting providers (e.g. Vercel and Netlify) that favor specific dependency lock resolutions.

---
*RULES.md established by the Web Performance Lead and Principal Frontend Engineer.*
