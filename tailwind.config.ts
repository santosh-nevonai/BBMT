import type { Config } from "tailwindcss";

/**
 * Tailwind is wired to the CSS variables declared in `src/app/globals.css`.
 * Change a color there once and the whole site updates — never hard-code hexes
 * in components.
 */
const config: Config = {
  content: ["./src/**/*.{ts,tsx,mdx}"],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1.25rem",
        sm: "1.5rem",
        lg: "2rem",
      },
      screens: {
        "2xl": "1200px",
      },
    },
    extend: {
      colors: {
        primary: {
          DEFAULT: "hsl(var(--primary) / <alpha-value>)",
          dark: "hsl(var(--primary-dark) / <alpha-value>)",
          foreground: "hsl(var(--primary-foreground) / <alpha-value>)",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary) / <alpha-value>)",
          dark: "hsl(var(--secondary-dark) / <alpha-value>)",
        },
        accent: "hsl(var(--accent) / <alpha-value>)",
        emergency: {
          DEFAULT: "hsl(var(--emergency) / <alpha-value>)",
          dark: "hsl(var(--emergency-dark) / <alpha-value>)",
        },
        background: "hsl(var(--background) / <alpha-value>)",
        surface: "hsl(var(--surface) / <alpha-value>)",
        "surface-muted": "hsl(var(--surface-muted) / <alpha-value>)",
        foreground: "hsl(var(--foreground) / <alpha-value>)",
        muted: "hsl(var(--muted) / <alpha-value>)",
        border: "hsl(var(--border) / <alpha-value>)",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        display: ["var(--font-jakarta)", "var(--font-inter)", "sans-serif"],
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 4px)",
        sm: "calc(var(--radius) - 8px)",
      },
      boxShadow: {
        soft: "0 1px 2px 0 hsl(var(--foreground) / 0.04), 0 4px 16px -4px hsl(var(--foreground) / 0.08)",
        card: "0 2px 6px -2px hsl(var(--foreground) / 0.06), 0 12px 32px -12px hsl(var(--foreground) / 0.12)",
        lift: "0 8px 24px -8px hsl(var(--primary) / 0.18), 0 24px 48px -16px hsl(var(--foreground) / 0.14)",
      },
      maxWidth: {
        prose: "68ch",
      },
      keyframes: {
        "fade-up": {
          from: { opacity: "0", transform: "translateY(12px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.5s ease-out both",
      },
    },
  },
  plugins: [],
};

export default config;
