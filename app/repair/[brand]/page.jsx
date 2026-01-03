"use client";

import { useParams, useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Phone, MessageCircle, Settings, CheckCircle2 } from "lucide-react";
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
    <div className="min-h-screen bg-background text-text-main selection:bg-primary selection:text-black">
      {/* Hero Section */}
      <section className="relative min-h-[85vh] md:min-h-[95vh] flex items-center pt-24 pb-12 md:pt-28 lg:pt-32 overflow-hidden border-b-4" style={{ borderBottomColor: brandInfo.color }}>
        {/* Premium Background Pattern */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-slate-50 via-white to-slate-100"></div>

        {/* Subtle Grid */}
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-soft-light"></div>
        <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(#cbd5e1 1px, transparent 1px)', backgroundSize: '40px 40px', opacity: 0.3 }}></div>

        {/* Brand Color Accents */}
        <div className="absolute top-0 right-0 w-[800px] h-[800px] rounded-full blur-[120px] -translate-y-1/4 translate-x-1/4 pointer-events-none" style={{ backgroundColor: brandInfo.color, opacity: 0.05 }}></div>
        <div className="absolute bottom-0 left-0 w-[800px] h-[800px] bg-blue-500/5 rounded-full blur-[120px] translate-y-1/4 -translate-x-1/4 pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-6 w-full relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 md:space-y-8">
            

        

              <h1 className="text-4xl md:text-7xl font-bold leading-tight tracking-tight text-slate-900">
                <span className="text-transparent bg-clip-text" style={{ color: brandInfo.color }}>
                  {brandInfo.name} Service Center
                </span>
              </h1>

              <p className="text-lg md:text-xl text-slate-600 max-w-xl leading-relaxed">
                {brandInfo.description}
              </p>

              <p className="text-base text-slate-600 max-w-xl leading-relaxed">
                {brandInfo.content}
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href={`tel:${phoneNumber}`}
                  className="px-8 py-4 hover:opacity-90 text-white font-bold rounded-xl transition-all hover:-translate-y-1 shadow-lg shadow-primary/25 text-center"
                  style={{ backgroundColor: brandInfo.color }}
                >
                  Call Now
                </Link>
                <Link
                  href={`https://wa.me/${phoneNumber}`}
                  target="_blank"
                  className="px-8 py-4 bg-white hover:bg-slate-50 border border-slate-200 text-slate-900 font-bold rounded-xl transition-all hover:-translate-y-1 backdrop-blur-sm text-center shadow-sm"
                >
                  WhatsApp Us
                </Link>
              </div>

              {/* Stats Ticker */}
              <div className="pt-8 border-t border-slate-200 grid grid-cols-3 gap-4 md:gap-8">
                <div>
                  <div className="text-2xl md:text-3xl font-bold mb-1" style={{ color: brandInfo.color }}>15+</div>
                  <div className="text-xs md:text-sm text-slate-500">Years Exp.</div>
                </div>
                <div>
                  <div className="text-2xl md:text-3xl font-bold mb-1" style={{ color: brandInfo.color }}>5k+</div>
                  <div className="text-xs md:text-sm text-slate-500">Repairs Done</div>
                </div>
                <div>
                  <div className="text-2xl md:text-3xl font-bold mb-1" style={{ color: brandInfo.color }}>4.9</div>
                  <div className="text-xs md:text-sm text-slate-500">Rating</div>
                </div>
              </div>
            </div>

            {/* Hero Visual */}
            <div className="relative hidden lg:block">
              <div className="relative z-10 bg-white/60 backdrop-blur-2xl rounded-3xl p-8 border border-white/20 shadow-2xl transform rotate-3 hover:rotate-0 transition-all duration-500">
                <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-slate-100 relative group">
                  <Image
                    src="/images/technician.png"
                    alt="Professional Technician"
                    fill
                    className="object-cover object-top group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/10 to-transparent"></div>
                </div>

                {/* Floating Badge with Brand Color */}
                <div className="absolute -bottom-6 -left-6 text-white p-4 rounded-2xl shadow-xl flex items-center gap-4 animate-bounce-slow" style={{ backgroundColor: brandInfo.color, boxShadow: `0 20px 25px -5px ${brandInfo.color}40, 0 10px 10px -5px ${brandInfo.color}20` }}>
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                    <CheckCircle2 className="w-6 h-6 text-white" strokeWidth={2.5} />
                  </div>
                  <div>
                    <div className="font-bold">Guaranteed</div>
                    <div className="text-xs opacity-90">Service Warranty</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
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
                  <div className="bg-white/80 backdrop-blur-md rounded-3xl overflow-hidden border border-slate-200 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-primary/5" style={{ borderColor: 'rgb(226 232 240)' }} onMouseEnter={(e) => e.currentTarget.style.borderColor = brandInfo.color} onMouseLeave={(e) => e.currentTarget.style.borderColor = 'rgb(226 232 240)'}>
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
                  className="px-8 py-4 text-white font-bold rounded-xl hover:opacity-90 hover:scale-105 transition-transform duration-300 shadow-lg shadow-primary/20"
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

