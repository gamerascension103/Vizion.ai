import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ground: "#0B0D11",
        "surface-1": "#0E1116",
        "surface-2": "#11141A",
        "rule-primary": "#22272F",
        "rule-inner": "#1A1E25",
        "ink-primary": "#EDE6D5",
        "ink-secondary": "#A39C8C",
        "ink-tertiary": "#8A8F99",
        "ink-quaternary": "#5E6168",
        "signal-agent": "#F2B33D",
        "signal-leak": "#E36842",
        "signal-leak-border": "#4A2218",
      },
      fontFamily: {
        sans: ["var(--font-inter-tight)", "-apple-system", "system-ui", "sans-serif"],
        mono: ["var(--font-jetbrains-mono)", "Menlo", "monospace"],
      },
    },
  },
  plugins: [],
};

export default config;
