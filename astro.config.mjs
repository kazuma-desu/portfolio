// @ts-check

import tailwind from "@astrojs/tailwind";
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
	site: "https://kavintha.dev",
	base: "/",
	integrations: [tailwind()],
});
