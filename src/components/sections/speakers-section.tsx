import { Linkedin, Twitter } from "lucide-react"

const speakers = [
  {
    name: "Dr. Elizabeth Wanjiru",
    title: "Regional Climate Officer",
    organization: "UNEP Africa",
    image: "/images/female2.png",
    linkedin: "#",
    twitter: "#",
  },
  {
    name: "James Mwangi",
    title: "CEO & Founder",
    organization: "GreenTech Kenya",
    image: "/images/male1.png",
    linkedin: "#",
    twitter: "#",
  },
  {
    name: "Dr. Amina Osman",
    title: "Youth Development Director",
    organization: "UNDP Kenya",
    image: "/images/female1.png",
    linkedin: "#",
    twitter: "#",
  },
  {
    name: "Samuel Kariuki",
    title: "Investment Partner",
    organization: "Africa Climate Ventures",
    image: "/images/male2.png",
    linkedin: "#",
    twitter: "#",
  },
  {
    name: "Grace Achieng",
    title: "Climate Activist & Founder",
    organization: "Youth for Green Africa",
    image: "/images/women2.png",
    linkedin: "#",
    twitter: "#",
  },
  {
    name: "Prof. David Ochieng",
    title: "Dean, School of Environment",
    organization: "University of Nairobi",
    image: "/images/male3.png",
    linkedin: "#",
    twitter: "#",
  },
]

export default function SpeakersSection() {
  return (
    <section id="speakers" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block bg-primary/10 text-primary text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
            Speakers & Panelists
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Learn from <span className="text-primary">Industry Leaders</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Our speakers bring decades of experience in sustainability, business, and youth empowerment.
          </p>
        </div>

        {/* Speakers Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {speakers.map((speaker) => (
            <div
              key={speaker.name}
              className="group bg-card rounded-2xl overflow-hidden border border-border hover:border-primary/50 transition-all hover:shadow-xl"
            >
              <div className="relative aspect-square overflow-hidden">
                <img
                  src={speaker.image || "/placeholder.svg"}
                  alt={speaker.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-center pb-6">
                  <div className="flex gap-3">
                    <a
                      href={speaker.linkedin}
                      className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                      aria-label={`${speaker.name}'s LinkedIn`}
                    >
                      <Linkedin className="w-5 h-5" />
                    </a>
                    <a
                      href={speaker.twitter}
                      className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                      aria-label={`${speaker.name}'s Twitter`}
                    >
                      <Twitter className="w-5 h-5" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="p-6 text-center">
                <h3 className="font-bold text-lg text-foreground mb-1">{speaker.name}</h3>
                <p className="text-primary font-medium text-sm mb-1">{speaker.title}</p>
                <p className="text-muted-foreground text-sm">{speaker.organization}</p>
              </div>
            </div>
          ))}
        </div>

        {/* More Speakers Coming */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-3 bg-accent/10 border border-accent/30 rounded-full px-6 py-3">
            <span className="text-accent font-semibold">✨</span>
            <span className="text-foreground font-medium">More speakers to be announced soon!</span>
          </div>
        </div>
      </div>
    </section>
  )
}
