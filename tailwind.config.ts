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
        cream: '#F5F0E8',
        'warm-beige': '#E8DCC8',
        sand: '#D4C4A8',
        terracotta: '#C8A888',
        'warm-brown': '#A68968',
        'dark-brown': '#6B5B4A',
        charcoal: '#3A3229',
        'accent-coral': '#D89A7A',
        'accent-sage': '#A8B8A0',
        'accent-terracotta': '#B87860',
        'text-primary': '#3A3229',
        'text-secondary': '#6B5B4A',
        'text-muted': '#A68968',
      },
      fontFamily: {
        playfair: ['var(--font-playfair)', 'serif'],
        lora: ['var(--font-lora)', 'serif'],
        inter: ['var(--font-inter)', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-warm': 'linear-gradient(135deg, #F5F0E8 0%, #E8DCC8 100%)',
        'gradient-terracotta': 'linear-gradient(135deg, #C8A888 0%, #A68968 100%)',
      },
      boxShadow: {
        'warm': '0 4px 20px rgba(166, 137, 104, 0.15)',
        'warm-lg': '0 8px 32px rgba(166, 137, 104, 0.2)',
      },
      animation: {
        fadeIn: 'fadeIn 0.6s ease-out forwards',
        slideIn: 'slideIn 0.6s ease-out forwards',
        scaleIn: 'scaleIn 0.4s ease-out forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideIn: {
          '0%': { opacity: '0', transform: 'translateX(-30px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.95)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
      },
    },
  },
  plugins: [],
}
export default config
