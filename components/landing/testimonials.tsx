import { Star, Quote } from "lucide-react"

const testimonials = [
  {
    name: "Marcos Oliveira",
    role: "Dono da Barbearia Premium",
    quote:
      "Depois do Barbeiros.app reduzi quase 70% das faltas. O cliente recebe a confirmação no WhatsApp e a agenda fica sempre cheia. Não consigo mais imaginar minha barbearia sem ele.",
    initials: "MO",
  },
  {
    name: "Rafael Santos",
    role: "CEO e fundador de Studio de Beleza",
    quote:
      "O agendamento online mudou meu negócio. Meu cliente marca o horário mesmo com a barbearia fechada, e eu acompanho todo o faturamento na palma da mão.",
    initials: "RS",
  },
  {
    name: "Thiago Mendes",
    role: "Barbeiro e proprietário",
    quote:
      "O controle financeiro e de comissões dos barbeiros era minha maior dor de cabeça. Hoje fecho o caixa em minutos e sei exatamente quanto cada profissional rendeu no mês.",
    initials: "TM",
  },
  {
    name: "Lucas Ferreira",
    role: "Dono de rede com 3 unidades",
    quote:
      "Gerencio minhas três unidades pelo mesmo painel. Relatórios claros, estoque organizado e a recorrência de clientes aumentou muito com o programa de fidelidade.",
    initials: "LF",
  },
]

export function Testimonials() {
  return (
    <section className="bg-muted py-12 sm:py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-start gap-8 lg:grid-cols-2 lg:gap-16">
          {/* Left Content */}
          <div className="lg:sticky lg:top-24">
            <span className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-[#2563ea]">
              Depoimentos
            </span>
            <h2 className="mt-3 sm:mt-4 text-balance text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-foreground">
              O que dizem os donos de barbearias
            </h2>
            <p className="mt-4 sm:mt-6 text-pretty text-base sm:text-lg leading-relaxed text-muted-foreground">
              Mais de 2.500 barbearias já transformaram sua gestão com Barbeiros.app.
            </p>
            <p className="mt-4 text-pretty text-sm sm:text-base leading-relaxed text-muted-foreground">
              Confira os depoimentos de clientes e parceiros que já facilitaram a sua rotina de administração com o
              Barbeiros.app.
            </p>
          </div>

          {/* Text Testimonials */}
          <div className="grid gap-6 sm:grid-cols-2">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="flex flex-col rounded-xl bg-card p-5 sm:p-6 shadow-sm transition-all hover:shadow-md"
              >
                {/* Rating */}
                <div className="flex items-center gap-1">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-[#2563ea] text-[#2563ea]" />
                  ))}
                </div>

                {/* Quote */}
                <Quote className="mt-4 h-6 w-6 text-[#2563ea]/30" aria-hidden="true" />
                <p className="mt-2 flex-1 text-pretty text-sm sm:text-base leading-relaxed text-muted-foreground">
                  {`"${testimonial.quote}"`}
                </p>

                {/* Author */}
                <div className="mt-5 flex items-center gap-3 border-t border-border pt-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#2563ea] text-sm font-semibold text-white">
                    {testimonial.initials}
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-foreground">{testimonial.name}</h3>
                    <p className="text-xs sm:text-sm font-medium text-[#2563ea]">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
