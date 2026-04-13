/** @type {import('tailwindcss').Config} */
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
        border: "#e2e8f0",
        input: "#e2e8f0",
        ring: "#0ea5e9",
        background: "#f8f9fc",
        foreground: "#1a2563",
        primary: {
          DEFAULT: "#1a2563",
          foreground: "#ffffff",
        },
        accent: {
          DEFAULT: "#0ea5e9",
          foreground: "#ffffff",
        },
        gold: "#d4a017",
        white: "#ffffff",
        muted: {
          DEFAULT: "#eef2f7",
          foreground: "#475569",
        },
        destructive: {
          DEFAULT: "#ef4444",
          foreground: "#ffffff",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
