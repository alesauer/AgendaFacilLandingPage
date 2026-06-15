"use client"

import { useState, useEffect, useRef } from "react"
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
  Check,
  CheckCheck,
  TrendingUp,
  Phone,
  type LucideIcon,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { OnboardingModal } from "@/components/onboarding-modal"

const ACCENT = "#2563ea"

/* -------------------------------------------------------------------------- */
/*  Hook: reveal on viewport                                                  */
/* -------------------------------------------------------------------------- */

function useInView<T extends HTMLElement = HTMLDivElement>(options?: IntersectionObserverInit) {
  const ref = useRef<T | null>(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const node = ref.current
    if (!node) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true)
          observer.disconnect()
        }
      },
      { threshold: 0.3, ...options },
    )
    observer.observe(node)
    return () => observer.disconnect()
  }, [options])

  return { ref, inView }
}

/* -------------------------------------------------------------------------- */
/*  Hook: animated counter                                                    */
/* -------------------------------------------------------------------------- */

function useCountUp(target: number, active: boolean, duration = 1400) {
  const [value, setValue] = useState(0)

  useEffect(() => {
    if (!active) return
    let raf = 0
    const start = performance.now()
    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setValue(Math.round(eased * target))
      if (progress < 1) raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [target, active, duration])

  return value
}

/* -------------------------------------------------------------------------- */
/*  Feature item chip                                                         */
/* -------------------------------------------------------------------------- */

function FeatureChip({ icon: Icon, label }: { icon: LucideIcon; label: string }) {
  return (
    <span className="inline-flex items-center gap-1.5 rounded-full border border-border bg-background/60 px-3 py-1 text-xs font-medium text-muted-foreground backdrop-blur">
      <Icon className="h-3.5 w-3.5 text-[#2563ea]" />
      {label}
    </span>
  )
}

/* -------------------------------------------------------------------------- */
/*  Card shell                                                                */
/* -------------------------------------------------------------------------- */

function BentoCard({
  icon: Icon,
  category,
  description,
  chips,
  visual,
  className = "",
  delay = 0,
}: {
  icon: LucideIcon
  category: string
  description: string
  chips: { icon: LucideIcon; label: string }[]
  visual: (active: boolean) => React.ReactNode
  className?: string
  delay?: number
}) {
  const { ref, inView } = useInView<HTMLDivElement>()

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`group relative flex flex-col overflow-hidden rounded-3xl border border-white/10 bg-card/70 p-6 shadow-lg backdrop-blur-xl transition-all duration-700 ease-out hover:-translate-y-1 hover:border-[#2563ea]/40 hover:shadow-[0_20px_60px_-20px_rgba(37,99,234,0.45)] sm:p-8 ${
        inView ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
      } ${className}`}
    >
      {/* glow */}
      <div className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-[#2563ea]/10 blur-3xl transition-opacity duration-500 group-hover:opacity-100 opacity-60" />

      <div className="relative flex items-center gap-3">
        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#2563ea]/15 text-[#2563ea] ring-1 ring-inset ring-[#2563ea]/20">
          <Icon className="h-5 w-5" />
        </div>
        <h3 className="text-lg font-bold text-foreground">{category}</h3>
      </div>

      <p className="relative mt-3 text-sm leading-relaxed text-muted-foreground">{description}</p>

      {/* Visualization */}
      <div className="relative mt-6 flex-1">{visual(inView)}</div>

      {/* Chips */}
      <div className="relative mt-6 flex flex-wrap gap-2">
        {chips.map((chip) => (
          <FeatureChip key={chip.label} icon={chip.icon} label={chip.label} />
        ))}
      </div>
    </div>
  )
}

/* -------------------------------------------------------------------------- */
/*  Visual 1 — Agenda                                                         */
/* -------------------------------------------------------------------------- */

