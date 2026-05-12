"use client"

import { useState, useEffect } from "react"
import { createPortal } from "react-dom"
import { X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { toast } from "@/hooks/use-toast"

interface OnboardingModalProps {
  isOpen: boolean
  onClose: () => void
}

interface LeadResponse {
  success: boolean
  data: {
    lead_id: string
    message: string
    whatsapp_dispatched: boolean
    warning?: string
  }
}

export function OnboardingModal({ isOpen, onClose }: OnboardingModalProps) {
  const [nome, setNome] = useState("")
  const [telefone, setTelefone] = useState("")
  const [mounted, setMounted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [errors, setErrors] = useState<{ nome?: string; telefone?: string }>({})

  useEffect(() => {
    setMounted(true)
  }, [])

  const validateForm = () => {
    const newErrors: { nome?: string; telefone?: string } = {}
    
    if (nome.trim().length < 2) {
      newErrors.nome = "Nome deve ter pelo menos 2 caracteres"
    }
    
    if (telefone.trim().length === 0) {
      newErrors.telefone = "WhatsApp é obrigatório"
    }
    
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async () => {
    if (!validateForm()) return

    setIsLoading(true)
    
    try {
      console.log("[v0] Form validation passed, submitting lead data")
      
      const response = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: nome.trim(),
          whatsapp: telefone.trim()
        })
      })

      const data: LeadResponse = await response.json()

      if (response.status === 201 && data.success) {
        // Lead criado com sucesso - sempre mostrar mensagem de sucesso
        toast({
          title: "Oba!",
          description: "Você receberá instruções no WhatsApp para criar a sua barbearia!"
        })
        
        // Se whatsapp não foi enviado ou há warning, apenas logar (não mostrar erro)
        if (data.data?.whatsapp_dispatched === false || data.data?.warning) {
          console.warn("[Lead] WhatsApp dispatch info:", {
            dispatched: data.data?.whatsapp_dispatched,
            warning: data.data?.warning
          })
        }
        
        setNome("")
        setTelefone("")
        setErrors({})
        onClose()
      } else {
        // Falha na captura do lead (4xx/5xx sem criação)
        toast({
          title: "Erro",
          description: "Não foi possível criar sua conta. Tente novamente.",
          variant: "destructive"
        })
      }
    } catch (error) {
      console.error("[v0] Error submitting form:", error)
      toast({
        title: "Erro",
        description: "Houve um erro ao processar sua solicitação. Tente novamente.",
        variant: "destructive"
      })
    } finally {
      setIsLoading(false)
    }
  }

  const formatTelefone = (value: string) => {
    const numbers = value.replace(/\D/g, "")
    if (numbers.length <= 2) return numbers
    if (numbers.length <= 7) return `(${numbers.slice(0, 2)}) ${numbers.slice(2)}`
    return `(${numbers.slice(0, 2)}) ${numbers.slice(2, 7)}-${numbers.slice(7, 11)}`
  }

  const isFormValid = nome.trim().length >= 2 && telefone.trim().length > 0

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
                onChange={(e) => {
                  setNome(e.target.value)
                  if (errors.nome) setErrors({ ...errors, nome: undefined })
                }}
                placeholder="Seu nome completo"
                disabled={isLoading}
                className={`mt-1.5 sm:mt-2 w-full rounded-lg border ${
                  errors.nome ? "border-red-500" : "border-white/10"
                } bg-white/5 px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base text-white placeholder-gray-500 outline-none transition-colors focus:border-[#2563ea] focus:ring-1 focus:ring-[#2563ea] disabled:opacity-50`}
              />
              {errors.nome && (
                <p className="mt-1 text-xs text-red-500">{errors.nome}</p>
              )}
            </div>

            <div>
              <label className="block text-xs sm:text-sm font-medium text-gray-300">
                WhatsApp <span className="text-red-500">*</span>
              </label>
              <input
                type="tel"
                value={telefone}
                onChange={(e) => {
                  setTelefone(formatTelefone(e.target.value))
                  if (errors.telefone) setErrors({ ...errors, telefone: undefined })
                }}
                placeholder="(00) 00000-0000"
                maxLength={15}
                disabled={isLoading}
                className={`mt-1.5 sm:mt-2 w-full rounded-lg border ${
                  errors.telefone ? "border-red-500" : "border-white/10"
                } bg-white/5 px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base text-white placeholder-gray-500 outline-none transition-colors focus:border-[#2563ea] focus:ring-1 focus:ring-[#2563ea] disabled:opacity-50`}
              />
              {errors.telefone && (
                <p className="mt-1 text-xs text-red-500">{errors.telefone}</p>
              )}
            </div>
          </div>

          <Button
            onClick={handleSubmit}
            disabled={!isFormValid || isLoading}
            className="mt-6 w-full h-12 sm:h-14 bg-[#2563ea] text-sm sm:text-base font-semibold text-white hover:bg-[#1d4ed8] disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isLoading ? "Criando conta..." : "Criar Conta Grátis"}
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
