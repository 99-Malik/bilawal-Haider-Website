"use client";

import { useParams, useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Phone, MessageCircle, Settings, ArrowRight } from "lucide-react";
import { phoneNumber } from "@/libs/phoneNumber";
import { getBrandConfig, isValidBrand, lightenColor } from "@/utils/brandConfig";
import AboutSection from "@/components/sections/home/AboutSection";
import OurMissionSection from "@/components/sections/home/OurMissionSection";
import LgServices from "@/components/sections/lg/LgServices";
import LgQualitySection from "@/components/sections/lg/LgQualitySection";
import HomeQuality from "@/components/sections/home/HomeQuality";
import PremiumGallery from "@/components/sections/home/PremiumGallery";

const BrandPage = () => {
  const params = useParams();
  const router = useRouter();
  const brand = params?.brand;

  if (!isValidBrand(brand)) {
    router.push("/");
    return null;
  }

  const brandInfo = getBrandConfig(brand);

  const services = [
    {
      imageUrl: "/images/washing-machine.png",
      heading: `${brandInfo.name} Washing Machine Repair`,
      description: `Professional repair services for all ${brandInfo.name} washing machine models. Fast diagnosis and reliable solutions.`,
      features: ["Same-day service", "Warranty included", "Expert technicians"],
    },
    {
      imageUrl: "/images/refrigerator.png",
      heading: `${brandInfo.name} Refrigerator Repair`,
      description: `Complete ${brandInfo.name} refrigerator repair and maintenance services. From cooling issues to compressor problems.`,
      features: ["24/7 emergency", "Free diagnosis", "Quality parts"],
    },
    {
      imageUrl: "/images/stove.png",
      heading: `${brandInfo.name} Stove/Cooker Repair`,
      description: `Expert repair for ${brandInfo.name} gas and electric stoves. Safe and efficient service for all cooker types.`,
      features: ["Safety certified", "Quick repair", "Affordable rates"],
    },
    {
      imageUrl: "/images/dishwasher.png",
      heading: `${brandInfo.name} Dishwasher Repair`,
      description: `Comprehensive ${brandInfo.name} dishwasher repair services. Fix leaks, noise issues, and cleaning problems.`,
      features: ["Water leak repair", "Noise reduction", "Cleaning optimization"],
    },
    {
      imageUrl: "/images/oven.png",
      heading: `${brandInfo.name} Gas Oven Repair`,
      description: `Specialized ${brandInfo.name} gas oven repair and maintenance. Ensure safety and optimal performance.`,
      features: ["Gas safety", "Temperature control", "Ignition repair"],
    },
    {
      imageUrl: "/images/dryer.png",
      heading: `${brandInfo.name} Dryer Repair`,
      description: `Professional ${brandInfo.name} dryer repair services. Fix heating, spinning, and electrical issues.`,
      features: ["Heating repair", "Motor service", "Drum maintenance"],
    },
  ];

  return (
    <div className="min-h-screen bg-background text-text-main">
      {/* Hero Section */}
      <section className="relative w-full flex flex-col overflow-hidden pt-16 lg:pt-20" style={{ backgroundColor: "hsl(222,47%,8%)" }}>

        {/* Background image + left-to-right gradient overlay */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/technician.png"
            alt="Professional Technician"
            fill
            className="object-cover object-top opacity-20"
            priority
          />
          <div className="absolute inset-0" style={{ background: `linear-gradient(to right, hsl(222,47%,8%) 0%, hsl(222,47%,8%) 40%, transparent 100%)` }} />
        </div>

        {/* Decorative large text */}
        <span className="absolute right-0 bottom-0 text-[28vw] font-black leading-none select-none pointer-events-none z-[1] translate-y-[15%]" style={{ color: "rgba(255,255,255,0.03)" }}>
          FIX
        </span>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-5 md:px-10 w-full py-10">
          <div className="grid lg:grid-cols-[1fr_420px] gap-12 lg:gap-8 items-center w-full">

            <div>
              {/* Pill label */}
              <div className="flex items-center gap-2 mb-6 sm:mb-8">
                <span className="shrink-0 w-6 h-[2px]" style={{ backgroundColor: brandInfo.color }} />
                <span className="text-[10px] sm:text-xs font-bold uppercase tracking-wider whitespace-nowrap" style={{ color: brandInfo.color }}>
                  {brandInfo.name} Appliance Repair — Dubai
                </span>
              </div>

              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white leading-tight mb-5 sm:mb-6">
                {brandInfo.name} <span style={{ color: brandInfo.color }}>Service</span><br />Center
              </h1>

              <p className="text-white/60 text-base sm:text-lg leading-relaxed max-w-lg mb-8 sm:mb-10">
                Professional {brandInfo.name} repair in Dubai — certified technicians, genuine parts, fast same-day service.
              </p>

              {/* Stats row */}
              <div className="flex flex-wrap gap-8 mb-8 sm:mb-10 pb-8 sm:pb-10 border-b border-white/10">
                {[["15+", "Years Experience"], ["5k+", "Repairs Done"], ["4.9★", "Customer Rating"]].map(([val, lbl]) => (
                  <div key={lbl}>
                    <p className="text-xl sm:text-2xl font-black text-white">{val}</p>
                    <p className="text-xs text-white/40 uppercase tracking-wider mt-0.5">{lbl}</p>
                  </div>
                ))}
              </div>

              {/* CTA buttons */}
              <div className="flex flex-col gap-3 w-full">
                <Link
                  href={`tel:${phoneNumber}`}
                  className="w-full inline-flex items-center justify-center gap-2.5 text-white font-bold text-sm px-7 h-12 rounded-xl hover:opacity-90 transition-colors shadow-lg"
                  style={{ backgroundColor: brandInfo.color }}
                >
                  <Phone className="w-4 h-4" />
                  Call Now
                </Link>
                <Link
                  href={`https://wa.me/${phoneNumber}`}
                  target="_blank"
                  className="w-full inline-flex items-center justify-center gap-2.5 border border-white/30 text-white font-bold text-sm px-7 h-12 rounded-xl hover:bg-white/10 transition-colors"
                >
                  WhatsApp Us <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* RIGHT — service chips (desktop only) */}
            <div className="hidden lg:flex flex-col gap-3">
              {["Washing Machine Repair", "Refrigerator Repair", "Oven & Cooker Repair", "Dishwasher Repair", "Dryer Repair", "AC Repair"].map((svc, i) => (
                <div key={svc} className="flex items-center justify-between px-5 py-4 bg-white/[0.05] border border-white/10 hover:bg-white/[0.10] hover:border-white/25 transition-all group cursor-default">
                  <span className="text-white/80 text-sm font-medium group-hover:text-white transition-colors">{svc}</span>
                  <span className="text-white/20 text-xs font-mono">0{i + 1}</span>
                </div>
              ))}
              <div className="mt-2 px-5 py-4 border" style={{ backgroundColor: `color-mix(in srgb, ${brandInfo.color} 10%, transparent)`, borderColor: `color-mix(in srgb, ${brandInfo.color} 30%, transparent)` }}>
                <p className="text-xs font-bold uppercase tracking-widest" style={{ color: brandInfo.color }}>{brandInfo.name} Specialist</p>
                <p className="text-white/50 text-xs mt-0.5">Certified for all {brandInfo.name} models</p>
              </div>
            </div>

          </div>
        </div>

        {/* Wave divider */}
        <div className="relative z-10 w-full">
          <svg viewBox="0 0 1440 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full block">
            <path d="M0 48L360 12L720 38L1080 8L1440 48V48H0V48Z" fill="rgb(248,250,252)" />
          </svg>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-12 md:py-24 bg-slate-50 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-6">
          <AboutSection brandColor={brandInfo.color} brandName={brandInfo.name} />
        </div>
      </section>

      {/* Premium Gallery Section */}
      <PremiumGallery brandColor={brandInfo.color} />

      {/* Quality Section */}
      <section className="py-12 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <LgQualitySection brandColor={brandInfo.color} />
        </div>
      </section>

      {/* Experience Banner */}
      <section className="py-12 md:py-24 border-y border-opacity-20" style={{ background: `linear-gradient(to right, ${brandInfo.color}0D, ${lightenColor(brandInfo.color, 0.4)}0D)`, borderColor: brandInfo.color }}>
        <div className="max-w-7xl mx-auto px-6">
          <HomeQuality brandColor={brandInfo.color} brandName={brandInfo.name} />
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-12 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <OurMissionSection brandColor={brandInfo.color} />
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-12 md:py-24 relative bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12 md:mb-16">
            <span className="font-medium tracking-widest uppercase text-sm" style={{ color: brandInfo.color }}>What We Do</span>
            <h2 className="text-3xl md:text-5xl font-bold mt-3 mb-6 text-slate-900">
              Our {brandInfo.name} Expert Services
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Comprehensive repair solutions for {brandInfo.name} home appliances. We use original parts and provide warranty on all repairs.
            </p>
          </div>
          
          {/* Custom Services Grid */}
          <div className="space-y-16">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {services.map((service, index) => (
                <div key={index} className="group relative">
                  <div className="bg-white/80 backdrop-blur-md rounded-3xl overflow-hidden border border-slate-200 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl" style={{ borderColor: 'rgb(226 232 240)' }} onMouseEnter={(e) => e.currentTarget.style.borderColor = brandInfo.color} onMouseLeave={(e) => e.currentTarget.style.borderColor = 'rgb(226 232 240)'}>
                    <div className="relative aspect-video overflow-hidden">
                      <Image
                        src={service.imageUrl}
                        alt={service.heading}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60"></div>
                      <div className="absolute top-4 left-4 px-3 py-1 text-xs font-bold rounded-full text-white border border-white/20 shadow-sm" style={{ backgroundColor: brandInfo.color }}>
                        {brandInfo.name}
                      </div>
                    </div>

                    <div className="p-6 md:p-8 relative -mt-12">
                      <div className="w-12 h-12 rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300" style={{ backgroundColor: brandInfo.color, boxShadow: `0 10px 15px -3px ${brandInfo.color}33, 0 4px 6px -4px ${brandInfo.color}33` }}>
                        <Settings className="w-6 h-6 text-white" strokeWidth={2} />
                      </div>

                      <h3 className="text-xl font-bold mb-3 text-slate-900 transition-colors duration-300 group-hover:text-inherit" style={{ '--hover-color': brandInfo.color }} onMouseEnter={(e) => e.currentTarget.style.color = brandInfo.color} onMouseLeave={(e) => e.currentTarget.style.color = '#0F172A'}>
                        {service.heading}
                      </h3>
                      <p className="text-slate-600 mb-6 leading-relaxed text-sm">
                        {service.description}
                      </p>

                      <div className="space-y-3 mb-6">
                        {service.features.map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-center space-x-3">
                            <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: brandInfo.color }}></div>
                            <span className="text-sm text-slate-500">{feature}</span>
                          </div>
                        ))}
                      </div>

                      {/* Action Buttons */}
                      <div className="flex gap-3">
                        <Link
                          href={`tel:${phoneNumber}`}
                          className="flex-1 flex items-center justify-center gap-2 py-3 bg-white text-slate-900 font-semibold rounded-xl transition-all duration-300 border border-slate-200 hover:border-transparent hover:text-white shadow-sm hover:shadow-md"
                          style={{ '--hover-bg': brandInfo.color }}
                          onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = brandInfo.color; e.currentTarget.style.color = 'white'; }}
                          onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = 'white'; e.currentTarget.style.color = '#0F172A'; }}
                        >
                          <Phone className="w-4 h-4" strokeWidth={2} style={{ color: 'inherit' }} />
                          <span className="text-sm">Call</span>
                        </Link>
                        <Link
                          href={`https://wa.me/${phoneNumber}?text=Hello%20I%20need%20your%20help%20with%20my%20${brandInfo.name}%20${service.heading.replace(`${brandInfo.name} `, '')}%20repair`}
                          target="_blank"
                          className="flex-1 flex items-center justify-center gap-2 py-3 text-white font-semibold rounded-xl transition-all duration-300 shadow-sm hover:shadow-md"
                          style={{ backgroundColor: brandInfo.color }}
                          onMouseEnter={(e) => e.currentTarget.style.opacity = '0.9'}
                          onMouseLeave={(e) => e.currentTarget.style.opacity = '1'}
                        >
                          <MessageCircle className="w-4 h-4" strokeWidth={2} />
                          <span className="text-sm">WhatsApp</span>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gradient-to-r from-white to-slate-50 rounded-3xl p-6 md:p-10 border border-opacity-30 relative overflow-hidden shadow-sm mt-16" style={{ borderColor: brandInfo.color }}>
            <div className="absolute top-0 right-0 w-64 h-64 opacity-5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" style={{ backgroundColor: brandInfo.color }}></div>

            <div className="relative z-10 text-center max-w-2xl mx-auto">
              <h3 className="text-2xl md:text-3xl font-bold mb-4 text-slate-900">Need Emergency {brandInfo.name} Repair?</h3>
              <p className="text-base md:text-lg mb-8 text-slate-600">
                Our expert technicians are available 24/7 for emergency {brandInfo.name} repairs across Dubai and Abu Dhabi.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href={`https://wa.me/${phoneNumber}`}
                  target="_blank"
                  className="px-8 py-4 text-white font-bold rounded-xl hover:opacity-90 hover:scale-105 transition-transform duration-300 shadow-lg"
                  style={{ backgroundColor: brandInfo.color }}
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
      </section>
    </div>
  );
};

export default BrandPage;

