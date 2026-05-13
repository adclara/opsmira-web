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
        background: "#F8F8F5",
        foreground: "#0B0B0B",
        olive: {
          50: "#F1F4E8",
          100: "#DDE8C2",
          300: "#95A17B",
          500: "#6A7E37",
          700: "#405C0B",
          800: "#3F5F12"
        },
        stone: {
          100: "#F5F5F2",
          200: "#E9ECE6",
          300: "#DADFD2"
        }
      },
      fontFamily: {
        display: ["Iowan Old Style", "Palatino Linotype", "Book Antiqua", "Georgia", "serif"],
        sans: ["Inter", "Segoe UI", "Helvetica Neue", "Arial", "sans-serif"]
      },
      boxShadow: {
        soft: "0 16px 60px rgba(20, 28, 15, 0.08)"
      },
      backgroundImage: {
        "hero-glow":
          "radial-gradient(circle at top, rgba(221, 232, 194, 0.9), rgba(248, 248, 245, 0) 46%)",
        "panel-glow":
          "linear-gradient(135deg, rgba(221, 232, 194, 0.92), rgba(149, 161, 123, 0.28))"
      }
    }
  },
  plugins: []
};

export default config;
