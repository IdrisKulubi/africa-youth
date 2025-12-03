import Header from "@/components/sections/header"
import AboutSection from "@/components/sections/about-section"
import Footer from "@/components/sections/footer"
import { generateMetadata, SITE_CONFIG } from "@/lib/seo-utils"
import { Metadata } from "next"

export const metadata: Metadata = generateMetadata({
    title: "About the Forum",
    description: "Learn about AYBCIF - the Africa Youth, Business & Climate Innovation Forum. Bridging the gap between youth, business, and climate action to drive sustainable development across Africa.",
    keywords: [
        ...SITE_CONFIG.keywords,
        "Forum Mission",
        "Youth Empowerment",
        "Climate Change Africa",
        "Sustainable Business",
        "Youth Leadership Forum",
    ],
    canonical: `${SITE_CONFIG.url}/about-forum`,
})

export default function AboutForumPage() {
    return (
        <main className="min-h-screen">
            <Header />

            {/* Hero Section */}
            <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden pt-24">
                <div className="absolute inset-0 z-0">
                    <img src="/images/nairobi.png" alt="Forum Background" className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-b from-foreground/80 via-foreground/70 to-background" />
                </div>

                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
                        About the <span className="text-accent">Forum</span>
                    </h1>
                    <p className="text-lg sm:text-xl text-white/80 max-w-3xl mx-auto">
                        Bridging the gap between youth, business, and climate action
                    </p>
                </div>
            </section>

            {/* About Content */}
            <AboutSection />

            {/* Vision & Purpose Section */}
            <section className="py-20 px-4">
                <div className="max-w-7xl mx-auto">
                    <div className="grid md:grid-cols-2 gap-12">
                        <div className="space-y-6">
                            <h2 className="text-3xl md:text-4xl font-bold">Our Vision</h2>
                            <p className="text-lg text-muted-foreground leading-relaxed">
                                To create a platform where African youth can engage with business leaders and climate experts
                                to drive sustainable innovation and economic growth across the continent.
                            </p>
                        </div>
                        <div className="space-y-6">
                            <h2 className="text-3xl md:text-4xl font-bold">Our Purpose</h2>
                            <p className="text-lg text-muted-foreground leading-relaxed">
                                AYBCIF exists to empower the next generation of African leaders with the knowledge,
                                networks, and resources needed to build sustainable businesses that address climate challenges
                                while creating economic opportunities.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* The Missing Link Section */}
            <section className="py-20 px-4 bg-card/50">
                <div className="max-w-5xl mx-auto text-center space-y-8">
                    <h2 className="text-3xl md:text-4xl font-bold">
                        The Missing Link: <span className="text-accent">Youth × Business × Climate</span>
                    </h2>
                    <p className="text-lg text-muted-foreground leading-relaxed">
                        While youth are passionate about climate action and entrepreneurs are driving business innovation,
                        these forces rarely converge effectively. AYBCIF bridges this gap by creating a dynamic ecosystem
                        where young innovators meet established business leaders to co-create sustainable solutions.
                    </p>
                    <div className="grid md:grid-cols-3 gap-8 mt-12">
                        <div className="p-6 rounded-2xl bg-card border border-border">
                            <h3 className="text-xl font-semibold mb-3">Youth Energy</h3>
                            <p className="text-muted-foreground">
                                Fresh perspectives, digital fluency, and passion for change
                            </p>
                        </div>
                        <div className="p-6 rounded-2xl bg-card border border-border">
                            <h3 className="text-xl font-semibold mb-3">Business Expertise</h3>
                            <p className="text-muted-foreground">
                                Resources, experience, and market access for scaling solutions
                            </p>
                        </div>
                        <div className="p-6 rounded-2xl bg-card border border-border">
                            <h3 className="text-xl font-semibold mb-3">Climate Urgency</h3>
                            <p className="text-muted-foreground">
                                Actionable frameworks for sustainable growth and impact
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Background Section */}
            <section className="py-20 px-4">
                <div className="max-w-4xl mx-auto space-y-8">
                    <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Forum Background</h2>
                    <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
                        <p>
                            The Africa Youth, Business & Climate Innovation Forum (AYBCIF) was established in response
                            to the growing need for intergenerational collaboration in addressing Africa's most pressing
                            challenges: youth unemployment, economic development, and climate change.
                        </p>
                        <p>
                            Since its inception, AYBCIF has brought together thousands of young innovators, business leaders,
                            policymakers, and climate experts from across the continent and beyond. Our forums have catalyzed
                            partnerships, launched ventures, and influenced policy decisions that promote sustainable development.
                        </p>
                        <p>
                            The 2026 edition marks a significant milestone as we expand our focus to include more hands-on
                            innovation showcases, startup pitch competitions, and direct investment opportunities for
                            climate-focused ventures led by African youth.
                        </p>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    )
}
