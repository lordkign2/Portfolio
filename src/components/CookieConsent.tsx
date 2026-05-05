'use client';

import { useState, useEffect } from 'react';
import { analytics } from '@/lib/analytics';

interface CookieSettings {
  necessary: boolean;
  analytics: boolean;
  marketing: boolean;
  functional: boolean;
}

export default function CookieConsent() {
  const [showConsent, setShowConsent] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [settings, setSettings] = useState<CookieSettings>({
    necessary: true,
    analytics: false,
    marketing: false,
    functional: false,
  });

  useEffect(() => {
    // Check if user has already made consent choice
    const consent = localStorage.getItem('cookie-consent');
    const savedSettings = localStorage.getItem('cookie-settings');
    
    if (!consent) {
      setShowConsent(true);
    } else if (savedSettings) {
      const parsedSettings = JSON.parse(savedSettings);
      setSettings(parsedSettings);
      applyCookieSettings(parsedSettings);
    }
  }, []);

  const applyCookieSettings = (cookieSettings: CookieSettings) => {
    // Apply analytics consent
    if (cookieSettings.analytics) {
      // Enable Google Analytics
      if (typeof window !== 'undefined' && window.gtag) {
        window.gtag('consent', 'update', {
          'analytics_storage': 'granted'
        });
      }
    } else {
      // Disable Google Analytics
      if (typeof window !== 'undefined' && window.gtag) {
        window.gtag('consent', 'update', {
          'analytics_storage': 'denied'
        });
      }
    }

    // Apply marketing consent
    if (cookieSettings.marketing) {
      // Enable marketing cookies
      if (typeof window !== 'undefined' && window.gtag) {
        window.gtag('consent', 'update', {
          'ad_storage': 'granted',
          'ad_user_data': 'granted',
          'ad_personalization': 'granted'
        });
      }
    } else {
      // Disable marketing cookies
      if (typeof window !== 'undefined' && window.gtag) {
        window.gtag('consent', 'update', {
          'ad_storage': 'denied',
          'ad_user_data': 'denied',
          'ad_personalization': 'denied'
        });
      }
    }

    // Track consent event
    analytics.trackEvent({
      action: 'cookie_consent_update',
      category: 'privacy',
      label: JSON.stringify(cookieSettings),
      nonInteraction: true,
    });
  };

  const acceptAll = () => {
    const allSettings = {
      necessary: true,
      analytics: true,
      marketing: true,
      functional: true,
    };
    
    setSettings(allSettings);
    localStorage.setItem('cookie-consent', 'accepted');
    localStorage.setItem('cookie-settings', JSON.stringify(allSettings));
    applyCookieSettings(allSettings);
    setShowConsent(false);
    
    analytics.trackEvent({
      action: 'cookie_consent_accept_all',
      category: 'privacy',
      nonInteraction: true,
    });
  };

  const acceptNecessary = () => {
    const necessarySettings = {
      necessary: true,
      analytics: false,
      marketing: false,
      functional: false,
    };
    
    setSettings(necessarySettings);
    localStorage.setItem('cookie-consent', 'necessary');
    localStorage.setItem('cookie-settings', JSON.stringify(necessarySettings));
    applyCookieSettings(necessarySettings);
    setShowConsent(false);
    
    analytics.trackEvent({
      action: 'cookie_concept_accept_necessary',
      category: 'privacy',
      nonInteraction: true,
    });
  };

  const saveSettings = () => {
    localStorage.setItem('cookie-consent', 'custom');
    localStorage.setItem('cookie-settings', JSON.stringify(settings));
    applyCookieSettings(settings);
    setShowConsent(false);
    setShowSettings(false);
    
    analytics.trackEvent({
      action: 'cookie_consent_custom',
      category: 'privacy',
      label: JSON.stringify(settings),
      nonInteraction: true,
    });
  };

  const toggleSetting = (key: keyof CookieSettings) => {
    if (key === 'necessary') return; // Necessary cookies are always enabled
    
    setSettings(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  if (!showConsent) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-gray-900 text-white p-4 z-50 shadow-2xl border-t border-gray-700">
      <div className="max-w-7xl mx-auto">
        {!showSettings ? (
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex-1">
              <h3 className="font-semibold text-lg mb-2">Cookie Consent</h3>
              <p className="text-sm text-gray-300">
                This website uses cookies to enhance your experience, analyze site traffic, and personalize content. 
                By clicking "Accept All", you consent to our use of cookies.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <button
                onClick={acceptNecessary}
                className="px-4 py-2 bg-gray-700 hover:bg-gray-600 rounded-lg text-sm font-medium transition-colors"
              >
                Necessary Only
              </button>
              <button
                onClick={() => setShowSettings(true)}
                className="px-4 py-2 bg-gray-700 hover:bg-gray-600 rounded-lg text-sm font-medium transition-colors"
              >
                Customize
              </button>
              <button
                onClick={acceptAll}
                className="px-4 py-2 bg-blue-600 hover:bg-blue-500 rounded-lg text-sm font-medium transition-colors"
              >
                Accept All
              </button>
            </div>
          </div>
        ) : (
          <div className="space-y-6">
            <div>
              <h3 className="font-semibold text-lg mb-2">Cookie Preferences</h3>
              <p className="text-sm text-gray-300 mb-4">
                Choose which cookies you'd like to allow. You can change these settings at any time.
              </p>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-center justify-between p-3 bg-gray-800 rounded-lg">
                <div className="flex-1">
                  <h4 className="font-medium">Necessary Cookies</h4>
                  <p className="text-xs text-gray-400 mt-1">
                    Essential for the website to function properly. Cannot be disabled.
                  </p>
                </div>
                <input
                  type="checkbox"
                  checked={settings.necessary}
                  disabled
                  className="w-5 h-5 text-blue-600 bg-gray-700 border-gray-600 rounded focus:ring-blue-500"
                />
              </div>

              <div className="flex items-center justify-between p-3 bg-gray-800 rounded-lg">
                <div className="flex-1">
                  <h4 className="font-medium">Analytics Cookies</h4>
                  <p className="text-xs text-gray-400 mt-1">
                    Help us understand how visitors interact with our website by collecting and reporting information anonymously.
                  </p>
                </div>
                <input
                  type="checkbox"
                  checked={settings.analytics}
                  onChange={() => toggleSetting('analytics')}
                  className="w-5 h-5 text-blue-600 bg-gray-700 border-gray-600 rounded focus:ring-blue-500 cursor-pointer"
                />
              </div>

              <div className="flex items-center justify-between p-3 bg-gray-800 rounded-lg">
                <div className="flex-1">
                  <h4 className="font-medium">Marketing Cookies</h4>
                  <p className="text-xs text-gray-400 mt-1">
                    Used to deliver advertisements that are relevant to you and your interests.
                  </p>
                </div>
                <input
                  type="checkbox"
                  checked={settings.marketing}
                  onChange={() => toggleSetting('marketing')}
                  className="w-5 h-5 text-blue-600 bg-gray-700 border-gray-600 rounded focus:ring-blue-500 cursor-pointer"
                />
              </div>

              <div className="flex items-center justify-between p-3 bg-gray-800 rounded-lg">
                <div className="flex-1">
                  <h4 className="font-medium">Functional Cookies</h4>
                  <p className="text-xs text-gray-400 mt-1">
                    Enable enhanced functionality and personalization, such as videos and live chats.
                  </p>
                </div>
                <input
                  type="checkbox"
                  checked={settings.functional}
                  onChange={() => toggleSetting('functional')}
                  className="w-5 h-5 text-blue-600 bg-gray-700 border-gray-600 rounded focus:ring-blue-500 cursor-pointer"
                />
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 pt-4 border-t border-gray-700">
              <button
                onClick={() => setShowSettings(false)}
                className="px-4 py-2 bg-gray-700 hover:bg-gray-600 rounded-lg text-sm font-medium transition-colors"
              >
                Back
              </button>
              <button
                onClick={saveSettings}
                className="px-4 py-2 bg-blue-600 hover:bg-blue-500 rounded-lg text-sm font-medium transition-colors"
              >
                Save Preferences
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
