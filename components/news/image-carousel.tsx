"use client"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

interface NewsImageCarouselProps {
    images: string[]
    alt: string
}

export default function NewsImageCarousel({ images, alt }: NewsImageCarouselProps) {
    const [currentIndex, setCurrentIndex] = useState(0)
    const [isAutoPlaying, setIsAutoPlaying] = useState(true)
    const [isTransitioning, setIsTransitioning] = useState(false)

    const nextSlide = () => {
        if (isTransitioning) return

        setIsTransitioning(true)
        setTimeout(() => {
            setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1))
            setIsTransitioning(false)
        }, 300)
    }

    const prevSlide = () => {
        if (isTransitioning) return

        setIsTransitioning(true)
        setTimeout(() => {
            setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1))
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
        }, 4000)

        return () => clearInterval(interval)
    }, [currentIndex, isAutoPlaying, isTransitioning])

    // Pause autoplay when user interacts with carousel
    const pauseAutoPlay = () => setIsAutoPlaying(false)
    const resumeAutoPlay = () => setIsAutoPlaying(true)

    if (images.length === 0) return null

    // If only one image, just show it without carousel controls
    if (images.length === 1) {
        return (
            <div className="relative rounded-lg overflow-hidden">
                <img
                    src={images[0]}
                    alt={alt}
                    className="w-full h-auto object-cover"
                />
            </div>
        )
    }

    return (
        <div
            className="relative rounded-lg overflow-hidden"
            onMouseEnter={pauseAutoPlay}
            onMouseLeave={resumeAutoPlay}
        >
            {/* Images */}
            <div className="aspect-video relative">
                {images.map((image, index) => (
                    <div
                        key={index}
                        className={`absolute inset-0 transition-opacity duration-500 ${
                            index === currentIndex ? "opacity-100" : "opacity-0 pointer-events-none"
                        }`}
                    >
                        <img
                            src={image}
                            alt={`${alt} - Image ${index + 1}`}
                            className="w-full h-full object-cover"
                        />
                    </div>
                ))}
            </div>

            {/* Navigation buttons */}
            <button
                onClick={prevSlide}
                className="absolute left-2 top-1/2 -translate-y-1/2 bg-black bg-opacity-50 hover:bg-opacity-75 text-white p-2 rounded-full transition-colors z-10"
                aria-label="Previous image"
            >
                <ChevronLeft size={24} />
            </button>
            <button
                onClick={nextSlide}
                className="absolute right-2 top-1/2 -translate-y-1/2 bg-black bg-opacity-50 hover:bg-opacity-75 text-white p-2 rounded-full transition-colors z-10"
                aria-label="Next image"
            >
                <ChevronRight size={24} />
            </button>

            {/* Indicators */}
            <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2">
                {images.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => goToSlide(index)}
                        className={`w-2 h-2 rounded-full transition-colors ${
                            index === currentIndex
                                ? "bg-white"
                                : "bg-white bg-opacity-50 hover:bg-opacity-75"
                        }`}
                        aria-label={`Go to image ${index + 1}`}
                    />
                ))}
            </div>

            {/* Image counter */}
            <div className="absolute bottom-4 right-4 bg-black bg-opacity-50 text-white text-xs px-2 py-1 rounded-md">
                {currentIndex + 1} / {images.length}
            </div>
        </div>
    )
}