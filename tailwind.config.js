/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          green: "#14CF93",
          neon: "#00F59B",
          dark: "#0a0d14",
          surface: "#121824",
          card: "rgba(255, 255, 255, 0.03)",
          border: "rgba(255, 255, 255, 0.1)",
        }
      },
      fontFamily: {
        gilroy: ["Gilroy", "Poppins", "sans-serif"],
        poppins: ["Poppins", "sans-serif"]
      },
      animation: {
        'pulse-glow': 'pulseGlow 3s infinite alternate',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        pulseGlow: {
          '0%': { boxShadow: '0 0 15px rgba(20, 207, 147, 0.2)' },
          '100%': { boxShadow: '0 0 35px rgba(20, 207, 147, 0.6)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      }
    },
  },
  plugins: [],
}
