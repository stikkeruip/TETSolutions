"use client"

import React, { useEffect, useState } from "react";
import { Truck, Award, BarChart } from "lucide-react";

const SupplyChainExcellence = () => {
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        setIsLoaded(true);
    }, []);

    const stats = [
        {
            icon: Truck,
            value: "20+",
            label: "Years of supply chain experience",
            delay: 100
        },
        {
            icon: Award,
            value: "Exclusive",
            label: "European partnerships",
            delay: 200
        },
        {
            icon: BarChart,
            value: "100%",
            label: "Quality assurance standards",
            delay: 300
        }
    ];

    return (
        <div className="py-16 bg-[#013d60]" id="supply-chain-excellence">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="lg:grid lg:grid-cols-2 lg:gap-12 items-center">
                    {/* Left side: Content */}
                    <div className={`lg:pr-8 transition-all duration-700 ease-out ${
                        isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                    }`}>
                        <div>
                            <h2 className="text-base text-[#9A7E43] font-semibold tracking-wide uppercase">
                                Our Process
                            </h2>
                            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">
                                Premium Materials, Premium Quality
                            </p>
                            <p className="mt-4 text-xl text-gray-300">
                                How TET ensures superior fragrances, flavors, and raw materials for our clients
                            </p>
                            <div className="mt-6 text-gray-300 space-y-4">
                                <p>
                                    At TET, we understand that the quality of raw materials directly impacts the excellence of the final product,
                                    whether it's a luxurious perfume, an effective detergent, or a delightful food flavoring.
                                </p>
                                <p>
                                    Our sourcing process involves direct partnerships with European manufacturers, ensuring authenticity,
                                    traceability, and compliance with international standards for all our materials.
                                </p>
                                <p>
                                    By leveraging our technical expertise and exclusive distributor relationships, we help manufacturers
                                    reduce costs, eliminate counterfeit products, and maintain consistent quality in their production.
                                </p>
                            </div>
                            <div className="mt-8">
                                <a
                                    href="#contact-form"
                                    className="inline-flex items-center px-6 py-3 border border-[#9A7E43] text-base font-medium rounded-md text-white bg-[#9A7E43] hover:bg-opacity-80 transition-colors"
                                    onClick={(e) => {
                                        e.preventDefault();
                                        const contactSection = document.getElementById('contact-form');
                                        if (contactSection) {
                                            window.scrollTo({
                                                top: contactSection.offsetTop,
                                                behavior: 'smooth'
                                            });
                                        }
                                    }}
                                >
                                    Discuss Your Ingredient Needs
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Right side: Image and stats */}
                    <div className={`mt-12 lg:mt-0 transition-all duration-700 ease-out delay-300 ${
                        isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                    }`}>
                        {/* Supply chain image */}
                        <div className="relative rounded-lg overflow-hidden shadow-xl mb-10">
                            <img
                                src="/images/raw-materials/supply-chain.jpg"
                                alt="Quality control for raw materials"
                                className="w-full h-64 object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-br from-[#013d60] via-transparent to-transparent opacity-60"></div>
                        </div>

                        {/* Stats grid */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            {stats.map((stat, index) => (
                                <div
                                    key={index}
                                    className={`bg-[#0c2b3d] p-6 rounded-lg shadow-lg border border-[#9A7E43] border-opacity-30 hover:border-opacity-100 transition-all duration-300 transform hover:-translate-y-1 ${
                                        isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                                    }`}
                                    style={{
                                        transitionDelay: isLoaded ? '0ms' : `${400 + stat.delay}ms`,
                                    }}
                                >
                                    <div className="flex items-center justify-center mb-4">
                                        <div className="w-12 h-12 bg-[#9A7E43] rounded-full flex items-center justify-center">
                                            <stat.icon className="h-6 w-6 text-white" />
                                        </div>
                                    </div>
                                    <div className="text-center">
                                        <p className="text-2xl font-bold text-[#9A7E43]">{stat.value}</p>
                                        <p className="text-sm text-gray-300 mt-1">{stat.label}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SupplyChainExcellence;