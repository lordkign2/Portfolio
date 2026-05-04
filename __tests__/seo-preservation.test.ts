/**
 * SEO Preservation Property Tests
 *
 * These tests run on UNFIXED code and capture EXISTING CORRECT behaviors
 * that must NOT be broken by the fix. All tests are expected to PASS on
 * unfixed code (confirming the baseline behaviors to preserve).
 *
 * After the fix is applied, these tests must still all pass (no regressions).
 *
 * Validates: Requirements 3.1, 3.2, 3.3, 3.4, 3.5, 3.7
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
// Test P1 — Sitemap content page preservation
// Validates: Requirement 3.5
// ---------------------------------------------------------------------------
describe('Test P1 — Sitemap content page preservation', () => {
  it('should contain all 15 expected content URLs (6 core + 9 case studies)', async () => {
    const sitemapModule = await import('../src/app/sitemap');
    const sitemapFn = sitemapModule.default ?? (sitemapModule as Record<string, unknown>)['sitemap'];

    expect(typeof sitemapFn).toBe('function');

    const entries = (sitemapFn as () => Array<{ url: string }>)();
    const urls = entries.map((e) => e.url);

    const expectedCoreUrls = [
      'https://umeh-kingsley-portfolio.netlify.app',
      'https://umeh-kingsley-portfolio.netlify.app/about',
      'https://umeh-kingsley-portfolio.netlify.app/services',
      'https://umeh-kingsley-portfolio.netlify.app/projects',
      'https://umeh-kingsley-portfolio.netlify.app/contact',
      'https://umeh-kingsley-portfolio.netlify.app/case-studies',
    ];

    const expectedCaseStudyUrls = [
      'https://umeh-kingsley-portfolio.netlify.app/case-studies/ai-task-manager',
      'https://umeh-kingsley-portfolio.netlify.app/case-studies/city-explorer-platform',
      'https://umeh-kingsley-portfolio.netlify.app/case-studies/freelancers-pricing-guide',
      'https://umeh-kingsley-portfolio.netlify.app/case-studies/housing-waitlist-platform',
      'https://umeh-kingsley-portfolio.netlify.app/case-studies/mil-hub',
      'https://umeh-kingsley-portfolio.netlify.app/case-studies/palette-pigeon-ui-kit',
      'https://umeh-kingsley-portfolio.netlify.app/case-studies/personal-portfolio-website',
      'https://umeh-kingsley-portfolio.netlify.app/case-studies/starnumx-technology-website',
      'https://umeh-kingsley-portfolio.netlify.app/case-studies/weather-dashboard-application',
    ];

    const allExpectedUrls = [...expectedCoreUrls, ...expectedCaseStudyUrls];

    console.log('Total sitemap entries:', entries.length);
    console.log('All returned URLs:', urls);

    // Assert all 15 expected content URLs are present
    for (const expectedUrl of allExpectedUrls) {
      // The home page URL may appear as trailing-slash variant
      const isPresent =
        urls.includes(expectedUrl) ||
        urls.includes(expectedUrl + '/');
      if (!isPresent) {
        console.error(`Missing expected URL: ${expectedUrl}`);
      }
      expect(isPresent).toBe(true);
    }

    console.log('All 15 expected content URLs are present in the sitemap ✓');
  });
});

// ---------------------------------------------------------------------------
// Test P2 — robots.txt bot directives preservation
// Validates: Requirement 3.4
// ---------------------------------------------------------------------------
describe('Test P2 — robots.txt bot directives preservation', () => {
  it('should contain Disallow: / for each of the 5 blocked bots', () => {
    const robotsContent = readProjectFile('public', 'robots.txt');

    const blockedBots = [
      'AhrefsBot',
      'MJ12bot',
      'DotBot',
      'BLEXBot',
      'BacklinkCrawler',
    ];

    for (const bot of blockedBots) {
      // Each bot should have its own User-agent block followed by Disallow: /
      // We check that the pattern "User-agent: <Bot>\nDisallow: /" appears in the file
      const botBlockRegex = new RegExp(
        `User-agent:\\s*${bot}[\\s\\S]*?Disallow:\\s*/(?!\\S)`,
        'm',
      );
      const hasDisallowAll = botBlockRegex.test(robotsContent);

      console.log(`${bot} has Disallow: /: ${hasDisallowAll}`);
      expect(hasDisallowAll).toBe(true);
    }
  });

  it('should contain the Sitemap directive pointing to sitemap.xml', () => {
    const robotsContent = readProjectFile('public', 'robots.txt');

    const hasSitemapDirective = robotsContent.includes(
      'Sitemap: https://umeh-kingsley-portfolio.netlify.app/sitemap.xml',
    );

    console.log(
      'robots.txt contains Sitemap: https://umeh-kingsley-portfolio.netlify.app/sitemap.xml:',
      hasSitemapDirective,
    );

    expect(hasSitemapDirective).toBe(true);
  });
});

// ---------------------------------------------------------------------------
// Test P3 — JSON-LD schema types preservation
// Validates: Requirement 3.3
// ---------------------------------------------------------------------------
describe('Test P3 — JSON-LD schema types preservation', () => {
  it('should contain all 8 required schema types in JsonLdSimple output', async () => {
    const { renderToStaticMarkup } = await import('react-dom/server');
    const React = await import('react');
    const module = await import('../src/components/JsonLdSimple');
    const JsonLdFn = module.default;

    expect(typeof JsonLdFn).toBe('function');

    // JsonLdSimple is now a JSX React component — render it to get the HTML string
    const element = React.createElement(JsonLdFn);
    const htmlOutput = renderToStaticMarkup(element);

    expect(typeof htmlOutput).toBe('string');

    const schemas = parseJsonLdSchemas(htmlOutput);
    const schemaTypes = schemas.map((s) => s['@type'] as string);

    console.log('Schema types found in JsonLdSimple output:', schemaTypes);
    console.log('Total schemas parsed:', schemas.length);

    const requiredSchemaTypes = [
      'Person',
      'Organization',
      'WebSite',
      'ProfessionalService',
      'BreadcrumbList',
      'FAQPage',
      'HowTo',
      'VideoObject',
    ];

    for (const requiredType of requiredSchemaTypes) {
      const isPresent = schemaTypes.includes(requiredType);
      if (!isPresent) {
        console.error(`Missing required schema type: ${requiredType}`);
      }
      expect(isPresent).toBe(true);
    }

    console.log('All 8 required schema types are present ✓');
  });
});

// ---------------------------------------------------------------------------
// Test P4 — Case study page metadata preservation
// Validates: Requirement 3.7
// ---------------------------------------------------------------------------
describe('Test P4 — Case study page metadata preservation', () => {
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

  it('should have non-empty title, description, and canonical for all 9 case study pages', async () => {
    for (const pagePath of caseStudyPages) {
      const module = await import(`../${pagePath}`);
      const metadata = module.metadata as {
        title?: unknown;
        description?: unknown;
        alternates?: { canonical?: unknown };
      };

      expect(metadata).toBeDefined();

      // title must be a non-empty string
      expect(typeof metadata.title).toBe('string');
      expect((metadata.title as string).length).toBeGreaterThan(0);

      // description must be a non-empty string
      expect(typeof metadata.description).toBe('string');
      expect((metadata.description as string).length).toBeGreaterThan(0);

      // alternates.canonical must be a non-empty string
      expect(metadata.alternates).toBeDefined();
      expect(typeof metadata.alternates?.canonical).toBe('string');
      expect((metadata.alternates?.canonical as string).length).toBeGreaterThan(0);

      console.log(`✓ ${pagePath}`);
      console.log(`  title: "${metadata.title}"`);
      console.log(`  description: "${(metadata.description as string).slice(0, 60)}..."`);
      console.log(`  canonical: "${metadata.alternates?.canonical}"`);
    }
  });
});
