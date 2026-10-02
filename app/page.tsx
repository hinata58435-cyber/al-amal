import { HeroSection } from '@/components/home/hero-section'
import { AboutSection } from '@/components/home/about-section'
import { ServicesSection } from '@/components/home/services-section'
import { ContactSection } from '@/components/home/contact-section'

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <ContactSection />
    </>
  )
}
