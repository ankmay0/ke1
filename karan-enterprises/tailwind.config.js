/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  // dark mode is driven by the existing pre-paint <html data-theme="dark"> toggle.
  // because every colour below maps to a CSS variable that theme.css inverts,
  // utilities like `bg-paper` / `text-ink` switch automatically — almost no
  // `dark:` variants are needed.
  darkMode: ['selector', '[data-theme="dark"]'],
  theme: {
    extend: {
      colors: {
        // surfaces
        paper: 'var(--paper)',
        surface: 'var(--bg)',
        'surface-2': 'var(--bg-2)',
        dark: 'var(--dark)',
        'dark-2': 'var(--dark-2)',
        // ink + text
        ink: 'var(--ink)',
        'ink-2': 'var(--ink-2)',
        text: 'var(--text)',
        steel: 'var(--steel)',
        'steel-2': 'var(--steel-2)',
        'on-dark': 'var(--on-dark)',
        'on-dark-mute': 'var(--on-dark-mute)',
        'on-accent': 'var(--on-accent)',
        // lines / rules
        line: 'var(--line)',
        'line-2': 'var(--line-2)',
        'line-dark': 'var(--line-dark)',
        rule: 'var(--rule)',
        'rule-soft': 'var(--rule-soft)',
        // brand
        yellow: 'var(--yellow)',
        'yellow-deep': 'var(--yellow-deep)',
        'yellow-soft': 'var(--yellow-soft)',
        // glass (dark-mode surfaces)
        glass: 'var(--glass)',
        'glass-2': 'var(--glass-2)',
        'glass-brd': 'var(--glass-brd)',
        whatsapp: '#25d366',
      },
      fontFamily: {
        display: 'var(--display)',
        body: 'var(--body)',
        cond: 'var(--cond)',
        mono: 'var(--mono)',
      },
      maxWidth: {
        site: 'var(--max)',
      },
      borderRadius: {
        DEFAULT: 'var(--radius)',
        sm: 'var(--r-sm)',
      },
      transitionTimingFunction: {
        smooth: 'var(--ease)',
      },
      boxShadow: {
        'glow-soft': 'var(--glow-soft)',
        'glow-y': 'var(--glow-y)',
      },
      backgroundImage: {
        grain: 'var(--grain)',
      },
      keyframes: {
        mq: { to: { transform: 'translateX(calc(-100% - 56px))' } },
        khDrop: { '0%': { transform: 'translateY(-100%)' }, '100%': { transform: 'translateY(220%)' } },
        khPulse: {
          '0%': { boxShadow: '0 0 0 0 rgba(255,214,10,0.6)' },
          '100%': { boxShadow: '0 0 0 12px rgba(255,214,10,0)' },
        },
        phHint: { '0%,100%': { transform: 'translateX(0)' }, '50%': { transform: 'translateX(6px)' } },
        aur1: {
          from: { transform: 'translate(0,0) scale(1)' },
          to: { transform: 'translate(-6%,8%) scale(1.18)' },
        },
        aur2: {
          from: { transform: 'translate(0,0) scale(1)' },
          to: { transform: 'translate(8%,-6%) scale(1.22)' },
        },
        aur3: {
          from: { transform: 'translate(0,0) scale(1)' },
          to: { transform: 'translate(-10%,-8%) scale(1.3)' },
        },
      },
      animation: {
        mq: 'mq 38s linear infinite',
        khDrop: 'khDrop 1.8s ease-in-out infinite',
        khPulse: 'khPulse 2s ease-out infinite',
        phHint: 'phHint 1.4s ease-in-out infinite',
        aur1: 'aur1 18s ease-in-out infinite alternate',
        aur2: 'aur2 22s ease-in-out infinite alternate',
        aur3: 'aur3 26s ease-in-out infinite alternate',
      },
    },
  },
  plugins: [],
}
