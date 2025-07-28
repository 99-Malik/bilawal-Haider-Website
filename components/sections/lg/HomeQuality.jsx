
"use client";

import Image from "next/image";
import { usePathname } from "next/navigation";
import LgSubServices from "../siemens/HomesubServices";

const brandColors = {
  lg: {
    name: "LG",
    color: "text-[#a50034]",
  },
  samsung: {
    name: "Samsung",
    color: "text-[#1428a0]",
  },
  bosch: {
    name: "Bosch",
    color: "text-[#ed1c24]",
  },
  siemens: {
    name: "Siemens",
    color: "text-[#009999]",
  },
  default: {
    name: "",
    color: "text-blue-600",
  },
};

const LgExperience = () => {
  const pathname = usePathname();

  // Determine brand key from the path
  const brandKey =
    Object.keys(brandColors).find((key) =>
      pathname.includes(`/companies/${key}`)
    ) || "default";

  const brand = brandColors[brandKey];

  const baseServices = [
    "Washing Machine Repair",
    "Refrigerator Repair",
    "Stove/Cooker Repair",
    "Dishwasher Repair",
    "Gas Oven Repair",
    "Dryer Repair",
  ];

  const services = baseServices.map((title) => ({
    title: brand.name ? `${brand.name} ${title}` : title,
  }));

  return (
    <div className="py-10" id="aboutus">
      <div className="flex flex-col md:flex-row items-center gap-8">
        {/* Image */}
        <Image
          className="mx-auto"
          src="/home/washing-machine-repair.png"
          width={500}
          height={500}
          alt="About Us"
        />

        {/* Text Section */}
        <div className="px-10 flex flex-col justify-center bg-gray-100 py-8 rounded-2xl">
          <h1 className={`text-center md:text-left text-4xl font-bold tracking-wide ${brand.color}`}>
            About Us
          </h1>
          <h2 className="mt-4 text-center md:text-left text-xl font-semibold tracking-wide text-gray-800">
            20 Years Experience In This Passion
          </h2>
          <p className="mt-6 text-justify text-gray-600 leading-relaxed">
            We are established in Dubai and Abu Dhabi, providing home appliance
            repair and maintenance services. With over 10 years of experience in
            installing, repairing, and maintaining washing machines, stoves,
            ovens, gas ovens, TVs, LEDs, and more, we’ve completed thousands of
            tasks across the UAE. Our specialty lies in washing machines,
            dryers, dishwashers, and stoves — both for individual and corporate
            clients. We deliver cost-effective, professional service backed by
            long-term expertise and trust.
          </p>

          {/* Services List */}
          <div className="mt-8">
            <h2 className={`text-lg font-bold tracking-wide ${brand.color}`}>
              Repair Services
            </h2>

            <div className="mt-4 flex flex-col gap-2">
              {services.map((service, index) => (
                <LgSubServices key={index} {...service} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LgExperience;
