import { Target, CheckCircle2, Award, Users, Lightbulb, Eye } from "lucide-react"

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
    <section id="about" className="py-20 bg-background">
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
            <h3 className="text-2xl font-bold text-foreground mb-2">Zen Forward Africa</h3>
            <p className="text-muted-foreground">The driving force behind AYBCIF</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Vision */}
            <div className="bg-gradient-to-br from-primary/10 to-secondary/10 rounded-3xl p-8 border border-primary/20 hover:shadow-xl hover:scale-[1.02] transition-all duration-300">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-primary rounded-2xl flex items-center justify-center">
                  <Eye className="w-6 h-6 text-primary-foreground" />
                </div>
                <h4 className="text-xl font-bold text-foreground">Our Vision</h4>
              </div>
              <p className="text-muted-foreground leading-relaxed text-lg">
                A sustainable, innovative, and inclusive Africa powered by youth-driven solutions and forward-thinking
                partnerships.
              </p>
            </div>

            {/* Mission */}
            <div className="bg-gradient-to-br from-accent/10 to-primary/10 rounded-3xl p-8 border border-accent/20 hover:shadow-xl hover:scale-[1.02] transition-all duration-300">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-accent rounded-2xl flex items-center justify-center">
                  <Lightbulb className="w-6 h-6 text-accent-foreground" />
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
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                <Target className="w-5 h-5 text-primary-foreground" />
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
          </div>
          <div className="relative">
            <div className="absolute -top-4 -left-4 w-full h-full bg-primary/10 rounded-2xl" />
            <img
              src="/images/youth3.png"
              alt="Youth Innovation Workshop"
              className="relative rounded-2xl w-full object-cover shadow-lg"
            />
          </div>
        </div>

        <div className="mb-20 bg-gradient-to-r from-primary to-secondary rounded-2xl p-8 md:p-12 text-primary-foreground">
          <div className="text-center max-w-3xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">The Missing Link: Youth x Business x Climate</h3>
            <p className="text-primary-foreground/90 leading-relaxed text-lg">
              AYBCIF bridges the critical gap between Africa{"'"}s vibrant youth population, the business community, and
              climate action. We create meaningful connections that transform innovative ideas into sustainable
              solutions, ensuring young voices are heard in boardrooms and policy discussions alike.
            </p>
          </div>
        </div>

        {/* Objectives & Outcomes Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Objectives */}
          <div className="bg-card rounded-2xl p-8 border border-border">
            <h3 className="text-xl font-bold text-foreground mb-6 flex items-center gap-3">
              <div className="w-10 h-10 bg-secondary rounded-lg flex items-center justify-center">
                <CheckCircle2 className="w-5 h-5 text-secondary-foreground" />
              </div>
              Our Objectives
            </h3>
            <ul className="space-y-4">
              {objectives.map((obj, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="w-6 h-6 bg-primary/10 text-primary rounded-full flex items-center justify-center text-sm font-semibold shrink-0 mt-0.5">
                    {i + 1}
                  </span>
                  <span className="text-muted-foreground">{obj}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Expected Outcomes */}
          <div className="bg-card rounded-2xl p-8 border border-border">
            <h3 className="text-xl font-bold text-foreground mb-6 flex items-center gap-3">
              <div className="w-10 h-10 bg-accent rounded-lg flex items-center justify-center">
                <Award className="w-5 h-5 text-accent-foreground" />
              </div>
              Expected Outcomes
            </h3>
            <ul className="space-y-4">
              {outcomes.map((outcome, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">{outcome}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Target Audience */}
        <div className="mt-8 bg-card rounded-2xl p-8 border border-border">
          <h3 className="text-xl font-bold text-foreground mb-6 flex items-center gap-3">
            <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
              <Users className="w-5 h-5 text-primary" />
            </div>
            Target Audience
          </h3>
          <div className="flex flex-wrap gap-4">
            {targetAudience.map((audience, i) => (
              <div key={i} className="flex items-center gap-2 bg-background border border-border px-4 py-2 rounded-full">
                <CheckCircle2 className="w-4 h-4 text-primary" />
                <span className="text-sm text-foreground">{audience}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Event Host */}
        <div className="mt-16 bg-primary/5 rounded-2xl p-8 border border-primary/20">
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center shrink-0">
              <Users className="w-10 h-10 text-primary-foreground" />
            </div>
            <div className="text-center md:text-left">
              <h3 className="text-xl font-bold text-foreground mb-2">Event Host & Organizer</h3>
              <p className="text-muted-foreground mb-2">
                Organized by <span className="text-foreground font-semibold">Azenath Cherono Bor</span>, aspiring
                Lawyer, Youth Empowerment Advocate, Climate Change Advocate, and Humanitarian.
              </p>
              <p className="text-muted-foreground">
                In collaboration with partners including UNEP, UNDP, and leading universities.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
