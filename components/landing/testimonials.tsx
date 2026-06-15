"use client"

import { useEffect, useRef, useState } from "react"
import { Star, TrendingDown, Clock, TrendingUp, Repeat, CalendarCheck, ShieldCheck, Headphones } from "lucide-react"

type Testimonial = {
  name: string
  barbershop: string
  location: string
  quote: string
  initials: string
  result: {
    icon: "down" | "clock" | "up" | "repeat"
    label: string
  }
}

const testimonials: Testimonial[] = [
  {
    name: "Carlos Henrique",
    barbershop: "Barbearia Alpha",
    location: "Belo Horizonte - MG",
    quote:
      "Os lembretes automáticos reduziram os horários perdidos e facilitaram a rotina da equipe.",
    initials: "CH",
    result: { icon: "down", label: "38% menos faltas" },
  },
  {
    name: "Rafael Santos",
    barbershop: "Studio Santos",
    location: "São Paulo - SP",
    quote:
      "A agenda online e os relatórios organizaram tudo. Sobra muito mais tempo para focar no atendimento.",
    initials: "RS",
    result: { icon: "clock", label: "+5 horas/semana" },
  },
  {
    name: "Marcos Oliveira",
    barbershop: "Barbearia Premium",
    location: "Curitiba - PR",
    quote:
      "Com o controle financeiro e a recorrência de clientes, meu faturamento cresceu de forma consistente.",
    initials: "MO",
    result: { icon: "up", label: "+22% faturamento" },
  },
  {
    name: "Lucas Ferreira",
    barbershop: "Ferreira Barber Club",
    location: "Porto Alegre - RS",
    quote:
      "O programa de fidelidade e os lembretes trouxeram muito mais clientes de volta toda semana.",
    initials: "LF",
    result: { icon: "repeat", label: "+31% retorno de clientes" },
  },
]

const resultIcons = {
  down: TrendingDown,
  clock: Clock,
  up: TrendingUp,
  repeat: Repeat,
}

const trustItems = [
  { icon: CalendarCheck, label: "Agendamentos realizados todos os meses" },
  { icon: TrendingDown, label: "Redução média de faltas" },
  { icon: ShieldCheck, label: "Plataforma online 24h" },
  { icon: Headphones, label: "Suporte especializado" },
]

function useInView<T extends HTMLElement>() {
  const ref = useRef<T>(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const element = ref.current
    if (!element) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true)
          observer.disconnect()
        }
      },
      { threshold: 0.15 },
    )

    observer.observe(element)
    return () => observer.disconnect()
  }, [])

  return { ref, inView }
}

function TestimonialCard({ testimonial, index }: { testimonial: Testimonial; index: number }) {
  const { ref, inView } = useInView<HTMLDivElement>()
  const ResultIcon = resultIcons[testimonial.result.icon]

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${index * 100}ms` }}
      className={`flex h-full min-w-[85%] shrink-0 snap-center flex-col rounded-xl border border-border bg-card p-6 shadow-sm transition-all duration-700 ease-out hover:-translate-y-1 hover:border-[#2563ea]/40 hover:shadow-lg sm:min-w-0 ${
        inView ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
      }`}
    >
      {/* Rating */}
      <div className="flex items-center gap-1">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star key={i} className="h-4 w-4 fill-[#2563ea] text-[#2563ea]" />
        ))}
      </div>

      {/* Result badge */}
      <div className="mt-4 inline-flex w-fit items-center gap-1.5 rounded-full bg-[#2563ea]/10 px-3 py-1.5 text-sm font-bold text-[#2563ea]">
        <ResultIcon className="h-4 w-4" aria-hidden="true" />
        {testimonial.result.label}
      </div>

      {/* Quote */}
      <p className="mt-4 flex-1 text-pretty text-base leading-relaxed text-foreground">
        {`"${testimonial.quote}"`}
      </p>

      {/* Author */}
      <div className="mt-5 flex items-center gap-3 border-t border-border pt-4">
        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#2563ea] text-sm font-semibold text-white">
          {testimonial.initials}
        </div>
        <div>
          <h3 className="text-sm font-semibold text-foreground">{testimonial.name}</h3>
          <p className="text-xs font-medium text-[#2563ea]">{testimonial.barbershop}</p>
          <p className="text-xs text-muted-foreground">{testimonial.location}</p>
        </div>
      </div>
    </div>
  )
}

export function Testimonials() {
  const { ref: headerRef, inView: headerInView } = useInView<HTMLDivElement>()

  return (
    <section className="bg-muted py-12 sm:py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div
          ref={headerRef}
          className={`mx-auto max-w-2xl text-center transition-all duration-700 ease-out ${
            headerInView ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
          }`}
        >
          <span className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-[#2563ea]">
            Resultados reais
          </span>
          <h2 className="mt-3 sm:mt-4 text-balance text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-foreground">
            O que dizem os donos de barbearias
          </h2>
          <p className="mt-4 sm:mt-6 text-pretty text-base sm:text-lg leading-relaxed text-muted-foreground">
            Veja como o Barbeiros.app ajuda a reduzir faltas, organizar a operação e aumentar a recorrência dos
            clientes.
          </p>
        </div>

        {/* Cards: 2x2 grid on desktop, horizontal snap carousel on mobile */}
        <div className="mt-10 flex snap-x snap-mandatory gap-6 overflow-x-auto pb-4 sm:mt-12 sm:grid sm:grid-cols-2 sm:overflow-visible sm:pb-0 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={testimonial.name} testimonial={testimonial} index={index} />
          ))}
        </div>

        {/* Trust strip */}
        <div className="mt-10 grid grid-cols-1 gap-4 rounded-xl border border-border bg-card p-6 sm:mt-12 sm:grid-cols-2 lg:grid-cols-4">
          {trustItems.map((item) => (
            <div key={item.label} className="flex items-center gap-3">
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#2563ea]/10 text-[#2563ea]">
                <item.icon className="h-5 w-5" aria-hidden="true" />
              </div>
              <p className="text-sm font-medium text-foreground">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
