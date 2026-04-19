"use client"

import { useState, useEffect, useRef } from "react"
import { X, Search, Building2, Loader2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { supabase } from "@/lib/supabase"

interface Barbearia {
  id: number
  nome: string
  slug: string
}

interface BarbershopSearchModalProps {
  isOpen: boolean
  onClose: () => void
}

export function BarbershopSearchModal({ isOpen, onClose }: BarbershopSearchModalProps) {
  const [searchTerm, setSearchTerm] = useState("")
  const [barbearias, setBarbearias] = useState<Barbearia[]>([])
  const [selectedBarbearia, setSelectedBarbearia] = useState<Barbearia | null>(null)
  const [isLoading, setIsLoading] = useState(false)
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const inputRef = useRef<HTMLInputElement>(null)
  const dropdownRef = useRef<HTMLDivElement>(null)

  // Buscar barbearias quando o termo de busca mudar
  useEffect(() => {
    const searchBarbearias = async () => {
      if (searchTerm.length < 2) {
        setBarbearias([])
        setIsDropdownOpen(false)
        return
      }

      setIsLoading(true)
      try {
        const { data, error } = await supabase
          .from('barbearias')
          .select('id, nome, slug')
          .ilike('nome', `%${searchTerm}%`)
          .limit(10)

        if (error) {
          setBarbearias([])
        } else {
          setBarbearias(data || [])
          setIsDropdownOpen(true)
        }
      } catch (err) {
        setBarbearias([])
      } finally {
        setIsLoading(false)
      }
    }

    const debounce = setTimeout(searchBarbearias, 300)
    return () => clearTimeout(debounce)
  }, [searchTerm])

  // Fechar dropdown ao clicar fora
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  // Focar no input quando o modal abrir
  useEffect(() => {
    if (isOpen && inputRef.current) {
      setTimeout(() => inputRef.current?.focus(), 100)
    }
  }, [isOpen])

  // Reset ao fechar
  useEffect(() => {
    if (!isOpen) {
      setSearchTerm("")
      setBarbearias([])
      setSelectedBarbearia(null)
      setIsDropdownOpen(false)
    }
  }, [isOpen])

  const handleSelectBarbearia = (barbearia: Barbearia) => {
    setSelectedBarbearia(barbearia)
    setSearchTerm(barbearia.nome)
    setIsDropdownOpen(false)
  }

  const handleGoToBarbearia = () => {
    if (selectedBarbearia) {
      window.open(`https://app.barbearia.app/${selectedBarbearia.slug}`, '_blank')
    }
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
      {/* Overlay */}
      <div 
        className="absolute inset-0 bg-black/70 backdrop-blur-sm"
        onClick={onClose}
      />
      
      {/* Modal */}
      <div className="relative z-10 w-full max-w-md rounded-2xl bg-background shadow-2xl border border-border my-auto">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-border px-6 py-4">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#2563ea]/10">
              <Building2 className="h-5 w-5 text-[#2563ea]" />
            </div>
            <div>
              <h2 className="text-lg font-semibold text-foreground">Entrar na barbearia</h2>
              <p className="text-sm text-muted-foreground">Busque sua barbearia pelo nome</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="rounded-full p-2 text-muted-foreground hover:bg-muted hover:text-foreground transition-colors"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6">
          {/* Search Input */}
          <div className="relative" ref={dropdownRef}>
            <div className="relative">
              <Search className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
              <input
                ref={inputRef}
                type="text"
                placeholder="Digite o nome da barbearia..."
                value={searchTerm}
                onChange={(e) => {
                  setSearchTerm(e.target.value)
                  setSelectedBarbearia(null)
                }}
                onFocus={() => {
                  if (barbearias.length > 0) setIsDropdownOpen(true)
                }}
                className="w-full rounded-xl border border-border bg-muted/50 py-3 pl-10 pr-10 text-foreground placeholder:text-muted-foreground focus:border-[#2563ea] focus:outline-none focus:ring-2 focus:ring-[#2563ea]/20 transition-all"
              />
              {isLoading && (
                <Loader2 className="absolute right-3 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground animate-spin" />
              )}
            </div>

            {/* Dropdown Results */}
            {isDropdownOpen && barbearias.length > 0 && (
              <div className="absolute top-full left-0 right-0 z-20 mt-2 max-h-60 overflow-y-auto rounded-xl border border-border bg-background shadow-lg">
                {barbearias.map((barbearia) => (
                  <button
                    key={barbearia.id}
                    onClick={() => handleSelectBarbearia(barbearia)}
                    className={`w-full flex items-center gap-3 px-4 py-3 text-left hover:bg-muted transition-colors first:rounded-t-xl last:rounded-b-xl ${
                      selectedBarbearia?.id === barbearia.id ? 'bg-[#2563ea]/10' : ''
                    }`}
                  >
                    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#2563ea]/10">
                      <Building2 className="h-4 w-4 text-[#2563ea]" />
                    </div>
                    <div>
                      <p className="font-medium text-foreground">{barbearia.nome}</p>
                      <p className="text-xs text-muted-foreground">/{barbearia.slug}</p>
                    </div>
                  </button>
                ))}
              </div>
            )}

            {/* No results */}
            {isDropdownOpen && searchTerm.length >= 2 && !isLoading && barbearias.length === 0 && (
              <div className="absolute top-full left-0 right-0 z-20 mt-2 rounded-xl border border-border bg-background p-4 shadow-lg">
                <p className="text-center text-sm text-muted-foreground">
                  Nenhuma barbearia encontrada para "{searchTerm}"
                </p>
              </div>
            )}
          </div>

          {/* Selected Barbearia Info */}
          {selectedBarbearia && (
            <div className="mt-4 rounded-xl border border-[#2563ea]/30 bg-[#2563ea]/5 p-4">
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#2563ea]/10">
                  <Building2 className="h-6 w-6 text-[#2563ea]" />
                </div>
                <div>
                  <p className="font-semibold text-foreground">{selectedBarbearia.nome}</p>
                  <p className="text-sm text-muted-foreground">app.barbearia.app/{selectedBarbearia.slug}</p>
                </div>
              </div>
            </div>
          )}

          {/* CTA Button */}
          <Button
            className="mt-6 w-full h-12 bg-[#2563ea] text-white font-semibold hover:bg-[#1d4ed8] disabled:opacity-50 disabled:cursor-not-allowed"
            disabled={!selectedBarbearia}
            onClick={handleGoToBarbearia}
          >
            Ir para a barbearia
          </Button>

          {/* Help text */}
          <p className="mt-4 text-center text-xs text-muted-foreground">
            Ainda não tem uma barbearia cadastrada?{" "}
            <button 
              onClick={onClose}
              className="text-[#2563ea] hover:underline font-medium"
            >
              Cadastre-se gratuitamente
            </button>
          </p>
        </div>
      </div>
    </div>
  )
}
