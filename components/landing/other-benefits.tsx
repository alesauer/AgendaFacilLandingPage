"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { 
  Sparkles, 
  GraduationCap, 
  Gift, 
  Users, 
  Headphones, 
  PlayCircle,
  Check,
  Star,
  Trophy,
  MessageCircle,
  BookOpen,
  Video,
  Zap
} from "lucide-react"
import { OnboardingModal } from "@/components/onboarding-modal"

const tabs = [
  { id: "conhecimento", label: "Conhecimento", icon: GraduationCap },
  { id: "vantagens", label: "Vantagens", icon: Gift },
  { id: "comunidade", label: "Comunidade", icon: Users },
  { id: "suporte", label: "Suporte", icon: Headphones },
  { id: "treinamento", label: "Treinamento", icon: PlayCircle },
]

const benefits = {
  conhecimento: {
    icon: GraduationCap,
    title: "Academia Barbeiros.app",
    subtitle: "Conhecimento que impulsiona seu negócio",
    description: "Vá além do sistema com conteúdos, materiais e iniciativas que ajudam a evoluir seu negócio. Nossa Academia é seu espaço de aprendizado com dicas, guias, vídeos e conteúdos práticos.",
    items: [
      { icon: BookOpen, text: "Guias práticos e materiais exclusivos", badge: "Gratuito" },
      { icon: Video, text: "Vídeos e tutoriais passo a passo", badge: null },
      { icon: Zap, text: "Conteúdos atualizados toda semana", badge: "Novo" },
      { icon: Star, text: "Apoio para quem empreende na beleza", badge: null },
    ],
  },
  vantagens: {
    icon: Gift,
    title: "Programa de Vantagens",
    subtitle: "Quanto mais você fica, mais você ganha",
    description: "Com nosso programa de benefícios, quanto mais você fica conosco, mais benefícios você ganha em confiar nos nossos serviços.",
    items: [
      { icon: Gift, text: "Brindes exclusivos para clientes fiéis", badge: "Exclusivo" },
      { icon: Trophy, text: "Sorteios mensais de prêmios", badge: null },
      { icon: Star, text: "Prêmios de fidelidade progressivos", badge: null },
      { icon: Zap, text: "Acesso antecipado a novidades", badge: "VIP" },
    ],
  },
  comunidade: {
    icon: Users,
    title: "Comunidade Exclusiva",
    subtitle: "Conecte-se com outros gestores",
    description: "Mais que um sistema: uma comunidade exclusiva de gestores da beleza e bem-estar no WhatsApp para trocar experiências e crescer juntos.",
    items: [
      { icon: MessageCircle, text: "Grupo exclusivo no WhatsApp", badge: "Exclusivo" },
      { icon: Users, text: "Networking com outros gestores", badge: null },
      { icon: Zap, text: "Troca de experiências e dicas", badge: null },
      { icon: Star, text: "Oportunidades de parcerias", badge: "Novo" },
    ],
  },
  suporte: {
    icon: Headphones,
    title: "Suporte Humanizado",
    subtitle: "Pessoas de verdade, prontas para ajudar",
    description: "Suporte gratuito e humanizado, feito de pessoas para pessoas, para ajudar em cada etapa da sua rotina.",
    items: [
      { icon: Headphones, text: "Atendimento próximo e ágil", badge: "Gratuito" },
      { icon: MessageCircle, text: "Chat em tempo real", badge: null },
      { icon: Check, text: "Resolução rápida de dúvidas", badge: null },
      { icon: Star, text: "Time especializado em barbearias", badge: null },
    ],
  },
  treinamento: {
    icon: PlayCircle,
    title: "Treinamentos ao Vivo",
    subtitle: "Aprenda na prática com nosso time",
    description: "Treinamentos online e gratuitos para você dominar o sistema e alavancar seu negócio.",
    items: [
      { icon: Video, text: "Barbeiros Ensina: 2x por semana", badge: "Gratuito" },
      { icon: MessageCircle, text: "Barbeiros Responde: tira-dúvidas ao vivo", badge: "Toda quarta" },
      { icon: BookOpen, text: "Edição Especial: soluções avançadas", badge: "2x ao mês" },
      { icon: Trophy, text: "Webinars sobre gestão de negócios", badge: null },
    ],
  },
}

export function OtherBenefits() {
  const [activeTab, setActiveTab] = useState("conhecimento")
  const [isOnboardingOpen, setIsOnboardingOpen] = useState(false)

  const currentBenefit = benefits[activeTab as keyof typeof benefits]
  const ActiveIcon = currentBenefit.icon

  return (
    <section className="py-20 sm:py-28 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Outros benefícios
          </h2>
          
          {/* Decorative line with star */}
          <div className="mt-4 flex items-center justify-center gap-2">
            <div className="h-0.5 w-16 bg-[#2563ea]" />
            <Sparkles className="h-4 w-4 text-[#2563ea]" />
            <div className="h-0.5 w-16 bg-[#2563ea]" />
          </div>
        </div>

        {/* Tabs */}
        <div className="mt-10 flex flex-wrap justify-center gap-2 sm:gap-4">
          {tabs.map((tab) => {
            const TabIcon = tab.icon
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={cn(
                  "flex items-center gap-2 px-4 sm:px-6 py-2.5 rounded-full text-sm sm:text-base font-medium transition-all",
                  activeTab === tab.id
                    ? "bg-[#2563ea] text-white shadow-lg"
                    : "bg-secondary text-muted-foreground hover:bg-secondary/80 hover:text-foreground"
                )}
              >
                <TabIcon className="h-4 w-4" />
                <span className="hidden sm:inline">{tab.label}</span>
              </button>
            )
          })}
        </div>

        {/* Content */}
        <div className="mt-12 flex flex-col lg:flex-row gap-8 lg:gap-12 items-start">
          {/* Icon + Title Section */}
          <div className="lg:w-1/3 flex flex-col items-center lg:items-start text-center lg:text-left">
            <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-[#2563ea]/10 mb-6">
              <ActiveIcon className="h-10 w-10 text-[#2563ea]" />
            </div>
            <h3 className="text-2xl font-bold text-foreground">
              {currentBenefit.title}
            </h3>
            <p className="mt-2 text-lg text-[#2563ea] font-medium">
              {currentBenefit.subtitle}
            </p>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              {currentBenefit.description}
            </p>
          </div>

          {/* Benefits List */}
          <div className="lg:w-2/3 grid gap-4 sm:grid-cols-2">
            {currentBenefit.items.map((item, index) => {
              const ItemIcon = item.icon
              return (
                <div 
                  key={index}
                  className="flex items-start gap-4 p-4 rounded-xl bg-card border border-border hover:border-[#2563ea]/30 hover:shadow-md transition-all"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#2563ea]/10">
                    <ItemIcon className="h-5 w-5 text-[#2563ea]" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className="text-foreground font-medium">{item.text}</span>
                      {item.badge && (
                        <span className="inline-flex items-center rounded-full bg-[#2563ea]/10 px-2 py-0.5 text-xs font-semibold text-[#2563ea]">
                          {item.badge}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-16 flex flex-col items-center">
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

      <OnboardingModal 
        isOpen={isOnboardingOpen} 
        onClose={() => setIsOnboardingOpen(false)} 
      />
    </section>
  )
}
