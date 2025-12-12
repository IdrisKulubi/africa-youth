"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { CheckCircle2, Calendar, MapPin, Users } from "lucide-react"

const eventBenefits = [
  "3-day full access to all sessions",
  "Workshop participation",
  "Networking sessions with industry leaders",
  "Certificate of participation",
  "Lunch and refreshments",
  "Access to Gala Night",
  "Innovation Hub showcase access",
  "Exclusive event materials",
]

export default function RegistrationSection() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    organization: "",
    role: "",
    category: "",
    dietaryRequirements: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Registration submitted:", formData)
    alert("Thank you for your registration! We will send you a confirmation email shortly.")
  }

  return (
    <section id="registration" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="inline-block bg-primary/10 text-primary text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
            Free Registration
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Register for <span className="text-primary">AYBCIF 2026</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Join 150+ participants from across Africa at this transformative event. Registration is completely free!
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-8">
          <div className="lg:col-span-2 space-y-6">
            {/* Free Entry Banner */}
            <div className="bg-gradient-to-br from-primary to-primary/80 rounded-2xl p-6 text-primary-foreground">
              <div className="text-center mb-4">
                <span className="text-4xl font-bold">FREE</span>
                <p className="text-primary-foreground/80 mt-1">Entry for all participants</p>
              </div>
              <div className="space-y-3 text-sm">
                <div className="flex items-center gap-3">
                  <Calendar className="w-5 h-5" />
                  <span>May 28-29, 2026</span>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="w-5 h-5" />
                  <span>Nairobi, Kenya</span>
                </div>
                <div className="flex items-center gap-3">
                  <Users className="w-5 h-5" />
                  <span>Limited to 2000 participants</span>
                </div>
              </div>
            </div>

            {/* What You Get */}
            <div className="bg-card rounded-2xl p-6 border border-border">
              <h3 className="font-semibold text-foreground mb-4">What You Get</h3>
              <ul className="space-y-3">
                {eventBenefits.map((benefit, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-muted-foreground">
                    <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                    {benefit}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Registration Form */}
          <div className="lg:col-span-3 bg-card rounded-2xl p-6 md:p-8 border border-border">
            <h3 className="font-semibold text-foreground mb-6">Participant Information</h3>
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
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="organization">Organization</Label>
                  <Input
                    id="organization"
                    placeholder="Company / University / NGO"
                    value={formData.organization}
                    onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
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
                    <SelectTrigger>
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
                    <SelectTrigger>
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

              <div className="space-y-2">
                <Label htmlFor="dietary">Dietary Requirements (Optional)</Label>
                <Textarea
                  id="dietary"
                  placeholder="Any allergies or dietary preferences..."
                  value={formData.dietaryRequirements}
                  onChange={(e) => setFormData({ ...formData, dietaryRequirements: e.target.value })}
                  rows={2}
                />
              </div>

              <div className="pt-4 border-t border-border">
                <Button type="submit" size="lg" className="w-full bg-accent text-accent-foreground hover:bg-accent/90">
                  Register Now - It's Free!
                </Button>
                <p className="text-xs text-muted-foreground text-center mt-3">
                  By registering, you agree to our Terms of Service and Privacy Policy. Limited spots available.
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
