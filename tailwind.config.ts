import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ivory: "#FBF7F2",
        blush: "#F3DEDA",
        "blush-deep": "#E7C4BD",
        rose: "#C48A82",
        plum: "#3B2A2E",
        "plum-soft": "#6E5459",
        "plum-dark": "#1C1416",
        "plum-deep": "#140D0F",
        sage: "#A9B79E",
        gold: "#B99B5E",
        "gold-light": "#D9C08C",
        cream: "#F6EEE3",
      },
      fontFamily: {
        serif: ["var(--font-cormorant)", "serif"],
        sans: ["var(--font-jost)", "sans-serif"],
      },
      letterSpacing: {
        widest2: "0.25em",
      },
    },
  },
  plugins: [],
};
export default config;
