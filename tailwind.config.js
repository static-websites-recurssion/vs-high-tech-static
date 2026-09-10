/** @type {import('tailwindcss').Config} */

// Every brand colour is a CSS variable holding "r g b" so Tailwind's opacity
// modifiers (bg-primary/10, text-accent/70 …) keep working. The actual values
// live in src/app/globals.css — change the palette there, not here.
const rgb = (name) => `rgb(var(${name}) / <alpha-value>)`;

module.exports = {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          "Rockwell",
          "Rockwell Nova",
          "Roboto Slab",
          "Segoe UI",
          "Arial",
          "sans-serif",
        ],
      },
      colors: {
        border: rgb("--c-border"),
        input: rgb("--c-border"),
        ring: rgb("--c-accent"),
        background: rgb("--c-bg"),
        foreground: rgb("--c-fg"),
        primary: {
          DEFAULT: rgb("--c-primary"),
          foreground: "#ffffff",
        },
        accent: {
          DEFAULT: rgb("--c-accent"),
          foreground: rgb("--c-accent-fg"),
        },
        gold: rgb("--c-gold"),
        white: "#ffffff",
        muted: {
          DEFAULT: rgb("--c-muted"),
          foreground: rgb("--c-muted-fg"),
        },
        destructive: {
          DEFAULT: "#ef4444",
          foreground: "#ffffff",
        },
        // The hand-written sky-* classes across the site follow the theme too.
        sky: {
          50: rgb("--c-sky-50"),
          100: rgb("--c-sky-100"),
          200: rgb("--c-sky-200"),
          300: rgb("--c-sky-300"),
          400: rgb("--c-sky-400"),
          500: rgb("--c-sky-500"),
          600: rgb("--c-sky-600"),
          700: rgb("--c-sky-700"),
          800: rgb("--c-sky-800"),
          900: rgb("--c-sky-900"),
          950: rgb("--c-sky-950"),
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      boxShadow: {
        glow: "0 12px 40px -12px rgb(var(--c-accent) / 0.45)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
