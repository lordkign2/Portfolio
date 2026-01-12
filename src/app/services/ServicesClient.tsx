'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from "framer-motion";
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
  DiamondIcon,
  CodeIcon,
  CpuIcon,
  SmartphoneIcon,
  DatabaseIcon
} from '../../components/ui/CustomIcons';
import { SiReact, SiNextdotjs, SiNodedotjs, SiPython, SiFlutter, SiGodotengine, SiGoogleanalytics } from "react-icons/si";

export default function ServicesClient() {
  const [expandedPackage, setExpandedPackage] = useState<string | null>(null);
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
      title: "Premium All-In-One Package — Digital Domination Suite",
      description: "We handle everything. You focus on running your business.",
      priceInfo: "Maximum impact",
      bestFor: "Serious businesses, startups, real estate, agencies, fintech, schools",
      includes: [
        "Website & Infrastructure: Fully custom website (10–15 pages or web app)",
        "Advanced UI/UX design",
        "Speed optimization",
        "High-security hosting",
        "Domain (1 year)",
        "SSL + backups",
        "Marketing & Growth: Google Ads setup + management (1 month)",
        "SEO foundation + keyword strategy",
        "Landing pages for ads",
        "Conversion optimization",
        "Analytics + heatmap tracking",
        "Brand & Automation: Brand-aligned design system",
        "Business email setup",
        "WhatsApp & chatbot integration",
        "CRM or lead tracking setup",
        "Social media pixel integrations",
        "Ongoing Support: 3 months website maintenance",
        "Monthly performance reports",
        "Priority support"
      ],
      positioning: "We handle everything. You focus on running your business.",
      icon: <StarIcon className="w-8 h-8" />,
      isPremium: true
    }
  ];

  const developmentServices = [
    {
      title: "Custom Web Applications",
      description: "Scalable, high-performance web apps tailored to your specific business needs.",
      skills: [<SiReact key="react" />, <SiNextdotjs key="next" />, <SiNodedotjs key="node" />],
      icon: <CodeIcon className="w-8 h-8" />,
      features: ["SaaS Platforms", "Internal Tools", "Client Portals"]
    },
    {
      title: "Mobile App Development",
      description: "Native-quality mobile experiences for both iOS and Android platforms.",
      skills: [<SiReact key="rn" />, <SiFlutter key="flutter" />],
      icon: <SmartphoneIcon className="w-8 h-8" />,
      features: ["Cross-platform", "App Store Deployment", "Offline Capability"]
    },
    {
      title: "Backend & API Systems",
      description: "Robust server-side architecture to power your applications securely.",
      skills: [<SiNodedotjs key="node" />, <SiPython key="python" />, <DatabaseIcon key="db" className="w-5 h-5" />],
      icon: <DatabaseIcon className="w-8 h-8" />,
      features: ["RESTful APIs", "Real-time Data", "Secure Auth"]
    },
    {
      title: "AI & Automation Solutions",
      description: "Integrate intelligent features to automate workflows and enhance user experience.",
      skills: [<SiPython key="py" />, <SiGoogleanalytics key="ga" />],
      icon: <CpuIcon className="w-8 h-8" />,
      features: ["Chatbots", "Data Analysis", "Process Automation"]
    },
    {
      title: "Interactive Experiences & Games",
      description: "Engaging 2D/3D experiences and games for web and mobile.",
      skills: [<SiGodotengine key="godot" />],
      icon: <DiamondIcon className="w-8 h-8" />,
      features: ["Web Games", "Interactive UI", "Gamification"]
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
          className="text-center mb-24 relative z-10 pt-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 mb-8 px-4 py-2 rounded-full bg-blue-50/50 dark:bg-blue-900/20 border border-blue-100 dark:border-blue-800 backdrop-blur-sm">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
            </span>
            <span className="text-sm font-semibold text-blue-600 dark:text-blue-400 tracking-wide uppercase">
              Accepting New Projects
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl font-extrabold mb-8 tracking-tight leading-tight">
            Build a Digital Presence That <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-500 to-purple-600 animate-gradient">
              Grows Your Business
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-10 leading-relaxed">
            A beautiful website is useless if it doesn&#39;t convert. I build high-performance,
            business-focused digital solutions designed to attract the right audience and increase revenue.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-20">
            <button
              onClick={() => document.getElementById('packages')?.scrollIntoView({ behavior: 'smooth' })}
              className="cursor-target cursor-pointer px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-700 text-white rounded-full font-bold text-lg shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 hover:scale-105 transition-all duration-300"
            >
              View Packages
            </button>
            <a
              href="/projects"
              className="cursor-target cursor-pointer px-8 py-4 bg-white/50 dark:bg-gray-800/50 text-gray-900 dark:text-white border border-gray-200 dark:border-gray-700 rounded-full font-bold text-lg hover:bg-white dark:hover:bg-gray-800 backdrop-blur-sm transition-all duration-300"
            >
              See My Work
            </a>
          </div>

          {/* Integrated Value Props */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto text-left">
            {[
              { title: "Build Trust", description: "Professional design that establishes instant credibility with your visitors.", icon: <HandshakeIcon className="w-6 h-6" /> },
              { title: "Attract Audiences", description: "SEO-optimized structure ensuring you get found by the right people.", icon: <TargetIcon className="w-6 h-6" /> },
              { title: "Convert Customers", description: "Strategic layouts and CTAs that turn casual visitors into paying clients.", icon: <MoneyIcon className="w-6 h-6" /> }
            ].map((item, idx) => (
              <motion.div
                key={item.title}
                className="bg-white/60 dark:bg-gray-800/60 backdrop-blur-md border border-white/40 dark:border-gray-700/50 rounded-2xl p-6 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 + (idx * 0.1) }}
              >
                <div className="bg-blue-50 dark:bg-blue-900/30 w-12 h-12 rounded-xl flex items-center justify-center text-blue-600 dark:text-blue-400 mb-4 group-hover:scale-110 transition-transform duration-300">
                  {item.icon}
                </div>
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">{item.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Business Packages */}
        <motion.div
          id="packages"
          className="mb-20"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            <span className="text-blue-500 inline-block mr-2"><BriefcaseIcon className="w-10 h-10" /></span> Business Packages
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {businessPackages.map((pkg, idx) => (
              <motion.div
                key={pkg.title}
                layout
                className={`bg-white/80 dark:bg-gray-800/80 backdrop-blur-md border rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 relative overflow-hidden flex flex-col ${pkg.isPremium
                  ? "border-blue-500/50 bg-gradient-to-br from-blue-50/20 to-indigo-50/20 dark:from-blue-900/20 dark:to-indigo-900/20"
                  : "border-white/30 dark:border-gray-700/50"
                  }`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
              >
                {pkg.isPremium && (
                  <div className="absolute top-4 right-4 bg-gradient-to-r from-blue-600 to-indigo-700 text-white px-2 py-0.5 rounded-full text-xs font-bold">
                    Premium
                  </div>
                )}

                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 rounded-lg bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400">
                    {pkg.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white leading-tight">
                    {pkg.title.split(" — ")[0]}
                  </h3>
                </div>

                <div className="flex-grow">
                  <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm leading-relaxed">
                    {pkg.description}
                  </p>
                  <p className="text-xs font-semibold text-blue-500 dark:text-blue-400 mb-2 uppercase tracking-wide">
                    {pkg.priceInfo}
                  </p>
                </div>

                <AnimatePresence>
                  {expandedPackage === pkg.title && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      className="overflow-hidden"
                    >
                      <div className="border-t border-gray-100 dark:border-gray-700 pt-4 mt-4 mb-4">
                        <div className="mb-4">
                          <h4 className="font-bold text-gray-800 dark:text-gray-200 mb-2 text-sm">Best for:</h4>
                          <p className="text-gray-600 dark:text-gray-300 text-sm">{pkg.bestFor}</p>
                        </div>

                        <div className="mb-4">
                          <h4 className="font-bold text-gray-800 dark:text-gray-200 mb-2 text-sm">Includes:</h4>
                          <ul className="space-y-1">
                            {pkg.includes.map((item, itemIdx) => (
                              <li key={itemIdx} className="flex items-start text-sm">
                                <span className="text-green-500 mr-2 inline-block mt-0.5"><DiamondIcon className="w-3 h-3" /></span>
                                <span className="text-gray-600 dark:text-gray-300">{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {pkg.notIncluded && (
                          <div className="mb-4">
                            <h4 className="font-bold text-gray-800 dark:text-gray-200 mb-2 text-sm">Not included:</h4>
                            <ul className="space-y-1">
                              {pkg.notIncluded.map((item, itemIdx) => (
                                <li key={`not-${itemIdx}`} className="flex items-start text-sm">
                                  <span className="text-red-500 mr-2 inline-block mt-0.5">✕</span>
                                  <span className="text-gray-600 dark:text-gray-300">{item}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}

                        {pkg.notes && (
                          <div className="mb-4">
                            <h4 className="font-bold text-gray-800 dark:text-gray-200 mb-2 text-sm">Note:</h4>
                            <ul className="space-y-1">
                              {pkg.notes.map((note, noteIdx) => (
                                <li key={`note-${noteIdx}`} className="flex items-start text-sm">
                                  <span className="text-yellow-500 mr-2 inline-block mt-0.5">•</span>
                                  <span className="text-gray-600 dark:text-gray-300">{note}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                <div className="flex gap-2 mt-4 pt-4 border-t border-gray-100 dark:border-gray-700">
                  <button
                    onClick={() => setExpandedPackage(expandedPackage === pkg.title ? null : pkg.title)}
                    className="cursor-target flex-1 px-3 py-2 text-sm font-medium text-gray-600 dark:text-gray-300 bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 rounded-lg transition-colors"
                  >
                    {expandedPackage === pkg.title ? "Less Info" : "More Info"}
                  </button>
                  <button
                    onClick={() => {
                      import('../../utils/eventTracker').then(({ trackServiceInquiry }) => {
                        trackServiceInquiry(pkg.title);
                      });
                      window.open(`https://wa.me/2347069939337?text=Hello%2C%20I'm%20interested%20in%20the%20${encodeURIComponent(pkg.title)}%20package.`, '_blank');
                    }}
                    className="cursor-target flex-1 px-3 py-2 text-sm font-bold text-white bg-gradient-to-r from-blue-600 to-indigo-700 hover:from-blue-700 hover:to-indigo-800 rounded-lg shadow-md hover:shadow-lg transition-all"
                  >
                    Inquire
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Specialized Development Services */}
        <motion.div
          className="mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            <span className="text-purple-500 inline-block mr-2"><CodeIcon className="w-10 h-10" /></span> Specialized Development
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {developmentServices.map((service, idx) => (
              <motion.div
                key={service.title}
                className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-md border border-white/30 dark:border-gray-700/50 rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 rounded-lg bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white leading-tight">
                    {service.title}
                  </h3>
                </div>

                <p className="text-gray-600 dark:text-gray-300 mb-6 text-sm leading-relaxed">
                  {service.description}
                </p>

                <div className="mb-6">
                  <div className="flex flex-wrap gap-2 text-gray-400 dark:text-gray-500">
                    {service.skills.map((skill, i) => (
                      <span key={i} className="text-2xl hover:text-blue-500 transition-colors">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-gray-100 dark:border-gray-700 flex flex-wrap gap-2">
                  {service.features.map((feature, i) => (
                    <span key={i} className="text-xs font-medium px-2 py-1 rounded-full bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300">
                      {feature}
                    </span>
                  ))}
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