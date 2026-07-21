import Header from "@/components/sections/header"
import Footer from "@/components/sections/footer"
import ProgrammeSection from "@/components/sections/programme-section"

import RegistrationSection from "@/components/sections/registration-section"
import InnovationHubSection from "@/components/sections/innovation-hub-section"
import { Calendar, MapPin, Users } from "lucide-react"
import { generateMetadata, generateEventSchema, SITE_CONFIG } from "@/lib/seo-utils"
import { Metadata } from "next"

export const metadata: Metadata = generateMetadata({
    title: "AYBCIF 2026 Event - Sustainable Futures",
    description: "Join AYBCIF 2026 from September 24-25 as a webinar. Experience two days of keynotes, workshops, innovation showcases, and networking with 2,000+ attendees including youth leaders, business experts, and climate champions.",
    keywords: [
        ...SITE_CONFIG.keywords,
        "AYBCIF 2026",
        "Webinar",
        "September 2026",
        "Climate Forum",
        "Youth Conference",
        "Business Summit",
        "Innovation Showcase",
    ],
    canonical: `${SITE_CONFIG.url}/event`,
})


export default function EventPage() {
    const eventSchema = generateEventSchema()

    return (
        <main className="min-h-screen">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(eventSchema) }}
            />
            <Header />

            {/* Hero Section */}
            <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden pt-24">
                <div className="absolute inset-0 z-0">
                    <img src="/images/nairobi.png" alt="AYBCIF 2026" className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-b from-foreground/90 via-foreground/80 to-background" />
                </div>

                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-8">
                        <span className="w-2 h-2 bg-accent rounded-full animate-pulse" />
                        <span className="text-white/90 text-sm font-medium">AYBCIF 2026</span>
                    </div>

                    <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
                        Sustainable Futures
                    </h1>
                    <p className="text-xl sm:text-2xl md:text-3xl text-accent font-semibold mb-8">
                        How Young People Can Drive Business Growth, Innovation, and Climate Action
                    </p>
                    <p className="text-lg sm:text-xl text-white/80 max-w-4xl mx-auto mb-12">
                        Organized by Zenforward Africa , in collaboration with Partners
                    </p>

                    {/* Event Details Cards */}
                    <div className="flex flex-wrap items-center justify-center gap-6">
                        <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-2xl px-6 py-4">
                            <Calendar className="w-6 h-6 text-accent" />
                            <div className="text-left">
                                <p className="text-white/60 text-sm">Date</p>
                                <p className="text-white font-semibold">24-25 September 2026</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-2xl px-6 py-4">
                            <MapPin className="w-6 h-6 text-accent" />
                            <div className="text-left">
                                <p className="text-white/60 text-sm">Location</p>
                                <p className="text-white font-semibold">Webinar</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-2xl px-6 py-4">
                            <Users className="w-6 h-6 text-accent" />
                            <div className="text-left">
                                <p className="text-white/60 text-sm">Expected</p>
                                <p className="text-white font-semibold">2,000+ Attendees</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Event Theme Section */}
            <section className="py-20 px-4">
                <div className="max-w-5xl mx-auto text-center space-y-8">
                    <h2 className="text-3xl md:text-4xl font-bold">Event Theme</h2>
                    <p className="text-xl text-muted-foreground leading-relaxed">
                        AYBCIF 2026 focuses on the intersection of youth innovation, business development, and climate action.
                        We're bringing together Africa's brightest minds to explore how sustainable business models can
                        drive economic growth while addressing climate challenges.
                    </p>
                    <div className="grid md:grid-cols-3 gap-8 mt-12">
                        <div className="p-6 rounded-2xl bg-card border border-border">
                            <h3 className="text-2xl font-bold text-accent mb-3">Day 1</h3>
                            <h4 className="text-lg font-semibold mb-2">Youth Leadership</h4>
                            <p className="text-muted-foreground">
                                Keynotes, panel discussions, and workshops on youth-led innovation
                            </p>
                        </div>
                        <div className="p-6 rounded-2xl bg-card border border-border">
                            <h3 className="text-2xl font-bold text-accent mb-3">Day 2</h3>
                            <h4 className="text-lg font-semibold mb-2">Business & Climate</h4>
                            <p className="text-muted-foreground">
                                Sustainable business models, investment opportunities, and partnerships
                            </p>
                        </div>
                        <div className="p-6 rounded-2xl bg-card border border-border">
                            <h3 className="text-2xl font-bold text-accent mb-3">Day 3</h3>
                            <h4 className="text-lg font-semibold mb-2">Innovation Showcase</h4>
                            <p className="text-muted-foreground">
                                Startup pitches, networking, and closing gala dinner
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Programme Section */}
            <ProgrammeSection />

            {/* Speakers Section */}


            {/* Participating Startups */}
            <InnovationHubSection />

            {/* Venue Information */}
            <section className="py-20 px-4 bg-card/50">
                <div className="max-w-7xl mx-auto">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div className="space-y-6">
                            <h2 className="text-3xl md:text-4xl font-bold">Venue</h2>
                            <p className="text-lg text-muted-foreground">
                                AYBCIF 2026 will be hosted as a webinar, bringing youth leaders, business experts, and climate
                                champions together online for keynotes, workshops, and networking — accessible from anywhere.
                            </p>
                            <div className="space-y-3">
                                <div className="flex items-start gap-3">
                                    <MapPin className="w-5 h-5 text-accent mt-1" />
                                    <div>
                                        <p className="font-semibold">Format</p>
                                        <p className="text-muted-foreground">Webinar</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3">
                                    <Calendar className="w-5 h-5 text-accent mt-1" />
                                    <div>
                                        <p className="font-semibold">Dates</p>
                                        <p className="text-muted-foreground">24th - 25th September 2026</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="aspect-video rounded-2xl bg-muted flex items-center justify-center">
                            <MapPin className="w-16 h-16 text-muted-foreground" />
                        </div>
                    </div>
                </div>
            </section>

            {/* Registration Section */}
            <RegistrationSection />

            <Footer />
        </main>
    )
}
