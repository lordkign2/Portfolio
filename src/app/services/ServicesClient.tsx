'use client';
import { motion } from "framer-motion";
import Orb from '../../components/ui/Orb';
import {
  RocketIcon,
  ChartGrowthIcon,
  TargetIcon,
  TrophyIcon,
  StarIcon,
  BriefcaseIcon,
  PhoneIcon,
  HandshakeIcon,
  MoneyIcon,
  ArrowRightIcon,
  DiamondIcon
} from '../../components/ui/CustomIcons';

export default function ServicesClient() {
  const businessPackages = [
    {
      title: "Starter Package — Online Presence Kickstart",
      description: "Everything you need to show up online professionally.",
      priceInfo: "Most affordable",
      bestFor: "New businesses, freelancers, SMEs just getting online",
      includes: [
        "1–3 page professional website (Home, About, Contact)",
        "Mobile-responsive design",
        "Basic SEO setup (titles, meta tags)",
        "Contact form (email notifications)",
        "Free .com.ng or .ng domain (1 year)",
        "Basic hosting (1 year)",
        "Google Maps integration",
        "Basic security (SSL)"
      ],
      notIncluded: [
        "Ads management",
        "Advanced SEO",
        "Content writing"
      ],
      positioning: "Everything you need to show up online professionally.",
      icon: <RocketIcon className="w-8 h-8" />
    },
    {
      title: "Growth Package — Business Growth Website",
      description: "A website that doesn't just exist — it brings customers.",
      priceInfo: "Best value",
      bestFor: "Growing businesses that want leads and conversions",
      includes: [
        "5–7 page custom website",
        "Conversion-optimized layout (CTAs, lead forms)",
        "Mobile & tablet optimization",
        "On-page SEO (keywords, headings, speed optimization)",
        "Google Analytics + Search Console setup",
        "Business email (e.g., info@yourbusiness.com)",
        ".com or .ng domain (1 year)",
        "Premium hosting (1 year)",
        "WhatsApp chat integration",
        "Google My Business setup",
        "1 month basic site maintenance"
      ],
      positioning: "A website that doesn't just exist — it brings customers.",
      icon: <ChartGrowthIcon className="w-8 h-8" />
    },
    {
      title: "Ads Booster Package — Website + Traffic Combo",
      description: "We don't just build your website — we send buyers to it.",
      priceInfo: "Fast results",
      bestFor: "Businesses that want customers immediately",
      includes: [
        "Everything in Growth Package",
        "Google Ads account setup",
        "Keyword research for ads",
        "1 landing page optimized for ads",
        "Google Ads campaign setup (Search Ads)",
        "Conversion tracking (calls, forms, WhatsApp)",
        "2 weeks ad optimization support"
      ],
      notes: [
        "Ad budget paid by client directly to Google"
      ],
      positioning: "We don't just build your website — we send buyers to it.",
      icon: <TargetIcon className="w-8 h-8" />
    },
    {
      title: "Authority Package — Brand & Trust Builder",
      description: "Build trust, authority, and a strong digital brand.",
      priceInfo: "Long-term growth",
      bestFor: "Companies that want credibility and strong branding",
      includes: [
        "7–10 page premium website",
        "Custom UI/UX design (brand-aligned)",
        "Content structure guidance",
        "Advanced SEO setup",
        "Blog/news section",
        "Testimonials & portfolio pages",
        "Google Business profile optimization",
        "Email setup + autoresponder",
        "Domain + premium hosting (1 year)",
        "Monthly performance report (1 month)"
      ],
      positioning: "Build trust, authority, and a strong digital brand.",
      icon: <TrophyIcon className="w-8 h-8" />
    },
    {
      title: "⭐ Premium All-In-One Package — Digital Domination Suite",
      description: "We handle everything. You focus on running your business.",
      priceInfo: "Maximum impact",
      bestFor: "Serious businesses, startups, real estate, agencies, fintech, schools",
      includes: [
        "🌐 Website & Infrastructure: Fully custom website (10–15 pages or web app)",
        "Advanced UI/UX design",
        "Speed optimization",
        "High-security hosting",
        "Domain (1 year)",
        "SSL + backups",
        "📈 Marketing & Growth: Google Ads setup + management (1 month)",
        "SEO foundation + keyword strategy",
        "Landing pages for ads",
        "Conversion optimization",
        "Analytics + heatmap tracking",
        "🧠 Brand & Automation: Brand-aligned design system",
        "Business email setup",
        "WhatsApp & chatbot integration",
        "CRM or lead tracking setup",
        "Social media pixel integrations",
        "🛠 Ongoing Support: 3 months website maintenance",
        "Monthly performance reports",
        "Priority support"
      ],
      positioning: "We handle everything. You focus on running your business.",
      icon: <StarIcon className="w-8 h-8" />,
      isPremium: true
    }
  ];

  return (
    <section className="relative min-h-screen pt-32 px-6 bg-gradient-to-b from-white to-gray-100 dark:from-gray-900 dark:to-gray-800 text-gray-900 dark:text-gray-100">
      <div className="w-full h-full absolute inset-0 z-0">
        <Orb
          hoverIntensity={0.5}
          rotateOnHover={true}
          hue={0}
          forceHoverState={false}
        />
      </div>

      <div className="max-w-6xl mx-auto z-10 pb-20">
        {/* Hero Section */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Build a Website That Grows Your Business <span className="text-blue-500 inline-block ml-2"><RocketIcon className="w-8 h-8" /></span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 max-w-4xl mx-auto">
            A beautiful website is useless if it doesn&#39;t bring customers.
          </p>
        </motion.div>

        {/* Value Proposition */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <p className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 max-w-4xl mx-auto mb-8">
            I design and build business-focused websites that help you:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[
              { title: "Build Trust", icon: <HandshakeIcon className="w-12 h-12" /> },
              { title: "Attract the Right Audience", icon: <TargetIcon className="w-12 h-12" /> },
              { title: "Convert Visitors into Paying Customers", icon: <MoneyIcon className="w-12 h-12" /> }
            ].map((item, idx) => (
              <motion.div
                key={item.title}
                className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-lg border border-white/30 dark:border-gray-700/50 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 cursor-target"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.2 + 0.3 }}
                whileHover={{ y: -5 }}
              >
                <div className="flex justify-center mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">{item.title}</h3>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Business Packages */}
        <motion.div
          className="mb-20"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            <span className="text-blue-500 inline-block mr-2"><BriefcaseIcon className="w-10 h-10" /></span> Business Packages
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {businessPackages.map((pkg, idx) => (
              <motion.div
                key={pkg.title}
                className={`bg-white/80 dark:bg-gray-800/80 backdrop-blur-lg border rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 ${
                  pkg.isPremium 
                    ? "border-blue-500/50 bg-gradient-to-br from-blue-50/20 to-indigo-50/20 dark:from-blue-900/20 dark:to-indigo-900/20 relative overflow-hidden" 
                    : "border-white/30 dark:border-gray-700/50"
                }`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 + 1 }}
                whileHover={{ y: -5 }}
              >
                {pkg.isPremium && (
                  <div className="absolute top-4 right-4 bg-gradient-to-r from-blue-600 to-indigo-700 text-white px-3 py-1 rounded-full text-sm font-bold">
                    Premium
                  </div>
                )}
                <div className="flex flex-col gap-4">
                  <div className="flex items-start gap-4">
                    <div className="text-3xl">{pkg.icon}</div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold mb-2 text-gray-900 dark:text-white">{pkg.title}</h3>
                      <p className="text-gray-600 dark:text-gray-300 mb-3">{pkg.description}</p>
                      <p className="text-gray-700 dark:text-gray-200 font-semibold mb-4">{pkg.priceInfo}</p>
                                            
                      <div className="mb-4">
                        <h4 className="font-bold text-gray-800 dark:text-gray-200 mb-2">Best for:</h4>
                        <p className="text-gray-600 dark:text-gray-300">{pkg.bestFor}</p>
                      </div>
                                            
                      <div className="mb-4">
                        <h4 className="font-bold text-gray-800 dark:text-gray-200 mb-2">Includes:</h4>
                        <ul className="space-y-1">
                          {pkg.includes.map((item, itemIdx) => (
                            <li key={itemIdx} className="flex items-start">
                              <span className="text-green-500 mr-2 inline-block mt-1"><DiamondIcon className="w-3 h-3" /></span>
                              <span className="text-gray-600 dark:text-gray-300">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                                            
                      {pkg.notIncluded && (
                        <div className="mb-4">
                          <h4 className="font-bold text-gray-800 dark:text-gray-200 mb-2">Not included:</h4>
                          <ul className="space-y-1">
                            {pkg.notIncluded.map((item, itemIdx) => (
                              <li key={`not-${itemIdx}`} className="flex items-start">
                                <span className="text-red-500 mr-2 inline-block mt-1">✕</span>
                                <span className="text-gray-600 dark:text-gray-300">{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                                            
                      {pkg.notes && (
                        <div className="mb-4">
                          <h4 className="font-bold text-gray-800 dark:text-gray-200 mb-2">Note:</h4>
                          <ul className="space-y-1">
                            {pkg.notes.map((note, noteIdx) => (
                              <li key={`note-${noteIdx}`} className="flex items-start">
                                <span className="text-yellow-500 mr-2 inline-block mt-1">•</span>
                                <span className="text-gray-600 dark:text-gray-300">{note}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                                            
                      <div className="text-sm text-gray-500 dark:text-gray-400 italic mb-4">
                        {pkg.positioning}
                      </div>
                    </div>
                  </div>
                  <a
                    onClick={() => {
                      // Track service inquiry
                      import('../../utils/eventTracker').then(({ trackServiceInquiry }) => {
                        trackServiceInquiry(pkg.title);
                      });
                                        
                      // Open WhatsApp with pre-filled message
                      window.open(`https://wa.me/2347069939337?text=Hello%2C%20I'm%20interested%20in%20the%20${encodeURIComponent(pkg.title)}%20package.`, '_blank');
                    }}
                    className="cursor-target inline-block bg-gradient-to-r from-green-500 to-emerald-600 text-white px-4 py-2 rounded-lg font-bold hover:from-green-600 hover:to-emerald-700 transition-all transform hover:scale-[1.02] shadow-md hover:shadow-lg text-center cursor-pointer"
                  >
                    Inquire About This Package
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          className="backdrop-blur-sm border border-white/30 dark:border-gray-700/50 rounded-2xl p-6 mb-6 shadow-lg hover:shadow-xl transition-all duration-300"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.2 }}
          whileHover={{ y: -5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            <span className="text-blue-500 inline-block mr-2"><PhoneIcon className="w-10 h-10" /></span> Let&#39;s Work Together
          </h2>
          <p className="text-xl text-gray-700 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
            Tell me about your business and I&#39;ll recommend the best package.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <a 
              href="/projects"
              className="cursor-target text-blue-300 hover:text-blue-100 transition-colors duration-300 font-medium underline decoration-blue-300 hover:decoration-blue-100"
            >
              View My Projects
            </a>
            <span className="text-gray-400 mx-2">|</span>
            <a 
              href="/about"
              className="cursor-target text-blue-300 hover:text-blue-100 transition-colors duration-300 font-medium underline decoration-blue-300 hover:decoration-blue-100"
            >
              About Me
            </a>
            <span className="text-gray-400 mx-2">|</span>
            <a 
              href="/contact"
              className="cursor-target text-blue-300 hover:text-blue-100 transition-colors duration-300 font-medium underline decoration-blue-300 hover:decoration-blue-100"
            >
              Contact
            </a>
          </div>
          <a
            onClick={() => {
              // Track service inquiry
              import('../../utils/eventTracker').then(({ trackServiceInquiry }) => {
                trackServiceInquiry('General Services');
              });
              
              // Open WhatsApp with pre-filled message
              window.open('https://wa.me/2347069939337?text=Hello%2C%20I%27m%20interested%20in%20your%20services.', '_blank');
            }}
            className="cursor-target inline-block bg-gradient-to-r from-blue-600 to-indigo-700 text-white px-8 py-4 rounded-lg font-bold hover:from-blue-700 hover:to-indigo-800 transition-all transform hover:scale-105 shadow-lg hover:shadow-xl cursor-pointer"
          >
            <ArrowRightIcon className="inline-block w-5 h-5 mr-2" /> Request a Free Consultation
          </a>
        </motion.div>
      </div>
    </section>
  );
}