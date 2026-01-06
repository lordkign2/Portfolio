"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { FiMenu, FiX } from "react-icons/fi";


import ScrollProgress from "./ScrollProgress";
import { motion } from "framer-motion";

export default function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/projects", label: "Projects" },
    { href: "/contact", label: "Contact" }
  ];

  return (
    <>
      <ScrollProgress />
      <nav className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 w-auto transition-all duration-300 ${scrolled ? "top-2 scale-95" : "top-4 scale-100"
        }`}>
        <div className="flex justify-between items-center gap-6 px-6 py-3 rounded-full 
          bg-white/5 dark:bg-black/30 backdrop-blur-xl border border-white/10 shadow-2xl hover:shadow-xl transition-all duration-300">
          {/* Logo */}
          <Link
            href="/"
            className="text-xl font-bold text-white whitespace-nowrap cursor-target hover:text-blue-400 transition-colors"
          >
            Kingsley.U
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex gap-2 items-center">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="relative px-4 py-2 rounded-full text-sm font-medium transition-colors cursor-target"
              >
                {pathname === link.href && (
                  <motion.span
                    layoutId="bubble"
                    className="absolute inset-0 bg-white/10 dark:bg-white/10 rounded-full -z-10"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
                <span className={pathname === link.href ? "text-white" : "text-gray-300 hover:text-white"}>
                  {link.label}
                </span>
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-white/20 transition text-white cursor-target"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
          >
            {menuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="absolute top-16 left-1/2 -translate-x-1/2 md:hidden 
            bg-black/80 backdrop-blur-xl border border-white/10 shadow-2xl 
            px-6 py-4 rounded-2xl space-y-4 w-48 text-center animate-fadeIn">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className={`block p-2 rounded-lg hover:bg-white/10 cursor-target transition font-medium ${pathname === link.href
                    ? "text-blue-400 bg-white/5"
                    : "text-gray-300"
                  }`}
              >
                {link.label}
              </Link>
            ))}
          </div>
        )}
      </nav>
    </>
  );
}
