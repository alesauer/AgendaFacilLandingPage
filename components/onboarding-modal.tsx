"use client"

import { useState } from "react"
import { X, ArrowRight, ArrowLeft, Check, Plus, Trash2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

interface OnboardingModalProps {
  isOpen: boolean
  onClose: () => void
}

const steps = [
  { id: 1, name: "Conta" },
  { id: 2, name: "Equipe" },
  { id: 3, name: "Horários" },
  { id: 4, name: "Serviços" },
]

const segmentos = [
  "Barbearia",
  "Salão de Beleza",
  "Studio de Estética",
  "Clínica de Estética",
  "Outro",
]

const diasSemana = [
  { id: "seg", label: "Seg" },
  { id: "ter", label: "Ter" },
  { id: "qua", label: "Qua" },
  { id: "qui", label: "Qui" },
  { id: "sex", label: "Sex" },
  { id: "sab", label: "Sáb" },
  { id: "dom", label: "Dom" },
]

export function OnboardingModal({ isOpen, onClose }: OnboardingModalProps) {
  const [currentStep, setCurrentStep] = useState(1)
  
  // Step 1 - Conta
  const [nomeNegocio, setNomeNegocio] = useState("")
  const [segmento, setSegmento] = useState("")
  const [telefone, setTelefone] = useState("")
  const [email, setEmail] = useState("")
  const [senha, setSenha] = useState("")
  
  // Step 2 - Equipe
  const [profissionais, setProfissionais] = useState([{ nome: "", funcao: "" }])
  
  // Step 3 - Horários
  const [diasAtivos, setDiasAtivos] = useState(["seg", "ter", "qua", "qui", "sex", "sab"])
  const [horarioAbertura, setHorarioAbertura] = useState("09:00")
  const [horarioFechamento, setHorarioFechamento] = useState("20:00")
  
  // Step 4 - Serviços
  const [servicos, setServicos] = useState([{ nome: "", duracao: "30", preco: "" }])

  if (!isOpen) return null

  const handleNext = () => {
    if (currentStep < 4) {
      setCurrentStep(currentStep + 1)
    } else {
      // Finalizar onboarding
      onClose()
    }
  }

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1)
    }
  }

  const addProfissional = () => {
    setProfissionais([...profissionais, { nome: "", funcao: "" }])
  }

  const removeProfissional = (index: number) => {
    if (profissionais.length > 1) {
      setProfissionais(profissionais.filter((_, i) => i !== index))
    }
  }

  const updateProfissional = (index: number, field: string, value: string) => {
    const updated = [...profissionais]
    updated[index] = { ...updated[index], [field]: value }
    setProfissionais(updated)
  }

  const toggleDia = (diaId: string) => {
    if (diasAtivos.includes(diaId)) {
      setDiasAtivos(diasAtivos.filter(d => d !== diaId))
    } else {
      setDiasAtivos([...diasAtivos, diaId])
    }
  }

  const addServico = () => {
    setServicos([...servicos, { nome: "", duracao: "30", preco: "" }])
  }

  const removeServico = (index: number) => {
    if (servicos.length > 1) {
      setServicos(servicos.filter((_, i) => i !== index))
    }
  }

  const updateServico = (index: number, field: string, value: string) => {
    const updated = [...servicos]
    updated[index] = { ...updated[index], [field]: value }
    setServicos(updated)
  }

  const formatTelefone = (value: string) => {
    const numbers = value.replace(/\D/g, "")
    if (numbers.length <= 2) return numbers
    if (numbers.length <= 7) return `(${numbers.slice(0, 2)}) ${numbers.slice(2)}`
    return `(${numbers.slice(0, 2)}) ${numbers.slice(2, 7)}-${numbers.slice(7, 11)}`
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
      {/* Overlay */}
      <div 
        className="absolute inset-0 bg-black/70 backdrop-blur-sm"
        onClick={onClose}
      />
      
      {/* Modal */}
      <div className="relative z-10 w-full max-w-2xl max-h-[85vh] sm:max-h-[90vh] overflow-y-auto rounded-xl sm:rounded-2xl bg-[#0f172a] shadow-2xl my-auto">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute right-2 top-2 sm:right-4 sm:top-4 z-10 rounded-full p-2 text-gray-400 transition-colors hover:bg-white/10 hover:text-white"
        >
          <X className="h-5 w-5" />
        </button>

        {/* Steps Navigation */}
        <div className="flex border-b border-white/10 overflow-x-auto">
          {steps.map((step) => (
            <button
              key={step.id}
              onClick={() => step.id <= currentStep && setCurrentStep(step.id)}
              className={cn(
                "flex-1 min-w-[70px] py-3 sm:py-4 text-xs sm:text-sm font-medium transition-colors whitespace-nowrap",
                currentStep === step.id
                  ? "border-b-2 border-[#2563ea] text-[#2563ea]"
                  : step.id < currentStep
                  ? "text-gray-400 hover:text-gray-300"
                  : "text-gray-600 cursor-not-allowed"
              )}
            >
              <span className="hidden sm:inline">{step.id}. </span>{step.name}
              {step.id < currentStep && (
                <Check className="ml-1 inline h-3 w-3 sm:h-4 sm:w-4 text-green-500" />
              )}
            </button>
          ))}
        </div>

        {/* Content */}
        <div className="p-4 sm:p-6 md:p-8">
          {/* Step 1 - Conta */}
          {currentStep === 1 && (
            <div className="space-y-4 sm:space-y-6">
              <div className="text-center">
                <h2 className="text-xl sm:text-2xl font-bold text-white">Crie sua Conta Gratis</h2>
                <p className="mt-1 sm:mt-2 text-sm sm:text-base text-gray-400">Leva menos de 1 minuto para comecar.</p>
              </div>

              <div className="space-y-3 sm:space-y-4">
                <div>
                  <label className="block text-xs sm:text-sm font-medium text-gray-300">
                    Nome do Negocio ou Seu Nome <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    value={nomeNegocio}
                    onChange={(e) => setNomeNegocio(e.target.value)}
                    placeholder="Ex: Studio VIP"
                    className="mt-1.5 sm:mt-2 w-full rounded-lg border border-white/10 bg-white/5 px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base text-white placeholder-gray-500 outline-none transition-colors focus:border-[#2563ea] focus:ring-1 focus:ring-[#2563ea]"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                  <div>
                    <label className="block text-xs sm:text-sm font-medium text-gray-300">
                      Segmento <span className="text-red-500">*</span>
                    </label>
                    <select
                      value={segmento}
                      onChange={(e) => setSegmento(e.target.value)}
                      className="mt-1.5 sm:mt-2 w-full rounded-lg border border-white/10 bg-white/5 px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base text-white outline-none transition-colors focus:border-[#2563ea] focus:ring-1 focus:ring-[#2563ea] [&>option]:bg-[#0f172a]"
                    >
                      <option value="" className="text-gray-500">Selecione seu ramo...</option>
                      {segmentos.map((seg) => (
                        <option key={seg} value={seg}>{seg}</option>
                      ))}
                    </select>
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
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                  <div>
                    <label className="block text-xs sm:text-sm font-medium text-gray-300">
                      E-mail (Para Login) <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="seu@email.com"
                      className="mt-1.5 sm:mt-2 w-full rounded-lg border border-white/10 bg-white/5 px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base text-white placeholder-gray-500 outline-none transition-colors focus:border-[#2563ea] focus:ring-1 focus:ring-[#2563ea]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs sm:text-sm font-medium text-gray-300">
                      Senha Segura <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="password"
                      value={senha}
                      onChange={(e) => setSenha(e.target.value)}
                      placeholder="Minimo 6 caracteres"
                      className="mt-1.5 sm:mt-2 w-full rounded-lg border border-white/10 bg-white/5 px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base text-white placeholder-gray-500 outline-none transition-colors focus:border-[#2563ea] focus:ring-1 focus:ring-[#2563ea]"
                    />
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Step 2 - Equipe */}
          {currentStep === 2 && (
            <div className="space-y-4 sm:space-y-6">
              <div className="text-center">
                <h2 className="text-xl sm:text-2xl font-bold text-white">Monte sua Equipe</h2>
                <p className="mt-1 sm:mt-2 text-sm sm:text-base text-gray-400">Adicione os profissionais que trabalham com voce.</p>
              </div>

              <div className="space-y-3 sm:space-y-4">
                {profissionais.map((prof, index) => (
                  <div key={index} className="flex items-start gap-2 sm:gap-3">
                    <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
                      <input
                        type="text"
                        value={prof.nome}
                        onChange={(e) => updateProfissional(index, "nome", e.target.value)}
                        placeholder="Nome do profissional"
                        className="w-full rounded-lg border border-white/10 bg-white/5 px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base text-white placeholder-gray-500 outline-none transition-colors focus:border-[#2563ea] focus:ring-1 focus:ring-[#2563ea]"
                      />
                      <input
                        type="text"
                        value={prof.funcao}
                        onChange={(e) => updateProfissional(index, "funcao", e.target.value)}
                        placeholder="Funcao (ex: Barbeiro)"
                        className="w-full rounded-lg border border-white/10 bg-white/5 px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base text-white placeholder-gray-500 outline-none transition-colors focus:border-[#2563ea] focus:ring-1 focus:ring-[#2563ea]"
                      />
                    </div>
                    {profissionais.length > 1 && (
                      <button
                        onClick={() => removeProfissional(index)}
                        className="mt-2 sm:mt-3 rounded-lg p-1.5 sm:p-2 text-red-400 transition-colors hover:bg-red-500/10"
                      >
                        <Trash2 className="h-4 w-4 sm:h-5 sm:w-5" />
                      </button>
                    )}
                  </div>
                ))}

                <button
                  onClick={addProfissional}
                  className="flex w-full items-center justify-center gap-2 rounded-lg border border-dashed border-white/20 py-2.5 sm:py-3 text-sm sm:text-base text-gray-400 transition-colors hover:border-[#2563ea] hover:text-[#2563ea]"
                >
                  <Plus className="h-4 w-4 sm:h-5 sm:w-5" />
                  Adicionar profissional
                </button>
              </div>
            </div>
          )}

          {/* Step 3 - Horarios */}
          {currentStep === 3 && (
            <div className="space-y-4 sm:space-y-6">
              <div className="text-center">
                <h2 className="text-xl sm:text-2xl font-bold text-white">Defina seus Horarios</h2>
                <p className="mt-1 sm:mt-2 text-sm sm:text-base text-gray-400">Configure os dias e horarios de funcionamento.</p>
              </div>

              <div className="space-y-4 sm:space-y-6">
                <div>
                  <label className="block text-xs sm:text-sm font-medium text-gray-300 mb-2 sm:mb-3">
                    Dias de Funcionamento
                  </label>
                  <div className="grid grid-cols-4 sm:flex sm:flex-wrap gap-2">
                    {diasSemana.map((dia) => (
                      <button
                        key={dia.id}
                        onClick={() => toggleDia(dia.id)}
                        className={cn(
                          "rounded-lg px-2 sm:px-4 py-2 text-xs sm:text-sm font-medium transition-colors",
                          diasAtivos.includes(dia.id)
                            ? "bg-[#2563ea] text-white"
                            : "bg-white/5 text-gray-400 hover:bg-white/10"
                        )}
                      >
                        {dia.label}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3 sm:gap-4">
                  <div>
                    <label className="block text-xs sm:text-sm font-medium text-gray-300">
                      Horario de Abertura
                    </label>
                    <input
                      type="time"
                      value={horarioAbertura}
                      onChange={(e) => setHorarioAbertura(e.target.value)}
                      className="mt-1.5 sm:mt-2 w-full rounded-lg border border-white/10 bg-white/5 px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base text-white outline-none transition-colors focus:border-[#2563ea] focus:ring-1 focus:ring-[#2563ea]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs sm:text-sm font-medium text-gray-300">
                      Horario de Fechamento
                    </label>
                    <input
                      type="time"
                      value={horarioFechamento}
                      onChange={(e) => setHorarioFechamento(e.target.value)}
                      className="mt-1.5 sm:mt-2 w-full rounded-lg border border-white/10 bg-white/5 px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base text-white outline-none transition-colors focus:border-[#2563ea] focus:ring-1 focus:ring-[#2563ea]"
                    />
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Step 4 - Servicos */}
          {currentStep === 4 && (
            <div className="space-y-4 sm:space-y-6">
              <div className="text-center">
                <h2 className="text-xl sm:text-2xl font-bold text-white">Cadastre seus Servicos</h2>
                <p className="mt-1 sm:mt-2 text-sm sm:text-base text-gray-400">Adicione os servicos que voce oferece.</p>
              </div>

              <div className="space-y-3 sm:space-y-4">
                {servicos.map((servico, index) => (
                  <div key={index} className="flex items-start gap-2 sm:gap-3">
                    <div className="flex-1 space-y-2 sm:space-y-0 sm:grid sm:grid-cols-3 sm:gap-3">
                      <input
                        type="text"
                        value={servico.nome}
                        onChange={(e) => updateServico(index, "nome", e.target.value)}
                        placeholder="Nome do servico"
                        className="w-full rounded-lg border border-white/10 bg-white/5 px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base text-white placeholder-gray-500 outline-none transition-colors focus:border-[#2563ea] focus:ring-1 focus:ring-[#2563ea]"
                      />
                      <div className="grid grid-cols-2 gap-2 sm:contents">
                        <select
                          value={servico.duracao}
                          onChange={(e) => updateServico(index, "duracao", e.target.value)}
                          className="w-full rounded-lg border border-white/10 bg-white/5 px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base text-white outline-none transition-colors focus:border-[#2563ea] focus:ring-1 focus:ring-[#2563ea] [&>option]:bg-[#0f172a]"
                        >
                          <option value="15">15 min</option>
                          <option value="30">30 min</option>
                          <option value="45">45 min</option>
                          <option value="60">1 hora</option>
                          <option value="90">1h 30min</option>
                          <option value="120">2 horas</option>
                        </select>
                        <input
                          type="text"
                          value={servico.preco}
                          onChange={(e) => updateServico(index, "preco", e.target.value.replace(/\D/g, ""))}
                          placeholder="Preco (R$)"
                          className="w-full rounded-lg border border-white/10 bg-white/5 px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base text-white placeholder-gray-500 outline-none transition-colors focus:border-[#2563ea] focus:ring-1 focus:ring-[#2563ea]"
                        />
                      </div>
                    </div>
                    {servicos.length > 1 && (
                      <button
                        onClick={() => removeServico(index)}
                        className="mt-2 sm:mt-3 rounded-lg p-1.5 sm:p-2 text-red-400 transition-colors hover:bg-red-500/10"
                      >
                        <Trash2 className="h-4 w-4 sm:h-5 sm:w-5" />
                      </button>
                    )}
                  </div>
                ))}

                <button
                  onClick={addServico}
                  className="flex w-full items-center justify-center gap-2 rounded-lg border border-dashed border-white/20 py-2.5 sm:py-3 text-sm sm:text-base text-gray-400 transition-colors hover:border-[#2563ea] hover:text-[#2563ea]"
                >
                  <Plus className="h-4 w-4 sm:h-5 sm:w-5" />
                  Adicionar servico
                </button>
              </div>
            </div>
          )}

          {/* Navigation Buttons */}
          <div className="mt-6 sm:mt-8 flex flex-col-reverse sm:flex-row items-center justify-between gap-3 sm:gap-4">
            {currentStep > 1 ? (
              <Button
                variant="outline"
                onClick={handleBack}
                className="w-full sm:w-auto border-white/20 bg-transparent text-white hover:bg-white/10"
              >
                <ArrowLeft className="mr-2 h-4 w-4" />
                Voltar
              </Button>
            ) : (
              <div className="hidden sm:block" />
            )}

            <Button
              onClick={handleNext}
              className="w-full sm:w-auto bg-[#2563ea] px-6 sm:px-8 text-white hover:bg-[#1d4ed8]"
            >
              {currentStep === 4 ? "Finalizar Cadastro" : "Criar Conta e Avancar"}
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
