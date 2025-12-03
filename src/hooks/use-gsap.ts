"use client"

import { useEffect, useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

// Register GSAP plugins
if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger)
}

/**
 * Custom hook for GSAP animations with automatic cleanup
 * @returns gsap context and utilities
 */
export function useGSAP() {
    const contextRef = useRef<gsap.Context | null>(null)

    useEffect(() => {
        // Create GSAP context for automatic cleanup
        contextRef.current = gsap.context(() => { })

        return () => {
            // Cleanup all animations in this context
            contextRef.current?.revert()
        }
    }, [])

    return {
        gsap,
        ScrollTrigger,
        context: contextRef.current,
    }
}

/**
 * Hook for scroll-triggered animations
 * @param ref - Element reference
 * @param animation - Animation configuration
 */
export function useScrollAnimation<T extends HTMLElement>(
    animation: gsap.TweenVars,
    scrollTriggerConfig?: ScrollTrigger.Vars,
) {
    const elementRef = useRef<T>(null)

    useEffect(() => {
        if (!elementRef.current) return

        const ctx = gsap.context(() => {
            gsap.from(elementRef.current, {
                ...animation,
                scrollTrigger: {
                    trigger: elementRef.current,
                    start: "top 80%",
                    end: "bottom 20%",
                    toggleActions: "play none none reverse",
                    ...scrollTriggerConfig,
                },
            })
        })

        return () => ctx.revert()
    }, [animation, scrollTriggerConfig])

    return elementRef
}
