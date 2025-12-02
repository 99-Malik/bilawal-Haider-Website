"use client";
import Link from "next/link";
import NextImage from "next/image";
import { phoneNumber } from "@/libs/phoneNumber";
import AboutSection from "@/components/sections/home/AboutSection";
import OurMissionSection from "@/components/sections/home/OurMissionSection";
import LgServices from "@/components/sections/lg/LgServices";
import LgQualitySection from "@/components/sections/lg/LgQualitySection";
import HomeQuality from "../components/sections/home/HomeQuality";
import Header from "../components/headers/Header";
import Footer from "../components/sections/home/Footer";
import PremiumGallery from "@/components/sections/home/PremiumGallery";

const LgServiceCenterPage = () => {
  return (
    <div className="min-h-screen bg-background text-text-main selection:bg-primary selection:text-black">
      <Header />

      {/* Hero Section */}
      <section className="relative min-h-[85vh] md:min-h-[95vh] flex items-center pt-40 pb-12 md:pt-52 overflow-hidden">
        {/* Premium Background Pattern */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-slate-50 via-white to-slate-100"></div>

        {/* Subtle Grid */}
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-soft-light"></div>
        <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(#cbd5e1 1px, transparent 1px)', backgroundSize: '40px 40px', opacity: 0.3 }}></div>

        {/* Abstract Glass Elements */}
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[120px] -translate-y-1/4 translate-x-1/4 pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-[800px] h-[800px] bg-blue-500/5 rounded-full blur-[120px] translate-y-1/4 -translate-x-1/4 pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-6 w-full relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 md:space-y-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 border border-slate-200 backdrop-blur-sm shadow-sm">
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                <span className="text-xs md:text-sm font-medium text-slate-600">Available 24/7 in Dubai & Abu Dhabi</span>
              </div>

              <h1 className="text-4xl md:text-7xl font-bold leading-tight tracking-tight text-slate-900">
                Premium <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-red-600">
                  Quick Fix Service
                </span>
                <br /> Services
              </h1>

              <p className="text-lg md:text-xl text-slate-600 max-w-xl leading-relaxed">
                Expert technicians delivering fast, reliable, and guaranteed repairs for all your premium home appliances.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href={`tel:${phoneNumber}`}
                  className="px-8 py-4 bg-primary hover:bg-red-700 text-white font-bold rounded-xl transition-all hover:-translate-y-1 shadow-lg shadow-primary/25 text-center"
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
                  <div className="text-2xl md:text-3xl font-bold text-slate-900 mb-1">15+</div>
                  <div className="text-xs md:text-sm text-slate-500">Years Exp.</div>
                </div>
                <div>
                  <div className="text-2xl md:text-3xl font-bold text-slate-900 mb-1">5k+</div>
                  <div className="text-xs md:text-sm text-slate-500">Repairs Done</div>
                </div>
                <div>
                  <div className="text-2xl md:text-3xl font-bold text-slate-900 mb-1">4.9</div>
                  <div className="text-xs md:text-sm text-slate-500">Rating</div>
                </div>
              </div>
            </div>

            {/* Hero Visual */}
            <div className="relative hidden lg:block">
              <div className="relative z-10 bg-white/60 backdrop-blur-2xl rounded-3xl p-8 border border-white/20 shadow-2xl transform rotate-3 hover:rotate-0 transition-all duration-500">
                <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-slate-100 relative group">
                  {/* Placeholder for a high-quality appliance image or abstract tech visual */}
                  <NextImage
                    src="/images/technician.png"
                    alt="Professional Technician"
                    fill
                    className="object-cover object-top group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/10 to-transparent"></div>
                </div>

                {/* Floating Badge */}
                <div className="absolute -bottom-6 -left-6 bg-white/90 backdrop-blur-md border border-slate-100 p-4 rounded-2xl shadow-xl flex items-center gap-4 animate-bounce-slow">
                  <div className="w-12 h-12 bg-green-500/10 rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <div className="font-bold text-slate-900">Guaranteed</div>
                    <div className="text-xs text-slate-500">Service Warranty</div>
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
          <AboutSection />
        </div>
      </section>

      {/* Premium Gallery Section */}
      <PremiumGallery />

      {/* Quality Section */}
      <section className="py-12 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <LgQualitySection />
        </div>
      </section>

      {/* Experience Banner */}
      <section className="py-12 md:py-24 bg-gradient-to-r from-primary/5 to-orange-500/5 border-y border-primary/10">
        <div className="max-w-7xl mx-auto px-6">
          <HomeQuality />
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-12 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <OurMissionSection />
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-12 md:py-24 relative bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12 md:mb-16">
            <span className="text-primary font-medium tracking-widest uppercase text-sm">What We Do</span>
            <h2 className="text-3xl md:text-5xl font-bold mt-3 mb-6 text-slate-900">Our Expert Services</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Comprehensive repair solutions for all major home appliances. We use original parts and provide warranty on all repairs.
            </p>
          </div>
          <LgServices />
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default LgServiceCenterPage;
