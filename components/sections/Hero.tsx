'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col overflow-hidden bg-white"
    >
      {/* Noise overlay — multiply blend like danielsun.space */}
      <div
        className="noise-overlay pointer-events-none"
        style={{ position: 'fixed', inset: 0, zIndex: 1 }}
        aria-hidden
      />

      {/* Content: fills 100vh, centered */}
      <div className="relative z-10 flex flex-col flex-1 min-h-screen justify-center">
        {/* Main content */}
        <div className="w-full max-w-[1200px] mx-auto px-4 sm:px-6 py-10">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-10 lg:gap-6">
            {/* Left: headline */}
            <div className="lg:w-[55%] text-center lg:text-left">
              {/* Headline — large editorial */}
              <div className="overflow-hidden mb-3">
                <motion.h1
                  initial={{ y: '110%' }}
                  animate={{ y: 0 }}
                  transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1], delay: 0.35 }}
                  className="font-cormorant leading-[0.9] text-black"
                  style={{
                    fontSize: 'clamp(2.4rem, 7vw, 5.8rem)',
                    fontWeight: 600,
                    letterSpacing: '-0.01em',
                  }}
                >
                  Growth and
                </motion.h1>
              </div>
              <div className="overflow-hidden mb-3">
                <motion.h1
                  initial={{ y: '110%' }}
                  animate={{ y: 0 }}
                  transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1], delay: 0.5 }}
                  className="font-cormorant leading-[0.9] text-black"
                  style={{
                    fontSize: 'clamp(2.4rem, 7vw, 5.8rem)',
                    fontWeight: 600,
                    letterSpacing: '-0.01em',
                  }}
                >
                  <mark>Visibility</mark> for
                </motion.h1>
              </div>
              <div className="overflow-hidden pt-3 mb-8">
                <motion.h1
                  initial={{ y: '110%' }}
                  animate={{ y: 0 }}
                  transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1], delay: 0.65 }}
                  className="font-cormorant leading-[0.9] text-black"
                  style={{
                    fontSize: 'clamp(2.4rem, 7vw, 5.8rem)',
                    fontWeight: 600,
                    letterSpacing: '-0.01em',
                  }}
                >
                  your Brand.
                </motion.h1>
              </div>

              {/* Subline + CTAs */}
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.9 }}
                className="flex flex-col gap-4 items-center lg:items-start"
              >
                <p className="text-muted text-lg font-medium" style={{ fontFamily: 'var(--font-cormorant)' }}>
                  Marketing & Branding Analyst
                </p>
                <div className="flex gap-3">
                  <a href="#work" className="pill-btn text-sm bg-accent text-white hover:opacity-85 transition-opacity w-fit">
                    View Work ↓
                  </a>
                  <a
                    href="mailto:aorlenadja@gmail.com"
                    className="pill-btn pill-btn-ghost text-sm border border-black/10 w-fit"
                  >
                    Contact
                  </a>
                </div>
              </motion.div>
            </div>

            {/* Right: portrait */}
            <motion.div
              initial={{ opacity: 0, x: 20, rotate: 3 }}
              animate={{ opacity: 1, x: 0, rotate: 2 }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.25 }}
              className="lg:w-[38%] relative w-[58%] sm:w-[45%] mx-auto lg:mx-0"
            >
              <div
                className="relative overflow-hidden bg-surface"
                style={{ borderRadius: '24px', aspectRatio: '4/5', maxHeight: 'min(380px, 50vh)' }}
              >
                {/* Available tag — top of image */}
                <motion.div
                  initial={{ opacity: 0, y: -8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.9 }}
                  className="absolute top-3 left-3 z-10"
                >
                  <span className="inline-flex items-center gap-2 bg-white/90 backdrop-blur-sm text-black/70 text-xs font-tight font-medium px-3 py-1.5 rounded-full shadow-sm">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                    @anneorlenadja · Available
                  </span>
                </motion.div>

                <Image
                  src="/assets/anneorlenadja.png"
                  alt="Anne Orlenadja"
                  fill
                  className="object-cover object-top img-tilt"
                  style={{ transform: 'rotate(-2deg) scale(1.08)' }}
                  priority
                  sizes="(max-width: 1024px) 100vw, 40vw"
                />
                {/* Bottom gradient */}
                <div
                  className="absolute inset-0"
                  style={{
                    background: 'linear-gradient(to top, rgba(0,0,0,0.15) 0%, transparent 50%)',
                  }}
                />
              </div>

              {/* Stats badge */}
              <motion.div
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.2 }}
                className="absolute -bottom-3 -left-3 sm:-bottom-4 sm:-left-4 bg-white rounded-xl sm:rounded-2xl px-3 py-2 sm:px-4 sm:py-3 shadow-[0_4px_20px_rgba(0,0,0,0.1)] flex gap-3 sm:gap-6"
              >
                {[
                  { n: '6+', l: 'Years' },
                  { n: '20+', l: 'Brands' },
                  { n: '200+', l: 'Campaigns' },
                ].map((s) => (
                  <div key={s.l} className="text-center">
                    <div
                      className="font-tight font-bold leading-none"
                      style={{ fontSize: 'clamp(0.9rem, 3vw, 1.25rem)', letterSpacing: '-0.02em', color: '#D4775A' }}
                    >
                      {s.n}
                    </div>
                    <div className="font-tight text-muted text-xs mt-0.5">{s.l}</div>
                  </div>
                ))}
              </motion.div>
            </motion.div>
          </div>

          {/* Brand marquee strip */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.4 }}
            className="mt-14 pt-8 border-t border-black/8"
          >
            <p className="font-caveat text-2xl mb-4 text-center" style={{ color: '#D4775A' }}>
              Brands worked with
            </p>
            <div className="overflow-hidden">
              <div className="marquee-track">
                {[
                  'BANESE', 'Viali', 'Shopping Praia Sul', 'Casse', 'Grupo Gabillaud', 'Shopping Prêmio',
                  'BANESE', 'Viali', 'Shopping Praia Sul', 'Casse', 'Grupo Gabillaud', 'Shopping Prêmio',
                ].map((brand, i) => (
                  <span key={i} className="font-tight text-sm text-black/40 font-medium pr-12">
                    {brand}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
