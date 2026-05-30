"use client";
import { motion } from "framer-motion";
import { FiCpu, FiEye, FiSliders, FiTerminal } from "react-icons/fi";

export default function AboutManifesto() {
  const values = [
    {
      title: "Performance First",
      icon: <FiCpu className="text-blue-400" />,
      desc: "Architecting web systems with minimal memory footprints, GPU-accelerated compositions, and optimized tree-shaked bundles, targeting first contentful paint sequences under 1.5 seconds."
    },
    {
      title: "Accessible by Design",
      icon: <FiEye className="text-purple-400" />,
      desc: "Committed to WCAG 2.2 AA specifications. Engineering semantic HTML structures, dynamic focus indicators, and custom keyboard cursor safety hooks to ensure parity for all users."
    },
    {
      title: "Clean System Architecture",
      icon: <FiSliders className="text-emerald-400" />,
      desc: "Enforcing strict server-by-default boundary discipline in Next.js. Adhering to typed data schemas, component decoupling, and highly predictable REST/WebSocket backend integration."
    },
    {
      title: "Continuous Hardening",
      icon: <FiTerminal className="text-pink-400" />,
      desc: "Leveraging structured data validation, automated pipeline test runs, HTTP security headers, and conversion metrics to maintain high operational standards."
    }
  ];

  return (
    <section className="py-20 w-full">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Engineering Manifesto</h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            My core operational philosophies that hold every line of code accountable to high professional standards.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {values.map((val, idx) => (
            <motion.div
              key={val.title}
              className="p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm shadow-xl hover:bg-white/10 transition-all duration-300 cursor-default"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="text-3xl p-3 bg-white/10 rounded-xl">
                  {val.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">{val.title}</h3>
              </div>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                {val.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
