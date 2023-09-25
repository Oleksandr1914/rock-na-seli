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
      linkColor: "#b0cce5",
      textColor: "#e2e8f0",
      burgerColor: "#f1f5f9",
      backgroundBurger: "#00000036",
      backgroundMain: "#262626",
      activeLink: " #ea580c",
      hoverColor: "#fb923c",
      buttonColor: "#d04802",
      errorColor: "#ec291c",
      outlineColor: "#909294",
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
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
