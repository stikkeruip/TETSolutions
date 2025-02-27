"use client";

import React, { useEffect, ReactNode, useCallback, useRef } from "react";
import { usePathname } from "next/navigation";
import BackToTopButton from "./back-to-top-button";

interface SmoothScrollLayoutProps {
    children: ReactNode;
}

export default function SmoothScrollLayout({ children }: SmoothScrollLayoutProps) {
    const pathname = usePathname();
    const isInitializedRef = useRef(false);

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

                // Calculate visibility percentage - start animating when element is 40% into view (earlier reveal)
                const entryPoint = windowHeight * 0.95;

                if (rect.top < entryPoint) {
                    // Calculate how far past the entry point (as percentage) - more gradual transition
                    const scrollProgress = Math.min(
                        1,
                        (entryPoint - rect.top) / (entryPoint * 0.7)
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

    // Function to initialize all elements for animation
    const prepareElements = useCallback(() => {
        // Reset initialization flag when preparing elements
        isInitializedRef.current = true;

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
                footer.classList.add("footer-animate", "scroll-animate-element");
                footer.style.opacity = "0";
                footer.style.transform = "translateY(30px)";
                footer.style.transition = "transform 0.4s cubic-bezier(0.33, 1, 0.68, 1), opacity 0.4s cubic-bezier(0.33, 1, 0.68, 1)";
            }
        }
    }, []);

    // Function to run all animations
    const runAllAnimations = useCallback(() => {
        handleContentAnimation();
        handleFooterAnimation();
    }, [handleContentAnimation, handleFooterAnimation]);

    // Re-initialize when pathname changes (navigation between pages)
    useEffect(() => {
        // Reset state when path changes
        isInitializedRef.current = false;

        // Small delay to ensure DOM is updated after route change
        const timer = setTimeout(() => {
            prepareElements();
            runAllAnimations();
        }, 50);

        return () => clearTimeout(timer);
    }, [pathname, prepareElements, runAllAnimations]);

    // Set up core functionality
    useEffect(() => {
        // Initialize elements on first load
        if (!isInitializedRef.current) {
            prepareElements();
            runAllAnimations();
        }

        // Add event listeners for scroll
        window.addEventListener("scroll", handleContentAnimation, { passive: true });
        window.addEventListener("scroll", handleFooterAnimation, { passive: true });

        // Handle page visibility changes (helps with back/forward navigation)
        const handleVisibilityChange = () => {
            if (document.visibilityState === 'visible') {
                // Small delay to ensure DOM is ready
                setTimeout(() => {
                    prepareElements();
                    runAllAnimations();
                }, 100);
            }
        };

        document.addEventListener('visibilitychange', handleVisibilityChange);

        // Also run animations when window is resized
        const handleResize = throttle(() => {
            runAllAnimations();
        }, 100);

        window.addEventListener('resize', handleResize, { passive: true });

        // Clean up
        return () => {
            window.removeEventListener("scroll", handleContentAnimation);
            window.removeEventListener("scroll", handleFooterAnimation);
            document.removeEventListener('visibilitychange', handleVisibilityChange);
            window.removeEventListener('resize', handleResize);
        };
    }, [
        prepareElements,
        runAllAnimations,
        handleContentAnimation,
        handleFooterAnimation
    ]);

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