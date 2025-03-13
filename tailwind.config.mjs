/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	darkMode: 'class',
	theme: {
		extend: {
			colors: {
				terminal: {
					100: '#f8f8f2',
					200: '#bd93f9',
					300: '#50fa7b',
					400: '#ff79c6',
					500: '#8be9fd',
					600: '#44475a',
					700: '#282a36',
					800: '#1e1e1e',
					900: '#191919',
					accent: '#bd93f9',
				},
			},
			fontFamily: {
				mono: ['JetBrains Mono', 'monospace'],
			},
			animation: {
				'terminal-blink': 'blink 1s step-end infinite',
				'terminal-type': 'type 3s steps(40, end)',
			},
			keyframes: {
				blink: {
					'0%, 100%': { borderColor: 'transparent' },
					'50%': { borderColor: 'currentColor' },
				},
				type: {
					'0%': { width: '0' },
					'100%': { width: '100%' },
				},
			},
			screens: {
				'sm': '640px',
				'md': '768px',
				'lg': '1024px',
				'xl': '1280px',
				'2xl': '1536px',
			},
		},
	},
	plugins: [],
}
