"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Calendar, Clock, TrendingUp, Users } from "lucide-react"
import { VideoModal } from "@/components/video-modal"
import { OnboardingModal } from "@/components/onboarding-modal"

export function Hero() {
  const [isVideoOpen, setIsVideoOpen] = useState(false)
  const [isOnboardingOpen, setIsOnboardingOpen] = useState(false)
  return (
    <section className="relative overflow-hidden bg-background py-20 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center">
          {/* Big Promise */}
          <h1 className="max-w-4xl text-balance text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            Pare de perder dinheiro com{" "}
            <span className="text-[#2563ea]">horários vazios</span> na sua barbearia
          </h1>

          <p className="mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground sm:text-xl">
            Sua agenda lotada e sua operação organizada — automaticamente. 
            Menos tempo na gestão, mais tempo no atendimento.
          </p>

          {/* CTAs */}
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Button 
              size="lg" 
              className="h-14 bg-[#2563ea] px-8 text-base font-semibold text-white hover:bg-[#1d4ed8]"
              onClick={() => setIsOnboardingOpen(true)}
            >
              Começar teste grátis
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="h-14 border-[#2563ea] px-8 text-base font-semibold text-[#2563ea] hover:bg-[#2563ea] hover:text-white"
              onClick={() => setIsVideoOpen(true)}
            >
              Ver demonstração
            </Button>
          </div>

          {/* Social Proof rápido */}
          <div className="mt-12 flex flex-wrap items-center justify-center gap-8 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <Users className="h-5 w-5 text-primary" />
              <span><strong className="text-foreground">+2.500</strong> barbearias</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="h-5 w-5 text-primary" />
              <span><strong className="text-foreground">+150 mil</strong> agendamentos/mês</span>
            </div>
            <div className="flex items-center gap-2">
              <TrendingUp className="h-5 w-5 text-primary" />
              <span><strong className="text-foreground">-70%</strong> faltas de clientes</span>
            </div>
          </div>
        </div>

        {/* Stats - Mobile: marquee ticker / Desktop: grid */}
        <div className="mt-16 sm:mt-20">
          {/* Mobile: Marquee ticker */}
          <div className="relative overflow-hidden sm:hidden">
            <style jsx>{`
              @keyframes marquee-scroll {
                0% { transform: translateX(0); }
                100% { transform: translateX(-50%); }
              }
              .marquee-track {
                animation: marquee-scroll 12s linear infinite;
              }
            `}</style>
            <div className="marquee-track flex" style={{ width: 'fit-content' }}>
              <div className="flex shrink-0 gap-8 px-4">
                <StatItem value="20 dias" label="economizados/mes" />
                <StatItem value="98%" label="menos no-shows" />
                <StatItem value="+35%" label="mais faturamento" />
                <StatItem value="6x" label="clientes recorrentes" />
              </div>
              <div className="flex shrink-0 gap-8 px-4">
                <StatItem value="20 dias" label="economizados/mes" />
                <StatItem value="98%" label="menos no-shows" />
                <StatItem value="+35%" label="mais faturamento" />
                <StatItem value="6x" label="clientes recorrentes" />
              </div>
            </div>
          </div>
          
          {/* Desktop: Grid cards */}
          <div className="hidden sm:grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <StatCard 
              icon={<Calendar className="h-6 w-6" />}
              value="20 dias"
              label="economizados por mes"
            />
            <StatCard 
              icon={<Clock className="h-6 w-6" />}
              value="98%"
              label="menos no-shows"
            />
            <StatCard 
              icon={<TrendingUp className="h-6 w-6" />}
              value="+35%"
              label="aumento no faturamento"
            />
            <StatCard 
              icon={<Users className="h-6 w-6" />}
              value="6x"
              label="mais clientes recorrentes"
            />
          </div>
        </div>
      </div>

      {/* Video Modal */}
      <VideoModal isOpen={isVideoOpen} onClose={() => setIsVideoOpen(false)} />
      
      {/* Onboarding Modal */}
      <OnboardingModal isOpen={isOnboardingOpen} onClose={() => setIsOnboardingOpen(false)} />
    </section>
  )
}

function StatItem({ value, label }: { value: string; label: string }) {
  return (
    <div className="flex flex-col items-center text-center min-w-[100px]">
      <p className="text-2xl font-bold text-[#2563ea]">{value}</p>
      <p className="text-xs text-muted-foreground whitespace-nowrap">{label}</p>
    </div>
  )
}

function StatCard({ icon, value, label }: { icon: React.ReactNode; value: string; label: string }) {
  return (
    <div className="flex flex-col items-start gap-3 rounded-xl border border-border bg-card p-6 transition-all hover:border-[#2563ea]/30 hover:shadow-md">
      <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-[#2563ea]/10 text-[#2563ea]">
        {icon}
      </div>
      <div>
        <p className="text-2xl font-bold text-foreground">{value}</p>
        <p className="text-sm text-muted-foreground">{label}</p>
      </div>
    </div>
  )
}
