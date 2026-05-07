import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        surface: '#f5f5f5',
        surface2: '#f2f2f2',
        muted: '#767676',
        'muted-2': '#8c8c8c',
        accent: '#FFD900',
        yellow: '#FFD900',
        border: 'rgba(0,0,0,0.08)',
        'border-md': 'rgba(0,0,0,0.12)',
      },
      fontFamily: {
        tight: ['var(--font-tight)', 'system-ui', 'sans-serif'],
        caveat: ['var(--font-caveat)', 'cursive'],
      },
      borderRadius: {
        '4xl': '2rem',
        '5xl': '2.5rem',
      },
      transitionTimingFunction: {
        expo: 'cubic-bezier(0.16, 1, 0.3, 1)',
      },
    },
  },
  plugins: [],
}

export default config
