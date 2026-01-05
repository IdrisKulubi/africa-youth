"use client"

import { useEffect, useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { Target, CheckCircle, Medal, Users, Lightbulb, Eye, Handshake } from "@phosphor-icons/react"

// Register ScrollTrigger
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger)
}

const objectives = [
  "To inspire and equip youth with knowledge on entrepreneurship, innovation and climate action.",
  "To provide a platform for dialogue, mentorship and networking between youth, corporates, NGOs and policymakers.",
  "To raise awareness of the interconnection between business growth and environmental sustainability.",
  "To showcase youth-led innovations and green startups.",
]

const targetAudience = [
  "University & college students",
  "Young entrepreneurs and professionals",
  "Climate activists and innovators",
  "NGOs, corporates, and government agencies",
  "Media and development partners",
]

const outcomes = [
  "Strengthened youth knowledge and capacity in business and climate solutions",
  "Partnerships between youth, corporates, and NGOs for sustainable projects",
  "Practical takeaways for youth to launch or scale green businesses",
  "A stronger youth network engaged in climate advocacy and innovation",
]

export default function AboutSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const headerRef = useRef<HTMLDivElement>(null)
  const zenRef = useRef<HTMLDivElement>(null)
  const visionRef = useRef<HTMLDivElement>(null)
  const missionRef = useRef<HTMLDivElement>(null)
  const backgroundRef = useRef<HTMLDivElement>(null)
  const imageRef = useRef<HTMLDivElement>(null)
  const objectivesRef = useRef<HTMLDivElement>(null)
  const outcomesRef = useRef<HTMLDivElement>(null)
  const audienceRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (typeof window === "undefined") return

    const ctx = gsap.context(() => {
      // Header animation - elegant fade up
      if (headerRef.current) {
        gsap.fromTo(headerRef.current,
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: headerRef.current,
              start: "top 90%",
              once: true,
            },
          }
        )
      }

      // Zen Forward section - scale and fade
      if (zenRef.current) {
        gsap.fromTo(zenRef.current,
          { opacity: 0, scale: 0.95 },
          {
            opacity: 1,
            scale: 1,
            duration: 1,
            ease: "power2.out",
            scrollTrigger: {
              trigger: zenRef.current,
              start: "top 85%",
              once: true,
            },
          }
        )
      }

      // Vision card - slide from left with rotation
      if (visionRef.current) {
        gsap.fromTo(visionRef.current,
          { opacity: 0, x: -60, rotation: -2 },
          {
            opacity: 1,
            x: 0,
            rotation: 0,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: visionRef.current,
              start: "top 85%",
              once: true,
            },
          }
        )
      }

      // Mission card - slide from right with rotation
      if (missionRef.current) {
        gsap.fromTo(missionRef.current,
          { opacity: 0, x: 60, rotation: 2 },
          {
            opacity: 1,
            x: 0,
            rotation: 0,
            duration: 1,
            delay: 0.15,
            ease: "power3.out",
            scrollTrigger: {
              trigger: missionRef.current,
              start: "top 85%",
              once: true,
            },
          }
        )
      }

      // Background section - fade up
      if (backgroundRef.current) {
        gsap.fromTo(backgroundRef.current,
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: backgroundRef.current,
              start: "top 85%",
              once: true,
            },
          }
        )
      }

      // Image with scale reveal
      if (imageRef.current) {
        gsap.fromTo(imageRef.current,
          { opacity: 0, scale: 0.9, y: 30 },
          {
            opacity: 1,
            scale: 1,
            y: 0,
            duration: 1,
            ease: "power2.out",
            scrollTrigger: {
              trigger: imageRef.current,
              start: "top 90%",
              once: true,
            },
          }
        )
      }

      // Objectives - stagger children
      if (objectivesRef.current) {
        const items = objectivesRef.current.querySelectorAll("li")
        gsap.fromTo(items,
          { opacity: 0, x: -20 },
          {
            opacity: 1,
            x: 0,
            duration: 0.5,
            stagger: 0.1,
            ease: "power2.out",
            scrollTrigger: {
              trigger: objectivesRef.current,
              start: "top 85%",
              once: true,
            },
          }
        )
      }

      // Outcomes - stagger children
      if (outcomesRef.current) {
        const items = outcomesRef.current.querySelectorAll("li")
        gsap.fromTo(items,
          { opacity: 0, x: 20 },
          {
            opacity: 1,
            x: 0,
            duration: 0.5,
            stagger: 0.1,
            ease: "power2.out",
            scrollTrigger: {
              trigger: outcomesRef.current,
              start: "top 85%",
              once: true,
            },
          }
        )
      }

      // Audience tags - pop in with scale
      if (audienceRef.current) {
        const tags = audienceRef.current.querySelectorAll(".audience-tag")
        gsap.fromTo(tags,
          { opacity: 0, scale: 0.8 },
          {
            opacity: 1,
            scale: 1,
            duration: 0.4,
            stagger: 0.06,
            ease: "back.out(1.5)",
            scrollTrigger: {
              trigger: audienceRef.current,
              start: "top 90%",
              once: true,
            },
          }
        )
      }
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} id="about" className="py-20 bg-background relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute right-0 top-1/4 w-64 h-64 bg-accent/5 rounded-full blur-3xl -z-10" />
      <div className="absolute left-0 bottom-1/4 w-48 h-48 bg-primary/5 rounded-full blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div ref={headerRef} className="text-center mb-16">
          <span className="inline-block bg-primary/10 text-primary text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
            About the Forum
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Why <span className="text-primary">AYBCIF 2026</span> Matters
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Bridging the gap between youth potential and sustainable development opportunities across Africa.
          </p>
        </div>

        <div className="mb-20">
          <div ref={zenRef} className="text-center mb-10">
            <div className="inline-flex items-center justify-center p-3 bg-primary/10 rounded-full mb-4">
              <img src="/images/zen-logo.png" alt="Zen Forward Africa" className="w-8 h-8 object-contain" onError={(e) => { e.currentTarget.style.display = 'none' }} />
            </div>
            <h3 className="text-3xl font-bold text-foreground mb-2">Zen Forward Africa</h3>
            <p className="text-muted-foreground text-lg">The driving force behind AYBCIF</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Vision */}
            <div ref={visionRef} className="bg-gradient-to-br from-primary/10 to-secondary/10 rounded-3xl p-8 border border-primary/20 hover:shadow-xl hover:scale-[1.02] transition-all duration-300 group">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-primary rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Eye className="w-6 h-6 text-primary-foreground" weight="fill" />
                </div>
                <h4 className="text-xl font-bold text-foreground">Our Vision</h4>
              </div>
              <p className="text-muted-foreground leading-relaxed text-lg">
                A sustainable, innovative, and inclusive Africa powered by youth-driven solutions and forward-thinking
                partnerships.
              </p>
            </div>

            {/* Mission */}
            <div ref={missionRef} className="bg-gradient-to-br from-accent/10 to-primary/10 rounded-3xl p-8 border border-accent/20 hover:shadow-xl hover:scale-[1.02] transition-all duration-300 group">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-accent rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Lightbulb className="w-6 h-6 text-accent-foreground" weight="fill" />
                </div>
                <h4 className="text-xl font-bold text-foreground">Our Mission</h4>
              </div>
              <p className="text-muted-foreground leading-relaxed text-lg">
                To empower young people and communities across Africa through entrepreneurship, climate innovation,
                capacity-building, and strategic collaboration between youth, businesses, policymakers, and development
                partners.
              </p>
            </div>
          </div>
        </div>
        {/* End Zen Forward Africa Section */}

        {/* Background & Rationale */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <div ref={backgroundRef}>
            <h3 className="text-2xl font-bold text-foreground mb-4 flex items-center gap-3">
              <div className="w-10 h-10 bg-primary/10 text-primary rounded-lg flex items-center justify-center">
                <Target className="w-6 h-6" weight="duotone" />
              </div>
              Background & Rationale
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Kenya{"'"}s Youth are at the centre of shaping the country{"'"}s economic, social and environmental
              future. With over 70% of the population under 35, young people play a pivotal role in entrepreneurship,
              innovation and climate action.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              However, many young people lack access to platforms where they can connect with experts, policymakers,
              NGOs and the private sector. This forum will bridge that gap by creating a multi-stakeholder dialogue on
              how youth can be empowered to build businesses, drive green innovation and actively participate in climate
              solutions.
            </p>

            <div className="mt-8 bg-card rounded-xl p-6 border border-border">
              <h4 className="font-semibold text-foreground mb-4 flex items-center gap-2">
                <Handshake className="w-5 h-5 text-accent" weight="fill" />
                Organized In Partnership With
              </h4>
              <div className="flex flex-wrap gap-4 items-center">
                <span className="bg-muted px-4 py-2 rounded-lg font-medium text-sm">Nation Media Group</span>
                <span className="bg-muted px-4 py-2 rounded-lg font-medium text-sm">Zen Forward Africa</span>
                <span className="text-muted-foreground text-sm italic">+ Other Strategic Partners</span>
              </div>
            </div>

          </div>

          <div ref={imageRef} className="relative">
            <div className="absolute -top-4 -left-4 w-full h-full bg-primary/10 rounded-2xl" />
            <div className="absolute -bottom-4 -right-4 w-full h-full bg-accent/10 rounded-2xl" />
            <div className="bg-muted aspect-video rounded-2xl flex items-center justify-center relative z-10 overflow-hidden">
              <img
                src="/images/youth3.png"
                alt="Youth Innovation Workshop"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* Objectives & Outcomes Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div ref={objectivesRef} className="bg-card rounded-2xl p-8 border border-border shadow-sm">
            <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
              <CheckCircle className="w-6 h-6 text-secondary" weight="fill" />
              Our Objectives
            </h3>
            <ul className="space-y-4">
              {objectives.map((obj, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="w-6 h-6 bg-primary/10 text-primary rounded-full flex items-center justify-center text-sm font-semibold shrink-0 mt-0.5">
                    {i + 1}
                  </span>
                  <span className="text-muted-foreground text-sm">{obj}</span>
                </li>
              ))}
            </ul>
          </div>

          <div ref={outcomesRef} className="bg-card rounded-2xl p-8 border border-border shadow-sm">
            <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
              <Medal className="w-6 h-6 text-primary" weight="duotone" />
              Expected Outcomes
            </h3>
            <ul className="space-y-3">
              {outcomes.map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-sm text-muted-foreground">
                  <CheckCircle className="w-5 h-5 text-primary shrink-0" weight="fill" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Target Audience */}
        <div ref={audienceRef} className="bg-card rounded-2xl p-8 border border-border">
          <h3 className="text-xl font-bold text-foreground mb-6 flex items-center gap-3">
            <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
              <Users className="w-5 h-5 text-primary" />
            </div>
            Target Audience
          </h3>
          <div className="flex flex-wrap gap-4">
            {targetAudience.map((audience, i) => (
              <div key={i} className="audience-tag flex items-center gap-2 bg-background border border-border px-4 py-2 rounded-full hover:border-primary/50 transition-colors">
                <CheckCircle className="w-4 h-4 text-primary" weight="fill" />
                <span className="text-sm text-foreground">{audience}</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}
