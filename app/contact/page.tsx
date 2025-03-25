import Navbar from "@/components/common/navbar"
import Footer from "@/components/common/footer"
import Contact from "@/components/common/contact"
import { MapPin, Phone, Mail, Clock } from "lucide-react"

export default function ContactPage() {
    return (
        <div className="min-h-screen flex flex-col bg-[#013d60] text-white">
            {/* Header */}
            <div className="relative">
                <div className="absolute inset-0 z-0">
                    <div className="h-full w-full overflow-hidden">
                        <img
                            src="/images/contact/contact-hero.jpg"
                            alt="Contact TET Solutions"
                            className="w-full h-full object-cover"
                            style={{ objectPosition: '50% 50%' }}
                        />
                    </div>
                    <div className="absolute inset-0 bg-[#013d60] opacity-75"></div>
                </div>

                <div className="relative z-10">
                    <Navbar />

                    {/* Hero section */}
                    <div className="relative overflow-hidden">
                        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
                            <div className="text-center transition-all duration-700 ease-out opacity-100 translate-y-0">
                                <h1 className="text-4xl tracking-tight font-extrabold text-white sm:text-5xl md:text-6xl">
                                    <span className="block">Get in Touch</span>{" "}
                                    <span className="block text-[#9A7E43]">With Our Team</span>
                                </h1>
                                <p className="mt-3 max-w-md mx-auto text-base text-gray-300 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
                                    Have questions about our services? Looking for innovative technology solutions for your business? We're here to help.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Main content */}
            <main className="flex-grow">
                {/* Contact Information Section */}
                <div className="py-16 bg-[#f1e5d1]">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="lg:text-center mb-12">
                            <h2 className="text-base text-[#9A7E43] font-semibold tracking-wide uppercase">
                                Contact Information
                            </h2>
                            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-[#013d60] sm:text-4xl">
                                Reach Out to TET Solutions
                            </p>
                            <p className="mt-4 max-w-2xl text-xl text-[#013d60] lg:mx-auto">
                                Our team is ready to assist you with any inquiries or requirements you may have.
                            </p>
                        </div>

                        <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
                            {/* Address */}
                            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300">
                                <div className="flex items-center mb-4">
                                    <div className="bg-[#9A7E43] p-3 rounded-full mr-4">
                                        <MapPin className="h-6 w-6 text-white" />
                                    </div>
                                    <h3 className="text-xl font-bold text-[#013d60]">Visit Us</h3>
                                </div>
                                <p className="text-[#013d60]">Jordan Islamic Bank JIB Complex,</p>
                                <p className="text-[#013d60]">King Al Hussein St 177, Amman, Jordan</p>
                            </div>

                            {/* Phone */}
                            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300">
                                <div className="flex items-center mb-4">
                                    <div className="bg-[#9A7E43] p-3 rounded-full mr-4">
                                        <Phone className="h-6 w-6 text-white" />
                                    </div>
                                    <h3 className="text-xl font-bold text-[#013d60]">Call Us</h3>
                                </div>
                                <p className="text-[#013d60]">+962 6 412 9711</p>
                            </div>

                            {/* Email */}
                            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300">
                                <div className="flex items-center mb-4">
                                    <div className="bg-[#9A7E43] p-3 rounded-full mr-4">
                                        <Mail className="h-6 w-6 text-white" />
                                    </div>
                                    <h3 className="text-xl font-bold text-[#013d60]">Email Us</h3>
                                </div>
                                <p className="text-[#013d60]">
                                    <a href="mailto:Ahmad.b@TETsolutions.com" className="hover:text-[#9A7E43] transition-colors">
                                        Send us a message!
                                    </a>
                                </p>
                            </div>

                            {/* Business Hours */}
                            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300">
                                <div className="flex items-center mb-4">
                                    <div className="bg-[#9A7E43] p-3 rounded-full mr-4">
                                        <Clock className="h-6 w-6 text-white" />
                                    </div>
                                    <h3 className="text-xl font-bold text-[#013d60]">Business Hours</h3>
                                </div>
                                <p className="text-[#013d60]">Mon-Fri: 9:00 AM - 5:00 PM</p>
                                <p className="text-[#013d60]">Saturday: 9:00 AM - 1:00 PM</p>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Map Section */}
                <div className="relative h-96">
                    <div className="absolute inset-0">
                        {/* Google Maps embed */}
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3384.5825718794154!2d35.91099941511777!3d31.9804069812429!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x151ca0e9035c35c7%3A0xb82ea2c65c7e3b69!2sJordan%20Islamic%20Bank%20Complex%2C%20Amman%2C%20Jordan!5e0!3m2!1sen!2sus!4v1647930254758!5m2!1sen!2sus"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen={false}
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    )
}