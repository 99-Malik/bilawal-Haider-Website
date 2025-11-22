"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { phoneNumber } from "@/libs/phoneNumber";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navigation = [
    { name: "Home", href: "/" },
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Contact", href: `tel:${phoneNumber}` },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled ? "py-4" : "py-6"
          }`}
      >
        <div className="max-w-7xl mx-auto px-6">
          <div
            className={`relative flex items-center justify-between px-6 py-3 rounded-2xl transition-all duration-500 ${isScrolled
              ? "bg-white/90 backdrop-blur-xl border border-slate-200 shadow-sm"
              : "bg-transparent"
              }`}
          >
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 group">
              <div className="relative flex items-center justify-center w-10 h-10 bg-gradient-to-br from-primary to-red-600 rounded-xl shadow-lg group-hover:scale-110 transition-transform duration-300">
                <svg
                  className="w-6 h-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
              <div className="flex flex-col">
                <span className={`text-lg font-bold tracking-tight leading-none ${isScrolled ? "text-slate-900" : "text-slate-900"}`}>
                  Appliance<span className="text-primary">Repair</span>
                </span>
                <span className={`text-[10px] font-medium tracking-widest uppercase ${isScrolled ? "text-slate-500" : "text-slate-600"}`}>
                  Expert Repairs
                </span>
              </div>
            </Link>

            {/* Desktop Nav */}
            <nav className={`hidden lg:flex items-center gap-1 p-1 rounded-full border backdrop-blur-sm ${isScrolled ? "bg-slate-100/50 border-slate-200" : "bg-white/50 border-white/20"}`}>
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`px-5 py-2 text-sm font-medium rounded-full transition-all duration-300 ${isScrolled ? "text-slate-600 hover:text-slate-900 hover:bg-white" : "text-slate-700 hover:text-slate-900 hover:bg-white/80"}`}
                >
                  {item.name}
                </Link>
              ))}
            </nav>

            {/* CTA Buttons */}
            <div className="hidden lg:flex items-center gap-4">
              <Link
                href={`tel:${phoneNumber}`}
                className={`flex items-center gap-2 transition-colors font-medium text-sm ${isScrolled ? "text-slate-600 hover:text-primary" : "text-slate-700 hover:text-primary"}`}
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span>{phoneNumber}</span>
              </Link>
              <Link
                href={`https://wa.me/${phoneNumber}`}
                target="_blank"
                className="px-5 py-2.5 bg-primary hover:bg-red-700 text-white font-bold text-sm rounded-xl shadow-lg shadow-primary/20 hover:shadow-primary/40 hover:-translate-y-0.5 transition-all duration-300"
              >
                Book Now
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(true)}
              className={`lg:hidden p-2 rounded-lg transition-colors ${isScrolled ? "text-slate-600 hover:bg-slate-100" : "text-slate-900 hover:bg-white/20"}`}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-slate-900/20 backdrop-blur-sm z-[60]"
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
              className="fixed top-0 right-0 h-full w-80 bg-white border-l border-slate-200 z-[70] p-6 shadow-2xl"
            >
              <div className="flex items-center justify-between mb-8">
                <span className="text-xl font-bold text-slate-900">Menu</span>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-2 text-slate-500 hover:text-slate-900 hover:bg-slate-100 rounded-lg transition-colors"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              <nav className="space-y-2">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className="block px-4 py-3 text-lg font-medium text-slate-600 hover:text-primary hover:bg-slate-50 rounded-xl transition-all"
                  >
                    {item.name}
                  </Link>
                ))}
              </nav>

              <div className="mt-8 pt-8 border-t border-slate-100 space-y-4">
                <Link
                  href={`tel:${phoneNumber}`}
                  className="flex items-center justify-center gap-2 w-full py-3 bg-slate-100 hover:bg-slate-200 text-slate-900 font-medium rounded-xl transition-colors"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  Call Now
                </Link>
                <Link
                  href={`https://wa.me/${phoneNumber}`}
                  className="flex items-center justify-center gap-2 w-full py-3 bg-primary hover:bg-red-700 text-white font-bold rounded-xl transition-colors shadow-lg shadow-primary/20"
                >
                  WhatsApp Us
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
