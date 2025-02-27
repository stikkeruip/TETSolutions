"use client";

import React, { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

export default function BackToTopButton() {
    const [scrollProgress, setScrollProgress] = useState(0);
    const [isVisible, setIsVisible] = useState(false);

    // Update scroll progress
    useEffect(() => {
        const handleScroll = () => {
            const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
            const scrollTop = window.scrollY;
            const progress = scrollHeight > 0 ? scrollTop / scrollHeight : 0;

            setScrollProgress(progress);
            setIsVisible(scrollTop > 300); // Show button after 300px scroll
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Scroll to top function
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    // Calculate the SVG path for the progress circle
    const radius = 18;
    const circumference = 2 * Math.PI * radius;
    const dashOffset = circumference * (1 - scrollProgress);

    if (!isVisible) return null;

    return (
        <button
            onClick={scrollToTop}
            className="fixed bottom-6 right-6 bg-[#745e30] text-white p-4 rounded-full shadow-lg z-50 hover:bg-[#001e2e] border border-[#745e30] transition-all duration-300 group"
            aria-label="Back to top"
        >
            {/* Circular progress */}
            <svg
                className="absolute top-0 left-0 w-full h-full -rotate-90"
                viewBox="0 0 48 48"
            >
                <circle
                    cx="24"
                    cy="24"
                    r={radius}
                    fill="none"
                    stroke="#f1e5d1"
                    strokeWidth="2"
                    strokeOpacity="0.3"
                />
                <circle
                    cx="24"
                    cy="24"
                    r={radius}
                    fill="none"
                    stroke="#f1e5d1"
                    strokeWidth="3"
                    strokeDasharray={circumference}
                    strokeDashoffset={dashOffset}
                    strokeLinecap="round"
                />
            </svg>

            {/* Arrow icon */}
            <ArrowUp size={24} className="relative z-10 group-hover:translate-y-[-2px] transition-transform duration-300" />
        </button>
    );
}