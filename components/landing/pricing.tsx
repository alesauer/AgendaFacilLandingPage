"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Check, Star, Shield } from "lucide-react"
import { cn } from "@/lib/utils"
import { OnboardingModal } from "@/components/onboarding-modal"

const plans = [
  {
    name: "Essencial",
    description: "Para quem está começando ou tem uma base menor de clientes",
    originalPrice: 49.90,
    price: 29.90,
    popular: false,
    highlight: "Até 400 clientes cadastrados",
    features: [
      "Acesso a todas as funcionalidades",
      "Agenda inteligente completa",
      "Financeiro, CRM e relatórios",
      "Notificações por WhatsApp e e-mail",
      "Personalização da marca"
    ],
    cta: "Ideal para organizar sua operação sem pagar além do necessário."
  },
  {
    name: "Profissional",
    description: "Para barbearias em crescimento",
    originalPrice: 59.90,
    price: 39.90,
    popular: true,
    highlight: "Até 1000 clientes cadastrados",
    features: [
      "Todas as funcionalidades liberadas",
      "Mais capacidade para crescer com segurança",
      "Suporte prioritário"
    ],
    cta: "O plano ideal para quem quer escalar sem limitações no curto prazo."
  },
  {
    name: "Avançado",
    description: "Para operações maiores ou em expansão",
    originalPrice: 79.90,
    price: 49.90,
    popular: false,
    highlight: "Clientes ilimitados",
    features: [
      "Todas as funcionalidades liberadas",
      "Liberdade total para crescimento",
      "Ideal para múltiplas unidades"
    ],
    cta: "Perfeito para barbearias com alto volume ou múltiplas unidades."
  }
]

