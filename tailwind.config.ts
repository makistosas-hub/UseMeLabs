import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        midnight: "#0b1020",
        graphite: "#121826",
        slateblue: "#1b2a41",
        glass: "rgba(15, 23, 42, 0.55)",
        glow: "#4fd1c5"
      },
      boxShadow: {
        soft: "0 18px 45px rgba(5, 10, 25, 0.45)",
        glow: "0 0 0 1px rgba(79, 209, 197, 0.35), 0 12px 30px rgba(10, 180, 160, 0.25)"
      },
      backgroundImage: {
        "hero-glow": "radial-gradient(1200px 600px at 90% 10%, rgba(79, 209, 197, 0.18), transparent 60%), radial-gradient(900px 500px at 10% 20%, rgba(56, 189, 248, 0.15), transparent 55%)",
        "panel-glass": "linear-gradient(135deg, rgba(20, 27, 45, 0.8), rgba(13, 19, 35, 0.92))"
      }
    }
  },
  plugins: []
};

export default config;
