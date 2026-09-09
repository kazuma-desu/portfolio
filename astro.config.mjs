// @ts-check

import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
	site: "https://kavintha.dev",
	base: "/",
	security: {
		csp: {
			directives: [
				"default-src 'self'",
				"font-src 'self' https://cdnjs.cloudflare.com",
				"connect-src 'self' https://api.open-meteo.com",
				"img-src 'self' data:",
				"object-src 'none'",
				"base-uri 'none'",
				"form-action 'none'",
				"upgrade-insecure-requests",
			],
			styleDirective: {
				resources: [
					"'self'",
					"'unsafe-inline'",
					"https://cdnjs.cloudflare.com",
				],
			},
			scriptDirective: {
				resources: ["'self'"],
			},
		},
	},
	vite: {
		plugins: [
			{
				name: "tailwind-astro-style-reference",
				enforce: "pre",
				transform(code, id) {
					if (
						id.includes(".astro?astro&type=style") &&
						code.includes("@apply")
					) {
						return `@reference "../styles/global.css";\n${code}`;
					}
				},
			},
			tailwindcss(),
		],
	},
});
