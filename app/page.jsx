import AboutSection from "@/components/sections/home/AboutSection";
import OurMissionSection from "@/components/sections/home/OurMissionSection";
import LgBanner from "@/components/sections/lg/LgBanner";
import LgQualitySection from "@/components/sections/lg/LgQualitySection";
import LgServices from "@/components/sections/lg/LgServices";
import HomeQuality from "../components/sections/lg/HomeQuality"
import Header from "../components/sections/lg/LgHeader";
import Footer from "../components/sections/lg/LgFooter";



const LgServiceCenterPage = () => {
  return (
    <div className="flex flex-col">
      <Header />
      <LgBanner />
      <LgQualitySection />
      <AboutSection />
      <HomeQuality/>
      <LgServices />
      <OurMissionSection />
      <Footer />
    </div>
  );
};

export default LgServiceCenterPage;
