"use client"

import { useState, useEffect } from "react"
import Navbar from "@/components/common/navbar"
import Footer from "@/components/common/footer"
import ProjectCard from "@/components/eu-projects/card"
import ProjectModal from "@/components/eu-projects/modal"
import { Search, Filter } from "lucide-react"

// Project data structure
export interface Project {
    id: string
    title: string
    shortTitle?: string
    excerpt: string
    content: string
    date: string
    duration: string
    fundingProgram: string
    totalGrant: string
    image: string
    category: string
    photos?: string[]
    partners?: {
        name: string
        country: string
        role: string
    }[]
}

// Sample EU projects data
const euProjects: Project[] = [
    {
        id: "win-win-project",
        title: "WIN-WIN: Ways to strengthen VET-business cooperation as a catalyst for competitiveness and sustainable development",
        shortTitle: "WIN-WIN Project",
        excerpt: "Enhancing the capacity of Vocational Education and Training (VET) providers to better align with labour market opportunities and employer demands.",
        content: `
      <p>The <strong>WIN-WIN: Ways to Strengthen VET-Business Cooperation as a Catalyst for Competitiveness and Sustainable Development</strong> project aims to <strong>enhance the capacity of Vocational Education and Training (VET) providers</strong> to better align with <strong>labour market opportunities and employer demands</strong> regarding workforce competencies. The project fosters <strong>international collaboration</strong> by bringing together <strong>ten organizations</strong> from <strong>Morocco, Tunisia, Jordan, Belgium, and Portugal</strong> to jointly develop innovative solutions that bridge the gap between <strong>VET institutions and businesses</strong>.</p>
      
      <h3 class="text-xl font-bold mt-6 mb-3">Key Objectives & Expected Outcomes:</h3>
      <ul class="list-none space-y-2">
        <li>✅ <strong>WIN-WIN Methodology</strong> – A structured framework for VET-business cooperation.</li>
        <li>✅ <strong>WIN-WIN Continuous Professional Development Programme</strong> – Training initiatives to upskill VET professionals.</li>
        <li>✅ <strong>WIN-WIN Digital Training Hub & Mobile Learning App</strong> – A user-friendly digital platform for flexible and accessible training.</li>
        <li>✅ <strong>WIN-WIN Staff International Interactive Training (SIIT)</strong> – Capacity-building workshops for VET trainers and managers.</li>
        <li>✅ <strong>WIN-WIN Local Cascade Learning</strong> – Knowledge-sharing initiatives at the local level.</li>
        <li>✅ <strong>WIN-WIN VET-Business Breakfasts</strong> – Networking events to strengthen collaboration between training providers and employers.</li>
      </ul>
      
      <p class="mt-4">By fostering this <strong>multi-stakeholder cooperation</strong>, the project aims to <strong>improve the quality and responsiveness of VET systems</strong> to regional economic opportunities, <strong>enhance employability</strong>, and contribute to <strong>socioeconomic development and cohesion</strong> in partner countries.</p>
      
      <h3 class="text-xl font-bold mt-6 mb-3">Project Details</h3>
      <ul class="list-none space-y-2">
        <li>📌 <strong>Funding Programme:</strong> <strong>Erasmus+ (ERASMUS-EDU-2024-CB-VET)</strong></li>
        <li>📌 <strong>Duration:</strong> <strong>36 months</strong></li>
        <li>📌 <strong>Total Grant:</strong> <strong>€399,999.99</strong></li>
      </ul>
      
      <h3 class="text-xl font-bold mt-6 mb-3">Project Partners & Countries</h3>
      <ul class="list-none space-y-2">
        <li>🔹 <strong>AEPTL - Associação Para o Ensino Profissional EM</strong> (Portugal) – <strong>Coordinator</strong></li>
        <li>🔹 <strong>Mindshift Skills Hub LDA</strong> (Portugal) – Partner</li>
        <li>🔹 <strong>Le Forem</strong> (Belgium) – Partner</li>
        <li>🔹 <strong>Forum Citoyens - Burgers ASBL</strong> (Belgium) – Partner</li>
        <li>🔹 <strong>Youcan</strong> (Morocco) – Partner</li>
        <li>🔹 <strong>Association Smile Pour le Développement Durable</strong> (Morocco) – Partner</li>
        <li>🔹 <strong>AZADI International Academy for Vocational Training and Education</strong> (Jordan) – Partner</li>
        <li>🔹 <strong>Technical Engineers for Technology (TET)</strong> (Jordan) – Partner</li>
        <li>🔹 <strong>Société Al Emtiez</strong> (Tunisia) – Partner</li>
        <li>🔹 <strong>Agence de la Formation Dans les Métiers du Tourisme</strong> (Tunisia) – Partner</li>
      </ul>
      
      <p class="mt-4">The <strong>WIN-WIN project is co-funded by the European Union (ERASMUS-EDU-2024-CB-VET)</strong> and aims to create <strong>a lasting impact on VET systems</strong>, ensuring that training programs remain relevant to <strong>labour market needs and contribute to a sustainable future</strong>.</p>
      
      <div class="mt-8 mb-2">
        <project-photo-gallery-placeholder></project-photo-gallery-placeholder>
      </div>
      
      <div class="mt-8 border-t border-gray-300 pt-4 text-sm text-gray-600 italic">
        <p>Funded by the European Union. Views and opinions expressed are however those of the author(s) only and do not necessarily reflect those of the European Union or the European Education and Culture Executive Agency (EACEA). Neither the European Union nor EACEA can be held responsible for them.</p>
        <p class="mt-2">PROJECT NUMBER 101183465</p>
      </div>
    `,
        date: "January 2024",
        duration: "36 months",
        fundingProgram: "Erasmus+ (ERASMUS-EDU-2024-CB-VET)",
        totalGrant: "€399,999.99",
        image: "/images/projects-eu/win-win/photo2.jpg",
        category: "Erasmus+",
        photos: [
            "/images/projects-eu/win-win/photo1.jpg",
            "/images/projects-eu/win-win/photo2.jpg"
        ],
        partners: [
            { name: "AEPTL - Associação Para o Ensino Profissional EM", country: "Portugal", role: "Coordinator" },
            { name: "Mindshift Skills Hub LDA", country: "Portugal", role: "Partner" },
            { name: "Le Forem", country: "Belgium", role: "Partner" },
            { name: "Forum Citoyens - Burgers ASBL", country: "Belgium", role: "Partner" },
            { name: "Youcan", country: "Morocco", role: "Partner" },
            { name: "Association Smile Pour le Développement Durable", country: "Morocco", role: "Partner" },
            { name: "AZADI International Academy for Vocational Training and Education", country: "Jordan", role: "Partner" },
            { name: "Technical Engineers for Technology (TET)", country: "Jordan", role: "Partner" },
            { name: "Société Al Emtiez", country: "Tunisia", role: "Partner" },
            { name: "Agence de la Formation Dans les Métiers du Tourisme", country: "Tunisia", role: "Partner" }
        ]
    }
]

