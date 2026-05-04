import { analytics } from './analytics';

// Conversion tracking utilities
export interface ConversionData {
  type: 'contact_form' | 'project_inquiry' | 'newsletter_signup' | 'social_click' | 'download';
  value?: number;
  currency?: string;
  description?: string;
  metadata?: Record<string, any>;
}

class ConversionTracker {
  private conversionId = 0;

  // Track contact form submissions
  trackContactForm(formData: Record<string, any>, success: boolean) {
    const conversionData: ConversionData = {
      type: 'contact_form',
      value: 50, // Arbitrary value for lead generation
      currency: 'USD',
      description: 'Contact form submission',
      metadata: {
        form_type: 'contact',
        has_project_details: !!formData.projectDetails,
        has_budget: !!formData.budget,
        has_timeline: !!formData.timeline,
        success: success,
        timestamp: new Date().toISOString(),
      }
    };

    this.trackConversion(conversionData);
    
    // Track specific form events
    analytics.trackFormInteraction('contact_form', success ? 'submit_success' : 'submit_error', success);
    
    // If successful, track as a lead
    if (success) {
      analytics.trackConversion({
        transaction_id: `contact_${Date.now()}`,
        value: 50,
        currency: 'USD',
        items: [{
          item_id: 'contact_form_lead',
          item_name: 'Contact Form Lead',
          category: 'lead_generation',
          quantity: 1,
          price: 50
        }]
      });
    }
  }

  // Track project inquiries
  trackProjectInquiry(projectType: string, budget?: string, timeline?: string) {
    const conversionData: ConversionData = {
      type: 'project_inquiry',
      value: this.getProjectValue(projectType, budget),
      currency: 'USD',
      description: `${projectType} project inquiry`,
      metadata: {
        project_type: projectType,
        budget_range: budget,
        timeline: timeline,
        timestamp: new Date().toISOString(),
      }
    };

    this.trackConversion(conversionData);
    
    analytics.trackConversion({
      transaction_id: `project_${Date.now()}`,
      value: conversionData.value,
      currency: 'USD',
      items: [{
        item_id: `project_${projectType.toLowerCase().replace(/\s+/g, '_')}`,
        item_name: `${projectType} Project`,
        category: 'project_inquiry',
        quantity: 1,
        price: conversionData.value
      }]
    });
  }

  // Track social media clicks
  trackSocialClick(platform: string, url: string) {
    const conversionData: ConversionData = {
      type: 'social_click',
      value: 5, // Lower value for social engagement
      currency: 'USD',
      description: `Social media click: ${platform}`,
      metadata: {
        platform: platform,
        url: url,
        timestamp: new Date().toISOString(),
      }
    };

    this.trackConversion(conversionData);
    analytics.trackSocialClick(platform, url);
  }

  // Track file downloads
  trackDownload(fileName: string, fileType: string) {
    const conversionData: ConversionData = {
      type: 'download',
      value: 10,
      currency: 'USD',
      description: `File download: ${fileName}`,
      metadata: {
        file_name: fileName,
        file_type: fileType,
        timestamp: new Date().toISOString(),
      }
    };

    this.trackConversion(conversionData);
    analytics.trackDownload(fileName, fileType);
  }

  // Track newsletter signups
  trackNewsletterSignup(email: string, source?: string) {
    const conversionData: ConversionData = {
      type: 'newsletter_signup',
      value: 25,
      currency: 'USD',
      description: 'Newsletter signup',
      metadata: {
        email_hash: this.hashEmail(email),
        signup_source: source || 'direct',
        timestamp: new Date().toISOString(),
      }
    };

    this.trackConversion(conversionData);
    
    analytics.trackConversion({
      transaction_id: `newsletter_${Date.now()}`,
      value: 25,
      currency: 'USD',
      items: [{
        item_id: 'newsletter_signup',
        item_name: 'Newsletter Subscription',
        category: 'email_marketing',
        quantity: 1,
        price: 25
      }]
    });
  }

  // Track micro-conversions
  trackMicroConversion(action: string, value: number = 1) {
    analytics.trackEvent({
      action: `micro_conversion_${action}`,
      category: 'micro_conversion',
      label: action,
      value: value,
    });
  }

  // Track scroll depth as micro-conversion
  trackScrollDepthMilestone(depth: number) {
    const milestones = [25, 50, 75, 90];
    if (milestones.includes(depth)) {
      this.trackMicroConversion(`scroll_${depth}`, depth);
      
      // Track significant engagement milestones
      if (depth >= 75) {
        analytics.trackEvent({
          action: 'deep_engagement',
          category: 'user_engagement',
          label: `scroll_${depth}`,
          value: depth,
        });
      }
    }
  }

