// @ts-check

import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
	site: "https://kavintha.dev",
	base: "/",
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
