'use client'

import { motion } from 'framer-motion'
import AnimatedText from '@/components/ui/AnimatedText'

const steps = [
  {
    number: '01',
    title: 'Discovery',
    description:
      'Deep dive into your brand, target audience, market positioning, and competitive landscape. This research phase builds the strategic foundation — ensuring every creative decision is grounded in real insight.',
    color: '#FFD900',
  },
  {
    number: '02',
    title: 'Strategy',
    description:
      'With insights in hand, I craft a tailored content strategy — defining visual language, tone of voice, content pillars, campaign concepts, and publishing cadence. Every brand gets a unique blueprint.',
    color: '#0099ff',
  },
  {
    number: '03',
    title: 'Creation',
    description:
      'The execution phase: designing visuals, writing copy, filming and editing videos. Every piece is crafted to capture attention and communicate your brand story with clarity and genuine impact.',
    color: '#FFD900',
  },
  {
    number: '04',
    title: 'Analysis',
    description:
      'After publishing, I track performance metrics — reach, engagement, conversions, sentiment — and use these insights to continuously refine the strategy and compound results over time.',
    color: '#0099ff',
  },
]

export default function Process() {
  return (
    <section id="process" className="bg-white py-20 sm:py-28">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
        {/* Header */}
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="font-tight text-xs text-muted font-medium tracking-widest uppercase mb-5"
        >
          Process
        </motion.p>
        <AnimatedText
          text="How I work with brands."
          tag="h2"
          className="font-tight font-bold text-black mb-14"
          style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', letterSpacing: '-0.03em', lineHeight: 1 }}
        />

        {/* Steps grid — 2 columns on desktop */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: i * 0.1 }}
              className="bg-surface rounded-[24px] p-8"
              style={{ minHeight: 240 }}
            >
              {/* Number */}
              <div
                className="font-tight font-bold leading-none mb-6"
                style={{
                  fontSize: '3rem',
                  letterSpacing: '-0.04em',
                  color: step.color,
                }}
              >
                {step.number}
              </div>
              <h3
                className="font-tight font-bold text-black mb-4 leading-tight"
                style={{ fontSize: '1.35rem', letterSpacing: '-0.02em' }}
              >
                {step.title}
              </h3>
              <p className="font-tight text-sm text-black/60 leading-relaxed font-medium">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
          className="mt-10 bg-black rounded-[24px] p-8 sm:p-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6"
        >
          <div>
            <h3
              className="font-tight font-bold text-white leading-tight mb-2"
              style={{ fontSize: 'clamp(1.2rem, 3vw, 1.75rem)', letterSpacing: '-0.02em' }}
            >
              Ready to grow your brand?
            </h3>
            <p className="font-tight text-white/50 text-sm font-medium">
              Let&apos;s craft something remarkable together.
            </p>
          </div>
          <a
            href="mailto:aorlenadja@gmail.com"
            className="shrink-0 pill-btn bg-[#FFD900] text-black hover:bg-yellow-300 text-sm font-bold"
            style={{ padding: '12px 28px' }}
          >
            Start a project →
          </a>
        </motion.div>
      </div>
    </section>
  )
}
