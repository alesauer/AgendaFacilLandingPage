"use client"

import { useState } from "react"
import {
  Calendar,
  CalendarCheck,
  Scissors,
  Users,
  History,
  Heart,
  DollarSign,
  BarChart3,
  MessageCircle,
  Mail,
  Bell,
  type LucideIcon,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { OnboardingModal } from "@/components/onboarding-modal"

type FeatureItem = {
  icon: LucideIcon
  title: string
  description: string
}

type FeatureGroup = {
  category: string
  accent: string
  items: FeatureItem[]
}

const groups: FeatureGroup[] = [
  {
    category: "Agenda e Operação",
    accent: "#2563ea",
    items: [
      {
        icon: Calendar,
        title: "Agenda",
        description: "Visão clara dos horários da barbearia em blocos inteligentes, sem conflitos.",
      },
      {
        icon: CalendarCheck,
        title: "Agendamentos",
        description: "Clientes marcam online por um link exclusivo, 24 horas por dia.",
      },
      {
        icon: Scissors,
        title: "Profissionais",
        description: "Agenda individual por barbeiro, com controle de status e disponibilidade.",
      },
    ],
  },
  {
    category: "Clientes e Relacionamento",
    accent: "#2563ea",
    items: [
      {
        icon: Users,
        title: "CRM",
        description: "Base completa de clientes com telefone, e-mail e dados de contato.",
      },
      {
        icon: History,
        title: "Histórico",
        description: "Registro de serviços, preferências e frequência de cada cliente.",
      },
      {
        icon: Heart,
        title: "Fidelização",
        description: "Acompanhe o comportamento e traga os clientes de volta com mais frequência.",
      },
    ],
  },
  {
    category: "Financeiro",
    accent: "#2563ea",
    items: [
      {
        icon: DollarSign,
        title: "Fluxo financeiro",
        description: "Faturamento em tempo real e cálculo automático de comissões por profissional.",
      },
      {
        icon: BarChart3,
        title: "Relatórios",
        description: "Indicadores por período e profissional para decidir com dados, não com achismo.",
      },
    ],
  },
  {
    category: "Automação",
    accent: "#2563ea",
    items: [
      {
        icon: MessageCircle,
        title: "WhatsApp",
        description: "Confirmações e comunicação automática direto no WhatsApp do cliente.",
      },
      {
        icon: Mail,
        title: "Email",
        description: "Envio de e-mails transacionais e avisos importantes de forma automática.",
      },
      {
        icon: Bell,
        title: "Lembretes",
        description: "Notificações antes do horário marcado para reduzir faltas (no-show).",
      },
    ],
  },
]

export function Features() {
  const [isOnboardingOpen, setIsOnboardingOpen] = useState(false)

  return (
    <section className="bg-muted/30 py-16 lg:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-[#2563ea]">
            Funcionalidades
          </span>
          <h2 className="mt-4 text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Tudo que você precisa para gerenciar sua barbearia em um só lugar
          </h2>
          <p className="mt-4 text-pretty text-lg leading-relaxed text-muted-foreground">
            Do agendamento ao financeiro, o Barbeiros.app centraliza sua operação e
            automatiza tarefas que hoje consomem seu tempo.
          </p>
        </div>

        {/* Feature Groups */}
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {groups.map((group) => (
            <div
              key={group.category}
              className="rounded-2xl border border-border bg-card p-6 sm:p-8"
            >
              <h3 className="text-lg font-bold text-foreground">{group.category}</h3>
              <div className="mt-6 flex flex-col gap-5">
                {group.items.map((item) => {
                  const Icon = item.icon
                  return (
                    <div key={item.title} className="flex items-start gap-4">
                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-[#2563ea]/10 text-[#2563ea]">
                        <Icon className="h-5 w-5" />
                      </div>
                      <div>
                        <h4 className="text-base font-semibold text-foreground">{item.title}</h4>
                        <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 text-center">
          <p className="mb-6 text-lg text-muted-foreground">
            Tudo isso funcionando em poucos minutos. Sem instalação, sem complicação.
          </p>
          <Button
            size="lg"
            className="h-14 bg-[#2563ea] px-8 text-base font-semibold text-white hover:bg-[#1d4ed8]"
            onClick={() => setIsOnboardingOpen(true)}
          >
            Testar Grátis
          </Button>

          {/* Microcopy */}
          <p className="mt-3 text-sm text-muted-foreground">
            14 dias grátis • Sem cartão • Sem compromisso
          </p>
        </div>
      </div>

      <OnboardingModal isOpen={isOnboardingOpen} onClose={() => setIsOnboardingOpen(false)} />
    </section>
  )
}
