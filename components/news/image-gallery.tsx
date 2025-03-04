"use client"

import { useState } from "react"
import { X, ChevronLeft, ChevronRight, Maximize2 } from "lucide-react"

interface NewsPhotoGalleryProps {
    images: string[]
    alt: string
}

export default function NewsPhotoGallery({ images, alt }: NewsPhotoGalleryProps) {
    const [isLightboxOpen, setIsLightboxOpen] = useState(false)
    const [lightboxIndex, setLightboxIndex] = useState(0)

    // If no images, don't render anything
    if (images.length === 0) return null

    // If only one image, just show it without gallery controls
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

    // Determine how many images to show in the preview grid
    // For many images, we'll show a limited number with a "View All" option
    const maxPreviewImages = 6
    const hasMoreImages = images.length > maxPreviewImages
    const previewImages = hasMoreImages ? images.slice(0, maxPreviewImages - 1) : images

    // Open lightbox to a specific image
    const openLightbox = (index: number) => {
        setLightboxIndex(index)
        setIsLightboxOpen(true)
    }

    // Navigate through images in lightbox
    const nextImage = () => {
        setLightboxIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1))
    }

    const prevImage = () => {
        setLightboxIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1))
    }

    // Handle keyboard navigation
    const handleKeyDown = (e: React.KeyboardEvent) => {
        if (e.key === "ArrowRight") nextImage()
        if (e.key === "ArrowLeft") prevImage()
        if (e.key === "Escape") setIsLightboxOpen(false)
    }

    return (
        <div className="space-y-2">
            {/* Gallery grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                {previewImages.map((image, index) => (
                    <div
                        key={index}
                        className="relative aspect-video rounded-md overflow-hidden cursor-pointer"
                        onClick={() => openLightbox(index)}
                    >
                        <img
                            src={image}
                            alt={`${alt} - Image ${index + 1}`}
                            className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                        />
                        <div className="absolute inset-0 bg-black opacity-0 hover:opacity-20 transition-opacity duration-300 flex items-center justify-center">
                            <Maximize2 className="text-white h-8 w-8" />
                        </div>
                    </div>
                ))}

                {/* "View more" tile */}
                {hasMoreImages && (
                    <div
                        className="relative aspect-video rounded-md overflow-hidden cursor-pointer bg-[#013d60]"
                        onClick={() => openLightbox(maxPreviewImages - 1)}
                    >
                        <img
                            src={images[maxPreviewImages - 1]}
                            alt={`${alt} - View more images`}
                            className="w-full h-full object-cover opacity-50"
                        />
                        <div className="absolute inset-0 flex items-center justify-center flex-col">
                            <span className="text-white font-bold text-xl">+{images.length - (maxPreviewImages - 1)}</span>
                            <span className="text-white text-sm">View all</span>
                        </div>
                    </div>
                )}
            </div>

            {/* Caption */}
            <p className="text-sm text-gray-600 italic">
                {images.length} photos from {alt}
            </p>

            {/* Lightbox overlay */}
            {isLightboxOpen && (
                <div
                    className="fixed inset-0 z-50 bg-black bg-opacity-90 flex items-center justify-center"
                    onClick={() => setIsLightboxOpen(false)}
                    onKeyDown={handleKeyDown}
                    tabIndex={0}
                >
                    {/* Close button */}
                    <button
                        className="absolute top-4 right-4 bg-black bg-opacity-50 text-white p-2 rounded-full z-10 hover:bg-opacity-75 transition-colors"
                        onClick={() => setIsLightboxOpen(false)}
                    >
                        <X size={24} />
                    </button>

                    {/* Current image */}
                    <div
                        className="relative max-w-4xl max-h-[80vh] px-4"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <img
                            src={images[lightboxIndex]}
                            alt={`${alt} - Image ${lightboxIndex + 1}`}
                            className="max-w-full max-h-[70vh] object-contain"
                        />

                        {/* Image counter */}
                        <div className="absolute bottom-[-30px] left-0 right-0 text-center text-white">
                            {lightboxIndex + 1} / {images.length}
                        </div>
                    </div>

                    {/* Navigation buttons */}
                    <button
                        className="absolute left-4 top-1/2 -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full z-10 hover:bg-opacity-75 transition-colors"
                        onClick={(e) => {
                            e.stopPropagation()
                            prevImage()
                        }}
                    >
                        <ChevronLeft size={24} />
                    </button>

                    <button
                        className="absolute right-4 top-1/2 -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full z-10 hover:bg-opacity-75 transition-colors"
                        onClick={(e) => {
                            e.stopPropagation()
                            nextImage()
                        }}
                    >
                        <ChevronRight size={24} />
                    </button>

                    {/* Thumbnail navigation */}
                    <div className="absolute bottom-4 left-4 right-4 flex justify-center space-x-1 overflow-x-auto py-2 px-4">
                        {images.map((image, index) => (
                            <button
                                key={index}
                                onClick={(e) => {
                                    e.stopPropagation()
                                    setLightboxIndex(index)
                                }}
                                className={`w-16 h-12 flex-shrink-0 rounded overflow-hidden ${
                                    index === lightboxIndex ? 'ring-2 ring-[#9A7E43]' : 'opacity-60 hover:opacity-100'
                                }`}
                            >
                                <img
                                    src={image}
                                    alt={`Thumbnail ${index + 1}`}
                                    className="w-full h-full object-cover"
                                />
                            </button>
                        ))}
                    </div>
                </div>
            )}
        </div>
    )
}