"use client"

import React, { useEffect, useState } from "react";
import Link from "next/link";

const RawMaterialsHero = () => {
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        setIsLoaded(true);
    }, []);

    return (
        <div className="relative overflow-hidden">
            {/* Background image with overlay */}
            <div className="absolute inset-0 z-0">
                {/* Image first */}
                <div className="h-full w-full overflow-hidden">
                    <img
                        src="/images/raw-materials/hero.jpg"
                        alt="Premium fragrances and raw materials"
                        className={`w-full h-full object-cover transition-transform duration-7000 ease-out ${
                            isLoaded ? 'scale-105' : 'scale-100'
                        }`}
                        style={{ objectPosition: '50% 70%' }}
                    />
                </div>
                {/* Overlay after (will be on top of the image) */}
                <div className="absolute inset-0 bg-[#013d60] opacity-60"></div>
            </div>

            {/* Content overlay */}
            <div className="relative z-10 max-w-7xl mx-auto">
                <div className="relative pb-8 sm:pb-16 md:pb-20 lg:pb-28 xl:pb-32">
                    <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                        <div className="text-center lg:text-left pt-16 sm:pt-24 md:pt-32">
                            <h1
                                className={`text-4xl tracking-tight font-extrabold text-white sm:text-5xl md:text-6xl transition-all duration-700 ease-out ${
                                    isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                                }`}
                            >
                                <span className="block">Premium Fragrances and</span>{" "}
                                <span
                                    className={`block text-[#9A7E43] xl:inline transition-all duration-700 ease-out delay-300 ${
                                        isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                                    }`}
                                >
                  Specialty Raw Materials
                </span>
                            </h1>
                            <p
                                className={`mt-3 text-base text-gray-300 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0 transition-all duration-700 ease-out delay-500 ${
                                    isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                                }`}
                            >
                                Exclusive distributor of premium fragrances, flavors, and raw materials for the cosmetics, detergent, and food industries.
                            </p>
                            <div
                                className={`mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start transition-all duration-700 ease-out delay-700 ${
                                    isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                                }`}
                            >
                                <div className="mt-3 sm:mt-0 sm:ml-3">
                                    <Link
                                        href="#contact-form"
                                        className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-[#9A7E43] hover:bg-[#f1e5d1] hover:text-[#013d60] md:py-4 md:text-lg md:px-10 transition-colors"
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
                                        Contact Us
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </main>
                </div>
            </div>
        </div>
    );
};

export default RawMaterialsHero;