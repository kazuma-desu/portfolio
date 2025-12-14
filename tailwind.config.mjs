/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        terminal: {
          100: "#cdd6f4", // Text
          200: "#b4befe", // Lavender
          300: "#f5c2e7", // Pink
          400: "#cba6f7", // Mauve
          500: "#89dceb", // Sky
          600: "#45475a", // Surface1
          700: "#313244", // Surface0
          800: "#1e1e2e", // Base
          900: "#181825", // Mantle
          accent: "#b4befe", // Lavender accent
          green: "#a6e3a1", // Green - for success/achievements
          yellow: "#f9e2af", // Yellow - for highlights/certifications
          red: "#f38ba8", // Red - for alerts
          teal: "#94e2d5", // Teal - for secondary accents
          peach: "#fab387", // Peach - for warm accents
          blue: "#89b4fa", // Blue - for links
        },
      },
      fontFamily: {
        mono: ["Monaspace Neon", "monospace"],
        sans: ["Monaspace Neon", "monospace"],
      },
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
      },
    },
  },
  plugins: [],
};
