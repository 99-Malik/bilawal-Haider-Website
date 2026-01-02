"use client";

import Link from "next/link";
import { Target, Eye, Rocket, Handshake, Zap, Users, Settings } from "lucide-react";
import { phoneNumber } from "@/libs/phoneNumber";

const OurMissionSection = ({ brandColor = "#DC2626" }) => {
  const missions = [
    {
      icon: Target,
      title: "Our Mission",
      description: "To provide exceptional appliance repair services that exceed customer expectations through innovative solutions, skilled technicians, and unwavering commitment to quality and reliability.",
    },
    {
      icon: Eye,
      title: "Our Vision",
      description: "To become the leading appliance repair service provider in Dubai and Abu Dhabi, recognized for excellence, innovation, and customer satisfaction while maintaining the highest standards of professionalism.",
    },
    {
      icon: Rocket,
      title: "Our Goals",
      description: "To expand our service reach, enhance customer experience through technology, maintain 99% customer satisfaction, and establish ourselves as the most trusted name in appliance repairs.",
    },
  ];

  const values = [
    {
      icon: Handshake,
      title: "Integrity",
      description: "Honest and transparent in all our dealings",
    },
    {
      icon: Zap,
      title: "Excellence",
      description: "Striving for the highest quality in every service",
    },
    {
      icon: Users,
      title: "Customer Focus",
      description: "Putting customer needs first in everything we do",
    },
    {
      icon: Settings,
      title: "Innovation",
      description: "Continuously improving our methods and technology",
    },
  ];

  return (
    <div className="py-10">
      {/* Header */}
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-slate-900">
          Our Mission & Vision
        </h2>
        <p className="text-xl text-slate-600 max-w-3xl mx-auto">
          Driving excellence in appliance repair through innovation, integrity, and customer satisfaction
        </p>
      </div>

      {/* Mission Cards */}
      <div className="grid md:grid-cols-3 gap-8 mb-20">
        {missions.map((mission, index) => {
          const IconComponent = mission.icon;
          return (
            <div key={index} className="group relative h-full">
              <div className="bg-white/80 backdrop-blur-md rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-slate-200 h-full" style={{ '--hover-border': `${brandColor}4D` }} onMouseEnter={(e) => e.currentTarget.style.borderColor = `${brandColor}4D`} onMouseLeave={(e) => e.currentTarget.style.borderColor = '#E2E8F0'}>
                <div className="w-16 h-16 bg-slate-100 rounded-2xl mb-6 flex items-center justify-center group-hover:scale-110 transition-transform duration-300" style={{ '--hover-bg': brandColor }} onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = brandColor; }} onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = '#F1F5F9'; }}>
                  <IconComponent className="w-8 h-8" strokeWidth={2} style={{ color: brandColor }} onMouseEnter={(e) => { e.currentTarget.style.color = 'white'; }} onMouseLeave={(e) => { e.currentTarget.style.color = brandColor; }} />
                </div>

              <h3 className="text-xl font-bold mb-4 text-slate-900 transition-colors" style={{ '--hover-color': brandColor }} onMouseEnter={(e) => e.currentTarget.style.color = brandColor} onMouseLeave={(e) => e.currentTarget.style.color = '#0F172A'}>
                {mission.title}
              </h3>

              <p className="text-slate-600 leading-relaxed text-sm">
                {mission.description}
              </p>
            </div>
          </div>
          );
        })}
      </div>

      {/* Core Values Section */}
      <div className="bg-white border border-slate-200 rounded-3xl p-6 md:p-12 relative overflow-hidden shadow-lg">
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" style={{ backgroundColor: brandColor, opacity: 0.05 }}></div>

        <div className="relative z-10">
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold mb-4 text-slate-900">
              Our Core Values
            </h3>
            <p className="text-slate-600 max-w-2xl mx-auto text-sm md:text-base">
              These principles guide everything we do and ensure we deliver the best possible service to our customers
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <div key={index} className="text-center group p-6 rounded-2xl hover:bg-slate-50 transition-colors border border-transparent hover:border-slate-100">
                  <div className="w-20 h-20 bg-slate-100 rounded-2xl mx-auto mb-4 flex items-center justify-center group-hover:scale-110 transition-transform duration-300" style={{ '--hover-bg': brandColor }} onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = brandColor; }} onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = '#F1F5F9'; }}>
                    <IconComponent className="w-10 h-10" strokeWidth={2} style={{ color: brandColor }} onMouseEnter={(e) => { e.currentTarget.style.color = 'white'; }} onMouseLeave={(e) => { e.currentTarget.style.color = brandColor; }} />
                  </div>

                <h4 className="text-lg font-bold mb-2 text-slate-900">
                  {value.title}
                </h4>

                <p className="text-slate-600 text-sm">{value.description}</p>
              </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurMissionSection;
