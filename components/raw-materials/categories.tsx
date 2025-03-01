"use client"

import { useEffect, useState } from "react"

// Define the categories data
const categories = [
    {
        id: "industrial-metals",
        name: "Industrial Metals",
        description: "High-grade aluminum, steel, copper, and specialty alloys sourced for manufacturing applications.",
        image: "/images/raw-materials/metals.jpg",
    },
    {
        id: "polymers",
        name: "Polymers & Plastics",
        description: "Quality thermoplastics and polymers for injection molding and industrial applications.",
        image: "/images/raw-materials/polymers.jpg",
    },
    {
        id: "electronic",
        name: "Electronic Components",
        description: "Precision electronic parts and components for technology manufacturing.",
        image: "/images/raw-materials/electronic.jpg",
    },
    {
        id: "construction",
        name: "Construction Materials",
        description: "Durable building materials meeting international standards for construction projects.",
        image: "/images/raw-materials/construction.jpg",
    },
    {
        id: "packaging",
        name: "Packaging Materials",
        description: "Sustainable and protective packaging solutions for various industries.",
        image: "/images/raw-materials/packaging.jpg",
    },
    {
        id: "specialized",
        name: "Specialized Industrial Supplies",
        description: "Custom-sourced specialized materials for unique industrial applications.",
        image: "/images/raw-materials/specialized.jpg",
    },
]

export default function MaterialsCategories() {
    const [isLoaded, setIsLoaded] = useState(false)

    useEffect(() => {
        setIsLoaded(true)
    }, [])

    return (
        <div className="py-16 bg-[#001e2e]" id="materials-categories">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className={`lg:text-center mb-12 transition-all duration-700 ease-out ${
                    isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}>
                    <h2 className="text-base text-[#745e30] font-semibold tracking-wide uppercase">
                        Our Offerings
                    </h2>
                    <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">
                        Key Materials Categories
                    </p>
                    <p className="mt-4 max-w-2xl text-xl text-gray-300 lg:mx-auto">
                        Explore our specialized areas of expertise in raw materials procurement.
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
                                    />
                                    <div className="absolute inset-0 bg-[#001e2e] opacity-75 group-hover:opacity-90 transition-opacity duration-300"></div>
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

                                <div className="absolute inset-0 border-2 border-transparent group-hover:border-[#745e30] rounded-lg transition-colors duration-300"></div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Call to Action */}
                <div className={`mt-12 text-center transition-all duration-700 ease-out delay-300 ${
                    isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}>
                    <a
                        href="#contact-form"
                        className="inline-flex items-center px-6 py-3 border border-[#745e30] text-base font-medium rounded-md text-white bg-transparent hover:bg-[#745e30] hover:text-white transition-colors"
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
                        Request Materials Information
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