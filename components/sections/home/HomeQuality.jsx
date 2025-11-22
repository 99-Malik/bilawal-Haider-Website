import Link from "next/link";
import { phoneNumber } from "@/libs/phoneNumber";

const HomeQuality = () => {
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
    <div className="py-10">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        {/* Left Content */}
        <div className="space-y-8">
          <div className="inline-flex items-center px-4 py-2 bg-primary/10 text-primary border border-primary/20 rounded-full text-sm font-medium">
            Our Expertise
          </div>

          <h2 className="text-4xl md:text-5xl font-bold leading-tight text-slate-900">
            Professional
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary to-red-600">
              Appliance Repair
            </span>
            Services
          </h2>

          <p className="text-xl text-slate-600 leading-relaxed">
            With over 20 years of experience, we provide comprehensive appliance repair
            services across Dubai and Abu Dhabi. Our certified technicians are experts
            in diagnosing and repairing all major appliance brands.
          </p>

          <p className="text-slate-600 leading-relaxed">
            We specialize in washing machines, refrigerators, stoves, dishwashers,
            gas ovens, and dryers. Our commitment to quality, reliability, and
            customer satisfaction has made us the trusted choice for appliance repairs.
          </p>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 gap-6 pt-6 border-t border-slate-200">
            {stats.map((stat, index) => (
              <div key={index} className="text-center p-4 bg-white rounded-xl border border-slate-200 shadow-sm">
                <div className="text-3xl font-bold text-primary mb-1">{stat.number}</div>
                <div className="text-sm text-slate-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Content - Services Grid */}
        <div className="space-y-6">
          <h3 className="text-2xl font-bold mb-6 text-slate-900">Our Services</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {services.map((service, index) => (
              <div key={index} className="group bg-white hover:bg-slate-50 rounded-xl p-6 border border-slate-200 hover:border-primary/30 transition-all duration-300 shadow-sm hover:shadow-md">
                <div className="flex items-start space-x-4">
                  <div className="text-3xl bg-slate-100 p-2 rounded-lg group-hover:scale-110 transition-transform">{service.icon}</div>
                  <div>
                    <h4 className="font-bold text-lg mb-2 text-slate-900 group-hover:text-primary transition-colors">{service.title}</h4>
                    <p className="text-sm text-slate-600">{service.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom CTA */}
      <div className="mt-16 text-center">
        <div className="bg-white rounded-3xl p-6 md:p-10 border border-slate-200 relative overflow-hidden shadow-lg">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-red-500 to-primary"></div>
          <h3 className="text-xl md:text-2xl font-bold mb-4 text-slate-900">Ready to Get Started?</h3>
          <p className="text-slate-600 mb-8 max-w-2xl mx-auto text-sm md:text-base">
            Contact us today for a free consultation and quote. Our expert technicians
            are ready to help you with all your appliance repair needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href={`https://wa.me/${phoneNumber}?text=Hello%20I%20need%20your%20help%20with%20my%20appliance%20repairs`}
              target="_blank"
              className="px-8 py-4 bg-primary text-white font-bold rounded-xl hover:scale-105 transition-transform duration-300 shadow-lg shadow-primary/20"
            >
              Get Free Quote
            </Link>
            <Link
              href={`https://wa.me/${phoneNumber}?text=Hello%20I%20need%20your%20help%20with%20my%20appliance%20repairs`}
              target="_blank"
              className="px-8 py-4 border border-slate-200 text-slate-900 font-bold rounded-xl hover:bg-slate-50 transition-all duration-300"
            >
              WhatsApp
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeQuality;
