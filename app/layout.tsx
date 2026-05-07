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
  title: 'Anne Orlenadja — Marketing & Branding Analyst',
  description:
    'Portfolio of Anne Orlenadja — Social Media Manager and Videomaker based in Aracaju, Brazil. Growth and visibility for your brand.',
  keywords: ['social media', 'videomaker', 'content creation', 'Aracaju', 'Brazil', 'marketing'],
  openGraph: {
    title: 'Anne Orlenadja — Marketing & Branding Analyst',
    description: 'Growth and visibility for your brand.',
    type: 'website',
    url: 'https://anneorlenadja.vercel.app',
    siteName: 'Anne Orlenadja',
    images: [
      {
        url: 'https://anneorlenadja.vercel.app/assets/anneorlenadja.png',
        width: 1200,
        height: 630,
        alt: 'Anne Orlenadja — Marketing & Branding Analyst',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Anne Orlenadja — Marketing & Branding Analyst',
    description: 'Growth and visibility for your brand.',
    images: ['https://anneorlenadja.vercel.app/assets/anneorlenadja.png'],
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
