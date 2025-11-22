"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const PremiumGallery = () => {
    const galleryItems = [
        {
            src: "/images/technician.png",
            alt: "Expert Technician",
            title: "Certified Experts",
            subtitle: "Professional Service",
            size: "large", // Spans 2 rows/cols
        },
        {
            src: "/images/washing-machine.png",
            alt: "Washing Machine Repair",
            title: "Premium Care",
            subtitle: "For High-End Models",
            size: "normal",
        },
        {
            src: "/images/refrigerator.png",
            alt: "Refrigerator Repair",
            title: "Precision Repair",
            subtitle: "Cooling Systems",
            size: "normal",
        },
        {
            src: "/images/oven.png",
            alt: "Oven Repair",
            title: "Safety First",
            subtitle: "Gas & Electric",
            size: "wide", // Spans 2 cols
        },
        {
            src: "/images/dishwasher.png",
            alt: "Dishwasher Repair",
            title: "Genuine Parts",
            subtitle: "Long-lasting Fixes",
            size: "normal",
        },
    ];

    return (
        <section className="py-20 bg-slate-50 relative overflow-hidden">
            {/* Decorative Background */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2"></div>
                <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2"></div>
            </div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="text-center mb-16">
                    <span className="text-primary font-bold tracking-widest uppercase text-sm mb-2 block">
                        Our Portfolio
                    </span>
                    <h2 className="text-4xl md:text-5xl font-bold mb-6 text-slate-900">
                        Experience Premium Quality
                    </h2>
                    <p className="text-xl text-slate-600 max-w-2xl mx-auto">
                        See why thousands of homeowners trust us with their most valuable appliances.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 auto-rows-[250px]">
                    {galleryItems.map((item, index) => (
                        <div
                            key={index}
                            className={`relative group rounded-3xl overflow-hidden cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-500 ${item.size === "large"
                                    ? "md:col-span-2 md:row-span-2"
                                    : item.size === "wide"
                                        ? "md:col-span-2"
                                        : ""
                                }`}
                        >
                            <Image
                                src={item.src}
                                alt={item.alt}
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-110"
                            />

                            {/* Glass Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/20 to-transparent opacity-80 transition-opacity duration-300"></div>

                            <div className="absolute bottom-0 left-0 p-6 md:p-8 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                                <div className="w-10 h-1 bg-primary mb-4 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100"></div>
                                <h3 className="text-xl md:text-2xl font-bold text-white mb-1">
                                    {item.title}
                                </h3>
                                <p className="text-white/80 text-sm font-medium transform opacity-0 group-hover:opacity-100 transition-all duration-500 delay-75">
                                    {item.subtitle}
                                </p>
                            </div>

                            {/* Hover Glass Badge */}
                            <div className="absolute top-4 right-4 bg-white/10 backdrop-blur-md border border-white/20 p-3 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 rotate-45 group-hover:rotate-0">
                                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                </svg>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default PremiumGallery;
