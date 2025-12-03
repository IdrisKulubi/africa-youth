import Header from "@/components/sections/header"
import Footer from "@/components/sections/footer"
import InnovationHubSection from "@/components/sections/innovation-hub-section"
import { Lightbulb, TrendingUp, Award, ArrowRight } from "lucide-react"
import { generateMetadata, SITE_CONFIG } from "@/lib/seo-utils"
import { Metadata } from "next"

export const metadata: Metadata = generateMetadata({
    title: "Innovation Hub & Startup Showcase",
    description: "Apply for the AYBCIF Innovation Hub to showcase your climate-focused startup to investors, corporate partners, and potential customers. Access mentorship, funding opportunities, and media exposure for African youth-led climate tech ventures.",
    keywords: [
        ...SITE_CONFIG.keywords,
        "Startup Showcase",
        "Climate Tech Startups",
        "Innovation Hub",
        "Startup Funding",
        "Pitch Competition",
        "African Startups",
        "Climate Solutions",
    ],
    canonical: `${SITE_CONFIG.url}/innovation-hub`,
})

export default function InnovationHubPage() {
    return (
        <main className="min-h-screen">
            <Header />

            {/* Hero Section */}
            <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden pt-24">
                <div className="absolute inset-0 z-0">
                    <img src="/images/nairobi.png" alt="Innovation Hub" className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-b from-foreground/80 via-foreground/70 to-background" />
                </div>

                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
                        Innovation Hub & <span className="text-accent">Startup Showcase</span>
                    </h1>
                    <p className="text-lg sm:text-xl text-white/80 max-w-3xl mx-auto">
                        Empowering climate-focused startups to scale and attract investment
                    </p>
                </div>
            </section>

            {/* Overview */}
            <section className="py-20 px-4">
                <div className="max-w-5xl mx-auto text-center space-y-8">
                    <h2 className="text-3xl md:text-4xl font-bold">What is the Innovation Hub?</h2>
                    <p className="text-lg text-muted-foreground leading-relaxed">
                        The AYBCIF Innovation Hub is a dedicated platform for African youth-led startups working
                        on climate solutions, sustainable technologies, and green business models. Selected startups
                        will showcase their innovations to investors, corporate partners, and potential customers.
                    </p>
                </div>
            </section>

            {/* Application Criteria */}
            <section className="py-20 px-4 bg-card/50">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
                        Application Criteria
                    </h2>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <div className="bg-card border border-border rounded-2xl p-8">
                            <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center mb-4">
                                <Lightbulb className="w-6 h-6 text-accent" />
                            </div>
                            <h3 className="text-xl font-semibold mb-3">Innovation Focus</h3>
                            <p className="text-muted-foreground">
                                Startup must address climate change, sustainability, or green economy challenges
                            </p>
                        </div>

                        <div className="bg-card border border-border rounded-2xl p-8">
                            <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center mb-4">
                                <TrendingUp className="w-6 h-6 text-accent" />
                            </div>
                            <h3 className="text-xl font-semibold mb-3">Growth Stage</h3>
                            <p className="text-muted-foreground">
                                Early to growth stage startups with traction and validated business model
                            </p>
                        </div>

                        <div className="bg-card border border-border rounded-2xl p-8">
                            <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center mb-4">
                                <Award className="w-6 h-6 text-accent" />
                            </div>
                            <h3 className="text-xl font-semibold mb-3">Youth Leadership</h3>
                            <p className="text-muted-foreground">
                                At least one co-founder must be under 35 years old
                            </p>
                        </div>

                        <div className="bg-card border border-border rounded-2xl p-8">
                            <h3 className="text-xl font-semibold mb-3">African Base</h3>
                            <p className="text-muted-foreground">
                                Startup must be registered and operating in Africa
                            </p>
                        </div>

                        <div className="bg-card border border-border rounded-2xl p-8">
                            <h3 className="text-xl font-semibold mb-3">Impact Metrics</h3>
                            <p className="text-muted-foreground">
                                Demonstrable environmental or social impact with clear metrics
                            </p>
                        </div>

                        <div className="bg-card border border-border rounded-2xl p-8">
                            <h3 className="text-xl font-semibold mb-3">Scalability</h3>
                            <p className="text-muted-foreground">
                                Clear path to scale across multiple African markets
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Benefits of Participating */}
            <section className="py-20 px-4">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
                        Why Apply?
                    </h2>

                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="flex gap-4">
                            <div className="flex-shrink-0">
                                <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center">
                                    <span className="text-accent font-bold">1</span>
                                </div>
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold mb-2">Investor Access</h3>
                                <p className="text-muted-foreground">
                                    Pitch directly to impact investors, VCs, and angel investors actively seeking climate solutions
                                </p>
                            </div>
                        </div>

                        <div className="flex gap-4">
                            <div className="flex-shrink-0">
                                <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center">
                                    <span className="text-accent font-bold">2</span>
                                </div>
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold mb-2">Corporate Partnerships</h3>
                                <p className="text-muted-foreground">
                                    Connect with corporate sponsors looking for innovation partners and pilot opportunities
                                </p>
                            </div>
                        </div>

                        <div className="flex gap-4">
                            <div className="flex-shrink-0">
                                <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center">
                                    <span className="text-accent font-bold">3</span>
                                </div>
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold mb-2">Media Exposure</h3>
                                <p className="text-muted-foreground">
                                    Showcase your innovation to thousands of attendees and media coverage across Africa
                                </p>
                            </div>
                        </div>

                        <div className="flex gap-4">
                            <div className="flex-shrink-0">
                                <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center">
                                    <span className="text-accent font-bold">4</span>
                                </div>
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold mb-2">Mentorship</h3>
                                <p className="text-muted-foreground">
                                    Access to expert mentors in climate tech, business development, and fundraising
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Application Portal */}
            <section className="py-20 px-4 bg-card/50">
                <div className="max-w-4xl mx-auto text-center space-y-8">
                    <h2 className="text-3xl md:text-4xl font-bold">Application Portal</h2>
                    <p className="text-lg text-muted-foreground">
                        Applications for AYBCIF 2026 Innovation Hub will open in January 2026.
                        Submit your application early to secure your spot!
                    </p>
                    <div className="flex flex-wrap justify-center gap-4">
                        <button className="inline-flex items-center gap-2 px-8 py-4 bg-accent text-accent-foreground rounded-full font-semibold hover:bg-accent/90 transition-colors">
                            Apply Now <ArrowRight className="w-5 h-5" />
                        </button>
                        <button className="px-8 py-4 border-2 border-primary text-primary rounded-full font-semibold hover:bg-primary hover:text-primary-foreground transition-colors">
                            Download Application Guide
                        </button>
                    </div>

                    <div className="mt-12 p-6 bg-card border border-border rounded-2xl text-left">
                        <h3 className="text-xl font-semibold mb-4">Important Dates</h3>
                        <div className="space-y-3">
                            <div className="flex justify-between items-center">
                                <span className="text-muted-foreground">Applications Open</span>
                                <span className="font-semibold">January 2026</span>
                            </div>
                            <div className="flex justify-between items-center">
                                <span className="text-muted-foreground">Application Deadline</span>
                                <span className="font-semibold">March 31, 2026</span>
                            </div>
                            <div className="flex justify-between items-center">
                                <span className="text-muted-foreground">Selection Notification</span>
                                <span className="font-semibold">April 15, 2026</span>
                            </div>
                            <div className="flex justify-between items-center">
                                <span className="text-muted-foreground">Innovation Hub Event</span>
                                <span className="font-semibold">May 27-29, 2026</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Past Success Stories */}
            <InnovationHubSection />

            {/* Past Success Stories Detail */}
            <section className="py-20 px-4">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
                        Success Stories
                    </h2>

                    <div className="grid md:grid-cols-3 gap-8">
                        {[1, 2, 3].map((i) => (
                            <div key={i} className="bg-card border border-border rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300">
                                <div className="aspect-video bg-muted flex items-center justify-center">
                                    <Lightbulb className="w-12 h-12 text-muted-foreground" />
                                </div>
                                <div className="p-6 space-y-3">
                                    <h3 className="text-xl font-semibold">Startup Name</h3>
                                    <p className="text-sm text-accent font-medium">Climate Tech • Kenya</p>
                                    <p className="text-muted-foreground">
                                        Brief description of the startup's innovation and impact achieved after participating
                                        in the AYBCIF Innovation Hub.
                                    </p>
                                    <div className="pt-4 border-t border-border">
                                        <p className="text-sm font-semibold">Achievement</p>
                                        <p className="text-sm text-muted-foreground">Raised $500K seed funding</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    )
}
