import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      colors: {
        primary: '#222222',
        textSecondary: '#e3e5ea',
        iconPrimary: '#aa00ff',
        secondary: '#3a3b3c',
        contrastColor: '#aa00ff'
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))'
      },
      keyframes: {
        fadeIn: {
          '0%': {
            width: 'auto'
          },
          '100%': {
            width: '0px'
          }
        }
      },
      animation: {
        wiggle: 'fadeIn ease-in 1s both'
      }
    }
  },
  plugins: []
}
export default config
