"use client"

import { useEffect, useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { Check, Star, Medal, Lightning, Buildings, ArrowRight } from "@phosphor-icons/react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

// Register ScrollTrigger
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger)
}

const sponsorPackages = [
  {
    name: "Gold Sponsor",
    price: "Ksh 1,000,000",
    icon: Star,
    color: "accent",
    benefits: [
      "Premium logo placement on all materials",
      "Keynote speaking opportunity (10 min)",
      "VIP table at Gala Night (10 seats)",
      "Exhibition booth (premium location)",
      "Social media feature posts (5x)",
      "Full-page ad in event program",
      "Priority access to participant database",
      "Media mentions in press releases",
    ],
    featured: true,
  },
  {
    name: "Silver Sponsor",
    price: "Ksh 500,000",
    icon: Medal,
    color: "secondary",
    benefits: [
      "Logo on event materials & banners",
      "Panel speaking opportunity",
      "Reserved table at Gala (6 seats)",
      "Exhibition booth (standard)",
      "Social media mentions (3x)",
      "Half-page ad in event program",
      "Access to participant networking",
    ],
    featured: false,
  },
  {
    name: "Bronze Sponsor",
    price: "Ksh 250,000",
    icon: Lightning,
    color: "primary",
    benefits: [
      "Logo on event website & program",
      "Workshop co-hosting opportunity",
      "Gala Night tickets (4 seats)",
      "Social media mentions (2x)",
      "Quarter-page ad in program",
      "Networking session access",
    ],
    featured: false,
  },
  {
    name: "Exhibitor Booth",
    price: "Ksh 100,000",
    icon: Buildings,
    color: "muted",
    benefits: [
      "Exhibition space for 3 days",
      "Logo on event website",
      "Gala Night tickets (2 seats)",
      "Social media mention",
      "Networking access",
    ],
    featured: false,
  },
]

export default function SponsorshipSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const headerRef = useRef<HTMLDivElement>(null)
  const cardsRef = useRef<HTMLDivElement>(null)
  const ctaRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (typeof window === "undefined") return

    const ctx = gsap.context(() => {
      // Header animation
      if (headerRef.current) {
        gsap.fromTo(headerRef.current,
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: headerRef.current,
              start: "top 90%",
              once: true,
            },
          }
        )
      }

      // Cards stagger animation
      if (cardsRef.current) {
        const cards = cardsRef.current.querySelectorAll(".sponsor-card")
        gsap.fromTo(cards,
          { opacity: 0, y: 60, scale: 0.95 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.8,
            stagger: 0.12,
            ease: "power3.out",
            scrollTrigger: {
              trigger: cardsRef.current,
              start: "top 85%",
              once: true,
            },
          }
        )
      }

      // CTA animation
      if (ctaRef.current) {
        gsap.fromTo(ctaRef.current,
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: "power2.out",
            scrollTrigger: {
              trigger: ctaRef.current,
              start: "top 90%",
              once: true,
            },
          }
        )
      }
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} id="sponsors" className="py-20 bg-card relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent/5 rounded-full blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div ref={headerRef} className="text-center mb-16">
          <span className="inline-block bg-accent/10 text-primary text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
            Partner With Us
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Sponsorship <span className="text-primary">Packages</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Join leading organizations in supporting Africa{"'"}s youth climate innovation movement. Choose a package that fits your goals.
          </p>
        </div>

        {/* Packages Grid */}
        <div ref={cardsRef} className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {sponsorPackages.map((pkg) => {
            const IconComponent = pkg.icon
            return (
              <div
                key={pkg.name}
                className={`sponsor-card relative bg-background rounded-2xl p-6 border transition-all duration-300 hover:shadow-xl hover:-translate-y-1 ${pkg.featured
                    ? "border-accent shadow-lg shadow-accent/10 ring-2 ring-accent/20"
                    : "border-border hover:border-primary/50"
                  }`}
              >
                {pkg.featured && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-accent text-accent-foreground text-xs font-bold px-3 py-1 rounded-full">
                    MOST POPULAR
                  </div>
                )}

                <div className="text-center mb-4">
                  <div
                    className={`inline-flex items-center justify-center w-12 h-12 rounded-xl mb-3 ${pkg.featured ? "bg-accent text-accent-foreground" : "bg-primary/10 text-primary"
                      }`}
                  >
                    <IconComponent className="w-6 h-6" weight="fill" />
                  </div>
                  <h3 className="font-bold text-lg text-foreground">{pkg.name}</h3>
                  <p className="text-2xl font-bold text-primary mt-1">{pkg.price}</p>
                </div>

                <ul className="space-y-2 mb-6">
                  {pkg.benefits.map((benefit, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <Check className="w-4 h-4 text-primary mt-0.5 shrink-0" weight="bold" />
                      {benefit}
                    </li>
                  ))}
                </ul>

                <Button
                  className={`w-full ${pkg.featured
                      ? "bg-accent text-accent-foreground hover:bg-accent/90"
                      : "bg-primary text-primary-foreground hover:bg-primary/90"
                    }`}
                  asChild
                >
                  <Link href="#contact">
                    Enquire Now <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </Button>
              </div>
            )
          })}
        </div>

        {/* CTA */}
        <div ref={ctaRef} className="text-center bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10 rounded-2xl p-8 border border-primary/20">
          <h3 className="text-xl font-bold text-foreground mb-2">Custom Partnership?</h3>
          <p className="text-muted-foreground mb-4">
            Have specific needs? Let{"'"}s create a tailored partnership that works for your organization.
          </p>
          <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground" asChild>
            <Link href="#contact">
              Contact Our Team <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
