import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './lib/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        pc: {
          green: '#3AD580',
          dark: '#0F382B',
          darker: '#0C281F',
          mid: '#1B3A2D',
          deepest: '#0A1F17',
          cream: '#FFFBEC',
        },
      },
      fontFamily: {
        sans: ['Satoshi', 'sans-serif'],
        display: ['IBM Plex Sans', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

export default config
