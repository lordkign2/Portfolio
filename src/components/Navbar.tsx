"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { FiMenu, FiX } from "react-icons/fi";


export default function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/projects", label: "Projects" },
    { href: "/contact", label: "Contact" }
  ];

  return (
    <nav className="fixed top-4 left-1/2 -translate-x-1/2 z-10 w-auto">
      <div className="flex justify-between items-center gap-6 px-6 py-2 rounded-full 
        bg-white/10 dark:bg-black/20 backdrop-blur-lg border border-white/20 shadow-lg">
        {/* Logo */}
        <Link
          href="/"
          className="text-lg font-semibold text-white whitespace-nowrap cursor-target"
        >
          MyPortfolio
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex gap-6 items-center">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`hover:text-blue-400 transition cursor-target ${
                pathname === link.href
                  ? "text-blue-400 font-semibold"
                  : "text-white"
              }`}
            >
              {link.label}
            </Link>
          ))}
          
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden p-2 rounded-lg hover:bg-white/20 transition text-white cursor-target"
        >
          {menuOpen ? <FiX size={20} /> : <FiMenu size={20} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="absolute top-14 left-1/2 -translate-x-1/2 md:hidden 
          bg-white/10 dark:bg-black/20 backdrop-blur-lg border border-white/20 shadow-lg 
          px-6 py-4 rounded-xl space-y-4 w-48 text-center">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className={`block hover:text-blue-400 cursor-target transition  ${
                pathname === link.href
                  ? "text-blue-400 font-semibold"
                  : "text-white"
              }`}
            >
              {link.label}
            </Link>
          ))}
         
        </div>
      )}
    </nav>
  );
}