export default function EUProjectsPage() {
    const [isLoaded, setIsLoaded] = useState(false)
    const [selectedProject, setSelectedProject] = useState<Project | null>(null)
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [searchTerm, setSearchTerm] = useState("")
    const [selectedCategory, setSelectedCategory] = useState<string | null>(null)
    const [currentProjectIndex, setCurrentProjectIndex] = useState<number>(-1)

    // Extract unique categories
    const categories = Array.from(new Set(euProjects.map(project => project.category)))

    // Filter projects based on search and category
    const filteredProjects = euProjects.filter(project => {
        const matchesSearch = searchTerm === "" ||
            project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            project.excerpt.toLowerCase().includes(searchTerm.toLowerCase())

        const matchesCategory = selectedCategory === null || project.category === selectedCategory

        return matchesSearch && matchesCategory
    })

    // Handle card click
    const handleCardClick = (project: Project) => {
        setSelectedProject(project)
        setIsModalOpen(true)
        setCurrentProjectIndex(filteredProjects.findIndex(p => p.id === project.id))
    }

    // Modal navigation
    const handlePreviousProject = () => {
        if (currentProjectIndex > 0) {
            setSelectedProject(filteredProjects[currentProjectIndex - 1])
            setCurrentProjectIndex(currentProjectIndex - 1)
        }
    }

    const handleNextProject = () => {
        if (currentProjectIndex < filteredProjects.length - 1) {
            setSelectedProject(filteredProjects[currentProjectIndex + 1])
            setCurrentProjectIndex(currentProjectIndex + 1)
        }
    }

    // Set loaded state
    useEffect(() => {
        setIsLoaded(true)
    }, [])

    return (
        <div className="min-h-screen flex flex-col bg-[#013d60] text-white">
            {/* Header */}
            <div className="relative">
                <div className="absolute inset-0 z-0">
                    <div className="h-full w-full overflow-hidden">
                        <img
                            src="/images/projects/eu-projects-hero.jpg"
                            alt="EU Projects"
                            className="w-full h-full object-cover"
                            style={{ objectPosition: '50% 50%' }}
                        />
                    </div>
                    <div className="absolute inset-0 bg-[#013d60] opacity-80"></div>
                </div>

                <div className="relative z-10">
                    <Navbar />

                    {/* Hero section */}
                    <div className="relative overflow-hidden">
                        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
                            <div className={`text-center transition-all duration-700 ease-out ${
                                isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                            }`}>
                                <h1 className="text-4xl tracking-tight font-extrabold text-white sm:text-5xl md:text-6xl">
                                    <span className="block">EU-Funded</span>{" "}
                                    <span className="block text-[#9A7E43]">Projects</span>
                                </h1>
                                <p className="mt-3 max-w-md mx-auto text-base text-gray-300 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
                                    Explore TET's involvement in innovative European projects fostering education, technology, and sustainable development
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Main content section */}
            <main className="flex-grow bg-[#013d60]">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                    {/* Search and filter bar */}
                    <div className={`bg-white rounded-lg shadow-md p-4 mb-8 transition-all duration-700 ease-out ${
                        isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                    }`}>
                        <div className="flex flex-col md:flex-row items-center gap-4">
                            {/* Search input */}
                            <div className="w-full md:w-1/2 relative">
                                <input
                                    type="text"
                                    placeholder="Search projects..."
                                    value={searchTerm}
                                    onChange={(e) => setSearchTerm(e.target.value)}
                                    className="w-full pl-10 pr-4 py-2 border border-[#f1e5d1] rounded-md focus:outline-none focus:ring-2 focus:ring-[#9A7E43] focus:border-transparent"
                                />
                                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                            </div>

                            {/* Category filter */}
                            <div className="w-full md:w-1/2 flex items-center gap-2 flex-wrap">
                                <span className="text-[#013d60] font-medium">Filter by:</span>
                                <div className="flex flex-wrap gap-2">
                                    <button
                                        className={`px-3 py-1 text-sm rounded-full transition-colors ${
                                            selectedCategory === null
                                                ? 'bg-[#9A7E43] text-white'
                                                : 'bg-gray-200 text-[#013d60] hover:bg-gray-300'
                                        }`}
                                        onClick={() => setSelectedCategory(null)}
                                    >
                                        All
                                    </button>

                                    {categories.map((category) => (
                                        <button
                                            key={category}
                                            className={`px-3 py-1 text-sm rounded-full transition-colors ${
                                                selectedCategory === category
                                                    ? 'bg-[#9A7E43] text-white'
                                                    : 'bg-gray-200 text-[#013d60] hover:bg-gray-300'
                                            }`}
                                            onClick={() => setSelectedCategory(category)}
                                        >
                                            {category}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Results info */}
                    <div className={`text-white mb-6 transition-all duration-700 ease-out delay-100 ${
                        isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                    }`}>
                        <p className="font-medium">
                            {filteredProjects.length === 0
                                ? "No projects found"
                                : `Showing ${filteredProjects.length} ${filteredProjects.length === 1 ? 'project' : 'projects'}`}
                            {searchTerm && ` for "${searchTerm}"`}
                            {selectedCategory && ` in ${selectedCategory}`}
                        </p>
                    </div>

                    {/* Projects grid */}
                    {filteredProjects.length > 0 ? (
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {filteredProjects.map((project, index) => (
                                <div
                                    key={project.id}
                                    className={`transition-all duration-700 ease-out ${
                                        isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                                    }`}
                                    style={{ transitionDelay: isLoaded ? '0ms' : `${200 + index * 100}ms` }}
                                >
                                    <ProjectCard
                                        project={project}
                                        onCardClick={handleCardClick}
                                    />
                                </div>
                            ))}
                        </div>
                    ) : (
                        <div className="text-center py-16 bg-white bg-opacity-5 rounded-lg backdrop-blur-sm">
                            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#013d60] text-white mb-4">
                                <Filter size={24} />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-2">No projects found</h3>
                            <p className="text-gray-300 max-w-md mx-auto">
                                Try adjusting your search or filter criteria to find what you're looking for.
                            </p>
                            <button
                                onClick={() => {
                                    setSearchTerm("")
                                    setSelectedCategory(null)
                                }}
                                className="mt-4 px-4 py-2 bg-[#9A7E43] text-white rounded-md hover:bg-opacity-90 transition-colors"
                            >
                                Reset filters
                            </button>
                        </div>
                    )}
                </div>
            </main>

            {/* Project modal */}
            <ProjectModal
                project={selectedProject}
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                onNext={handleNextProject}
                onPrevious={handlePreviousProject}
                hasNext={currentProjectIndex < filteredProjects.length - 1}
                hasPrevious={currentProjectIndex > 0}
            />

            <Footer />
        </div>
    )
}