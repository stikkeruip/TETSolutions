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

// Define the projects data based on the content from the PowerPoint
const projects: Project[] = [
    {
        id: "management-system",
        title: "Management System Software",
        description: "Developed a customized management system to streamline workflow automation and enhance productivity for businesses across various sectors.",
        image: "/images/software/management-system.webp",
    },
    {
        id: "video-conference",
        title: "Video Conference System",
        description: "Implemented an advanced video conferencing software to facilitate seamless remote communication, configured for optimal performance in diverse business environments.",
        image: "/images/software/video-conference.webp",
    },
    {
        id: "mobile-learning",
        title: "Mobile Learning Application",
        description: "Created an interactive mobile learning platform for educational institutions to provide virtual training programs, supporting distance learning initiatives.",
        image: "/images/software/mobile-learning.webp",
    }
]

export default function FeaturedSoftwareProjects() {
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
        <div className="py-16 bg-[#f1e5d1]" id="featured-software-projects">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className={`lg:text-center mb-12 transition-all duration-700 ease-out ${
                    isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}>
                    <h2 className="text-base text-[#745e30] font-semibold tracking-wide uppercase">
                        Our Portfolio
                    </h2>
                    <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-[#001e2e] sm:text-4xl">
                        Featured Software Projects
                    </p>
                    <p className="mt-4 max-w-2xl text-xl text-[#001e2e] lg:mx-auto">
                        Explore our innovative software solutions designed to enhance business efficiency and connectivity.
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
                    <div className="relative overflow-hidden rounded-lg shadow-2xl">
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
                                    <div className="absolute inset-0 bg-gradient-to-t from-[#001e2e] via-transparent to-transparent opacity-60"></div>
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
                        className="absolute left-2 top-1/3 -translate-y-1/2 bg-[#001e2e] bg-opacity-60 hover:bg-opacity-80 text-white p-2 rounded-full transition-colors z-10"
                        aria-label="Previous project"
                    >
                        <ChevronLeft size={24} />
                    </button>
                    <button
                        onClick={nextSlide}
                        className="absolute right-2 top-1/3 -translate-y-1/2 bg-[#001e2e] bg-opacity-60 hover:bg-opacity-80 text-white p-2 rounded-full transition-colors z-10"
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
                                        : "bg-[#001e2e] bg-opacity-30 hover:bg-opacity-50"
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
                        className="inline-flex items-center px-6 py-3 border border-[#745e30] text-base font-medium rounded-md text-[#001e2e] bg-transparent hover:bg-[#745e30] hover:text-white transition-colors"
                    >
                        Discuss Your Software Requirements
                    </a>
                </div>
            </div>
        </div>
    )
}