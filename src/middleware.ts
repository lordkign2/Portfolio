import { NextRequest, NextResponse } from 'next/server';

// Middleware for SEO and analytics optimization
export function middleware(request: NextRequest) {
  const response = NextResponse.next();
  
  // Add security headers
  response.headers.set('X-Frame-Options', 'DENY');
  response.headers.set('X-Content-Type-Options', 'nosniff');
  response.headers.set('Referrer-Policy', 'origin-when-cross-origin');
  response.headers.set('X-DNS-Prefetch-Control', 'on');
  
  // Add CORS headers for API routes
  if (request.nextUrl.pathname.startsWith('/api/')) {
    response.headers.set('Access-Control-Allow-Origin', '*');
    response.headers.set('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    response.headers.set('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  }
  
  // Add cache headers for static assets
  if (request.nextUrl.pathname.startsWith('/_next/static/') || 
      request.nextUrl.pathname.startsWith('/images/') ||
      request.nextUrl.pathname.startsWith('/me.jpeg')) {
    response.headers.set('Cache-Control', 'public, max-age=31536000, immutable');
  }
  
  // Add performance headers
  response.headers.set('X-Powered-By', 'Next.js & Kingsley Umeh');
  
  // Track page views for analytics (only in production)
  if (process.env.NODE_ENV === 'production') {
    const userAgent = request.headers.get('user-agent') || '';
    const referer = request.headers.get('referer') || '';
    const ip = request.headers.get('x-forwarded-for') || 
               request.headers.get('x-real-ip') || 
               'unknown';
    
    // Extract UTM parameters
    const url = new URL(request.url);
    const utmParams = {
      utm_source: url.searchParams.get('utm_source'),
      utm_medium: url.searchParams.get('utm_medium'),
      utm_campaign: url.searchParams.get('utm_campaign'),
      utm_term: url.searchParams.get('utm_term'),
      utm_content: url.searchParams.get('utm_content'),
    };
    
    // Store analytics data in headers for client-side processing
    response.headers.set('X-Analytics-Path', request.nextUrl.pathname);
    response.headers.set('X-Analytics-User-Agent', userAgent.substring(0, 500));
    response.headers.set('X-Analytics-Referer', referer.substring(0, 500));
    response.headers.set('X-Analytics-UTM', JSON.stringify(utmParams));
    
    // Detect device type
    const isMobile = /Mobile|Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(userAgent);
    const isTablet = /iPad|Android|Tablet/i.test(userAgent) && !/Mobile/i.test(userAgent);
    const deviceType = isTablet ? 'tablet' : (isMobile ? 'mobile' : 'desktop');
    response.headers.set('X-Analytics-Device', deviceType);
    
    // Detect browser
    let browser = 'unknown';
    if (userAgent.includes('Chrome')) browser = 'chrome';
    else if (userAgent.includes('Firefox')) browser = 'firefox';
    else if (userAgent.includes('Safari')) browser = 'safari';
    else if (userAgent.includes('Edge')) browser = 'edge';
    response.headers.set('X-Analytics-Browser', browser);
    
    // Track bot traffic
    const isBot = /bot|crawler|spider|crawling|facebook|twitter|google|yahoo|bing/i.test(userAgent);
    response.headers.set('X-Analytics-Is-Bot', isBot.toString());
  }
  
  // SEO redirects and canonical URLs
  const url = request.nextUrl.clone();
  
  // Force HTTPS
  if (url.protocol === 'http:' && process.env.NODE_ENV === 'production') {
    url.protocol = 'https:';
    return NextResponse.redirect(url, 301);
  }
  
  // Remove trailing slashes (except for root)
  if (url.pathname !== '/' && url.pathname.endsWith('/')) {
    url.pathname = url.pathname.slice(0, -1);
    return NextResponse.redirect(url, 301);
  }
  
  // Handle old URLs
  const redirects: Record<string, string> = {
    '/home': '/',
    '/index.html': '/',
    '/portfolio': '/projects',
    '/work': '/case-studies',
    '/about-me': '/about',
    '/get-in-touch': '/contact',
  };
  
  if (redirects[url.pathname]) {
    url.pathname = redirects[url.pathname];
    return NextResponse.redirect(url, 301);
  }
  
  // Add canonical URL header
  response.headers.set('X-Canonical-URL', `https://umeh-kingsley-portfolio.netlify.app${url.pathname}`);
  
  return response;
}

// Configure middleware to run on specific paths
export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - public (public files)
     */
    '/((?!api|_next/static|_next/image|favicon.ico|public).*)',
  ],
};
