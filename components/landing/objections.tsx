import { MessageCircle, ArrowRight } from "lucide-react"

const objections = [
  {
    question: "Isso é complicado?",
    answer: "Não. Em poucos minutos já está funcionando. Interface simples, feita para quem não tem tempo a perder."
  },
  {
    question: "Preciso mudar tudo na minha barbearia?",
    answer: "Não. Você pode começar aos poucos, integrando uma funcionalidade de cada vez ao seu fluxo atual."
  },
  {
    question: "E meus clientes atuais?",
    answer: "Você pode cadastrar manualmente ou importar de uma planilha. Em minutos, todos estão no sistema."
  },
  {
    question: "E se eu não gostar?",
    answer: "Sem problema. Teste grátis por 14 dias sem compromisso. Cancele quando quiser, sem burocracia."
  },
  {
    question: "Funciona em celular?",
    answer: "Sim! Sistema 100% responsivo. Você e sua equipe acessam de qualquer lugar, pelo celular."
  },
  {
    question: "Preciso de internet boa?",
    answer: "O sistema é leve e funciona bem até com conexões mais lentas. Sem travamentos."
  }
]

export function Objections() {
  return (
    <section className="bg-card py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-accent">
            Tire suas dúvidas
          </span>
          <h2 className="mt-4 text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Você pode estar pensando...
          </h2>
          <p className="mt-4 text-pretty text-lg leading-relaxed text-muted-foreground">
            Reunimos as dúvidas mais comuns de donos de barbearias como você.
          </p>
        </div>

        {/* Objections Grid */}
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {objections.map((objection, index) => (
            <div 
              key={index}
              className="group rounded-xl border border-border bg-background p-6 transition-all hover:border-primary/30 hover:shadow-md"
            >
              <div className="flex items-start gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-accent/10 text-accent">
                  <MessageCircle className="h-5 w-5" />
                </div>
                <p className="text-lg font-semibold text-foreground">{`"${objection.question}"`}</p>
              </div>
              <div className="mt-4 flex items-start gap-3 pl-13">
                <ArrowRight className="mt-1 h-4 w-4 shrink-0 text-primary" />
                <p className="text-muted-foreground leading-relaxed">{objection.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
