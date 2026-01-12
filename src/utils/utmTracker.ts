// Utility functions for UTM parameter tracking
export interface UTMCampaign {
  source?: string;
  medium?: string;
  campaign?: string;
  term?: string;
  content?: string;
}

/**
 * Extracts UTM parameters from the URL
 */
export function getUTMParams(): UTMCampaign {
  if (typeof window === 'undefined') return {};
  
  const urlParams = new URLSearchParams(window.location.search);
  
  return {
    source: urlParams.get('utm_source') || undefined,
    medium: urlParams.get('utm_medium') || undefined,
    campaign: urlParams.get('utm_campaign') || undefined,
    term: urlParams.get('utm_term') || undefined,
    content: urlParams.get('utm_content') || undefined,
  };
}

/**
 * Stores UTM parameters in session storage for later use
 */
export function storeUTMParams(): void {
  if (typeof window === 'undefined') return;
  
  const utmParams = getUTMParams();
  
  if (Object.keys(utmParams).length > 0) {
    sessionStorage.setItem('utm_params', JSON.stringify(utmParams));
  }
}

/**
 * Retrieves stored UTM parameters
 */
export function getStoredUTMParams(): UTMCampaign {
  if (typeof window === 'undefined') return {};
  
  const stored = sessionStorage.getItem('utm_params');
  return stored ? JSON.parse(stored) : {};
}

/**
 * Checks if current visit has UTM parameters
 */
export function hasUTMParams(): boolean {
  const utmParams = getUTMParams();
  return Object.keys(utmParams).length > 0;
}

/**
 * Gets campaign name from UTM parameters
 */
export function getCampaignName(): string | null {
  const utmParams = getUTMParams();
  return utmParams.campaign || getStoredUTMParams().campaign || null;
}

/**
 * Gets campaign source from UTM parameters
 */
export function getCampaignSource(): string | null {
  const utmParams = getUTMParams();
  return utmParams.source || getStoredUTMParams().source || null;
}

/**
 * Gets campaign medium from UTM parameters
 */
export function getCampaignMedium(): string | null {
  const utmParams = getUTMParams();
  return utmParams.medium || getStoredUTMParams().medium || null;
}

/**
 * Adds UTM parameters to a URL
 */
export function addUTMToUrl(url: string, utmParams: UTMCampaign): string {
  const urlObj = new URL(url, window.location.origin);
  
  Object.entries(utmParams).forEach(([key, value]) => {
    if (value) {
      urlObj.searchParams.set(`utm_${key}`, value);
    }
  });
  
  return urlObj.toString();
}