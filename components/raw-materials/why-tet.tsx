"use client"

import React, { useEffect, useState } from "react";
import { CheckCircle } from "lucide-react";

const WhyChooseTETMaterials = () => {
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        setIsLoaded(true);
    }, []);

    const reasons = [
        {
            title: "Exclusive Partnerships",
            description: "Authorized distributor for premium European fragrance and flavor manufacturers."
        },
        {
            title: "European Standard Compliance",
            description: "All products meet stringent European regulations for quality and safety."
        },
        {
            title: "Technical Expertise",
            description: "Specialized knowledge in fragrance applications, cosmetic formulations, and detergent chemistry."
        },
        {
            title: "Product Authenticity",
            description: "Direct sourcing from manufacturers ensures genuine products and traceability."
        },
        {
            title: "Comprehensive Product Range",
            description: "One-stop solution for fragrances, flavors, and specialty chemicals for multiple industries."
        },
        {
            title: "Local Availability",
            description: "Well-stocked inventory in Jordan ensures timely delivery and reduced lead times."
        }
    ];

    return (
        <div className="py-16 bg-[#f1e5d1]" id="why-choose-tet-materials">
            {/* Content */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className={`lg:text-center mb-12 transition-all duration-700 ease-out ${
                    isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}>
                    <h2 className="text-base text-[#9A7E43] font-semibold tracking-wide uppercase">
                        Our Strengths
                    </h2>
                    <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-[#013d60] sm:text-4xl">
                        Why Choose TET for Premium Materials?
                    </p>
                    <p className="mt-4 max-w-2xl text-xl text-[#013d60] lg:mx-auto">
                        Partner with TET for reliable access to high-quality ingredients tailored to your manufacturing needs.
                    </p>
                </div>

                {/* Reasons Grid */}
                <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {reasons.map((reason, index) => (
                        <div
                            key={index}
                            className={`reason-card group relative bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 ${
                                isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                            }`}
                            style={{
                                // Only apply delay for the initial load animation
                                transitionDelay: isLoaded ? '0ms' : `${150 + index * 75}ms`,
                            }}
                        >
                            {/* Border that appears on hover */}
                            <div className="absolute inset-0 border-2 border-transparent group-hover:border-[#9A7E43] rounded-lg transition-colors duration-300"></div>

                            <div className="relative flex items-start">
                                <div className="flex-shrink-0">
                                    <CheckCircle className="h-6 w-6 text-[#9A7E43]" />
                                </div>
                                <div className="ml-4">
                                    <h3 className="text-lg font-medium text-[#013d60]">{reason.title}</h3>
                                    <p className="mt-2 text-[#013d60] text-opacity-80">{reason.description}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* CTA Button */}
                <div className={`mt-12 text-center transition-all duration-700 ease-out delay-500 ${
                    isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}>
                    <a
                        href="#contact-form"
                        className="inline-flex items-center px-6 py-3 border border-[#9A7E43] text-base font-medium rounded-md text-white bg-[#9A7E43] hover:bg-[#013d60] hover:border-[#013d60] transition-colors"
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
                        Contact Our Materials Team
                    </a>
                </div>
            </div>

            {/* Global styles for consistent hover transitions */}
            <style jsx global>{`
                .reason-card {
                    transition-property: opacity, transform, box-shadow;
                    transition-duration: 700ms, 300ms, 300ms;
                    transition-timing-function: ease-out, ease-out, ease-out;
                }

                /* When loaded, ensure all hover animations are quick and consistent */
                .reason-card:hover {
                    transition-delay: 0ms !important;
                    transition-duration: 300ms;
                }
            `}</style>
        </div>
    );
};

export default WhyChooseTETMaterials;