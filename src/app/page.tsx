import HeroSection from "@/components/sections/hero-section"
import AboutSection from "@/components/sections/about-section"

import SponsorshipSection from "@/components/sections/sponsorship-section"
import InnovationHubSection from "@/components/sections/innovation-hub-section"
import RegistrationSection from "@/components/sections/registration-section"
import ContactSection from "@/components/sections/contact-section"
import Footer from "@/components/sections/footer"
import ProgrammeSection from "@/components/sections/programme-section"
import SpeakersSection from "@/components/sections/speakers-section"
import Header from "@/components/sections/header"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <AboutSection />
      <ProgrammeSection />
      <SpeakersSection />
      <SponsorshipSection />
      <InnovationHubSection />
      <RegistrationSection />
      <ContactSection />
      <Footer />
    </main>
  )
}
