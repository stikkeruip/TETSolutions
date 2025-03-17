"use client"

import React, { useEffect, useState } from "react";

const RawMaterialsIntro = () => {
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        setIsLoaded(true);
    }, []);

    return (
        <div className="py-16 bg-[#f1e5d1]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="lg:text-center mb-8">
                    <h2 className="text-base text-[#9A7E43] font-semibold tracking-wide uppercase">
                        Our Expertise
                    </h2>
                    <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-[#013d60] sm:text-4xl">
                        Premium Raw Materials for Cosmetics & Fragrances
                    </p>
                </div>

                <div className="mt-12 lg:grid lg:grid-cols-2 lg:gap-8 items-center">
                    {/* Left side: Text content */}
                    <div className={`transition-all duration-700 ease-out ${
                        isLoaded ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
                    }`}>
                        <div className="prose prose-lg text-[#013d60] max-w-none">
                            <p className="mb-4">
                                <span className="font-bold">TET (Technical Engineers for Technology)</span> is a
                                <span className="text-[#9A7E43] font-semibold"> leading distributor of premium raw materials</span> for
                                the cosmetics, fragrance, flavor, and detergent manufacturing industries.
                            </p>
                            <p className="mb-4">
                                As an <span className="text-[#9A7E43] font-semibold">exclusive authorized distributor</span> for
                                renowned European manufacturers, we provide access to the highest quality fragrances, flavors,
                                and specialty chemicals that comply with <span className="text-[#9A7E43] font-semibold">European
                standard regulations</span>.
                            </p>
                            <p className="mb-6">
                                Our commitment to quality and expertise in sourcing ensures that manufacturers in Jordan and
                                the broader Middle East region have access to the finest ingredients for their products,
                                backed by our comprehensive technical support.
                            </p>
                            <div className="mt-8">
                                <a href="#materials-categories"
                                   className="inline-flex items-center px-6 py-3 border border-[#9A7E43] text-base font-medium rounded-md text-white bg-[#9A7E43] hover:bg-[#013d60] transition-colors"
                                   onClick={(e) => {
                                       e.preventDefault();
                                       const categoriesSection = document.getElementById('materials-categories');
                                       if (categoriesSection) {
                                           window.scrollTo({
                                               top: categoriesSection.offsetTop,
                                               behavior: 'smooth'
                                           });
                                       }
                                   }}
                                >
                                    Explore Our Product Range
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Right side: Image */}
                    <div className={`mt-10 lg:mt-0 transition-all duration-700 delay-300 ease-out ${
                        isLoaded ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
                    }`}>
                        <div className="relative h-64 sm:h-72 md:h-96 lg:h-full rounded-lg overflow-hidden shadow-xl">
                            <img
                                src="/images/raw-materials/fragrance-lab.jpg"
                                alt="Fragrance development laboratory"
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-tr from-[#013d60] via-transparent to-transparent opacity-30"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RawMaterialsIntro;