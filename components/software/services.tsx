"use client"

import { useState, useEffect } from "react"
import { Server, Monitor, Smartphone, Database, Share2, Shield } from "lucide-react"

interface ServiceItem {
    icon: React.ElementType;
    title: string;
    description: string;
}

export default function SoftwareServices() {
    const [isLoaded, setIsLoaded] = useState(false)

    useEffect(() => {
        setIsLoaded(true)
    }, [])

    const services: ServiceItem[] = [
        {
            icon: Monitor,
            title: "Management Systems",
            description: "Custom software solutions to streamline workflow automation, resource management, and overall business operations."
        },
        {
            icon: Share2,
            title: "Video Conferencing",
            description: "Advanced remote communication tools to facilitate seamless collaboration across teams, departments, and locations."
        },
        {
            icon: Smartphone,
            title: "Mobile Applications",
            description: "Interactive mobile platforms for learning, business operations, and specialized industry needs with intuitive interfaces."
        },
        {
            icon: Database,
            title: "Data Management",
            description: "Secure and efficient database solutions to organize, analyze, and utilize critical business information."
        },
        {
            icon: Server,
            title: "System Integration",
            description: "Seamless integration of software systems across platforms to enhance interoperability and functionality."
        },
        {
            icon: Shield,
            title: "Security Solutions",
            description: "Robust security measures implemented across software products to protect sensitive business data."
        }
    ]

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
                        Software Solutions
                    </p>
                    <p className="mt-4 max-w-2xl text-xl text-[#001e2e] lg:mx-auto">
                        TET specializes in developing smart, scalable, and secure software solutions tailored to meet diverse business needs.
                    </p>
                </div>

                <div className="mt-10">
                    <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                        {services.map((service, index) => (
                            <div
                                key={service.title}
                                className={`bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 ${
                                    isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                                }`}
                                style={{
                                    transitionDelay: isLoaded ? '0ms' : `${150 + index * 75}ms`,
                                }}
                            >
                                <div className="flex items-center mb-4">
                                    <div className="bg-[#745e30] p-3 rounded-full mr-4">
                                        <service.icon className="h-6 w-6 text-white" />
                                    </div>
                                    <h3 className="text-xl font-bold text-[#001e2e]">{service.title}</h3>
                                </div>
                                <p className="text-[#001e2e] text-opacity-80">{service.description}</p>
                            </div>
                        ))}
                    </div>
                </div>

                <div className={`mt-12 text-center transition-all duration-700 ease-out delay-500 ${
                    isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}>
                    <a
                        href="#featured-software-projects"
                        className="inline-flex items-center px-6 py-3 border border-[#745e30] text-base font-medium rounded-md text-white bg-[#745e30] hover:bg-[#001e2e] hover:border-[#001e2e] transition-colors"
                    >
                        View Our Projects
                    </a>
                </div>
            </div>
        </div>
    )
}