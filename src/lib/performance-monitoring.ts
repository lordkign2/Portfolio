// Performance monitoring utilities for SEO and user experience optimization

interface PerformanceMetrics {
  fcp: number; // First Contentful Paint
  lcp: number; // Largest Contentful Paint
  fid: number; // First Input Delay
  cls: number; // Cumulative Layout Shift
  ttfb: number; // Time to First Byte
  domContentLoaded: number;
  loadComplete: number;
}

interface SEOHealthMetrics {
  pageSpeed: number;
  mobileUsability: number;
  coreWebVitals: number;
  seoScore: number;
  accessibility: number;
  bestPractices: number;
}

class PerformanceMonitor {
  private metrics: Partial<PerformanceMetrics> = {};
  private observers: PerformanceObserver[] = [];
  private isMonitoring = false;

  constructor() {
    if (typeof window !== 'undefined') {
      this.init();
    }
  }

  private init() {
    // Start monitoring performance metrics
    this.observeCoreWebVitals();
    this.observeNavigationTiming();
    this.observeResourceTiming();
    this.isMonitoring = true;
  }

  // Observe Core Web Vitals
  private observeCoreWebVitals() {
    // Largest Contentful Paint (LCP)
    if ('PerformanceObserver' in window) {
      try {
        const lcpObserver = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          const lastEntry = entries[entries.length - 1];
          this.metrics.lcp = lastEntry.startTime;
          this.reportMetric('LCP', lastEntry.startTime);
        });
        lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });
        this.observers.push(lcpObserver);
      } catch (e) {
        console.warn('LCP observer not supported');
      }

      // First Input Delay (FID)
      try {
        const fidObserver = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          entries.forEach((entry: any) => {
            this.metrics.fid = entry.processingStart - entry.startTime;
            this.reportMetric('FID', this.metrics.fid);
          });
        });
        fidObserver.observe({ entryTypes: ['first-input'] });
        this.observers.push(fidObserver);
      } catch (e) {
        console.warn('FID observer not supported');
      }

      // Cumulative Layout Shift (CLS)
      let clsValue = 0;
      try {
        const clsObserver = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          entries.forEach((entry: any) => {
            if (!entry.hadRecentInput) {
              clsValue += entry.value;
            }
          });
          this.metrics.cls = clsValue;
          this.reportMetric('CLS', clsValue);
        });
        clsObserver.observe({ entryTypes: ['layout-shift'] });
        this.observers.push(clsObserver);
      } catch (e) {
        console.warn('CLS observer not supported');
      }

      // First Contentful Paint (FCP)
      try {
        const fcpObserver = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          const fcpEntry = entries.find(entry => entry.name === 'first-contentful-paint');
          if (fcpEntry) {
            this.metrics.fcp = fcpEntry.startTime;
            this.reportMetric('FCP', fcpEntry.startTime);
          }
        });
        fcpObserver.observe({ entryTypes: ['paint'] });
        this.observers.push(fcpObserver);
      } catch (e) {
        console.warn('FCP observer not supported');
      }
    }
  }

  // Observe Navigation Timing
  private observeNavigationTiming() {
    if ('PerformanceObserver' in window) {
      try {
        const navObserver = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          entries.forEach((entry: any) => {
            this.metrics.ttfb = entry.responseStart - entry.requestStart;
            this.metrics.domContentLoaded = entry.domContentLoadedEventEnd - entry.navigationStart;
            this.metrics.loadComplete = entry.loadEventEnd - entry.navigationStart;
            
            this.reportMetric('TTFB', this.metrics.ttfb);
            this.reportMetric('DOM_Content_Loaded', this.metrics.domContentLoaded);
            this.reportMetric('Load_Complete', this.metrics.loadComplete);
          });
        });
        navObserver.observe({ entryTypes: ['navigation'] });
        this.observers.push(navObserver);
      } catch (e) {
        console.warn('Navigation timing observer not supported');
      }
    }
  }

  // Observe Resource Timing
  private observeResourceTiming() {
    if ('PerformanceObserver' in window) {
      try {
        const resourceObserver = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          const slowResources = entries.filter((entry: any) => entry.duration > 1000);
          
          if (slowResources.length > 0) {
            this.reportMetric('Slow_Resources', slowResources.length);
            console.warn('Slow resources detected:', slowResources);
          }
        });
        resourceObserver.observe({ entryTypes: ['resource'] });
        this.observers.push(resourceObserver);
      } catch (e) {
        console.warn('Resource timing observer not supported');
      }
    }
  }

  // Report metrics to analytics
  private reportMetric(name: string, value: number) {
    // Only report in production
    if (process.env.NODE_ENV === 'production' && typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'performance_metric', {
        event_category: 'performance',
        event_label: name,
        value: Math.round(value),
        custom_parameter_1: 'core_web_vitals'
      });
    }

    // Store metrics locally for analysis
    this.storeMetric(name, value);
  }

  // Store metrics locally
  private storeMetric(name: string, value: number) {
    try {
      const stored = localStorage.getItem('performance_metrics');
      const metrics = stored ? JSON.parse(stored) : {};
      metrics[name] = value;
      metrics.timestamp = new Date().toISOString();
      localStorage.setItem('performance_metrics', JSON.stringify(metrics));
    } catch (error) {
      console.warn('Failed to store performance metrics:', error);
    }
  }

  // Get current metrics
  getMetrics(): PerformanceMetrics {
    return {
      fcp: this.metrics.fcp || 0,
      lcp: this.metrics.lcp || 0,
      fid: this.metrics.fid || 0,
      cls: this.metrics.cls || 0,
      ttfb: this.metrics.ttfb || 0,
      domContentLoaded: this.metrics.domContentLoaded || 0,
      loadComplete: this.metrics.loadComplete || 0,
    };
  }

  // Calculate performance score
  calculatePerformanceScore(): number {
    const metrics = this.getMetrics();
    let score = 100;

    // LCP scoring (good < 2.5s, needs improvement < 4s)
    if (metrics.lcp > 4000) score -= 30;
    else if (metrics.lcp > 2500) score -= 15;

    // FID scoring (good < 100ms, needs improvement < 300ms)
    if (metrics.fid > 300) score -= 25;
    else if (metrics.fid > 100) score -= 10;

    // CLS scoring (good < 0.1, needs improvement < 0.25)
    if (metrics.cls > 0.25) score -= 25;
    else if (metrics.cls > 0.1) score -= 10;

    // TTFB scoring (good < 600ms, needs improvement < 1000ms)
    if (metrics.ttfb > 1000) score -= 20;
    else if (metrics.ttfb > 600) score -= 10;

    return Math.max(0, score);
  }

  // Get SEO health metrics
  getSEOHealthMetrics(): SEOHealthMetrics {
    const performanceScore = this.calculatePerformanceScore();
    
    return {
      pageSpeed: performanceScore,
      mobileUsability: this.checkMobileUsability(),
      coreWebVitals: this.getCoreWebVitalsScore(),
      seoScore: this.calculateSEOScore(),
      accessibility: this.checkAccessibility(),
      bestPractices: this.checkBestPractices(),
    };
  }

  private getCoreWebVitalsScore(): number {
    const metrics = this.getMetrics();
    let score = 100;

    // LCP
    if (metrics.lcp <= 2500) score -= 0;
    else if (metrics.lcp <= 4000) score -= 25;
    else score -= 50;

    // FID
    if (metrics.fid <= 100) score -= 0;
    else if (metrics.fid <= 300) score -= 25;
    else score -= 50;

    // CLS
    if (metrics.cls <= 0.1) score -= 0;
    else if (metrics.cls <= 0.25) score -= 25;
    else score -= 50;

    return Math.max(0, score);
  }

  private calculateSEOScore(): number {
    let score = 100;
    
    // Check basic SEO elements
    if (!document.querySelector('title')) score -= 10;
    if (!document.querySelector('meta[name="description"]')) score -= 10;
    if (!document.querySelector('h1')) score -= 5;
    
    // Check structured data
    if (!document.querySelector('script[type="application/ld+json"]')) score -= 15;
    
    // Check Open Graph tags
    if (!document.querySelector('meta[property^="og:"]')) score -= 10;
    
    // Check viewport meta
    if (!document.querySelector('meta[name="viewport"]')) score -= 5;
    
    // Check canonical URL
    if (!document.querySelector('link[rel="canonical"]')) score -= 5;
    
    return Math.max(0, score);
  }

  private checkMobileUsability(): number {
    let score = 100;
    
    // Check viewport configuration
    const viewport = document.querySelector('meta[name="viewport"]');
    if (!viewport || !viewport.getAttribute('content')?.includes('width=device-width')) {
      score -= 30;
    }
    
    // Check font sizes (minimum 16px)
    const fontSize = parseFloat(getComputedStyle(document.body).fontSize);
    if (fontSize < 16) score -= 20;
    
    // Check touch targets (minimum 48px)
    const buttons = document.querySelectorAll('button, a, input, [role="button"]');
    let smallTargets = 0;
    buttons.forEach(button => {
      const rect = button.getBoundingClientRect();
      if (rect.width < 48 || rect.height < 48) smallTargets++;
    });
    if (smallTargets > 0) score -= Math.min(20, smallTargets * 5);
    
    return Math.max(0, score);
  }

  private checkAccessibility(): number {
    let score = 100;
    
    // Check alt text for images
    const images = document.querySelectorAll('img');
    let imagesWithoutAlt = 0;
    images.forEach(img => {
      if (!img.alt && !img.getAttribute('aria-label')) imagesWithoutAlt++;
    });
    if (imagesWithoutAlt > 0) score -= Math.min(25, imagesWithoutAlt * 5);
    
    // Check form labels
    const inputs = document.querySelectorAll('input, textarea, select');
    let inputsWithoutLabel = 0;
    inputs.forEach(input => {
      const hasLabel = document.querySelector(`label[for="${input.id}"]`) || 
                       input.getAttribute('aria-label') ||
                       input.getAttribute('aria-labelledby');
      if (!hasLabel) inputsWithoutLabel++;
    });
    if (inputsWithoutLabel > 0) score -= Math.min(25, inputsWithoutLabel * 5);
    
    // Check heading structure
    const headings = document.querySelectorAll('h1, h2, h3, h4, h5, h6');
    let properStructure = true;
    let lastLevel = 0;
    headings.forEach(heading => {
      const level = parseInt(heading.tagName.charAt(1));
      if (level > lastLevel + 1) properStructure = false;
      lastLevel = level;
    });
    if (!properStructure) score -= 15;
    
    return Math.max(0, score);
  }

  private checkBestPractices(): number {
    let score = 100;
    
    // Check HTTPS
    if (location.protocol !== 'https:') score -= 20;
    
    // Check security headers (simplified check)
    const hasSecurityHeaders = document.querySelector('meta[http-equiv="Content-Security-Policy"]');
    if (!hasSecurityHeaders) score -= 10;
    
    // Check console errors
    if (console.error.toString().includes('function')) score -= 15; // Simple check
    
    // Check unused CSS (simplified)
    const stylesheets = document.querySelectorAll('link[rel="stylesheet"]');
    if (stylesheets.length > 5) score -= 10;
    
    // Check image optimization
    const images = document.querySelectorAll('img');
    let unoptimizedImages = 0;
    images.forEach(img => {
      if (!img.src.includes('.webp') && !img.src.includes('.avif')) unoptimizedImages++;
    });
    if (unoptimizedImages > images.length / 2) score -= 15;
    
    return Math.max(0, score);
  }

  // Generate performance report
  generateReport(): string {
    const metrics = this.getMetrics();
    const healthMetrics = this.getSEOHealthMetrics();
    const performanceScore = this.calculatePerformanceScore();
    
    return `
Performance Report - ${new Date().toLocaleString()}
=====================================

Core Web Vitals:
- First Contentful Paint (FCP): ${metrics.fcp.toFixed(0)}ms ${metrics.fcp < 1800 ? '✅' : '⚠️'}
- Largest Contentful Paint (LCP): ${metrics.lcp.toFixed(0)}ms ${metrics.lcp < 2500 ? '✅' : '⚠️'}
- First Input Delay (FID): ${metrics.fid.toFixed(0)}ms ${metrics.fid < 100 ? '✅' : '⚠️'}
- Cumulative Layout Shift (CLS): ${metrics.cls.toFixed(3)} ${metrics.cls < 0.1 ? '✅' : '⚠️'}

Additional Metrics:
- Time to First Byte (TTFB): ${metrics.ttfb.toFixed(0)}ms ${metrics.ttfb < 600 ? '✅' : '⚠️'}
- DOM Content Loaded: ${metrics.domContentLoaded.toFixed(0)}ms
- Load Complete: ${metrics.loadComplete.toFixed(0)}ms

SEO Health Scores:
- Overall Performance: ${performanceScore}/100
- Page Speed: ${healthMetrics.pageSpeed}/100
- Mobile Usability: ${healthMetrics.mobileUsability}/100
- Core Web Vitals: ${healthMetrics.coreWebVitals}/100
- SEO Score: ${healthMetrics.seoScore}/100
- Accessibility: ${healthMetrics.accessibility}/100
- Best Practices: ${healthMetrics.bestPractices}/100

Recommendations:
${this.generateRecommendations(healthMetrics)}
    `.trim();
  }

  private generateRecommendations(metrics: SEOHealthMetrics): string {
    const recommendations = [];
    
    if (metrics.pageSpeed < 80) {
      recommendations.push('- Optimize images and reduce server response time');
    }
    
    if (metrics.mobileUsability < 80) {
      recommendations.push('- Improve mobile touch targets and font sizes');
    }
    
    if (metrics.coreWebVitals < 80) {
      recommendations.push('- Optimize Core Web Vitals (LCP, FID, CLS)');
    }
    
    if (metrics.seoScore < 80) {
      recommendations.push('- Add missing meta tags and structured data');
    }
    
    if (metrics.accessibility < 80) {
      recommendations.push('- Add alt text to images and labels to form elements');
    }
    
    if (metrics.bestPractices < 80) {
      recommendations.push('- Implement security headers and optimize resources');
    }
    
    return recommendations.length > 0 ? recommendations.join('\n') : '- No critical issues detected';
  }

  // Cleanup observers
  destroy() {
    this.observers.forEach(observer => observer.disconnect());
    this.observers = [];
    this.isMonitoring = false;
  }
}

// Export singleton instance
export const performanceMonitor = new PerformanceMonitor();

// Export convenience functions
export const getPerformanceMetrics = () => performanceMonitor.getMetrics();
export const getSEOHealthMetrics = () => performanceMonitor.getSEOHealthMetrics();
export const generatePerformanceReport = () => performanceMonitor.generateReport();
export const calculatePerformanceScore = () => performanceMonitor.calculatePerformanceScore();
