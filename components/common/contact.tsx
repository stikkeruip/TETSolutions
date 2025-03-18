"use client"

import { useState, useEffect } from "react"
import { Send, Check } from "lucide-react"

interface ContactProps {
    title?: string;
    subtitle?: string;
}

export default function Contact({
                                    title = "Contact Us",
                                    subtitle = "Get in touch with our team for more information about our services."
                                }: ContactProps) {
    const [isLoaded, setIsLoaded] = useState(false)
    const [formState, setFormState] = useState({
        name: "",
        email: "",
        company: "",
        inquiry: ""
    })
    const [formStatus, setFormStatus] = useState({
        submitted: false,
        submitting: false,
        error: false
    })

    useEffect(() => {
        setIsLoaded(true)
    }, [])

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target
        setFormState(prev => ({
            ...prev,
            [name]: value
        }))
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setFormStatus({ submitted: false, submitting: true, error: false })

        // Simulate form submission
        setTimeout(() => {
            setFormStatus({ submitted: true, submitting: false, error: false })
            // Reset form after successful submission
            setFormState({
                name: "",
                email: "",
                company: "",
                inquiry: ""
            })
        }, 1500)
    }

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

                <div className="mt-12 max-w-3xl mx-auto">
                    <div className={`bg-[#f1e5d1] bg-opacity-5 backdrop-blur-sm rounded-lg shadow-xl overflow-hidden transition-all duration-700 ease-out ${
                        isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                    }`}>
                        <div className="p-8">
                            {formStatus.submitted ? (
                                <div className="text-center p-6">
                                    <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-[#9A7E43] mb-6">
                                        <Check className="h-8 w-8 text-white" />
                                    </div>
                                    <h3 className="text-2xl font-bold text-white mb-2">Thank You!</h3>
                                    <p className="text-gray-300">
                                        Your inquiry has been submitted successfully. Our team will get back to you shortly.
                                    </p>
                                    <button
                                        onClick={() => setFormStatus({ submitted: false, submitting: false, error: false })}
                                        className="mt-6 px-4 py-2 border border-[#9A7E43] text-[#9A7E43] hover:bg-[#9A7E43] hover:text-white rounded transition-colors"
                                    >
                                        Submit Another Inquiry
                                    </button>
                                </div>
                            ) : (
                                <form onSubmit={handleSubmit} className="space-y-6">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div>
                                            <label htmlFor="name" className="block text-sm font-medium text-gray-200">
                                                Full Name
                                            </label>
                                            <input
                                                type="text"
                                                name="name"
                                                id="name"
                                                value={formState.name}
                                                onChange={handleChange}
                                                className="mt-1 block w-full border border-gray-700 rounded-md shadow-sm py-2 px-3 bg-[#013d60] bg-opacity-50 text-white focus:ring-[#9A7E43] focus:border-[#9A7E43]"
                                                placeholder="Your name"
                                                required
                                            />
                                        </div>
                                        <div>
                                            <label htmlFor="email" className="block text-sm font-medium text-gray-200">
                                                Email
                                            </label>
                                            <input
                                                type="email"
                                                name="email"
                                                id="email"
                                                value={formState.email}
                                                onChange={handleChange}
                                                className="mt-1 block w-full border border-gray-700 rounded-md shadow-sm py-2 px-3 bg-[#013d60] bg-opacity-50 text-white focus:ring-[#9A7E43] focus:border-[#9A7E43]"
                                                placeholder="your.email@example.com"
                                                required
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <label htmlFor="company" className="block text-sm font-medium text-gray-200">
                                            Company Name
                                        </label>
                                        <input
                                            type="text"
                                            name="company"
                                            id="company"
                                            value={formState.company}
                                            onChange={handleChange}
                                            className="mt-1 block w-full border border-gray-700 rounded-md shadow-sm py-2 px-3 bg-[#013d60] bg-opacity-50 text-white focus:ring-[#9A7E43] focus:border-[#9A7E43]"
                                            placeholder="Your company"
                                        />
                                    </div>

                                    <div>
                                        <label htmlFor="inquiry" className="block text-sm font-medium text-gray-200">
                                            Inquiry Details
                                        </label>
                                        <textarea
                                            name="inquiry"
                                            id="inquiry"
                                            value={formState.inquiry}
                                            onChange={handleChange}
                                            rows={4}
                                            className="mt-1 block w-full border border-gray-700 rounded-md shadow-sm py-2 px-3 bg-[#013d60] bg-opacity-50 text-white focus:ring-[#9A7E43] focus:border-[#9A7E43]"
                                            placeholder="Please describe your needs..."
                                            required
                                        />
                                    </div>

                                    <div className="flex justify-center items-center">
                                        <button
                                            type="submit"
                                            disabled={formStatus.submitting}
                                            className={`inline-flex justify-center items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-[#9A7E43] hover:bg-[#8b7039] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#9A7E43] transition-colors ${
                                                formStatus.submitting ? 'opacity-75 cursor-not-allowed' : ''
                                            }`}
                                        >
                                            {formStatus.submitting ? (
                                                <>Processing...</>
                                            ) : (
                                                <>
                                                    Request info <Send className="ml-2 h-4 w-4" />
                                                </>
                                            )}
                                        </button>
                                    </div>
                                </form>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}