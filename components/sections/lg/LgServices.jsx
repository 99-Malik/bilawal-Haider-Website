"use client";

import Image from "next/image";
import Link from "next/link";
import { phoneNumber } from "@/libs/phoneNumber";

const LgServices = () => {
  const services = [
    {
      imageUrl: "/images/washing-machine.png",
      heading: "Washing Machine Repair",
      description: "Professional repair services for all washing machine brands and models. Fast diagnosis and reliable solutions.",
      features: ["Same-day service", "Warranty included", "Expert technicians"],
    },
    {
      imageUrl: "/images/refrigerator.png",
      heading: "Refrigerator Repair",
      description: "Complete refrigerator repair and maintenance services. From cooling issues to compressor problems.",
      features: ["24/7 emergency", "Free diagnosis", "Quality parts"],
    },
    {
      imageUrl: "/images/stove.png",
      heading: "Stove/Cooker Repair",
      description: "Expert repair for gas and electric stoves. Safe and efficient service for all cooker types.",
      features: ["Safety certified", "Quick repair", "Affordable rates"],
    },
    {
      imageUrl: "/images/dishwasher.png",
      heading: "Dishwasher Repair",
      description: "Comprehensive dishwasher repair services. Fix leaks, noise issues, and cleaning problems.",
      features: ["Water leak repair", "Noise reduction", "Cleaning optimization"],
    },
    {
      imageUrl: "/images/oven.png",
      heading: "Gas Oven Repair",
      description: "Specialized gas oven repair and maintenance. Ensure safety and optimal performance.",
      features: ["Gas safety", "Temperature control", "Ignition repair"],
    },
    {
      imageUrl: "/images/dryer.png",
      heading: "Dryer Repair",
      description: "Professional dryer repair services. Fix heating, spinning, and electrical issues.",
      features: ["Heating repair", "Motor service", "Drum maintenance"],
    },
  ];

  return (
    <div className="space-y-16">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {services.map((service, index) => (
          <div key={index} className="group relative">
            <div className="bg-white/80 backdrop-blur-md rounded-3xl overflow-hidden border border-slate-200 hover:border-primary/50 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-primary/5">
              <div className="relative aspect-video overflow-hidden">
                <Image
                  src={service.imageUrl}
                  alt={service.heading}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60"></div>
                <div className="absolute top-4 left-4 px-3 py-1 text-xs font-bold rounded-full bg-white/90 backdrop-blur-md text-slate-900 border border-white/20 shadow-sm">
                  Service
                </div>
              </div>

              <div className="p-6 md:p-8 relative -mt-12">
                <div className="w-12 h-12 bg-primary rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-primary/20 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>

                <h3 className="text-xl font-bold mb-3 text-slate-900 group-hover:text-primary transition-colors duration-300">
                  {service.heading}
                </h3>
                <p className="text-slate-600 mb-6 leading-relaxed text-sm">
                  {service.description}
                </p>

                <div className="space-y-3 mb-8">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                      <span className="text-sm text-slate-500">{feature}</span>
                    </div>
                  ))}
                </div>

                <Link
                  href={`https://wa.me/${phoneNumber}?text=Hello%20I%20need%20your%20help%20with%20my%20appliance%20repairs`}
                  target="_blank"
                  className="block w-full py-3 bg-slate-50 hover:bg-primary hover:text-white text-slate-900 font-bold rounded-xl transition-all duration-300 text-center border border-slate-200 hover:border-transparent"
                >
                  Get Quote
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-gradient-to-r from-white to-slate-50 rounded-3xl p-6 md:p-10 border border-slate-200 relative overflow-hidden shadow-sm">
        <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>

        <div className="relative z-10 text-center max-w-2xl mx-auto">
          <h3 className="text-2xl md:text-3xl font-bold mb-4 text-slate-900">Need Emergency Repair?</h3>
          <p className="text-base md:text-lg mb-8 text-slate-600">
            Our expert technicians are available 24/7 for emergency repairs across Dubai and Abu Dhabi.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href={`https://wa.me/${phoneNumber}`}
              target="_blank"
              className="px-8 py-4 bg-primary text-white font-bold rounded-xl hover:scale-105 transition-transform duration-300 shadow-lg shadow-primary/20"
            >
              WhatsApp Now
            </Link>
            <Link
              href={`tel:${phoneNumber}`}
              className="px-8 py-4 bg-white border border-slate-200 text-slate-900 font-bold rounded-xl hover:bg-slate-50 transition-all duration-300 shadow-sm"
            >
              Call Technician
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LgServices;
