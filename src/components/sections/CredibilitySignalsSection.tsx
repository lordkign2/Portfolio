"use client";
import { motion } from "framer-motion";

const signals = [
  "Built and deployed 15+ projects end-to-end",
  "Experience shipping full-stack systems across web and mobile",
  "Hands-on implementation of RBAC, admin tooling, and API-first backends",
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
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
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
          <p className="mt-6 text-sm text-gray-500 dark:text-gray-400">
            Next upgrade: add 1-2 client testimonials and project impact metrics to strengthen authority for global hiring.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default CredibilitySignalsSection;
