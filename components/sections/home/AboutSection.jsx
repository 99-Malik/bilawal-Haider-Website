import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { phoneNumber } from "@/libs/phoneNumber";

// Brand-specific color styles
const brandStyles = {
  // lg: {
  //   primary: "text-[#a50034]",
  //   secondary: "bg-[#a50034]",
  // },
  // bosch: {
  //   primary: "text-[#ed0007]",
  //   secondary: "bg-[#ed0007]",
  // },
  // siemens: {
  //   primary: "text-[#00a4b4]",
  //   secondary: "bg-[#00a4b4]",
  // },
  // samsung: {
  //   primary: "text-[#1428a0]",
  //   secondary: "bg-[#1428a0]",
  // },
  default: {
    primary: "text-[#1d4ed8]",
    secondary: "bg-[#1d4ed8]",
  },
};

const AboutSection = () => {
  const pathname = usePathname();
  const brand = pathname.split("/")[2] || "default";
  const colors = brandStyles[brand] || brandStyles.default;

  const highlights = [
    {
      icon: "👨‍🔧",
      title: "Expert Team",
      description: "Certified technicians with years of experience",
    },
    {
      icon: "⚡",
      title: "Fast Service",
      description: "Same-day repairs and quick response times",
    },
    {
      icon: "💰",
      title: "Best Prices",
      description: "Competitive rates with no hidden fees",
    },
    {
      icon: "🛡️",
      title: "Warranty",
      description: "Guaranteed work with parts warranty",
    },
  ];

  return (
    <div className="py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className={`inline-flex items-center px-4 py-2 ${colors.secondary} text-white rounded-full text-sm font-medium`}>
              About Our Company
            </div>

            <h2 className="text-4xl md:text-5xl font-black leading-tight">
              Leading Appliance
              <span className={`block ${colors.primary}`}>
                Repair Experts
              </span>
              Since 2008
            </h2>

            <p className="text-xl text-gray-600 leading-relaxed">
              We are the trusted name in appliance repair across Dubai and Abu Dhabi,
              delivering exceptional service with unmatched expertise and reliability.
            </p>

            <p className="text-gray-600 leading-relaxed">
              Our team of certified technicians specializes in repairing all major brands
              and models of home appliances. With over 15 years of experience, we've
              successfully completed thousands of repairs, earning the trust and loyalty
              of our customers.
            </p>

            <div className="grid grid-cols-2 gap-6">
              {highlights.map((item, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="text-3xl">{item.icon}</div>
                  <div>
                    <h3 className="font-bold text-gray-800 mb-1">{item.title}</h3>
                    <p className="text-sm text-gray-600">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-6">
              <Link
                href={`https://wa.me/${phoneNumber}?text=Hello%20I%20need%20your%20help%20with%20my%20appliance%20repairs`}
                target="_blank"
                className={`px-8 py-4 ${colors.secondary} text-white font-bold rounded-xl hover:scale-105 transition-transform duration-300 shadow-lg`}
              >
                WhatsApp Us
              </Link>
            </div>
          </div>

          {/* Right Content */}
          <div className="relative">
            <div className="relative bg-gray-50 rounded-3xl p-8">
              <Image
                src="/bosch/oven.webp"
                width={800}
                height={800}
                alt="Professional appliance repair"
                className="w-full rounded-2xl shadow-2xl"
              />

              <div className="absolute -bottom-8 -left-8 bg-white rounded-2xl p-6 shadow-2xl border border-gray-100">
                <div className="text-center">
                  <div className={`text-3xl font-bold ${colors.primary} mb-1`}>15+</div>
                  <div className="text-sm text-gray-600 font-medium">Years Experience</div>
                </div>
              </div>

              <div className={`absolute -top-4 -right-4 ${colors.secondary} text-white px-4 py-2 rounded-full text-sm font-bold`}>
                Certified
              </div>
            </div>

            {/* Decorative Pulses */}
            <div className="absolute -top-8 -left-8 w-16 h-16 bg-yellow-400 rounded-full opacity-20 animate-pulse"></div>
            <div className="absolute -bottom-12 -right-12 w-20 h-20 bg-purple-400 rounded-full opacity-20 animate-pulse delay-1000"></div>
          </div>
        </div>

        {/* Bottom Stats */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className={`text-4xl font-bold ${colors.primary} mb-2`}>5000+</div>
            <div className="text-gray-600">Happy Customers</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-green-600 mb-2">24/7</div>
            <div className="text-gray-600">Emergency Service</div>
          </div>
          <div className="text-center">
            <div className={`text-4xl font-bold ${colors.primary} mb-2`}>99%</div>
            <div className="text-gray-600">Success Rate</div>
          </div>
          <div className="text-center">
            <div className={`text-4xl font-bold ${colors.primary} mb-2`}>15+</div>
            <div className="text-gray-600">Years Experience</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
