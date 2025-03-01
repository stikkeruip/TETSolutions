"use client"

import { useEffect, useState } from "react"
import { TruckIcon, BarChart3Icon, CheckCircleIcon } from "lucide-react"

export default function SupplyChainExcellence() {
    const [isLoaded, setIsLoaded] = useState(false)

    useEffect(() => {
        setIsLoaded(true)
    }, [])

    const stats = [
        {
            icon: TruckIcon,
            value: "20+",
            label: "Years of procurement experience",
            delay: 100
        },
        {
            icon: BarChart3Icon,
            value: "Global",
            label: "Network of verified suppliers",
            delay: 200
        },
        {
            icon: CheckCircleIcon,
            value: "100%",
            label: "Comprehensive quality assurance",
            delay: 300
        }
    ]

    return (
        <div className="py-16 bg-[#001e2e]" id="supply-chain-excellence">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="lg:grid lg:grid-cols-2 lg:gap-12 items-center">
                    {/* Left side: Content */}
                    <div className={`lg:pr-8 transition-all duration-700 ease-out ${
                        isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                    }`}>
                        <div>
                            <h2 className="text-base text-[#745e30] font-semibold tracking-wide uppercase">
                                Our Process
                            </h2>
                            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">
                                Supply Chain Excellence
                            </p>
                            <p className="mt-4 text-xl text-gray-300">
                                How TET optimizes material sourcing for businesses
                            </p>
                            <div className="mt-6 text-gray-300 space-y-4">
                                <p>
                                    At TET, we understand that reliable raw materials are the foundation of successful
                                    manufacturing and production processes.
                                </p>
                                <p>
                                    Our comprehensive approach to supply chain management ensures consistency, quality,
                                    and timely delivery for all materials we source.
                                </p>
                                <p>
                                    By leveraging our technical expertise and industry connections, we help businesses
                                    reduce costs, minimize delays, and maintain production quality.
                                </p>
                            </div>
                            <div className="mt-8">
                                <a
                                    href="/contact"
                                    className="inline-flex items-center px-6 py-3 border border-[#745e30] text-base font-medium rounded-md text-white bg-[#745e30] hover:bg-opacity-80 transition-colors"
                                >
                                    Discuss Your Supply Chain Needs
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Right side: Image and stats */}
                    <div className={`mt-12 lg:mt-0 transition-all duration-700 ease-out delay-300 ${
                        isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                    }`}>
                        {/* Supply chain image */}
                        <div className="relative rounded-lg overflow-hidden shadow-xl mb-10">
                            <img
                                src="/images/raw-materials/supply-chain.jpg"
                                alt="Supply chain and logistics"
                                className="w-full h-64 object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-br from-[#001e2e] via-transparent to-transparent opacity-60"></div>
                        </div>

                        {/* Stats grid */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            {stats.map((stat, index) => (
                                <div
                                    key={index}
                                    className={`bg-[#0c2b3d] p-6 rounded-lg shadow-lg border border-[#745e30] border-opacity-30 hover:border-opacity-100 transition-all duration-300 transform hover:-translate-y-1 ${
                                        isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                                    }`}
                                    style={{
                                        transitionDelay: isLoaded ? '0ms' : `${400 + stat.delay}ms`,
                                    }}
                                >
                                    <div className="flex items-center justify-center mb-4">
                                        <div className="w-12 h-12 bg-[#745e30] rounded-full flex items-center justify-center">
                                            <stat.icon className="h-6 w-6 text-white" />
                                        </div>
                                    </div>
                                    <div className="text-center">
                                        <p className="text-2xl font-bold text-[#745e30]">{stat.value}</p>
                                        <p className="text-sm text-gray-300 mt-1">{stat.label}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}