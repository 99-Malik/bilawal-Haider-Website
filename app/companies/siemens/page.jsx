"use client";
import Link from "next/link";
import { phoneNumber } from "@/libs/phoneNumber";
import AboutSection from "@/components/sections/home/AboutSection";
import OurMissionSection from "@/components/sections/home/OurMissionSection";
import LgBanner from "@/components/sections/lg/LgBanner";
import LgQualitySection from "@/components/sections/lg/LgQualitySection";
import LgServices from "@/components/sections/lg/LgServices";
import HomeQuality from "../../../components/sections/lg/HomeQuality";
import Feature from "../../../components/sections/lg/feature";
// import Header from "../../../components/headers/Header";

const SiemensServiceCenterPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#e0f7fa] via-white to-[#f0fdff]">
      {/* Hero Section */}
      <section className="relative h-screen overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#00a4b4]/90 via-[#0093a2]/90 to-[#007a86]/90 z-10"></div>
        <div className="absolute inset-0 bg-[url('/main-banner.jpg')] bg-cover bg-center bg-no-repeat transform scale-110"></div>
        <div className="relative z-20 flex h-full items-center justify-center">
          <div className="text-center text-white max-w-4xl mx-auto px-6">
            <div className="mb-8">
              <div className="inline-flex items-center gap-4 bg-white/20 backdrop-blur-sm rounded-2xl px-6 py-3 md:mt-20 mb-6 mt-16">
                <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center">
                  <span className="text-2xl font-bold text-[#00a4b4]">S</span>
                </div>
                <span className="text-white font-semibold">Siemens Service Center</span>
              </div>
            </div>

            <h1 className="text-6xl md:text-8xl font-black mb-8 leading-tight">
              Siemens
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-white to-[#aef1f4]">
                Appliance
              </span>
              <span className="block">Repair</span>
            </h1>
            <p className="text-xl md:text-2xl mb-12 opacity-90 max-w-3xl mx-auto">
              Professional Siemens appliance repair services across Dubai and Abu Dhabi
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link
                href={`https://wa.me/${phoneNumber}?text=Hello%20I%20need%20your%20help%20with%20my%20Siemens%20appliance%20repairs`}
                target="_blank"
                className="px-12 py-4 border-2 border-white bg-gradient-to-r from-[#00a4b4] to-[#007a86] text-white font-bold rounded-full text-lg hover:scale-105 transition-transform duration-300 shadow-2xl"
              >
                Get Siemens Quote
              </Link>
              <Link
                href={`https://wa.me/${phoneNumber}?text=Hello%20I%20need%20your%20help%20with%20my%20Siemens%20appliance%20repairs`}
                target="_blank"
                className="px-12 py-4 border-2 border-white text-white font-bold rounded-full text-lg hover:bg-white hover:text-[#00a4b4] transition-all duration-300"
              >
                WhatsApp
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Cards */}
      <section className="relative mt-12 md:mt-10 z-30 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-2xl transform hover:scale-105 transition-transform duration-300 border-l-4 border-[#00a4b4]">
              <div className="text-4xl font-bold text-[#00a4b4] mb-2">15+</div>
              <div className="text-gray-600">Years Siemens Experience</div>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-2xl transform hover:scale-105 transition-transform duration-300 border-l-4 border-[#00a4b4]">
              <div className="text-4xl font-bold text-[#00a4b4] mb-2">5K+</div>
              <div className="text-gray-600">Siemens Repairs</div>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-2xl transform hover:scale-105 transition-transform duration-300 border-l-4 border-[#00a4b4]">
              <div className="text-4xl font-bold text-[#00a4b4] mb-2">24/7</div>
              <div className="text-gray-600">Siemens Support</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-black mb-6 bg-gradient-to-r from-[#00a4b4] to-[#007a86] bg-clip-text text-transparent">
              Siemens Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Expert repair services for all Siemens appliances
            </p>
          </div>
          <LgServices />
        </div>
      </section>

      {/* About */}
      <section className="py-24 bg-gradient-to-br from-[#e0f7fa] to-white">
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

      {/* Experience / Home Quality */}
      <section className="py-24 bg-gradient-to-r from-[#00a4b4] to-[#007a86] text-white">
        <div className="max-w-7xl mx-auto px-6">
          <HomeQuality />
        </div>
      </section>

      {/* Mission */}
      <section className="py-24 bg-[#e0f7fa]">
        <div className="max-w-7xl mx-auto px-6">
          <OurMissionSection />
        </div>
      </section>

      {/* <Footer /> */}
    </div>
  );
};

export default SiemensServiceCenterPage;


// "use client"
// import Link from "next/link";
// import { phoneNumber } from "@/libs/phoneNumber";
// import AboutSection from "@/components/sections/home/AboutSection";
// import OurMissionSection from "@/components/sections/home/OurMissionSection";
// import LgBanner from "@/components/sections/home/MainBanner";
// import LgQualitySection from "@/components/sections/lg/LgQualitySection";
// import LgServices from "@/components/sections/lg/LgServices";
// import HomeQuality from "../../../components/sections/home/HomeQuality"
// import Header from "../../../components/headers/Header";
// import Footer from "../../../components/sections/home/Footer";

// const LgServiceCenterPage = () => {
//   return (
//     <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
//       <Header />
      
//       {/* Hero Section with Parallax */}
//       <section className="relative h-screen overflow-hidden">
//         <div className="absolute inset-0 bg-gradient-to-r from-purple-900/80 via-blue-900/80 to-indigo-900/80 z-10"></div>
//         <div className="absolute inset-0 bg-[url('/main-banner.jpg')] bg-cover bg-center bg-no-repeat transform scale-110"></div>
//         <div className="relative z-20 flex h-full items-center justify-center">
//           <div className="text-center text-white max-w-4xl mx-auto px-6">
//             <h1 className="text-6xl md:text-8xl font-black mb-8 leading-tight">
//               Expert
//               <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500">
//                 Appliance
//               </span>
//               Repair
//             </h1>
//             <p className="text-xl md:text-2xl mb-12 opacity-90 max-w-3xl mx-auto">
//               Professional technicians delivering exceptional service across Dubai and Abu Dhabi
//             </p>
//             <div className="flex flex-col sm:flex-row gap-6 justify-center">
//               <Link
//                 href={`https://wa.me/${phoneNumber}?text=Hello%20I%20need%20your%20help%20with%20my%20appliance%20repairs`}
//                 target="_blank"
//                 className="px-12 py-4 bg-gradient-to-r from-yellow-400 to-orange-500 text-black font-bold rounded-full text-lg hover:scale-105 transition-transform duration-300 shadow-2xl"
//               >
//                 Get Free Quote
//               </Link>
//               <Link
//                 href={`https://wa.me/${phoneNumber}?text=Hello%20I%20need%20your%20help%20with%20my%20appliance%20repairs`}
//                 target="_blank"
//                 className="px-12 py-4 border-2 border-white text-white font-bold rounded-full text-lg hover:bg-white hover:text-black transition-all duration-300"
//               >
//                 WhatsApp
//               </Link>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Floating Stats Cards */}
//       <section className="relative -mt-20 z-30 px-6">
//         <div className="max-w-7xl mx-auto">
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//             <div className="bg-white rounded-2xl p-8 shadow-2xl transform hover:scale-105 transition-transform duration-300">
//               <div className="text-4xl font-bold text-blue-600 mb-2">15+</div>
//               <div className="text-gray-600">Years Experience</div>
//             </div>
//             <div className="bg-white rounded-2xl p-8 shadow-2xl transform hover:scale-105 transition-transform duration-300">
//               <div className="text-4xl font-bold text-green-600 mb-2">5K+</div>
//               <div className="text-gray-600">Happy Customers</div>
//             </div>
//             <div className="bg-white rounded-2xl p-8 shadow-2xl transform hover:scale-105 transition-transform duration-300">
//               <div className="text-4xl font-bold text-purple-600 mb-2">24/7</div>
//               <div className="text-gray-600">Emergency Service</div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Services Grid */}
//       <section className="py-24 bg-white">
//         <div className="max-w-7xl mx-auto px-6">
//           <div className="text-center mb-16">
//             <h2 className="text-5xl md:text-6xl font-black mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
//               Our Services
//             </h2>
//             <p className="text-xl text-gray-600 max-w-3xl mx-auto">
//               Comprehensive appliance repair solutions for all your home needs
//             </p>
//           </div>
//           <LgServices />
//         </div>
//       </section>

//       {/* About Section with Modern Layout */}
//       <section className="py-24 bg-gradient-to-br from-gray-50 to-blue-50">
//         <div className="max-w-7xl mx-auto px-6">
//           <AboutSection />
//         </div>
//       </section>

//       {/* Quality Features */}
//       <section className="py-24 bg-white">
//         <div className="max-w-7xl mx-auto px-6">
//           <LgQualitySection />
//         </div>
//       </section>

//       {/* Experience Section */}
//       <section className="py-24 bg-gradient-to-r from-purple-900 to-blue-900 text-white">
//         <div className="max-w-7xl mx-auto px-6">
//           <HomeQuality />
//         </div>
//       </section>

//       {/* Mission Section */}
//       <section className="py-24 bg-gray-50">
//         <div className="max-w-7xl mx-auto px-6">
//           <OurMissionSection />
//         </div>
//       </section>

//       <Footer />
//     </div>
//   );
// };

// export default LgServiceCenterPage;