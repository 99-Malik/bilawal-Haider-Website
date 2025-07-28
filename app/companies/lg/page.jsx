"use client"
import Link from "next/link";
import { phoneNumber } from "@/libs/phoneNumber";
import AboutSection from "@/components/sections/home/AboutSection";
import OurMissionSection from "@/components/sections/home/OurMissionSection";
import LgBanner from "@/components/sections/lg/LgBanner";
import LgQualitySection from "@/components/sections/lg/LgQualitySection";
import LgServices from "@/components/sections/lg/LgServices";
import HomeQuality from "../../../components/sections/lg/HomeQuality"
import Feature from "../../../components/sections/lg/feature"
import Header from "../../../components/headers/Header";

const LgServiceCenterPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-white to-red-100">
      {/* <Header /> */}
      
      {/* LG Hero Section */}
      <section className="relative h-screen overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#A50034]/90 via-[#A50034]/90 to-[#A50034]/90 z-10"></div>
        <div className="absolute inset-0 bg-[url('/main-banner.jpg')] bg-cover bg-center bg-no-repeat transform scale-110"></div>
        <div className="relative z-20 flex h-full items-center justify-center">
          <div className="text-center text-white max-w-4xl mx-auto px-6">
            <div className="mb-8">
              <div className="inline-flex items-center gap-4 bg-white/20 backdrop-blur-sm rounded-2xl px-6 py-3 md:mt-20 m-6">
                <div className="w-16 h-12 bg-white rounded-xl flex items-center justify-center">
                  <span className="text-2xl font-bold text-[#A50034]">LG</span>
                </div>
                <span className="text-white font-semibold">Authorized Service Center</span>
              </div>
            </div>
            
            <h1 className="text-5xl md:text-8xl font-black mb-8 leading-tight">
              LG
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-white to-red-200">
                Appliance
              </span>
              <span className="block">Repair</span>
            </h1>
            <p className="text-xl md:text-2xl mb-12 opacity-90 max-w-3xl mx-auto">
              Professional LG appliance repair services across Dubai and Abu Dhabi
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link
                href={`https://wa.me/${phoneNumber}?text=Hello%20I%20need%20your%20help%20with%20my%20LG%20appliance%20repairs`}
                target="_blank"
                className="px-12 border-2 border-white py-4 bg-gradient-to-r from-[#A50034] to-[#A50034] text-white font-bold rounded-full text-lg hover:scale-105 transition-transform duration-300 shadow-2xl"
              >
                Get LG Quote
              </Link>
              <Link
                href={`https://wa.me/${phoneNumber}?text=Hello%20I%20need%20your%20help%20with%20my%20LG%20appliance%20repairs`}
                target="_blank"
                className="px-12 py-4 border-2 border-white text-white font-bold rounded-full text-lg hover:bg-white hover:text-[#A50034] transition-all duration-300"
              >
                WhatsApp
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* LG Stats Cards */}
      <section className="relative -mt-20 md:mt-10 z-30 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-2xl transform hover:scale-105 transition-transform duration-300 border-l-4 border-[#A50034]">
              <div className="text-4xl font-bold text-[#A50034] mb-2">15+</div>
              <div className="text-gray-600">Years LG Experience</div>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-2xl transform hover:scale-105 transition-transform duration-300 border-l-4 border-[#A50034]">
              <div className="text-4xl font-bold text-[#A50034] mb-2">5K+</div>
              <div className="text-gray-600">LG Repairs</div>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-2xl transform hover:scale-105 transition-transform duration-300 border-l-4 border-[#A50034]">
              <div className="text-4xl font-bold text-[#A50034] mb-2">24/7</div>
              <div className="text-gray-600">LG Support</div>
            </div>
          </div>
        </div>
      </section>

      {/* LG Services */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-black mb-6 bg-gradient-to-r from-[#A50034] to-[#A50034] bg-clip-text text-transparent">
              LG Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Expert repair services for all LG appliances
            </p>
          </div>
          <LgServices />
        </div>
      </section>

      {/* About Section */}
      <section className="py-24 bg-gradient-to-br from-[#A50034]/10 to-white">
        <div className="max-w-7xl mx-auto px-6">
          <AboutSection />
        </div>
      </section>

      {/* Quality Features */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <LgQualitySection />
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-24 bg-[#A50034] text-white">
        <div className="max-w-7xl mx-auto px-6">
          <HomeQuality />
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-24 bg-red-50">
        <div className="max-w-7xl mx-auto px-6">
          <OurMissionSection />
        </div>
      </section>

    </div>
  );
};

export default LgServiceCenterPage;
