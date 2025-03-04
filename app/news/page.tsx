"use client"

import { useState, useEffect } from "react"
import Navbar from "@/components/common/navbar"
import Footer from "@/components/common/footer"
import NewsCard, { NewsArticle } from "@/components/news/card"
import NewsModal from "@/components/news/modal"
import { Search, Filter } from "lucide-react"

// Sample news data with your two articles
const newsArticles: NewsArticle[] = [
    {
        id: "erasmus-management-meeting",
        title: "TET Participation in the Erasmus+ New Projects Management Meeting",
        excerpt: "TET participated in the Erasmus+ New Projects Management Meeting organized by the National Erasmus+ Office in Amman.",
        content: `
      <p>On <strong>Monday, February 24, 2025</strong>, TET participated in the <strong>Erasmus+ New Projects Management Meeting</strong>, organized by the <strong>National Erasmus+ Office in Amman</strong>. The event, held at the <strong>Ministry of Higher Education and Scientific Research</strong>, aimed to support organizations in correctly implementing their projects according to Erasmus+ guidelines. Representing TET at the meeting were <strong>Engineer Ahmad Al Banna and Rasmi Al Banna</strong>, who engaged in discussions with key stakeholders.</p>
      
      <p>This meeting was organized in the framework of the <strong>WIN-WIN Capacity Building Project</strong> to enhance the management and implementation of Erasmus+ projects. Sessions covered <strong>grant agreement management, financial administration, periodic reporting, dissemination strategies, and impact assessment</strong>. Participants also had the opportunity to network and discuss best practices for overcoming challenges in project execution.</p>
      
      <div class="mt-6 mb-6">
        <news-image-carousel-placeholder></news-image-carousel-placeholder>
      </div>
    `,
        date: "February 24, 2025",
        readTime: "2 min read",
        image: "/images/news/erasmus/photo1.jpg",
        category: "Events",
        photos: [
            "/images/news/erasmus/photo2.jpg",
            "/images/news/erasmus/photo4.jpg",
            "/images/news/erasmus/photo5.jpg",
            "/images/news/erasmus/photo6.jpg"
        ]
    },
    {
        id: "win-win-kick-off",
        title: "TET Participates in the WIN-WIN Kick-Off Meeting in Nador",
        excerpt: "TET representatives participated online in the WIN-WIN Project's first physical Transnational Project Meeting held in Nador, Morocco.",
        content: `
      <p>The <strong>WIN-WIN Project's first physical Transnational Project Meeting (Kick-Off Meeting)</strong> took place on <strong>February 11-12, 2025</strong>, in <strong>Nador, Morocco</strong>, hosted by <strong>Youcan</strong>. This important event brought together project partners to align on objectives, work plans, and key responsibilities for the project's successful implementation.</p>
      
      <p>Representing <strong>TET - Technical Engineers for Technology</strong>, <strong>Engineer Ahmad Al Banna, Engineer Rasmi Al Banna, and Engineer Yazeed Issa</strong> participated <strong>online</strong>, where they <strong>presented TET's company profile</strong> and introduced the <strong>organization of WP3</strong>, for which <strong>TET is the Work Package Leader</strong>. WP3 focuses on the <strong>development of the WIN-WIN Digital Training Hub and Mobile Learning App</strong>, ensuring an accessible, multilingual platform for VET training across partner countries.</p>
      
      <p>The meeting covered key project areas, including <strong>work package planning, responsibilities, and project dissemination strategies</strong>. The session on <strong>WP3, led by TET</strong>, detailed the <strong>technical requirements, platform structure, and integration plans</strong> for the digital learning tools, emphasizing their usability and accessibility in multiple languages.</p>
      
      <div class="mt-6 mb-6">
        <news-photo-gallery-placeholder></news-photo-gallery-placeholder>
      </div>
    `,
        date: "February 12, 2025",
        readTime: "3 min read",
        image: "/images/news/win-win/photo11.jpg",
        category: "Projects",
        photos: [
            "/images/news/win-win/photo1.jpg",
            "/images/news/win-win/photo2.jpg",
            "/images/news/win-win/photo3.jpg",
            "/images/news/win-win/photo4.jpg",
            "/images/news/win-win/photo5.jpg",
            "/images/news/win-win/photo6.jpg",
            "/images/news/win-win/photo7.jpg",
            "/images/news/win-win/photo8.jpg",
            "/images/news/win-win/photo9.jpg",
            "/images/news/win-win/photo10.jpg",
            "/images/news/win-win/photo12.jpg",
            "/images/news/win-win/photo13.jpg",
        ]
    }
]

