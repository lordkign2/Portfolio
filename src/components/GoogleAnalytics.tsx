import Script from 'next/script';

export default function GoogleAnalytics() {
  if (process.env.NODE_ENV !== 'production') {
    return null;
  }

  return (
    <>
      {/* Global Site Tag (gtag.js) - Google Analytics */}
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
            
            // Extract and store UTM parameters
            const urlParams = new URLSearchParams(window.location.search);
            const utmSource = urlParams.get('utm_source');
            const utmMedium = urlParams.get('utm_medium');
            const utmCampaign = urlParams.get('utm_campaign');
            const utmTerm = urlParams.get('utm_term');
            const utmContent = urlParams.get('utm_content');
            
            // Store UTM params in session storage for later use
            if (utmSource || utmMedium || utmCampaign || utmTerm || utmContent) {
              const utmParams = {};
              if (utmSource) utmParams.utm_source = utmSource;
              if (utmMedium) utmParams.utm_medium = utmMedium;
              if (utmCampaign) utmParams.utm_campaign = utmCampaign;
              if (utmTerm) utmParams.utm_term = utmTerm;
              if (utmContent) utmParams.utm_content = utmContent;
              
              sessionStorage.setItem('utm_params', JSON.stringify(utmParams));
            }
            
            // Get stored UTM params
            const storedUtmParams = sessionStorage.getItem('utm_params');
            const utmParams = storedUtmParams ? JSON.parse(storedUtmParams) : {};
            
            gtag('config', '${process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID}', {
              page_path: window.location.pathname,
              ...utmParams
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
              });
            `,
          }}
        />
      )}
    </>
  );
}