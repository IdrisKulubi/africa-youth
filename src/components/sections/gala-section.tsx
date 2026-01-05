"use client"

import { Button } from "@/components/ui/button"
import { Calendar, Clock, MapPin, Sparkle, Ticket, Users } from "@phosphor-icons/react"
import Link from "next/link"

export default function GalaSection() {
  return (
    <section id="gala" className="py-20 bg-foreground text-background relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-accent/20 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/20 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <div className="inline-flex items-center gap-2 bg-accent/20 text-accent rounded-full px-4 py-2 mb-6">
              <Sparkle className="w-4 h-4" />
              <span className="text-sm font-semibold">Premium Event</span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-balance">
              Zen Forward Kenya
              <br />
              <span className="text-accent">Gala Night</span>
            </h2>

            <p className="text-background/80 text-lg mb-8 leading-relaxed">
              Cap off AYBCIF 2026 with an unforgettable evening celebrating youth climate champions and partners. A
              night of recognition, networking, entertainment, and inspiration.
            </p>

            {/* Event Details */}
            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              <div className="flex items-center gap-3 bg-background/10 rounded-xl p-4">
                <Calendar className="w-5 h-5 text-accent" />
                <div>
                  <span className="block text-sm text-background/60">Date</span>
                  <span className="font-semibold">May 29, 2026</span>
                </div>
              </div>
              <div className="flex items-center gap-3 bg-background/10 rounded-xl p-4">
                <Clock className="w-5 h-5 text-accent" />
                <div>
                  <span className="block text-sm text-background/60">Time</span>
                  <span className="font-semibold">7:00 PM - 11:00 PM</span>
                </div>
              </div>
              <div className="flex items-center gap-3 bg-background/10 rounded-xl p-4">
                <MapPin className="w-5 h-5 text-accent" />
                <div>
                  <span className="block text-sm text-background/60">Venue</span>
                  <span className="font-semibold">Nairobi, Kenya</span>
                </div>
              </div>
              <div className="flex items-center gap-3 bg-background/10 rounded-xl p-4">
                <Users className="w-5 h-5 text-accent" />
                <div>
                  <span className="block text-sm text-background/60">Dress Code</span>
                  <span className="font-semibold">Smart / Cocktail</span>
                </div>
              </div>
            </div>

            {/* Highlights */}
            <div className="mb-8">
              <h3 className="font-semibold mb-3">Gala Highlights:</h3>
              <ul className="grid sm:grid-cols-2 gap-2">
                {[
                  "Climate Champion Awards",
                  "Keynote Address",
                  "Gourmet Dinner",
                  "Live Entertainment",
                  "VIP Networking",
                  "Partner Recognition",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-2 text-background/80">
                    <Sparkle className="w-4 h-4 text-accent" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90" asChild>
                <Link href="#registration">
                  <Ticket className="mr-2 w-5 h-5" />
                  Get Gala Tickets
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-background/30 text-background hover:bg-background/10 bg-transparent"
                asChild
              >
                <Link href="#contact">Sponsor a Table</Link>
              </Button>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="absolute -inset-4 bg-accent/20 rounded-3xl blur-2xl" />
            <img
              src="/placeholder.svg?height=700&width=600"
              alt="Gala Night"
              className="relative rounded-2xl w-full object-cover shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
