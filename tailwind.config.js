/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./stories/**/*.{js,ts,jsx,tsx}",
    "./.storybook/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        // Variables CSS para permitir customización desde el proyecto consumidor
        primary: {
          50: 'var(--mlz-primary-50, #eff6ff)',
          100: 'var(--mlz-primary-100, #dbeafe)',
          200: 'var(--mlz-primary-200, #bfdbfe)',
          300: 'var(--mlz-primary-300, #93c5fd)',
          400: 'var(--mlz-primary-400, #60a5fa)',
          500: 'var(--mlz-primary-500, #3b82f6)',
          600: 'var(--mlz-primary-600, #2563eb)',
          700: 'var(--mlz-primary-700, #1d4ed8)',
          800: 'var(--mlz-primary-800, #1e40af)',
          900: 'var(--mlz-primary-900, #1e3a8a)',
          950: 'var(--mlz-primary-950, #172554)'
        },
        secondary: {
          50: 'var(--mlz-secondary-50, #f8fafc)',
          100: 'var(--mlz-secondary-100, #f1f5f9)',
          200: 'var(--mlz-secondary-200, #e2e8f0)',
          300: 'var(--mlz-secondary-300, #cbd5e1)',
          400: 'var(--mlz-secondary-400, #94a3b8)',
          500: 'var(--mlz-secondary-500, #64748b)',
          600: 'var(--mlz-secondary-600, #475569)',
          700: 'var(--mlz-secondary-700, #334155)',
          800: 'var(--mlz-secondary-800, #1e293b)',
          900: 'var(--mlz-secondary-900, #0f172a)',
          950: 'var(--mlz-secondary-950, #020617)'
        }
      },
      spacing: {
        // Variables CSS para spacing customizable
        'mlz-xs': 'var(--mlz-spacing-xs, 0.25rem)',
        'mlz-sm': 'var(--mlz-spacing-sm, 0.5rem)',
        'mlz-md': 'var(--mlz-spacing-md, 1rem)',
        'mlz-lg': 'var(--mlz-spacing-lg, 1.5rem)',
        'mlz-xl': 'var(--mlz-spacing-xl, 2rem)',
        'mlz-2xl': 'var(--mlz-spacing-2xl, 3rem)'
      },
      borderRadius: {
        'mlz-sm': 'var(--mlz-border-radius-sm, 0.25rem)',
        'mlz-md': 'var(--mlz-border-radius-md, 0.375rem)',
        'mlz-lg': 'var(--mlz-border-radius-lg, 0.5rem)',
        'mlz-xl': 'var(--mlz-border-radius-xl, 0.75rem)'
      },
      fontSize: {
        'mlz-xs': 'var(--mlz-font-size-xs, 0.75rem)',
        'mlz-sm': 'var(--mlz-font-size-sm, 0.875rem)',
        'mlz-base': 'var(--mlz-font-size-base, 1rem)',
        'mlz-lg': 'var(--mlz-font-size-lg, 1.125rem)',
        'mlz-xl': 'var(--mlz-font-size-xl, 1.25rem)'
      }
    },
  },
  plugins: [],
}
