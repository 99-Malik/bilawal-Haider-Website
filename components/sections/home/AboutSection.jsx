import Image from "next/image";
import Link from "next/link";
import { phoneNumber } from "@/libs/phoneNumber";

const AboutSection = () => {
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
    <div className="relative">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        {/* Left Content */}
        <div className="space-y-8">
          <div className="inline-flex items-center px-4 py-2 bg-primary/10 text-primary border border-primary/20 rounded-full text-sm font-medium">
            About Our Company
          </div>

          <h2 className="text-4xl md:text-5xl font-bold leading-tight text-slate-900">
            Leading Appliance
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary to-orange-500">
              Repair Experts
            </span>
            Since 2008
          </h2>

          <p className="text-xl text-text-muted leading-relaxed">
            We are the trusted name in appliance repair across Dubai and Abu Dhabi,
            delivering exceptional service with unmatched expertise and reliability.
          </p>

          <p className="text-text-muted leading-relaxed">
            Our team of certified technicians specializes in repairing all major brands
            and models of home appliances. With over 15 years of experience, we've
            successfully completed thousands of repairs, earning the trust and loyalty
            of our customers.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {highlights.map((item, index) => (
              <div key={index} className="flex items-start space-x-4 p-4 rounded-xl bg-white border border-slate-200 hover:border-primary/30 transition-colors shadow-sm">
                <div className="text-3xl text-primary">{item.icon}</div>
                <div>
                  <h3 className="font-bold text-slate-900 mb-1">{item.title}</h3>
                  <p className="text-sm text-slate-600">{item.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="pt-6">
            <Link
              href={`https://wa.me/${phoneNumber}?text=Hello%20I%20need%20your%20help%20with%20my%20appliance%20repairs`}
              target="_blank"
              className="inline-flex px-8 py-4 bg-primary text-white font-bold rounded-xl hover:scale-105 transition-transform duration-300 shadow-lg shadow-primary/20"
            >
              WhatsApp Us
            </Link>
          </div>
        </div>

        {/* Right Content */}
        <div className="relative">
          <div className="relative bg-surface rounded-3xl p-4 border border-white/10">
            <div className="relative rounded-2xl overflow-hidden">
              <Image
                src="/images/technician.png"
                width={800}
                height={800}
                alt="Professional appliance repair"
                className="w-full object-cover hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            </div>

            <div className="absolute -bottom-6 -left-6 bg-surface border border-white/10 rounded-2xl p-6 shadow-2xl">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-1">15+</div>
                <div className="text-sm text-text-muted font-medium">Years Experience</div>
              </div>
            </div>

            <div className="absolute -top-4 -right-4 bg-primary text-white px-6 py-2 rounded-full text-sm font-bold shadow-lg shadow-primary/20">
              Certified Experts
            </div>
          </div>

          {/* Decorative Elements */}
          <div className="absolute -top-8 -left-8 w-32 h-32 bg-primary/20 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-12 -right-12 w-40 h-40 bg-secondary/20 rounded-full blur-3xl"></div>
        </div>
      </div>

      {/* Bottom Stats */}
      <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-white/5 pt-12">
        <div className="text-center">
          <div className="text-4xl font-bold text-primary mb-2">5000+</div>
          <div className="text-text-muted">Happy Customers</div>
        </div>
        <div className="text-center">
          <div className="text-4xl font-bold text-green-500 mb-2">24/7</div>
          <div className="text-text-muted">Emergency Service</div>
        </div>
        <div className="text-center">
          <div className="text-4xl font-bold text-primary mb-2">99%</div>
          <div className="text-text-muted">Success Rate</div>
        </div>
        <div className="text-center">
          <div className="text-4xl font-bold text-primary mb-2">15+</div>
          <div className="text-text-muted">Years Experience</div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
