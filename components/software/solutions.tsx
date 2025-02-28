"use client"

import { useEffect, useState } from "react"
import { Database, GraduationCap, Code } from "lucide-react"
import Link from "next/link"

// Define the solution type
interface Solution {
    id: string;
    title: string;
    description: string;
    icon: any;
    bgImage: string;
}

// Define the solutions data
const solutions: Solution[] = [
    {
        id: "erp",
        title: "Business Management & ERP Solutions",
        description: "Advanced enterprise resource planning (ERP) software to enhance productivity and decision-making across your organization.",
        icon: Database,
        bgImage: "/images/software/erp-bg.webp",
    },
    {
        id: "training",
        title: "Training & Educational Software",
        description: "Custom e-learning platforms and virtual training solutions for effective workforce development and skill enhancement.",
        icon: GraduationCap,
        bgImage: "/images/software/training-bg.webp",
    },
    {
        id: "custom",
        title: "Custom Enterprise Software Development",
        description: "Tailor-made software designed to automate processes and optimize performance, aligned with your specific business requirements.",
        icon: Code,
        bgImage: "/images/software/custom-bg.webp",
    },
]

export default function SoftwareSolutions() {
    const [isLoaded, setIsLoaded] = useState(false)

    useEffect(() => {
        setIsLoaded(true)
    }, [])

    return (
        <div className="py-16 bg-[#f1e5d1]" id="software-solutions">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className={`lg:text-center mb-12 transition-all duration-700 ease-out ${
                    isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}>
                    <h2 className="text-base text-[#745e30] font-semibold tracking-wide uppercase">
                        Our Expertise
                    </h2>
                    <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-[#001e2e] sm:text-4xl">
                        Key Software Solutions
                    </p>
                    <p className="mt-4 max-w-2xl text-xl text-[#001e2e] lg:mx-auto">
                        Empowering businesses with innovative software to enhance productivity and drive digital transformation.
                    </p>
                </div>

                <div className="mt-10">
                    <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                        {solutions.map((solution, index) => (
                            <div
                                key={solution.id}
                                className={`relative rounded-lg overflow-hidden group shadow-lg transition-all duration-500 ease-out transform hover:-translate-y-1 hover:shadow-xl h-96 ${
                                    isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                                }`}
                                style={{
                                    transitionDelay: isLoaded ? '0ms' : `${150 + index * 75}ms`,
                                }}
                            >
                                {/* Background Image with Overlay */}
                                <div className="absolute inset-0">
                                    <div className="h-full w-full overflow-hidden">
                                        <img
                                            src={solution.bgImage}
                                            alt={solution.title}
                                            className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                                        />
                                    </div>
                                    <div className="absolute inset-0 bg-[#001e2e] opacity-80 group-hover:opacity-90 transition-opacity duration-300"></div>
                                </div>

                                {/* Content */}
                                <div className="relative h-full flex flex-col p-6 text-white">
                                    <div className="flex items-center justify-center h-16 w-16 rounded-full bg-[#745e30] text-white mb-6 group-hover:scale-110 transition-transform duration-300">
                                        <solution.icon className="h-8 w-8" aria-hidden="true" />
                                    </div>

                                    <h3 className="text-xl font-bold mb-4 group-hover:text-[#745e30] transition-colors duration-300">
                                        {solution.title}
                                    </h3>

                                    <p className="text-gray-300 flex-grow">
                                        {solution.description}
                                    </p>


                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className={`mt-16 text-center transition-all duration-700 ease-out delay-500 ${
                    isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}>
                    <a
                        href="#contact-form"
                        className="inline-flex items-center px-6 py-3 border border-[#745e30] text-base font-medium rounded-md text-white bg-[#745e30] hover:bg-[#001e2e] hover:border-[#001e2e] transition-colors"
                        onClick={(e) => {
                            e.preventDefault();
                            const contactSection = document.getElementById('contact-form');
                            if (contactSection) {
                                window.scrollTo({
                                    top: contactSection.offsetTop,
                                    behavior: 'smooth'
                                });
                            }
                        }}
                    >
                        Discuss Your Software Needs
                    </a>
                </div>
            </div>
        </div>
    )
}