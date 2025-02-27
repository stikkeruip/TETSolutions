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
    const [hoverEnabled, setHoverEnabled] = useState(false)
    const isMobile = useIsMobile()

    useEffect(() => {
        setIsLoaded(true)

        // Enable hover animations after all initial animations are complete
        // (Use longest delay + animation duration)
        const timer = setTimeout(() => {
            setHoverEnabled(true)
        }, 1200); // 150ms initial delay + (5 * 75ms for last item) + 700ms duration

        return () => clearTimeout(timer);
    }, [])

    return (
        <div className="py-16 bg-[#001e2e]" id="procurement-categories">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className={`lg:text-center mb-12 transition-all duration-700 ease-out ${
                    isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}>
                    <h2 className="text-base text-[#745e30] font-semibold tracking-wide uppercase">
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
                                className={`
                                    group relative overflow-hidden rounded-lg shadow-lg 
                                    ${hoverEnabled ? 'hover:shadow-xl hover:-translate-y-1' : ''} 
                                    h-64 
                                    ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}
                                `}
                                style={{
                                    // Only apply these transitions for the initial load animation
                                    transition: isLoaded && !hoverEnabled
                                        ? `opacity 700ms ease-out ${150 + index * 75}ms, transform 700ms ease-out ${150 + index * 75}ms`
                                        : '',
                                }}
                            >
                                {/* Background Image with Overlay */}
                                <div className="absolute inset-0">
                                    <img
                                        src={category.image}
                                        alt={category.name}
                                        className={`
                                            w-full h-full object-cover 
                                            ${hoverEnabled ? 'group-hover:scale-110' : ''}
                                            ${category.id === "vr" ? "object-position-y-bottom" : ""}
                                        `}
                                        style={{
                                            objectPosition: category.id === "vr" ? "center 30%" : "",
                                            transition: hoverEnabled ? "transform 500ms" : "none",
                                        }}
                                    />
                                    <div
                                        className={`
                                            absolute inset-0 bg-[#001e2e] opacity-75 
                                            ${hoverEnabled ? 'group-hover:opacity-90' : ''}
                                        `}
                                        style={{
                                            transition: hoverEnabled ? "opacity 300ms" : "none",
                                        }}
                                    ></div>
                                </div>

                                <div className="relative h-full w-full p-6 flex flex-col justify-center items-center text-center">
                                    {/* Title - Always Visible and Centered */}
                                    <h3
                                        className="text-xl md:text-2xl font-bold text-white mb-4"
                                        style={{
                                            transition: hoverEnabled ? "transform 300ms" : "none",
                                        }}
                                    >
                                        {category.name}
                                    </h3>

                                    {/* Description - Hidden Initially, Revealed on Hover */}
                                    <p
                                        className={`
                                            text-gray-300 opacity-0 max-h-0 overflow-hidden 
                                            ${hoverEnabled ? 'group-hover:opacity-100 group-hover:max-h-96' : ''}
                                        `}
                                        style={{
                                            transition: hoverEnabled
                                                ? "opacity 500ms ease-in-out, max-height 500ms ease-in-out"
                                                : "none",
                                        }}
                                    >
                                        {category.description}
                                    </p>
                                </div>

                                <div
                                    className={`
                                        absolute inset-0 border-2 border-transparent 
                                        ${hoverEnabled ? 'group-hover:border-[#745e30]' : ''}
                                        rounded-lg
                                    `}
                                    style={{
                                        transition: hoverEnabled ? "border-color 300ms" : "none",
                                    }}
                                ></div>

                                {/* Add hover transition styles only after initial load is complete */}
                                {hoverEnabled && (
                                    <style jsx>{`
                                        .group {
                                            transition: box-shadow 300ms, transform 300ms;
                                        }
                                    `}</style>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}