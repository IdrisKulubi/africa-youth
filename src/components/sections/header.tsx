"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { ModeToggle } from "@/components/theme/mode-toggle"

const navItems = [
    { label: "Home", href: "/" },
    { label: "About Forum", href: "/about-forum" },
    { label: "About Us", href: "/about-zen-forward" },
    { label: "Event 2026", href: "/event" },
    { label: "Sponsorship", href: "/sponsorship" },
    { label: "Innovation Hub", href: "/innovation-hub" },
    { label: "News", href: "/news" },
    { label: "Contact", href: "/contact" },
]

export default function Header() {
    const [isScrolled, setIsScrolled] = useState(false)
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50)
        }
        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    return (
        <header
            className={cn(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
                isScrolled ? "bg-card/95 backdrop-blur-md shadow-lg" : "bg-transparent",
            )}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16 md:h-20">
                    {/* Logo - Top Left */}
                    <Link href="/" className="flex items-center gap-2">
                        <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center flex-shrink-0">
                            <span className="text-primary-foreground font-bold text-lg">ZF</span>
                        </div>
                        <div className="flex flex-col">
                            <span
                                className={cn(
                                    "font-bold text-sm leading-tight transition-colors",
                                    isScrolled ? "text-foreground" : "text-white",
                                )}
                            >
                                Zen Forward
                            </span>
                            <span
                                className={cn(
                                    "text-xs leading-tight transition-colors",
                                    isScrolled ? "text-muted-foreground" : "text-white/70",
                                )}
                            >
                                Africa
                            </span>
                        </div>
                    </Link>

                    {/* Desktop Navigation - Left Side */}
                    <nav className="hidden lg:flex items-center gap-1 ml-8">
                        {navItems.map((item) => (
                            <Link
                                key={item.label}
                                href={item.href}
                                className={cn(
                                    "px-3 py-2 text-sm font-medium rounded-lg transition-colors hover:bg-primary/10",
                                    isScrolled ? "text-foreground hover:text-primary" : "text-white/90 hover:text-white",
                                )}
                            >
                                {item.label}
                            </Link>
                        ))}
                    </nav>

                    {/* Center Spacer */}
                    <div className="flex-1" />

                    {/* CTA Buttons - Center Right */}
                    <div className="hidden md:flex items-center gap-3 mr-4">
                        <ModeToggle />
                        <Button
                            variant="outline"
                            size="sm"
                            className={cn(
                                "border-2 transition-colors",
                                isScrolled
                                    ? "border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                                    : "border-white text-white hover:bg-white hover:text-foreground",
                            )}
                            asChild
                        >
                            <Link href="/sponsorship">Become a Partner</Link>
                        </Button>
                        <Button size="sm" className="bg-accent text-accent-foreground hover:bg-accent/90" asChild>
                            <Link href="/event#registration">Register Now</Link>
                        </Button>
                    </div>

                    {/* Mobile Menu Button - Right Side on Mobile */}
                    <button
                        className="lg:hidden p-2"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        aria-label="Toggle menu"
                    >
                        {isMobileMenuOpen ? (
                            <X className={cn("w-6 h-6", isScrolled ? "text-foreground" : "text-white")} />
                        ) : (
                            <Menu className={cn("w-6 h-6", isScrolled ? "text-foreground" : "text-white")} />
                        )}
                    </button>
                </div>

                {/* Mobile Menu */}
                {isMobileMenuOpen && (
                    <div className="lg:hidden bg-card rounded-b-2xl shadow-lg py-4 px-4 absolute left-0 right-0 top-full">
                        <nav className="flex flex-col gap-1">
                            {navItems.map((item) => (
                                <Link
                                    key={item.label}
                                    href={item.href}
                                    className="px-4 py-3 text-foreground font-medium rounded-lg hover:bg-primary/10 transition-colors"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    {item.label}
                                </Link>
                            ))}
                            <div className="flex flex-col gap-2 mt-4 pt-4 border-t border-border">
                                <Button variant="outline" className="w-full border-primary text-primary bg-transparent" asChild>
                                    <Link href="/sponsorship">Become a Partner</Link>
                                </Button>
                                <Button className="w-full bg-accent text-accent-foreground" asChild>
                                    <Link href="/event#registration">Register Now</Link>
                                </Button>
                            </div>
                        </nav>
                    </div>
                )}
            </div>
        </header>
    )
}
