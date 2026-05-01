"use client";
import { motion } from "framer-motion";

const SystemDesignSnapshotSection = () => {
  return (
    <section className="py-20 px-4 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white">System Design Snapshot</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Typical architecture pattern I use for scalable full-stack marketplace and internal-tool platforms.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="rounded-2xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 p-8 shadow-xl"
        >
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4 items-center">
            <Node label="Client" detail="React / Next.js UI" />
            <Arrow />
            <Node label="API Layer" detail="Node.js / Express" />
            <Arrow />
            <Node label="Auth + Data" detail="JWT Middleware + MongoDB" />
          </div>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
            <Info title="Security Layer" body="JWT verification, role checks (Admin, Agent, User), and protected routes for sensitive operations." />
            <Info title="Data Model" body="Collections typically include Users, Listings, Transactions, and Media metadata with indexed query paths." />
            <Info title="API Pattern" body="REST endpoints grouped by domain with validation middleware, standardized errors, and explicit service boundaries." />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const Node = ({ label, detail }: { label: string; detail: string }) => (
  <div className="rounded-xl bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 px-4 py-5 text-center">
    <p className="font-bold text-blue-800 dark:text-blue-300">{label}</p>
    <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">{detail}</p>
  </div>
);

const Arrow = () => (
  <div className="flex justify-center text-gray-400 dark:text-gray-500 text-2xl select-none" aria-hidden="true">
    <span className="hidden md:inline">→</span>
    <span className="md:hidden">↓</span>
  </div>
);

const Info = ({ title, body }: { title: string; body: string }) => (
  <div className="rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 p-4">
    <p className="font-semibold text-gray-900 dark:text-white mb-1">{title}</p>
    <p className="text-gray-600 dark:text-gray-300">{body}</p>
  </div>
);

export default SystemDesignSnapshotSection;
