"use client"

import { RocketIcon, CheckCircleIcon, TrophyIcon, ArrowRightIcon } from "@phosphor-icons/react"
import { Button } from "@/components/ui/button"
import { useState } from "react"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

const criteria = [
  "Youth-led startup (founder under 35 years)",
  "Focus on climate, sustainability, or green innovation",
  "Registered or operating in Africa",
  "Scalable business model with measurable impact",
  "Commitment to attend AYBCIF 2026 in person",
]

const successStories = [
  {
    name: "GreenTech Solutions",
    founder: "James Mwangi",
    country: "Kenya",
    description: "Solar-powered irrigation systems for smallholder farmers",
    funding: "$50,000",
  },
  {
    name: "EcoPackage Africa",
    founder: "Fatima Hassan",
    country: "Tanzania",
    description: "Biodegradable packaging from agricultural waste",
    funding: "$35,000",
  },
  {
    name: "CleanWater AI",
    founder: "David Okonkwo",
    country: "Nigeria",
    description: "AI-powered water quality monitoring for rural communities",
    funding: "$45,000",
  },
]

export default function InnovationHubSection() {
  const [open, setOpen] = useState(false)
  const [formData, setFormData] = useState({
    startupName: "",
    founderName: "",
    email: "",
    description: ""
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Startup Application:", formData)
    alert("Application received! We will review your startup and get back to you.")
    setOpen(false)
  }

  return (
    <section id="innovation" className="py-20 bg-muted/50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-background to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block bg-accent/10 text-accent text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
            Innovation Hub
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Startup <span className="text-primary">Showcase</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A platform for young African innovators to pitch their green business ideas to investors, mentors, and
            industry leaders.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start mb-16">
          {/* Application Criteria */}
          <div className="bg-card rounded-2xl p-8 border border-border shadow-lg">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center">
                <RocketIcon className="w-6 h-6 text-primary-foreground" weight="fill" />
              </div>
              <h3 className="text-xl font-bold text-foreground">Application Criteria</h3>
            </div>
            <ul className="space-y-4 mb-8">
              {criteria.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircleIcon   className="w-5 h-5 text-primary shrink-0 mt-0.5" weight="fill" />
                  <span className="text-muted-foreground">{item}</span>
                </li>
              ))}
            </ul>

            <Dialog open={open} onOpenChange={setOpen}>
              <DialogTrigger asChild>
                <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90 h-12 text-lg rounded-xl shadow-lg shadow-primary/20">
                  Apply Now <ArrowRightIcon className="w-4 h-4 ml-2" />
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                  <DialogTitle>Apply for Startup Showcase</DialogTitle>
                  <DialogDescription>
                    Tell us a bit about your innovation. We'll contact you for the full pitch deck.
                  </DialogDescription>
                </DialogHeader>
                <form onSubmit={handleSubmit} className="space-y-4 mt-4">
                  <div className="space-y-2">
                    <Label htmlFor="startupName">Startup Name</Label>
                    <Input
                      id="startupName"
                      value={formData.startupName}
                      onChange={(e) => setFormData({ ...formData, startupName: e.target.value })}
                      placeholder="Your Venture Name"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="founderName">Founder Name</Label>
                    <Input
                      id="founderName"
                      value={formData.founderName}
                      onChange={(e) => setFormData({ ...formData, founderName: e.target.value })}
                      placeholder="Full Name"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="founder@startup.com"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="desc">Short Description</Label>
                    <Textarea
                      id="desc"
                      value={formData.description}
                      onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                      placeholder="What problem are you solving?"
                      required
                    />
                  </div>
                  <Button type="submit" className="w-full">Submit Application</Button>
                </form>
              </DialogContent>
            </Dialog>

          </div>

          {/* What You Get */}
          <div className="bg-gradient-to-br from-primary/5 to-accent/5 rounded-2xl p-8 border border-primary/10">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-accent rounded-xl flex items-center justify-center">
                <TrophyIcon className="w-6 h-6 text-accent-foreground" weight="fill" />
              </div>
              <h3 className="text-xl font-bold text-foreground">What Selected Startups Get</h3>
            </div>
            <ul className="space-y-6">
              <li className="flex items-start gap-4">
                <div className="w-10 h-10 bg-background shadow-sm rounded-full flex items-center justify-center text-lg font-bold shrink-0 text-primary">
                  1
                </div>
                <div>
                  <p className="font-semibold text-foreground text-lg mb-1">Pitch to Investors</p>
                  <p className="text-sm text-muted-foreground">5-minute pitch opportunity to a panel of top African investors and VCs.</p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="w-10 h-10 bg-background shadow-sm rounded-full flex items-center justify-center text-lg font-bold shrink-0 text-primary">
                  2
                </div>
                <div>
                  <p className="font-semibold text-foreground text-lg mb-1">Exhibition Space</p>
                  <p className="text-sm text-muted-foreground">Free booth to showcase your product to over 2000 attendees.</p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="w-10 h-10 bg-background shadow-sm rounded-full flex items-center justify-center text-lg font-bold shrink-0 text-primary">
                  3
                </div>
                <div>
                  <p className="font-semibold text-foreground text-lg mb-1">Mentorship</p>
                  <p className="text-sm text-muted-foreground">One-on-one sessions with industry leaders and business coaches.</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Success Stories */}
        <div className="mt-20">
          <h3 className="text-2xl font-bold text-center mb-10">Past Success Stories</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {successStories.map((story, i) => (
              <div key={i} className="bg-card p-6 rounded-2xl border border-border border-l-4 border-l-primary/50 hover:shadow-lg transition-all">
                <div className="mb-4">
                  <h4 className="font-bold text-lg">{story.name}</h4>
                  <p className="text-sm text-muted-foreground">
                    {story.founder}, {story.country}
                  </p>
                </div>
                <p className="text-sm mb-4 italic">"{story.description}"</p>
                <div className="text-accent font-semibold text-sm">Raised {story.funding}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
