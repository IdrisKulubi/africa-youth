import Header from "@/components/sections/header"
import Footer from "@/components/sections/footer"
import { Users, Target, Heart, Award } from "lucide-react"
import { generateMetadata, SITE_CONFIG } from "@/lib/seo-utils"
import { Metadata } from "next"

export const metadata: Metadata = generateMetadata({
    title: "About Zen Forward Africa",
    description: "Zen Forward Africa is a pan-African organization dedicated to catalyzing sustainable development through youth empowerment, business innovation, and climate action. 10,000+ youth empowered, 500+ startups supported, $2M+ in funding facilitated.",
    keywords: [
        ...SITE_CONFIG.keywords,
        "Pan-African Organization",
        "Youth Empowerment Africa",
        "Sustainable Development",
        "Impact Metrics",
        "African Innovation",
    ],
    canonical: `${SITE_CONFIG.url}/about-zen-forward`,
})

export default function AboutZenForwardPage() {
    return (
        <main className="min-h-screen">
            <Header />

            {/* Hero Section */}
            <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden pt-24">
                <div className="absolute inset-0 z-0">
                    <img src="/images/nairobi.png" alt="Zen Forward Background" className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-b from-foreground/80 via-foreground/70 to-background" />
                </div>

                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
                        About <span className="text-accent">Zen Forward Africa</span>
                    </h1>
                    <p className="text-lg sm:text-xl text-white/80 max-w-3xl mx-auto">
                        Empowering Africa's Future Through Innovation and Collaboration
                    </p>
                </div>
            </section>

            {/* Who We Are */}
            <section className="py-20 px-4">
                <div className="max-w-5xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Who We Are</h2>
                    <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
                        <p>
                            Zen Forward Africa is a pan-African organization dedicated to catalyzing sustainable development
                            through youth empowerment, business innovation, and climate action. We believe that Africa's
                            greatest resource is its young, creative, and entrepreneurial population.
                        </p>
                        <p>
                            Founded by a team of African innovators, business leaders, and climate advocates, Zen Forward Africa
                            serves as a bridge between aspiration and achievement, connecting young changemakers with the resources,
                            mentorship, and networks they need to transform their ideas into impactful ventures.
                        </p>
                    </div>
                </div>
            </section>

            {/* Mission & Impact */}
            <section className="py-20 px-4 bg-card/50">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">Mission & Impact</h2>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        <div className="text-center space-y-4">
                            <div className="w-16 h-16 mx-auto bg-primary/10 rounded-2xl flex items-center justify-center">
                                <Target className="w-8 h-8 text-primary" />
                            </div>
                            <h3 className="text-xl font-semibold">Our Mission</h3>
                            <p className="text-muted-foreground">
                                To accelerate Africa's sustainable development by empowering youth-led innovation
                            </p>
                        </div>

                        <div className="text-center space-y-4">
                            <div className="w-16 h-16 mx-auto bg-accent/10 rounded-2xl flex items-center justify-center">
                                <Heart className="w-8 h-8 text-accent" />
                            </div>
                            <h3 className="text-xl font-semibold">Core Values</h3>
                            <p className="text-muted-foreground">
                                Innovation, sustainability, collaboration, and youth empowerment at our core
                            </p>
                        </div>

                        <div className="text-center space-y-4">
                            <div className="w-16 h-16 mx-auto bg-secondary/10 rounded-2xl flex items-center justify-center">
                                <Award className="w-8 h-8 text-secondary-foreground" />
                            </div>
                            <h3 className="text-xl font-semibold">Impact Metrics</h3>
                            <p className="text-muted-foreground">
                                10,000+ youth empowered, 500+ startups supported, $2M+ in funding facilitated
                            </p>
                        </div>

                        <div className="text-center space-y-4">
                            <div className="w-16 h-16 mx-auto bg-muted rounded-2xl flex items-center justify-center">
                                <Users className="w-8 h-8 text-foreground" />
                            </div>
                            <h3 className="text-xl font-semibold">Our Approach</h3>
                            <p className="text-muted-foreground">
                                Holistic ecosystem building through convening, capacity building, and capital
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Leadership Team */}
            <section className="py-20 px-4">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">Leadership Team</h2>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {/* Placeholder for leadership profiles */}
                        {[1, 2, 3, 4, 5, 6].map((i) => (
                            <div key={i} className="group">
                                <div className="bg-card border border-border rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300">
                                    <div className="aspect-square bg-muted flex items-center justify-center">
                                        <Users className="w-16 h-16 text-muted-foreground" />
                                    </div>
                                    <div className="p-6">
                                        <h3 className="text-xl font-semibold mb-2">Leader Name</h3>
                                        <p className="text-accent font-medium mb-3">Position Title</p>
                                        <p className="text-sm text-muted-foreground">
                                            Brief bio and background information about this leadership team member.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Call to Action */}
            <section className="py-20 px-4 bg-card/50">
                <div className="max-w-4xl mx-auto text-center space-y-8">
                    <h2 className="text-3xl md:text-4xl font-bold">Join Our Movement</h2>
                    <p className="text-lg text-muted-foreground">
                        Whether you're a young innovator, business leader, or climate advocate,
                        there's a place for you in the Zen Forward Africa community.
                    </p>
                    <div className="flex flex-wrap justify-center gap-4">
                        <a
                            href="/event"
                            className="px-8 py-3 bg-accent text-accent-foreground rounded-full font-medium hover:bg-accent/90 transition-colors"
                        >
                            Attend AYBCIF 2026
                        </a>
                        <a
                            href="/contact"
                            className="px-8 py-3 border-2 border-primary text-primary rounded-full font-medium hover:bg-primary hover:text-primary-foreground transition-colors"
                        >
                            Get in Touch
                        </a>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    )
}
