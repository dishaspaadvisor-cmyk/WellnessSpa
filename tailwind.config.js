/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Premium Oceanic Wellness Spa Color Palette - 5 Centralized Colors
        primary: '#0F4C75',      // Deep Ocean Blue - Main brand color, buttons, CTAs
        secondary: '#14B8A6',    // Teal - Accents, hover states, highlights
        accent: '#1E293B',       // Deep Navy - Text, emphasis, dark elements
        neutral: '#FAFAFA',      // Pearl White - Backgrounds, cards, subtle areas
        highlight: '#06B6D4',    // Aqua Blue - Special highlights, badges, active states
      },
      fontFamily: {
        'serif': ['Playfair Display', 'serif'],
        'sans': ['Inter', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-oceanic': 'linear-gradient(135deg, #0F4C75 0%, #14B8A6 100%)',
        'gradient-oceanic-reverse': 'linear-gradient(135deg, #14B8A6 0%, #0F4C75 100%)',
        'gradient-premium': 'linear-gradient(135deg, #0F4C75 0%, #1E293B 50%, #14B8A6 100%)',
      },
    },
  },
  plugins: [],
}

