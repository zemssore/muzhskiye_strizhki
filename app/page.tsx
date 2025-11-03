import { HeroSection } from "@/components/hero-section"
import { ServicesSection } from "@/components/services-section"
import { BookingSection } from "@/components/booking-section"

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <ServicesSection />
      <BookingSection />
    </main>
  )
}
