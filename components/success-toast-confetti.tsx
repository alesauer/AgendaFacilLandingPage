"use client"

import { useEffect } from "react"
import confetti from "canvas-confetti"
import { CheckCircle } from "lucide-react"

interface SuccessToastProps {
  title: string
  description: string
}

export function SuccessToastWithConfetti({ title, description }: SuccessToastProps) {
  useEffect(() => {
    // Trigger confetti animation
    const duration = 2.5 * 1000
    const animationEnd = Date.now() + duration
    const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 }

    const randomInRange = (min: number, max: number) => Math.random() * (max - min) + min

    const interval = setInterval(() => {
      const timeLeft = animationEnd - Date.now()

      if (timeLeft <= 0) {
        return clearInterval(interval)
      }

      const particleCount = 50 * (timeLeft / duration)

      confetti({
        ...defaults,
        particleCount,
        origin: { x: randomInRange(0.1, 0.9), y: Math.random() - 0.2 },
      })
    }, 250)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="flex gap-3 items-start p-4 rounded-lg bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 shadow-lg animate-in fade-in slide-in-from-top-4 duration-300">
      <div className="flex-shrink-0 mt-0.5">
        <CheckCircle className="h-6 w-6 text-green-600 animate-bounce" />
      </div>
      <div className="flex-1">
        <h3 className="font-semibold text-green-900">{title}</h3>
        <p className="text-sm text-green-800 mt-1">{description}</p>
      </div>
    </div>
  )
}
