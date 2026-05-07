import type { Metadata } from 'next'
import { Inter_Tight, Caveat } from 'next/font/google'
import './globals.css'
import Navigation from '@/components/Navigation'
import SmoothScroll from '@/components/SmoothScroll'

const interTight = Inter_Tight({
  subsets: ['latin'],
  variable: '--font-tight',
  display: 'swap',
  weight: ['400', '500', '600', '700'],
})

const caveat = Caveat({
  subsets: ['latin'],
  variable: '--font-caveat',
  display: 'swap',
  weight: ['700'],
})

export const metadata: Metadata = {
  title: 'Anne Orlenadja — Social Media Manager & Videomaker',
  description:
    'Portfolio of Anne Orlenadja — Social Media Manager and Videomaker based in Aracaju, Brazil. Growth and visibility for your brand.',
  keywords: ['social media', 'videomaker', 'content creation', 'Aracaju', 'Brazil', 'marketing'],
  openGraph: {
    title: 'Anne Orlenadja — Social Media Manager & Videomaker',
    description: 'Growth and visibility for your brand.',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${interTight.variable} ${caveat.variable}`}>
      <body>
        <SmoothScroll>
          {children}
          <Navigation />
        </SmoothScroll>
      </body>
    </html>
  )
}
