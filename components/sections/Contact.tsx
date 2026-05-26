'use client'

import { motion } from 'framer-motion'
import AnimatedText from '@/components/ui/AnimatedText'

const contactItems = [
  { label: 'Email', value: 'aorlenadja@gmail.com', href: 'mailto:aorlenadja@gmail.com', external: false },
  { label: 'Phone', value: '+55 (79) 99873-3448', href: 'tel:+5579998733448', external: false },
  { label: 'Instagram', value: '@anneorlenadja', href: 'https://instagram.com/anneorlenadja', external: true },
]

const fade = (delay = 0) => ({
  initial: { opacity: 0, y: 12 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-40px' },
  transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as [number, number, number, number], delay },
})

export default function Contact() {
  return (
    <section id="contact" className="bg-white py-20 sm:py-28">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
        {/* Label */}
        <motion.p {...fade()} className="font-caveat text-lg mb-5" style={{ color: '#D4775A' }}>
          Contact
        </motion.p>

        {/* Big headline */}
        <AnimatedText
          text="Let's create something remarkable."
          tag="h2"
          className="font-cormorant font-bold text-black mb-16 max-w-3xl"
          style={{ fontSize: 'clamp(2.2rem, 6vw, 5rem)', letterSpacing: '-0.01em', lineHeight: 0.92 }}
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 items-start">
          {/* Contact info */}
          <motion.div {...fade(0.15)} className="space-y-6">
            {contactItems.map((item) => (
              <div key={item.label}>
                <p className="font-tight text-xs text-muted uppercase tracking-widest mb-1.5">
                  {item.label}
                </p>
                <a
                  href={item.href}
                  target={item.external ? '_blank' : undefined}
                  rel={item.external ? 'noopener noreferrer' : undefined}
                  className="font-tight font-bold hover:opacity-75 transition-opacity duration-200 break-all sm:break-normal"
                  style={{ color: '#D4775A', letterSpacing: '-0.01em', fontSize: 'clamp(0.95rem, 3vw, 1.125rem)' }}
                >
                  {item.value}
                </a>
              </div>
            ))}
          </motion.div>

          {/* CTA card */}
          <motion.div
            {...fade(0.3)}
            className="bg-[#f2f2f2] rounded-[20px] sm:rounded-[24px] p-6 sm:p-10"
          >
            <h3
              className="font-cormorant font-bold text-black leading-tight mb-3"
              style={{ fontSize: 'clamp(1.4rem, 3vw, 2.1rem)', letterSpacing: '-0.01em' }}
            >
              Ready to start?
            </h3>
            <p className="font-tight text-sm text-black/60 font-medium mb-6 leading-relaxed">
              I work with brands, businesses, and creatives to build visibility and grow their digital presence. Let&apos;s connect.
            </p>
            <a
              href="mailto:aorlenadja@gmail.com"
              className="pill-btn bg-accent text-white hover:opacity-85 transition-opacity text-sm font-bold"
              style={{ padding: '12px 28px' }}
            >
              Send a message →
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
