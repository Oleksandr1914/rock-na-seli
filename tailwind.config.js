/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    colors: {
      linkColor: "#e57831",
      textColor: "#e2e8f0",
      burgerColor: "#f1f5f9",
      backgroundBurger: "#00000036",
      backgroundMain: "#262626",
      activeLink: " #ea580c",
      hoverColor: "#fb923c",
      buttonColor: "#d04802",
      errorColor: "#ec291c",
      outlineColor: "#909294",
      roundInfoFirst: "#7f4b02d1",
      roundInfosecond: "#84441bd1",
    },
    screens: {
      mobile: "480px",
      tablet: "640px",
      laptop: "1024px",
      desktop: "1280px",
    },
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      translate: {
        50: "-50%",
      },
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
        "bounce-left": {
          "0%, 100% ": {
            transform: " translateX(-25%)",
            "animation-timing-function": "cubic-bezier(0.8,0,1,1)",
          },
          "50%": {
            transform: "none",
            "animation-timing-function": "cubic-bezier(0,0,0.2,1)",
          },
        },
        "bounce-right": {
          "0%, 100% ": {
            transform: " translateX(25%)",
            "animation-timing-function": "cubic-bezier(0.8,0,1,1)",
          },
          "50%": {
            transform: "none",
            "animation-timing-function": "cubic-bezier(0,0,0.2,1)",
          },
        },
        long: {
          "0%, 100%": {
            opacity: "1",
          },
          "50%": {
            opacity: "0.4",
          },
        },
      },

      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "bounce-left": "bounce-left 1s infinite",
        "bounce-right": "bounce-right 1s infinite",
        long: "long 4s infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
