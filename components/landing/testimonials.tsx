"use client"

import { useState } from "react"
import { Play, X } from "lucide-react"

const videoTestimonials = [
  {
    name: "Marcos Oliveira",
    role: "Dono da Barbearia Premium",
    quote: "O Barbeiros.app e um aplicativo confiavel! Nele faco toda a gestao dos meus negocios: gestao financeira, de estoque e de produto!",
    videoId: "0RJkmrYwLmQ",
    thumbnail: `https://img.youtube.com/vi/0RJkmrYwLmQ/maxresdefault.jpg`
  },
  {
    name: "Rafael Santos",
    role: "CEO e fundador de Studio de Beleza",
    quote: "Agendamento online e uma das funcoes mais importantes, pois meu cliente consegue fazer agendamento mesmo enquanto a barbearia esta fechada!",
    videoId: "qrmayYlOg1I",
    thumbnail: `https://img.youtube.com/vi/qrmayYlOg1I/maxresdefault.jpg`
  }
]

export function Testimonials() {
  const [activeVideo, setActiveVideo] = useState<string | null>(null)

  return (
    <section className="bg-muted py-12 sm:py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-start gap-8 lg:grid-cols-2 lg:gap-16">
          {/* Left Content */}
          <div className="lg:sticky lg:top-24">
            <span className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-[#2563ea]">
              Depoimentos
            </span>
            <h2 className="mt-3 sm:mt-4 text-balance text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-foreground">
              O que dizem os donos de barbearias
            </h2>
            <p className="mt-4 sm:mt-6 text-pretty text-base sm:text-lg leading-relaxed text-muted-foreground">
              Mais de 2.500 barbearias ja transformaram sua gestao com Barbeiros.app.
            </p>
            <p className="mt-4 text-pretty text-sm sm:text-base leading-relaxed text-muted-foreground">
              Confira os depoimentos de clientes e parceiros que ja facilitaram a sua rotina de administracao com o Barbeiros.app.
            </p>
          </div>

          {/* Video Testimonials */}
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-2">
            {videoTestimonials.map((testimonial, index) => (
              <div 
                key={index}
                className="group flex flex-col overflow-hidden rounded-xl bg-card shadow-sm transition-all hover:shadow-md"
              >
                {/* Video Thumbnail */}
                <button
                  onClick={() => setActiveVideo(testimonial.videoId)}
                  className="relative aspect-[4/3] w-full overflow-hidden bg-muted"
                >
                  <img
                    src={testimonial.thumbnail}
                    alt={`Depoimento de ${testimonial.name}`}
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement
                      target.src = `https://img.youtube.com/vi/${testimonial.videoId}/hqdefault.jpg`
                    }}
                  />
                  {/* Play Button Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center bg-black/20 transition-colors group-hover:bg-black/30">
                    <div className="flex h-14 w-14 sm:h-16 sm:w-16 items-center justify-center rounded-full bg-white/90 shadow-lg transition-transform group-hover:scale-110">
                      <Play className="h-6 w-6 sm:h-7 sm:w-7 fill-[#2563ea] text-[#2563ea] ml-1" />
                    </div>
                  </div>
                </button>

                {/* Content */}
                <div className="flex flex-col p-4 sm:p-5">
                  <h3 className="text-sm sm:text-base font-semibold text-foreground">
                    {testimonial.name}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#2563ea] font-medium">
                    {testimonial.role}
                  </p>
                  <p className="mt-3 text-xs sm:text-sm leading-relaxed text-muted-foreground line-clamp-4">
                    {`"${testimonial.quote}"`}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Video Modal */}
      {activeVideo && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
          onClick={() => setActiveVideo(null)}
        >
          <div 
            className="relative w-full max-w-4xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setActiveVideo(null)}
              className="absolute -top-10 right-0 rounded-full p-2 text-white transition-colors hover:bg-white/10"
            >
              <X className="h-6 w-6" />
            </button>

            {/* Video */}
            <div className="aspect-video w-full overflow-hidden rounded-xl bg-black">
              <iframe
                src={`https://www.youtube.com/embed/${activeVideo}?autoplay=1&rel=0`}
                title="Video depoimento"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="h-full w-full"
              />
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
