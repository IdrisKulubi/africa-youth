import Header from "@/components/sections/header"
import Footer from "@/components/sections/footer"
import SponsorshipSection from "@/components/sections/sponsorship-section"
import ContactSection from "@/components/sections/contact-section"
import { generateMetadata, SITE_CONFIG } from "@/lib/seo-utils"
import { Metadata } from "next"

export const metadata: Metadata = generateMetadata({
    title: "Sponsorship & Partnership Opportunities",
    description: "Partner with AYBCIF 2026 to reach 2,000+ engaged participants and millions through media coverage. Explore Platinum, Gold, Silver, and Partner sponsorship packages with brand visibility, talent pipeline access, and impact alignment.",
    keywords: [
        ...SITE_CONFIG.keywords,
        "Sponsorship Opportunities",
        "Partnership Packages",
        "Brand Visibility",
        "Corporate Partnership",
        "Event Sponsorship",
        "Africa Sponsorship",
    ],
    canonical: `${SITE_CONFIG.url}/sponsorship`,
})

export default function SponsorshipPage() {
    return (
        <main className="min-h-screen">
            <Header />

            {/* Hero Section */}
            <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden pt-24">
                <div className="absolute inset-0 z-0">
                    <img src="/images/nairobi.png" alt="Partnership Background" className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-b from-foreground/80 via-foreground/70 to-background" />
                </div>

                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
                        Become a <span className="text-accent">Partner</span>
                    </h1>
                    <p className="text-lg sm:text-xl text-white/80 max-w-2xl mx-auto mb-8">
                        Connect your brand with Africa&apos;s most dynamic ecosystem of young innovators, business leaders, and climate champions.
                    </p>
                    <div className="flex flex-wrap justify-center gap-4">
                        <a href="#sponsors" className="px-6 py-3 bg-accent text-accent-foreground font-semibold rounded-full hover:bg-accent/90 transition-colors">
                            View Packages
                        </a>
                        <a href="#contact" className="px-6 py-3 bg-white/10 text-white font-semibold rounded-full hover:bg-white/20 transition-colors backdrop-blur-sm">
                            Contact Us
                        </a>
                    </div>
                </div>
            </section>

            {/* Value Proposition - Compact */}
            <section className="py-16 px-4 bg-background">
                <div className="max-w-6xl mx-auto">
                    <div className="grid md:grid-cols-3 gap-6">
                        <div className="p-6 rounded-2xl bg-card border border-border text-center hover:border-primary/50 transition-colors">
                            <div className="text-4xl font-bold text-primary mb-2">2,000+</div>
                            <h3 className="text-lg font-semibold mb-2">Engaged Participants</h3>
                            <p className="text-muted-foreground text-sm">
                                Direct access to Africa&apos;s brightest young innovators
                            </p>
                        </div>
                        <div className="p-6 rounded-2xl bg-card border border-border text-center hover:border-primary/50 transition-colors">
                            <div className="text-4xl font-bold text-primary mb-2">50+</div>
                            <h3 className="text-lg font-semibold mb-2">Media Partners</h3>
                            <p className="text-muted-foreground text-sm">
                                Extensive coverage across Africa and beyond
                            </p>
                        </div>
                        <div className="p-6 rounded-2xl bg-card border border-border text-center hover:border-primary/50 transition-colors">
                            <div className="text-4xl font-bold text-primary mb-2">3 Days</div>
                            <h3 className="text-lg font-semibold mb-2">Of Exposure</h3>
                            <p className="text-muted-foreground text-sm">
                                Including the exclusive Gala Night event
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Sponsorship Packages */}
            <SponsorshipSection />

            {/* Contact Form */}
            <ContactSection />

            <Footer />
        </main>
    )
}

