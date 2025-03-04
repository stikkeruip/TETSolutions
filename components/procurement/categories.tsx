"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { useIsMobile } from "@/hooks/use-mobile"

// Define the categories data
const categories = [
    {
        id: "vehicles",
        name: "Electric & Hybrid Vehicles Training Equipment",
        description: "Providing diagnostic tools and training for modern automotive technology.",
        image: "/images/procurement/vehicles.jpg",
        link: "/procurement/vehicles",
    },
    {
        id: "vr",
        name: "Virtual Reality Training Systems",
        description: "Advanced VR solutions for occupational safety & industrial training.",
        image: "/images/procurement/vr.jpg",
        link: "/procurement/vr-systems",
    },
    {
        id: "medical",
        name: "Medical & Physiotherapy Equipment",
        description: "State-of-the-art medical devices, rehabilitation tools, and health training systems.",
        image: "/images/procurement/medical.jpg",
        link: "/procurement/medical",
    },
    {
        id: "safety",
        name: "PPE & Rescue Equipment",
        description: "Ensuring safety standards with high-quality protective gear and emergency response kits.",
        image: "/images/procurement/safety.jpg",
        link: "/procurement/safety",
    },
    {
        id: "laser",
        name: "Laser Engraving & CNC Machines",
        description: "Supplying industrial engraving machines with full training support.",
        image: "/images/procurement/laser.png",
        link: "/procurement/laser-cnc",
    },
    {
        id: "video",
        name: "Video Conference Systems",
        description: "Enhancing remote communication with advanced conferencing solutions.",
        image: "/images/procurement/video.jpg",
        link: "/procurement/video-conference",
    },
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
                        Explore our specialized areas of expertise in technology procurement services.
                    </p>
                </div>

                <div className="mt-10">
                    <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                        {categories.map((category, index) => (
                            <div
                                key={category.id}
                                className={`category-card group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 h-64 ${
                                    isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                                }`}
                                style={{
                                    // Only apply delay for the initial load animation
                                    transitionDelay: isLoaded ? '0ms' : `${150 + index * 75}ms`,
                                }}
                            >
                                {/* Background Image with Overlay */}
                                <div className="absolute inset-0">
                                    <img
                                        src={category.image}
                                        alt={category.name}
                                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                                        style={category.id === "vr" ? { objectPosition: "center 30%" } : {}}
                                    />
                                    <div className="absolute inset-0 bg-[#013d60] opacity-75 group-hover:opacity-90 transition-opacity duration-300"></div>
                                </div>

                                <div className="relative h-full w-full p-6 flex flex-col justify-center items-center text-center">
                                    {/* Title - Always Visible and Centered */}
                                    <h3 className="text-xl md:text-2xl font-bold text-white mb-4 transform transition-transform duration-300 group-hover:translate-y-0">
                                        {category.name}
                                    </h3>

                                    {/* Description - Hidden Initially, Revealed on Hover */}
                                    <p className="text-gray-300 opacity-0 max-h-0 overflow-hidden group-hover:opacity-100 group-hover:max-h-96 transition-all duration-300 ease-in-out">
                                        {category.description}
                                    </p>
                                </div>

                                <div className="absolute inset-0 border-2 border-transparent group-hover:border-[#9A7E43] rounded-lg transition-colors duration-300"></div>
                            </div>
                        ))}
                    </div>
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