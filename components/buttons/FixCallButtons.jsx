"use client";

import React from "react";
import { usePathname } from "next/navigation";
import { Phone, MessageCircle } from "lucide-react";
import { phoneNumber } from "@/libs/phoneNumber";
import { motion } from "framer-motion";
import { getBrandConfig } from "@/utils/brandConfig";

const FixedCallButtons = () => {
  const pathname = usePathname();
  const brandMatch = pathname?.match(/\/repair\/([^\/]+)/);
  const brand = brandMatch ? brandMatch[1] : null;
  const brandInfo = brand ? getBrandConfig(brand) : null;
  const brandColor = brandInfo?.color || "#DC2626";
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-center gap-4">
      {/* WhatsApp Button */}
      <motion.a
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.5, type: "spring" }}
        href={`//api.whatsapp.com/send?phone=${phoneNumber}&text=Hello! I'm looking for skilled professionals to diagnose and repair my home appliances.`}
        target="_blank"
        className="group relative flex items-center justify-center w-16 h-16 bg-gradient-to-br from-[#25D366] to-[#128C7E] rounded-2xl shadow-2xl shadow-[#25D366]/30 hover:shadow-[#25D366]/50 hover:scale-110 hover:rotate-3 transition-all duration-300 backdrop-blur-sm border border-white/10"
        onClick={() => {
          if (typeof window !== 'undefined' && window.gtag_report_conversion) {
            window.gtag_report_conversion(`tel:${phoneNumber}`);
          }
        }}
      >
        {/* Animated background glow */}
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#25D366] to-[#128C7E] opacity-75 blur-xl group-hover:opacity-100 transition-opacity duration-300"></div>

        {/* Pulsing ring effect */}
        <div className="absolute inset-0 rounded-2xl bg-white/30 animate-ping opacity-0 group-hover:opacity-100"></div>

        {/* Icon */}
        <MessageCircle className="relative w-8 h-8 text-white drop-shadow-lg group-hover:scale-110 transition-transform duration-300" strokeWidth={2} fill="currentColor" />
      </motion.a>

      {/* Phone Button */}
      <motion.a
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.6, type: "spring" }}
        href={`tel:${phoneNumber}`}
        className="group relative flex items-center justify-center w-14 h-14 rounded-full shadow-lg hover:scale-110 transition-all duration-300"
        style={{ backgroundColor: brandColor, boxShadow: `0 10px 15px -3px ${brandColor}33, 0 4px 6px -4px ${brandColor}33` }}
        onMouseEnter={(e) => e.currentTarget.style.boxShadow = `0 10px 15px -3px ${brandColor}66, 0 4px 6px -4px ${brandColor}66`}
        onMouseLeave={(e) => e.currentTarget.style.boxShadow = `0 10px 15px -3px ${brandColor}33, 0 4px 6px -4px ${brandColor}33`}
        onClick={() => window.open(`tel:${phoneNumber}`)}
      >
        <div className="absolute inset-0 rounded-full bg-white/20 animate-ping opacity-0 group-hover:opacity-100"></div>
        <Phone className="w-6 h-6 text-white" strokeWidth={2} />
      </motion.a>
    </div>
  );
};

export default FixedCallButtons;
