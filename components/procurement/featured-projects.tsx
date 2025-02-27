"use client"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

// Define the project type
interface Project {
    id: string;
    title: string;
    description: string;
    image: string;
}

// Define the projects data
const projects: Project[] = [
    {
        id: "electric-vehicles",
        title: "Electric & Hybrid Vehicles Training",
        description: "Partnered with the Vocational Training Center (VTC) to provide state-of-the-art electric & hybrid vehicle maintenance equipment and comprehensive teacher training programs.",
        image: "/images/procurement/projects/featured-ev.jpg",
    },
    {
        id: "vr-safety",
        title: "Virtual Reality Safety Training",
        description: "Delivered cutting-edge Virtual Reality systems for the Occupational Safety and Health Institute (OSHI), simulating real-life accident scenarios for training purposes.",
        image: "/images/procurement/projects/vr-safety.jpg",
    },
    {
        id: "physiotherapy",
        title: "Physiotherapy Center Establishment",
        description: "Established a fully equipped physiotherapy center in collaboration with Life Nerve Physiotherapy, supplying medical tools and educational materials.",
        image: "/images/procurement/projects/physiotherapy.webp",
    },
    {
        id: "ppe",
        title: "PPE and Rescue Equipment Consultancy",
        description: "Provided consultancy services to UNOPS for personal protective equipment (PPE) and rescue equipment specifications in Yemen, focusing on civil defense preparedness.",
        image: "/images/procurement/projects/ppe.webp",
    },
    {
        id: "laser",
        title: "Laser Engraving Supply and Training",
        description: "Supplied and installed Laser Engraving CNC machines at VTCs in collaboration with JICA, including comprehensive training for teachers on machine operation.",
        image: "/images/procurement/projects/laser-engraving.webp",
    }
]

export default function FeaturedProjects() {
    const [currentIndex, setCurrentIndex] = useState(0)
    const [isLoaded, setIsLoaded] = useState(false)
    const [isAutoPlaying, setIsAutoPlaying] = useState(true)
    const [isTransitioning, setIsTransitioning] = useState(false)

    const nextSlide = () => {
        if (isTransitioning) return

        setIsTransitioning(true)
        setTimeout(() => {
            setCurrentIndex((prevIndex) => (prevIndex === projects.length - 1 ? 0 : prevIndex + 1))
            setIsTransitioning(false)
        }, 300)
    }

    const prevSlide = () => {
        if (isTransitioning) return

        setIsTransitioning(true)
        setTimeout(() => {
            setCurrentIndex((prevIndex) => (prevIndex === 0 ? projects.length - 1 : prevIndex - 1))
            setIsTransitioning(false)
        }, 300)
    }

    const goToSlide = (index: number) => {
        if (isTransitioning || index === currentIndex) return

        setIsTransitioning(true)
        setTimeout(() => {
            setCurrentIndex(index)
            setIsTransitioning(false)
        }, 300)
    }

    // Auto-play functionality
    useEffect(() => {
        if (!isAutoPlaying) return

        const interval = setInterval(() => {
            nextSlide()
        }, 6000)

        return () => clearInterval(interval)
    }, [currentIndex, isAutoPlaying, isTransitioning])

    // Set loaded state
    useEffect(() => {
        setIsLoaded(true)
    }, [])

    // Pause autoplay when user interacts with carousel
    const pauseAutoPlay = () => setIsAutoPlaying(false)
    const resumeAutoPlay = () => setIsAutoPlaying(true)

    return (
        <div className="py-16 bg-[#001e2e]" id="featured-projects">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className={`lg:text-center mb-12 transition-all duration-700 ease-out ${
                    isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}>
                    <h2 className="text-base text-[#745e30] font-semibold tracking-wide uppercase">
                        Success Stories
                    </h2>
                    <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-[white] sm:text-4xl">
                        Featured Procurement Projects
                    </p>
                    <p className="mt-4 max-w-2xl text-xl text-[white] lg:mx-auto">
                        Explore our recently completed projects that showcase our expertise in technology procurement.
                    </p>
                </div>

                {/* Carousel Component */}
                <div
                    className={`relative max-w-5xl mx-auto transition-all duration-700 ease-out ${
                        isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                    }`}
                    onMouseEnter={pauseAutoPlay}
                    onMouseLeave={resumeAutoPlay}
                >
                    {/* Main Slide Container */}
                    <div className="relative overflow-hidden rounded-lg shadow-2xl bg-[#ffffff]">
                        {/* Image Section */}
                        <div className="relative h-64 md:h-96">
                            {projects.map((project, index) => (
                                <div
                                    key={project.id}
                                    className={`absolute inset-0 transition-opacity duration-500 ${
                                        index === currentIndex ? "opacity-100" : "opacity-0 pointer-events-none"
                                    }`}
                                >
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-full object-cover"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-[#000000] via-transparent to-transparent opacity-50"></div>
                                </div>
                            ))}
                        </div>

                        {/* Content Overlay */}
                        <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                            {projects.map((project, index) => (
                                <div
                                    key={`content-${project.id}`}
                                    className={`transition-all duration-500 ${
                                        index === currentIndex
                                            ? "opacity-100 translate-y-0"
                                            : "opacity-0 translate-y-8 pointer-events-none absolute inset-0"
                                    }`}
                                >
                                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
                                        {project.title}
                                    </h3>
                                    <p className="text-gray-200 text-md md:text-lg">
                                        {project.description}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Navigation buttons */}
                    <button
                        onClick={prevSlide}
                        className="absolute left-2 top-1/3 -translate-y-1/2 bg-black bg-opacity-50 hover:bg-opacity-75 text-white p-2 rounded-full transition-colors z-10"
                        aria-label="Previous project"
                    >
                        <ChevronLeft size={24} />
                    </button>
                    <button
                        onClick={nextSlide}
                        className="absolute right-2 top-1/3 -translate-y-1/2 bg-black bg-opacity-50 hover:bg-opacity-75 text-white p-2 rounded-full transition-colors z-10"
                        aria-label="Next project"
                    >
                        <ChevronRight size={24} />
                    </button>

                    {/* Indicators */}
                    <div className="flex justify-center space-x-2 mt-4">
                        {projects.map((_, index) => (
                            <button
                                key={`indicator-${index}`}
                                onClick={() => goToSlide(index)}
                                className={`w-3 h-3 rounded-full transition-colors ${
                                    index === currentIndex
                                        ? "bg-[#745e30]"
                                        : "bg-white bg-opacity-30 hover:bg-opacity-50"
                                }`}
                                aria-label={`Go to project ${index + 1}`}
                            />
                        ))}
                    </div>
                </div>

                {/* Call to Action */}
                <div className={`mt-12 text-center transition-all duration-700 ease-out delay-300 ${
                    isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}>
                    <a
                        href="/contact"
                        className="inline-flex items-center px-6 py-3 border border-[#745e30] text-base font-medium rounded-md text-white bg-transparent hover:bg-[#745e30] hover:text-white transition-colors"
                    >
                        Discuss Your Project Requirements
                    </a>
                </div>
            </div>
        </div>
    )
}