import Header from "@/components/sections/header"
import Footer from "@/components/sections/footer"
import ContactSection from "@/components/sections/contact-section"
import { Mail, Phone, MapPin, Twitter, Instagram } from "lucide-react"
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

            {/* Hero Section */}
            <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden pt-24">
                <div className="absolute inset-0 z-0">
                    <img src="/images/nairobi.png" alt="Contact Background" className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-b from-foreground/80 via-foreground/70 to-background" />
                </div>

                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
                        Get in <span className="text-accent">Touch</span>
                    </h1>
                    <p className="text-lg sm:text-xl text-white/80 max-w-3xl mx-auto">
                        We'd love to hear from you. Reach out for partnerships, inquiries, or general information.
                    </p>
                </div>
            </section>

            {/* Contact Information */}
            <section className="py-20 px-4">
                <div className="max-w-7xl mx-auto">
                    <div className="grid md:grid-cols-3 gap-8 mb-20">
                        {/* Email */}
                        <div className="text-center space-y-4">
                            <div className="w-16 h-16 mx-auto bg-accent/10 rounded-2xl flex items-center justify-center">
                                <Mail className="w-8 h-8 text-accent" />
                            </div>
                            <h3 className="text-xl font-semibold">Email Us</h3>
                            <div className="space-y-2 text-muted-foreground">
                                <p>General Inquiries:</p>
                                <a href="mailto:info@zenforwardafrica.org" className="block text-accent hover:underline">
                                    info@zenforwardafrica.org
                                </a>
                                <p className="mt-4">Partnerships:</p>
                                <a href="mailto:partnerships@zenforwardafrica.org" className="block text-accent hover:underline">
                                    partnerships@zenforwardafrica.org
                                </a>
                            </div>
                        </div>

                        {/* Phone */}
                        <div className="text-center space-y-4">
                            <div className="w-16 h-16 mx-auto bg-accent/10 rounded-2xl flex items-center justify-center">
                                <Phone className="w-8 h-8 text-accent" />
                            </div>
                            <h3 className="text-xl font-semibold">Call Us</h3>
                            <div className="space-y-2 text-muted-foreground">
                                <p>Office Hours: Mon-Fri, 9AM-5PM EAT</p>
                                <a href="tel:+254123456789" className="block text-accent hover:underline text-lg font-medium">
                                    +254 123 456 789
                                </a>
                            </div>
                        </div>

                        {/* Location */}
                        <div className="text-center space-y-4">
                            <div className="w-16 h-16 mx-auto bg-accent/10 rounded-2xl flex items-center justify-center">
                                <MapPin className="w-8 h-8 text-accent" />
                            </div>
                            <h3 className="text-xl font-semibold">Visit Us</h3>
                            <div className="space-y-2 text-muted-foreground">
                                <p>Zen Forward Africa</p>
                                <p>Nairobi, Kenya</p>
                                <button className="mt-2 text-accent hover:underline font-medium">
                                    Get Directions →
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Social Media */}
                    <div className="text-center space-y-6">
                        <h3 className="text-2xl font-semibold">Follow Us</h3>
                        <div className="flex justify-center gap-4">
                            <a
                                href="https://www.instagram.com/zen_forward_africa25"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-12 h-12 bg-card border border-border rounded-full flex items-center justify-center hover:bg-accent hover:text-accent-foreground hover:border-accent transition-all duration-300"
                            >
                                <Instagram className="w-5 h-5" />
                            </a>
                            <a
                                href="https://x.com/FowardZen78940"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-12 h-12 bg-card border border-border rounded-full flex items-center justify-center hover:bg-accent hover:text-accent-foreground hover:border-accent transition-all duration-300"
                            >
                                <Twitter className="w-5 h-5" />
                            </a>
                            <a
                                href="https://www.tiktok.com/@zenforwardafrica0"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-12 h-12 bg-card border border-border rounded-full flex items-center justify-center hover:bg-accent hover:text-accent-foreground hover:border-accent transition-all duration-300"
                            >
                                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* Contact Form & Map */}
            <ContactSection />

            {/* Partnership Inquiry */}
            <section className="py-20 px-4 bg-card/50">
                <div className="max-w-3xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">Partnership Inquiry</h2>
                        <p className="text-lg text-muted-foreground">
                            Interested in partnering with AYBCIF? Fill out the form below and we'll get back to you shortly.
                        </p>
                    </div>

                    <form className="space-y-6">
                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label htmlFor="org-name" className="block text-sm font-medium">
                                    Organization Name *
                                </label>
                                <input
                                    type="text"
                                    id="org-name"
                                    required
                                    className="w-full px-4 py-3 rounded-xl border-2 border-border bg-background focus:outline-none focus:border-accent"
                                />
                            </div>
                            <div className="space-y-2">
                                <label htmlFor="contact-name" className="block text-sm font-medium">
                                    Contact Person *
                                </label>
                                <input
                                    type="text"
                                    id="contact-name"
                                    required
                                    className="w-full px-4 py-3 rounded-xl border-2 border-border bg-background focus:outline-none focus:border-accent"
                                />
                            </div>
                        </div>

                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label htmlFor="email" className="block text-sm font-medium">
                                    Email Address *
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    required
                                    className="w-full px-4 py-3 rounded-xl border-2 border-border bg-background focus:outline-none focus:border-accent"
                                />
                            </div>
                            <div className="space-y-2">
                                <label htmlFor="phone" className="block text-sm font-medium">
                                    Phone Number
                                </label>
                                <input
                                    type="tel"
                                    id="phone"
                                    className="w-full px-4 py-3 rounded-xl border-2 border-border bg-background focus:outline-none focus:border-accent"
                                />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label htmlFor="partnership-type" className="block text-sm font-medium">
                                Partnership Interest *
                            </label>
                            <select
                                id="partnership-type"
                                required
                                className="w-full px-4 py-3 rounded-xl border-2 border-border bg-background focus:outline-none focus:border-accent"
                            >
                                <option value="">Select partnership type</option>
                                <option value="platinum">Platinum Sponsor</option>
                                <option value="gold">Gold Sponsor</option>
                                <option value="silver">Silver Sponsor</option>
                                <option value="partner">Partner</option>
                                <option value="media">Media Partner</option>
                                <option value="other">Other</option>
                            </select>
                        </div>

                        <div className="space-y-2">
                            <label htmlFor="message" className="block text-sm font-medium">
                                Message *
                            </label>
                            <textarea
                                id="message"
                                required
                                rows={6}
                                placeholder="Tell us about your organization and partnership interests..."
                                className="w-full px-4 py-3 rounded-xl border-2 border-border bg-background focus:outline-none focus:border-accent resize-none"
                            />
                        </div>

                        <button
                            type="submit"
                            className="w-full px-8 py-4 bg-accent text-accent-foreground rounded-full font-semibold hover:bg-accent/90 transition-colors"
                        >
                            Submit Inquiry
                        </button>
                    </form>
                </div>
            </section>

            {/* FAQ Preview */}
            <section className="py-20 px-4">
                <div className="max-w-4xl mx-auto text-center space-y-8">
                    <h2 className="text-3xl md:text-4xl font-bold">Frequently Asked Questions</h2>
                    <p className="text-lg text-muted-foreground">
                        Have questions? Check out our FAQ section or reach out directly.
                    </p>
                    <a
                        href="/about-forum"
                        className="inline-block px-8 py-3 border-2 border-primary text-primary rounded-full font-semibold hover:bg-primary hover:text-primary-foreground transition-colors"
                    >
                        View FAQs
                    </a>
                </div>
            </section>

            <Footer />
        </main>
    )
}