export default function NewsPage() {
    const [isLoaded, setIsLoaded] = useState(false)
    const [selectedArticle, setSelectedArticle] = useState<NewsArticle | null>(null)
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [searchTerm, setSearchTerm] = useState("")
    const [selectedCategory, setSelectedCategory] = useState<string | null>(null)
    const [currentArticleIndex, setCurrentArticleIndex] = useState<number>(-1)

    // Extract unique categories
    const categories = Array.from(new Set(newsArticles.map(article => article.category)))

    // Filter articles based on search and category
    const filteredArticles = newsArticles.filter(article => {
        const matchesSearch = searchTerm === "" ||
            article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            article.excerpt.toLowerCase().includes(searchTerm.toLowerCase())

        const matchesCategory = selectedCategory === null || article.category === selectedCategory

        return matchesSearch && matchesCategory
    })

    // Handle card click
    const handleCardClick = (article: NewsArticle) => {
        setSelectedArticle(article)
        setIsModalOpen(true)
        setCurrentArticleIndex(filteredArticles.findIndex(a => a.id === article.id))
    }

    // Modal navigation
    const handlePreviousArticle = () => {
        if (currentArticleIndex > 0) {
            setSelectedArticle(filteredArticles[currentArticleIndex - 1])
            setCurrentArticleIndex(currentArticleIndex - 1)
        }
    }

    const handleNextArticle = () => {
        if (currentArticleIndex < filteredArticles.length - 1) {
            setSelectedArticle(filteredArticles[currentArticleIndex + 1])
            setCurrentArticleIndex(currentArticleIndex + 1)
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
                            src="/images/news/news-hero.jpg"
                            alt="Latest news and updates"
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
                                    <span className="block">Latest News &</span>{" "}
                                    <span className="block text-[#9A7E43]">Company Updates</span>
                                </h1>
                                <p className="mt-3 max-w-md mx-auto text-base text-gray-300 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
                                    Stay informed about TET's latest projects, innovations, and industry insights
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Main content section - Now in dark blue */}
            <main className="flex-grow bg-[#013d60]">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                    {/* Search and filter bar */}
                    <div className={`bg-white rounded-lg shadow-md p-4 mb-8 transition-all duration-700 ease-out ${
                        isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                    }`}>
                        <div className="flex flex-col md:flex-row items-center gap-4">
                            {/* Search input with updated border color */}
                            <div className="w-full md:w-1/2 relative">
                                <input
                                    type="text"
                                    placeholder="Search articles..."
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

                    {/* Results info - Updated text color for better visibility on dark background */}
                    <div className={`text-white mb-6 transition-all duration-700 ease-out delay-100 ${
                        isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                    }`}>
                        <p className="font-medium">
                            {filteredArticles.length === 0
                                ? "No articles found"
                                : `Showing ${filteredArticles.length} ${filteredArticles.length === 1 ? 'article' : 'articles'}`}
                            {searchTerm && ` for "${searchTerm}"`}
                            {selectedCategory && ` in ${selectedCategory}`}
                        </p>
                    </div>

                    {/* Articles grid */}
                    {filteredArticles.length > 0 ? (
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {filteredArticles.map((article, index) => (
                                <div
                                    key={article.id}
                                    className={`transition-all duration-700 ease-out ${
                                        isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                                    }`}
                                    style={{ transitionDelay: isLoaded ? '0ms' : `${200 + index * 100}ms` }}
                                >
                                    <NewsCard
                                        article={article}
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
                            <h3 className="text-xl font-bold text-white mb-2">No articles found</h3>
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

            {/* Article modal */}
            <NewsModal
                article={selectedArticle}
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                onNext={handleNextArticle}
                onPrevious={handlePreviousArticle}
                hasNext={currentArticleIndex < filteredArticles.length - 1}
                hasPrevious={currentArticleIndex > 0}
            />

            <Footer />
        </div>
    )
}