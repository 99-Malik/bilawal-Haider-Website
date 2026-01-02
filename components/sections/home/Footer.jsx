"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { Phone, MessageCircle, MapPin, ExternalLink } from "lucide-react";
import { phoneNumber } from "@/libs/phoneNumber";
import { getBrandConfig, lightenColor } from "@/utils/brandConfig";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const pathname = usePathname();

  // Detect brand from pathname
  const brandMatch = pathname?.match(/\/repair\/([^\/]+)/);
  const brand = brandMatch ? brandMatch[1] : null;
  const brandInfo = brand ? getBrandConfig(brand) : null;

  const links = [
    { name: "Home", href: "/" },
    { name: "Services", href: "#services" },
    { name: "About Us", href: "#about" },
    { name: "Contact", href: "#contact" },
  ];

  const services = [
    "Washing Machine Repair",
    "Refrigerator Repair",
    "Dishwasher Repair",
    "Dryer Repair",
    "Stove Repair",
    "Oven Repair"
  ];

  return (
    <footer className="bg-slate-900 border-t border-white/10 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="space-y-6">
            <Link href={brandInfo ? `/repair/${brand}` : "/"} className="flex items-center gap-3">
              {brandInfo ? (
                <div className="relative flex items-center justify-center h-12 w-auto">
                  <Image
                    src={brandInfo.logo}
                    alt={`${brandInfo.name} Logo`}
                    width={120}
                    height={50}
                    className="object-contain h-10 w-auto"
                  />
                </div>
              ) : (
                <>
                  <div 
                    className="flex items-center justify-center w-10 h-10 rounded-xl shadow-lg"
                    style={{ background: brandInfo ? `linear-gradient(to bottom right, ${brandInfo.color}, ${lightenColor(brandInfo.color, 0.3)})` : 'linear-gradient(to bottom right, #DC2626, #F97316)' }}
                  >
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-lg font-bold text-white tracking-tight leading-none">
                      Quick<span className="text-primary">Fix</span>
                    </span>
                    <span className="text-[10px] font-medium text-white/60 tracking-widest uppercase">
                      Service
                    </span>
                  </div>
                </>
              )}
            </Link>
            <p className="text-text-muted leading-relaxed">
              {brandInfo 
                ? `Professional ${brandInfo.name} appliance repair services in Dubai & Abu Dhabi. Fast, reliable, and affordable solutions for all your ${brandInfo.name} home appliance needs.`
                : "Professional appliance repair services in Dubai & Abu Dhabi. Fast, reliable, and affordable solutions for all your home needs."
              }
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-bold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {links.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-text-muted transition-colors"
                    style={{ '--hover-color': brandInfo?.color || '#DC2626' }}
                    onMouseEnter={(e) => e.currentTarget.style.color = brandInfo?.color || '#DC2626'}
                    onMouseLeave={(e) => e.currentTarget.style.color = '#64748B'}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-bold mb-6">Our Services</h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <Link
                    href="#services"
                    className="text-text-muted transition-colors"
                    style={{ '--hover-color': brandInfo?.color || '#DC2626' }}
                    onMouseEnter={(e) => e.currentTarget.style.color = brandInfo?.color || '#DC2626'}
                    onMouseLeave={(e) => e.currentTarget.style.color = '#64748B'}
                  >
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-bold mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li>
                <a href={`tel:${phoneNumber}`} className="flex items-center gap-3 text-text-muted hover:text-white transition-colors" style={{ '--hover-color': brandInfo?.color || '#DC2626' }} onMouseEnter={(e) => e.currentTarget.style.color = brandInfo?.color || '#DC2626'} onMouseLeave={(e) => e.currentTarget.style.color = '#64748B'}>
                  <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center" style={{ '--hover-bg': brandInfo?.color || '#DC2626' }} onMouseEnter={(e) => e.currentTarget.style.backgroundColor = `${brandInfo?.color || '#DC2626'}1A`} onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.05)'}>
                    <Phone className="w-4 h-4" strokeWidth={2} style={{ color: 'inherit' }} />
                  </div>
                  <span>{phoneNumber}</span>
                </a>
              </li>
              <li>
                <a href={`https://wa.me/${phoneNumber}`} className="flex items-center gap-3 text-text-muted hover:text-white transition-colors" style={{ '--hover-color': brandInfo?.color || '#DC2626' }} onMouseEnter={(e) => e.currentTarget.style.color = brandInfo?.color || '#DC2626'} onMouseLeave={(e) => e.currentTarget.style.color = '#64748B'}>
                  <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center" style={{ '--hover-bg': brandInfo?.color || '#DC2626' }} onMouseEnter={(e) => e.currentTarget.style.backgroundColor = `${brandInfo?.color || '#DC2626'}1A`} onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.05)'}>
                    <MessageCircle className="w-4 h-4" strokeWidth={2} style={{ color: 'inherit' }} />
                  </div>
                  <span>WhatsApp Support</span>
                </a>
              </li>
              <li>
                <div className="flex items-start gap-3 text-text-muted">
                  <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-4 h-4" strokeWidth={2} style={{ color: brandInfo?.color || '#64748B' }} />
                  </div>
                  <span className="leading-relaxed">17A Street shop no 4 Al Qouz Ind Third, Dubai, UAE</span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Map Section */}
        <div className="mb-16">
          <h3 className="text-white font-bold mb-6">Our Location</h3>
          <div className="rounded-xl overflow-hidden border border-white/10 shadow-2xl relative">
            <iframe
              src="https://www.google.com/maps?q=25.13895,55.24096&hl=en&z=17&output=embed"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full"
              title="Our Location - 17A Street shop no 4 Al Qouz Ind Third"
            ></iframe>
          </div>
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mt-4">
            <p className="text-text-muted text-sm text-center sm:text-left">
              17A Street shop no 4 Al Qouz Ind Third, Dubai, UAE
            </p>
            <a
              href="https://www.google.com/maps/search/?api=1&query=25.13895,55.24096"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium transition-colors flex items-center gap-2"
              style={{ color: brandInfo?.color || '#DC2626', '--hover-color': brandInfo?.color || '#DC2626' }}
              onMouseEnter={(e) => e.currentTarget.style.opacity = '0.8'}
              onMouseLeave={(e) => e.currentTarget.style.opacity = '1'}
            >
              <ExternalLink className="w-4 h-4" strokeWidth={2} style={{ color: 'inherit' }} />
              Open in Google Maps
            </a>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-text-muted text-sm">
            © {currentYear} Quick Fix Service. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-sm text-text-muted">
            <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
