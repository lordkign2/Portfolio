import Script from 'next/script';
import { useEffect } from 'react';

// Types for custom events
interface AnalyticsEvent {
  action: string;
  category: string;
  label?: string;
  value?: number;
}

interface PageViewData {
  page_title: string;
  page_location: string;
  page_path: string;
}

interface UserProperties {
  custom_dimension_1?: string;
  custom_dimension_2?: string;
}

// Analytics utility functions
export const analytics = {
  // Track page views
  pageView: (data: PageViewData) => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('config', process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID, {
        page_title: data.page_title,
        page_location: data.page_location,
        page_path: data.page_path,
      });
    }
  },

  // Track custom events
  trackEvent: (event: AnalyticsEvent) => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', event.action, {
        event_category: event.category,
        event_label: event.label,
        value: event.value,
      });
    }
  },

  // Track user engagement
  trackEngagement: (action: string, properties?: Record<string, any>) => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', action, {
        ...properties,
        custom_parameter_1: 'portfolio_engagement',
      });
    }
  },

  // Track scroll depth
  trackScrollDepth: (depth: number) => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'scroll', {
        event_category: 'engagement',
        event_label: `scroll_${depth}%`,
        value: depth,
      });
    }
  },

  // Track form submissions
  trackFormSubmission: (formName: string, success: boolean) => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', success ? 'form_submit_success' : 'form_submit_error', {
        event_category: 'form_interaction',
        event_label: formName,
        custom_parameter_1: 'portfolio_conversion',
      });
    }
  },

  // Track project views
  trackProjectView: (projectName: string, category: string) => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'project_view', {
        event_category: 'portfolio',
        event_label: projectName,
        custom_parameter_1: category,
        custom_parameter_2: 'project_engagement',
      });
    }
  },

  // Track social media clicks
  trackSocialClick: (platform: string, url: string) => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'social_click', {
        event_category: 'social_media',
        event_label: platform,
        value: 1,
        custom_parameter_1: 'outbound_traffic',
      });
    }
  },

  // Track outbound link clicks
  trackOutboundClick: (url: string, linkText: string) => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'outbound_click', {
        event_category: 'outbound_traffic',
        event_label: url,
        custom_parameter_1: linkText,
      });
    }
  },

  // Set user properties
  setUserProperties: (properties: UserProperties) => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('config', process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID, {
        custom_map: properties,
      });
    }
  },

  // Track time on page
  trackTimeOnPage: (timeSpent: number, pagePath: string) => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'time_on_page', {
        event_category: 'engagement',
        event_label: pagePath,
        value: timeSpent,
        custom_parameter_1: 'user_retention',
      });
    }
  },

  // Track search queries
  trackSearch: (query: string, resultsCount: number) => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'search', {
        event_category: 'site_search',
        event_label: query,
        value: resultsCount,
        custom_parameter_1: 'user_intent',
      });
    }
  },

  // Track download events
  trackDownload: (fileName: string, fileType: string) => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'download', {
        event_category: 'file_download',
        event_label: fileName,
        custom_parameter_1: fileType,
      });
    }
  },
};

// Extend window type for gtag
declare global {
  interface Window {
    gtag: (
      command: string,
      targetId: string,
      config?: Record<string, any>
    ) => void;
    dataLayer: any[];
  }
}

