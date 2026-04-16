"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight, Shield, Clock, Headphones } from "lucide-react"
import { OnboardingModal } from "@/components/onboarding-modal"

export function CTA() {
  const [isOnboardingOpen, setIsOnboardingOpen] = useState(false)
  
  return (
    <section className="bg-[#2563ea] py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-balance text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
            Transforme sua barbearia em uma máquina de faturamento previsível
          </h2>
          <p className="mt-6 text-pretty text-lg leading-relaxed text-white/80">
            Junte-se a mais de 2.500 barbearias que já estão economizando tempo e 
            aumentando o faturamento com Barbeiros.app.
          </p>

          {/* CTA Buttons */}
          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Button 
              size="lg" 
              className="h-14 bg-card px-8 text-base font-semibold text-foreground hover:bg-card/90"
              onClick={() => setIsOnboardingOpen(true)}
            >
              Começar teste grátis de 14 dias
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>

          {/* Trust Badges */}
          <div className="mt-12 flex flex-wrap items-center justify-center gap-8 text-sm text-white/70">
            <div className="flex items-center gap-2">
              <Shield className="h-5 w-5" />
              <span>Sem cartão de crédito</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="h-5 w-5" />
              <span>Setup em 5 minutos</span>
            </div>
            <div className="flex items-center gap-2">
              <Headphones className="h-5 w-5" />
              <span>Suporte humanizado</span>
            </div>
          </div>
        </div>
      </div>
      
      <OnboardingModal isOpen={isOnboardingOpen} onClose={() => setIsOnboardingOpen(false)} />
    </section>
  )
}
