"use client";

import React from "react";
import { Wrench, Zap, ShieldCheck, DollarSign } from "lucide-react";

const LgQualitySection = ({ brandColor = "#DC2626" }) => {
  const features = [
    {
      icon: Wrench,
      title: "Expert Technicians",
      description: "Certified professionals with 10+ years of experience in appliance repair",
    },
    {
      icon: Zap,
      title: "Fast Response",
      description: "Same-day service available with quick diagnosis and efficient repairs",
    },
    {
      icon: ShieldCheck,
      title: "Quality Guarantee",
      description: "100% satisfaction guarantee with warranty on all repairs and parts",
    },
    {
      icon: DollarSign,
      title: "Fair Pricing",
      description: "Transparent pricing with no hidden fees and competitive rates",
    },
  ];

  return (
    <div className="py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-slate-900">
            Why Choose Us
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            We deliver exceptional service with unmatched expertise and reliability
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div key={index} className="group relative">
                <div className="bg-white/80 backdrop-blur-md rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-slate-200 h-full" style={{ '--hover-border': `${brandColor}4D` }} onMouseEnter={(e) => e.currentTarget.style.borderColor = `${brandColor}4D`} onMouseLeave={(e) => e.currentTarget.style.borderColor = '#E2E8F0'}>
                  <div className="w-16 h-16 bg-slate-100 rounded-2xl mb-6 flex items-center justify-center group-hover:scale-110 transition-transform duration-300" style={{ '--hover-bg': brandColor }} onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = brandColor; }} onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = '#F1F5F9'; }}>
                    <IconComponent className="w-8 h-8" strokeWidth={2} style={{ color: brandColor }} onMouseEnter={(e) => { e.currentTarget.style.color = 'white'; }} onMouseLeave={(e) => { e.currentTarget.style.color = brandColor; }} />
                  </div>

                <h3 className="text-xl font-bold mb-4 text-slate-900 transition-colors" style={{ '--hover-color': brandColor }} onMouseEnter={(e) => e.currentTarget.style.color = brandColor} onMouseLeave={(e) => e.currentTarget.style.color = '#0F172A'}>
                  {feature.title}
                </h3>

                <p className="text-slate-600 leading-relaxed text-sm">
                  {feature.description}
                </p>
              </div>
            </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default LgQualitySection;
