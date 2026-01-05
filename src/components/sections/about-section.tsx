"use client"

import { Target, CheckCircle, Medal, Users, Lightbulb, Eye, Handshake } from "@phosphor-icons/react"

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
  return (
    <section id="about" className="py-20 bg-background relative">
      {/* Background accent */}
      <div className="absolute right-0 top-1/4 w-64 h-64 bg-accent/5 rounded-full blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
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
          <div className="text-center mb-10">
            <div className="inline-flex items-center justify-center p-3 bg-primary/10 rounded-full mb-4">
              {/* Placeholder for Logo, using Emoji for now if image fails */}
              {/* <span className="text-2xl">🌍</span> */}
            </div>
            <h3 className="text-3xl font-bold text-foreground mb-2">Zen Forward Africa</h3>
            <p className="text-muted-foreground text-lg">The driving force behind AYBCIF</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Vision */}
            <div className="bg-gradient-to-br from-primary/10 to-secondary/10 rounded-3xl p-8 border border-primary/20 hover:shadow-xl hover:scale-[1.02] transition-all duration-300 group">
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
            <div className="bg-gradient-to-br from-accent/10 to-primary/10 rounded-3xl p-8 border border-accent/20 hover:shadow-xl hover:scale-[1.02] transition-all duration-300 group">
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
          <div>
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

          <div className="relative">
            <div className="absolute -top-4 -left-4 w-full h-full bg-primary/10 rounded-2xl" />
            <div className="absolute -bottom-4 -right-4 w-full h-full bg-accent/10 rounded-2xl" />
            {/* Use a placeholder div instead of image for now if image is missing, or keep image tag but robust */}
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
          <div className="bg-card rounded-2xl p-8 border border-border shadow-sm">
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

          <div className="bg-card rounded-2xl p-8 border border-border shadow-sm">
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
        <div className="bg-card rounded-2xl p-8 border border-border">
          <h3 className="text-xl font-bold text-foreground mb-6 flex items-center gap-3">
            <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
              <Users className="w-5 h-5 text-primary" />
            </div>
            Target Audience
          </h3>
          <div className="flex flex-wrap gap-4">
            {targetAudience.map((audience, i) => (
              <div key={i} className="flex items-center gap-2 bg-background border border-border px-4 py-2 rounded-full">
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
