import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { phoneNumber } from "@/libs/phoneNumber";

// Brand-based gradient + default fallback
const brandColors = {
  // lg: {
  //   gradient: "from-[#a50034] to-[#800026]",
  //   text: "text-[#a50034]",
  // },
  // samsung: {
  //   gradient: "from-[#1428a0] to-[#0078d6]",
  //   text: "text-[#1428a0]",
  // },
  // bosch: {
  //   gradient: "from-[#ed1c24] to-[#a60000]",
  //   text: "text-[#ed1c24]",
  // },
  // siemens: {
  //   gradient: "from-[#009999] to-[#007777]",
  //   text: "text-[#009999]",
  // },
  default: {
    gradient: "from-blue-600 to-cyan-500",
    text: "text-blue-600",
  },
};

const OurMissionSection = () => {
  const path = usePathname();

  const brandKey =
    Object.keys(brandColors).find((key) =>
      path.includes(`/companies/${key}`)
    ) || "default";

  const brand = brandColors[brandKey];

  const missions = [
    {
      icon: "🎯",
      title: "Our Mission",
      description:
        "To provide exceptional appliance repair services that exceed customer expectations through innovative solutions, skilled technicians, and unwavering commitment to quality and reliability.",
    },
    {
      icon: "👁️",
      title: "Our Vision",
      description:
        "To become the leading appliance repair service provider in Dubai and Abu Dhabi, recognized for excellence, innovation, and customer satisfaction while maintaining the highest standards of professionalism.",
    },
    {
      icon: "🚀",
      title: "Our Goals",
      description:
        "To expand our service reach, enhance customer experience through technology, maintain 99% customer satisfaction, and establish ourselves as the most trusted name in appliance repairs.",
    },
  ];

  const values = [
    {
      icon: "🤝",
      title: "Integrity",
      description: "Honest and transparent in all our dealings",
    },
    {
      icon: "⚡",
      title: "Excellence",
      description: "Striving for the highest quality in every service",
    },
    {
      icon: "👥",
      title: "Customer Focus",
      description: "Putting customer needs first in everything we do",
    },
    {
      icon: "🔧",
      title: "Innovation",
      description: "Continuously improving our methods and technology",
    },
  ];

  return (
    <div className="py-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2
            className={`text-4xl md:text-5xl font-black mb-6 bg-gradient-to-r ${brand.gradient} bg-clip-text text-transparent`}
          >
            Our Mission & Vision
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Driving excellence in appliance repair through innovation, integrity,
            and customer satisfaction
          </p>
        </div>

        {/* Mission Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {missions.map((mission, index) => (
            <div key={index} className="group relative">
              <div className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 h-full">
                <div
                  className={`w-16 h-16 bg-gradient-to-r ${brand.gradient} rounded-2xl mb-6 flex items-center justify-center text-2xl group-hover:scale-110 transition-transform duration-300`}
                >
                  {mission.icon}
                </div>

                <h3 className="text-xl font-bold mb-4 text-gray-800">
                  {mission.title}
                </h3>

                <p className="text-gray-600 leading-relaxed">
                  {mission.description}
                </p>

                {/* Decorative Element */}
                <div
                  className={`absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-r ${brand.gradient} rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                ></div>
              </div>
            </div>
          ))}
        </div>

        {/* Core Values Section */}
        <div className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-3xl p-12">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-4 text-gray-800">
              Our Core Values
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              These principles guide everything we do and ensure we deliver the
              best possible service to our customers
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center group">
                <div
                  className={`w-20 h-20 bg-gradient-to-r ${brand.gradient} rounded-2xl mx-auto mb-4 flex items-center justify-center text-3xl group-hover:scale-110 transition-transform duration-300`}
                >
                  {value.icon}
                </div>

                <h4 className="text-lg font-bold mb-2 text-gray-800">
                  {value.title}
                </h4>

                <p className="text-gray-600 text-sm">{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <div
            className={`bg-gradient-to-r ${brand.gradient} rounded-3xl p-8 text-white`}
          >
            <h3 className="text-2xl font-bold mb-4">
              Ready to Experience Excellence?
            </h3>
            <p className="text-lg mb-6 opacity-90">
              Join thousands of satisfied customers who trust us with their
              appliance repairs
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href={`https://wa.me/${phoneNumber}?text=Hello%20I%20need%20your%20help%20with%20my%20appliance%20repairs`}
                target="_blank"
                className={`px-8 py-4 bg-white ${brand.text} font-bold rounded-xl hover:scale-105 transition-transform duration-300`}
              >
                Get Started Today
              </Link>
              <Link
                href={`https://wa.me/${phoneNumber}?text=Hello%20I%20need%20your%20help%20with%20my%20appliance%20repairs`}
                target="_blank"
                className="px-8 py-4 border-2 border-white text-white font-bold rounded-xl hover:bg-white hover:text-gray-800 transition-all duration-300"
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

export default OurMissionSection;
