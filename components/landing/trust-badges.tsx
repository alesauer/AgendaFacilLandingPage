"use client"

import { Lock, ShieldCheck, FileCheck, Ban, CalendarOff, CreditCard } from "lucide-react"

const securityBadges = [
  {
    icon: Lock,
    label: "Site Seguro SSL"
  },
  {
    icon: ShieldCheck,
    label: "Dados Criptografados"
  },
  {
    icon: FileCheck,
    label: "LGPD"
  },
  {
    icon: Ban,
    label: "Cancelamento simples"
  },
  {
    icon: CalendarOff,
    label: "Sem fidelidade"
  }
]

const paymentMethods = [
  { name: "Pix", style: "font-bold" },
  { name: "Visa", style: "font-bold italic" },
  { name: "Mastercard", style: "font-bold" },
  { name: "Mercado Pago", style: "font-medium" }
]

export function TrustBadges() {
  return (
    <section className="bg-background py-10 lg:py-12">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-xl border border-border/20 bg-card/20 p-5 sm:p-6 backdrop-blur-sm">
          {/* Security Badges */}
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3 sm:gap-x-8">
            {securityBadges.map((badge, index) => (
              <div 
                key={index}
                className="flex items-center gap-1.5 transition-opacity duration-200 hover:opacity-70"
              >
                <badge.icon className="h-3.5 w-3.5 text-muted-foreground/50" />
                <span className="text-xs text-muted-foreground/60 font-medium">
                  {badge.label}
                </span>
              </div>
            ))}
          </div>

          {/* Divider */}
          <div className="my-4 border-t border-border/20" />

          {/* Payment Methods */}
          <div className="flex items-center justify-center gap-2">
            <CreditCard className="h-3.5 w-3.5 text-muted-foreground/40" />
            <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-1">
              {paymentMethods.map((method, index) => (
                <span 
                  key={index}
                  className={`text-xs text-muted-foreground/50 ${method.style} transition-opacity duration-200 hover:opacity-70`}
                >
                  {method.name}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
