import Navbar from "@/components/common/navbar"
import Footer from "@/components/common/footer"
import ProcurementHero from "@/components/procurement/hero"
import ProcurementIntro from "@/components/procurement/intro"

export default function ProcurementPage() {
    return (
        <div className="min-h-screen flex flex-col bg-[#001e2e] text-white">
            {/* Combined header section with shared background */}
            <div className="relative">
                <div className="relative z-10">
                    <Navbar />
                    <ProcurementHero />
                    <ProcurementIntro />
                </div>
            </div>

            <main className="flex-grow">
                {/* Other procurement sections will go here */}
                {/* For now just a placeholder content div */}
                <div className="py-12 bg-[#001e2e]">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="lg:text-center">
                            <h2 className="text-base text-[#745e30] font-semibold tracking-wide uppercase">Our Services</h2>
                            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">
                                Comprehensive Procurement Solutions
                            </p>
                            <p className="mt-4 max-w-2xl text-xl text-white lg:mx-auto">
                                More content about procurement services will be added here.
                            </p>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    )
}