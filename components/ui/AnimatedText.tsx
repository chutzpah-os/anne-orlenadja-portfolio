'use client'

import { motion, useInView } from 'framer-motion'
import { useRef, CSSProperties } from 'react'

interface AnimatedTextProps {
  text: string
  className?: string
  style?: CSSProperties
  delay?: number
  tag?: 'h1' | 'h2' | 'h3' | 'p' | 'span' | 'div'
}

export default function AnimatedText({
  text,
  className = '',
  style,
  delay = 0,
  tag: Tag = 'div',
}: AnimatedTextProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-40px' })
  const words = text.split(' ')

  return (
    <Tag ref={ref} className={className} style={{ ...style, display: 'flex', flexWrap: 'wrap', gap: '0 0.28em' }}>
      {words.map((word, i) => (
        <span key={i} style={{ overflow: 'hidden', display: 'inline-block' }}>
          <motion.span
            initial={{ y: '110%', opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : {}}
            transition={{
              duration: 0.75,
              ease: [0.16, 1, 0.3, 1],
              delay: delay + i * 0.06,
            }}
            style={{ display: 'inline-block' }}
          >
            {word}
          </motion.span>
        </span>
      ))}
    </Tag>
  )
}
