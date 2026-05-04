// Analytics utility functions for consistent tracking across the application

export interface AnalyticsEvent {
  action: string;
  category: string;
  label?: string;
  value?: number;
  nonInteraction?: boolean;
}

export interface UserProperties {
  user_type?: string;
  source?: string;
  device_category?: string;
  browser?: string;
  location?: string;
}

export interface ConversionEvent {
  transaction_id?: string;
  value?: number;
  currency?: string;
  items?: Array<{
    item_id: string;
    item_name: string;
    category: string;
    quantity?: number;
    price?: number;
  }>;
}

class AnalyticsTracker {
  private isInitialized = false;
  private queue: AnalyticsEvent[] = [];

  constructor() {
    if (typeof window !== 'undefined') {
      this.initialize();
    }
  }

  private initialize() {
    if (this.isInitialized || !window.gtag) return;
    
    this.isInitialized = true;
    
    // Process queued events
    while (this.queue.length > 0) {
      const event = this.queue.shift();
      if (event) {
        this.trackEvent(event);
      }
    }
  }

  // Track custom events
  trackEvent(event: AnalyticsEvent) {
    if (!this.isInitialized) {
      this.queue.push(event);
      return;
    }

    if (window.gtag) {
      window.gtag('event', event.action, {
        event_category: event.category,
        event_label: event.label,
        value: event.value,
        non_interaction: event.nonInteraction || false,
        custom_parameter_1: 'portfolio_tracking',
      });
    }
  }

  // Track page views
  trackPageView(pagePath?: string, pageTitle?: string) {
    if (!this.isInitialized) return;

    if (window.gtag) {
      window.gtag('event', 'page_view', {
        page_path: pagePath || window.location.pathname,
        page_title: pageTitle || document.title,
        page_location: window.location.href,
        send_to: process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID,
      });
    }
  }

  // Track user engagement
  trackEngagement(action: string, properties?: Record<string, any>) {
    this.trackEvent({
      action,
      category: 'engagement',
      label: properties?.label,
      value: properties?.value,
    });
  }

  // Track form interactions
  trackFormInteraction(formName: string, action: string, success?: boolean) {
    this.trackEvent({
      action: `form_${action}`,
      category: 'form_interaction',
      label: formName,
      value: success ? 1 : 0,
    });
  }

  // Track portfolio project interactions
  trackProjectInteraction(projectName: string, action: string, category: string) {
    this.trackEvent({
      action: `project_${action}`,
      category: 'portfolio',
      label: projectName,
      value: 1,
    });
  }

  // Track social media interactions
  trackSocialInteraction(platform: string, action: string, url?: string) {
    this.trackEvent({
      action: `social_${action}`,
      category: 'social_media',
      label: platform,
      value: 1,
    });
  }

  // Track search functionality
  trackSearch(query: string, resultsCount: number, category?: string) {
    this.trackEvent({
      action: 'search',
      category: 'site_search',
      label: query,
      value: resultsCount,
    });
  }

  // Track download events
  trackDownload(fileName: string, fileType: string, fileSize?: number) {
    this.trackEvent({
      action: 'download',
      category: 'file_download',
      label: fileName,
      value: fileSize,
    });
  }

  // Track video interactions
  trackVideoInteraction(videoTitle: string, action: string, progress?: number) {
    this.trackEvent({
      action: `video_${action}`,
      category: 'video_engagement',
      label: videoTitle,
      value: progress,
    });
  }

  // Track conversion events
  trackConversion(conversion: ConversionEvent) {
    if (window.gtag) {
      window.gtag('event', 'purchase', {
        transaction_id: conversion.transaction_id,
        value: conversion.value,
        currency: conversion.currency || 'USD',
        items: conversion.items,
        custom_parameter_1: 'portfolio_conversion',
      });
    }
  }

  // Track timing events
  trackTiming(category: string, variable: string, value: number, label?: string) {
    if (window.gtag) {
      window.gtag('event', 'timing_complete', {
        event_category: category,
        name: variable,
        value: value,
        event_label: label,
        custom_parameter_1: 'performance_tracking',
      });
    }
  }

