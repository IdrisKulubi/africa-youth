"use client"

import { useEffect, useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

// Register ScrollTrigger plugin
if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger)
}

/**
 * Custom hook for scroll-triggered animations
 * Use this in any component to enable smooth scroll animations
 */
export function useScrollAnimation() {
    const containerRef = useRef<HTMLElement>(null)

    useEffect(() => {
        if (typeof window === "undefined") return

        const ctx = gsap.context(() => {
            // Animate elements with data-animate attribute
            const animatedElements = document.querySelectorAll("[data-animate]")

            animatedElements.forEach((el, index) => {
                const animationType = el.getAttribute("data-animate") || "fade-up"
                const delay = parseFloat(el.getAttribute("data-delay") || "0")
                const duration = parseFloat(el.getAttribute("data-duration") || "1")

                let fromVars: gsap.TweenVars = { opacity: 0 }

                switch (animationType) {
                    case "fade-up":
                        fromVars = { opacity: 0, y: 60 }
                        break
                    case "fade-down":
                        fromVars = { opacity: 0, y: -60 }
                        break
                    case "fade-left":
                        fromVars = { opacity: 0, x: -60 }
                        break
                    case "fade-right":
                        fromVars = { opacity: 0, x: 60 }
                        break
                    case "scale-in":
                        fromVars = { opacity: 0, scale: 0.8 }
                        break
                    case "rotate-in":
                        fromVars = { opacity: 0, rotation: -10, scale: 0.9 }
                        break
                    case "blur-in":
                        fromVars = { opacity: 0, filter: "blur(10px)" }
                        break
                    default:
                        fromVars = { opacity: 0, y: 40 }
                }

                gsap.from(el, {
                    ...fromVars,
                    duration,
                    delay,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: el,
                        start: "top 85%",
                        end: "top 20%",
                        toggleActions: "play none none reverse",
                    },
                })
            })
        }, containerRef)

        return () => ctx.revert()
    }, [])

    return containerRef
}

/**
 * Stagger animation for grids and lists
 */
export function useStaggerAnimation(selector: string, staggerDelay = 0.1) {
    const containerRef = useRef<HTMLElement>(null)

    useEffect(() => {
        if (typeof window === "undefined" || !containerRef.current) return

        const ctx = gsap.context(() => {
            const elements = containerRef.current?.querySelectorAll(selector)

            if (elements && elements.length > 0) {
                gsap.from(elements, {
                    opacity: 0,
                    y: 40,
                    duration: 0.8,
                    stagger: staggerDelay,
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: containerRef.current,
                        start: "top 80%",
                        toggleActions: "play none none reverse",
                    },
                })
            }
        }, containerRef)

        return () => ctx.revert()
    }, [selector, staggerDelay])

    return containerRef
}

/**
 * Parallax effect for background elements
 */
export function useParallax(speed = 0.5) {
    const elementRef = useRef<HTMLElement>(null)

    useEffect(() => {
        if (typeof window === "undefined" || !elementRef.current) return

        const ctx = gsap.context(() => {
            gsap.to(elementRef.current, {
                yPercent: -30 * speed,
                ease: "none",
                scrollTrigger: {
                    trigger: elementRef.current,
                    start: "top bottom",
                    end: "bottom top",
                    scrub: true,
                },
            })
        }, elementRef)

        return () => ctx.revert()
    }, [speed])

    return elementRef
}