export default function EnhancedAnalytics() {
  if (process.env.NODE_ENV !== 'production') {
    return null;
  }

  return (
    <>
      {/* Google Analytics 4 */}
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID}`}
      />
      
      <Script
        id="gtag-init"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            
            // Enhanced measurement configuration
            gtag('config', '${process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID}', {
              page_path: window.location.pathname,
              send_page_view: false, // We'll handle this manually
              cookie_flags: 'SameSite=Lax;Secure',
              custom_map: {
                'custom_parameter_1': 'engagement_type',
                'custom_parameter_2': 'content_category',
              },
              // Enhanced ecommerce tracking
              currency: 'USD',
              // Cross-domain tracking
              linker: {
                domains: ['umeh-kingsley-portfolio.netlify.app']
              },
              // Anonymize IP for privacy
              anonymize_ip: true,
              // Cookie update
              cookie_update: true,
              // Send ad personalization signals
              allow_google_signals: false,
            });
            
            // Track UTM parameters
            const urlParams = new URLSearchParams(window.location.search);
            const utmParams = {
              utm_source: urlParams.get('utm_source'),
              utm_medium: urlParams.get('utm_medium'),
              utm_campaign: urlParams.get('utm_campaign'),
              utm_term: urlParams.get('utm_term'),
              utm_content: urlParams.get('utm_content'),
            };
            
            // Store UTM params in session storage
            const hasUtmParams = Object.values(utmParams).some(val => val !== null);
            if (hasUtmParams) {
              sessionStorage.setItem('utm_params', JSON.stringify(utmParams));
              // Send UTM parameters to GA
              gtag('event', 'utm_parameters', {
                event_category: 'campaign_tracking',
                custom_parameter_1: 'marketing_attribution',
                ...utmParams
              });
            }
            
            // Send initial page view
            gtag('event', 'page_view', {
              page_title: document.title,
              page_location: window.location.href,
              page_path: window.location.pathname,
              send_to: '${process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID}'
            });
            
            // Track scroll depth
            let maxScroll = 0;
            const scrollThresholds = [25, 50, 75, 90];
            const trackedThresholds = new Set();
            
            function trackScroll() {
              const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
              const scrollPercent = Math.round((window.scrollY / scrollHeight) * 100);
              
              if (scrollPercent > maxScroll) {
                maxScroll = scrollPercent;
              }
              
              scrollThresholds.forEach(threshold => {
                if (scrollPercent >= threshold && !trackedThresholds.has(threshold)) {
                  trackedThresholds.add(threshold);
                  gtag('event', 'scroll', {
                    event_category: 'engagement',
                    event_label: 'scroll_depth',
                    value: threshold,
                    custom_parameter_1: 'user_engagement'
                  });
                }
              });
            }
            
            window.addEventListener('scroll', trackScroll, { passive: true });
            
            // Track time on page when user leaves
            let timeOnPage = 0;
            setInterval(() => {
              timeOnPage++;
            }, 1000);
            
            window.addEventListener('beforeunload', () => {
              gtag('event', 'time_on_page', {
                event_category: 'engagement',
                event_label: window.location.pathname,
                value: timeOnPage,
                custom_parameter_1: 'user_retention'
              });
            });
            
            // Track outbound links
            document.addEventListener('click', (e) => {
              const target = e.target as HTMLElement;
              const link = target.closest('a');
              
              if (link && link.href) {
                const url = new URL(link.href);
                const isOutbound = !url.hostname.includes(window.location.hostname);
                
                if (isOutbound) {
                  gtag('event', 'outbound_click', {
                    event_category: 'outbound_traffic',
                    event_label: link.href,
                    custom_parameter_1: link.textContent || 'outbound_link'
                  });
                }
              }
            });
          `,
        }}
      />
      
      {/* Google Ads Conversion Tracking */}
      {process.env.NEXT_PUBLIC_GOOGLE_ADS_ID && (
        <Script
          id="google-ads-init"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ADS_ID}', {
                page_path: window.location.pathname,
                allow_enhanced_conversions: true,
              });
            `,
          }}
        />
      )}
      
      {/* LinkedIn Insight Tag */}
      {process.env.NEXT_PUBLIC_LINKEDIN_PARTNER_ID && (
        <Script
          id="linkedin-insight"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              _linkedin_partner_id = "${process.env.NEXT_PUBLIC_LINKEDIN_PARTNER_ID}";
              window._linkedin_data_partner_ids = window._linkedin_data_partner_ids || [];
              window._linkedin_data_partner_ids.push(_linkedin_partner_id);
            `,
          }}
        />
      )}
      
      {process.env.NEXT_PUBLIC_LINKEDIN_PARTNER_ID && (
        <Script
          strategy="afterInteractive"
          src="https://snap.licdn.com/li.lms-analytics/insight.min.js"
        />
      )}
    </>
  );
}
