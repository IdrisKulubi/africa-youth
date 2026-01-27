"use client"

import { useEffect, useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { Button } from "@/components/ui/button"
import { 
  TrophyIcon, 
  RocketLaunchIcon, 
  LightbulbIcon, 
  SparkleIcon,
  ArrowRightIcon,
  CurrencyCircleDollarIcon
} from "@phosphor-icons/react"
import Link from "next/link"

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger)
}

const prizes = [
  {
    place: "1st",
    amount: "200,000",
    color: "from-amber-400 to-yellow-500",
    shadow: "shadow-amber-500/30",
    icon: "🥇",
    label: "Grand Prize",
  },
  {
    place: "2nd",
    amount: "100,000",
    color: "from-slate-300 to-slate-400",
    shadow: "shadow-slate-400/30",
    icon: "🥈",
    label: "Runner Up",
  },
  {
    place: "3rd",
    amount: "50,000",
    color: "from-amber-600 to-orange-700",
    shadow: "shadow-orange-500/30",
    icon: "🥉",
    label: "Second Runner Up",
  },
]

export default function ContestSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const titleRef = useRef<HTMLDivElement>(null)
  const cardsRef = useRef<HTMLDivElement>(null)
  const prizesRef = useRef<HTMLDivElement>(null)
  const ctaRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (typeof window === "undefined") return

    const ctx = gsap.context(() => {
      // Title animation
      if (titleRef.current) {
        gsap.fromTo(titleRef.current.children, 
          { opacity: 0, y: 60 },
          {
            opacity: 1,
            y: 0,
            stagger: 0.15,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: titleRef.current,
              start: "top 85%",
              toggleActions: "play none none none",
            },
          }
        )
      }

      // Feature cards animation
      if (cardsRef.current) {
        gsap.fromTo(cardsRef.current.children, 
          { opacity: 0, y: 80, scale: 0.9 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            stagger: 0.1,
            duration: 0.8,
            ease: "back.out(1.7)",
            scrollTrigger: {
              trigger: cardsRef.current,
              start: "top 80%",
              toggleActions: "play none none none",
            },
          }
        )
      }

      // Prize cards animation with stagger
      if (prizesRef.current) {
        gsap.fromTo(prizesRef.current.children, 
          { opacity: 0, y: 100, rotateX: -15 },
          {
            opacity: 1,
            y: 0,
            rotateX: 0,
            stagger: 0.2,
            duration: 1,
            ease: "power4.out",
            scrollTrigger: {
              trigger: prizesRef.current,
              start: "top 75%",
              toggleActions: "play none none none",
            },
          }
        )
      }

      // CTA animation
      if (ctaRef.current) {
        gsap.fromTo(ctaRef.current, 
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: ctaRef.current,
              start: "top 90%",
              toggleActions: "play none none none",
            },
        })
      }
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section 
      ref={sectionRef} 
      id="contest" 
      className="relative py-24 overflow-hidden bg-gradient-to-b from-background via-primary/5 to-background"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-radial from-primary/5 to-transparent rounded-full" />
        
        {/* Floating sparkles */}
        <SparkleIcon className="absolute top-32 right-20 w-8 h-8 text-amber-400/30 animate-bounce" />
        <SparkleIcon className="absolute bottom-40 left-20 w-6 h-6 text-primary/30 animate-bounce delay-500" />
        <SparkleIcon className="absolute top-1/2 right-32 w-5 h-5 text-accent/30 animate-bounce delay-700" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div ref={titleRef} className="text-center mb-16">
          <span className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-500/10 to-orange-500/10 border border-amber-500/20 text-amber-600 dark:text-amber-400 text-sm font-semibold px-4 py-2 rounded-full mb-6">
            <TrophyIcon className="w-4 h-4" weight="fill" />
            Startup Pitch Contest
          </span>
          
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6">
            Got a{" "}
            <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
              Winning Idea?
            </span>
          </h2>
          
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Pitch your startup idea at AYBCIF 2026 and compete for a chance to win 
            <span className="font-bold text-foreground"> KES 350,000</span> in total prizes! 
            Whether you&apos;re solving climate challenges, driving innovation, or building the next big thing — 
            this is your stage.
          </p>
        </div>

        {/* Feature Cards */}
        <div ref={cardsRef} className="grid md:grid-cols-3 gap-6 mb-16">
          <div className="group bg-card/50 backdrop-blur-sm border border-border hover:border-primary/50 rounded-2xl p-6 transition-all duration-300 hover:shadow-xl hover:shadow-primary/10 hover:-translate-y-1">
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center mb-4 shadow-lg shadow-blue-500/20 group-hover:scale-110 transition-transform">
              <LightbulbIcon className="w-7 h-7 text-white" weight="fill" />
            </div>
            <h3 className="text-xl font-bold text-foreground mb-2">Any Startup Idea</h3>
            <p className="text-muted-foreground">
              From tech to agriculture, climate solutions to fintech — all innovative ideas are welcome.
            </p>
          </div>

          <div className="group bg-card/50 backdrop-blur-sm border border-border hover:border-primary/50 rounded-2xl p-6 transition-all duration-300 hover:shadow-xl hover:shadow-primary/10 hover:-translate-y-1">
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-violet-500 to-purple-600 flex items-center justify-center mb-4 shadow-lg shadow-violet-500/20 group-hover:scale-110 transition-transform">
              <RocketLaunchIcon className="w-7 h-7 text-white" weight="fill" />
            </div>
            <h3 className="text-xl font-bold text-foreground mb-2">5-Minute Pitch</h3>
            <p className="text-muted-foreground">
              Present your vision to industry experts and investors. Make every second count!
            </p>
          </div>

          <div className="group bg-card/50 backdrop-blur-sm border border-border hover:border-primary/50 rounded-2xl p-6 transition-all duration-300 hover:shadow-xl hover:shadow-primary/10 hover:-translate-y-1">
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center mb-4 shadow-lg shadow-emerald-500/20 group-hover:scale-110 transition-transform">
              <CurrencyCircleDollarIcon className="w-7 h-7 text-white" weight="fill" />
            </div>
            <h3 className="text-xl font-bold text-foreground mb-2">Win Big</h3>
            <p className="text-muted-foreground">
              Walk away with cash prizes, mentorship, and connections to accelerate your startup journey.
            </p>
          </div>
        </div>

        {/* Prize Cards */}
        <div className="mb-16">
          <h3 className="text-center text-2xl font-bold text-foreground mb-8">
            <TrophyIcon className="inline-block w-6 h-6 text-amber-500 mr-2" weight="fill" />
            Prize Pool
          </h3>
          
          <div ref={prizesRef} className="grid sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {prizes.map((prize, index) => (
              <div 
                key={prize.place}
                className={`relative bg-card border border-border rounded-3xl p-6 text-center transition-all duration-500 hover:scale-105 ${
                  index === 0 ? 'sm:-mt-4 sm:mb-4' : ''
                }`}
              >
                {/* Glow effect for 1st place */}
                {index === 0 && (
                  <div className="absolute -inset-1 bg-gradient-to-r from-amber-400 via-yellow-500 to-amber-400 rounded-3xl blur-lg opacity-30 animate-pulse" />
                )}
                
                <div className={`relative bg-card rounded-3xl p-6 ${index === 0 ? 'border-2 border-amber-500/50' : ''}`}>
                  {/* Medal icon */}
                  <div className="text-5xl mb-3">{prize.icon}</div>
                  
                  {/* Place badge */}
                  <div className={`inline-block bg-gradient-to-r ${prize.color} text-white text-xs font-bold px-3 py-1 rounded-full mb-3 ${prize.shadow} shadow-lg`}>
                    {prize.label}
                  </div>
                  
                  {/* Prize amount */}
                  <div className="mb-2">
                    <span className="text-sm text-muted-foreground">KES</span>
                    <div className={`text-4xl font-black bg-gradient-to-r ${prize.color} bg-clip-text text-transparent`}>
                      {prize.amount}
                    </div>
                  </div>
                  
                  <p className="text-sm text-muted-foreground">{prize.place} Place Winner</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div ref={ctaRef} className="text-center">
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10 border border-primary/20 rounded-2xl p-8">
            <div className="text-left">
              <h4 className="text-xl font-bold text-foreground mb-1">Ready to pitch your idea?</h4>
              <p className="text-muted-foreground">Register as a contestant and secure your spot.</p>
            </div>
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-primary to-accent hover:opacity-90 text-white px-8 py-6 rounded-full shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 transition-all whitespace-nowrap"
              asChild
            >
              <Link href="#registration">
                Register as Contestant <ArrowRightIcon className="ml-2 w-5 h-5" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
