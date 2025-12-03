"use client"

import { useState } from "react"
import { Clock, Coffee, Users, Mic2, Award, PartyPopper } from "lucide-react"
import { cn } from "@/lib/utils"

const days = [
  { id: "day1", label: "Day 1 - May 27" },
  { id: "day2", label: "Day 2 - May 28" },
  { id: "day3", label: "Day 3 - May 29" },
]

const programmeData = {
  day1: [
    {
      time: "08:00 - 09:00",
      title: "Registration & Arrival",
      description: "Check-in, badge collection, and welcome refreshments",
      icon: Coffee,
      type: "break",
    },
    {
      time: "09:00 - 09:30",
      title: "Opening Session",
      description: "Welcome & Introduction by Organizer, Keynote Address: 'Youth as Drivers of Sustainable Futures'",
      icon: Mic2,
      type: "session",
    },
    {
      time: "09:30 - 10:30",
      title: "Panel 1: Business & Innovation",
      description:
        "'Youth Entrepreneurship and the Future of Work' - Panelists: Startup founders, investors, corporate leaders",
      icon: Users,
      type: "panel",
    },
    {
      time: "10:30 - 11:00",
      title: "Networking Break",
      description: "Tea/snacks and exhibition booth visits",
      icon: Coffee,
      type: "break",
    },
    {
      time: "11:00 - 12:00",
      title: "Panel 2: Climate Action & Green Innovation",
      description:
        "'Youth at the Forefront of Climate Solutions' - Panelists: Climate activists, NGO leaders, sustainability managers",
      icon: Users,
      type: "panel",
    },
    {
      time: "12:00 - 13:00",
      title: "Lunch Break",
      description: "Networking lunch with exhibitors",
      icon: Coffee,
      type: "break",
    },
  ],
  day2: [
    {
      time: "09:00 - 09:30",
      title: "Day 2 Opening",
      description: "Recap of Day 1 and introduction to workshops",
      icon: Mic2,
      type: "session",
    },
    {
      time: "09:30 - 11:00",
      title: "Workshop Session A",
      description: "Parallel workshops: Entrepreneurship 101, Green Startups, Youth Advocacy & Climate Policy",
      icon: Users,
      type: "workshop",
    },
    {
      time: "11:00 - 11:30",
      title: "Coffee Break",
      description: "Refreshments and networking",
      icon: Coffee,
      type: "break",
    },
    {
      time: "11:30 - 13:00",
      title: "Workshop Session B",
      description: "Deep-dive sessions: Scaling Eco-Ideas, Business Pitching, Climate Communication",
      icon: Users,
      type: "workshop",
    },
    {
      time: "13:00 - 14:00",
      title: "Lunch Break",
      description: "Networking and exhibition visits",
      icon: Coffee,
      type: "break",
    },
    {
      time: "14:00 - 16:00",
      title: "Youth Innovation Showcase",
      description: "Presentations from youth-led green startups and innovative projects",
      icon: Award,
      type: "showcase",
    },
  ],
  day3: [
    {
      time: "09:00 - 10:30",
      title: "Interactive Roundtables",
      description: "Small group discussions on sector-specific challenges and opportunities",
      icon: Users,
      type: "session",
    },
    {
      time: "10:30 - 11:00",
      title: "Networking Break",
      description: "Final exhibition visits and connections",
      icon: Coffee,
      type: "break",
    },
    {
      time: "11:00 - 12:30",
      title: "Closing Panel",
      description: "'Pathways Forward: Youth-Led Sustainable Development' - Commitments and action plans",
      icon: Users,
      type: "panel",
    },
    {
      time: "12:30 - 13:30",
      title: "Closing Ceremony",
      description:
        "Summary of key outcomes, recognition of sponsors & partners, closing remarks, climate-themed performance",
      icon: Award,
      type: "session",
    },
    {
      time: "13:30 - 14:30",
      title: "Farewell Lunch",
      description: "Final networking opportunity",
      icon: Coffee,
      type: "break",
    },
    {
      time: "19:00 - 23:00",
      title: "Zen Forward Kenya Gala Night",
      description: "Celebrating youth climate champions and partners with awards, dinner, and entertainment",
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
                  "flex flex-col sm:flex-row gap-4 p-5 rounded-xl border-l-4 transition-all hover:shadow-md",
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
