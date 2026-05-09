'use client'

import { useEffect, useRef, useState } from 'react'
import { heroSlides } from '@/lib/content'

function ImagePlaceholder({ label }: { label: string }) {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center bg-pc-mid/60 rounded-2xl border border-white/10">
      <svg
        className="w-16 h-16 text-white/20 mb-3"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909M3 20.25h18A1.75 1.75 0 0022.75 18.5V5.5A1.75 1.75 0 0021 3.75H3A1.75 1.75 0 001.25 5.5v13A1.75 1.75 0 003 20.25z"
        />
      </svg>
      <span className="text-white/30 text-sm font-sans">{label}</span>
    </div>
  )
}

function badgeStyle(type: string) {
  if (type === 'promo')
    return 'bg-[#ff6b35]/20 text-[#ff6b35] border border-[#ff6b35]/30'
  if (type === 'video')
    return 'bg-white/10 text-white/80 border border-white/20'
  return 'bg-pc-green/20 text-pc-green border border-pc-green/30'
}

export default function Hero() {
  const [current, setCurrent] = useState(0)
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null)
  const touchStartX = useRef<number | null>(null)

  const total = heroSlides.length

  function goTo(index: number) {
    setCurrent((index + total) % total)
  }

  function resetTimer() {
    if (timerRef.current) clearInterval(timerRef.current)
    timerRef.current = setInterval(() => setCurrent((c) => (c + 1) % total), 5000)
  }

  useEffect(() => {
    resetTimer()
    return () => { if (timerRef.current) clearInterval(timerRef.current) }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  function handleDotClick(i: number) {
    goTo(i)
    resetTimer()
  }

  function handleArrow(dir: number) {
    goTo(current + dir)
    resetTimer()
  }

  function handleTouchStart(e: React.TouchEvent) {
    touchStartX.current = e.touches[0].clientX
  }

  function handleTouchEnd(e: React.TouchEvent) {
    if (touchStartX.current === null) return
    const diff = touchStartX.current - e.changedTouches[0].clientX
    if (Math.abs(diff) > 40) handleArrow(diff > 0 ? 1 : -1)
    touchStartX.current = null
  }

  const slide = heroSlides[current]

  return (
    <section
      className="relative bg-gradient-to-br from-pc-mid to-pc-dark overflow-hidden"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="grid md:grid-cols-2 gap-10 items-center min-h-[420px]">
          {/* Text content */}
          <div className="flex flex-col gap-5 animate-fade-in" key={current}>
            {/* Badge */}
            <span
              className={`inline-flex items-center self-start px-3 py-1 rounded-full text-xs font-semibold font-sans uppercase tracking-wider ${badgeStyle(slide.type)}`}
            >
              {slide.badge}
            </span>

            {/* Title */}
            <h1 className="font-display font-bold text-4xl md:text-5xl lg:text-6xl text-white leading-tight">
              {slide.title}{' '}
              <span className="text-pc-green">{slide.titleHighlight}</span>
            </h1>

            {/* Description */}
            <p className="text-white/70 text-base md:text-lg font-sans leading-relaxed max-w-lg">
              {slide.description}
            </p>

            {/* Promo price */}
            {'priceOld' in slide && (
              <div className="flex items-baseline gap-3">
                <span className="line-through text-white/40 text-lg font-sans">
                  {slide.priceOld}
                </span>
                <span className="text-pc-green font-display font-bold text-4xl">
                  {slide.priceNew}
                </span>
              </div>
            )}

            {/* CTAs */}
            <div className="flex flex-wrap gap-3 mt-1">
              <a
                href={slide.cta.href}
                target={slide.cta.href.startsWith('http') ? '_blank' : undefined}
                rel={slide.cta.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="bg-pc-green text-pc-darker font-semibold font-sans px-6 py-3 rounded-lg hover:bg-pc-green/90 transition-colors"
              >
                {slide.cta.label}
              </a>
              {'ctaSecondary' in slide && slide.ctaSecondary && (
                <a
                  href={slide.ctaSecondary.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border border-white/20 text-white font-semibold font-sans px-6 py-3 rounded-lg hover:bg-white/5 transition-colors"
                >
                  {slide.ctaSecondary.label}
                </a>
              )}
            </div>
          </div>

          {/* Image area */}
          <div className="relative h-64 md:h-96 w-full">
            <ImagePlaceholder label="foto do produto" />
          </div>
        </div>

        {/* Controls */}
        <div className="flex items-center justify-center gap-4 mt-10">
          {/* Prev */}
          <button
            onClick={() => handleArrow(-1)}
            className="w-8 h-8 flex items-center justify-center rounded-full border border-white/20 text-white/60 hover:text-white hover:border-white/40 transition-colors"
            aria-label="Slide anterior"
          >
            ‹
          </button>

          {/* Dots */}
          <div className="flex gap-2">
            {heroSlides.map((_, i) => (
              <button
                key={i}
                onClick={() => handleDotClick(i)}
                className={`rounded-full transition-all duration-300 ${
                  i === current
                    ? 'bg-pc-green w-6 h-2'
                    : 'bg-white/30 w-2 h-2 hover:bg-white/50'
                }`}
                aria-label={`Ir para slide ${i + 1}`}
              />
            ))}
          </div>

          {/* Next */}
          <button
            onClick={() => handleArrow(1)}
            className="w-8 h-8 flex items-center justify-center rounded-full border border-white/20 text-white/60 hover:text-white hover:border-white/40 transition-colors"
            aria-label="Próximo slide"
          >
            ›
          </button>
        </div>
      </div>
    </section>
  )
}
