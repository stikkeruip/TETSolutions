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
        <div className="py-16 bg-[#001e2e]" id="development-approach">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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

                <div className={`mt-12 transition-all duration-700 ease-out ${
                    isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}>
                    {/* Desktop view - Hexagonal card-based approach */}
                    <div className="hidden lg:block">
                        <div className="relative mx-auto max-w-5xl">
                            {/* Step cards */}
                            <div className="grid grid-cols-6 gap-6">
                                {developmentSteps.map((step, index) => (
                                    <div
                                        key={index}
                                        className="flex flex-col items-center"
                                    >
                                        <div
                                            className={`w-full aspect-square relative cursor-pointer group transition-all duration-300 ${
                                                activeStep === index ? 'z-10' : 'z-0'
                                            }`}
                                            onClick={() => setActiveStep(index)}
                                        >
                                            {/* Card background with pseudo-3D effect */}
                                            <div className={`absolute inset-0 rounded-xl shadow-lg transform transition-all duration-300 ${
                                                activeStep === index
                                                    ? 'bg-[#745e30] scale-105'
                                                    : 'bg-[#0c2b3d] group-hover:bg-[#132f3f]'
                                            }`}></div>

                                            {/* Card content */}
                                            <div className="absolute inset-2 rounded-lg bg-[#001e2e] flex flex-col items-center justify-center p-2">
                                                {/* Icon */}
                                                <div className={`w-12 h-12 flex items-center justify-center rounded-full mb-2 transition-all duration-300 ${
                                                    activeStep === index
                                                        ? 'bg-[#745e30]'
                                                        : 'bg-[#0c2b3d] group-hover:bg-[#132f3f]'
                                                }`}>
                                                    <step.icon className={`h-6 w-6 ${
                                                        activeStep === index ? 'text-white' : 'text-[#745e30] group-hover:text-white'
                                                    }`} />
                                                </div>

                                                {/* Title */}
                                                <h3 className={`text-center text-sm font-medium transition-all duration-300 ${
                                                    activeStep === index ? 'text-[#745e30]' : 'text-white'
                                                }`}>
                                                    {step.title}
                                                </h3>

                                                {/* Number indicator */}
                                                <div className={`absolute top-1 right-1 w-5 h-5 rounded-full flex items-center justify-center text-xs font-bold ${
                                                    activeStep === index
                                                        ? 'bg-white text-[#745e30]'
                                                        : 'bg-[#745e30] text-white opacity-75'
                                                }`}>
                                                    {index + 1}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* Description section with matching border design */}
                            <div className="mt-12 relative max-w-3xl mx-auto">
                                <div className="relative" style={{ minHeight: "160px" }}>
                                    {/* Outer border layer */}
                                    <div className="absolute inset-0 rounded-xl shadow-lg bg-[#745e30]"></div>

                                    {/* Description container */}
                                    <div className="absolute inset-2 rounded-lg bg-[#001e2e] flex items-center justify-center shadow-inner">
                                        {developmentSteps.map((step, index) => (
                                            <div
                                                key={`desc-${index}`}
                                                className={`absolute inset-0 p-6 flex items-center justify-center transition-all duration-500 ${
                                                    activeStep === index
                                                        ? 'opacity-100 transform translate-y-0'
                                                        : 'opacity-0 transform translate-y-10 pointer-events-none'
                                                }`}
                                            >
                                                <div className="flex items-start max-w-xl">
                                                    <span className="flex-shrink-0 w-8 h-8 rounded-full bg-[#745e30] flex items-center justify-center mr-4 text-white font-medium">
                                                        {index + 1}
                                                    </span>
                                                    <div>
                                                        <h4 className="text-[#745e30] font-bold mb-2">{step.title}</h4>
                                                        <p className="text-gray-300">{step.description}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Mobile view - Accordion-style cards */}
                    <div className="lg:hidden space-y-4">
                        {developmentSteps.map((step, index) => (
                            <div
                                key={index}
                                className={`rounded-lg overflow-hidden transform transition-all duration-300 ${
                                    activeStep === index
                                        ? 'shadow-lg'
                                        : 'shadow'
                                }`}
                            >
                                {/* Gradient top border for active step */}
                                <div className={`h-1 w-full bg-gradient-to-r from-[#745e30] to-[#f1e5d1] transition-opacity duration-300 ${
                                    activeStep === index ? 'opacity-100' : 'opacity-0'
                                }`}></div>

                                {/* Header section */}
                                <div
                                    className={`flex items-center p-4 cursor-pointer ${
                                        activeStep === index
                                            ? 'bg-[#0c2b3d]'
                                            : 'bg-[#001e2e]'
                                    }`}
                                    onClick={() => setActiveStep(index === activeStep ? -1 : index)}
                                >
                                    <div className={`flex-shrink-0 w-10 h-10 flex items-center justify-center rounded-full mr-4 ${
                                        activeStep === index ? 'bg-[#745e30]' : 'bg-[#0c2b3d] border border-[#745e30]'
                                    }`}>
                                        <step.icon className={`h-5 w-5 ${
                                            activeStep === index ? 'text-white' : 'text-[#745e30]'
                                        }`} />
                                    </div>

                                    <h3 className={`text-lg font-medium ${
                                        activeStep === index ? 'text-[#745e30]' : 'text-white'
                                    }`}>
                                        {step.title}
                                    </h3>

                                    <div className="ml-auto">
                                        <div className={`w-6 h-6 rounded-full bg-[#745e30] flex items-center justify-center text-xs font-medium text-white transition-all duration-300 ${
                                            activeStep === index ? 'opacity-100 transform rotate-0' : 'opacity-50 transform rotate-180'
                                        }`}>
                                            {activeStep === index ? '−' : '+'}
                                        </div>
                                    </div>
                                </div>

                                {/* Expandable description */}
                                <div className={`transition-all duration-500 overflow-hidden bg-[#0c2b3d] ${
                                    activeStep === index ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'
                                }`}>
                                    <div className="px-4 pb-4 pt-0 ml-14">
                                        <p className="text-gray-300">
                                            {step.description}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}