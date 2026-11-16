/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        // Black + ivory identity. Sage is an accent only.
        ink: { DEFAULT: '#111111', soft: '#1B1B1B' },
        charcoal: { DEFAULT: '#292929' },
        ivory: { DEFAULT: '#F5F2EA', deep: '#EEEAE0' },
        stone: { DEFAULT: '#DCD8CF', dark: '#C9C4B9' },
        sage: { DEFAULT: '#A8B6A0', deep: '#5F6E58' },
        // Body text greys tuned for contrast on ivory (≥ 4.5:1).
        muted: { DEFAULT: '#5C5952', light: '#8A867C' },
      },
      fontFamily: {
        sans: ['"Archivo Variable"', 'Archivo', 'system-ui', 'sans-serif'],
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
      },
      letterSpacing: { label: '0.2em' },
      maxWidth: { page: '1320px' },
    },
  },
  plugins: [],
}
