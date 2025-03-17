"use client"

import React, { useState, useEffect } from "react";

const MaterialCategories = () => {
    const [isLoaded, setIsLoaded] = useState(false);
    const [activeCategory, setActiveCategory] = useState(0);

    useEffect(() => {
        setIsLoaded(true);
    }, []);

    // Materials categories data
    const categories = [
        {
            id: "fragrances",
            name: "Fragrances",
            description: "Conventional and natural Fragrances for personal and industrial use, compliant with European standard regulations for Detergent and Cosmetics manufacturing.",
            partners: ["Technicoflor Fragrances"],
            websites: ["https://www.technicoflor.fr/en/"],
            image: "/images/raw-materials/fragrances.jpg",
        },
        {
            id: "flavors",
            name: "Flavors",
            description: "Expert in flavors for the food, oral care, pharmaceutical and animal industries.",
            partners: ["Fontarome Flavors", "Scentium Flavours SL"],
            websites: ["https://fontarome.fr/", "https://scentium.com/"],
            image: "/images/raw-materials/flavors.jpg",
        },
        {
            id: "detergent",
            name: "Detergent Raw Materials",
            description: "TET operates as one of the main importers and distributors of Detergent raw materials in Jordan, with a comprehensive product range.",
            products: [
                "Semi finished Detergent powder 12% active matter",
                "Sulphonic acid - Linear alkylbenzene sulfonic acid (LABSA)",
                "Vaseline Super White Petroleum Jelly",
                "Caustic Soda flakes 99%",
                "Texapon: Sodium lauryl ether sulfate 70% (SLES)",
                "Cocoamidopropyl (betaine)",
                "Coco Diethanolamide",
                "Monoethylene Glycol (MEG)",
                "Alcohol",
                "UPS Glycrine"
            ],
            image: "/images/raw-materials/detergent.jpg",
        },
        {
            id: "cosmetics",
            name: "Beauty and Cosmetics Raw Materials",
            description: "TET operates as one of the main importers and distributors of Beauty and Cosmetics raw materials in Jordan.",
            products: [
                "Lanette O, Lanette 16, Lanette N",
                "Glyceryl mono stearate (GMS)",
                "Xanthan gum",
                "Titanium dioxide",
                "Phenoxyethanol",
                "Methyl Propyl Ether",
                "Methylparaben",
                "Zinc oxide",
                "Sodium Salicylate",
                "ACNIBIO"
            ],
            image: "/images/raw-materials/cosmetics.jpg",
        }
    ];

    return (
        <div className="py-16 bg-[#013d60]" id="materials-categories">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className={`lg:text-center mb-12 transition-all duration-700 ease-out ${
                    isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}>
                    <h2 className="text-base text-[#9A7E43] font-semibold tracking-wide uppercase">
                        Our Offerings
                    </h2>
                    <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">
                        Key Materials Categories
                    </p>
                    <p className="mt-4 max-w-2xl text-xl text-gray-300 lg:mx-auto">
                        Explore our specialized areas of expertise in raw materials procurement.
                    </p>
                </div>

                <div className="mt-10 grid grid-cols-1 gap-8 lg:grid-cols-3">
                    {/* Category Navigation - Takes 1/3 width on desktop */}
                    <div className={`transition-all duration-700 ease-out ${
                        isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                    }`}>
                        <div className="bg-white bg-opacity-5 backdrop-blur-sm rounded-lg overflow-hidden shadow-lg">
                            {categories.map((category, index) => (
                                <button
                                    key={category.id}
                                    className={`w-full text-left px-6 py-4 border-b border-[#9A7E43] border-opacity-20 last:border-0 transition-colors ${
                                        activeCategory === index
                                            ? 'bg-[#9A7E43] bg-opacity-30 text-white'
                                            : 'text-gray-300 hover:bg-[#9A7E43] hover:bg-opacity-20'
                                    }`}
                                    onClick={() => setActiveCategory(index)}
                                >
                                    <div className="flex items-center">
                                        <div className={`w-3 h-3 rounded-full mr-3 ${
                                            activeCategory === index ? 'bg-[#9A7E43]' : 'bg-gray-500'
                                        }`}></div>
                                        <span className="font-medium">{category.name}</span>
                                    </div>
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Category Details - Takes 2/3 width on desktop */}
                    <div className={`lg:col-span-2 transition-all duration-700 ease-out delay-300 ${
                        isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                    }`}>
                        <div className="bg-white bg-opacity-5 backdrop-blur-sm rounded-lg overflow-hidden shadow-lg h-full">
                            {categories.map((category, index) => (
                                <div
                                    key={category.id}
                                    className={`${activeCategory === index ? 'block' : 'hidden'} h-full`}
                                >
                                    <div className="relative h-64 sm:h-80 md:h-96">
                                        <img
                                            src={category.image}
                                            alt={category.name}
                                            className="w-full h-full object-cover"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-[#013d60] to-transparent opacity-80"></div>
                                        <div className="absolute bottom-0 left-0 w-full p-6">
                                            <h3 className="text-2xl font-bold text-white">{category.name}</h3>
                                        </div>
                                    </div>

                                    <div className="p-6">
                                        <p className="text-gray-300 mb-6">{category.description}</p>

                                        {category.partners && (
                                            <div className="mb-6">
                                                <h4 className="text-[#9A7E43] font-semibold mb-2">Exclusive Authorized Distributor For:</h4>
                                                <ul className="space-y-1">
                                                    {category.partners.map((partner, i) => (
                                                        <li key={i} className="text-white flex items-center">
                                                            <span className="text-[#9A7E43] mr-2">●</span>
                                                            {partner}
                                                            {category.websites && category.websites[i] && (
                                                                <a
                                                                    href={category.websites[i]}
                                                                    target="_blank"
                                                                    rel="noopener noreferrer"
                                                                    className="ml-2 text-[#9A7E43] text-sm hover:underline"
                                                                >
                                                                    (Visit Website)
                                                                </a>
                                                            )}
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        )}

                                        {category.products && (
                                            <div>
                                                <h4 className="text-[#9A7E43] font-semibold mb-2">Product Range Includes:</h4>
                                                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-1">
                                                    {category.products.map((product, i) => (
                                                        <div key={i} className="text-white flex items-center">
                                                            <span className="text-[#9A7E43] mr-2">●</span>
                                                            <span>{product}</span>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <div className={`mt-12 text-center transition-all duration-700 ease-out delay-500 ${
                    isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}>
                    <a
                        href="#contact-form"
                        className="inline-flex items-center px-6 py-3 border border-[#9A7E43] text-base font-medium rounded-md text-white bg-transparent hover:bg-[#9A7E43] hover:text-white transition-colors"
                        onClick={(e) => {
                            e.preventDefault();
                            const contactSection = document.getElementById('contact-form');
                            if (contactSection) {
                                window.scrollTo({
                                    top: contactSection.offsetTop,
                                    behavior: 'smooth'
                                });
                            }
                        }}
                    >
                        Request Materials Information
                    </a>
                </div>
            </div>
        </div>
    );
};

export default MaterialCategories;