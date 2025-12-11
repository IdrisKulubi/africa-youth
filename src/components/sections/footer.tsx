import Link from "next/link"
import { Leaf, Instagram, Linkedin, Twitter, Facebook, Youtube, ArrowUp } from "lucide-react"

const footerLinks = {
    quickLinks: [
        { label: "Home", href: "#" },
        { label: "About", href: "#about" },
        { label: "Programme", href: "#programme" },
        { label: "Registration", href: "#registration" },
    ],
    resources: [
        { label: "Speakers", href: "#speakers" },
        { label: "Sponsors", href: "#sponsors" },
    ],
    contact: [
        { label: "Contact Us", href: "#contact" },
        { label: "info@aybcif.org", href: "mailto:info@aybcif.org" },
        { label: "+254 768 006 969", href: "tel:+254 768 006 969" },
    ],
}

const socialLinks = [
    { icon: Instagram, label: "Instagram", href: "https://www.instagram.com/zen_forward_africa25" },
    { icon: Twitter, label: "X (Twitter)", href: "https://x.com/FowardZen78940" },
]

export default function Footer() {
    return (
        <footer className="bg-foreground text-background">
            {/* Main Footer */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12">
                    {/* Brand */}
                    <div className="col-span-2 md:col-span-1">
                        <Link href="#" className="flex items-center gap-2 mb-4">
                            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                                <Leaf className="w-5 h-5 text-primary-foreground" />
                            </div>
                            <span className="font-bold text-lg text-background">
                                AYBCIF <span className="text-accent">2026</span>
                            </span>
                        </Link>
                        <p className="text-background/70 text-sm mb-6 leading-relaxed">
                            Africa Youth, Business & Climate Innovation Forum. Empowering young people to drive sustainable futures.
                        </p>
                        <div className="flex gap-3">
                            {socialLinks.map((social) => (
                                <a
                                    key={social.label}
                                    href={social.href}
                                    className="w-9 h-9 bg-background/10 rounded-lg flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-colors"
                                    aria-label={social.label}
                                >
                                    <social.icon className="w-4 h-4" />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="font-semibold text-background mb-4">Quick Links</h4>
                        <ul className="space-y-2">
                            {footerLinks.quickLinks.map((link) => (
                                <li key={link.label}>
                                    <Link href={link.href} className="text-background/70 hover:text-accent transition-colors text-sm">
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Resources */}
                    <div>
                        <h4 className="font-semibold text-background mb-4">Resources</h4>
                        <ul className="space-y-2">
                            {footerLinks.resources.map((link) => (
                                <li key={link.label}>
                                    <Link href={link.href} className="text-background/70 hover:text-accent transition-colors text-sm">
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="font-semibold text-background mb-4">Contact</h4>
                        <ul className="space-y-2">
                            {footerLinks.contact.map((link) => (
                                <li key={link.label}>
                                    <Link href={link.href} className="text-background/70 hover:text-accent transition-colors text-sm">
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-background/10">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
                    <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                        <p className="text-background/60 text-sm text-center sm:text-left">
                            © 2026 AYBCIF. All rights reserved. Organized by Azenath Cherono Bor.
                        </p>
                        <div className="flex items-center gap-6 text-sm">
                            <Link href="#" className="text-background/60 hover:text-accent transition-colors">
                                Privacy Policy
                            </Link>
                            <Link href="#" className="text-background/60 hover:text-accent transition-colors">
                                Terms of Service
                            </Link>
                            <a
                                href="#"
                                className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center hover:bg-primary/90 transition-colors"
                                aria-label="Back to top"
                            >
                                <ArrowUp className="w-5 h-5 text-primary-foreground" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}
