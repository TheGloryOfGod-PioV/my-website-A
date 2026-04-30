import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./data/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          "Pretendard Variable",
          "Pretendard",
          "ui-sans-serif",
          "system-ui",
          "-apple-system",
          "sans-serif",
        ],
      },
      colors: {
        brand: {
          DEFAULT: "#047857",
          dark: "#064E3B",
          light: "#10B981",
          accent: "#84CC16",
        },
      },
      maxWidth: {
        content: "1440px",
      },
      transitionTimingFunction: {
        utility: "cubic-bezier(0.16, 1, 0.3, 1)",
        luxury: "cubic-bezier(0.16, 1, 0.3, 1)",
      },
      transitionDuration: {
        250: "250ms",
        700: "700ms",
        900: "900ms",
        1200: "1200ms",
        1400: "1400ms",
      },
      keyframes: {
        rise: {
          "0%": { transform: "translateY(110%)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        "underline-sweep": {
          "0%": { transform: "scaleX(0)" },
          "100%": { transform: "scaleX(1)" },
        },
        "slow-pan": {
          "0%": { transform: "translate3d(0,0,0) scale(1.05)" },
          "50%": { transform: "translate3d(-2%, 1%, 0) scale(1.08)" },
          "100%": { transform: "translate3d(0,0,0) scale(1.05)" },
        },
        "hero-drift": {
          "0%": { transform: "translate3d(0,0,0) scale(1)" },
          "50%": { transform: "translate3d(-2%, 2%, 0) scale(1.04)" },
          "100%": { transform: "translate3d(0,0,0) scale(1)" },
        },
        "scroll-cue": {
          "0%": { transform: "translateY(0)", opacity: "0.4" },
          "50%": { transform: "translateY(10px)", opacity: "1" },
          "100%": { transform: "translateY(0)", opacity: "0.4" },
        },
      },
      animation: {
        "rise-utility": "rise 0.9s cubic-bezier(0.16, 1, 0.3, 1) both",
        "rise-luxury": "rise 1.4s cubic-bezier(0.16, 1, 0.3, 1) both",
        underline: "underline-sweep 0.9s cubic-bezier(0.16, 1, 0.3, 1) forwards",
        "slow-pan": "slow-pan 20s ease-in-out infinite",
        "slow-pan-luxury": "slow-pan 60s ease-in-out infinite",
        "hero-drift": "hero-drift 24s ease-in-out infinite",
        "scroll-cue": "scroll-cue 2.8s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
