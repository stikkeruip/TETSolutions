"use client"

import { useEffect, useState } from "react"

export default function ProcurementIntro() {
    const [isLoaded, setIsLoaded] = useState(false)

    useEffect(() => {
        setIsLoaded(true)
    }, [])

    return (
        <div className="py-16 bg-[#f1e5d1]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="lg:text-center mb-8">
                    <h2 className="text-base text-[#9A7E43] font-semibold tracking-wide uppercase">
                        Our Expertise
                    </h2>
                    <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-[#013d60] sm:text-4xl">
                        About Our Procurement Services
                    </p>
                </div>

                <div className="mt-12 lg:grid lg:grid-cols-2 lg:gap-8 items-center">
                    {/* Left side: Text content */}
                    <div className={`transition-all duration-700 ease-out ${
                        isLoaded ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
                    }`}>
                        <div className="prose prose-lg text-[#013d60] max-w-none">
                            <p className="mb-4">
                                <span className="font-bold">TET (Technical Engineers for Technology)</span> provides
                                <span className="text-[#9A7E43] font-semibold"> supply chain procurement services</span> for
                                worldwide customers.
                            </p>
                            <p className="mb-4">
                                Since inception, our <span className="text-[#9A7E43] font-semibold">highly experienced team</span> strives
                                to meet our customers' needs by providing <span className="text-[#9A7E43] font-semibold">latest modern
                                technologies and products</span>, realizing the importance of shortest delivery time and
                                competitive pricing policy.
                            </p>
                            <p className="mb-6">
                                Your <span className="text-[#9A7E43] font-semibold">reliable partners</span> for supply chain procurement services.
                            </p>
                            <div className="mt-8">
                                <a href="#procurement-categories"
                                   className="inline-flex items-center px-6 py-3 border border-[#9A7E43] text-base font-medium rounded-md text-white bg-[#9A7E43] hover:bg-[#013d60] transition-colors">
                                    Explore Our Procurement Categories
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
                                src="/images/procurement/hero.jpeg"
                                alt="TET Procurement Team in action"
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-tr from-[#013d60] via-transparent to-transparent opacity-30"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}