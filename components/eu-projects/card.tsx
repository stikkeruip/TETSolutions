"use client"

import { useState } from "react"
import { Calendar, Clock, Globe, Euro } from "lucide-react"
import { Project } from "@/app/eu-projects/page"

interface ProjectCardProps {
    project: Project
    onCardClick: (project: Project) => void
}

export default function ProjectCard({ project, onCardClick }: ProjectCardProps) {
    const [isHovered, setIsHovered] = useState(false)

    return (
        <div
            className="relative overflow-hidden rounded-lg shadow-lg group cursor-pointer transform transition-all duration-300 hover:-translate-y-1 hover:shadow-xl h-full flex flex-col"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onClick={() => onCardClick(project)}
        >
            {/* Card background with image - Fixed aspect ratio */}
            <div className="relative w-full pb-[56.25%]"> {/* 16:9 aspect ratio */}
                <div className="absolute inset-0 overflow-hidden">
                    <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#013d60] via-transparent to-transparent opacity-70"></div>
                </div>

                {/* Category tag */}
                <div className="absolute top-4 left-4 bg-[#9A7E43] text-white text-xs font-semibold px-3 py-1 rounded-full">
                    {project.category}
                </div>

                {/* EU Flag logo */}
                <div className="absolute top-4 right-4 bg-[#003399] text-white text-xs font-semibold px-3 py-1 rounded-full flex items-center">
                    <span className="mr-1">EU Funded</span>
                    <span className="text-yellow-300">★</span>
                </div>
            </div>

            {/* Card content */}
            <div className="p-6 bg-white flex-grow flex flex-col">
                <h3 className="text-xl font-bold text-[#013d60] mb-2 group-hover:text-[#9A7E43] transition-colors duration-300 line-clamp-2">
                    {project.shortTitle || project.title}
                </h3>

                {/* Meta info */}
                <div className="flex flex-wrap items-center text-sm text-gray-500 mb-3 gap-y-2">
                    <div className="flex items-center mr-4">
                        <Calendar size={14} className="mr-1" />
                        <span>{project.date}</span>
                    </div>
                    <div className="flex items-center mr-4">
                        <Clock size={14} className="mr-1" />
                        <span>{project.duration}</span>
                    </div>
                    <div className="flex items-center">
                        <Euro size={14} className="mr-1" />
                        <span>{project.totalGrant}</span>
                    </div>
                </div>

                {/* Excerpt that appears on hover */}
                <div className={`transition-all duration-300 flex-grow ${isHovered ? 'opacity-100 max-h-24' : 'opacity-80 max-h-16'} overflow-hidden`}>
                    <p className="text-[#013d60] text-opacity-80 line-clamp-3">{project.excerpt}</p>
                </div>

                {/* Read more button */}
                <div className="mt-4 flex justify-end">
                    <span className="text-sm font-medium text-[#9A7E43] group-hover:underline transition-all duration-200 inline-flex items-center">
                        View Project Details
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                    </span>
                </div>
            </div>
        </div>
    )
}