"use client"
import AboutSection from "@/components/sections/home/AboutSection";
import OurMissionSection from "@/components/sections/home/OurMissionSection";
import LgBanner from "@/components/sections/home/MainBanner";
import LgQualitySection from "@/components/sections/lg/LgQualitySection";
import LgServices from "@/components/sections/lg/LgServices";
import HomeQuality from "../components/sections/home/HomeQuality"
import Header from "../components/headers/Header";
import Footer from "../components/sections/home/Footer";


const LgServiceCenterPage = () => {
  return (
    <>
    <div className="flex flex-col">
      <Header />
      <LgBanner />
      <LgQualitySection />
      <AboutSection/>
      <HomeQuality/>
      <LgServices />
      <OurMissionSection />
      <Footer />
    </div>
    </>
  );
};

export default LgServiceCenterPage;
