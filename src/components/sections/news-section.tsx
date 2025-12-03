import { Calendar, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const news = [
  {
    date: "November 15, 2025",
    title: "UNEP Confirms Participation in AYBCIF 2026",
    excerpt:
      "The United Nations Environment Programme has confirmed their support and participation in the upcoming forum...",
    image: "/placeholder.svg?height=300&width=400",
    category: "Partnership",
  },
  {
    date: "October 28, 2025",
    title: "Meet Our First Set of Speakers!",
    excerpt:
      "We are thrilled to announce our inaugural lineup of keynote speakers and panelists who will share their expertise...",
    image: "/placeholder.svg?height=300&width=400",
    category: "Announcement",
  },
  {
    date: "October 10, 2025",
    title: "Early Bird Registration Now Open",
    excerpt:
      "Secure your spot at Africa's premier youth climate and business innovation forum with our limited early bird rates...",
    image: "/placeholder.svg?height=300&width=400",
    category: "Registration",
  },
]

export default function NewsSection() {
  return (
    <section id="news" className="py-20 bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-12">
          <div>
            <span className="inline-block bg-primary/10 text-primary text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
              News & Updates
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
              Latest <span className="text-primary">Announcements</span>
            </h2>
          </div>
          <Button
            variant="outline"
            className="border-primary text-primary hover:bg-primary hover:text-primary-foreground self-start sm:self-auto bg-transparent"
          >
            View All News <ArrowRight className="ml-2 w-4 h-4" />
          </Button>
        </div>

        {/* News Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {news.map((item) => (
            <article
              key={item.title}
              className="group bg-background rounded-2xl overflow-hidden border border-border hover:border-primary/50 transition-all hover:shadow-lg"
            >
              <div className="relative aspect-video overflow-hidden">
                <img
                  src={item.image || "/placeholder.svg"}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <span className="absolute top-4 left-4 bg-primary text-primary-foreground text-xs font-semibold px-3 py-1 rounded-full">
                  {item.category}
                </span>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 text-muted-foreground text-sm mb-3">
                  <Calendar className="w-4 h-4" />
                  {item.date}
                </div>
                <h3 className="font-bold text-lg text-foreground mb-2 group-hover:text-primary transition-colors">
                  {item.title}
                </h3>
                <p className="text-muted-foreground text-sm line-clamp-2">{item.excerpt}</p>
                <Link
                  href="#"
                  className="inline-flex items-center gap-1 text-primary font-medium text-sm mt-4 hover:gap-2 transition-all"
                >
                  Read More <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
