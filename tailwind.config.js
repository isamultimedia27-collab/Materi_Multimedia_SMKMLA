/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['./Materi_Multimedia_SMKMLA.html'],
  theme: {
    extend: {
      colors: {
        gold: '#FFD700',
        darkBg: '#0b0f19',
        royalBlue: '#2563eb',
        lightCyan: '#38bdf8',
        accentAmber: '#f59e0b',
        accentYellow: '#fbbf24',
      },
      animation: {
        'pulse-glow': 'pulseGlow 2s infinite ease-in-out',
        float: 'float 3s ease-in-out infinite',
      },
      keyframes: {
        pulseGlow: {
          '0%, 100%': { boxShadow: '0 0 15px rgba(56, 189, 248, 0.3)' },
          '50%': { boxShadow: '0 0 35px rgba(37, 99, 235, 0.8)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        },
      },
    },
  },
  plugins: [],
};
