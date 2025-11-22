"use client";

import React from "react";

const LgQualitySection = () => {
  const features = [
    {
      icon: "🔧",
      title: "Expert Technicians",
      description: "Certified professionals with 10+ years of experience in appliance repair",
    },
    {
      icon: "⚡",
      title: "Fast Response",
      description: "Same-day service available with quick diagnosis and efficient repairs",
    },
    {
      icon: "🛡️",
      title: "Quality Guarantee",
      description: "100% satisfaction guarantee with warranty on all repairs and parts",
    },
    {
      icon: "💰",
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
          {features.map((feature, index) => (
            <div key={index} className="group relative">
              <div className="bg-white/80 backdrop-blur-md rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-slate-200 hover:border-primary/30 h-full">
                <div className="w-16 h-16 bg-slate-100 rounded-2xl mb-6 flex items-center justify-center text-2xl group-hover:scale-110 transition-transform duration-300 group-hover:bg-primary group-hover:text-white text-slate-900">
                  {feature.icon}
                </div>

                <h3 className="text-xl font-bold mb-4 text-slate-900 group-hover:text-primary transition-colors">
                  {feature.title}
                </h3>

                <p className="text-slate-600 leading-relaxed text-sm">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LgQualitySection;