function AgendaVisual(active: boolean) {
  const days = ["SEG", "TER", "QUA", "QUI", "SEX", "SÁB"]
  // 24 células (4 horários x 6 dias). 0 = livre, 1 = confirmado, 2 = concluído
  const grid = [
    2, 1, 0, 1, 2, 1,
    1, 2, 1, 0, 1, 2,
    0, 1, 2, 1, 1, 0,
    1, 0, 1, 2, 0, 1,
  ]
  const color = (s: number) =>
    s === 2 ? "bg-[#2563ea]" : s === 1 ? "bg-[#2563ea]/55" : "bg-muted/40"

  return (
    <div className="rounded-2xl border border-white/10 bg-background/40 p-4">
      <div className="mb-3 flex items-center justify-between">
        <span className="text-xs font-semibold text-foreground">Esta semana</span>
        <span className="flex items-center gap-1 text-[10px] font-medium text-[#2563ea]">
          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#2563ea]" />
          92% ocupação
        </span>
      </div>
      <div className="grid grid-cols-6 gap-1.5">
        {days.map((d) => (
          <span key={d} className="text-center text-[9px] font-medium text-muted-foreground">
            {d}
          </span>
        ))}
        {grid.map((status, i) => (
          <div
            key={i}
            style={{ transitionDelay: `${i * 30}ms` }}
            className={`h-5 rounded-md transition-all duration-500 ${color(status)} ${
              active ? "scale-100 opacity-100" : "scale-90 opacity-0"
            }`}
          />
        ))}
      </div>
      <div className="mt-3 flex items-center gap-3 text-[9px] text-muted-foreground">
        <span className="flex items-center gap-1"><span className="h-2 w-2 rounded-sm bg-[#2563ea]" />Concluído</span>
        <span className="flex items-center gap-1"><span className="h-2 w-2 rounded-sm bg-[#2563ea]/55" />Confirmado</span>
        <span className="flex items-center gap-1"><span className="h-2 w-2 rounded-sm bg-muted-foreground/20" />Disponível</span>
      </div>
    </div>
  )
}

/* -------------------------------------------------------------------------- */
/*  Visual 2 — Clientes                                                       */
/* -------------------------------------------------------------------------- */

function ClientesVisual(active: boolean) {
  const visits = useCountUp(48, active)
  const returns = useCountUp(31, active)

  return (
    <div className="rounded-2xl border border-white/10 bg-background/40 p-4">
      <div className="flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#2563ea] text-sm font-bold text-white">
          JC
        </div>
        <div className="min-w-0">
          <p className="truncate text-sm font-semibold text-foreground">João Costa</p>
          <p className="flex items-center gap-1 text-[10px] text-[#2563ea]">
            <Heart className="h-3 w-3 fill-[#2563ea]" /> Cliente fiel
          </p>
        </div>
        <span className="ml-auto rounded-full bg-[#2563ea]/15 px-2 py-0.5 text-[10px] font-semibold text-[#2563ea]">
          VIP
        </span>
      </div>

      <div className="mt-4 grid grid-cols-2 gap-2">
        <div className="rounded-xl border border-white/10 bg-card/60 p-3">
          <p className="text-xl font-bold text-foreground">{visits}</p>
          <p className="text-[10px] text-muted-foreground">visitas no total</p>
        </div>
        <div className="rounded-xl border border-white/10 bg-card/60 p-3">
          <p className="text-xl font-bold text-foreground">{returns}d</p>
          <p className="text-[10px] text-muted-foreground">frequência média</p>
        </div>
      </div>

      <div className="mt-3 flex items-center gap-1.5">
        {Array.from({ length: 8 }).map((_, i) => (
          <div
            key={i}
            style={{ transitionDelay: `${i * 60}ms` }}
            className={`h-1.5 flex-1 rounded-full transition-all duration-500 ${
              i < 6 ? "bg-[#2563ea]" : "bg-muted/40"
            } ${active ? "opacity-100" : "opacity-0"}`}
          />
        ))}
      </div>
      <p className="mt-2 text-[10px] text-muted-foreground">Histórico de retornos consistente</p>
    </div>
  )
}

/* -------------------------------------------------------------------------- */
/*  Visual 3 — Financeiro                                                     */
/* -------------------------------------------------------------------------- */

function FinanceiroVisual(active: boolean) {
  const revenue = useCountUp(28540, active)
  const bars = [40, 55, 48, 70, 65, 88, 100]

  return (
    <div className="rounded-2xl border border-white/10 bg-background/40 p-4">
      <div className="flex items-end justify-between">
        <div>
          <p className="text-[10px] text-muted-foreground">Receita do mês</p>
          <p className="text-2xl font-bold text-foreground">
            R$ {revenue.toLocaleString("pt-BR")}
          </p>
        </div>
        <span className="flex items-center gap-1 rounded-full bg-[#2563ea]/15 px-2 py-0.5 text-[10px] font-semibold text-[#2563ea]">
          <TrendingUp className="h-3 w-3" /> +22%
        </span>
      </div>

      <div className="mt-4 flex h-24 items-end gap-1.5">
        {bars.map((h, i) => (
          <div
            key={i}
            style={{
              height: active ? `${h}%` : "0%",
              transitionDelay: `${i * 80}ms`,
            }}
            className="flex-1 rounded-t-md bg-gradient-to-t from-[#2563ea]/40 to-[#2563ea] transition-all duration-700 ease-out"
          />
        ))}
      </div>
      <div className="mt-2 flex justify-between text-[9px] text-muted-foreground">
        <span>Seg</span><span>Ter</span><span>Qua</span><span>Qui</span><span>Sex</span><span>Sáb</span><span>Dom</span>
      </div>
    </div>
  )
}

