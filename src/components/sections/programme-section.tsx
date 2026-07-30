"use client"

import { useEffect, useRef, useState } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { ClockIcon, CoffeeIcon, UsersIcon, MicrophoneIcon } from "@phosphor-icons/react"
import { cn } from "@/lib/utils"

// Register ScrollTrigger
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger)
}

const days = [
  { id: "day1", label: "Day 1 - Sep 24" },
  { id: "day2", label: "Day 2 - Sep 25" },
]

const programmeData = {
  day1: [
    {
      time: "08:45 - 09:00",
      title: "Virtual Lobby Opens",
      description: "Join the webinar platform and connect with fellow participants",
      icon: CoffeeIcon,
      type: "break",
    },
    {
      time: "09:00 - 09:20",
      title: "Opening Ceremony",
      description: "Welcome remarks by Chair AYBCIF. Overview of Zen Forward Africa and AYBCIF Vision.",
      icon: MicrophoneIcon,
      type: "session",
    },
    {
      time: "09:20 - 09:40",
      title: "Keynote Address",
      description: "Positioning Youth at the Centre of Africa's Sustainable Economic Transition. (Govt Rep & UN Partner)",
      icon: MicrophoneIcon,
      type: "session",
    },
    {
      time: "10:00 - 11:00",
      title: "High-Level Panel 1: Policy Dialogue",
      description: "Youth, Business & Climate: Shaping Africa's New Economic Frontier. (UN experts, Policymakers, Private sector)",
      icon: UsersIcon,
      type: "panel",
    },
    {
      time: "11:00 - 11:15",
      title: "Short Break",
      description: "",
      icon: CoffeeIcon,
      type: "break",
    },
    {
      time: "11:15 - 12:30",
      title: "Panel II: Climate Finance",
      description: "Climate Finance, Startup Capital & the Path to Green Entrepreneurship",
      icon: UsersIcon,
      type: "panel",
    },
    {
      time: "12:30 - 13:30",
      title: "Break & Virtual Networking",
      description: "Optional breakout rooms for informal connections",
      icon: CoffeeIcon,
      type: "break",
    },
    {
      time: "13:30 - 15:00",
      title: "Breakout Sessions",
      description: "Green Tech, Agri-Tech, Circular Economy (Parallel Tracks)",
      icon: UsersIcon,
      type: "workshop",
    },
    {
      time: "15:00 - 16:00",
      title: "Youth Leadership Roundtable",
      description: "Climate governance, policy influence and youth participation",
      icon: UsersIcon,
      type: "session",
    },
    {
      time: "16:00 - 17:00",
      title: "Virtual Networking Session",
      description: "Connect with investors, mentors, and fellow innovators online",
      icon: UsersIcon,
      type: "session",
    },
  ],
  day2: [
    {
      time: "08:45 - 09:00",
      title: "Virtual Lobby Opens",
      description: "",
      icon: CoffeeIcon,
      type: "break",
    },
    {
      time: "09:00 - 09:30",
      title: "Keynote Address II",
      description: "Scaling Youth-Led Climate Solutions Across Africa",
      icon: MicrophoneIcon,
      type: "session",
    },
    {
      time: "09:30 - 10:30",
      title: "Panel III: Youth & Business Innovation",
      description: "Entrepreneurship in the Green Economy",
      icon: UsersIcon,
      type: "panel",
    },
    {
      time: "10:30 - 11:00",
      title: "Short Break",
      description: "",
      icon: CoffeeIcon,
      type: "break",
    },
    {
      time: "11:00 - 12:30",
      title: "Skill Building Workshops",
      description: "Climate Storytelling, Fundraising, Market Access (Parallel Tracks)",
      icon: UsersIcon,
      type: "workshop",
    },
    {
      time: "12:30 - 13:30",
      title: "Break & Virtual Networking",
      description: "",
      icon: CoffeeIcon,
      type: "break",
    },
    {
      time: "13:30 - 15:00",
      title: "Panel IV: Partnerships & Investment",
      description: "Building cross-sector alliances for climate action and youth enterprise",
      icon: UsersIcon,
      type: "panel",
    },
    {
      time: "15:00 - 16:00",
      title: "Closing Ceremony",
      description: "Key takeaways, commitments, and next steps for participants",
      icon: MicrophoneIcon,
      type: "session",
    },
  ],
}

