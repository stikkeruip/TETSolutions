import Navbar from "@/components/common/navbar"
import Footer from "@/components/common/footer"
import SoftwareHero from "@/components/software/hero"
import SoftwareServices from "@/components/software/services"
import SoftwareBenefits from "@/components/software/benefits"
import SoftwareApproach from "@/components/software/approach"
import FeaturedSoftwareProjects from "@/components/software/featured-projects"
import Contact from "@/components/common/contact"

export default function SoftwarePage() {
    return (
        <div className="min-h-screen flex flex-col bg-[#013d60] text-white">
            {/* Combined header section with shared background */}
            <div className="relative">
                <div className="relative z-10">
                    <Navbar />
                    <SoftwareHero />
                </div>
            </div>

            <main className="flex-grow">
                {/* Software Services Section - Light background */}
                <SoftwareServices />

                {/* Development Approach Section - Dark background */}
                <SoftwareApproach />

                {/* Software Benefits Section - Dark background with image overlay */}
                <SoftwareBenefits />

                {/* Featured Projects Section - Dark background */}
                <FeaturedSoftwareProjects />

                {/* Contact Form Section - Dark background */}
                <Contact
                title="Get a Quote or Consultation"
                subtitle="Ready to enhance your business with custom software solutions?"/>
            </main>
            <Footer />
        </div>
    )
}