"use client";
import { motion } from "framer-motion";

const focusAreas = [
  "Role-based access control systems (RBAC)",
  "RESTful API architecture",
  "Admin dashboards and internal tools",
  "File upload and media pipelines",
  "Database schema design (NoSQL focus)",
];

const CoreEngineeringFocusSection = () => {
  return (
    <section className="py-20 px-4 bg-white dark:bg-gray-900">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white">Core Engineering Focus</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            I design and ship production-oriented systems with clear architecture, secure access control, and maintainable backend foundations.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {focusAreas.map((area, index) => (
            <motion.div
              key={area}
              className="rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 px-6 py-5"
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
            >
              <p className="text-base font-medium text-gray-800 dark:text-gray-100">{area}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoreEngineeringFocusSection;
