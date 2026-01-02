"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { Phone, Menu, X } from "lucide-react";
import { phoneNumber } from "@/libs/phoneNumber";
import { getBrandConfig, lightenColor } from "@/utils/brandConfig";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  // Detect brand from pathname
  const brandMatch = pathname?.match(/\/repair\/([^\/]+)/);
  const brand = brandMatch ? brandMatch[1] : null;
  const brandInfo = brand ? getBrandConfig(brand) : null;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navigation = [
    { name: "Home", href: brandInfo ? `/repair/${brand}` : "/" },
    { name: "About", href: brandInfo ? `/repair/${brand}#about` : "#about" },
    { name: "Services", href: brandInfo ? `/repair/${brand}#services` : "#services" },
    { name: "Contact", href: `tel:${phoneNumber}` },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled 
            ? "bg-white shadow-md border-b border-slate-200" 
            : "bg-white/95 backdrop-blur-sm"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <Link 
              href={brandInfo ? `/repair/${brand}` : "/"} 
              className="flex items-center flex-shrink-0"
            >
              {brandInfo ? (
                <div className="relative flex items-center h-10 lg:h-12">
                  <Image
                    src={brandInfo.logo}
                    alt={`${brandInfo.name} Logo`}
                    width={140}
                    height={60}
                    className="object-contain h-8 lg:h-10 w-auto"
                    priority
                  />
                </div>
              ) : (
                <div className="flex items-center gap-2">
                  <div 
                    className="relative flex items-center justify-center w-9 h-9 rounded-lg"
                    style={{ background: brandInfo && brandInfo.color ? `linear-gradient(to bottom right, ${brandInfo.color}, ${lightenColor(brandInfo.color, 0.2)})` : 'linear-gradient(to bottom right, #DC2626, #EF4444)' }}
                  >
                    <svg
                      className="w-5 h-5 text-white"
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
                  <div className="flex flex-col leading-tight">
                    <span className="text-base lg:text-lg font-bold text-slate-900">
                      Quick<span style={{ color: brandInfo?.color || '#DC2626' }}>Fix</span>
                    </span>
                    <span className="text-[9px] lg:text-[10px] font-medium text-slate-500 uppercase tracking-wider">
                      Service
                    </span>
                  </div>
                </div>
              )}
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-8 ml-12">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-sm font-medium text-slate-700 hover:text-slate-900 transition-colors relative group"
                  style={{ '--hover-color': brandInfo?.color || '#DC2626' }}
                  onMouseEnter={(e) => e.currentTarget.style.color = brandInfo?.color || '#DC2626'}
                  onMouseLeave={(e) => e.currentTarget.style.color = '#475569'}
                >
                  {item.name}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-current transition-all duration-300 group-hover:w-full"></span>
                </Link>
              ))}
            </nav>

            {/* Desktop CTA */}
            <div className="hidden lg:flex items-center gap-4 ml-auto">
              <Link
                href={`tel:${phoneNumber}`}
                className="flex items-center gap-2 text-sm font-medium transition-colors"
                style={{ color: '#475569', '--hover-color': brandInfo?.color || '#DC2626' }}
                onMouseEnter={(e) => e.currentTarget.style.color = brandInfo?.color || '#DC2626'}
                onMouseLeave={(e) => e.currentTarget.style.color = '#475569'}
              >
                <Phone className="w-4 h-4" strokeWidth={2} style={{ color: 'inherit' }} />
                <span className="hidden xl:inline">{phoneNumber}</span>
              </Link>
              <Link
                href={`https://wa.me/${phoneNumber}`}
                target="_blank"
                className="px-4 py-2 text-sm font-semibold text-white rounded-lg transition-all duration-300 shadow-sm hover:shadow-md"
                style={{ backgroundColor: brandInfo?.color || '#DC2626' }}
                onMouseEnter={(e) => e.currentTarget.style.opacity = '0.9'}
                onMouseLeave={(e) => e.currentTarget.style.opacity = '1'}
              >
                Book Now
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(true)}
              className="lg:hidden p-2 text-slate-700 hover:text-slate-900 hover:bg-slate-100 rounded-lg transition-colors"
              aria-label="Open menu"
              style={{ '--hover-color': brandInfo?.color || '#DC2626' }}
              onMouseEnter={(e) => e.currentTarget.style.color = brandInfo?.color || '#DC2626'}
              onMouseLeave={(e) => e.currentTarget.style.color = '#475569'}
            >
              <Menu className="w-6 h-6" strokeWidth={2} style={{ color: 'inherit' }} />
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
                {brandInfo ? (
                  <Link href={`/repair/${brand}`} onClick={() => setIsOpen(false)}>
                    <Image
                      src={brandInfo.logo}
                      alt={`${brandInfo.name} Logo`}
                      width={100}
                      height={40}
                      className="object-contain h-8 w-auto"
                    />
                  </Link>
                ) : (
                  <span className="text-xl font-bold text-slate-900">Menu</span>
                )}
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-2 text-slate-500 hover:text-slate-900 hover:bg-slate-100 rounded-lg transition-colors"
                  style={{ '--hover-color': brandInfo?.color || '#DC2626' }}
                  onMouseEnter={(e) => e.currentTarget.style.color = brandInfo?.color || '#DC2626'}
                  onMouseLeave={(e) => e.currentTarget.style.color = '#64748B'}
                >
                  <X className="w-6 h-6" strokeWidth={2} style={{ color: 'inherit' }} />
                </button>
              </div>

              <nav className="space-y-4">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className="block px-4 py-6 text-base font-medium text-slate-700 hover:text-white hover:rounded-lg transition-all"
                    style={{ '--hover-bg': brandInfo?.color || '#DC2626' }}
                    onMouseEnter={(e) => { e.currentTarget.style.color = 'white'; e.currentTarget.style.backgroundColor = brandInfo?.color || '#DC2626'; }}
                    onMouseLeave={(e) => { e.currentTarget.style.color = '#475569'; e.currentTarget.style.backgroundColor = 'transparent'; }}
                  >
                    {item.name}
                  </Link>
                ))}
              </nav>

              <div className="mt-8 pt-8 border-t border-slate-200 space-y-3">
                <Link
                  href={`tel:${phoneNumber}`}
                  className="flex items-center justify-center gap-2 w-full py-3 bg-slate-100 hover:bg-slate-200 text-slate-900 font-medium rounded-lg transition-colors"
                  style={{ '--hover-bg': brandInfo?.color || '#DC2626' }}
                  onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = brandInfo?.color || '#DC2626'; e.currentTarget.style.color = 'white'; }}
                  onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = '#F1F5F9'; e.currentTarget.style.color = '#0F172A'; }}
                >
                  <Phone className="w-5 h-5" strokeWidth={2} style={{ color: 'inherit' }} />
                  Call Now
                </Link>
                <Link
                  href={`https://wa.me/${phoneNumber}`}
                  className="flex items-center justify-center gap-2 w-full py-3 text-white font-semibold rounded-lg transition-colors shadow-sm"
                  style={{ backgroundColor: brandInfo?.color || '#DC2626' }}
                  onMouseEnter={(e) => e.currentTarget.style.opacity = '0.9'}
                  onMouseLeave={(e) => e.currentTarget.style.opacity = '1'}
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
