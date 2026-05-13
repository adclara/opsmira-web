import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        background: "#F5F7FB",
        foreground: "#121826",
        brand: {
          50: "#EEF0FF",
          100: "#DDE2FF",
          300: "#A4B1FF",
          500: "#4F46E5",
          600: "#4338CA",
          700: "#3730A3"
        },
        midnight: {
          900: "#0F172F",
          800: "#18213D"
        },
        stone: {
          100: "#F5F5F2",
          200: "#E9ECE6",
          300: "#DADFD2"
        }
      },
      fontFamily: {
        display: ["Aptos", "Avenir Next", "Segoe UI", "Helvetica Neue", "sans-serif"],
        sans: ["Aptos", "Avenir Next", "Segoe UI", "Helvetica Neue", "sans-serif"]
      },
      boxShadow: {
        soft: "0 20px 60px rgba(15, 23, 47, 0.08)"
      },
      backgroundImage: {
        "hero-glow":
          "radial-gradient(circle at top, rgba(79, 70, 229, 0.22), rgba(245, 247, 251, 0) 46%)",
        "panel-glow":
          "linear-gradient(135deg, rgba(221, 226, 255, 0.92), rgba(79, 70, 229, 0.2))"
      }
    }
  },
  plugins: []
};

export default config;
