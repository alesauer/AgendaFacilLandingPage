"use client"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { Sparkles } from "lucide-react"
import { OnboardingModal } from "@/components/onboarding-modal"

const tabs = [
  { id: "conhecimento", label: "Conhecimento" },
  { id: "vantagens", label: "Vantagens" },
  { id: "comunidade", label: "Comunidade" },
  { id: "suporte", label: "Suporte" },
  { id: "treinamento", label: "Treinamento" },
]

const benefits = {
  conhecimento: {
    title: "Academia Barbeiros.app:",
    description: "acreditamos que conhecimento impulsiona negócios. Com o Barbeiros.app, você vai além do sistema e conta com conteúdos, materiais e iniciativas que ajudam a evoluir seu negócio. É por isso que criamos a Academia Barbeiros.app, nosso espaço de aprendizado com dicas, guias, vídeos e conteúdos práticos para apoiar quem empreende na beleza e bem-estar todos os dias.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-U9Jjxn9xHWmcdxxoJvy518YMBxuHAe.png",
    items: [],
  },
  vantagens: {
    title: "Programa de Vantagens:",
    description: "com nosso programa de benefícios, quanto mais você fica conosco, mais benefícios você ganha em confiar nos nossos serviços, desde brindes, sorteios e prêmios de fidelidade.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-vslamO6ijnVlz1WsEZox3hLukjkeBe.png",
    items: [],
  },
  comunidade: {
    title: "",
    description: "Entregamos mais que um sistema completo de gestão: conectamos você a uma comunidade exclusiva de gestores da beleza e bem-estar no WhatsApp, onde a troca de experiências, dicas e aprendizados impulsiona decisões mais seguras para o dia a dia e novas oportunidades para o seu negócio ir além.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-5OUB6BzmhsQsAPtBMwkUPsIlj8zqX4.png",
    items: [],
  },
  suporte: {
    title: "",
    description: "No Barbeiros.app, você conta com suporte gratuito e humanizado, feito de pessoas para pessoas, para ajudar em cada etapa da sua rotina. É atendimento próximo, ágil e parceiro para tirar dúvidas, destravar a gestão e garantir que você siga no controle do seu negócio.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-Eo5pVnO8WEMM7gr4Jz2rCjyi8pZFhI.png",
    items: [],
  },
  treinamento: {
    title: "",
    description: "",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-5YOC5v5sPqmxmNYLTQbiMiH9kCKqJE.png",
    items: [
      {
        title: "Barbeiros Ensina:",
        description: "treinamentos online e gratuitos, 2x na semana, pra você configurar: primeiros passos, atendimento e ferramentas de divulgação;",
      },
      {
        title: "Barbeiros Responde:",
        description: "toda quarta você tira as suas dúvidas ao vivo com nosso time;",
      },
      {
        title: "Barbeiros Ensina Edição Especial:",
        description: "treinamentos 2x ao mês sobre soluções específicas do sistema;",
      },
      {
        title: "O Caminho para o Sucesso:",
        description: "webinars gratuitos sobre gestão de negócios.",
      },
    ],
  },
}

export function OtherBenefits() {
  const [activeTab, setActiveTab] = useState("conhecimento")
  const [isOnboardingOpen, setIsOnboardingOpen] = useState(false)

  const currentBenefit = benefits[activeTab as keyof typeof benefits]

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
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={cn(
                "px-4 sm:px-6 py-2.5 rounded-full text-sm sm:text-base font-medium transition-all",
                activeTab === tab.id
                  ? "bg-[#2563ea] text-white shadow-lg"
                  : "bg-secondary text-muted-foreground hover:bg-secondary/80 hover:text-foreground"
              )}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Content */}
        <div className="mt-12 grid gap-8 lg:grid-cols-2 lg:gap-12 items-center">
          {/* Image */}
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-muted">
            <Image
              src={currentBenefit.image}
              alt={tabs.find(t => t.id === activeTab)?.label || ""}
              fill
              className="object-cover"
            />
          </div>

          {/* Text Content */}
          <div className="space-y-6">
            {currentBenefit.items.length > 0 ? (
              <ul className="space-y-4">
                {currentBenefit.items.map((item, index) => (
                  <li key={index} className="flex gap-3">
                    <Sparkles className="h-5 w-5 text-[#2563ea] shrink-0 mt-0.5" />
                    <p className="text-muted-foreground leading-relaxed">
                      <span className="font-semibold text-foreground">{item.title}</span>{" "}
                      {item.description}
                    </p>
                  </li>
                ))}
              </ul>
            ) : (
              <div className="flex gap-3">
                {currentBenefit.title && (
                  <Sparkles className="h-5 w-5 text-[#2563ea] shrink-0 mt-0.5" />
                )}
                <p className="text-muted-foreground leading-relaxed">
                  {currentBenefit.title && (
                    <span className="font-semibold text-foreground">{currentBenefit.title}</span>
                  )}{" "}
                  {currentBenefit.description}
                </p>
              </div>
            )}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-12 flex flex-col items-center">
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
