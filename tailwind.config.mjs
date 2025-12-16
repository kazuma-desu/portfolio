/** @type {import('tailwindcss').Config} */
export default {
	content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
	darkMode: "class",
	theme: {
		extend: {
			colors: {
				terminal: {
					100: "#e8e2ff", // Light lavender text
					200: "#d4c9ff", // Lighter lavender
					300: "#c0b0ff", // Darker version of your color
					400: "#a896ff", // Medium lavender
					500: "#9080ff", // Rich lavender
					600: "#786aff", // Deep lavender
					700: "#6054e8", // Vibrant purple
					800: "#1a1625", // Deep purple-tinted dark
					900: "#0f0b14", // Almost black with purple tint
					accent: "#c0b0ff", // Darker lavender accent
					green: "#a8e6bf", // Saturated pastel mint
					yellow: "#fff280", // Saturated pastel yellow
					red: "#ffaddb", // Saturated pastel pink
					teal: "#a3dce8", // Saturated pastel cyan
					peach: "#ffc896", // Saturated pastel peach
					blue: "#a8c4ff", // Saturated pastel blue
					lavender: "#d4c9ff", // Soft lavender
					lilac: "#c0b0ff", // Darker lilac
					purple: "#a896ff", // Medium lavender
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
