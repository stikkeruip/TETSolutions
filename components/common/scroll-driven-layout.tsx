"use client";

import React, { useEffect, ReactNode, useCallback } from "react";
import BackToTopButton from "./back-to-top-button";

interface SmoothScrollLayoutProps {
    children: ReactNode;
}

export default function SmoothScrollLayout({ children }: SmoothScrollLayoutProps) {
    // Throttle function to limit how often a function can be called
    const throttle = (callback: Function, delay: number = 100) => {
        let lastCall = 0;
        return function (...args: any[]) {
            const now = Date.now();
            if (now - lastCall >= delay) {
                lastCall = now;
                callback(...args);
            }
        };
    };

    // Handle main content animation (excluding footer)
    const handleContentAnimation = useCallback(
        throttle(() => {
            const animatedElements = document.querySelectorAll<HTMLElement>(
                '.scroll-animate-element:not(footer):not(footer *)'
            );

            animatedElements.forEach((element) => {
                // Get element position relative to viewport
                const rect = element.getBoundingClientRect();
                const windowHeight = window.innerHeight;

                // Calculate visibility percentage - start animating when element is 20% into view
                const entryPoint = windowHeight * 0.8;

                if (rect.top < entryPoint) {
                    // Calculate how far past the entry point (as percentage)
                    const scrollProgress = Math.min(
                        1,
                        (entryPoint - rect.top) / (entryPoint * 0.5)
                    );

                    // Apply scroll progress directly to styles
                    element.style.opacity = scrollProgress.toString();
                    element.style.transform = `translateY(${(1 - scrollProgress) * 30}px)`;

                    // Add active class if we have any visibility
                    if (scrollProgress > 0 && !element.classList.contains("scroll-animate-active")) {
                        element.classList.add("scroll-animate-active");
                    }
                }
            });
        }, 16), // ~60fps (1000ms/60 ≈ 16ms)
        []
    );

    // Separate function for footer animation - simpler approach
    const handleFooterAnimation = useCallback(
        throttle(() => {
            // Get the footer element
            const footer = document.querySelector<HTMLElement>('footer');
            if (!footer) return;

            const rect = footer.getBoundingClientRect();
            const windowHeight = window.innerHeight;

            // Simply check if footer is starting to enter viewport
            if (rect.top < windowHeight * 1.1) {
                // Calculate how visible the footer is
                const visibilityRatio = (windowHeight - rect.top) / (windowHeight * 0.3);
                const footerVisibility = Math.min(1, Math.max(0, visibilityRatio));

                // Apply to footer as a whole
                footer.style.opacity = footerVisibility.toString();
                footer.style.transform = `translateY(${(1 - footerVisibility) * 30}px)`;

                if (footerVisibility > 0 && !footer.classList.contains("scroll-animate-active")) {
                    footer.classList.add("scroll-animate-active");
                }
            }
        }, 16),
        []
    );

    useEffect(() => {
        const prepareElements = () => {
            // Select content elements excluding footer
            const contentElements = document.querySelectorAll<HTMLElement>(
                'main > div, main > section, .lg\\:text-center, dl > div, .max-w-3xl, .py-12'
            );

            // Handle content elements - make sure we exclude footer content
            contentElements.forEach((element) => {
                // Skip any elements inside the footer
                if (element.closest('footer')) return;

                if (!element.classList.contains("scroll-animate-element")) {
                    element.classList.add("scroll-animate-element");
                    element.style.opacity = "0";
                    element.style.transform = "translateY(30px)";
                }
            });

            // Handle footer separately - ensure it's a clean slate
            const footer = document.querySelector<HTMLElement>('footer');
            if (footer) {
                // Make sure footer isn't affected by any other animation classes
                if (!footer.classList.contains("footer-animate")) {
                    footer.classList.add("footer-animate");
                    footer.style.opacity = "0";
                    footer.style.transform = "translateY(30px)";
                    footer.style.transition = "transform 0.4s cubic-bezier(0.33, 1, 0.68, 1), opacity 0.4s cubic-bezier(0.33, 1, 0.68, 1)";
                }
            }
        };

        // Initialize elements
        prepareElements();

        // Run animation calculation on load
        handleContentAnimation();
        handleFooterAnimation();

        // Set up scroll event listeners
        window.addEventListener("scroll", handleContentAnimation, { passive: true });
        window.addEventListener("scroll", handleFooterAnimation, { passive: true });

        // Clean up
        return () => {
            window.removeEventListener("scroll", handleContentAnimation);
            window.removeEventListener("scroll", handleFooterAnimation);
        };
    }, [handleContentAnimation, handleFooterAnimation]);

    return (
        <>
            {children}
            <BackToTopButton />

            {/* Global styles */}
            <style jsx global>{`
                .scroll-animate-element {
                    will-change: opacity, transform;
                    backface-visibility: hidden;
                }

                .scroll-animate-active {
                    transition: transform 0.4s cubic-bezier(0.33, 1, 0.68, 1),
                    opacity 0.4s cubic-bezier(0.33, 1, 0.68, 1);
                }
            `}</style>
        </>
    );
}