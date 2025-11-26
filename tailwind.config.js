module.exports = {
  darkMode: ["class"],
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        border: "hsl(0, 0%, 85%)",
        input: "hsl(0, 0%, 85%)",
        ring: "hsl(42, 90%, 55%)",
        background: "hsl(0, 0%, 100%)",
        foreground: "hsl(0, 0%, 15%)",
        primary: {
          DEFAULT: "hsl(267, 45%, 32%)",
          foreground: "hsl(0, 0%, 98%)",
        },
        secondary: {
          DEFAULT: "hsl(267, 45%, 92%)",
          foreground: "hsl(267, 45%, 25%)",
        },
        tertiary: {
          DEFAULT: "hsl(42, 90%, 55%)",
          foreground: "hsl(0, 0%, 10%)",
        },
        neutral: {
          DEFAULT: "hsl(0, 0%, 100%)",
          foreground: "hsl(0, 0%, 15%)",
        },
        success: "hsl(150, 40%, 45%)",
        warning: "hsl(32, 95%, 50%)",
        muted: {
          DEFAULT: "hsl(0, 0%, 95%)",
          foreground: "hsl(0, 0%, 35%)",
        },
        accent: {
          DEFAULT: "hsl(42, 90%, 55%)",
          foreground: "hsl(0, 0%, 10%)",
        },
        destructive: {
          DEFAULT: "hsl(0, 84%, 60%)",
          foreground: "hsl(0, 0%, 98%)",
        },
        card: {
          DEFAULT: "hsl(0, 0%, 100%)",
          foreground: "hsl(0, 0%, 15%)",
        },
        popover: {
          DEFAULT: "hsl(0, 0%, 100%)",
          foreground: "hsl(0, 0%, 15%)",
        },
        gray: {
          50: "hsl(0, 0%, 98%)",
          100: "hsl(0, 0%, 95%)",
          200: "hsl(0, 0%, 85%)",
          300: "hsl(0, 0%, 75%)",
          400: "hsl(0, 0%, 60%)",
          500: "hsl(0, 0%, 45%)",
          600: "hsl(0, 0%, 35%)",
          700: "hsl(0, 0%, 25%)",
          800: "hsl(0, 0%, 15%)",
          900: "hsl(0, 0%, 8%)",
        },
      },
      fontFamily: {
        sans: ['"DM Sans"', 'sans-serif'],
        headline: ['"Poppins"', 'sans-serif'],
        mono: ['"Roboto Mono"', 'monospace'],
      },
      fontSize: {
        'h1': ['2.5rem', { lineHeight: '1.2', letterSpacing: '-0.025em', fontWeight: '500' }],
        'h2': ['2.1rem', { lineHeight: '1.3', fontWeight: '500' }],
        'h3': ['1.6rem', { lineHeight: '1.4', fontWeight: '500' }],
      },
      spacing: {
        '4': '1rem',
        '8': '2rem',
        '12': '3rem',
        '16': '4rem',
        '24': '6rem',
        '32': '8rem',
      },
      borderRadius: {
        lg: '12px',
        md: '10px',
        sm: '8px',
      },
      backgroundImage: {
        'gradient-1': 'linear-gradient(135deg, hsl(267, 45%, 35%) 0%, hsl(270, 45%, 45%) 100%)',
        'gradient-2': 'linear-gradient(180deg, hsl(267, 45%, 25%) 0%, hsl(270, 45%, 40%) 100%)',
        'button-border-gradient': 'linear-gradient(90deg, hsl(267, 45%, 35%), hsl(42, 90%, 55%))',
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}
