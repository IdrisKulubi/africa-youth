import gsap from "gsap"

/**
 * Fade in with upward motion animation
 */
export const fadeInUp = (element: gsap.TweenTarget, delay = 0) => {
    return gsap.from(element, {
        opacity: 0,
        y: 60,
        duration: 1,
        delay,
        ease: "power3.out",
    })
}

/**
 * Stagger fade in for multiple elements
 */
export const staggerFadeIn = (elements: gsap.TweenTarget, staggerDelay = 0.15) => {
    return gsap.from(elements, {
        opacity: 0,
        y: 40,
        duration: 0.8,
        stagger: staggerDelay,
        ease: "power2.out",
    })
}

/**
 * Parallax scrolling effect
 */
export const parallaxEffect = (element: gsap.TweenTarget, speed = 0.5) => {
    return gsap.to(element, {
        yPercent: -50 * speed,
        ease: "none",
        scrollTrigger: {
            trigger: element,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
        },
    })
}

/**
 * Page transition animation
 */
export const pageTransition = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 },
    transition: { duration: 0.4, ease: "easeInOut" },
}

/**
 * Scale on hover effect
 */
export const hoverScale = (element: HTMLElement) => {
    element.addEventListener("mouseenter", () => {
        gsap.to(element, {
            scale: 1.05,
            duration: 0.3,
            ease: "power2.out",
        })
    })

    element.addEventListener("mouseleave", () => {
        gsap.to(element, {
            scale: 1,
            duration: 0.3,
            ease: "power2.out",
        })
    })
}

/**
 * Reveal with clip-path animation
 */
export const revealClipPath = (element: gsap.TweenTarget) => {
    return gsap.from(element, {
        clipPath: "inset(0 100% 0 0)",
        duration: 1.2,
        ease: "power4.inOut",
    })
}

/**
 * Rotate and fade in animation
 */
export const rotateIn = (element: gsap.TweenTarget, delay = 0) => {
    return gsap.from(element, {
        opacity: 0,
        rotation: -10,
        scale: 0.9,
        duration: 1,
        delay,
        ease: "back.out(1.7)",
    })
}

/**
 * Text split and stagger animation
 */
export const splitTextAnimation = (element: gsap.TweenTarget) => {
    const chars = element instanceof Element ? element.textContent?.split("") : []
    if (!chars) return

    return gsap.from(chars, {
        opacity: 0,
        y: 20,
        stagger: 0.03,
        duration: 0.6,
        ease: "power2.out",
    })
}
