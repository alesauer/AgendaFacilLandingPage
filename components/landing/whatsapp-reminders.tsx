"use client"

import { useState } from "react"
import { MessageCircle, Bell, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"
import { OnboardingModal } from "@/components/onboarding-modal"

export function WhatsAppReminders() {
  const [isOnboardingOpen, setIsOnboardingOpen] = useState(false)
  const benefits = [
    {
      icon: MessageCircle,
      title: "98% de taxa de abertura",
      description: "WhatsApp tem a maior taxa de leitura entre todos os canais"
    },
    {
      icon: Bell,
      title: "Lembretes automáticos",
      description: "24h e 1h antes do horário agendado, sem você fazer nada"
    },
    {
      icon: Clock,
      title: "Confirmação instantânea",
      description: "Cliente confirma ou reagenda com um clique, direto no WhatsApp"
    }
  ]

  return (
    <section className="bg-card py-12 sm:py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-8 sm:gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Content */}
          <div>
            <span className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-[#2563ea]">
              Lembretes Inteligentes
            </span>
            <h2 className="mt-3 sm:mt-4 text-balance text-2xl sm:text-3xl font-bold tracking-tight text-foreground lg:text-4xl">
              Lembretes que seus clientes realmente leem.
            </h2>
            <p className="mt-4 sm:mt-6 text-pretty text-base sm:text-lg leading-relaxed text-muted-foreground">
              Esqueca o SMS que ninguem abre ou o e-mail que cai no spam. O Barbeiros.app 
              envia notificacoes automaticas direto no WhatsApp do seu cliente, onde ele 
              passa o dia todo.
            </p>

            <ul className="mt-6 sm:mt-8 space-y-3 sm:space-y-4">
              {benefits.map((benefit, index) => {
                const Icon = benefit.icon
                return (
                  <li key={index} className="flex items-start gap-3 sm:gap-4">
                    <div className="flex h-8 w-8 sm:h-10 sm:w-10 shrink-0 items-center justify-center rounded-lg bg-[#2563ea]/10 text-[#2563ea]">
                      <Icon className="h-4 w-4 sm:h-5 sm:w-5" />
                    </div>
                    <div>
                      <h3 className="text-sm sm:text-base font-semibold text-foreground">{benefit.title}</h3>
                      <p className="text-xs sm:text-sm text-muted-foreground">{benefit.description}</p>
                    </div>
                  </li>
                )
              })}
            </ul>

            <Button 
              size="lg" 
              className="mt-8 sm:mt-10 h-12 sm:h-14 w-full sm:w-auto bg-[#2563ea] px-6 sm:px-8 text-sm sm:text-base font-semibold text-white hover:bg-[#1d4ed8]"
              onClick={() => setIsOnboardingOpen(true)}
            >
              Comecar teste gratis
            </Button>
            
            <OnboardingModal isOpen={isOnboardingOpen} onClose={() => setIsOnboardingOpen(false)} />
          </div>

          {/* Visual - Video */}
          <div className="relative flex items-center justify-center order-first lg:order-last py-8 lg:py-0">
            <div 
              className="w-full max-w-[180px] sm:max-w-[220px] rounded-2xl sm:rounded-3xl bg-gradient-to-b from-[#2563ea]/20 to-muted/40 p-1 sm:p-1.5 overflow-hidden shadow-2xl transition-transform hover:scale-105"
              style={{ 
                transform: 'perspective(1000px) rotateY(-6deg) rotateX(3deg)',
              }}
            >
              <video
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-auto rounded-xl sm:rounded-2xl shadow-inner"
              >
                <source src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/barbeiros-8cWD9l5WBs9WnokQI0zuX9HC6XdfJ1.mp4" type="video/mp4" />
                Seu navegador nao suporta video.
              </video>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
