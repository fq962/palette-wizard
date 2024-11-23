import type { Config } from "tailwindcss";
import flyonui from "flyonui";

export default {
  content: [
    "./node_modules/flyonui/dist/js/*.js",
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [
    flyonui,
    // (await import("flyonui/plugin")).default, // Require only if you want to use FlyonUI JS component
  ],
} satisfies Config;
