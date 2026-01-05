"use client"

import { Check, Star, Medal, Lightning, Buildings, ArrowRight } from "@phosphor-icons/react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

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
      "Logo in exhibitor section",
      "Event passes (2 staff)",
      "Lead collection opportunity",
      "Networking access",
    ],
    featured: false,
  },
]

const partners = [
  { name: "UNEP", logo: "/images/un.png" },
  { name: "UNDP", logo: "/images/undp.png" },

]

export default function SponsorshipSection() {
  return (
    <section id="sponsors" className="py-20 bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block bg-primary/10 text-primary text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
            Sponsorship & Partners
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Partner With <span className="text-primary">AYBCIF 2026</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Support youth empowerment and climate action while gaining visibility with Africa{"'"}s next generation of
            leaders.
          </p>
        </div>

        {/* Sponsorship Packages */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {sponsorPackages.map((pkg) => (
            <div
              key={pkg.name}
              className={`relative bg-background rounded-3xl p-8 border ${pkg.featured ? "border-accent shadow-2xl ring-2 ring-accent/20 scale-105" : "border-border hover:border-primary/50 hover:shadow-xl hover:scale-105"
                } transition-all duration-300`}
            >
              {pkg.featured && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-accent text-accent-foreground text-xs font-bold px-3 py-1 rounded-full">
                  Most Popular
                </div>
              )}
              <div
                className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${pkg.color === "accent"
                  ? "bg-accent/20"
                  : pkg.color === "secondary"
                    ? "bg-secondary/20"
                    : pkg.color === "primary"
                      ? "bg-primary/20"
                      : "bg-muted"
                  }`}
              >
                <pkg.icon
                  className={`w-6 h-6 ${pkg.color === "accent"
                    ? "text-accent"
                    : pkg.color === "secondary"
                      ? "text-secondary"
                      : pkg.color === "primary"
                        ? "text-primary"
                        : "text-muted-foreground"
                    }`}
                />
              </div>
              <h3 className="text-lg font-bold text-foreground mb-4">{pkg.name}</h3>
              <ul className="space-y-2 mb-6">
                {pkg.benefits.map((benefit, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm">
                    <Check className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">{benefit}</span>
                  </li>
                ))}
              </ul>
              <Button
                variant={pkg.featured ? "default" : "outline"}
                className={`w-full ${pkg.featured ? "bg-accent text-accent-foreground hover:bg-accent/90" : ""}`}
                asChild
              >
                <Link href="#contact">Enquire Now</Link>
              </Button>
            </div>
          ))}
        </div>

        {/* Current Partners */}
        <div className="text-center mb-8">
          <h3 className="text-xl font-bold text-foreground mb-2">Our Partners & Endorsers</h3>
          <p className="text-muted-foreground text-sm">Organizations supporting youth-led sustainability</p>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-8 py-8 px-4 bg-background rounded-2xl border border-border">
          {partners.map((partner) => (
            <div key={partner.name} className="grayscale hover:grayscale-0 opacity-70 hover:opacity-100 transition-all">
              <img src={partner.logo || "/placeholder.svg"} alt={partner.name} className="h-12 w-auto object-contain" />
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <p className="text-muted-foreground mb-4">Want to support youth-led sustainability?</p>
          <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90" asChild>
            <Link href="mailto:partnerships@aybcif.org">Contact Us for Partnership</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
