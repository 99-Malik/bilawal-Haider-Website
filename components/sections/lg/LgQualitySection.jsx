"use client";

import Image from "next/image";
import React from "react";
import { usePathname } from "next/navigation";

// Brand-based color mapping
const brandStyles = {
  lg: {
    gradient: "from-[#a50034] to-[#a50034]",
    text: "text-[#a50034]",
    number: "text-[#a50034]",
  },
  samsung: {
    gradient: "from-[#1428a0] to-[#1428a0]",
    text: "text-[#1428a0]",
    number: "text-[#1428a0]",
  },
  bosch: {
    gradient: "from-[#e60000] to-[#e60000]",
    text: "text-[#e60000]",
    number: "text-[#e60000]",
  },
  siemens: {
    gradient: "from-[#009999] to-[#009999]",
    text: "text-[#009999]",
    number: "text-[#009999]",
  },
  default: {
    gradient: "from-blue-600 to-purple-600",
    text: "text-blue-600",
    number: "text-blue-600",
  },
};

const LgQualitySection = () => {
  const pathname = usePathname();
  const brand = pathname.split("/")[2] || "default";
  const { gradient, text, number } = brandStyles[brand] || brandStyles.default;

  const features = [
    {
      icon: "🔧",
      title: "Expert Technicians",
      description:
        "Certified professionals with 10+ years of experience in appliance repair",
    },
    {
      icon: "⚡",
      title: "Fast Response",
      description:
        "Same-day service available with quick diagnosis and efficient repairs",
    },
    {
      icon: "🛡️",
      title: "Quality Guarantee",
      description:
        "100% satisfaction guarantee with warranty on all repairs and parts",
    },
    {
      icon: "💰",
      title: "Fair Pricing",
      description:
        "Transparent pricing with no hidden fees and competitive rates",
    },
  ];

  return (
    <div className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2
            className={`text-4xl md:text-5xl font-black mb-6 bg-gradient-to-r ${gradient} bg-clip-text text-transparent`}
          >
            Why Choose Us
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We deliver exceptional service with unmatched expertise and
            reliability
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="group relative">
              <div className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100">
                <div
                  className={`w-16 h-16 bg-gradient-to-r ${gradient} rounded-2xl mb-6 flex items-center justify-center text-2xl group-hover:scale-110 transition-transform duration-300`}
                >
                  {feature.icon}
                </div>

                <h3 className="text-xl font-bold mb-4 text-gray-800">
                  {feature.title}
                </h3>

                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>

                <div className="mt-6 pt-6 border-t border-gray-100">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">Learn More</span>
                    <svg
                      className={`w-5 h-5 text-gray-400 group-hover:${text} transition-colors duration-300`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </div>
                </div>
              </div>

              <div
                className={`absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-r ${gradient} rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
              ></div>
            </div>
          ))}
        </div>

        {/* Bottom Stats */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className={`text-4xl font-bold ${number} mb-2`}>15+</div>
            <div className="text-gray-600 font-medium">Years Experience</div>
          </div>
          <div className="text-center">
            <div className={`text-4xl font-bold ${number} mb-2`}>5000+</div>
            <div className="text-gray-600 font-medium">Happy Customers</div>
          </div>
          <div className="text-center">
            <div className={`text-4xl font-bold ${number} mb-2`}>99%</div>
            <div className="text-gray-600 font-medium">Success Rate</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LgQualitySection;
