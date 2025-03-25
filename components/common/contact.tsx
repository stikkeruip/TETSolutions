"use client"

import { useState, useEffect } from "react"
import { Mail } from "lucide-react"

interface ContactProps {
    title?: string;
    subtitle?: string;
}

export default function SimplifiedContact({
                                              title = "Contact Us",
                                              subtitle = "Get in touch with our team for more information about our services."
                                          }: ContactProps) {
    const [isLoaded, setIsLoaded] = useState(false)

    useEffect(() => {
        setIsLoaded(true)
    }, [])

    return (
        <div className="py-16 bg-[#013d60] relative overflow-hidden" id="contact-form">
            {/* Background pattern overlay */}
            <div className="absolute inset-0 opacity-10">
                <svg className="h-full w-full" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
                    <defs>
                        <pattern id="dotted-pattern" width="20" height="20" patternUnits="userSpaceOnUse">
                            <circle cx="2" cy="2" r="1" fill="#f1e5d1" />
                        </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#dotted-pattern)" />
                </svg>
            </div>

            {/* Content */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className={`lg:text-center mb-12 transition-all duration-700 ease-out ${
                    isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}>
                    <h2 className="text-base text-[#9A7E43] font-semibold tracking-wide uppercase">
                        Contact Us
                    </h2>
                    <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">
                        {title}
                    </p>
                    <p className="mt-4 max-w-2xl text-xl text-gray-300 lg:mx-auto">
                        {subtitle}
                    </p>
                </div>

                <div className="mt-12 max-w-md mx-auto">
                    <div className={`bg-[#f1e5d1] bg-opacity-5 backdrop-blur-sm rounded-lg shadow-xl overflow-hidden transition-all duration-700 ease-out text-center py-12 px-6 ${
                        isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                    }`}>
                        <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-[#9A7E43] mb-6">
                            <Mail className="h-8 w-8 text-white" />
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-3">Email Us Directly</h3>
                        <p className="text-gray-300 mb-8">
                            Our team is ready to assist you with any inquiries or requirements you may have.
                        </p>
                        <a
                            href="mailto:info@tetsolutions.com"
                            className="inline-flex items-center px-6 py-3 border border-[#9A7E43] text-base font-medium rounded-md text-white bg-[#9A7E43] hover:bg-[#8b7039] transition-colors"
                        >
                            Email info@tetsolutions.com
                            <Mail className="ml-2 h-5 w-5" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}