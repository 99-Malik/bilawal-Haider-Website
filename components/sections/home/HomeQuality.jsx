"use client";

import Link from "next/link";
import { Droplets, Snowflake, Flame, UtensilsCrossed, Wind } from "lucide-react";
import { phoneNumber } from "@/libs/phoneNumber";
import { lightenColor } from "@/utils/brandConfig";

const HomeQuality = ({ brandColor = "#DC2626", brandName = null }) => {
  const services = [
    {
      title: "Washing Machine Repair",
      icon: Droplets,
      description: "Expert repair for all washing machine brands"
    },
    {
      title: "Refrigerator Repair",
      icon: Snowflake,
      description: "Professional cooling system repairs"
    },
    {
      title: "Stove/Cooker Repair",
      icon: Flame,
      description: "Gas and electric stove repairs"
    },
    {
      title: "Dishwasher Repair",
      icon: UtensilsCrossed,
      description: "Complete dishwasher service and repair"
    },
    {
      title: "Gas Oven Repair",
      icon: Flame,
      description: "Specialized gas oven maintenance"
    },
    {
      title: "Dryer Repair",
      icon: Wind,
      description: "Efficient dryer repair services"
    },
  ];

  const stats = [
    { number: "20+", label: "Years Experience" },
    { number: "5000+", label: "Happy Customers" },
    { number: "24/7", label: "Emergency Service" },
    { number: "99%", label: "Success Rate" }
  ];

  return (
    <div className="py-10">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        {/* Left Content */}
        <div className="space-y-8">
          <div className="inline-flex items-center px-4 py-2 border rounded-full text-sm font-medium" style={{ backgroundColor: `${brandColor}1A`, color: brandColor, borderColor: `${brandColor}33` }}>
            Our Expertise
          </div>

          <h2 className="text-4xl md:text-5xl font-bold leading-tight text-slate-900">
            Professional
            <span className="block text-transparent bg-clip-text" style={{ backgroundImage: `linear-gradient(to right, ${brandColor}, ${lightenColor(brandColor, 0.2)})` }}>
              Quick Fix Service
            </span>
            Services
          </h2>

          <p className="text-xl text-slate-600 leading-relaxed">
            {brandName
              ? `With over 20 years of experience, we provide comprehensive ${brandName} appliance repair services across Dubai and Abu Dhabi. Our certified technicians are experts in diagnosing and repairing ${brandName} appliances.`
              : "With over 20 years of experience, we provide comprehensive appliance repair services across Dubai and Abu Dhabi. Our certified technicians are experts in diagnosing and repairing all major appliance brands."
            }
          </p>

          <p className="text-slate-600 leading-relaxed">
            {brandName
              ? `We specialize in ${brandName} washing machines, refrigerators, stoves, dishwashers, gas ovens, and dryers. Our commitment to quality, reliability, and customer satisfaction has made us the trusted choice for ${brandName} appliance repairs.`
              : "We specialize in washing machines, refrigerators, stoves, dishwashers, gas ovens, and dryers. Our commitment to quality, reliability, and customer satisfaction has made us the trusted choice for appliance repairs."
            }
          </p>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 gap-6 pt-6 border-t border-slate-200">
            {stats.map((stat, index) => (
              <div key={index} className="text-center p-4 bg-white rounded-xl border border-slate-200 shadow-sm">
                <div className="text-3xl font-bold mb-1" style={{ color: brandColor }}>{stat.number}</div>
                <div className="text-sm text-slate-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Content - Services Grid */}
        <div className="space-y-6">
          <h3 className="text-2xl font-bold mb-6 text-slate-900">Our Services</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <div key={index} className="group bg-white hover:bg-slate-50 rounded-xl p-6 border border-slate-200 transition-all duration-300 shadow-sm hover:shadow-md" style={{ '--hover-border': `${brandColor}4D` }} onMouseEnter={(e) => e.currentTarget.style.borderColor = `${brandColor}4D`} onMouseLeave={(e) => e.currentTarget.style.borderColor = '#E2E8F0'}>
                  <div className="flex items-start space-x-4">
                    <div className="bg-slate-100 p-2 rounded-lg group-hover:scale-110 transition-transform" style={{ color: brandColor }}>
                      <IconComponent className="w-6 h-6" strokeWidth={2} style={{ color: 'inherit' }} />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg mb-2 text-slate-900 transition-colors" style={{ '--hover-color': brandColor }} onMouseEnter={(e) => e.currentTarget.style.color = brandColor} onMouseLeave={(e) => e.currentTarget.style.color = '#0F172A'}>{service.title}</h4>
                      <p className="text-sm text-slate-600">{service.description}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Bottom CTA */}
      <div className="mt-16 text-center">
        <div className="bg-white rounded-3xl p-6 md:p-10 border border-slate-200 relative overflow-hidden shadow-lg">
          <div className="absolute top-0 left-0 w-full h-1" style={{ background: `linear-gradient(to right, ${brandColor}, ${lightenColor(brandColor, 0.2)}, ${brandColor})` }}></div>
          <h3 className="text-xl md:text-2xl font-bold mb-4 text-slate-900">Ready to Get Started?</h3>
          <p className="text-slate-600 mb-8 max-w-2xl mx-auto text-sm md:text-base">
            Contact us today for a free consultation and quote. Our expert technicians
            are ready to help you with all your appliance repair needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href={`https://wa.me/${phoneNumber}?text=Hello%20I%20need%20your%20help%20with%20my%20appliance%20repairs`}
              target="_blank"
              className="px-8 py-4 text-white font-bold rounded-xl hover:scale-105 transition-transform duration-300 shadow-lg"
              style={{ backgroundColor: brandColor, boxShadow: `0 10px 15px -3px ${brandColor}33, 0 4px 6px -4px ${brandColor}33` }}
            >
              Get Free Quote
            </Link>
            <Link
              href={`https://wa.me/${phoneNumber}?text=Hello%20I%20need%20your%20help%20with%20my%20appliance%20repairs`}
              target="_blank"
              className="px-8 py-4 border border-slate-200 text-slate-900 font-bold rounded-xl hover:bg-slate-50 transition-all duration-300"
            >
              WhatsApp
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeQuality;
