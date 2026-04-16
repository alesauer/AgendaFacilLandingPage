"use client"

import { useState } from "react"
import { MessageCircle, Check, Bell, Clock } from "lucide-react"
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

          {/* Visual - WhatsApp Mockup */}
          <div className="relative flex items-center justify-center order-first lg:order-last">
            <div className="w-full max-w-[280px] sm:max-w-sm rounded-2xl sm:rounded-3xl bg-gradient-to-b from-muted/50 to-muted p-1.5 sm:p-2">
              {/* Phone frame */}
              <div className="rounded-xl sm:rounded-2xl bg-background shadow-xl overflow-hidden">
                {/* WhatsApp header */}
                <div className="flex items-center gap-2 sm:gap-3 bg-[#075E54] px-3 sm:px-4 py-2 sm:py-3">
                  <div className="flex h-8 w-8 sm:h-10 sm:w-10 items-center justify-center rounded-full bg-[#2563ea]">
                    <span className="text-xs sm:text-sm font-bold text-white">B</span>
                  </div>
                  <div>
                    <p className="text-sm sm:text-base font-semibold text-white">Barbeiros.app</p>
                    <p className="text-[10px] sm:text-xs text-white/70">online</p>
                  </div>
                </div>

                {/* Chat messages */}
                <div className="space-y-2 sm:space-y-3 bg-[#ECE5DD] p-2 sm:p-4">
                  {/* Message 1 */}
                  <div className="ml-auto max-w-[90%] sm:max-w-[85%] rounded-lg rounded-tr-none bg-[#DCF8C6] p-2 sm:p-3 shadow-sm">
                    <p className="text-xs sm:text-sm text-gray-800">
                      Oi! Lembrete: seu corte com <strong>Rafael</strong> e amanha as <strong>14:30</strong>.
                    </p>
                    <p className="mt-1 text-right text-[10px] sm:text-xs text-gray-500">10:30</p>
                  </div>

                  {/* Message 2 */}
                  <div className="ml-auto max-w-[90%] sm:max-w-[85%] rounded-lg rounded-tr-none bg-[#DCF8C6] p-2 sm:p-3 shadow-sm">
                    <p className="text-xs sm:text-sm text-gray-800">
                      Confirma presenca? Responda:
                    </p>
                    <p className="mt-1 sm:mt-2 text-xs sm:text-sm text-gray-800">
                      <strong>1</strong> - Confirmar<br />
                      <strong>2</strong> - Reagendar
                    </p>
                    <p className="mt-1 text-right text-[10px] sm:text-xs text-gray-500">10:30</p>
                  </div>

                  {/* Client response */}
                  <div className="mr-auto max-w-[90%] sm:max-w-[85%] rounded-lg rounded-tl-none bg-white p-2 sm:p-3 shadow-sm">
                    <p className="text-xs sm:text-sm text-gray-800">1</p>
                    <p className="mt-1 text-right text-[10px] sm:text-xs text-gray-500">10:32</p>
                  </div>

                  {/* Confirmation */}
                  <div className="ml-auto max-w-[90%] sm:max-w-[85%] rounded-lg rounded-tr-none bg-[#DCF8C6] p-2 sm:p-3 shadow-sm">
                    <p className="text-xs sm:text-sm text-gray-800">
                      <Check className="mb-0.5 inline h-3 w-3 sm:h-4 sm:w-4 text-[#2563ea]" /> Presenca confirmada! Ate amanha.
                    </p>
                    <p className="mt-1 text-right text-[10px] sm:text-xs text-gray-500">10:32</p>
                  </div>
                </div>

                {/* Input bar */}
                <div className="flex items-center gap-2 bg-[#F0F0F0] px-2 sm:px-4 py-2 sm:py-3">
                  <div className="flex-1 rounded-full bg-white px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm text-gray-400">
                    Mensagem
                  </div>
                  <div className="flex h-8 w-8 sm:h-10 sm:w-10 items-center justify-center rounded-full bg-[#075E54]">
                    <MessageCircle className="h-4 w-4 sm:h-5 sm:w-5 text-white" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