export function Pricing() {
  const [isAnnual, setIsAnnual] = useState(false)
  const [isOnboardingOpen, setIsOnboardingOpen] = useState(false)
  
  const getPrice = (monthlyPrice: number) => {
    if (isAnnual) {
      return monthlyPrice * 0.75 // 25% de desconto
    }
    return monthlyPrice
  }

  const getOriginalPrice = (originalPrice: number) => {
    if (isAnnual) {
      return originalPrice * 0.75
    }
    return originalPrice
  }

  return (
    <section className="bg-background py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-[#2563ea]">
            Planos e Preços
          </span>
          <h2 className="mt-4 text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Planos que crescem com você
          </h2>
          <p className="mt-4 text-pretty text-lg leading-relaxed text-muted-foreground">
            Todos os planos incluem <strong>todas as funcionalidades</strong> do Barbeiros.app.
            <br />Você escolhe apenas de acordo com o volume de clientes da sua operação.
          </p>
        </div>

        {/* Billing Toggle */}
        <div className="mt-10 flex items-center justify-center gap-4">
          <span className={cn(
            "text-sm font-medium transition-colors",
            !isAnnual ? "text-foreground" : "text-muted-foreground"
          )}>
            Mensal
          </span>
          <button
            onClick={() => setIsAnnual(!isAnnual)}
            className={cn(
              "relative h-7 w-14 rounded-full transition-colors",
              isAnnual ? "bg-[#2563ea]" : "bg-muted"
            )}
          >
            <span
              className={cn(
                "absolute top-1 h-5 w-5 rounded-full bg-white shadow-sm transition-all",
                isAnnual ? "left-8" : "left-1"
              )}
            />
          </button>
          <div className="flex items-center gap-2">
            <span className={cn(
              "text-sm font-medium transition-colors",
              isAnnual ? "text-foreground" : "text-muted-foreground"
            )}>
              Anual
            </span>
            <span className="rounded-full bg-green-100 px-2.5 py-0.5 text-xs font-semibold text-green-700 dark:bg-green-900/30 dark:text-green-400">
              -25%
            </span>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="mt-12 grid gap-8 lg:grid-cols-3">
          {plans.map((plan, index) => (
            <div 
              key={index}
              className={cn(
                "relative flex flex-col rounded-2xl border p-8 transition-all",
                plan.popular 
                  ? "border-[#2563ea] bg-card shadow-xl ring-2 ring-[#2563ea]" 
                  : "border-border bg-card hover:border-[#2563ea]/30 hover:shadow-md"
              )}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <div className="flex items-center gap-1 rounded-full bg-[#2563ea] px-4 py-1.5 text-sm font-semibold text-white">
                    <Star className="h-4 w-4 fill-current" />
                    Mais escolhido
                  </div>
                </div>
              )}

              <div className="text-center">
                <h3 className="text-xl font-bold text-foreground">{plan.name}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{plan.description}</p>
              </div>

              <div className="mt-6 text-center">
                <div className="text-sm text-muted-foreground line-through">
                  De R$ {getOriginalPrice(plan.originalPrice).toFixed(2).replace('.', ',')}
                </div>
                <div className="flex items-baseline justify-center gap-1">
                  <span className="text-sm text-muted-foreground">R$</span>
                  <span className="text-5xl font-bold text-foreground">{getPrice(plan.price).toFixed(2).replace('.', ',')}</span>
                  <span className="text-muted-foreground">/{isAnnual ? 'mês' : 'mês'}</span>
                </div>
                {isAnnual && (
                  <p className="mt-1 text-xs text-muted-foreground">
                    Cobrado anualmente (R$ {(getPrice(plan.price) * 12).toFixed(2).replace('.', ',')}/ano)
                  </p>
                )}
              </div>

              {/* Highlight */}
              <div className="mt-6 rounded-lg bg-[#2563ea]/10 p-3 text-center">
                <span className="font-semibold text-[#2563ea]">{plan.highlight}</span>
              </div>

              <ul className="mt-6 flex-1 space-y-4">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start gap-3">
                    <Check className="mt-0.5 h-5 w-5 shrink-0 text-[#2563ea]" />
                    <span className="text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>

              <p className="mt-4 text-sm text-muted-foreground italic">
                {plan.cta}
              </p>

              <Button 
                className={cn(
                  "mt-6 h-12 w-full text-base font-semibold",
                  plan.popular 
                    ? "bg-[#2563ea] text-white hover:bg-[#1d4ed8]" 
                    : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                )}
                variant={plan.popular ? "default" : "secondary"}
                onClick={() => setIsOnboardingOpen(true)}
              >
                Começar teste grátis
              </Button>
            </div>
          ))}
        </div>

        {/* Trust badges */}
        <div className="mt-16 rounded-2xl border border-border bg-card p-8">
          <div className="flex items-center justify-center gap-3 text-foreground">
            <Shield className="h-6 w-6 text-[#2563ea]" />
            <h3 className="text-lg font-semibold">Sem pegadinhas</h3>
          </div>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <div className="flex items-center gap-3">
              <Check className="h-5 w-5 text-[#2563ea]" />
              <span className="text-muted-foreground">Todas as funcionalidades em todos os planos</span>
            </div>
            <div className="flex items-center gap-3">
              <Check className="h-5 w-5 text-[#2563ea]" />
              <span className="text-muted-foreground">Sem cobrança por recurso extra</span>
            </div>
            <div className="flex items-center gap-3">
              <Check className="h-5 w-5 text-[#2563ea]" />
              <span className="text-muted-foreground">Sem fidelidade</span>
            </div>
            <div className="flex items-center gap-3">
              <Check className="h-5 w-5 text-[#2563ea]" />
              <span className="text-muted-foreground">Cancele quando quiser</span>
            </div>
          </div>
        </div>

        {/* Simple message */}
        <div className="mt-12 text-center">
          <p className="text-lg text-muted-foreground">
            Você não paga por feature. <strong className="text-foreground">Você paga apenas pelo tamanho da sua operação.</strong>
          </p>
        </div>
      </div>
      
      <OnboardingModal isOpen={isOnboardingOpen} onClose={() => setIsOnboardingOpen(false)} />
    </section>
  )
}
