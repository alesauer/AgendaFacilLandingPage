"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X, Scissors } from "lucide-react"
import { cn } from "@/lib/utils"
import { ThemeToggle } from "@/components/theme-toggle"
import { OnboardingModal } from "@/components/onboarding-modal"
import { BarbershopSearchModal } from "@/components/barbershop-search-modal"

const navigation = [
  { name: "Funcionalidades", href: "#funcionalidades" },
  { name: "Preços", href: "#precos" },
  { name: "Depoimentos", href: "#depoimentos" },
  { name: "FAQ", href: "#faq" },
]

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [isOnboardingOpen, setIsOnboardingOpen] = useState(false)
  const [isSearchModalOpen, setIsSearchModalOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#2563ea]">
            <Scissors className="h-5 w-5 text-white" />
          </div>
          <span className="text-xl font-bold text-foreground">Barbeiros.app</span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-8 md:flex">
          {navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              {item.name}
            </a>
          ))}
        </div>

        {/* Desktop CTA */}
        <div className="hidden items-center gap-4 md:flex">
          <ThemeToggle />
          <button 
            onClick={() => setIsSearchModalOpen(true)}
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            Entrar
          </button>
          <Button 
            size="sm" 
            className="bg-[#2563ea] font-semibold text-white hover:bg-[#1d4ed8]"
            onClick={() => setIsOnboardingOpen(true)}
          >
            Teste gratis
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          className="md:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? (
            <X className="h-6 w-6 text-foreground" />
          ) : (
            <Menu className="h-6 w-6 text-foreground" />
          )}
        </button>
      </nav>

      {/* Mobile Menu */}
      <div
        className={cn(
          "md:hidden",
          mobileMenuOpen ? "block" : "hidden"
        )}
      >
        <div className="space-y-1 border-t border-border bg-background px-4 pb-4 pt-2">
          {navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="block rounded-lg px-3 py-2 text-base font-medium text-muted-foreground hover:bg-secondary hover:text-foreground"
              onClick={() => setMobileMenuOpen(false)}
            >
              {item.name}
            </a>
          ))}
          <div className="mt-4 flex flex-col gap-2 pt-4">
            <div className="flex items-center justify-between px-3 py-2">
              <span className="text-sm text-muted-foreground">Tema</span>
              <ThemeToggle />
            </div>
            <button 
              onClick={() => {
                setMobileMenuOpen(false)
                setIsSearchModalOpen(true)
              }}
              className="block w-full text-left rounded-lg px-3 py-2 text-base font-medium text-muted-foreground hover:bg-secondary hover:text-foreground"
            >
              Entrar
            </button>
            <Button 
              className="w-full bg-[#2563ea] font-semibold text-white hover:bg-[#1d4ed8]"
              onClick={() => {
                setMobileMenuOpen(false)
                setIsOnboardingOpen(true)
              }}
            >
              Teste gratis
            </Button>
          </div>
        </div>
      </div>
      
      <OnboardingModal isOpen={isOnboardingOpen} onClose={() => setIsOnboardingOpen(false)} />
      <BarbershopSearchModal isOpen={isSearchModalOpen} onClose={() => setIsSearchModalOpen(false)} />
    </header>
  )
}
