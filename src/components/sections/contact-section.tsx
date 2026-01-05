"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import Image from "next/image"
import { EnvelopeIcon, PhoneIcon, MapPinIcon, PaperPlaneRightIcon, InstagramLogoIcon, TwitterLogoIcon } from "@phosphor-icons/react"

const socialLinks = [
  { icon: InstagramLogoIcon, label: "Instagram", href: "https://www.instagram.com/zen_forward_africa25" },
  { icon: TwitterLogoIcon, label: "X (Twitter)", href: "https://x.com/FowardZen78940" },
]

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Message sent:", formData)
    alert("Thank you for your message! We will get back to you shortly.")
    setFormData({ name: "", email: "", subject: "", message: "" })
  }

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="inline-block bg-primary/10 text-primary text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
            Contact Us
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Get in <span className="text-primary">Touch</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Have questions about AYBCIF 2026? We{"'"}d love to hear from you.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-12">
          {/* Contact Info */}
          <div className="lg:col-span-2 space-y-8">
            <div>
              <h3 className="font-semibold text-foreground mb-6">Contact Information</h3>
              <div className="space-y-4">
                <a
                  href="mailto:info@aybcif.org"
                  className="flex items-center gap-4 p-4 bg-card rounded-xl border border-border hover:border-primary/50 transition-colors group"
                >
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <EnvelopeIcon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <span className="block text-sm text-muted-foreground">Email</span>
                    <span className="font-medium text-foreground">zenforwardafrica9@gmail.com</span>
                  </div>
                </a>

                <a
                  href="tel:+254 768 006 969"
                  className="flex items-center gap-4 p-4 bg-card rounded-xl border border-border hover:border-primary/50 transition-colors group"
                >
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <PhoneIcon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <span className="block text-sm text-muted-foreground">Phone / WhatsApp</span>
                    <span className="font-medium text-foreground">+254 768 006 969</span>
                  </div>
                </a>

                <div className="flex items-center gap-4 p-4 bg-card rounded-xl border border-border">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <MapPinIcon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <span className="block text-sm text-muted-foreground">Venue Location</span>
                    <span className="font-medium text-foreground">Nairobi, Kenya</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h3 className="font-semibold text-foreground mb-4">Follow Us</h3>
              <div className="flex gap-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    className="w-11 h-11 bg-card border border-border rounded-lg flex items-center justify-center hover:bg-primary hover:text-primary-foreground hover:border-primary transition-colors"
                    aria-label={social.label}
                  >
                    <social.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="rounded-xl overflow-hidden border border-border aspect-video bg-muted">
              <Image
                src="/placeholder.svg"
                alt="Venue Location Map"
                className="w-full h-full object-cover"
                width={600}
                height={400}
              />
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-3 bg-card rounded-2xl p-6 md:p-8 border border-border">
            <h3 className="font-semibold text-foreground mb-6">Send us a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="contactName">Your Name *</Label>
                  <Input
                    id="contactName"
                    placeholder="Enter your name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="contactEmail">Email Address *</Label>
                  <Input
                    id="contactEmail"
                    type="email"
                    placeholder="your@email.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="contactSubject">Subject *</Label>
                <Input
                  id="contactSubject"
                  placeholder="What is this about?"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="contactMessage">Message *</Label>
                <Textarea
                  id="contactMessage"
                  placeholder="Write your message here..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows={5}
                  required
                />
              </div>

              <Button type="submit" size="lg" className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
                <PaperPlaneRightIcon className="mr-2 w-4 h-4" />
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
