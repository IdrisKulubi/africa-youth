"use client"

import { useState } from "react"
import { Clock, Coffee, Users, Mic2, Award, PartyPopper } from "lucide-react"
import { cn } from "@/lib/utils"

const days = [
  { id: "day1", label: "Day 1 - May 28" },
  { id: "day2", label: "Day 2 - May 29" },
  { id: "gala", label: "Gala Night" },
]

const programmeData = {
  day1: [
    {
      time: "08:00 - 09:00",
      title: "Registration & Networking Breakfast",
      description: "Participant check-in and exhibition area opens",
      icon: Coffee,
      type: "break",
    },
    {
      time: "09:00 - 09:20",
      title: "Opening Ceremony",
      description: "Welcome remarks by Chair AYBCIF. Overview of Zen Forward Africa and AYBCIF Vision.",
      icon: Mic2,
      type: "session",
    },
    {
      time: "09:20 - 09:40",
      title: "Keynote Address",
      description: "Positioning Youth at the Centre of Africa’s Sustainable Economic Transition. (Govt Rep & UN Partner)",
      icon: Mic2,
      type: "session",
    },
    {
      time: "10:00 - 11:00",
      title: "High-Level Panel 1: Policy Dialogue",
      description: "Youth, Business & Climate: Shaping Africa’s New Economic Frontier. (UN experts, Policymakers, Private sector)",
      icon: Users,
      type: "panel",
    },
    {
      time: "11:00 - 11:20",
      title: "Health Break & Exhibition Tour",
      description: "",
      icon: Coffee,
      type: "break",
    },
    {
      time: "11:20 - 12:30",
      title: "Panel II: Climate Finance",
      description: "Climate Finance, Startup Capital & the Path to Green Entrepreneurship",
      icon: Users,
      type: "panel",
    },
    {
      time: "12:30 - 13:30",
      title: "Lunch & Networking",
      description: "",
      icon: Coffee,
      type: "break",
    },
    {
      time: "13:30 - 15:00",
      title: "Breakout Sessions",
      description: "Green Tech, Agri-Tech, Circular Economy (Parallel Tracks)",
      icon: Users,
      type: "workshop",
    },
    {
      time: "15:00 - 16:00",
      title: "Youth Leadership Roundtable",
      description: "Climate governance, policy influence and youth participation",
      icon: Users,
      type: "session",
    },
    {
      time: "16:00 - 17:00",
      title: "Investor–Innovator Speed Networking",
      description: "",
      icon: Users,
      type: "session",
    },
  ],
  day2: [
    {
      time: "08:00 - 08:45",
      title: "Breakfast & Innovation Lab Showcase",
      description: "",
      icon: Coffee,
      type: "break",
    },
    {
      time: "08:45 - 09:15",
      title: "Keynote Address II",
      description: "Scaling Youth-Led Climate Solutions Across Africa",
      icon: Mic2,
      type: "session",
    },
    {
      time: "09:15 - 10:30",
      title: "Panel III: Digital Transformation",
      description: "Digital Transformation, AI & Emerging Technologies in Climate Action",
      icon: Users,
      type: "panel",
    },
    {
      time: "10:30 - 11:00",
      title: "Coffee Break",
      description: "",
      icon: Coffee,
      type: "break",
    },
    {
      time: "11:00 - 12:30",
      title: "Startup Pitch Arena – Round One",
      description: "Young innovators present solutions to an expert judging panel",
      icon: Award,
      type: "showcase",
    },
    {
      time: "12:30 - 13:30",
      title: "Lunch & Side Exhibitions",
      description: "Tech demos, green art and youth innovation showcases",
      icon: Coffee,
      type: "break",
    },
    {
      time: "13:30 - 15:00",
      title: "Capacity-Building Workshops",
      description: "Climate Entrepreneurship, Urban Sustainability, Leadership Skills (Parallel Sessions)",
      icon: Users,
      type: "workshop",
    },
    {
      time: "15:00 - 16:00",
      title: "Startup Pitch Arena – Final Round",
      description: "",
      icon: Award,
      type: "showcase",
    },
    {
      time: "16:00 - 17:00",
      title: "Awards Rehearsal & Transition",
      description: "Transition to Gala Setup",
      icon: Users,
      type: "session",
    },
  ],
  gala: [
    {
      time: "18:00 - 18:45",
      title: "Red Carpet & Photography",
      description: "Guest arrivals, interviews and networking",
      icon: PartyPopper,
      type: "gala",
    },
    {
      time: "18:45 - 19:00",
      title: "Opening Remarks",
      description: "",
      icon: Mic2,
      type: "gala",
    },
    {
      time: "19:00 - 19:40",
      title: "Youth Talent & Innovation Performances",
      description: "Spoken word, music and creative showcases",
      icon: PartyPopper,
      type: "gala",
    },
    {
      time: "19:40 - 20:20",
      title: "Dinner Service",
      description: "",
      icon: Coffee,
      type: "gala",
    },
    {
      time: "20:20 - 21:00",
      title: "Awards Ceremony",
      description: "Young Innovator, Climate Business Trailblazer, Sustainability Leadership, Social Impact Enterprise Awards",
      icon: Award,
      type: "gala",
    },
    {
      time: "21:00 - 21:30",
      title: "Guest of Honour Address",
      description: "",
      icon: Mic2,
      type: "gala",
    },
    {
      time: "21:30 - 22:30",
      title: "Live Band & Networking",
      description: "",
      icon: PartyPopper,
      type: "gala",
    },
    {
      time: "22:30 - 00:00",
      title: "Afterparty",
      description: "DJ Segment & Closing",
      icon: PartyPopper,
      type: "gala",
    },
  ],
}

