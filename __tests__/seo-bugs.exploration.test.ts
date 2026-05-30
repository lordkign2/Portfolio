/**
 * SEO Bug Resolution & Regression Prevention Tests
 *
 * These tests run on FIXED code. Each assertion is expected to PASS,
 * which confirms that the corresponding bug has been successfully RESOLVED
 * and does not exist in the codebase.
 *
 * Validates: Resolution of Requirements 1.1, 1.2, 1.3, 1.5, 1.6, 1.7, 1.8, 1.9, 1.10
 */

import * as fs from 'fs';
import * as path from 'path';

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

function readProjectFile(...segments: string[]): string {
  return fs.readFileSync(path.join(process.cwd(), ...segments), 'utf-8');
}

/**
 * Parse all JSON-LD schema objects out of the HTML string returned by
 * JsonLdSimple's default export component.
 */
function parseJsonLdSchemas(htmlString: string): Record<string, unknown>[] {
  const schemas: Record<string, unknown>[] = [];
  const scriptRegex = /<script[^>]*type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/g;
  let match: RegExpExecArray | null;
  while ((match = scriptRegex.exec(htmlString)) !== null) {
    try {
      schemas.push(JSON.parse(match[1]));
    } catch {
      // skip malformed blocks
    }
  }
  return schemas;
}

// ---------------------------------------------------------------------------
// Test 1.1 — Conflict markers fully resolved
// ---------------------------------------------------------------------------
describe('Test 1.1 — Conflict markers in source files', () => {
  it('should find ZERO git conflict markers in src/app/layout.tsx and src/components/JsonLd.tsx (confirms bug 1.1 is resolved)', () => {
    const layoutContent = readProjectFile('src', 'app', 'layout.tsx');
    const jsonLdContent = readProjectFile('src', 'components', 'JsonLd.tsx');

    const conflictMarkerRegex = /^(<{7}|={7}|>{7})/m;

    const layoutHasConflict = conflictMarkerRegex.test(layoutContent);
    const jsonLdHasConflict = conflictMarkerRegex.test(jsonLdContent);

    expect(layoutHasConflict).toBe(false);
    expect(jsonLdHasConflict).toBe(false);
  });
});

