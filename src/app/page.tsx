import HeroSection from "@/components/sections/hero-section"
import AboutSection from "@/components/sections/about-section"
import ProgrammeSection from "@/components/sections/programme-section"

import SponsorshipSection from "@/components/sections/sponsorship-section"
import RegistrationSection from "@/components/sections/registration-section"
import Footer from "@/components/sections/footer"
import Header from "@/components/sections/header"
import { generateMetadata, generateEventSchema, SITE_CONFIG } from "@/lib/seo-utils"
import { Metadata } from "next"

export const metadata: Metadata = generateMetadata({
  title: "Africa Youth, Business & Climate Innovation Forum 2026",
  description: "Join AYBCIF 2026 in Nairobi, Kenya. Three days of innovation, networking, and collaboration bringing together 2,000+ African youth, business leaders, and climate experts.",
  keywords: [
    ...SITE_CONFIG.keywords,
    "Sustainable Futures",
    "Youth Innovation",
    "Climate Solutions",
    "African Development",
    "AYBCIF 2026",
  ],
  canonical: SITE_CONFIG.url,
})


export default function Home() {
  const eventSchema = generateEventSchema()

  return (
    <main className="min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(eventSchema) }}
      />
      <Header />
      <HeroSection />
      <AboutSection />
      <ProgrammeSection />

      <SponsorshipSection />
      <RegistrationSection />
      <Footer />
    </main>
  )
}
