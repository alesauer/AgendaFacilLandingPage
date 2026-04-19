"use client"

import { useState, useEffect } from "react"
import { createPortal } from "react-dom"
import { X } from "lucide-react"
import { Button } from "@/components/ui/button"

interface OnboardingModalProps {
  isOpen: boolean
  onClose: () => void
}

export function OnboardingModal({ isOpen, onClose }: OnboardingModalProps) {
  const [nome, setNome] = useState("")
  const [telefone, setTelefone] = useState("")
  const [email, setEmail] = useState("")
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const handleSubmit = () => {
    console.log({ nome, telefone, email })
    onClose()
  }

  const formatTelefone = (value: string) => {
    const numbers = value.replace(/\D/g, "")
    if (numbers.length <= 2) return numbers
    if (numbers.length <= 7) return `(${numbers.slice(0, 2)}) ${numbers.slice(2)}`
    return `(${numbers.slice(0, 2)}) ${numbers.slice(2, 7)}-${numbers.slice(7, 11)}`
  }

  const isFormValid = nome.trim() !== "" && telefone.trim() !== "" && email.trim() !== ""

  if (!isOpen || !mounted) return null

  const modalContent = (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 sm:p-6">
      {/* Overlay */}
      <div 
        className="fixed inset-0 bg-black/70 backdrop-blur-sm"
        onClick={onClose}
      />
      
      {/* Modal */}
      <div className="relative z-[10000] w-full max-w-md overflow-hidden rounded-xl sm:rounded-2xl bg-[#0f172a] shadow-2xl">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute right-2 top-2 sm:right-4 sm:top-4 z-10 rounded-full p-2 text-gray-400 transition-colors hover:bg-white/10 hover:text-white"
        >
          <X className="h-5 w-5" />
        </button>

        {/* Content */}
        <div className="p-6 sm:p-8">
          <div className="text-center mb-6">
            <h2 className="text-xl sm:text-2xl font-bold text-white">Crie sua Conta Grátis</h2>
            <p className="mt-2 text-sm sm:text-base text-gray-400">Não é necessário cartão de crédito.</p>
          </div>

          <div className="space-y-4">
            <div>
              <label className="block text-xs sm:text-sm font-medium text-gray-300">
                Nome <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                value={nome}
                onChange={(e) => setNome(e.target.value)}
                placeholder="Seu nome completo"
                className="mt-1.5 sm:mt-2 w-full rounded-lg border border-white/10 bg-white/5 px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base text-white placeholder-gray-500 outline-none transition-colors focus:border-[#2563ea] focus:ring-1 focus:ring-[#2563ea]"
              />
            </div>

            <div>
              <label className="block text-xs sm:text-sm font-medium text-gray-300">
                Telefone/WhatsApp <span className="text-red-500">*</span>
              </label>
              <input
                type="tel"
                value={telefone}
                onChange={(e) => setTelefone(formatTelefone(e.target.value))}
                placeholder="(00) 00000-0000"
                maxLength={15}
                className="mt-1.5 sm:mt-2 w-full rounded-lg border border-white/10 bg-white/5 px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base text-white placeholder-gray-500 outline-none transition-colors focus:border-[#2563ea] focus:ring-1 focus:ring-[#2563ea]"
              />
            </div>

            <div>
              <label className="block text-xs sm:text-sm font-medium text-gray-300">
                E-mail <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="seu@email.com"
                className="mt-1.5 sm:mt-2 w-full rounded-lg border border-white/10 bg-white/5 px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base text-white placeholder-gray-500 outline-none transition-colors focus:border-[#2563ea] focus:ring-1 focus:ring-[#2563ea]"
              />
            </div>
          </div>

          <Button
            onClick={handleSubmit}
            disabled={!isFormValid}
            className="mt-6 w-full h-12 sm:h-14 bg-[#2563ea] text-sm sm:text-base font-semibold text-white hover:bg-[#1d4ed8] disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Criar Conta Grátis
          </Button>

          <p className="mt-4 text-center text-xs text-gray-500">
            Ao criar sua conta, você concorda com nossos Termos de Uso e Política de Privacidade.
          </p>
        </div>
      </div>
    </div>
  )

  return createPortal(modalContent, document.body)
}
