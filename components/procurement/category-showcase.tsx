"use client"

import { useEffect, useState } from "react"
import { ChevronRight } from "lucide-react"

type ShowcaseItem = {
    title: string
    description: string
    image: string
}

type CategoryShowcaseProps = {
    title: string
    description: string
    items: ShowcaseItem[]
    bgColor?: string
    textColor?: string
    accentColor?: string
}

export default function CategoryShowcase({
                                             title,
                                             description,
                                             items,
                                             bgColor = "#f1e5d1",
                                             textColor = "#013d60",
                                             accentColor = "#9A7E43"
                                         }: CategoryShowcaseProps) {
    const [isLoaded, setIsLoaded] = useState(false)
    const [activeItem, setActiveItem] = useState(0)

    useEffect(() => {
        setIsLoaded(true)
    }, [])

    return (
        <div className="py-16" style={{ backgroundColor: bgColor }}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div
                    className={`lg:text-center mb-12 transition-all duration-700 ease-out ${
                        isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                    }`}
                >
                    <h2
                        className="mt-2 text-3xl leading-8 font-extrabold tracking-tight sm:text-4xl"
                        style={{ color: textColor }}
                    >
                        {title}
                    </h2>
                    <p
                        className="mt-4 max-w-3xl text-xl lg:mx-auto"
                        style={{ color: textColor }}
                    >
                        {description}
                    </p>
                </div>

                <div className="mt-12 lg:grid lg:grid-cols-3 lg:gap-8 items-start">
                    {/* Left side: Navigation */}
                    <div
                        className={`transition-all duration-700 ease-out ${
                            isLoaded ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
                        }`}
                    >
                        <nav className="space-y-1">
                            {items.map((item, index) => (
                                <button
                                    key={index}
                                    onClick={() => setActiveItem(index)}
                                    className={`w-full flex items-center px-3 py-4 text-left rounded-lg transition-all duration-200 ${
                                        activeItem === index
                                            ? `bg-opacity-20`
                                            : 'hover:bg-opacity-10 opacity-75'
                                    }`}
                                    style={{
                                        backgroundColor: activeItem === index ? accentColor : 'transparent',
                                        color: textColor
                                    }}
                                >
                                    <ChevronRight
                                        className={`mr-3 h-5 w-5 transition-transform duration-200 ${
                                            activeItem === index ? 'transform translate-x-1' : ''
                                        }`}
                                        style={{ color: accentColor }}
                                    />
                                    <span className="font-medium">{item.title}</span>
                                </button>
                            ))}
                        </nav>
                    </div>

                    {/* Right side: Content and Image */}
                    <div
                        className={`mt-10 lg:mt-0 col-span-2 lg:flex lg:items-center transition-all duration-700 delay-300 ease-out ${
                            isLoaded ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
                        }`}
                    >
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                            {/* Content Section */}
                            <div>
                                <h3
                                    className="text-2xl font-bold mb-4"
                                    style={{ color: textColor }}
                                >
                                    {items[activeItem].title}
                                </h3>
                                <div
                                    className="prose max-w-none"
                                    style={{ color: textColor }}
                                >
                                    <p>{items[activeItem].description}</p>
                                </div>
                                <div className="mt-6">
                                    <a
                                        href="#"
                                        className="inline-flex items-center px-4 py-2 rounded-md text-sm font-medium transition-colors"
                                        style={{
                                            backgroundColor: accentColor,
                                            color: bgColor
                                        }}
                                    >
                                        Request Quote
                                    </a>
                                </div>
                            </div>

                            {/* Image Section */}
                            <div className="lg:ml-auto">
                                <div className="relative h-64 sm:h-72 md:h-80 overflow-hidden rounded-lg shadow-lg">
                                    <img
                                        src={items[activeItem].image}
                                        alt={items[activeItem].title}
                                        className="w-full h-full object-cover transition-all duration-500 ease-in-out transform hover:scale-105"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}