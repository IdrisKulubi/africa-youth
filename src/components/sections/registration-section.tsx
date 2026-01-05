"use client"

import type React from "react"
import { useState, useEffect, useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { CheckCircleIcon, CalendarIcon, MapPinIcon, UsersIcon, TicketIcon, WalletIcon } from "@phosphor-icons/react"

// Register ScrollTrigger
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger)
}

const eventBenefits = [
  "3-day full access to all sessions",
  "Workshop participation",
  "Networking sessions with industry leaders",
  "Certificate of participation",
  "Access to Gala Night",
  "Innovation Hub showcase access",
  "Exclusive event materials",
]

export default function RegistrationSection() {
  const [ticketType, setTicketType] = useState<"free" | "paid">("free")
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    organization: "",
    role: "",
    category: "",
  })

  const sectionRef = useRef<HTMLElement>(null)
  const headerRef = useRef<HTMLDivElement>(null)
  const ticketsRef = useRef<HTMLDivElement>(null)
  const formRef = useRef<HTMLDivElement>(null)

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

      // Tickets panel animation
      if (ticketsRef.current) {
        gsap.from(ticketsRef.current, {
          opacity: 0,
          x: -60,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ticketsRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        })
      }

      // Form animation
      if (formRef.current) {
        gsap.from(formRef.current, {
          opacity: 0,
          x: 60,
          duration: 1,
          delay: 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: formRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        })
      }
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Registration submitted:", { ...formData, ticketType })
    alert("Thank you for your registration! We will send you a confirmation email shortly.")
  }

  return (
    <section ref={sectionRef} id="registration" className="py-20 bg-background relative overflow-hidden">
      {/* Background blobs */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div ref={headerRef} className="text-center mb-12">
          <span className="inline-block bg-primary/10 text-primary text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
            Registration Open
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Secure Your <span className="text-primary">Spot</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Join 150+ participants at this transformative event.
            <br />
            <span className="font-medium text-foreground">Limited to 300 slots only.</span>
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-8">
          <div ref={ticketsRef} className="lg:col-span-2 space-y-6">
            {/* Ticket Options */}
            <div className="space-y-4">
              <div
                className={`cursor-pointer rounded-2xl p-5 border-2 transition-all ${ticketType === 'free' ? 'border-primary bg-primary/5' : 'border-border hover:border-primary/50'}`}
                onClick={() => setTicketType('free')}
              >
                <div className="flex justify-between items-center mb-2">
                  <span className="font-bold text-lg">Invited & Students</span>
                  <span className="bg-primary text-primary-foreground text-xs px-2 py-1 rounded-full">100 Slots</span>
                </div>
                <div className="text-2xl font-bold text-primary mb-1">Free</div>
                <p className="text-sm text-muted-foreground">For speakers, partners, and selected students.</p>
              </div>

              <div
                className={`cursor-pointer rounded-2xl p-5 border-2 transition-all ${ticketType === 'paid' ? 'border-accent bg-accent/5' : 'border-border hover:border-accent/50'}`}
                onClick={() => setTicketType('paid')}
              >
                <div className="flex justify-between items-center mb-2">
                  <span className="font-bold text-lg">General Delegate</span>
                  <span className="bg-accent text-accent-foreground text-xs px-2 py-1 rounded-full">200 Slots</span>
                </div>
                <div className="text-2xl font-bold text-primary mb-1">Ksh 1,500 <span className="text-sm text-muted-foreground font-normal">/ day</span></div>
                <p className="text-sm text-muted-foreground">Full access for professionals and general attendees.</p>
              </div>
            </div>

            {/* What You Get */}
            <div className="bg-card/50 backdrop-blur-sm rounded-2xl p-6 border border-border">
              <h3 className="font-semibold text-foreground mb-4 flex items-center gap-2">
                <TicketIcon className="w-5 h-5 text-primary" />
                What You Get
              </h3>
              <ul className="space-y-3">
                {eventBenefits.map((benefit, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-muted-foreground">
                    <CheckCircleIcon className="w-4 h-4 text-primary mt-0.5 shrink-0" weight="fill" />
                    {benefit}
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex items-center gap-4 text-sm text-muted-foreground justify-center lg:justify-start">
              <div className="flex items-center gap-2">
                <CalendarIcon className="w-4 h-4" />
                <span>May 28-29, 2026</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPinIcon className="w-4 h-4" />
                <span>Nairobi, Kenya</span>
              </div>
            </div>

          </div>

          {/* Registration Form */}
          <div ref={formRef} className="lg:col-span-3 bg-card rounded-2xl p-6 md:p-8 border border-border shadow-xl">
            <div className="mb-6 pb-6 border-b border-border">
              <h3 className="font-semibold text-foreground text-xl">Participant Details</h3>
              <p className="text-sm text-muted-foreground mt-1">
                Registering as: <span className="font-bold text-primary capitalize">{ticketType === 'free' ? 'Invited / Student (Free)' : 'General Delegate (Paid)'}</span>
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="firstName">First Name *</Label>
                  <Input
                    id="firstName"
                    placeholder="Enter your first name"
                    value={formData.firstName}
                    onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                    required
                    className="rounded-xl"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName">Last Name *</Label>
                  <Input
                    id="lastName"
                    placeholder="Enter your last name"
                    value={formData.lastName}
                    onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                    required
                    className="rounded-xl"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email Address *</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="your@email.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  className="rounded-xl"
                />
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number *</Label>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="+254 xxx xxx xxx"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    required
                    className="rounded-xl"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="organization">Organization</Label>
                  <Input
                    id="organization"
                    placeholder="Company / University / NGO"
                    value={formData.organization}
                    onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                    className="rounded-xl"
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="category">Participant Category *</Label>
                  <Select
                    value={formData.category}
                    onValueChange={(value) => setFormData({ ...formData, category: value })}
                  >
                    <SelectTrigger className="rounded-xl">
                      <SelectValue placeholder="Select category" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="student">Student</SelectItem>
                      <SelectItem value="professional">Professional</SelectItem>
                      <SelectItem value="entrepreneur">Entrepreneur</SelectItem>
                      <SelectItem value="ngo">NGO Representative</SelectItem>
                      <SelectItem value="government">Government Official</SelectItem>
                      <SelectItem value="media">Media / Journalist</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="role">Your Role</Label>
                  <Select value={formData.role} onValueChange={(value) => setFormData({ ...formData, role: value })}>
                    <SelectTrigger className="rounded-xl">
                      <SelectValue placeholder="Select your role" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="attendee">Attendee</SelectItem>
                      <SelectItem value="speaker">Interested in Speaking</SelectItem>
                      <SelectItem value="exhibitor">Exhibitor</SelectItem>
                      <SelectItem value="volunteer">Volunteer</SelectItem>
                      <SelectItem value="media">Media Coverage</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="pt-4 border-t border-border">
                <Button type="submit" size="lg" className="w-full bg-primary text-primary-foreground hover:bg-primary/90 h-12 text-lg rounded-xl shadow-lg shadow-primary/20">
                  {ticketType === 'free' ? 'Confirm Free Registration' : 'Proceed to Payment'}
                </Button>
                <p className="text-xs text-muted-foreground text-center mt-3">
                  By registering, you agree to our Terms of Service and Privacy Policy.
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