const typeColors: Record<string, string> = {
  break: "bg-muted text-muted-foreground",
  session: "bg-primary/10 text-primary",
  panel: "bg-secondary/20 text-secondary-foreground",
  workshop: "bg-accent/10 text-accent",
}

export default function ProgrammeSection() {
  const [selectedDay, setSelectedDay] = useState("day1")
  const sectionRef = useRef<HTMLElement>(null)
  const headerRef = useRef<HTMLDivElement>(null)
  const tabsRef = useRef<HTMLDivElement>(null)
  const timelineRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (typeof window === "undefined") return

    const ctx = gsap.context(() => {
      // Header animation
      if (headerRef.current) {
        gsap.from(headerRef.current, {
          opacity: 0,
          y: 50,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: headerRef.current,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        })
      }

      // Tabs animation
      if (tabsRef.current) {
        gsap.from(tabsRef.current, {
          opacity: 0,
          y: 30,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: tabsRef.current,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        })
      }
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  // Animate timeline items when day changes
  useEffect(() => {
    if (typeof window === "undefined" || !timelineRef.current) return

    const items = timelineRef.current.querySelectorAll(".timeline-item")
    gsap.fromTo(
      items,
      { opacity: 0, x: -30 },
      {
        opacity: 1,
        x: 0,
        duration: 0.5,
        stagger: 0.08,
        ease: "power2.out",
      }
    )
  }, [selectedDay])

  const currentProgramme = programmeData[selectedDay as keyof typeof programmeData]

  return (
    <section ref={sectionRef} id="programme" className="py-20 bg-background relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute left-0 top-1/3 w-72 h-72 bg-primary/5 rounded-full blur-3xl -z-10" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div ref={headerRef} className="text-center mb-12">
          <span className="inline-block bg-primary/10 text-primary text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
            Event Schedule
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Forum <span className="text-primary">Programme</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Two days of online sessions — keynotes, panels, workshops, and virtual networking.
          </p>
        </div>

        {/* Day Tabs */}
        <div ref={tabsRef} className="flex justify-center gap-2 mb-10">
          {days.map((day) => (
            <button
              key={day.id}
              onClick={() => setSelectedDay(day.id)}
              className={cn(
                "px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300",
                selectedDay === day.id
                  ? "bg-primary text-primary-foreground shadow-lg shadow-primary/25"
                  : "bg-card text-muted-foreground hover:bg-primary/10 hover:text-primary border border-border"
              )}
            >
              {day.label}
            </button>
          ))}
        </div>

        {/* Timeline */}
        <div ref={timelineRef} className="relative">
          {/* Timeline Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-border md:-translate-x-1/2" />

          <div className="space-y-6">
            {currentProgramme.map((item, index) => {
              const IconComponent = item.icon
              const isEven = index % 2 === 0

              return (
                <div
                  key={index}
                  className={cn(
                    "timeline-item relative flex items-start gap-4 md:gap-8",
                    "md:even:flex-row-reverse"
                  )}
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-4 md:left-1/2 w-3 h-3 bg-primary rounded-full md:-translate-x-1/2 z-10 ring-4 ring-background" />

                  {/* Content Card */}
                  <div
                    className={cn(
                      "ml-10 md:ml-0 md:w-[calc(50%-2rem)] bg-card rounded-xl p-4 border border-border shadow-sm hover:shadow-md transition-shadow",
                      isEven ? "md:mr-auto" : "md:ml-auto"
                    )}
                  >
                    <div className="flex items-start gap-3">
                      <div className={cn("p-2 rounded-lg shrink-0", typeColors[item.type])}>
                        <IconComponent className="w-4 h-4" weight="fill" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-1">
                          <ClockIcon className="w-3.5 h-3.5 text-muted-foreground" />
                          <span className="text-xs font-medium text-muted-foreground">{item.time}</span>
                        </div>
                        <h4 className="font-semibold text-foreground text-sm leading-tight">{item.title}</h4>
                        {item.description && (
                          <p className="text-xs text-muted-foreground mt-1 line-clamp-2">{item.description}</p>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
