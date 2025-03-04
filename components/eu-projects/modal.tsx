"use client"

import { useEffect, useRef } from "react"
import { X, Calendar, Clock, ChevronLeft, ChevronRight, Globe, Euro } from "lucide-react"
import { Project } from "@/app/eu-projects/page"
import ProjectPhotoGallery from "./photo-gallery"

interface ProjectModalProps {
    project: Project | null
    isOpen: boolean
    onClose: () => void
    onNext: () => void
    onPrevious: () => void
    hasNext: boolean
    hasPrevious: boolean
}

export default function ProjectModal({
                                         project,
                                         isOpen,
                                         onClose,
                                         onNext,
                                         onPrevious,
                                         hasNext,
                                         hasPrevious
                                     }: ProjectModalProps) {
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

    // Reset scroll position when project changes
    useEffect(() => {
        if (isOpen && project && contentRef.current) {
            contentRef.current.scrollTop = 0
        }
    }, [isOpen, project])

    // Close when clicking outside the modal content
    const handleBackdropClick = (e: React.MouseEvent) => {
        if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
            onClose()
        }
    }

    if (!isOpen || !project) return null

    // Render the project content
    const renderContent = () => {
        let content = project.content

        // For the WIN-WIN project with photos
        if (project.id === "win-win-project" && project.photos) {
            content = content.replace(
                '<project-photo-gallery-placeholder></project-photo-gallery-placeholder>',
                '<div id="gallery-container"></div>'
            )
        }

        return (
            <div className="prose max-w-none text-[#013d60]">
                <div dangerouslySetInnerHTML={{ __html: content }} />

                {/* Inject the actual components after the content is rendered */}
                {project.id === "win-win-project" && project.photos && (
                    <div className="my-6">
                        <ProjectPhotoGallery
                            images={project.photos}
                            alt={project.title}
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
                    aria-label="Close project details"
                >
                    <X size={24} />
                </button>

                {/* Scrollable content container */}
                <div
                    ref={contentRef}
                    className="overflow-y-auto max-h-[calc(90vh-60px)] scroll-smooth"
                >
                    {/* Header with image */}
                    <div className="relative aspect-video">
                        <img
                            src={project.image}
                            alt={project.title}
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#013d60] to-transparent opacity-70"></div>

                        {/* Category tag and EU flag */}
                        <div className="absolute top-4 left-4 flex gap-2">
                            <div className="bg-[#9A7E43] text-white text-xs font-semibold px-3 py-1 rounded-full">
                                {project.category}
                            </div>
                            <div className="bg-[#003399] text-white text-xs font-semibold px-3 py-1 rounded-full flex items-center">
                                <span className="mr-1">EU Funded</span>
                                <span className="text-yellow-300">★</span>
                            </div>
                        </div>

                        {/* Title overlay */}
                        <div className="absolute bottom-0 left-0 right-0 p-6">
                            <h2 className="text-2xl sm:text-3xl font-bold text-white">
                                {project.title}
                            </h2>

                            {/* Meta info */}
                            <div className="flex flex-wrap items-center text-sm text-white mt-2 gap-y-2">
                                <div className="flex items-center mr-4">
                                    <Calendar size={16} className="mr-1" />
                                    <span className="mr-2">Start:</span>
                                    <span>{project.date}</span>
                                </div>
                                <div className="flex items-center mr-4">
                                    <Clock size={16} className="mr-1" />
                                    <span className="mr-2">Duration:</span>
                                    <span>{project.duration}</span>
                                </div>
                                <div className="flex items-center">
                                    <Euro size={16} className="mr-1" />
                                    <span className="mr-2">Grant:</span>
                                    <span>{project.totalGrant}</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Project content */}
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
                        Previous Project
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
                        Next Project
                        <ChevronRight size={16} className="ml-1" />
                    </button>
                </div>
            </div>
        </div>
    )
}