/* -------------------------------------------------------------------------- */
/*  Visual 4 — Automação                                                      */
/* -------------------------------------------------------------------------- */

function AutomacaoVisual(active: boolean) {
  const [step, setStep] = useState(0)

  useEffect(() => {
    if (!active) return
    setStep(0)
    const timers = [
      setTimeout(() => setStep(1), 500),
      setTimeout(() => setStep(2), 1300),
      setTimeout(() => setStep(3), 2100),
    ]
    return () => timers.forEach(clearTimeout)
  }, [active])

  const timeline = [
    { icon: MessageCircle, label: "Lembrete enviado no WhatsApp", time: "09:00" },
    { icon: Check, label: "Mensagem entregue", time: "09:00" },
    { icon: CheckCheck, label: "Cliente confirmou presença", time: "09:04" },
  ]

  return (
    <div className="rounded-2xl border border-white/10 bg-background/40 p-4">
      <div className="flex items-center gap-2 border-b border-white/10 pb-3">
        <Phone className="h-4 w-4 text-[#2563ea]" />
        <span className="text-xs font-semibold text-foreground">Automação ativa</span>
        <span className="ml-auto flex items-center gap-1 text-[10px] text-[#2563ea]">
          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#2563ea]" /> ao vivo
        </span>
      </div>

      <div className="mt-3 flex flex-col gap-2.5">
        {timeline.map((item, i) => {
          const Icon = item.icon
          const visible = step > i
          return (
            <div
              key={i}
              className={`flex items-center gap-3 transition-all duration-500 ${
                visible ? "translate-x-0 opacity-100" : "-translate-x-3 opacity-0"
              }`}
            >
              <div
                className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full ${
                  i === 2 ? "bg-[#2563ea] text-white" : "bg-[#2563ea]/15 text-[#2563ea]"
                }`}
              >
                <Icon className="h-3.5 w-3.5" />
              </div>
              <span className="flex-1 text-xs text-foreground">{item.label}</span>
              <span className="text-[10px] text-muted-foreground">{item.time}</span>
            </div>
          )
        })}
      </div>

      <div className="mt-3 rounded-lg bg-[#2563ea]/10 px-3 py-2 text-center text-[10px] font-medium text-[#2563ea]">
        Tudo automático — zero trabalho manual
      </div>
    </div>
  )
}

/* -------------------------------------------------------------------------- */
/*  Section                                                                   */
/* -------------------------------------------------------------------------- */

export function Features() {
  const [isOnboardingOpen, setIsOnboardingOpen] = useState(false)

  return (
    <section className="relative overflow-hidden bg-muted/30 py-16 lg:py-24">
      {/* ambient background */}
      <div className="pointer-events-none absolute left-1/2 top-0 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-[#2563ea]/5 blur-[120px]" />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
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

        {/* Bento Grid */}
        <div className="mt-12 grid gap-5 lg:grid-cols-6">
          <BentoCard
            icon={Calendar}
            category="Agenda e Operação"
            description="Sua semana organizada em blocos inteligentes, sem conflitos e com confirmações em tempo real."
            chips={[
              { icon: Calendar, label: "Agenda inteligente" },
              { icon: CalendarCheck, label: "Agendamentos online" },
              { icon: Scissors, label: "Gestão de profissionais" },
            ]}
            visual={AgendaVisual}
            className="lg:col-span-4"
            delay={0}
          />
          <BentoCard
            icon={Users}
            category="Clientes e Relacionamento"
            description="Conheça cada cliente, acompanhe a frequência e traga todos de volta com mais constância."
            chips={[
              { icon: Users, label: "CRM" },
              { icon: History, label: "Histórico" },
              { icon: Heart, label: "Fidelização" },
            ]}
            visual={ClientesVisual}
            className="lg:col-span-2"
            delay={80}
          />
          <BentoCard
            icon={DollarSign}
            category="Financeiro"
            description="Faturamento em tempo real, comissões automáticas e relatórios para decidir com dados."
            chips={[
              { icon: DollarSign, label: "Fluxo financeiro" },
              { icon: BarChart3, label: "Relatórios" },
              { icon: TrendingUp, label: "Métricas" },
            ]}
            visual={FinanceiroVisual}
            className="lg:col-span-2"
            delay={160}
          />
          <BentoCard
            icon={MessageCircle}
            category="Automação"
            description="Confirmações, lembretes e avisos enviados sozinhos pelo WhatsApp e e-mail para reduzir faltas."
            chips={[
              { icon: MessageCircle, label: "WhatsApp" },
              { icon: Mail, label: "E-mail" },
              { icon: Bell, label: "Lembretes automáticos" },
            ]}
            visual={AutomacaoVisual}
            className="lg:col-span-4"
            delay={240}
          />
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
