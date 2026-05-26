'use client'

import { motion } from 'framer-motion'

const courses = [
  { name: 'Monitoring of Communication Campaign Results', institution: 'Estácio' },
  { name: 'Marketing, Convergence and Connection', institution: 'Estácio' },
  { name: 'Media Narratives', institution: 'Estácio' },
  { name: 'Advertising Copywriting', institution: 'Estácio' },
  { name: 'Computer Graphics and Electronic Publishing', institution: 'Estácio' },
  { name: 'Art Direction in Advertising', institution: 'Estácio' },
  { name: 'Creative Advertising', institution: 'Estácio' },
  { name: 'Advertising Process Planning and Management', institution: 'Estácio' },
  { name: 'Digital Marketing', institution: 'Mirago' },
  { name: 'Social Media', institution: 'Intensa' },
]

const languages = [
  { lang: 'Portuguese', level: 'Native', dots: 5 },
  { lang: 'English', level: 'Intermediate', dots: 3 },
  { lang: 'Spanish', level: 'Intermediate', dots: 3 },
]

const fade = (delay = 0) => ({
  initial: { opacity: 0, y: 16 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-40px' },
  transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as [number,number,number,number], delay },
})

export default function ResumeExtras() {
  return (
    <>
      {/* ── EDUCATION ──────────────────────────────────────────────────────── */}
      <section id="education" className="bg-white py-20 sm:py-28">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
          <motion.p {...fade()} className="font-caveat text-lg mb-5" style={{ color: '#D4775A' }}>
            Education
          </motion.p>
          <motion.h2
            {...fade(0.08)}
            className="font-cormorant font-bold text-black mb-14"
            style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', letterSpacing: '-0.01em', lineHeight: 1 }}
          >
            Academic Background
          </motion.h2>

          <motion.div
            {...fade(0.16)}
            className="relative pl-6 sm:pl-10"
          >
            {/* Terracotta timeline line */}
            <span
              className="absolute left-0 top-0 bottom-0 w-[2px] rounded-full"
              style={{ backgroundColor: '#D4775A' }}
            />
            {/* Dot */}
            <span
              className="absolute left-[-5px] top-2 w-3 h-3 rounded-full border-2 bg-white"
              style={{ borderColor: '#D4775A' }}
            />

            <div className="bg-[#f5f5f5] rounded-[20px] sm:rounded-[24px] p-6 sm:p-10 max-w-2xl">
              <p
                className="font-tight text-xs uppercase tracking-[0.18em] mb-3"
                style={{ color: '#D4775A' }}
              >
                2021 – 2025
              </p>
              <h3
                className="font-cormorant font-bold text-black leading-tight mb-2"
                style={{ fontSize: 'clamp(1.4rem, 3vw, 2rem)', letterSpacing: '-0.01em' }}
              >
                Advertising &amp; Public Relations
              </h3>
              <p className="font-tight text-sm text-black/55 font-medium tracking-wide">
                Estácio University
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── COURSES ────────────────────────────────────────────────────────── */}
      <section id="courses" className="bg-[#fafafa] py-20 sm:py-28">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
          <motion.p {...fade()} className="font-caveat text-lg mb-5" style={{ color: '#D4775A' }}>
            Courses
          </motion.p>
          <motion.h2
            {...fade(0.08)}
            className="font-cormorant font-bold text-black mb-14"
            style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', letterSpacing: '-0.01em', lineHeight: 1 }}
          >
            Continuing Education
          </motion.h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-16 gap-y-0">
            {courses.map((c, i) => (
              <motion.div
                key={c.name}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-30px' }}
                transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1], delay: i * 0.06 }}
                className="group flex items-start gap-4 py-5 border-b border-black/[0.07]"
              >
                {/* Number */}
                <span
                  className="font-tight text-xs font-bold shrink-0 mt-0.5 tabular-nums w-6"
                  style={{ color: '#D4775A' }}
                >
                  {String(i + 1).padStart(2, '0')}
                </span>

                <div className="min-w-0">
                  <p
                    className="font-cormorant font-semibold text-black leading-snug group-hover:text-black/70 transition-colors duration-200"
                    style={{ fontSize: 'clamp(1rem, 1.8vw, 1.15rem)', letterSpacing: '-0.01em' }}
                  >
                    {c.name}
                  </p>
                  <p className="font-tight text-[10px] uppercase tracking-[0.15em] text-black/40 mt-1 font-medium">
                    {c.institution}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── LANGUAGES ──────────────────────────────────────────────────────── */}
      <section id="languages" className="bg-white py-20 sm:py-28">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
          <motion.p {...fade()} className="font-caveat text-lg mb-5" style={{ color: '#D4775A' }}>
            Languages
          </motion.p>
          <motion.h2
            {...fade(0.08)}
            className="font-cormorant font-bold text-black mb-14"
            style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', letterSpacing: '-0.01em', lineHeight: 1 }}
          >
            Languages
          </motion.h2>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {languages.map((l, i) => (
              <motion.div
                key={l.lang}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-30px' }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: i * 0.1 }}
                className="bg-[#f5f5f5] rounded-[20px] sm:rounded-[24px] p-7 sm:p-8 flex flex-col justify-between gap-8"
              >
                <h3
                  className="font-cormorant font-bold text-black leading-none"
                  style={{ fontSize: 'clamp(2rem, 5vw, 2.8rem)', letterSpacing: '-0.02em' }}
                >
                  {l.lang}
                </h3>

                <div className="flex flex-col gap-2">
                  {/* Dot proficiency indicator */}
                  <div className="flex gap-1.5">
                    {Array.from({ length: 5 }).map((_, d) => (
                      <span
                        key={d}
                        className="w-2 h-2 rounded-full transition-all duration-300"
                        style={{ backgroundColor: d < l.dots ? '#D4775A' : 'rgba(0,0,0,0.1)' }}
                      />
                    ))}
                  </div>
                  <p className="font-tight text-xs uppercase tracking-[0.18em] font-medium text-black/45">
                    {l.level}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
