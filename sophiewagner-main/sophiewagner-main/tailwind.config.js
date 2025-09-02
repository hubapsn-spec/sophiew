/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'warm-cream': '#F5F1E8',
        'warm-beige': '#E8DCC6',
        'warm-brown': '#8B6F47',
        'deep-brown': '#6B4E3D',
        'soft-brown': '#A0845C',
        'light-brown': '#C4A882',
      },
      fontFamily: {
        serif: ['Cormorant Garamond', 'serif'],
        sans: ['Inter', 'sans-serif'],
      },
      fontSize: {
        '9xl': ['8rem', { lineHeight: '0.9' }],
        '10xl': ['10rem', { lineHeight: '0.85' }],
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      },
      animation: {
        'fade-in': 'fadeIn 1.2s ease-out',
        'slide-up': 'slideUp 1.2s ease-out',
        'scale-in': 'scaleIn 0.8s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(60px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        scaleIn: {
          '0%': { transform: 'scale(0.9)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
      },
      backdropBlur: {
        xs: '2px',
      },
      borderRadius: {
        '4xl': '2rem',
        '5xl': '2.5rem',
      },
      letterSpacing: {
        'warmest': '0.15em',
        'warmer': '0.1em',
      },
      lineHeight: {
        'extra-tight': '1.1',
        'super-tight': '0.9',
      },
      boxShadow: {
        'warm': '0 8px 32px -4px rgba(139, 111, 71, 0.15), 0 4px 16px -4px rgba(139, 111, 71, 0.08)',
        'warm-lg': '0 16px 48px -8px rgba(139, 111, 71, 0.2), 0 8px 24px -8px rgba(139, 111, 71, 0.12)',
        'warm-xl': '0 24px 64px -12px rgba(139, 111, 71, 0.25), 0 12px 32px -12px rgba(139, 111, 71, 0.15)',
      },
    },
  },
  plugins: [],
};