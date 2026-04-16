"use client"

import { useState } from "react"
import { 
  Calendar, 
  Users, 
  DollarSign, 
  Bell, 
  Scissors, 
  BarChart3, 
  Palette, 
  Shield, 
  Link2,
  CheckCircle2,
  ArrowRight,
  ChevronDown
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { OnboardingModal } from "@/components/onboarding-modal"
import { cn } from "@/lib/utils"

const features = [
  {
    icon: Calendar,
    title: "Agenda inteligente que trabalha por voce",
    description: "Organizacao automatica da agenda em blocos de 15 minutos com calculo inteligente de disponibilidade.",
    benefits: [
      "Evita conflitos e sobreposicao de horarios",
      "Visual simples e rapido para voce e sua equipe",
      "Menos erros, menos horarios vazios"
    ],
    result: "Mais atendimentos por dia"
  },
  {
    icon: Users,
    title: "Gestao completa de clientes (CRM)",
    description: "Cadastro com telefone, e-mail e historico completo de cada cliente.",
    benefits: [
      "Acompanhamento de comportamento e frequencia",
      "Base organizada para fidelizacao",
      "Historico de servicos e preferencias"
    ],
    result: "Clientes voltam mais"
  },
  {
    icon: DollarSign,
    title: "Controle financeiro sem complicacao",
    description: "Visao clara do faturamento da barbearia em tempo real.",
    benefits: [
      "Acompanhamento de desempenho por profissional",
      "Controle por perfil (admin e funcionarios)",
      "Relatorios automaticos"
    ],
    result: "Decisoes baseadas em numeros"
  },
  {
    icon: Scissors,
    title: "Gestao de profissionais e comissoes",
    description: "Cadastro completo da equipe com definicao de comissao por profissional.",
    benefits: [
      "Controle de status e atividade",
      "Calculo automatico de comissoes",
      "Agenda individual por barbeiro"
    ],
    result: "Equipe mais organizada e motivada"
  },
  {
    icon: Bell,
    title: "Automacao e notificacoes inteligentes",
    description: "Confirmacoes e lembretes automaticos por WhatsApp.",
    benefits: [
      "Notificacoes antes do horario marcado",
      "Confirmacao com um clique",
      "Reducao drastica de faltas (no-show)"
    ],
    result: "Agenda mais cheia e menos prejuizo"
  },
  {
    icon: Palette,
    title: "Sua marca, sua identidade",
    description: "Personalizacao com logo e cores da sua barbearia.",
    benefits: [
      "Tela de agendamento customizada",
      "Experiencia profissional para seus clientes",
      "Link exclusivo para sua barbearia"
    ],
    result: "Mais credibilidade e valor percebido"
  },
  {
    icon: BarChart3,
    title: "Dashboard com visao do negocio",
    description: "Indicadores de desempenho e insights para tomada de decisao.",
    benefits: [
      "Acompanhamento de crescimento",
      "Metricas por periodo e profissional",
      "Identificacao de oportunidades"
    ],
    result: "Voce decide com dados, nao com achismo"
  },
  {
    icon: Shield,
    title: "Seguranca e estrutura profissional",
    description: "Dados isolados por barbearia com controle de acesso por tipo de usuario.",
    benefits: [
      "Sistema seguro e preparado para crescer",
      "Backup automatico dos dados",
      "Acesso de qualquer dispositivo"
    ],
    result: "Tranquilidade para focar no seu negocio"
  },
  {
    icon: Link2,
    title: "Integracoes que potencializam",
    description: "Integracao com WhatsApp para comunicacao automatica.",
    benefits: [
      "Envio de e-mails transacionais",
      "Base preparada para pagamentos",
      "API para integracoes futuras"
    ],
    result: "Mais automacao e menos trabalho manual"
  },
]

export function Features() {
  const [isOnboardingOpen, setIsOnboardingOpen] = useState(false)
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null)
  
  const toggleExpand = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index)
  }
  
  return (
    <section className="bg-muted/30 py-16 lg:py-24">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-[#2563ea]">
            Funcionalidades
          </span>
          <h2 className="mt-4 text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Tudo que voce precisa para gerenciar sua barbearia em um so lugar
          </h2>
          <p className="mt-4 text-pretty text-lg leading-relaxed text-muted-foreground">
            Do agendamento ao financeiro, o Barbeiros.app centraliza sua operacao e 
            automatiza tarefas que hoje consomem seu tempo.
          </p>
        </div>

        {/* Features Accordion */}
        <div className="mt-12 space-y-3">
          {features.map((feature, index) => {
            const Icon = feature.icon
            const isExpanded = expandedIndex === index
            
            return (
              <div 
                key={index}
                className={cn(
                  "rounded-xl border bg-card transition-all duration-300",
                  isExpanded 
                    ? "border-[#2563ea]/50 shadow-lg shadow-[#2563ea]/5" 
                    : "border-border hover:border-[#2563ea]/30"
                )}
              >
                {/* Header - Always visible */}
                <button
                  onClick={() => toggleExpand(index)}
                  className="flex w-full items-center justify-between gap-4 p-4 sm:p-5 text-left"
                >
                  <div className="flex items-center gap-3 sm:gap-4">
                    <div className={cn(
                      "flex h-10 w-10 sm:h-12 sm:w-12 shrink-0 items-center justify-center rounded-lg transition-colors",
                      isExpanded 
                        ? "bg-[#2563ea] text-white" 
                        : "bg-[#2563ea]/10 text-[#2563ea]"
                    )}>
                      <Icon className="h-5 w-5 sm:h-6 sm:w-6" />
                    </div>
                    <h3 className="text-base sm:text-lg font-semibold text-foreground">
                      {feature.title}
                    </h3>
                  </div>
                  <ChevronDown 
                    className={cn(
                      "h-5 w-5 shrink-0 text-muted-foreground transition-transform duration-300",
                      isExpanded && "rotate-180 text-[#2563ea]"
                    )} 
                  />
                </button>

                {/* Expandable Content */}
                <div 
                  className={cn(
                    "grid transition-all duration-300 ease-in-out",
                    isExpanded ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                  )}
                >
                  <div className="overflow-hidden">
                    <div className="px-4 pb-5 sm:px-5 sm:pb-6 pt-0">
                      {/* Description */}
                      <p className="text-sm sm:text-base leading-relaxed text-muted-foreground pl-14 sm:pl-16">
                        {feature.description}
                      </p>

                      {/* Benefits List */}
                      <ul className="mt-4 space-y-2 pl-14 sm:pl-16">
                        {feature.benefits.map((benefit, benefitIndex) => (
                          <li key={benefitIndex} className="flex items-start gap-2 text-sm text-muted-foreground">
                            <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#2563ea]" />
                            <span>{benefit}</span>
                          </li>
                        ))}
                      </ul>

                      {/* Result Badge */}
                      <div className="mt-4 ml-14 sm:ml-16 inline-flex items-center gap-2 rounded-lg bg-[#2563ea]/10 px-3 py-2">
                        <ArrowRight className="h-4 w-4 text-[#2563ea]" />
                        <span className="text-sm font-medium text-[#2563ea]">{feature.result}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 text-center">
          <p className="mb-6 text-lg text-muted-foreground">
            Tudo isso funcionando em poucos minutos. Sem instalacao, sem complicacao.
          </p>
          <Button 
            size="lg" 
            className="h-14 bg-[#2563ea] px-8 text-base font-semibold text-white hover:bg-[#1d4ed8]"
            onClick={() => setIsOnboardingOpen(true)}
          >
            Comecar teste gratis
          </Button>
        </div>
      </div>
      
      <OnboardingModal isOpen={isOnboardingOpen} onClose={() => setIsOnboardingOpen(false)} />
    </section>
  )
}
