"use client"

import { useState } from "react"
import { cn } from "@/lib/utils"

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg 
      viewBox="0 0 32 32" 
      fill="currentColor" 
      className={className}
    >
      <path d="M16.004 0h-.008C7.174 0 0 7.176 0 16c0 3.5 1.128 6.744 3.046 9.378L1.054 31.29l6.118-1.958A15.924 15.924 0 0016.004 32C24.826 32 32 24.822 32 16S24.826 0 16.004 0zm9.316 22.612c-.396 1.116-1.95 2.042-3.212 2.312-.866.184-1.996.33-5.804-1.248-4.868-2.018-8-6.95-8.242-7.272-.232-.322-1.95-2.598-1.95-4.956s1.232-3.516 1.67-3.996c.438-.48.956-.6 1.276-.6.32 0 .64.002.92.016.294.016.69-.112 1.08.824.396.954 1.35 3.29 1.466 3.532.118.24.198.522.04.84-.158.322-.238.52-.48.8-.238.28-.502.624-.716.838-.238.24-.486.5-.21.978.278.48 1.232 2.032 2.646 3.292 1.818 1.618 3.352 2.122 3.83 2.36.48.24.758.2 1.036-.12.28-.32 1.194-1.39 1.512-1.87.318-.478.636-.398 1.076-.238.438.158 2.792 1.316 3.27 1.556.48.238.798.358.916.558.118.198.118 1.156-.278 2.274z"/>
    </svg>
  )
}

export function WhatsAppButton() {
  const [isHovered, setIsHovered] = useState(false)
  const phoneNumber = "5531995041815"
  const message = "Olá! Gostaria de saber mais sobre o Barbeiros.app"
  
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      {/* Tooltip */}
      <div
        className={cn(
          "rounded-lg bg-white px-4 py-2 shadow-lg transition-all duration-300 dark:bg-card",
          isHovered 
            ? "translate-x-0 opacity-100" 
            : "pointer-events-none translate-x-2 opacity-0"
        )}
      >
        <p className="whitespace-nowrap text-sm font-medium text-foreground">
          Fale conosco pelo WhatsApp
        </p>
      </div>

      {/* Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="group flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] shadow-lg transition-all duration-300 hover:scale-110 hover:shadow-xl"
        aria-label="Contato via WhatsApp"
      >
        <WhatsAppIcon className="h-7 w-7 text-white" />
        
        {/* Pulse animation */}
        <span className="absolute h-14 w-14 animate-ping rounded-full bg-[#25D366] opacity-30" />
      </a>
    </div>
  )
}
