/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        'inter': ['var(--font-inter)', 'system-ui', 'sans-serif'],
        'space-grotesk': ['var(--font-space-grotesk)', 'system-ui', 'sans-serif'],
        'mono': ['var(--font-mono)', 'JetBrains Mono', 'Consolas', 'monospace'],
        'display': ['Space Grotesk', 'Orbitron', 'system-ui', 'sans-serif'],
        'heading': ['Space Grotesk', 'Exo 2', 'system-ui', 'sans-serif'],
        'body': ['Inter', 'system-ui', 'sans-serif'],
        'futuristic': ['Orbitron', 'Space Grotesk', 'monospace'],
        'gaming': ['Exo 2', 'Orbitron', 'sans-serif'],
        sans: ['Inter', 'SF Pro Display', '-apple-system', 'BlinkMacSystemFont', 'system-ui', 'sans-serif'],
      },
      colors: {
        erevus: {
          primary: '#0066cc',
          secondary: '#ff6600',
          accent: '#00ff88',
          dark: '#0a0a0a',
          darker: '#050505',
        },
        primary: {
          50: '#f0f8ff',  // Very light for text
          100: '#e0f1ff', // Light text
          200: '#bae6fd', // Subtle text
          300: '#7dd3fc', // Muted text  
          400: '#38bdf8', // Secondary text
          500: '#0066cc', // Base EREVUS primary
          600: '#0052a3', // Dark text
          700: '#003d7a', // Darker text
          800: '#002952', // Very dark
          900: '#001429', // Darkest
        },
        blue: {
          50: '#f0f8ff',
          100: '#e0f1ff', 
          200: '#bae6fd',
          300: '#7dd3fc',
          400: '#38bdf8', // Light blue accent
          500: '#0066cc', // EREVUS Primary Blue
          600: '#0052a3', // Darker blue
          700: '#003d7a', // Professional blue
          800: '#002952', // Deep blue
          900: '#001429', // Darkest blue
        },
        orange: {
          50: '#fff7ed',
          100: '#ffedd5',
          200: '#fed7aa', 
          300: '#fdba74',
          400: '#fb923c', // Light orange
          500: '#ff6600', // EREVUS Secondary Orange
          600: '#cc5200', // Darker orange
          700: '#994000', // Deep orange
          800: '#662b00', // Very dark orange
          900: '#331500', // Darkest orange
        },
        green: {
          50: '#f0fff4',
          100: '#dcfce7',
          200: '#bbf7d0',
          300: '#86efac',
          400: '#4ade80',
          500: '#00ff88', // EREVUS Accent Green
          600: '#00cc6a', // Darker green
          700: '#00994d', // Deep green
          800: '#006633', // Very dark green
          900: '#003319', // Darkest green
        },
        gray: {
          50: '#f9fafb',
          100: '#f3f4f6',
          200: '#e5e7eb',
          300: '#d1d5db',
          400: '#9ca3af',
          500: '#6b7280',
          600: '#4b5563',
          700: '#374151',
          800: '#1f2937', // Dark gray
          900: '#111827', // Very dark gray
        },
        erevus: {
          black: '#000000',     // Pure black
          dark: '#0a0a0a',      // Near black
          darker: '#050505',    // Deeper black
          gray: '#1a1a1a',      // Dark gray
          'gray-light': '#2d2d2d', // Lighter dark gray
          blue: '#3b82f6',      // Professional blue
          'blue-light': '#60a5fa', // Light blue
          'blue-dark': '#1e40af',  // Dark blue
          orange: '#f97316',    // Orange accent
          'orange-light': '#fb923c', // Light orange
        },
        erevus: {
          black: '#000000',     // Pure black
          dark: '#0a0a0a',      // Near black
          darker: '#050505',    // Deeper black
          gray: '#1a1a1a',      // Dark gray
          'gray-light': '#2d2d2d', // Lighter dark gray
          blue: '#3b82f6',      // Professional blue
          'blue-light': '#60a5fa', // Light blue
          'blue-dark': '#1e40af',  // Dark blue
          orange: '#f97316',    // Orange accent
          'orange-light': '#fb923c', // Light orange
        }
      },
      fontFamily: {
        sans: ['Inter', 'SF Pro Display', '-apple-system', 'BlinkMacSystemFont', 'system-ui', 'sans-serif'],
        display: ['Inter', 'SF Pro Display', '-apple-system', 'BlinkMacSystemFont', 'system-ui', 'sans-serif'],
        mono: ['SF Mono', 'Monaco', 'Inconsolata', 'Roboto Mono', 'source-code-pro', 'Menlo', 'monospace'],
      },
      animation: {
        'fade-in': 'fadeIn 1.2s ease-out',
        'fade-in-up': 'fadeInUp 1s ease-out',
        'fade-in-down': 'fadeInDown 1s ease-out',
        'slide-up': 'slideUp 1s ease-out',
        'slide-in': 'slideIn 0.8s ease-out',
        'slide-in-left': 'slideInLeft 0.8s cubic-bezier(0.16, 1, 0.3, 1)',
        'slide-in-right': 'slideInRight 0.8s cubic-bezier(0.16, 1, 0.3, 1)',
        'scale-in': 'scaleIn 0.6s cubic-bezier(0.16, 1, 0.3, 1)',
        'glow': 'glow 3s ease-in-out infinite alternate',
        'glow-pulse': 'glowPulse 2s ease-in-out infinite',
        'pulse-slow': 'pulse 4s ease-in-out infinite',
        'bounce-slow': 'bounceSlow 3s infinite',
        'float': 'float 8s ease-in-out infinite',
        'float-reverse': 'floatReverse 10s ease-in-out infinite',
        'spin-slow': 'spin 12s linear infinite',
        'gradient-x': 'gradientX 8s ease-in-out infinite',
        'gradient-y': 'gradientY 6s ease-in-out infinite',
        'text-shimmer': 'textShimmer 3s ease-in-out infinite',
        'border-flow': 'borderFlow 4s linear infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(40px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeInDown: {
          '0%': { opacity: '0', transform: 'translateY(-40px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideUp: {
          '0%': { transform: 'translateY(40px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideIn: {
          '0%': { transform: 'translateX(100%)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        slideInLeft: {
          '0%': { opacity: '0', transform: 'translateX(-50px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        slideInRight: {
          '0%': { opacity: '0', transform: 'translateX(50px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.9)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        floatReverse: {
          '0%, 100%': { transform: 'translateY(-10px)' },
          '50%': { transform: 'translateY(10px)' },
        },
        bounceSlow: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        glow: {
          '0%': { boxShadow: '0 0 20px rgba(139, 69, 19, 0.3), 0 0 40px rgba(139, 69, 19, 0.2)' },
          '100%': { boxShadow: '0 0 30px rgba(139, 69, 19, 0.5), 0 0 60px rgba(139, 69, 19, 0.3)' },
        },
        glowPulse: {
          '0%, 100%': { boxShadow: '0 0 15px rgba(59, 130, 246, 0.4), 0 0 30px rgba(59, 130, 246, 0.2)' },
          '50%': { boxShadow: '0 0 25px rgba(59, 130, 246, 0.6), 0 0 50px rgba(59, 130, 246, 0.4)' },
        },
        gradientX: {
          '0%, 100%': { 'background-position': '0% 50%' },
          '50%': { 'background-position': '100% 50%' },
        },
        gradientY: {
          '0%, 100%': { 'background-position': '50% 0%' },
          '50%': { 'background-position': '50% 100%' },
        },
        textShimmer: {
          '0%': { 'background-position': '-200% center' },
          '100%': { 'background-position': '200% center' },
        },
        borderFlow: {
          '0%': { 'background-position': '0% 50%' },
          '100%': { 'background-position': '200% 50%' },
        }
      },
      transitionTimingFunction: {
        'bounce': 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
        'smooth': 'cubic-bezier(0.4, 0, 0.2, 1)',
        'dramatic': 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
        'elastic': 'cubic-bezier(0.175, 0.885, 0.32, 1.275)',
      },
      backdropBlur: {
        'xs': '2px',
        'sm': '4px',
        'md': '8px',
        'lg': '12px',
        'xl': '16px',
        '2xl': '24px',
        '3xl': '40px',
      },
      fontSize: {
        '2xs': '0.625rem',
        'xs': '0.75rem',
        'sm': '0.875rem',
        'base': '1rem',
        'lg': '1.125rem',
        'xl': '1.25rem',
        '2xl': '1.5rem',
        '3xl': '1.875rem',
        '4xl': '2.25rem',
        '5xl': '3rem',
        '6xl': '3.75rem',
        '7xl': '4.5rem',
        '8xl': '6rem',
        '9xl': '8rem',
        'hero': 'clamp(2.5rem, 8vw, 8rem)',
        'mega': 'clamp(3rem, 10vw, 12rem)',
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}