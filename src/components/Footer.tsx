"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiGithub, FiLinkedin, FiMail, FiCheck, FiFacebook, FiInstagram } from "react-icons/fi";

export default function Footer() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("lordkign1@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const socialLinks = [
    {
      href: "https://github.com/lordkign2",
      icon: <FiGithub />,
      label: "GitHub"
    },
    {
      href: "https://www.linkedin.com/in/umeh-kingsley-43a322369",
      icon: <FiLinkedin />,
      label: "LinkedIn"
    },
    {
      href: "https://www.facebook.com/share/1D7ew99sD8",
      icon: <FiFacebook />,
      label: "Facebook"
    },
    {
      href: "https://www.instagram.com/lordkign?igsh=NHhiYmdzNzZ1eHIy",
      icon: <FiInstagram />,
      label: "Instagram"
    }
  ];

  return (
    <footer className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50">
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 px-6 py-3 
        rounded-full bg-white/5 dark:bg-black/30 backdrop-blur-xl border border-white/10 shadow-2xl hover:shadow-xl transition-all duration-300">

        <p className="text-sm text-gray-300">&copy; {new Date().getFullYear()} Kingsley Umeh</p>

        <div className="flex gap-4 text-sm items-center">
          {socialLinks.map((link) => (
            <motion.a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-gray-300 hover:text-white hover:bg-white/10 rounded-full transition-colors cursor-target"
              aria-label={link.label}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              {link.icon}
            </motion.a>
          ))}

          <div className="w-px h-4 bg-white/20 mx-2" />

          <motion.button
            onClick={handleCopyEmail}
            className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 hover:bg-white/20 text-gray-300 hover:text-white transition-colors cursor-target text-xs font-medium"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            aria-label="Copy Email Address"
          >
            <AnimatePresence mode="wait">
              {copied ? (
                <motion.span
                  key="copied"
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.5 }}
                  className="flex items-center gap-1 text-green-400"
                >
                  <FiCheck size={14} />
                  <span>Copied!</span>
                </motion.span>
              ) : (
                <motion.span
                  key="email"
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.5 }}
                  className="flex items-center gap-1"
                >
                  <FiMail size={14} />
                  <span>Email Me</span>
                </motion.span>
              )}
            </AnimatePresence>
          </motion.button>
        </div>
      </div>
    </footer>
  );
}
