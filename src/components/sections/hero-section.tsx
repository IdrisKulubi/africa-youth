"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Calendar, MapPin, ArrowRight } from "lucide-react"
import Link from "next/link"

export default function HeroSection() {
    const [timeLeft, setTimeLeft] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
    })

    useEffect(() => {
        const targetDate = new Date("2026-05-27T09:00:00").getTime()

        const interval = setInterval(() => {
            const now = new Date().getTime()
            const difference = targetDate - now

            if (difference > 0) {
                setTimeLeft({
                    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                    hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
                    minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
                    seconds: Math.floor((difference % (1000 * 60)) / 1000),
                })
            }
        }, 1000)

        return () => clearInterval(interval)
    }, [])

    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
            {/* Background Image with Overlay */}
            <div className="absolute inset-0 z-0">
                <img src="/images/nairobi.png" alt="Nairobi Skyline" className="w-full h-full object-cover" />
                {/* Dark mode friendly overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/80 dark:from-black/85 dark:via-black/75 dark:to-black/90" />
            </div>

            {/* Floating Elements */}
            <div className="absolute top-20 left-10 w-32 h-32 bg-primary/20 rounded-full blur-3xl animate-pulse" />
            <div className="absolute bottom-40 right-10 w-48 h-48 bg-secondary/20 rounded-full blur-3xl animate-pulse delay-1000" />
            <div className="absolute top-1/2 right-1/4 w-24 h-24 bg-accent/20 rounded-full blur-2xl animate-pulse delay-500" />

            {/* Content */}
            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-24 pb-16">
                {/* Badge */}
                <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-4 py-2 mb-8">
                    <span className="w-2 h-2 bg-accent rounded-full animate-pulse" />
                    <span className="text-white/90 text-sm font-medium">Registration Now Open</span>
                </div>

                {/* Title */}
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 text-balance leading-tight">
                    Africa Youth, Business &<br />
                    <span className="text-accent">Climate Innovation</span> Forum
                </h1>

                {/* Theme */}
                <p className="text-lg sm:text-xl md:text-2xl text-white/80 max-w-4xl mx-auto mb-8 text-pretty">
                    {'"Sustainable Futures: How Young People Can Drive Business Growth, Innovation, and Climate Action."'}
                </p>

                {/* Date & Location */}
                <div className="flex flex-wrap items-center justify-center gap-6 mb-10">
                    <div className="flex items-center gap-2 bg-white/10 backdrop-blur-md rounded-full px-5 py-2.5">
                        <Calendar className="w-5 h-5 text-accent" />
                        <span className="text-white font-medium">27th - 29th May 2026</span>
                    </div>
                    <div className="flex items-center gap-2 bg-white/10 backdrop-blur-md rounded-full px-5 py-2.5">
                        <MapPin className="w-5 h-5 text-accent" />
                        <span className="text-white font-medium">Nairobi, Kenya</span>
                    </div>
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-wrap items-center justify-center gap-4 mb-16">
                    <Button
                        size="lg"
                        className="bg-accent text-accent-foreground hover:bg-accent/90 text-lg px-8 py-6 rounded-full"
                        asChild
                    >
                        <Link href="#registration">
                            Register Now <ArrowRight className="ml-2 w-5 h-5" />
                        </Link>
                    </Button>
                    <Button
                        size="lg"
                        variant="outline"
                        className="border-2 border-white text-white hover:bg-white hover:text-foreground text-lg px-8 py-6 rounded-full bg-transparent"
                        asChild
                    >
                        <Link href="#sponsors">Become a Partner</Link>
                    </Button>
                </div>

                {/* Countdown Timer */}
                <div className="mb-8">
                    <p className="text-white/60 text-sm uppercase tracking-wider mb-4">Countdown to AYBCIF 2026</p>
                    <div className="flex flex-wrap items-center justify-center gap-4">
                        {[
                            { value: timeLeft.days, label: "Days" },
                            { value: timeLeft.hours, label: "Hours" },
                            { value: timeLeft.minutes, label: "Minutes" },
                            { value: timeLeft.seconds, label: "Seconds" },
                        ].map((item) => (
                            <div
                                key={item.label}
                                className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl px-6 py-4 min-w-[90px]"
                            >
                                <span className="block text-3xl sm:text-4xl font-bold text-white">
                                    {item.value.toString().padStart(2, "0")}
                                </span>
                                <span className="text-white/60 text-xs uppercase tracking-wider">{item.label}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
                <div className="w-6 h-10 border-2 border-white/40 rounded-full flex justify-center">
                    <div className="w-1.5 h-3 bg-white/60 rounded-full mt-2 animate-bounce" />
                </div>
            </div>
        </section>
    )
}
