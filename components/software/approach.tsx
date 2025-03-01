"use client"

import { useState, useEffect } from "react"
import { Code, Users, CheckCircle, Settings, BarChart, Clock } from "lucide-react"

export default function SoftwareApproach() {
    const [isLoaded, setIsLoaded] = useState(false)
    const [activeStep, setActiveStep] = useState(0)

    useEffect(() => {
        setIsLoaded(true)
    }, [])

    const developmentSteps = [
        {
            icon: Users,
            title: "Requirements Analysis",
            description: "We work closely with clients to understand their specific needs and business goals to establish clear project requirements."
        },
        {
            icon: Settings,
            title: "Design & Planning",
            description: "Our team creates detailed software architecture designs and development plans tailored to your specific requirements."
        },
        {
            icon: Code,
            title: "Development",
            description: "Using industry best practices, we develop customized software solutions that are efficient, scalable, and secure."
        },
        {
            icon: CheckCircle,
            title: "Testing & Quality Assurance",
            description: "Rigorous testing protocols ensure that all software meets the highest standards of functionality and security."
        },
        {
            icon: BarChart,
            title: "Implementation & Deployment",
            description: "We manage the deployment process to ensure smooth integration with existing systems and minimal disruption."
        },
        {
            icon: Clock,
            title: "Maintenance & Support",
            description: "Our commitment extends beyond deployment with ongoing technical support and regular updates to maintain optimal performance."
        }
    ]

    return (
        <div className="py-16 bg-[#001e2e] relative" id="development-approach">
            {/* Background pattern overlay */}
            <div className="absolute inset-0 opacity-15">
                <svg className="h-full w-full" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
                    <defs>
                        <pattern id="dev-pattern" width="20" height="20" patternUnits="userSpaceOnUse">
                            <circle cx="2" cy="2" r="1" fill="#f1e5d1" />
                        </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#dev-pattern)" />
                </svg>
            </div>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className={`lg:text-center mb-12 transition-all duration-700 ease-out ${
                    isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}>
                    <h2 className="text-base text-[#745e30] font-semibold tracking-wide uppercase">
                        Our Process
                    </h2>
                    <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">
                        Software Development Approach
                    </p>
                    <p className="mt-4 max-w-2xl text-xl text-gray-300 lg:mx-auto">
                        We follow a proven methodology to ensure high-quality, efficient, and successful software delivery.
                    </p>
                </div>

                {/* Desktop view - Timeline approach */}
                <div className={`hidden lg:block mt-16 transition-all duration-700 ease-out ${
                    isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}>
                    <div className="relative">
                        {/* Timeline line - starts at the top of the first icon and goes to the bottom */}
                        <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-[#745e30] to-[#001e2e] opacity-50" style={{ top: "36px", height: "calc(100% - 36px)" }}></div>

                        {/* Timeline items */}
                        <div className="space-y-20">
                            {developmentSteps.map((step, index) => (
                                <div
                                    key={index}
                                    className={`flex items-center transition-all duration-500 ${
                                        index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                                    }`}
                                >
                                    {/* Content side */}
                                    <div className={`w-5/12 px-4 ${index % 2 === 0 ? 'text-right' : 'text-left'}`}>
                                        <h3 className="text-xl font-bold text-[#745e30] mb-2">{step.title}</h3>
                                        <p className="text-gray-300">{step.description}</p>
                                    </div>

                                    {/* Center point */}
                                    <div className="w-2/12 flex justify-center">
                                        <div className="relative">
                                            <div
                                                className="w-12 h-12 rounded-full bg-[#001e2e] border-2 border-[#745e30] flex items-center justify-center z-10 transition-transform duration-300 hover:scale-110 cursor-pointer"
                                                onClick={() => setActiveStep(index)}
                                            >
                                                <step.icon className="h-6 w-6 text-white" />
                                            </div>
                                            {/* Removed the pulsing effect */}

                                            {/* Number indicator positioned on the opposite side of the content */}
                                            <div
                                                className={`absolute w-6 h-6 rounded-full bg-[#745e30] flex items-center justify-center text-xs font-bold text-white ${
                                                    index % 2 === 0
                                                        ? 'left-full ml-2' // Right side (opposite of text)
                                                        : 'right-full mr-2' // Left side (opposite of text)
                                                }`}
                                            >
                                                {index + 1}
                                            </div>
                                        </div>
                                    </div>

                                    {/* Empty side */}
                                    <div className="w-5/12"></div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Mobile view - Streamlined cards */}
                <div className={`lg:hidden mt-12 transition-all duration-700 ease-out ${
                    isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}>
                    <div className="space-y-4">
                        {developmentSteps.map((step, index) => (
                            <div
                                key={index}
                                className={`relative bg-gradient-to-r from-[#0c2b3d] to-[#001e2e] rounded-lg overflow-hidden transition-all duration-300 ${
                                    activeStep === index ? 'shadow-lg border-l-4 border-[#745e30]' : 'shadow border-l-4 border-transparent'
                                }`}
                            >
                                <div
                                    className="p-4 cursor-pointer flex items-center"
                                    onClick={() => setActiveStep(index === activeStep ? -1 : index)}
                                >
                                    <div className="relative flex-shrink-0">
                                        <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors duration-300 ${
                                            activeStep === index ? 'bg-[#745e30]' : 'bg-[#0c2b3d]'
                                        }`}>
                                            <step.icon className={`h-5 w-5 ${
                                                activeStep === index ? 'text-white' : 'text-[#745e30]'
                                            }`} />
                                        </div>
                                        <div className="absolute -top-1 -right-1 w-5 h-5 bg-[#0c2b3d] rounded-full flex items-center justify-center text-xs font-medium border border-[#745e30] text-white">
                                            {index + 1}
                                        </div>
                                    </div>

                                    <div className="ml-4 flex-grow">
                                        <h3 className={`text-lg font-medium transition-colors duration-300 ${
                                            activeStep === index ? 'text-[#745e30]' : 'text-white'
                                        }`}>
                                            {step.title}
                                        </h3>
                                    </div>

                                    <div className="ml-auto">
                                        <div className={`w-6 h-6 flex items-center justify-center text-lg text-[#745e30] transition-transform duration-300 ${
                                            activeStep === index ? 'transform rotate-180' : ''
                                        }`}>
                                            {activeStep === index ? '−' : '+'}
                                        </div>
                                    </div>
                                </div>

                                {/* Expandable content */}
                                <div className={`overflow-hidden transition-all duration-300 ${
                                    activeStep === index ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'
                                }`}>
                                    <div className="p-4 pt-0 ml-14 text-gray-300">
                                        {step.description}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Call to action */}
                <div className={`mt-16 text-center transition-all duration-700 ease-out delay-300 ${
                    isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}>
                    <a
                        href="#featured-software-projects"
                        className="inline-flex items-center px-6 py-3 border border-[#745e30] text-base font-medium rounded-md text-white bg-transparent hover:bg-[#745e30] transition-colors"
                    >
                        See Our Development in Action
                    </a>
                </div>
            </div>
        </div>
    )
}