import Image from "next/image";
import Link from "next/link";
import { phoneNumber } from "@/libs/phoneNumber";
import LgSubServices from "../home/HomesubServices";

const LgExperience = () => {
  const services = [
    {
      title: "Washing Machine Repair",
      icon: "🧺",
      description: "Expert repair for all washing machine brands"
    },
    {
      title: "Refrigerator Repair",
      icon: "❄️",
      description: "Professional cooling system repairs"
    },
    {
      title: "Stove/Cooker Repair",
      icon: "🔥",
      description: "Gas and electric stove repairs"
    },
    {
      title: "Dishwasher Repair",
      icon: "🍽️",
      description: "Complete dishwasher service and repair"
    },
    {
      title: "Gas Oven Repair",
      icon: "🔥",
      description: "Specialized gas oven maintenance"
    },
    {
      title: "Dryer Repair",
      icon: "🌪️",
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
    <div className="py-20 bg-gradient-to-br from-gray-900 via-purple-900 to-blue-900 text-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
              <span className="text-sm font-medium">Our Expertise</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-black leading-tight">
              Professional
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500">
                Appliance Repair
              </span>
              Services
            </h2>
            
            <p className="text-xl text-gray-300 leading-relaxed">
              With over 20 years of experience, we provide comprehensive appliance repair 
              services across Dubai and Abu Dhabi. Our certified technicians are experts 
              in diagnosing and repairing all major appliance brands.
            </p>
            
            <p className="text-gray-300 leading-relaxed">
              We specialize in washing machines, refrigerators, stoves, dishwashers, 
              gas ovens, and dryers. Our commitment to quality, reliability, and 
              customer satisfaction has made us the trusted choice for appliance repairs.
            </p>
            
            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl font-bold text-yellow-400 mb-1">{stat.number}</div>
                  <div className="text-sm text-gray-300">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Right Content - Services Grid */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold mb-6">Our Services</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {services.map((service, index) => (
                <div key={index} className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
                  <div className="flex items-start space-x-4">
                    <div className="text-3xl">{service.icon}</div>
                    <div>
                      <h4 className="font-bold text-lg mb-2">{service.title}</h4>
                      <p className="text-sm text-gray-300">{service.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
            <h3 className="text-2xl font-bold mb-4">Ready to Get Started?</h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Contact us today for a free consultation and quote. Our expert technicians 
              are ready to help you with all your appliance repair needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href={`https://wa.me/${phoneNumber}?text=Hello%20I%20need%20your%20help%20with%20my%20appliance%20repairs`}
                target="_blank"
                className="px-8 py-4 bg-gradient-to-r from-yellow-400 to-orange-500 text-black font-bold rounded-xl hover:scale-105 transition-transform duration-300"
              >
                Get Free Quote
              </Link>
              <Link
                href={`https://wa.me/${phoneNumber}?text=Hello%20I%20need%20your%20help%20with%20my%20appliance%20repairs`}
                target="_blank"
                className="px-8 py-4 border-2 border-white text-white font-bold rounded-xl hover:bg-white hover:text-black transition-all duration-300"
              >
                WhatsApp
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LgExperience;
