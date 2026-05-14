"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Cookie } from "lucide-react"
import { Button } from "@/components/ui/button"

export function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const cookieConsent = localStorage.getItem("cookie-consent")
    if (!cookieConsent) {
      // Delay para melhor UX - banner aparece após 1 segundo
      const timer = setTimeout(() => {
        setIsVisible(true)
      }, 1000)
      return () => clearTimeout(timer)
    }
  }, [])

  const handleAccept = () => {
    localStorage.setItem("cookie-consent", "accepted")
    setIsVisible(false)
  }

  if (!isVisible) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 z-[9998] animate-in slide-in-from-bottom-4 duration-500">
      <div className="mx-auto max-w-5xl px-4 pb-4">
        <div className="flex flex-col sm:flex-row items-center gap-4 rounded-xl bg-card p-4 shadow-lg border border-border">
          {/* Cookie Icon */}
          <div className="flex-shrink-0">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#2563ea]/10">
              <Cookie className="h-6 w-6 text-[#2563ea]" />
            </div>
          </div>
          
          {/* Text Content */}
          <div className="flex-1 text-center sm:text-left">
            <p className="text-sm text-muted-foreground leading-relaxed">
              Utilizamos cookies para qualificar sua experiência nesta página e aperfeiçoar nosso site. Ao clicar em {'"'}ok, entendi{'"'}, você concorda com esta utilização. Mais informações podem ser obtidas em nossa{" "}
              <Link 
                href="/politica-de-privacidade" 
                className="font-medium text-[#2563ea] hover:underline"
              >
                Política de privacidade
              </Link>.
            </p>
          </div>
          
          {/* Accept Button */}
          <div className="flex-shrink-0">
            <Button
              onClick={handleAccept}
              className="bg-[#2563ea] px-6 py-2 text-sm font-semibold text-white hover:bg-[#1d4ed8] whitespace-nowrap"
            >
              OK, ENTENDI
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
