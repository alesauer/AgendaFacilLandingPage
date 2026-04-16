import { Header } from "@/components/landing/header"
import { Hero } from "@/components/landing/hero"
import { QuickWins } from "@/components/landing/quick-wins"
import { Features } from "@/components/landing/features"
import { ROICalculator } from "@/components/landing/roi-calculator"
import { WhatsAppReminders } from "@/components/landing/whatsapp-reminders"
import { Objections } from "@/components/landing/objections"
import { Pricing } from "@/components/landing/pricing"
import { Testimonials } from "@/components/landing/testimonials"
import { CTA } from "@/components/landing/cta"
import { Footer } from "@/components/landing/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <QuickWins />
        <section id="funcionalidades">
          <Features />
        </section>
        <ROICalculator />
        <WhatsAppReminders />
        <section id="precos">
          <Pricing />
        </section>
        <section id="faq">
          <Objections />
        </section>
        <section id="depoimentos">
          <Testimonials />
        </section>
        <CTA />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  )
}
