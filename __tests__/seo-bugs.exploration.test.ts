/**
 * SEO Bug Condition Exploration Tests
 *
 * These tests run on UNFIXED code. Each assertion is expected to PASS,
 * which confirms the corresponding bug EXISTS in the codebase.
 *
 * When a test assertion PASSES → bug is confirmed present.
 * When a test assertion FAILS → bug may not exist as described (unexpected).
 *
 * Validates: Requirements 1.1, 1.2, 1.3, 1.5, 1.6, 1.7, 1.8, 1.9, 1.10
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
 * JsonLdSimple's default export function.
 * The function returns strings like:
 *   <script type="application/ld+json">{...}</script>\n<script ...>...</script>
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
// Test 1.1 — Conflict markers in layout.tsx and JsonLd.tsx
// Validates: Requirement 1.1
// ---------------------------------------------------------------------------
describe('Test 1.1 — Conflict markers in source files', () => {
  it('should find git conflict markers in src/app/layout.tsx or src/components/JsonLd.tsx (confirms bug 1.1)', () => {
    const layoutContent = readProjectFile('src', 'app', 'layout.tsx');
    const jsonLdContent = readProjectFile('src', 'components', 'JsonLd.tsx');

    const conflictMarkerRegex = /^(<{7}|={7}|>{7})/m;

    const layoutHasConflict = conflictMarkerRegex.test(layoutContent);
    const jsonLdHasConflict = conflictMarkerRegex.test(jsonLdContent);

    // At least one file must contain conflict markers — confirms bug 1.1 exists
    const atLeastOneHasConflict = layoutHasConflict || jsonLdHasConflict;

    if (layoutHasConflict) {
      const lines = layoutContent.split('\n');
      const conflictLines = lines
        .map((line, idx) => ({ line, idx: idx + 1 }))
        .filter(({ line }) => conflictMarkerRegex.test(line));
      console.log(
        'Conflict markers found in layout.tsx at lines:',
        conflictLines.map(({ idx, line }) => `${idx}: ${line.slice(0, 60)}`),
      );
    }
    if (jsonLdHasConflict) {
      const lines = jsonLdContent.split('\n');
      const conflictLines = lines
        .map((line, idx) => ({ line, idx: idx + 1 }))
        .filter(({ line }) => conflictMarkerRegex.test(line));
      console.log(
        'Conflict markers found in JsonLd.tsx at lines:',
        conflictLines.map(({ idx, line }) => `${idx}: ${line.slice(0, 60)}`),
      );
    }

    expect(atLeastOneHasConflict).toBe(true);
  });
});

// ---------------------------------------------------------------------------
// Test 1.2 — Duplicate JSON-LD injection in layout.tsx
// Validates: Requirement 1.2
// ---------------------------------------------------------------------------
describe('Test 1.2 — Duplicate JSON-LD injection in layout.tsx', () => {
  it('should contain both <JsonLd /> component usage AND dangerouslySetInnerHTML JsonLd() call (confirms bug 1.2)', () => {
    const layoutContent = readProjectFile('src', 'app', 'layout.tsx');

    // Check for component usage: <JsonLd /> or <JsonLd/>
    const hasComponentUsage = /<JsonLd\s*\/>/.test(layoutContent);

    // Check for plain function call usage: dangerouslySetInnerHTML={{ __html: JsonLd()
    const hasFunctionCallUsage = /dangerouslySetInnerHTML=\{\{[^}]*__html:\s*JsonLd\(\)/.test(
      layoutContent,
    );

    console.log('layout.tsx has <JsonLd /> component usage:', hasComponentUsage);
    console.log(
      'layout.tsx has dangerouslySetInnerHTML JsonLd() call:',
      hasFunctionCallUsage,
    );

    // Both must be present — confirms duplicate/inconsistent JSON-LD injection (bug 1.2)
    expect(hasComponentUsage).toBe(true);
    expect(hasFunctionCallUsage).toBe(true);
  });
});

// ---------------------------------------------------------------------------
// Test 1.3 — Duplicate CookieConsent in layout.tsx
// Validates: Requirement 1.3
// ---------------------------------------------------------------------------
describe('Test 1.3 — Duplicate CookieConsent in layout.tsx', () => {
  it('should render <CookieConsent /> more than once (confirms bug 1.3)', () => {
    const layoutContent = readProjectFile('src', 'app', 'layout.tsx');

    // Count occurrences of <CookieConsent /> or <CookieConsent/>
    const matches = layoutContent.match(/<CookieConsent\s*\/>/g) ?? [];
    const count = matches.length;

    console.log(`<CookieConsent /> appears ${count} time(s) in layout.tsx`);

    // Must appear more than once — confirms bug 1.3 exists
    expect(count).toBeGreaterThan(1);
  });
});

// ---------------------------------------------------------------------------
// Test 1.4 — robots.txt wildcard blocks sitemap
// Validates: Requirement 1.5
// ---------------------------------------------------------------------------
describe('Test 1.4 — robots.txt wildcard blocks XML resources', () => {
  it('should contain "Disallow: /*.xml$" directive that blocks sitemap.xml (confirms bug 1.5)', () => {
    const robotsContent = readProjectFile('public', 'robots.txt');

    const hasXmlDisallow = robotsContent.includes('Disallow: /*.xml$');

    console.log('robots.txt contains Disallow: /*.xml$:', hasXmlDisallow);
    if (hasXmlDisallow) {
      const lines = robotsContent.split('\n');
      const matchingLines = lines
        .map((line, idx) => ({ line: line.trim(), idx: idx + 1 }))
        .filter(({ line }) => line.includes('Disallow: /*.xml$'));
      console.log(
        'Matching lines:',
        matchingLines.map(({ idx, line }) => `line ${idx}: ${line}`),
      );
    }

    // Must contain the wildcard XML disallow — confirms bug 1.5 exists
    expect(hasXmlDisallow).toBe(true);
  });
});

// ---------------------------------------------------------------------------
// Test 1.5 — Sitemap includes infrastructure URLs
// Validates: Requirement 1.6
// ---------------------------------------------------------------------------
describe('Test 1.5 — Sitemap contains infrastructure URLs', () => {
  it('should return at least one entry whose URL ends with sitemap.xml (confirms bug 1.6)', async () => {
    // Dynamic import — sitemap.ts is valid TypeScript (no conflict markers)
    const sitemapModule = await import('../src/app/sitemap');
    const sitemapFn = sitemapModule.default ?? sitemapModule.sitemap;

    expect(typeof sitemapFn).toBe('function');

    const entries = sitemapFn();
    const infrastructureEntries = entries.filter((entry: { url: string }) =>
      entry.url.endsWith('sitemap.xml'),
    );

    console.log(
      'Sitemap infrastructure entries (ending with sitemap.xml):',
      infrastructureEntries.map((e: { url: string }) => e.url),
    );
    console.log('Total sitemap entries:', entries.length);

    // Must have at least one infrastructure URL — confirms bug 1.6 exists
    expect(infrastructureEntries.length).toBeGreaterThan(0);
  });
});

// ---------------------------------------------------------------------------
// Test 1.6 — Fake AggregateRating schema in JsonLdSimple
// Validates: Requirement 1.7
// ---------------------------------------------------------------------------
describe('Test 1.6 — Fake AggregateRating schema present', () => {
  it('should find at least one schema object with "@type": "AggregateRating" (confirms bug 1.7)', async () => {
    // Dynamic import of JsonLdSimple — it returns an HTML string (not JSX)
    const module = await import('../src/components/JsonLdSimple');
    const JsonLdFn = module.default;

    expect(typeof JsonLdFn).toBe('function');

    // Call the function — it returns a raw HTML string
    const htmlOutput = JsonLdFn() as unknown as string;

    expect(typeof htmlOutput).toBe('string');

    const schemas = parseJsonLdSchemas(htmlOutput);
    const aggregateRatingSchemas = schemas.filter(
      (s) => s['@type'] === 'AggregateRating',
    );

    console.log('Total schemas parsed from JsonLdSimple output:', schemas.length);
    console.log(
      'AggregateRating schemas found:',
      JSON.stringify(aggregateRatingSchemas, null, 2),
    );

    // Must contain AggregateRating — confirms bug 1.7 exists
    expect(aggregateRatingSchemas.length).toBeGreaterThan(0);
  });
});

// ---------------------------------------------------------------------------
// Test 1.7 — Broken SearchAction in WebSite schema
// Validates: Requirement 1.8
// ---------------------------------------------------------------------------
describe('Test 1.7 — Broken SearchAction in WebSite schema', () => {
  it('should find potentialAction key in the WebSite schema (confirms bug 1.8)', async () => {
    const module = await import('../src/components/JsonLdSimple');
    const JsonLdFn = module.default;

    const htmlOutput = JsonLdFn() as unknown as string;
    const schemas = parseJsonLdSchemas(htmlOutput);

    const websiteSchema = schemas.find((s) => s['@type'] === 'WebSite');

    expect(websiteSchema).toBeDefined();

    const hasPotentialAction = websiteSchema !== undefined && 'potentialAction' in websiteSchema;

    console.log('WebSite schema found:', !!websiteSchema);
    console.log('WebSite schema has potentialAction:', hasPotentialAction);
    if (hasPotentialAction && websiteSchema) {
      console.log(
        'potentialAction value:',
        JSON.stringify(websiteSchema['potentialAction'], null, 2),
      );
    }

    // Must have potentialAction — confirms bug 1.8 exists
    expect(hasPotentialAction).toBe(true);
  });
});

// ---------------------------------------------------------------------------
// Test 1.8 — Missing OG metadata on case study pages
// Validates: Requirement 1.9
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

  it('should find ALL 9 case study pages missing openGraph or having empty openGraph.images (confirms bug 1.9)', async () => {
    const results: { page: string; hasOgImages: boolean }[] = [];

    for (const pagePath of caseStudyPages) {
      const module = await import(`../${pagePath}`);
      const metadata = module.metadata;

      const hasOgImages =
        metadata?.openGraph !== undefined &&
        metadata?.openGraph?.images !== undefined &&
        Array.isArray(metadata.openGraph.images) &&
        metadata.openGraph.images.length > 0;

      results.push({ page: pagePath, hasOgImages });
    }

    const pagesWithoutOgImages = results.filter((r) => !r.hasOgImages);

    console.log('Case study pages missing OG images:');
    pagesWithoutOgImages.forEach(({ page }) => console.log(' -', page));
    console.log(
      `${pagesWithoutOgImages.length} of ${caseStudyPages.length} pages are missing OG images`,
    );

    // ALL 9 pages must be missing OG images — confirms bug 1.9 exists
    expect(pagesWithoutOgImages.length).toBe(caseStudyPages.length);
  });
});

// ---------------------------------------------------------------------------
// Test 1.9 — Geo inconsistency: Organization.address.addressLocality === "Jos"
// Validates: Requirement 1.10
// ---------------------------------------------------------------------------
describe('Test 1.9 — Geo inconsistency in JSON-LD schemas', () => {
  it('should find Organization schema with addressLocality "Jos" (confirms bug 1.10)', async () => {
    const module = await import('../src/components/JsonLdSimple');
    const JsonLdFn = module.default;

    const htmlOutput = JsonLdFn() as unknown as string;
    const schemas = parseJsonLdSchemas(htmlOutput);

    const organizationSchema = schemas.find((s) => s['@type'] === 'Organization');

    expect(organizationSchema).toBeDefined();

    const address = organizationSchema?.['address'] as Record<string, unknown> | undefined;
    const addressLocality = address?.['addressLocality'];

    console.log('Organization schema found:', !!organizationSchema);
    console.log('Organization.address.addressLocality:', addressLocality);
    console.log(
      'Note: layout.tsx geo meta tags say "Lagos" but JSON-LD says:',
      addressLocality,
    );

    // Must be "Jos" — confirms geo inconsistency bug 1.10 exists
    expect(addressLocality).toBe('Jos');
  });
});
