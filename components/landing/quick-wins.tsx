"use client"

import { useState } from "react"
import { CheckCircle2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { OnboardingModal } from "@/components/onboarding-modal"

const quickWins = [
  "Organiza toda sua agenda",
  "Ativa lembretes automáticos",
  "Reduz faltas de clientes",
  "Ganha mais controle financeiro"
]

export function QuickWins() {
  const [isOnboardingOpen, setIsOnboardingOpen] = useState(false)
  
  return (
    <section className="bg-card py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center lg:flex-row lg:items-start lg:gap-16">
          {/* Texto */}
          <div className="max-w-xl text-center lg:text-left">
            <span className="text-sm font-semibold uppercase tracking-wider text-accent">
              Resultado Imediato
            </span>
            <h2 className="mt-4 text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Em 1 dia usando Barbeiros.app você já:
            </h2>
            <p className="mt-4 text-pretty text-lg leading-relaxed text-muted-foreground">
              Comece a ver resultados desde o primeiro dia. 
              Sem complicação, sem curva de aprendizado.
            </p>
            <Button 
              size="lg" 
              className="mt-8 h-14 bg-[#2563ea] px-8 text-base font-semibold text-white hover:bg-[#1d4ed8]"
              onClick={() => setIsOnboardingOpen(true)}
            >
              Começar teste grátis
            </Button>
          </div>

          {/* Lista de Quick Wins */}
          <div className="mt-10 grid w-full max-w-md gap-4 lg:mt-0">
            {quickWins.map((win, index) => (
              <div 
                key={index}
                className="flex items-center gap-4 rounded-xl border border-border bg-background p-5 transition-all hover:border-primary/30 hover:shadow-sm"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground">
                  <CheckCircle2 className="h-5 w-5" />
                </div>
                <span className="text-lg font-medium text-foreground">{win}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      <OnboardingModal isOpen={isOnboardingOpen} onClose={() => setIsOnboardingOpen(false)} />
    </section>
  )
}
