"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { phoneNumber } from "@/libs/phoneNumber";

const brandColors = {
  // lg: "#a50034",
  // bosch: "#ed0007",
  // siemens: "#00A4B4",
  // samsung: "#1428A0",
};

const defaultGradient = "bg-gradient-to-r from-blue-500 to-purple-500";
const defaultTextGradient =
  "text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500";

const LgServices = () => {
  const pathname = usePathname();
  const brand = pathname.split("/")[2];

  const brandColor = brandColors[brand] || "#3b82f6"; // default blue
  const isKnownBrand = !!brandColors[brand];

  const services = [
    {
      imageUrl: "/lg/washing-repair.webp",
      heading: "Washing Machine Repair",
      description:
        "Professional repair services for all washing machine brands and models. Fast diagnosis and reliable solutions.",
      features: ["Same-day service", "Warranty included", "Expert technicians"],
    },
    {
      imageUrl: "/lg/fridge-repair.jpg",
      heading: "Refrigerator Repair",
      description:
        "Complete refrigerator repair and maintenance services. From cooling issues to compressor problems.",
      features: ["24/7 emergency", "Free diagnosis", "Quality parts"],
    },
    {
      imageUrl: "/lg/stove-repair.jpg",
      heading: "Stove/Cooker Repair",
      description:
        "Expert repair for gas and electric stoves. Safe and efficient service for all cooker types.",
      features: ["Safety certified", "Quick repair", "Affordable rates"],
    },
    {
      imageUrl: "/lg/dishwasher-repair.jpg",
      heading: "Dishwasher Repair",
      description:
        "Comprehensive dishwasher repair services. Fix leaks, noise issues, and cleaning problems.",
      features: ["Water leak repair", "Noise reduction", "Cleaning optimization"],
    },
    {
      imageUrl: "/lg/oven-repair.jpeg",
      heading: "Gas Oven Repair",
      description:
        "Specialized gas oven repair and maintenance. Ensure safety and optimal performance.",
      features: ["Gas safety", "Temperature control", "Ignition repair"],
    },
    {
      imageUrl: "/lg/dryer-repair.jpg",
      heading: "Dryer Repair",
      description:
        "Professional dryer repair services. Fix heating, spinning, and electrical issues.",
      features: ["Heating repair", "Motor service", "Drum maintenance"],
    },
  ];

  return (
    <div className="space-y-12">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <div key={index} className="group relative">
            <div className="bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100">
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={service.imageUrl}
                  alt={service.heading}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/30"></div>
                <div
                  className={`absolute top-4 left-4 px-3 py-1 text-sm font-bold rounded-full ${
                    !isKnownBrand ? "text-white" : "text-white"
                  } ${!isKnownBrand ? defaultGradient : ""}`}
                  style={isKnownBrand ? { backgroundColor: brandColor } : {}}
                >
                  Service
                </div>
              </div>
              <div className="p-6">
                <h3
                  className={`text-xl font-bold mb-3 text-gray-800 group-hover:${
                    isKnownBrand ? "" : defaultTextGradient
                  } transition-colors duration-300`}
                  style={isKnownBrand ? { color: brandColor } : {}}
                >
                  {service.heading}
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {service.description}
                </p>
                <div className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <div
                      key={featureIndex}
                      className="flex items-center space-x-2"
                    >
                      <div
                        className={`w-2 h-2 rounded-full ${
                          !isKnownBrand ? "" : ""
                        }`}
                        style={
                          isKnownBrand
                            ? { backgroundColor: brandColor }
                            : {
                                backgroundImage:
                                  "linear-gradient(to right, #3b82f6, #9333ea)",
                              }
                        }
                      ></div>
                      <span className="text-sm text-gray-600">{feature}</span>
                    </div>
                  ))}
                </div>
                <Link
                  href={`https://wa.me/${phoneNumber}?text=Hello%20I%20need%20your%20help%20with%20my%20appliance%20repairs`}
                  target="_blank"
                  className={`w-full py-3 text-white font-bold rounded-xl hover:scale-105 transition-transform duration-300 shadow-lg block text-center`}
                  style={{ backgroundColor: brandColor }}
                >
                  Get Quote
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div
        className={`rounded-3xl p-8 text-white text-center ${
          isKnownBrand ? "" : defaultGradient
        }`}
        style={isKnownBrand ? { backgroundColor: brandColor } : {}}
      >
        <h3 className="text-2xl font-bold mb-4">Need Emergency Repair?</h3>
        <p className="text-lg mb-6 opacity-90">
          Our expert technicians are available 24/7 for emergency repairs
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href={`https://wa.me/${phoneNumber}?text=Hello%20I%20need%20your%20help%20with%20my%20appliance%20repairs`}
            target="_blank"
            className="px-8 py-4 bg-white text-black font-bold rounded-xl hover:scale-105 transition-transform duration-300"
          >
            WhatsApp
          </Link>
          <Link
            href={`https://wa.me/${phoneNumber}?text=Hello%20I%20need%20your%20help%20with%20my%20appliance%20repairs`}
            target="_blank"
            className="px-8 py-4 border-2 border-white text-white font-bold rounded-xl hover:bg-white hover:text-black transition-all duration-300"
          >
            Get Quote
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LgServices;
