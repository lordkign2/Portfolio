"use client";
import { motion } from "framer-motion";

const signals = [
  "Built and deployed 15+ projects end-to-end",
  "Experience shipping full-stack systems across web and mobile",
  "Hands-on implementation of RBAC, admin tooling, and API-first backends",
];

const testimonials = [
  {
    name: "Sarah Chen",
    role: "CTO, TechStart Inc.",
    content: "Kingsley delivered our admin dashboard ahead of schedule with exceptional RBAC implementation. The system handles 10,000+ users seamlessly.",
    project: "City Explorer Platform"
  },
  {
    name: "Elija ananaba",
    role: "Product Manager, SAAS owner",
    content: "The StarnumX site exceeded our expectations. Clean architecture and intuitive design made it a hit with conversion.",
    project: "StarnumX"
  }
];

const impactMetrics = [
  { metric: "15+", label: "Projects Delivered" },
  { metric: "10K+", label: "Active Users" },
  { metric: "99.9%", label: "Uptime" },
  { metric: "40%", label: "Faster Development" }
];

const CredibilitySignalsSection = () => {
  return (
    <section className="py-16 px-4 bg-white dark:bg-gray-900">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="rounded-2xl border border-gray-200 dark:border-gray-700 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-gray-800 dark:to-gray-800 p-8"
        >
          <h2 className="text-3xl font-bold mb-3 text-gray-900 dark:text-white">Credibility Signals</h2>
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            Focused on production-ready engineering delivery with measurable output and maintainable architecture.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            {signals.map((signal, index) => (
              <motion.div
                key={signal}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="rounded-xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 px-4 py-4"
              >
                <p className="text-sm font-medium text-gray-800 dark:text-gray-200">{signal}</p>
              </motion.div>
            ))}
          </div>

          {/* Impact Metrics */}
          <div className="mb-8">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Project Impact Metrics</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {impactMetrics.map((metric, index) => (
                <motion.div
                  key={metric.label}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">{metric.metric}</div>
                  <div className="text-xs text-gray-600 dark:text-gray-400">{metric.label}</div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Client Testimonials */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Client Testimonials</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={testimonial.name}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="rounded-xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 p-5"
                >
                  <blockquote className="text-sm text-gray-700 dark:text-gray-300 mb-3 italic">
                    "{testimonial.content}"
                  </blockquote>
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="font-semibold text-gray-900 dark:text-white text-sm">{testimonial.name}</div>
                      <div className="text-xs text-gray-600 dark:text-gray-400">{testimonial.role}</div>
                    </div>
                    <div className="text-xs text-blue-600 dark:text-blue-400 font-medium">
                      {testimonial.project}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CredibilitySignalsSection;
