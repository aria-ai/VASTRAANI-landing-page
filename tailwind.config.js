/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        burgundy: {
          50: "#fdf4f4",
          100: "#fce8e8",
          200: "#f9d5d5",
          300: "#f4b4b4",
          400: "#ec8989",
          500: "#e06161",
          600: "#cc4343",
          700: "#ab2e2e",
          800: "#8d2828",
          900: "#6b1d1d",
          950: "#3a0a0a",
        },
        gold: {
          50: "#fefbf3",
          100: "#fdf5e3",
          200: "#fbe9c6",
          300: "#f7d89d",
          400: "#f2c16b",
          500: "#eda945",
          600: "#d88b2f",
          700: "#b46b26",
          800: "#925525",
          900: "#784621",
          950: "#44240f",
        },
        cream: {
          50: "#faf9f5",
          100: "#f5f3eb",
          200: "#ebe6d6",
          300: "#dfd7bb",
          400: "#d1c49d",
          500: "#c4b182",
          600: "#b69f70",
          700: "#998560",
          800: "#7d6d52",
          900: "#665945",
          950: "#352e23",
        },
      },
      fontFamily: {
        serif: ["Cormorant Garamond", "serif"],
        sans: ["Inter", "sans-serif"],
      },
      animation: {
        "fade-in": "fadeIn 0.6s ease-in-out",
        "slide-up": "slideUp 0.8s ease-out",
        shimmer: "shimmer 2s linear infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { transform: "translateY(30px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-1000px 0" },
          "100%": { backgroundPosition: "1000px 0" },
        },
      },
    },
  },
  plugins: [],
};
