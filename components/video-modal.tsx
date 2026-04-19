"use client"

import { useEffect, useState, useRef } from "react"
import { X, ArrowRight } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { OnboardingModal } from "@/components/onboarding-modal"

interface VideoModalProps {
  isOpen: boolean
  onClose: () => void
}

export function VideoModal({ isOpen, onClose }: VideoModalProps) {
  const [showCTA, setShowCTA] = useState(false)
  const [isOnboardingOpen, setIsOnboardingOpen] = useState(false)
  const timerRef = useRef<NodeJS.Timeout | null>(null)
  const playerRef = useRef<YT.Player | null>(null)
  const iframeRef = useRef<HTMLIFrameElement>(null)

  // Load YouTube IFrame API
  useEffect(() => {
    if (!isOpen) return

    // Load YouTube API script if not already loaded
    if (!window.YT) {
      const tag = document.createElement("script")
      tag.src = "https://www.youtube.com/iframe_api"
      const firstScriptTag = document.getElementsByTagName("script")[0]
      firstScriptTag.parentNode?.insertBefore(tag, firstScriptTag)
    }

    // Initialize player when API is ready
    const initPlayer = () => {
      if (iframeRef.current && window.YT && window.YT.Player) {
        playerRef.current = new window.YT.Player(iframeRef.current, {
          events: {
            onStateChange: (event: YT.OnStateChangeEvent) => {
              // Video ended (state 0)
              if (event.data === 0) {
                setShowCTA(true)
              }
            }
          }
        })
      }
    }

    // Check if API is already loaded
    if (window.YT && window.YT.Player) {
      initPlayer()
    } else {
      // Wait for API to load
      window.onYouTubeIframeAPIReady = initPlayer
    }

    return () => {
      if (playerRef.current) {
        playerRef.current.destroy()
        playerRef.current = null
      }
    }
  }, [isOpen])

  // Timer for 30 seconds
  useEffect(() => {
    if (isOpen && !showCTA) {
      timerRef.current = setTimeout(() => {
        setShowCTA(true)
      }, 30000) // 30 seconds
    }

    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current)
        timerRef.current = null
      }
    }
  }, [isOpen, showCTA])

  // Reset state when modal closes
  useEffect(() => {
    if (!isOpen) {
      setShowCTA(false)
      if (timerRef.current) {
        clearTimeout(timerRef.current)
        timerRef.current = null
      }
    }
  }, [isOpen])

  // Fechar com ESC
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose()
    }
    
    if (isOpen) {
      document.addEventListener("keydown", handleEsc)
      document.body.style.overflow = "hidden"
    }
    
    return () => {
      document.removeEventListener("keydown", handleEsc)
      document.body.style.overflow = "unset"
    }
  }, [isOpen, onClose])

  const handleCTAClick = () => {
    onClose()
    setIsOnboardingOpen(true)
  }

  if (!isOpen && !isOnboardingOpen) return null

  return (
    <>
      {isOpen && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center"
          onClick={onClose}
        >
          {/* Overlay */}
          <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" />
          
          {/* Modal */}
          <div 
            className={cn(
              "relative z-10 w-full max-w-4xl mx-4",
              "animate-in fade-in-0 zoom-in-95 duration-300"
            )}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Botao Fechar */}
            <button
              onClick={onClose}
              className="absolute -top-12 right-0 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20"
            >
              <X className="h-6 w-6" />
            </button>
            
            {/* Video Container */}
            <div className="relative aspect-video w-full overflow-hidden rounded-xl bg-black shadow-2xl">
              <iframe 
                ref={iframeRef}
                id="yt-player"
                width="100%" 
                height="100%" 
                src="https://www.youtube.com/embed/UDBPX7GvdLY?si=-fufTkZ9PAK9OeV4&controls=0&autoplay=1&enablejsapi=1" 
                title="Demonstração Barbeiros.app" 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                referrerPolicy="strict-origin-when-cross-origin" 
                allowFullScreen
                className="absolute inset-0"
              />
            </div>

            {/* CTA Button - appears after 30s or when video ends */}
            {showCTA && (
              <div className="mt-6 flex justify-center animate-in fade-in-0 slide-in-from-bottom-4 duration-500">
                <Button
                  size="lg"
                  onClick={handleCTAClick}
                  className="h-14 bg-[#2563ea] px-8 text-base font-semibold text-white hover:bg-[#1d4ed8] shadow-lg shadow-[#2563ea]/30"
                >
                  Começar teste grátis
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Onboarding Modal */}
      <OnboardingModal 
        isOpen={isOnboardingOpen} 
        onClose={() => setIsOnboardingOpen(false)} 
      />
    </>
  )
}

// Extend Window interface for YouTube API
declare global {
  interface Window {
    YT: typeof YT
    onYouTubeIframeAPIReady: () => void
  }
}
