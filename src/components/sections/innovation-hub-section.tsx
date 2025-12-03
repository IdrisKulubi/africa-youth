import { Rocket, CheckCircle2, Trophy, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

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
  return (
    <section id="innovation" className="py-20 bg-muted/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
          <div className="bg-card rounded-2xl p-8 border border-border">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center">
                <Rocket className="w-6 h-6 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-bold text-foreground">Application Criteria</h3>
            </div>
            <ul className="space-y-4 mb-8">
              {criteria.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">{item}</span>
                </li>
              ))}
            </ul>
            <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90" asChild>
              <Link href="#registration">
                Apply Now <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
          </div>

          {/* What You Get */}
          <div className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl p-8 border border-primary/20">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-accent rounded-xl flex items-center justify-center">
                <Trophy className="w-6 h-6 text-accent-foreground" />
              </div>
              <h3 className="text-xl font-bold text-foreground">What Selected Startups Get</h3>
            </div>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <div className="w-8 h-8 bg-primary/10 text-primary rounded-full flex items-center justify-center text-sm font-bold shrink-0">
                  1
                </div>
                <div>
                  <p className="font-semibold text-foreground">Pitch to Investors</p>
                  <p className="text-sm text-muted-foreground">5-minute pitch to a panel of investors and VCs</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-8 h-8 bg-primary/10 text-primary rounded-full flex items-center justify-center text-sm font-bold shrink-0">
                  2
                </div>
                <div>
                  <p className="font-semibold text-foreground">Mentorship Access</p>
                  <p className="text-sm text-muted-foreground">1-on-1 sessions with industry experts</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-8 h-8 bg-primary/10 text-primary rounded-full flex items-center justify-center text-sm font-bold shrink-0">
                  3
                </div>
                <div>
                  <p className="font-semibold text-foreground">Exhibition Booth</p>
                  <p className="text-sm text-muted-foreground">Showcase your product/service to 500+ attendees</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-8 h-8 bg-primary/10 text-primary rounded-full flex items-center justify-center text-sm font-bold shrink-0">
                  4
                </div>
                <div>
                  <p className="font-semibold text-foreground">Cash Prizes</p>
                  <p className="text-sm text-muted-foreground">Top 3 startups win seed funding grants</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Past Success Stories */}
        <div>
          <h3 className="text-2xl font-bold text-foreground text-center mb-8">Past Success Stories</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {successStories.map((story, i) => (
              <div
                key={i}
                className="bg-card rounded-xl p-6 border border-border hover:border-primary/50 transition-colors"
              >
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-xs font-semibold bg-primary/10 text-primary px-2 py-1 rounded-full">
                    {story.country}
                  </span>
                  <span className="text-xs font-semibold bg-accent/10 text-accent px-2 py-1 rounded-full">
                    Raised {story.funding}
                  </span>
                </div>
                <h4 className="font-bold text-foreground mb-1">{story.name}</h4>
                <p className="text-sm text-muted-foreground mb-2">Founded by {story.founder}</p>
                <p className="text-sm text-muted-foreground">{story.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
