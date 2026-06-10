'use client'

import { useRef, useState, useEffect, useCallback } from 'react'
import { motion } from 'framer-motion'

const VIDEO_IDS = [
  '9T0aUiDL6lM',
  '5wJ1fSVlmGY',
  'IbRJd3zgb00',
  'MDzn3RSf42k',
  '3TZIc31eD5M',
  '2MaPVT5Zb30',
]

function VideoCard({ id, index }: { id: string; index: number }) {
  const [visible, setVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true) },
      { rootMargin: '300px' }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: index * 0.07 }}
      className="shrink-0 rounded-[16px] overflow-hidden bg-[#f0ede8]"
      style={{
        width: 'clamp(220px, 74vw, 372px)',
        scrollSnapAlign: 'start',
        boxShadow: '0 4px 24px rgba(0,0,0,0.07)',
      }}
    >
      <div style={{ aspectRatio: '16/9', position: 'relative', background: '#f0ede8' }}>
        {visible ? (
          <iframe
            src={`https://www.youtube.com/embed/${id}?rel=0&modestbranding=1`}
            title={`YouTube video ${index + 1}`}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            loading="lazy"
            style={{ width: '100%', height: '100%', border: 'none', display: 'block' }}
          />
        ) : (
          <div
            className="w-full h-full flex items-center justify-center"
            style={{ background: '#f0ede8' }}
          >
            <svg width="36" height="36" viewBox="0 0 36 36" fill="none" opacity={0.3}>
              <path d="M18 4C10.268 4 4 10.268 4 18s6.268 14 14 14 14-6.268 14-14S25.732 4 18 4zm-3 9.5l9 4.5-9 4.5v-9z" fill="#D4775A" />
            </svg>
          </div>
        )}
      </div>
    </motion.div>
  )
}

export default function YouTubeCarousel() {
  const trackRef = useRef<HTMLDivElement>(null)

  const scroll = useCallback((dir: 'prev' | 'next') => {
    if (!trackRef.current) return
    trackRef.current.scrollBy({
      left: dir === 'next' ? 340 : -340,
      behavior: 'smooth',
    })
  }, [])

  return (
    <div className="mt-12 sm:mt-16">
      {/* Header */}
      <div className="flex items-end justify-between mb-7">
        <div>
          <motion.p
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="font-caveat text-base mb-1.5"
            style={{ color: '#D4775A' }}
          >
            YouTube
          </motion.p>
          <motion.h3
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.08 }}
            className="font-cormorant font-bold text-black leading-none"
            style={{
              fontFamily: 'var(--font-cormorant)',
              fontSize: 'clamp(1.4rem, 3vw, 2rem)',
              letterSpacing: '-0.01em',
            }}
          >
            Get to know me better
          </motion.h3>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex items-center gap-3"
        >
          <a
            href="https://www.youtube.com/@anneorlenadja"
            target="_blank"
            rel="noopener noreferrer"
            className="font-tight text-xs font-medium hover:opacity-70 transition-opacity hidden sm:block"
            style={{ color: '#D4775A' }}
          >
            ↗ @anneorlenadja
          </a>
          {/* Nav arrows — desktop only */}
          <div className="hidden sm:flex gap-2">
            <button
              onClick={() => scroll('prev')}
              className="w-9 h-9 rounded-full flex items-center justify-center hover:opacity-80 transition-opacity"
              style={{ backgroundColor: '#D4775A' }}
              aria-label="Previous"
            >
              <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
                <path d="M8.5 2L4 6.5L8.5 11" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            <button
              onClick={() => scroll('next')}
              className="w-9 h-9 rounded-full flex items-center justify-center hover:opacity-80 transition-opacity"
              style={{ backgroundColor: '#D4775A' }}
              aria-label="Next"
            >
              <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
                <path d="M4.5 2L9 6.5L4.5 11" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>
        </motion.div>
      </div>

      {/* Carousel track */}
      <div
        ref={trackRef}
        className="yt-carousel-track flex gap-3 sm:gap-4 overflow-x-auto pb-2"
        style={{
          scrollSnapType: 'x mandatory',
          scrollbarWidth: 'none',
          WebkitOverflowScrolling: 'touch' as React.CSSProperties['WebkitOverflowScrolling'],
        }}
      >
        {VIDEO_IDS.map((id, i) => (
          <VideoCard key={id} id={id} index={i} />
        ))}
        <div className="shrink-0 w-1" aria-hidden />
      </div>

      {/* Mobile channel link */}
      <div className="mt-4 sm:hidden">
        <a
          href="https://www.youtube.com/@anneorlenadja"
          target="_blank"
          rel="noopener noreferrer"
          className="font-tight text-xs font-medium hover:opacity-70 transition-opacity"
          style={{ color: '#D4775A' }}
        >
          ↗ @anneorlenadja
        </a>
      </div>
    </div>
  )
}
