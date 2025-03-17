"use client"

import { useEffect, useState } from "react"
import { useIsMobile } from "@/hooks/use-mobile"

// Define the categories data with the 12 categories you specified
const categories = [
    {
        id: "supply",
        name: "Supply from finest world class manufacturers and deliver to your warehouse",
        description: "Global procurement and logistics services for seamless delivery.",
        image: "/images/procurement/supply-chain.jpg"
    },
    {
        id: "computers",
        name: "Computers, Networks, and IT hardware solutions",
        description: "Complete hardware solutions from servers to networking equipment.",
        image: "/images/procurement/computers.jpg"
    },
    {
        id: "measuring",
        name: "Electronics Measuring Meters",
        description: "Precision measurement tools for electronics and industrial applications.",
        image: "/images/procurement/measuring.jpg"
    },
    {
        id: "vehicles",
        name: "Electric & Hybrid Vehicles Training kits",
        description: "Advanced training equipment for modern automotive technology.",
        image: "/images/procurement/vehicles.jpg"
    },
    {
        id: "vr",
        name: "Virtual Reality Systems",
        description: "Immersive VR solutions for training and simulation applications.",
        image: "/images/procurement/vr.jpg"
    },
    {
        id: "medical",
        name: "Medical & Physiotherapy Equipment",
        description: "High-quality medical devices and rehabilitation equipment.",
        image: "/images/procurement/medical.jpg"
    },
    {
        id: "video",
        name: "Video Conference Systems",
        description: "Advanced communication solutions for remote collaboration.",
        image: "/images/procurement/video.jpg"
    },
    {
        id: "industrial-machinery",
        name: "Industrial Machinery",
        description: "Robust industrial equipment for manufacturing and production.",
        image: "/images/procurement/machinery.jpg"
    },
    {
        id: "tools",
        name: "Industrial Hand Tools and Power Tools, Agricultural Tools",
        description: "Quality tools for industrial and agricultural applications.",
        image: "/images/procurement/tools.jpg"
    },
    {
        id: "construction",
        name: "Construction Materials and Equipment",
        description: "Essential materials and equipment for construction projects.",
        image: "/images/procurement/construction.jpg"
    },
    {
        id: "safety",
        name: "Safety And Personal Protection Equipment",
        description: "Comprehensive safety gear and protective equipment.",
        image: "/images/procurement/safety.jpg"
    },
    {
        id: "emergency",
        name: "Disaster Relief and Emergency Response Kits, Aid Management",
        description: "Critical equipment for emergency response, disaster management, and aid distribution.",
        image: "/images/procurement/emergency.jpg"
    }
]

export default function ProcurementCategories() {
    const [isLoaded, setIsLoaded] = useState(false)
    const isMobile = useIsMobile()

    useEffect(() => {
        setIsLoaded(true)
    }, [])

    return (
        <div className="py-16 bg-[#013d60]" id="procurement-categories">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className={`lg:text-center mb-12 transition-all duration-700 ease-out ${
                    isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}>
                    <h2 className="text-base text-[#9A7E43] font-semibold tracking-wide uppercase">
                        Our Offerings
                    </h2>
                    <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">
                        Key Procurement Categories
                    </p>
                    <p className="mt-4 max-w-2xl text-xl text-gray-300 lg:mx-auto">
                        Explore our comprehensive procurement categories
                    </p>
                </div>

                <div className="mt-10">
                    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                        {categories.map((category, index) => (
                            <div
                                key={category.id}
                                className={`category-card group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 h-64 ${
                                    isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                                }`}
                                style={{
                                    transitionDelay: isLoaded ? '0ms' : `${150 + index * 75}ms`,
                                }}
                            >
                                {/* Background Image - No overlay by default */}
                                <div className="absolute inset-0">
                                    <img
                                        src={category.image}
                                        alt={category.name}
                                        className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-110"
                                    />
                                </div>

                                {/* Content - Only visible on hover */}
                                <div className="absolute inset-0 bg-[#013d60] opacity-0 group-hover:opacity-80 transition-opacity duration-300"></div>

                                <div className="relative h-full w-full p-6 flex flex-col justify-center items-center text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    {/* Title */}
                                    <h3 className="text-xl font-bold text-white mb-2">
                                        {category.name}
                                    </h3>

                                    {/* Description */}
                                    <p className="text-gray-300">
                                        {category.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Call to Action */}
                <div className={`mt-16 text-center transition-all duration-700 ease-out delay-300 ${
                    isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}>
                    <a
                        href="#contact-form"
                        className="inline-flex items-center px-6 py-3 border border-[#9A7E43] text-base font-medium rounded-md text-white bg-transparent hover:bg-[#9A7E43] hover:text-white transition-colors"
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
                        Request Procurement Information
                    </a>
                </div>
            </div>

            {/* Global styles for consistent hover transitions */}
            <style jsx global>{`
                .category-card {
                    transition-property: opacity, transform, box-shadow;
                    transition-duration: 700ms, 300ms, 300ms;
                    transition-timing-function: ease-out, ease-out, ease-out;
                }

                /* When loaded, ensure all hover animations are quick and consistent */
                .category-card:hover {
                    transition-delay: 0ms !important;
                    transition-duration: 300ms;
                }
            `}</style>
        </div>
    )
}