export default function ProgrammeSection() {
  const [activeDay, setActiveDay] = useState("day1")

  const getTypeStyles = (type: string) => {
    switch (type) {
      case "session":
        return "bg-primary/10 border-primary/30"
      case "panel":
        return "bg-secondary/10 border-secondary/30"
      case "workshop":
        return "bg-accent/10 border-accent/30"
      case "showcase":
        return "bg-accent/10 border-accent/30"
      case "gala":
        return "bg-accent/20 border-accent/50"
      default:
        return "bg-muted border-muted-foreground/20"
    }
  }

  return (
    <section id="programme" className="py-20 bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="inline-block bg-primary/10 text-primary text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
            Programme
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Three Days of <span className="text-primary">Transformation</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A carefully curated programme featuring keynotes, panels, workshops, and networking opportunities.
          </p>
        </div>

        {/* Day Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {days.map((day) => (
            <button
              key={day.id}
              onClick={() => setActiveDay(day.id)}
              className={cn(
                "px-6 py-3 rounded-full font-medium transition-all",
                activeDay === day.id
                  ? "bg-primary text-primary-foreground shadow-lg"
                  : "bg-background text-muted-foreground hover:bg-primary/10 border border-border",
              )}
            >
              {day.label}
            </button>
          ))}
        </div>

        {/* Programme Timeline */}
        <div className="max-w-4xl mx-auto">
          <div className="space-y-4">
            {programmeData[activeDay as keyof typeof programmeData].map((item, index) => (
              <div
                key={index}
                className={cn(
                  "flex flex-col sm:flex-row gap-4 p-6 rounded-2xl border-l-4 transition-all duration-300 hover:shadow-lg hover:scale-[1.01]",
                  getTypeStyles(item.type),
                )}
              >
                <div className="flex items-center gap-3 sm:w-40 shrink-0">
                  <Clock className="w-4 h-4 text-muted-foreground" />
                  <span className="text-sm font-medium text-foreground">{item.time}</span>
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-1">
                    <item.icon className="w-5 h-5 text-primary" />
                    <h4 className="font-semibold text-foreground">{item.title}</h4>
                  </div>
                  <p className="text-muted-foreground text-sm">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
