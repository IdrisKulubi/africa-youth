import Header from "@/components/sections/header"
import Footer from "@/components/sections/footer"
import { Calendar, FileText, Image as ImageIcon } from "lucide-react"

export default function NewsPage() {
    return (
        <main className="min-h-screen">
            <Header />

            {/* Hero Section */}
            <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden pt-24">
                <div className="absolute inset-0 z-0">
                    <img src="/images/nairobi.png" alt="News Background" className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-b from-foreground/80 via-foreground/70 to-background" />
                </div>

                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
                        News & <span className="text-accent">Media</span>
                    </h1>
                    <p className="text-lg sm:text-xl text-white/80 max-w-3xl mx-auto">
                        Latest updates, press releases, and event highlights
                    </p>
                </div>
            </section>

            {/* Latest News */}
            <section className="py-20 px-4">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-bold mb-12">Latest Updates</h2>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[1, 2, 3, 4, 5, 6].map((i) => (
                            <article key={i} className="bg-card border border-border rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 group">
                                <div className="aspect-video bg-muted flex items-center justify-center">
                                    <ImageIcon className="w-12 h-12 text-muted-foreground" />
                                </div>
                                <div className="p-6 space-y-3">
                                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                        <Calendar className="w-4 h-4" />
                                        <span>December 3, 2025</span>
                                    </div>
                                    <h3 className="text-xl font-semibold group-hover:text-accent transition-colors">
                                        AYBCIF 2026 Registration Now Open
                                    </h3>
                                    <p className="text-muted-foreground">
                                        We're excited to announce that registration for AYBCIF 2026 is now live.
                                        Join us in Nairobi for three days of innovation...
                                    </p>
                                    <a href="#" className="inline-flex items-center text-accent font-medium hover:underline">
                                        Read more →
                                    </a>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            {/* Press Releases */}
            <section className="py-20 px-4 bg-card/50">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-bold mb-12">Press Releases</h2>

                    <div className="space-y-6">
                        {[1, 2, 3, 4].map((i) => (
                            <div key={i} className="bg-card border border-border rounded-2xl p-6 hover:shadow-lg transition-all duration-300">
                                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                                    <div className="flex-1 space-y-2">
                                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                            <FileText className="w-4 h-4" />
                                            <span>Press Release</span>
                                            <span>•</span>
                                            <span>November 15, 2025</span>
                                        </div>
                                        <h3 className="text-xl font-semibold">
                                            AYBCIF Announces Keynote Speakers for 2026 Forum
                                        </h3>
                                        <p className="text-muted-foreground">
                                            Zen Forward Africa reveals lineup of influential leaders joining AYBCIF 2026...
                                        </p>
                                    </div>
                                    <a
                                        href="#"
                                        className="px-6 py-3 bg-accent text-accent-foreground rounded-full font-medium hover:bg-accent/90 transition-colors whitespace-nowrap"
                                    >
                                        Download PDF
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Gallery */}
            <section className="py-20 px-4">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-bold mb-12">Event Gallery</h2>

                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                        {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
                            <div
                                key={i}
                                className="aspect-square bg-muted rounded-2xl overflow-hidden hover:scale-105 transition-transform duration-300 cursor-pointer flex items-center justify-center"
                            >
                                <ImageIcon className="w-12 h-12 text-muted-foreground" />
                            </div>
                        ))}
                    </div>

                    <div className="text-center mt-12">
                        <button className="px-8 py-3 border-2 border-primary text-primary rounded-full font-semibold hover:bg-primary hover:text-primary-foreground transition-colors">
                            View Full Gallery
                        </button>
                    </div>
                </div>
            </section>

            {/* Media Kit */}
            <section className="py-20 px-4 bg-card/50">
                <div className="max-w-4xl mx-auto text-center space-y-8">
                    <h2 className="text-3xl md:text-4xl font-bold">Media Kit</h2>
                    <p className="text-lg text-muted-foreground">
                        Download our official media kit containing logos, brand guidelines, fact sheets,
                        and high-resolution images for press and promotional use.
                    </p>
                    <div className="flex flex-wrap justify-center gap-4">
                        <button className="inline-flex items-center gap-2 px-8 py-4 bg-accent text-accent-foreground rounded-full font-semibold hover:bg-accent/90 transition-colors">
                            <FileText className="w-5 h-5" />
                            Download Media Kit
                        </button>
                        <button className="px-8 py-4 border-2 border-primary text-primary rounded-full font-semibold hover:bg-primary hover:text-primary-foreground transition-colors">
                            Brand Guidelines
                        </button>
                    </div>
                </div>
            </section>

            {/* Newsletter Signup */}
            <section className="py-20 px-4">
                <div className="max-w-4xl mx-auto text-center space-y-8">
                    <h2 className="text-3xl md:text-4xl font-bold">Stay Updated</h2>
                    <p className="text-lg text-muted-foreground">
                        Subscribe to our newsletter for the latest news, updates, and event announcements
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="flex-1 px-6 py-3 rounded-full border-2 border-border bg-background focus:outline-none focus:border-accent"
                        />
                        <button className="px-8 py-3 bg-accent text-accent-foreground rounded-full font-semibold hover:bg-accent/90 transition-colors">
                            Subscribe
                        </button>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    )
}
