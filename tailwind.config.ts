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
