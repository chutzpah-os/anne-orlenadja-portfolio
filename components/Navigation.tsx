'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'

const navLinks = [
  { label: 'Home', href: '/#home' },
  { label: 'Work', href: '/#work' },
  { label: 'About', href: '/#about' },
  { label: 'Process', href: '/#process' },
  { label: 'Contact', href: '/#contact' },
]

export default function Navigation() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <>
      {/* Fixed bottom nav — mimics danielsun.space pill nav */}
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
        className="fixed bottom-0 left-0 right-0 z-50 px-4 pb-4 sm:px-6 sm:pb-4"
        style={{ paddingBottom: '16px' }}
      >
        {/* Pill container */}
        <div className="max-w-5xl mx-auto">
          <div className="bg-[#f2f2f2] rounded-[24px] h-[70px] flex items-center justify-between px-6 sm:px-8 shadow-[0_4px_24px_rgba(0,0,0,0.08)]">
            {/* Logo / Name */}
            <Link
              href="/"
              className="font-caveat text-xl font-bold text-black hover:text-accent transition-colors duration-200 shrink-0"
            >
              Anne Orlenadja
            </Link>

            {/* Desktop nav links */}
            <nav className="hidden md:flex items-center gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="pill-btn pill-btn-ghost text-[13px] text-black/70 hover:text-black"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            {/* Right side: CTA + mobile toggle */}
            <div className="flex items-center gap-2">
              <a
                href="mailto:aorlenadja@gmail.com"
                className="hidden sm:flex pill-btn pill-btn-dark text-[13px]"
              >
                Start Project →
              </a>

              {/* Mobile hamburger */}
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="md:hidden flex flex-col justify-center items-center w-10 h-10 rounded-xl hover:bg-black/8 transition-colors gap-[5px]"
                aria-label="Menu"
              >
                <motion.span
                  animate={{ rotate: menuOpen ? 45 : 0, y: menuOpen ? 7 : 0 }}
                  transition={{ duration: 0.25 }}
                  className="block w-5 h-0.5 bg-black origin-center"
                />
                <motion.span
                  animate={{ opacity: menuOpen ? 0 : 1 }}
                  transition={{ duration: 0.2 }}
                  className="block w-5 h-0.5 bg-black"
                />
                <motion.span
                  animate={{ rotate: menuOpen ? -45 : 0, y: menuOpen ? -7 : 0 }}
                  transition={{ duration: 0.25 }}
                  className="block w-5 h-0.5 bg-black origin-center"
                />
              </button>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Mobile menu overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 8 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 8 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="fixed bottom-[102px] left-4 right-4 sm:left-6 sm:right-6 z-50 bg-[#f2f2f2] rounded-[24px] overflow-hidden shadow-[0_8px_40px_rgba(0,0,0,0.12)]"
            style={{ maxWidth: '960px', margin: '0 auto' }}
          >
            <div className="p-6 space-y-1">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.2, delay: i * 0.04 }}
                  className="flex items-center justify-between py-3 px-4 rounded-2xl text-black/80 hover:text-black hover:bg-black/6 transition-colors duration-200 font-tight text-base font-medium"
                >
                  {link.label}
                  <span className="text-black/30">→</span>
                </motion.a>
              ))}
              <div className="pt-3 mt-3 border-t border-black/8">
                <a
                  href="mailto:aorlenadja@gmail.com"
                  className="flex pill-btn pill-btn-dark w-full justify-center text-sm"
                >
                  Start Project →
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
