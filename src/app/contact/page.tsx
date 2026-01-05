import Header from "@/components/sections/header"
import Footer from "@/components/sections/footer"
import ContactSection from "@/components/sections/contact-section"
import { generateMetadata, SITE_CONFIG } from "@/lib/seo-utils"
import { Metadata } from "next"

export const metadata: Metadata = generateMetadata({
    title: "Contact Us",
    description: "Get in touch with Zen Forward Africa. Contact us for partnerships, sponsorship inquiries, media requests, or general information about AYBCIF 2026. Office hours: Mon-Fri, 9AM-5PM EAT. Located in Nairobi, Kenya.",
    keywords: [
        ...SITE_CONFIG.keywords,
        "Contact",
        "Get in Touch",
        "Partnership Inquiry",
        "Nairobi Office",
        "Contact Information",
    ],
    canonical: `${SITE_CONFIG.url}/contact`,
})

export default function ContactPage() {
    return (
        <main className="min-h-screen">
            <Header />

            {/* Hero Section - Compact */}
            <section className="relative min-h-[40vh] flex items-center justify-center overflow-hidden pt-24">
                <div className="absolute inset-0 z-0">
                    <img src="/images/nairobi.png" alt="Contact Background" className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-b from-foreground/80 via-foreground/70 to-background" />
                </div>

                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4">
                        Let&apos;s <span className="text-accent">Connect</span>
                    </h1>
                    <p className="text-lg sm:text-xl text-white/80 max-w-2xl mx-auto">
                        Partnerships, inquiries, or just saying hello — we&apos;re here to help.
                    </p>
                </div>
            </section>

            {/* Quick Contact Options */}
            <section className="py-12 px-4 bg-background -mt-8 relative z-20">
                <div className="max-w-4xl mx-auto">
                    <div className="grid sm:grid-cols-3 gap-4">
                        <a
                            href="mailto:zenforwardafrica9@gmail.com"
                            className="flex items-center gap-4 p-5 bg-card rounded-2xl border border-border hover:border-primary/50 hover:shadow-lg transition-all group"
                        >
                            <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                                <svg className="w-5 h-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                            </div>
                            <div>
                                <span className="block text-sm text-muted-foreground">Email</span>
                                <span className="font-medium text-foreground">zenforwardafrica9@gmail.com</span>
                            </div>
                        </a>

                        <a
                            href="tel:+254768006969"
                            className="flex items-center gap-4 p-5 bg-card rounded-2xl border border-border hover:border-primary/50 hover:shadow-lg transition-all group"
                        >
                            <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                                <svg className="w-5 h-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                </svg>
                            </div>
                            <div>
                                <span className="block text-sm text-muted-foreground">Phone / WhatsApp</span>
                                <span className="font-medium text-foreground">+254 768 006 969</span>
                            </div>
                        </a>

                        <div className="flex items-center gap-4 p-5 bg-card rounded-2xl border border-border">
                            <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                                <svg className="w-5 h-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                </svg>
                            </div>
                            <div>
                                <span className="block text-sm text-muted-foreground">Event Location</span>
                                <span className="font-medium text-foreground">Nairobi, Kenya</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Main Contact Form */}
            <ContactSection />

            {/* Social Links */}
            <section className="py-16 px-4 bg-card/50">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-2xl font-bold mb-6">Follow Our Journey</h2>
                    <div className="flex justify-center gap-4">
                        <a
                            href="https://www.instagram.com/zen_forward_africa25"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-12 h-12 bg-card border border-border rounded-full flex items-center justify-center hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all"
                            aria-label="Instagram"
                        >
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                            </svg>
                        </a>
                        <a
                            href="https://x.com/FowardZen78940"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-12 h-12 bg-card border border-border rounded-full flex items-center justify-center hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all"
                            aria-label="X (Twitter)"
                        >
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                            </svg>
                        </a>
                        <a
                            href="https://www.tiktok.com/@zenforwardafrica0"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-12 h-12 bg-card border border-border rounded-full flex items-center justify-center hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all"
                            aria-label="TikTok"
                        >
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
                            </svg>
                        </a>
                    </div>
                    <p className="mt-6 text-muted-foreground">
                        Stay updated on AYBCIF 2026 news and announcements
                    </p>
                </div>
            </section>

            <Footer />
        </main>
    )
}

