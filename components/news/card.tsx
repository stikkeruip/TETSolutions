"use client"

import { useState } from "react"
import { Calendar, Clock } from "lucide-react"

export interface NewsArticle {
    id: string
    title: string
    excerpt: string
    content: string
    date: string
    readTime: string
    image: string
    category: string
    photos?: string[] // Array of photo URLs for the photo gallery/carousel
}

interface NewsCardProps {
    article: NewsArticle
    onCardClick: (article: NewsArticle) => void
}

export default function NewsCard({ article, onCardClick }: NewsCardProps) {
    const [isHovered, setIsHovered] = useState(false)

    return (
        <div
            className="relative overflow-hidden rounded-lg shadow-lg group cursor-pointer transform transition-all duration-300 hover:-translate-y-1 hover:shadow-xl h-full flex flex-col"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onClick={() => onCardClick(article)}
        >
            {/* Card background with image - Fixed aspect ratio */}
            <div className="relative w-full pb-[56.25%]"> {/* 16:9 aspect ratio (9/16 = 0.5625 = 56.25%) */}
                <div className="absolute inset-0 overflow-hidden">
                    <img
                        src={article.image}
                        alt={article.title}
                        className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#001e2e] via-transparent to-transparent opacity-70"></div>
                </div>

                {/* Category tag */}
                <div className="absolute top-4 left-4 bg-[#745e30] text-white text-xs font-semibold px-3 py-1 rounded-full">
                    {article.category}
                </div>

                {/* Photo indicator if the article has photos */}
                {article.photos && article.photos.length > 0 && (
                    <div className="absolute top-4 right-4 bg-white text-[#001e2e] text-xs font-semibold px-3 py-1 rounded-full flex items-center">
                        <span className="mr-1">{article.photos.length}</span>
                        <span>Photos</span>
                    </div>
                )}
            </div>

            {/* Card content */}
            <div className="p-6 bg-white flex-grow flex flex-col">
                <h3 className="text-xl font-bold text-[#001e2e] mb-2 group-hover:text-[#745e30] transition-colors duration-300 line-clamp-2">
                    {article.title}
                </h3>

                {/* Meta info */}
                <div className="flex items-center text-sm text-gray-500 mb-3">
                    <Calendar size={14} className="mr-1" />
                    <span className="mr-4">{article.date}</span>
                    <Clock size={14} className="mr-1" />
                    <span>{article.readTime}</span>
                </div>

                {/* Excerpt that appears on hover */}
                <div className={`transition-all duration-300 flex-grow ${isHovered ? 'opacity-100 max-h-24' : 'opacity-80 max-h-16'} overflow-hidden`}>
                    <p className="text-[#001e2e] text-opacity-80 line-clamp-3">{article.excerpt}</p>
                </div>

                {/* Read more button */}
                <div className="mt-4 flex justify-end">
                    <span className="text-sm font-medium text-[#745e30] group-hover:underline transition-all duration-200 inline-flex items-center">
                        Read Article
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                    </span>
                </div>
            </div>
        </div>
    )
}