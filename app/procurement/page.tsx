import Navbar from "@/components/common/navbar"
import Footer from "@/components/common/footer"
import ProcurementHero from "@/components/procurement/hero"
import ProcurementIntro from "@/components/procurement/intro"
import ProcurementCategories from "@/components/procurement/categories"
import WhyTET from "@/components/procurement/why-tet"
import FeaturedProjects from "@/components/procurement/featured-projects"
import Contact from "@/components/common/contact"

export default function ProcurementPage() {
    return (
        <div className="min-h-screen flex flex-col bg-[#001e2e] text-white">
            {/* Combined header section with shared background */}
            <div className="relative">
                <div className="relative z-10">
                    <Navbar />
                    <ProcurementHero />
                </div>
            </div>

            <main className="flex-grow">
                {/* Introduction section - Light background */}
                <ProcurementIntro />

                {/* Categories section - Dark background */}
                <ProcurementCategories />

                {/* Why Choose TET section - Dark background with image overlay */}
                <WhyTET />

                {/* Featured Projects section - Dark background */}
                <FeaturedProjects />

                {/* Contact Form section - Dark background */}
                <Contact
                    title="Get a Quote or Consultation"
                    subtitle="Need high-quality procurement solutions for your business? Contact us today."
                />
            </main>
            <Footer />
        </div>
    )
}