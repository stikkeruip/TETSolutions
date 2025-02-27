"use client"

import { useEffect, useState } from "react"
import { CheckCircle } from "lucide-react"

export default function WhyChooseTET() {
    const [isLoaded, setIsLoaded] = useState(false)

    useEffect(() => {
        setIsLoaded(true)
    }, [])

    const reasons = [
        {
            title: "Industry Expertise",
            description: "Over 20 years of procurement experience across multiple industries."
        },
        {
            title: "High-Quality Products",
            description: "Partnering with trusted suppliers and manufacturers worldwide."
        },
        {
            title: "End-to-End Service",
            description: "From sourcing to delivery and installation support."
        },
        {
            title: "EU-Funded Experience",
            description: "Extensive involvement in government & EU-backed projects."
        },
        {
            title: "Comprehensive Training",
            description: "Full user training & documentation with all equipment."
        },
        {
            title: "Technical Support",
            description: "Ongoing technical assistance and maintenance services after implementation."
        }
    ]

    return (
        <div className="relative py-16" id="why-choose-tet">
            {/* Background Image with Overlay */}
            <div className="absolute inset-0 z-0">
                <img
                    src="/images/procurement/why-choose-bg.jpg"
                    alt="TET Procurement Excellence"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-[#001e2e] opacity-90"></div>
            </div>

            {/* Content */}
            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className={`lg:text-center mb-12 transition-all duration-700 ease-out ${
                    isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}>
                    <h2 className="text-base text-[#745e30] font-semibold tracking-wide uppercase">
                        Our Strengths
                    </h2>
                    <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">
                        Why Choose TET for Procurement?
                    </p>
                    <p className="mt-4 max-w-2xl text-xl text-gray-300 lg:mx-auto">
                        Partner with TET for reliable, high-quality technology procurement solutions tailored to your business needs.
                    </p>
                </div>

                {/* Reasons Grid - MATCHING PROCUREMENT CATEGORIES STYLE */}
                <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {reasons.map((reason, index) => (
                        <div
                            key={index}
                            className={`group relative bg-[#ffffff] bg-opacity-5 backdrop-blur-sm p-6 rounded-lg shadow-lg hover:shadow-xl transform transition-all duration-300 hover:-translate-y-1 transition-all duration-700 ease-out ${
                                isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                            }`}
                            style={{
                                transitionDelay: `${150 + index * 75}ms`
                            }}
                        >
                            {/* Border that appears on hover - matching categories style */}
                            <div className="absolute inset-0 border-2 border-transparent group-hover:border-[#745e30] rounded-lg transition-colors duration-300"></div>

                            <div className="relative flex items-start">
                                <div className="flex-shrink-0">
                                    <CheckCircle className="h-6 w-6 text-[#745e30]" />
                                </div>
                                <div className="ml-4">
                                    <h3 className="text-lg font-medium text-white">{reason.title}</h3>
                                    <p className="mt-2 text-gray-300">{reason.description}</p>
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
                        href="/contact"
                        className="inline-flex items-center px-6 py-3 border border-[#745e30] text-base font-medium rounded-md text-white bg-[#745e30] hover:bg-transparent transition-colors"
                    >
                        Contact Our Procurement Team
                    </a>
                </div>
            </div>
        </div>
    )
}