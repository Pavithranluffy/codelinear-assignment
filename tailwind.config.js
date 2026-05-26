/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Dark theme palette extracted from the screenshots
        ink: {
          950: '#02060A',   // deepest background
          900: '#040910',   // body background
          800: '#0A1018',   // cards
          700: '#0E1722',   // elevated cards
          600: '#152030',
        },
        // Light theme palette (Digital Banking section)
        sky: {
          50: '#EEF4FB',
          100: '#E5EEF8',
          200: '#D6E4F2',
        },
        // Blue accents
        accent: {
          DEFAULT: '#2D7FF9',
          bright: '#3B8FFA',
          glow: '#4FA3FF',
          deep: '#1A5FD9',
        },
        // Link / underline cyan
        link: '#5BB4FF',
      },
      fontFamily: {
        sans: ['var(--font-geist-sans)', 'system-ui', 'sans-serif'],
        mono: ['var(--font-geist-mono)', 'ui-monospace', 'monospace'],
      },
      letterSpacing: {
        'btn': '0.18em',
      },
      animation: {
        'marquee': 'marquee 40s linear infinite',
        'marquee-slow': 'marquee 60s linear infinite',
        'fade-up': 'fadeUp 0.6s ease-out forwards',
        'glow-pulse': 'glowPulse 4s ease-in-out infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        glowPulse: {
          '0%, 100%': { opacity: '0.4' },
          '50%': { opacity: '0.7' },
        },
      },
      backgroundImage: {
        'btn-gradient': 'linear-gradient(90deg, #2C7BF7 0%, #4FA3FF 100%)',
        'btn-gradient-hover': 'linear-gradient(90deg, #1F6FED 0%, #3B8FFA 100%)',
        'hero-glow': 'radial-gradient(ellipse at center, rgba(45,127,249,0.25) 0%, rgba(0,0,0,0) 60%)',
        'n7-gradient': 'linear-gradient(135deg, #4FA3FF 0%, #1A5FD9 100%)',
      },
      boxShadow: {
        'btn-glow': '0 0 24px rgba(79, 163, 255, 0.45)',
        'card-glow': '0 0 40px rgba(45, 127, 249, 0.15)',
      },
    },
  },
  plugins: [],
};
