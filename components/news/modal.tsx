"use client"

import { useEffect, useRef } from "react"
import { X, Calendar, Clock, ChevronLeft, ChevronRight } from "lucide-react"
import { NewsArticle } from "./card"
import NewsImageCarousel from "./image-carousel"
import NewsPhotoGallery from "./image-gallery"

interface NewsModalProps {
    article: NewsArticle | null
    isOpen: boolean
    onClose: () => void
    onNext: () => void
    onPrevious: () => void
    hasNext: boolean
    hasPrevious: boolean
}

export default function NewsModal({
                                      article,
                                      isOpen,
                                      onClose,
                                      onNext,
                                      onPrevious,
                                      hasNext,
                                      hasPrevious
                                  }: NewsModalProps) {
    const modalRef = useRef<HTMLDivElement>(null)
    const contentRef = useRef<HTMLDivElement>(null)

    // Handle close on escape key
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === "Escape") {
                onClose()
            } else if (e.key === "ArrowRight" && hasNext) {
                onNext()
            } else if (e.key === "ArrowLeft" && hasPrevious) {
                onPrevious()
            }
        }

        if (isOpen) {
            document.addEventListener("keydown", handleKeyDown)
            // Prevent body scrolling when modal is open
            document.body.style.overflow = "hidden"
        }

        return () => {
            document.removeEventListener("keydown", handleKeyDown)
            // Restore body scrolling when modal closes
            document.body.style.overflow = "auto"
        }
    }, [isOpen, onClose, onNext, onPrevious, hasNext, hasPrevious])

    // Reset scroll position when article changes
    useEffect(() => {
        if (isOpen && article && contentRef.current) {
            contentRef.current.scrollTop = 0
        }
    }, [isOpen, article])

    // Close when clicking outside the modal content
    const handleBackdropClick = (e: React.MouseEvent) => {
        if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
            onClose()
        }
    }

    if (!isOpen || !article) return null

    // Render the article content
    const renderContent = () => {
        let content = article.content

        // For the first article (Erasmus meeting)
        if (article.id === "erasmus-management-meeting" && article.photos) {
            content = content.replace(
                '<news-image-carousel-placeholder></news-image-carousel-placeholder>',
                '<div id="carousel-container"></div>'
            )
        }

        // For the second article (WIN-WIN meeting)
        if (article.id === "win-win-kick-off" && article.photos) {
            content = content.replace(
                '<news-photo-gallery-placeholder></news-photo-gallery-placeholder>',
                '<div id="gallery-container"></div>'
            )
        }

        return (
            <div className="prose max-w-none text-[#013d60]">
                <div dangerouslySetInnerHTML={{ __html: content }} />

                {/* Inject the actual components after the content is rendered */}
                {article.id === "erasmus-management-meeting" && article.photos && (
                    <div className="my-6">
                        <NewsImageCarousel
                            images={article.photos}
                            alt="Erasmus+ Management Meeting Photos"
                        />
                    </div>
                )}

                {article.id === "win-win-kick-off" && article.photos && (
                    <div className="my-6">
                        <NewsPhotoGallery
                            images={article.photos}
                            alt="WIN-WIN Kick-Off Meeting Photos"
                        />
                    </div>
                )}
            </div>
        )
    }

    return (
        <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-20 bg-black bg-opacity-70 backdrop-blur-sm transition-all duration-300"
            onClick={handleBackdropClick}
        >
            <div
                ref={modalRef}
                className="bg-white rounded-lg shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-hidden flex flex-col relative"
                onClick={(e) => e.stopPropagation()}
            >
                {/* Close button - fixed position */}
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 z-20 bg-white rounded-full p-1 shadow-lg hover:bg-[#9A7E43] hover:text-white transition-colors"
                    aria-label="Close article"
                >
                    <X size={24} />
                </button>

                {/* Scrollable content container - includes header image and article content */}
                <div
                    ref={contentRef}
                    className="overflow-y-auto max-h-[calc(90vh-60px)] scroll-smooth"
                >
                    {/* Header with image */}
                    <div className="relative aspect-video">
                        <img
                            src={article.image}
                            alt={article.title}
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#013d60] to-transparent opacity-70"></div>

                        {/* Category tag */}
                        <div className="absolute top-4 left-4 bg-[#9A7E43] text-white text-xs font-semibold px-3 py-1 rounded-full">
                            {article.category}
                        </div>

                        {/* Title overlay */}
                        <div className="absolute bottom-0 left-0 right-0 p-6">
                            <h2 className="text-2xl sm:text-3xl font-bold text-white">
                                {article.title}
                            </h2>

                            {/* Meta info */}
                            <div className="flex items-center text-sm text-white mt-2">
                                <Calendar size={16} className="mr-1" />
                                <span className="mr-4">{article.date}</span>
                                <Clock size={16} className="mr-1" />
                                <span>{article.readTime}</span>
                            </div>
                        </div>
                    </div>

                    {/* Article content */}
                    <div className="p-6">
                        {renderContent()}
                    </div>
                </div>

                {/* Navigation buttons - fixed at bottom */}
                <div className="border-t border-gray-200 p-4 flex justify-between bg-white">
                    <button
                        onClick={onPrevious}
                        disabled={!hasPrevious}
                        className={`flex items-center text-sm font-medium px-4 py-2 rounded-md transition-colors ${
                            hasPrevious
                                ? "text-[#013d60] hover:bg-[#f1e5d1] hover:text-[#9A7E43]"
                                : "text-gray-400 cursor-not-allowed"
                        }`}
                    >
                        <ChevronLeft size={16} className="mr-1" />
                        Previous Article
                    </button>

                    <button
                        onClick={onNext}
                        disabled={!hasNext}
                        className={`flex items-center text-sm font-medium px-4 py-2 rounded-md transition-colors ${
                            hasNext
                                ? "text-[#013d60] hover:bg-[#f1e5d1] hover:text-[#9A7E43]"
                                : "text-gray-400 cursor-not-allowed"
                        }`}
                    >
                        Next Article
                        <ChevronRight size={16} className="ml-1" />
                    </button>
                </div>
            </div>
        </div>
    )
}