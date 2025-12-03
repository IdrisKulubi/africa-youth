import Header from "@/components/sections/header"
import Footer from "@/components/sections/footer"
import SponsorshipSection from "@/components/sections/sponsorship-section"
import ContactSection from "@/components/sections/contact-section"
import { Download, Check } from "lucide-react"
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
            <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden pt-24">
                <div className="absolute inset-0 z-0">
                    <img src="/images/nairobi.png" alt="Partnership Background" className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-b from-foreground/80 via-foreground/70 to-background" />
                </div>

                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
                        Sponsorship & <span className="text-accent">Partnerships</span>
                    </h1>
                    <p className="text-lg sm:text-xl text-white/80 max-w-3xl mx-auto">
                        Partner with us to shape Africa's sustainable future
                    </p>
                </div>
            </section>

            {/* Why Partner Section */}
            <section className="py-20 px-4">
                <div className="max-w-5xl mx-auto text-center space-y-8">
                    <h2 className="text-3xl md:text-4xl font-bold">Why Partner with AYBCIF?</h2>
                    <p className="text-lg text-muted-foreground leading-relaxed">
                        AYBCIF offers unique opportunities to connect your brand with Africa's most dynamic ecosystem
                        of young innovators, business leaders, and climate champions.
                    </p>

                    <div className="grid md:grid-cols-3 gap-8 mt-12">
                        <div className="p-6 rounded-2xl bg-card border border-border text-left">
                            <h3 className="text-xl font-semibold mb-3">Brand Visibility</h3>
                            <p className="text-muted-foreground">
                                Reach 2,000+ engaged participants and millions through media coverage
                            </p>
                        </div>
                        <div className="p-6 rounded-2xl bg-card border border-border text-left">
                            <h3 className="text-xl font-semibold mb-3">Talent Pipeline</h3>
                            <p className="text-muted-foreground">
                                Connect with Africa's brightest young minds and future business leaders
                            </p>
                        </div>
                        <div className="p-6 rounded-2xl bg-card border border-border text-left">
                            <h3 className="text-xl font-semibold mb-3">Impact Alignment</h3>
                            <p className="text-muted-foreground">
                                Demonstrate your commitment to sustainability and youth empowerment
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Sponsorship Tiers */}
            <section className="py-20 px-4 bg-card/50">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">Sponsorship Packages</h2>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {/* Platinum */}
                        <div className="relative group">
                            <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl opacity-75 group-hover:opacity-100 transition duration-300 blur"></div>
                            <div className="relative bg-background rounded-3xl p-8 border-2 border-transparent">
                                <h3 className="text-2xl font-bold mb-2">Platinum</h3>
                                <p className="text-4xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                                    Premier
                                </p>
                                <ul className="space-y-3 mb-8">
                                    <li className="flex items-start gap-2">
                                        <Check className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                                        <span className="text-sm">Main stage branding</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <Check className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                                        <span className="text-sm">Speaking slot</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <Check className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                                        <span className="text-sm">VIP networking access</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <Check className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                                        <span className="text-sm">20 complimentary tickets</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <Check className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                                        <span className="text-sm">Logo on all materials</span>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        {/* Gold */}
                        <div className="bg-card border border-border rounded-3xl p-8">
                            <h3 className="text-2xl font-bold mb-2">Gold</h3>
                            <p className="text-4xl font-bold mb-6 text-yellow-600">Premium</p>
                            <ul className="space-y-3 mb-8">
                                <li className="flex items-start gap-2">
                                    <Check className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                                    <span className="text-sm">Session branding</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <Check className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                                    <span className="text-sm">Panel participation</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <Check className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                                    <span className="text-sm">Exhibition booth</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <Check className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                                    <span className="text-sm">15 complimentary tickets</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <Check className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                                    <span className="text-sm">Logo on website</span>
                                </li>
                            </ul>
                        </div>

                        {/* Silver */}
                        <div className="bg-card border border-border rounded-3xl p-8">
                            <h3 className="text-2xl font-bold mb-2">Silver</h3>
                            <p className="text-4xl font-bold mb-6 text-gray-400">Standard</p>
                            <ul className="space-y-3 mb-8">
                                <li className="flex items-start gap-2">
                                    <Check className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                                    <span className="text-sm">Workshop branding</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <Check className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                                    <span className="text-sm">Exhibition space</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <Check className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                                    <span className="text-sm">10 complimentary tickets</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <Check className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                                    <span className="text-sm">Logo on materials</span>
                                </li>
                            </ul>
                        </div>

                        {/* Partner */}
                        <div className="bg-card border border-border rounded-3xl p-8">
                            <h3 className="text-2xl font-bold mb-2">Partner</h3>
                            <p className="text-4xl font-bold mb-6 text-accent">Basic</p>
                            <ul className="space-y-3 mb-8">
                                <li className="flex items-start gap-2">
                                    <Check className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                                    <span className="text-sm">Brand recognition</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <Check className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                                    <span className="text-sm">5 complimentary tickets</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <Check className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                                    <span className="text-sm">Logo on website</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Download Kit Section */}
            <section className="py-20 px-4">
                <div className="max-w-4xl mx-auto text-center space-y-8">
                    <h2 className="text-3xl md:text-4xl font-bold">Sponsorship Kit</h2>
                    <p className="text-lg text-muted-foreground">
                        Download our comprehensive sponsorship prospectus for detailed information on all partnership opportunities,
                        benefits, and deliverables.
                    </p>
                    <button className="inline-flex items-center gap-3 px-8 py-4 bg-accent text-accent-foreground rounded-full font-semibold hover:bg-accent/90 transition-colors">
                        <Download className="w-5 h-5" />
                        Download Sponsorship Kit
                    </button>
                </div>
            </section>

            {/* Existing Sponsors */}
            <SponsorshipSection />

            {/* Contact for Partnership */}
            <section className="py-20 px-4 bg-card/50">
                <div className="max-w-4xl mx-auto text-center space-y-8">
                    <h2 className="text-3xl md:text-4xl font-bold">Ready to Partner?</h2>
                    <p className="text-lg text-muted-foreground">
                        Let's discuss how we can create a customized partnership package that aligns with your goals.
                    </p>
                </div>
            </section>

            <ContactSection />

            <Footer />
        </main>
    )
}