// ---------------------------------------------------------------------------
// Test 1.2 — Duplicate JSON-LD injection resolved
// ---------------------------------------------------------------------------
describe('Test 1.2 — Duplicate JSON-LD injection in layout.tsx', () => {
  it('should contain <JsonLd /> component usage but NO dangerouslySetInnerHTML JsonLd() call (confirms bug 1.2 is resolved)', () => {
    const layoutContent = readProjectFile('src', 'app', 'layout.tsx');

    // Check for component usage: <JsonLd /> or <JsonLd/>
    const hasComponentUsage = /<JsonLd\s*\/>/.test(layoutContent);

    // Check for plain function call usage: dangerouslySetInnerHTML={{ __html: JsonLd()
    const hasFunctionCallUsage = /dangerouslySetInnerHTML=\{\{[^}]*__html:\s*JsonLd\(\)/.test(
      layoutContent,
    );

    expect(hasComponentUsage).toBe(true);
    expect(hasFunctionCallUsage).toBe(false);
  });
});

// ---------------------------------------------------------------------------
// Test 1.3 — Duplicate CookieConsent resolved
// ---------------------------------------------------------------------------
describe('Test 1.3 — Duplicate CookieConsent in layout.tsx', () => {
  it('should render <CookieConsent /> exactly once (confirms bug 1.3 is resolved)', () => {
    const layoutContent = readProjectFile('src', 'app', 'layout.tsx');

    const matches = layoutContent.match(/<CookieConsent\s*\/>/g) ?? [];
    const count = matches.length;

    expect(count).toBe(1);
  });
});

// ---------------------------------------------------------------------------
// Test 1.4 — robots.txt wildcard blocking resolved
// ---------------------------------------------------------------------------
describe('Test 1.4 — robots.txt wildcard blocks XML resources', () => {
  it('should NOT contain "Disallow: /*.xml$" directive (confirms bug 1.5 is resolved)', () => {
    const robotsContent = readProjectFile('public', 'robots.txt');

    const hasXmlDisallow = robotsContent.includes('Disallow: /*.xml$');

    expect(hasXmlDisallow).toBe(false);
  });
});

// ---------------------------------------------------------------------------
// Test 1.5 — Sitemap infrastructure URLs resolved
// ---------------------------------------------------------------------------
describe('Test 1.5 — Sitemap contains infrastructure URLs', () => {
  it('should return exactly zero entries whose URL ends with sitemap.xml, robots.txt, or rss.xml (confirms bug 1.6 is resolved)', async () => {
    const sitemapModule = await import('../src/app/sitemap');
    const sitemapFn = sitemapModule.default;

    const entries = sitemapFn();
    const infrastructureEntries = entries.filter((entry: { url: string }) =>
      entry.url.endsWith('sitemap.xml') || 
      entry.url.endsWith('robots.txt') || 
      entry.url.endsWith('rss.xml')
    );

    expect(infrastructureEntries.length).toBe(0);
  });
});

// ---------------------------------------------------------------------------
// Test 1.6 — Fake AggregateRating schema removed
// ---------------------------------------------------------------------------
describe('Test 1.6 — Fake AggregateRating schema absent', () => {
  it('should find ZERO schema objects with "@type": "AggregateRating" (confirms bug 1.7 is resolved)', async () => {
    const { renderToStaticMarkup } = await import('react-dom/server');
    const React = await import('react');
    const importedModule = await import('../src/components/JsonLdSimple');
    const JsonLdFn = importedModule.default;

    const element = React.createElement(JsonLdFn);
    const htmlOutput = renderToStaticMarkup(element);

    const schemas = parseJsonLdSchemas(htmlOutput);
    const aggregateRatingSchemas = schemas.filter(
      (s) => s['@type'] === 'AggregateRating',
    );

    expect(aggregateRatingSchemas.length).toBe(0);
  });
});

// ---------------------------------------------------------------------------
// Test 1.7 — Broken SearchAction in WebSite schema removed
// ---------------------------------------------------------------------------
describe('Test 1.7 — Broken SearchAction in WebSite schema', () => {
  it('should NOT find potentialAction key in the WebSite schema (confirms bug 1.8 is resolved)', async () => {
    const { renderToStaticMarkup } = await import('react-dom/server');
    const React = await import('react');
    const importedModule = await import('../src/components/JsonLdSimple');
    const JsonLdFn = importedModule.default;

    const element = React.createElement(JsonLdFn);
    const htmlOutput = renderToStaticMarkup(element);
    const schemas = parseJsonLdSchemas(htmlOutput);

    const websiteSchema = schemas.find((s) => s['@type'] === 'WebSite');

    expect(websiteSchema).toBeDefined();
    expect(websiteSchema ? 'potentialAction' in websiteSchema : false).toBe(false);
  });
});

// ---------------------------------------------------------------------------
// Test 1.8 — Missing OG metadata resolved on all case study pages
// ---------------------------------------------------------------------------
describe('Test 1.8 — Missing OpenGraph metadata on case study pages', () => {
  const caseStudyPages = [
    'src/app/case-studies/ai-task-manager/page.tsx',
    'src/app/case-studies/city-explorer-platform/page.tsx',
    'src/app/case-studies/freelancers-pricing-guide/page.tsx',
    'src/app/case-studies/housing-waitlist-platform/page.tsx',
    'src/app/case-studies/mil-hub/page.tsx',
    'src/app/case-studies/palette-pigeon-ui-kit/page.tsx',
    'src/app/case-studies/personal-portfolio-website/page.tsx',
    'src/app/case-studies/starnumx-technology-website/page.tsx',
    'src/app/case-studies/weather-dashboard-application/page.tsx',
  ];

  it('should verify all 9 case study pages HAVE openGraph images and keywords (confirms bug 1.9 is resolved)', async () => {
    for (const pagePath of caseStudyPages) {
      const importedModule = await import(`../${pagePath}`);
      const metadata = importedModule.metadata;

      const hasOgImages =
        metadata?.openGraph !== undefined &&
        metadata?.openGraph?.images !== undefined &&
        Array.isArray(metadata.openGraph.images) &&
        metadata.openGraph.images.length > 0;

      const hasKeywords = 
        metadata?.keywords !== undefined &&
        Array.isArray(metadata.keywords) &&
        metadata.keywords.length > 0;

      expect(hasOgImages).toBe(true);
      expect(hasKeywords).toBe(true);
    }
  });
});

// ---------------------------------------------------------------------------
// Test 1.9 — Geo inconsistency resolved
// ---------------------------------------------------------------------------
describe('Test 1.9 — Geo consistency in JSON-LD schemas', () => {
  it('should find Organization schema with addressLocality "Lagos" (confirms bug 1.10 is resolved)', async () => {
    const { renderToStaticMarkup } = await import('react-dom/server');
    const React = await import('react');
    const importedModule = await import('../src/components/JsonLdSimple');
    const JsonLdFn = importedModule.default;

    const element = React.createElement(JsonLdFn);
    const htmlOutput = renderToStaticMarkup(element);
    const schemas = parseJsonLdSchemas(htmlOutput);

    const organizationSchema = schemas.find((s) => s['@type'] === 'Organization');

    expect(organizationSchema).toBeDefined();

    const address = organizationSchema?.['address'] as Record<string, unknown> | undefined;
    const addressLocality = address?.['addressLocality'];

    expect(addressLocality).toBe('Lagos');
  });
});
