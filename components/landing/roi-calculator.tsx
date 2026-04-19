"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Calculator, TrendingUp } from "lucide-react"
import { OnboardingModal } from "@/components/onboarding-modal"

export function ROICalculator() {
  const [atendimentosDia, setAtendimentosDia] = useState(20)
  const [ticketMedio, setTicketMedio] = useState(50)
  const [isOnboardingOpen, setIsOnboardingOpen] = useState(false)
  const taxaFalta = 0.1 // 10% de faltas

  const clientesPerdidosDia = atendimentosDia * taxaFalta
  const perdaDiaria = clientesPerdidosDia * ticketMedio
  const perdaMensal = perdaDiaria * 26 // 26 dias úteis
  const economiaComSistema = perdaMensal * 0.7 // Recupera 70%

  return (
    <section className="bg-[#2563ea] py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-12 lg:flex-row lg:gap-16">
          {/* Texto */}
          <div className="max-w-xl text-center lg:text-left">
            <span className="text-sm font-semibold uppercase tracking-wider text-white/70">
              Calculadora de ROI
            </span>
            <h2 className="mt-4 text-balance text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Descubra quanto você está perdendo com faltas de clientes
            </h2>
            <p className="mt-4 text-pretty text-lg leading-relaxed text-white/80">
              Se você recuperar apenas 2 clientes por semana que faltariam, 
              o sistema já se paga. Faça as contas:
            </p>

            {/* Inputs */}
            <div className="mt-8 flex flex-col gap-6">
              <div>
                <label className="block text-sm font-medium text-white/90">
                  Atendimentos por dia
                </label>
                <input
                  type="range"
                  min="5"
                  max="50"
                  value={atendimentosDia}
                  onChange={(e) => setAtendimentosDia(Number(e.target.value))}
                  className="mt-2 w-full accent-white"
                />
                <div className="mt-1 text-2xl font-bold text-white">{atendimentosDia}</div>
              </div>

              <div>
                <label className="block text-sm font-medium text-white/90">
                  Ticket Médio (R$)
                </label>
                <input
                  type="range"
                  min="20"
                  max="150"
                  step="5"
                  value={ticketMedio}
                  onChange={(e) => setTicketMedio(Number(e.target.value))}
                  className="mt-2 w-full accent-white"
                />
                <div className="mt-1 text-2xl font-bold text-white">R$ {ticketMedio}</div>
              </div>
            </div>
          </div>

          {/* Resultado */}
          <div className="w-full max-w-md rounded-2xl bg-card p-8 shadow-xl">
            <div className="flex items-center gap-3 text-destructive">
              <Calculator className="h-6 w-6" />
              <span className="text-sm font-semibold uppercase tracking-wider">Sua Perda Atual</span>
            </div>

            <div className="mt-6 space-y-4">
              <div className="flex items-center justify-between border-b border-border pb-3">
                <span className="text-muted-foreground">Clientes que faltam/dia (10%)</span>
                <span className="font-semibold text-foreground">{clientesPerdidosDia.toFixed(0)}</span>
              </div>
              <div className="flex items-center justify-between border-b border-border pb-3">
                <span className="text-muted-foreground">Perda por dia</span>
                <span className="font-semibold text-foreground">R$ {perdaDiaria.toFixed(0)}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-lg font-medium text-foreground">Perda por mês</span>
                <span className="text-2xl font-bold text-destructive">R$ {perdaMensal.toFixed(0)}</span>
              </div>
            </div>

            <div className="mt-8 rounded-xl bg-[#2563ea]/10 p-6">
              <div className="flex items-center gap-3 text-[#2563ea]">
                <TrendingUp className="h-6 w-6" />
                <span className="text-sm font-semibold uppercase tracking-wider">Com Barbeiros.app</span>
              </div>
              <p className="mt-3 text-sm text-muted-foreground">
                Com lembretes automáticos, você recupera até 70% dos clientes que faltariam:
              </p>
              <div className="mt-4 flex items-center justify-between">
                <span className="text-lg font-medium text-foreground">Economia mensal</span>
                <span className="text-2xl font-bold text-[#2563ea]">R$ {economiaComSistema.toFixed(0)}</span>
              </div>
            </div>

            <Button 
              className="mt-8 h-14 w-full bg-[#2563ea] text-base font-semibold text-white hover:bg-[#1d4ed8]"
              onClick={() => setIsOnboardingOpen(true)}
            >
              Começar a economizar agora
            </Button>
          </div>
        </div>
      </div>
      
      <OnboardingModal isOpen={isOnboardingOpen} onClose={() => setIsOnboardingOpen(false)} />
    </section>
  )
}
