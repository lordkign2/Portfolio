// Utility functions for event tracking
export interface EventParams {
  event_category?: string;
  event_label?: string;
  value?: number;
  [key: string]: string | number | undefined;
}

/**
 * Safely track a Google Analytics event
 */
declare global {
  interface Window {
    gtag: GtagType;
  }
}

// Define a proper type for the gtag function
interface GtagType {
  (command: 'event', eventName: string, params?: EventParams): void;
  (command: 'config' | 'set' | 'get' | 'consent', params?: Record<string, unknown>): void;
}

export function trackEvent(eventName: string, eventParams?: EventParams): void {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', eventName, {
      ...eventParams,
    });
  }
}

/**
 * Track contact form submission
 */
export function trackContactFormSubmission(): void {
  trackEvent('contact_form_submission', {
    event_category: 'engagement',
    event_label: 'Contact form submitted successfully',
    value: 1
  });
}

/**
 * Track contact form failure
 */
export function trackContactFormFailure(): void {
  trackEvent('contact_form_failure', {
    event_category: 'engagement',
    event_label: 'Contact form submission failed',
    value: 0
  });
}

/**
 * Track service inquiry
 */
export function trackServiceInquiry(serviceName: string): void {
  trackEvent('service_inquiry', {
    event_category: 'engagement',
    event_label: `Inquiry about ${serviceName}`,
    service_name: serviceName
  });
}

/**
 * Track project view
 */
export function trackProjectView(projectName: string): void {
  trackEvent('project_view', {
    event_category: 'engagement',
    event_label: `Viewed project ${projectName}`,
    project_name: projectName
  });
}

/**
 * Track link click
 */
export function trackLinkClick(linkName: string, url: string): void {
  trackEvent('link_click', {
    event_category: 'engagement',
    event_label: linkName,
    link_url: url
  });
}