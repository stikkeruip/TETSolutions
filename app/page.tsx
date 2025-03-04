import Navbar from "@/components/common/navbar"
import Footer from "@/components/common/footer"
import Hero from "@/components/home/hero"
import Services from "@/components/home/services"
import About from "@/components/home/about"
import Features from "@/components/home/features"
import Contact from "@/components/common/contact"

export default function Home() {
    return (
        <div className="min-h-screen flex flex-col bg-[#013d60] text-white">
            {/* Combined header section with shared background */}
            <div className="relative">
                <div className="absolute inset-0 z-0">
                    <div className="bg-[#013d60] opacity-30 absolute inset-0"></div>
                    <div className="h-full w-full overflow-hidden">
                        <img
                            src="/images/home/hero-background.jpg"
                            alt="Technology and procurement solutions"
                            className="w-full h-full object-cover"
                            style={{ objectPosition: '50% 70%' }}
                        />
                    </div>
                </div>

                {/* Navbar and Hero with proper z-index */}
                <div className="relative z-10">
                    <Navbar />
                    <Hero />
                </div>
            </div>

            <main className="flex-grow">
                <Services />
                <About />
                <Features />
                <Contact
                    title="Get in Touch with TET Solutions"
                    subtitle="Have questions about our services? Looking for innovative technology solutions for your business? Contact us today."
                />
            </main>
            <Footer />
        </div>
    )
}