  // Track exceptions
  trackException(description: string, fatal?: boolean) {
    if (window.gtag) {
      window.gtag('event', 'exception', {
        description,
        fatal: fatal || false,
        custom_parameter_1: 'error_tracking',
      });
    }
  }

  // Set user properties
  setUserProperties(properties: UserProperties) {
    if (window.gtag) {
      window.gtag('config', process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID, {
        custom_map: properties,
      });
    }
  }

  // Track custom dimensions
  trackCustomDimension(dimension: string, value: string) {
    if (window.gtag) {
      window.gtag('event', 'custom_dimension', {
        custom_parameter_1: dimension,
        custom_parameter_2: value,
      });
    }
  }

  // Track scroll depth
  trackScrollDepth(depth: number) {
    this.trackEvent({
      action: 'scroll',
      category: 'engagement',
      label: `scroll_${depth}%`,
      value: depth,
    });
  }

  // Track outbound links
  trackOutboundLink(url: string, linkText: string) {
    this.trackEvent({
      action: 'outbound_click',
      category: 'outbound_traffic',
      label: url,
      value: 1,
    });
  }

  // Track internal site search
  trackInternalSearch(query: string, category?: string) {
    this.trackEvent({
      action: 'internal_search',
      category: 'site_search',
      label: query,
      value: 1,
    });
  }

  // Track content engagement
  trackContentEngagement(contentType: string, contentId: string, action: string) {
    this.trackEvent({
      action: `content_${action}`,
      category: 'content_engagement',
      label: `${contentType}_${contentId}`,
      value: 1,
    });
  }

  // Track feature usage
  trackFeatureUsage(featureName: string, action: string, properties?: Record<string, any>) {
    this.trackEvent({
      action: `feature_${action}`,
      category: 'feature_usage',
      label: featureName,
      value: properties?.value || 1,
    });
  }

  // Track performance metrics
  trackPerformance(metricName: string, value: number, unit?: string) {
    this.trackEvent({
      action: 'performance_metric',
      category: 'performance',
      label: metricName,
      value: value,
    });
  }

  // Track user journey events
  trackJourneyEvent(step: string, journeyName: string, properties?: Record<string, any>) {
    this.trackEvent({
      action: `journey_${step}`,
      category: 'user_journey',
      label: journeyName,
      value: properties?.step_number || 1,
    });
  }
}

// Create singleton instance
export const analytics = new AnalyticsTracker();

// Export convenience functions for common tracking scenarios
export const trackPageView = (pagePath?: string, pageTitle?: string) => 
  analytics.trackPageView(pagePath, pageTitle);

export const trackProjectView = (projectName: string, category: string) => 
  analytics.trackProjectInteraction(projectName, 'view', category);

export const trackContactFormSubmit = (success: boolean, formType: string = 'contact') => 
  analytics.trackFormInteraction(formType, 'submit', success);

export const trackSocialClick = (platform: string, url?: string) => 
  analytics.trackSocialInteraction(platform, 'click', url);

export const trackDownload = (fileName: string, fileType: string) => 
  analytics.trackDownload(fileName, fileType);

export const trackScrollDepth = (depth: number) => 
  analytics.trackScrollDepth(depth);

export const trackOutboundLink = (url: string, linkText: string) => 
  analytics.trackOutboundLink(url, linkText);

export const trackSearch = (query: string, resultsCount: number) => 
  analytics.trackSearch(query, resultsCount);

export const trackFeatureUsage = (featureName: string, action: string) => 
  analytics.trackFeatureUsage(featureName, action);

// React hooks for analytics
export const useAnalytics = () => {
  return {
    trackEvent: analytics.trackEvent.bind(analytics),
    trackPageView: analytics.trackPageView.bind(analytics),
    trackEngagement: analytics.trackEngagement.bind(analytics),
    trackFormInteraction: analytics.trackFormInteraction.bind(analytics),
    trackProjectInteraction: analytics.trackProjectInteraction.bind(analytics),
    trackSocialInteraction: analytics.trackSocialInteraction.bind(analytics),
    trackConversion: analytics.trackConversion.bind(analytics),
    setUserProperties: analytics.setUserProperties.bind(analytics),
  };
};

// Extend window interface for gtag
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
