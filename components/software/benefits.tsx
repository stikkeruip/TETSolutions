"use client"

import { useState, useEffect } from "react"
import { PuzzleIcon, LayoutDashboard, ArrowUpRight, ShieldCheck, HeadphonesIcon } from "lucide-react"

export default function SoftwareBenefits() {
    const [isLoaded, setIsLoaded] = useState(false)

    useEffect(() => {
        setIsLoaded(true)
    }, [])

    const benefits = [
        {
            icon: PuzzleIcon,
            title: "Tailored for Your Business",
            description: "Customized software solutions to fit your exact needs and workflows."
        },
        {
            icon: LayoutDashboard,
            title: "User-Friendly Interfaces",
            description: "Intuitive design for seamless user experience across all platforms."
        },
        {
            icon: ArrowUpRight,
            title: "Scalable & Future-Ready",
            description: "Software that grows with your business, adapting to evolving requirements."
        },
        {
            icon: ShieldCheck,
            title: "Secure & Reliable",
            description: "Advanced security measures to protect sensitive data and ensure business continuity."
        },
        {
            icon: HeadphonesIcon,
            title: "Dedicated Support & Maintenance",
            description: "Ongoing technical support to ensure your software operates at peak efficiency."
        }
    ]

    return (
        <div className="relative py-16" id="software-benefits">
            {/* Background image with overlay */}
            <div className="absolute inset-0 z-0">
                <div className="h-full w-full overflow-hidden">
                    <img
                        src="/images/software/benefits.jpg"
                        alt="Software technology background"
                        className="w-full h-full object-cover"
                    />
                </div>
                <div className="absolute inset-0 bg-[#013d60] opacity-90"></div>
            </div>

            {/* Content */}
            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className={`lg:text-center mb-12 transition-all duration-700 ease-out ${
                    isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}>
                    <h2 className="text-base text-[#9A7E43] font-semibold tracking-wide uppercase">
                        Our Advantage
                    </h2>
                    <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">
                        Why Our Software Stands Out
                    </p>
                    <p className="mt-4 max-w-2xl text-xl text-gray-300 lg:mx-auto">
                        TET delivers software solutions that provide lasting value through these key differentiators.
                    </p>
                </div>

                <div className="mt-12">
                    {/* First row - 3 cards */}
                    <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 mb-8">
                        {benefits.slice(0, 3).map((benefit, index) => (
                            <div
                                key={benefit.title}
                                className={`bg-white bg-opacity-5 backdrop-blur-sm p-6 rounded-lg shadow-lg border border-[#9A7E43] border-opacity-30 hover:border-opacity-100 transform hover:translate-y-[-4px] transition-all duration-300 ${
                                    isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                                }`}
                                style={{
                                    transitionDelay: isLoaded ? '0ms' : `${150 + index * 75}ms`,
                                }}
                            >
                                <div className="flex items-center mb-4">
                                    <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-full bg-[#9A7E43] text-white">
                                        <benefit.icon className="h-6 w-6" />
                                    </div>
                                    <h3 className="ml-4 text-xl font-bold text-white">{benefit.title}</h3>
                                </div>
                                <p className="text-gray-300">{benefit.description}</p>
                            </div>
                        ))}
                    </div>

                    {/* Second row - 2 cards centered */}
                    <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-2 max-w-3xl mx-auto">
                        {benefits.slice(3, 5).map((benefit, index) => (
                            <div
                                key={benefit.title}
                                className={`bg-white bg-opacity-5 backdrop-blur-sm p-6 rounded-lg shadow-lg border border-[#9A7E43] border-opacity-30 hover:border-opacity-100 transform hover:translate-y-[-4px] transition-all duration-300 ${
                                    isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                                }`}
                                style={{
                                    transitionDelay: isLoaded ? '0ms' : `${300 + index * 75}ms`, // Slightly longer delay for second row
                                }}
                            >
                                <div className="flex items-center mb-4">
                                    <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-full bg-[#9A7E43] text-white">
                                        <benefit.icon className="h-6 w-6" />
                                    </div>
                                    <h3 className="ml-4 text-xl font-bold text-white">{benefit.title}</h3>
                                </div>
                                <p className="text-gray-300">{benefit.description}</p>
                            </div>
                        ))}
                    </div>
                </div>

                <div className={`mt-16 text-center transition-all duration-700 ease-out delay-500 ${
                    isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}>
                    <a
                        href="#featured-software-projects"
                        className="inline-flex items-center px-6 py-3 border border-[#9A7E43] text-base font-medium rounded-md text-white bg-[#9A7E43] hover:bg-opacity-80 transition-colors"
                        onClick={(e) => {
                            e.preventDefault();
                            const projectsSection = document.getElementById('featured-software-projects');
                            if (projectsSection) {
                                window.scrollTo({
                                    top: projectsSection.offsetTop,
                                    behavior: 'smooth'
                                });
                            }
                        }}
                    >
                        See Our Work in Action
                    </a>
                </div>
            </div>
        </div>
    )
}