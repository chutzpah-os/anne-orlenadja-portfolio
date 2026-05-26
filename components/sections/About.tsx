'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import Image from 'next/image'
import AnimatedText from '@/components/ui/AnimatedText'

const skills = [
  'Social Media Management',
  'Videomaking',
  'Content Creation',
  'Brand Strategy',
  'Campaign Planning',
  'Visual Identity',
  'Copywriting',
  'Video Editing',
  'Analytics & Insights',
  'Event Coverage',
  'Community Management',
  'Influencer Management',
  'Media Buyer',
]

const fade = (delay = 0) => ({
  initial: { opacity: 0, y: 12 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-40px' },
  transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1], delay },
})

export default function About() {
  return (
    <section id="about" className="bg-white py-20 sm:py-28">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
        {/* Section label */}
        <motion.p
          {...fade()}
          className="font-caveat text-lg mb-10"
          style={{ color: '#D4775A' }}
        >
          About
        </motion.p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-start">
          {/* Left: portrait + stats */}
          <motion.div
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:sticky lg:top-8"
          >
            <div className="mx-auto lg:mx-0 w-[65%] sm:w-[55%] lg:w-full relative overflow-hidden bg-surface rounded-[24px]" style={{ aspectRatio: '4/5', maxHeight: 'min(520px, 65vh)' }}>
              <Image
                src="/assets/institucionallll.jpg"
                alt="Anne Orlenadja"
                fill
                className="object-cover object-center"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>

            {/* Stats row */}
            <div className="grid grid-cols-3 gap-2 sm:gap-4 mt-4">
              {[
                { n: '6+', l: 'Years Experience' },
                { n: '20+', l: 'Brands Served' },
                { n: '200+', l: 'Campaigns' },
              ].map((s, i) => (
                <motion.div
                  key={s.l}
                  {...fade(i * 0.08)}
                  className="bg-surface rounded-[16px] sm:rounded-[24px] p-3 sm:p-5 text-center"
                >
                  <div
                    className="font-tight font-bold leading-none"
                    style={{ fontSize: 'clamp(1.1rem, 4vw, 1.75rem)', letterSpacing: '-0.03em', color: '#D4775A' }}
                  >
                    {s.n}
                  </div>
                  <div className="font-tight text-[10px] sm:text-xs text-muted mt-1">{s.l}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right: text */}
          <div className="text-center lg:text-left">
            <AnimatedText
              text="Creative professional building authentic brand narratives."
              tag="h2"
              className="font-cormorant font-bold text-black leading-tight mb-8"
              style={{ fontSize: 'clamp(1.5rem, 3.5vw, 2.5rem)', letterSpacing: '-0.01em' }}
            />

            <motion.div {...fade(0.2)} className="space-y-5 font-tight text-base text-black/65 leading-relaxed font-medium">
              <p>
                I&apos;m Anne Orlenadja, 23 years old, a Marketing & Branding Analyst based in
                Aracaju, Brazil. I work in video production and social media management, helping
                brands grow their digital presence through strategic content and visual storytelling.
                I hold a degree in Advertising & Public Relations with a specialization in Digital
                Marketing focused on Social Media.
              </p>
              <p>
                With over six years of experience, I&apos;ve built deep expertise in content
                creation, strategic planning, audience engagement, and project management.
                My work spans impactful brand narratives, visual identity development, and
                metric-driven campaign optimization.
              </p>
            </motion.div>

            {/* Skills */}
            <motion.div {...fade(0.35)} className="mt-8 flex flex-wrap gap-2 justify-center lg:justify-start">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="font-tight text-xs font-medium px-3 py-1.5 rounded-full bg-surface hover:bg-accent hover:text-white transition-all duration-200"
                  style={{ color: '#D4775A' }}
                >
                  {skill}
                </span>
              ))}
            </motion.div>

            {/* Social links */}
            <motion.div {...fade(0.5)} className="mt-8 flex flex-wrap gap-2 sm:gap-4 justify-center lg:justify-start">
              <a
                href="https://instagram.com/anneorlenadja"
                target="_blank"
                rel="noopener noreferrer"
                className="pill-btn bg-surface hover:opacity-80 transition-opacity text-sm" style={{ color: '#D4775A' }}
              >
                Instagram ↗
              </a>
              <a
                href="mailto:aorlenadja@gmail.com"
                className="pill-btn bg-surface hover:opacity-80 transition-opacity text-sm" style={{ color: '#D4775A' }}
              >
                Email ↗
              </a>
              <a
                href="https://www.youtube.com/@anneorlenadja"
                target="_blank"
                rel="noopener noreferrer"
                className="pill-btn bg-surface hover:opacity-80 transition-opacity text-sm" style={{ color: '#D4775A' }}
              >
                YouTube ↗
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
