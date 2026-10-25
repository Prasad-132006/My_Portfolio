/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        canvas: 'var(--color-bg)',
        surface: 'var(--color-surface)',
        ink: 'var(--color-text)',
        muted: 'var(--color-muted)',
        line: 'var(--color-border)',
        accent: 'var(--color-accent)',
        'on-accent': 'var(--color-on-accent)',
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      maxWidth: {
        page: '72rem',
        wide: '82rem',
      },
      letterSpacing: {
        label: '0.18em',
      },
    },
  },
  plugins: [],
}
