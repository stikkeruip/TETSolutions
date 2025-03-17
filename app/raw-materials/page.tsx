import Navbar from "@/components/common/navbar"
import Footer from "@/components/common/footer"
import RawMaterialsHero from "@/components/raw-materials/hero"
import RawMaterialsIntro from "@/components/raw-materials/intro"
import MaterialCategories from "@/components/raw-materials/categories"
import WhyChooseTETMaterials from "@/components/raw-materials/why-tet"
import SupplyChainExcellence from "@/components/raw-materials/supply-chain"
import Contact from "@/components/common/contact"

export default function RawMaterialsPage() {
    return (
        <div className="min-h-screen flex flex-col bg-[#013d60] text-white">
            {/* Combined header section with shared background */}
            <div className="relative">
                <div className="relative z-10">
                    <Navbar />
                    <RawMaterialsHero />
                </div>
            </div>

            <main className="flex-grow">
                <RawMaterialsIntro />
                <MaterialCategories />
                <WhyChooseTETMaterials />
                <SupplyChainExcellence />
                {/* Contact Form section - Dark background */}
                <Contact
                    title="Request Materials Information"
                    subtitle="Need information about our fragrances, flavors, or specialty raw materials? Contact our specialists today."
                />
            </main>
            <Footer />
        </div>
    )
}