import type { Config } from "tailwindcss";
import flyonui from "flyonui";

export default {
  content: [
    "./node_modules/flyonui/dist/js/*.js",
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  corePlugins: {
    preflight: true, // Asegúrate de que esté activo si lo necesitas
  },
  theme: {
    extend: {
      colors: {
        primary: "var(--primary)",
        secondary: "var(--secondary)",
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        "sf-display": ["var(--font-sf-display)", "sans-serif"],
        "sf-display-bold": ["var(--font-sf-display-bold)", "sans-serif"],
      },
      boxShadow: {
        flat: "0px 2px 0px 0px rgba(0, 0, 0, 0.25)",
      },
      animation: {
        "chibolita-enter": "chibolitaEnter 0.3s ease-out forwards",
        "chibolita-exit": "chibolitaExit 0.3s ease-in forwards",
        "slide-up": "slideUp 0.2s ease-in-out",
      },
      keyframes: {
        chibolitaEnter: {
          "0%": { transform: "scale(0) translateY(-45%)", opacity: "0" },
          "50%": { transform: "scale(1.02)", opacity: "1" }, // Rebote inicial
          "100%": { transform: "scale(1) translateY(0)", opacity: "1" },
        },
        chibolitaExit: {
          "0%": { transform: "scale(1) translateY(0)", opacity: "1" },
          "50%": { transform: "scale(1.05)", opacity: "0.8" }, // Rebote antes de desaparecer
          "100%": { transform: "scale(0) translateY(-35%)", opacity: "0" },
        },
        slideUp: {
          "0%": { transform: "translateY(10px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
      },
    },
  },
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  plugins: [flyonui, require("flyonui/plugin")],
  flyonui: {
    themes: [
      {
        light: {
          primary: "#252525",
          secondary: "#808080",
          accent: "#37cdbe",
          neutral: "#ffffff",
          "base-100": "#ffffff",
        },
      },
    ],
  },
} satisfies Config;