  // Track time on site milestones
  trackTimeOnSiteMilestone(seconds: number) {
    const milestones = [30, 60, 180, 300]; // 30s, 1min, 3min, 5min
    if (milestones.includes(seconds)) {
      this.trackMicroConversion(`time_${seconds}s`, seconds);
      
      // Track extended engagement
      if (seconds >= 180) {
        analytics.trackEvent({
          action: 'extended_engagement',
          category: 'user_engagement',
          label: `time_${seconds}s`,
          value: seconds,
        });
      }
    }
  }

  // Track feature usage
  trackFeatureUsage(feature: string, action: string) {
    this.trackMicroConversion(`feature_${feature}_${action}`, 1);
    analytics.trackFeatureUsage(feature, action);
  }

  // Private helper methods
  private trackConversion(data: ConversionData) {
    this.conversionId++;
    
    // Track conversion event
    analytics.trackEvent({
      action: `conversion_${data.type}`,
      category: 'conversion',
      label: data.description,
      value: data.value,
    });

    // Store conversion data locally for analysis
    const conversions = this.getStoredConversions();
    conversions.push({
      id: this.conversionId,
      ...data,
      timestamp: new Date().toISOString(),
    });
    
    try {
      localStorage.setItem('conversion_data', JSON.stringify(conversions));
    } catch (error) {
      console.warn('Failed to store conversion data:', error);
    }
  }

  private getStoredConversions(): any[] {
    try {
      const stored = localStorage.getItem('conversion_data');
      return stored ? JSON.parse(stored) : [];
    } catch {
      return [];
    }
  }

  private getProjectValue(projectType: string, budget?: string): number {
    // Assign values based on project type and budget
    const baseValues: Record<string, number> = {
      'web_development': 5000,
      'mobile_app': 8000,
      'full_stack': 10000,
      'ui_ux_design': 3000,
      'consulting': 2000,
      'maintenance': 1500,
    };

    let value = baseValues[projectType.toLowerCase()] || 3000;

    // Adjust based on budget range
    if (budget) {
      if (budget.includes('5000+')) value *= 2;
      else if (budget.includes('10000+')) value *= 3;
      else if (budget.includes('20000+')) value *= 4;
    }

    return value;
  }

  private hashEmail(email: string): string {
    // Simple hash for privacy (in production, use proper hashing)
    let hash = 0;
    for (let i = 0; i < email.length; i++) {
      const char = email.charCodeAt(i);
      hash = ((hash << 5) - hash) + char;
      hash = hash & hash; // Convert to 32-bit integer
    }
    return hash.toString(16);
  }

  // Get conversion analytics
  getConversionAnalytics() {
    const conversions = this.getStoredConversions();
    
    const analytics = {
      total_conversions: conversions.length,
      total_value: conversions.reduce((sum, conv) => sum + (conv.value || 0), 0),
      conversion_types: conversions.reduce((acc, conv) => {
        acc[conv.type] = (acc[conv.type] || 0) + 1;
        return acc;
      }, {} as Record<string, number>),
      conversion_rate: this.calculateConversionRate(),
      top_converting_pages: this.getTopConvertingPages(conversions),
    };

    return analytics;
  }

  private calculateConversionRate(): number {
    // This would need session data to calculate accurately
    // For now, return a placeholder
    return 0; // Will be implemented with proper session tracking
  }

  private getTopConvertingPages(conversions: any[]): Array<{page: string, conversions: number}> {
    // Group conversions by page
    const pageConversions: Record<string, number> = {};
    
    conversions.forEach(conv => {
      const page = conv.metadata?.page || 'unknown';
      pageConversions[page] = (pageConversions[page] || 0) + 1;
    });

    return Object.entries(pageConversions)
      .map(([page, conversions]) => ({ page, conversions }))
      .sort((a, b) => b.conversions - a.conversions)
      .slice(0, 5);
  }
}

// Export singleton instance
export const conversionTracker = new ConversionTracker();

// Convenience functions for common conversions
export const trackContactForm = (formData: Record<string, any>, success: boolean) => 
  conversionTracker.trackContactForm(formData, success);

export const trackProjectInquiry = (projectType: string, budget?: string, timeline?: string) => 
  conversionTracker.trackProjectInquiry(projectType, budget, timeline);

export const trackSocialClick = (platform: string, url: string) => 
  conversionTracker.trackSocialClick(platform, url);

export const trackDownload = (fileName: string, fileType: string) => 
  conversionTracker.trackDownload(fileName, fileType);

export const trackNewsletterSignup = (email: string, source?: string) => 
  conversionTracker.trackNewsletterSignup(email, source);

export const trackScrollDepth = (depth: number) => 
  conversionTracker.trackScrollDepthMilestone(depth);

export const trackTimeOnSite = (seconds: number) => 
  conversionTracker.trackTimeOnSiteMilestone(seconds);

export const trackFeatureUsage = (feature: string, action: string) => 
  conversionTracker.trackFeatureUsage(feature, action);
