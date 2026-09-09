# kavintha.dev

Personal portfolio of Kavintha Kulasingham — Senior DevOps Engineer. A terminal-inspired
single-page site with draggable floating windows, a command palette (`Ctrl` + `/`), and a
live weather status bar (Colombo, via Open-Meteo).

## Stack

- **[Astro 7](https://astro.build)** — static site generation, zero-JS by default
- **[Tailwind CSS 4](https://tailwindcss.com)** via `@tailwindcss/vite` — CSS-first config
  in `src/styles/global.css` (`@theme` defines the `terminal-*` palette; there is no
  `tailwind.config.js`)
- **[Biome](https://biomejs.dev)** — linting & formatting
- **Fontsource** — self-hosted Monaspace Neon / Inter fonts

## Project Structure

```text
/
├── public/
│   ├── favicon.svg
│   └── _headers            # Security headers (Netlify/Cloudflare Pages)
├── src/
│   ├── components/         # Hero, Skills, Experience, Contact, StatusBar,
│   │                       # CommandPalette, FloatingWindow, Navigation, Footer, …
│   ├── layouts/
│   │   └── Layout.astro    # HTML shell, CSP/SRI meta, global CSS import
│   ├── pages/
│   │   └── index.astro     # Page composition + window/palette logic
│   └── styles/
│       └── global.css      # Tailwind v4 entry: @theme palette, component classes
└── astro.config.mjs        # @tailwindcss/vite plugin wiring
```

## Commands

| Command           | Action                               |
| :---------------- | :----------------------------------- |
| `npm install`     | Install dependencies                 |
| `npm run dev`     | Start dev server at `localhost:4321` |
| `npm run build`   | Build production site to `./dist/`   |
| `npm run preview` | Preview the production build locally |
| `npx biome check` | Lint & format check                  |
| `npm audit`       | Check for dependency vulnerabilities |

## Security

This site ships with defense-in-depth headers for a static host:

- **Content Security Policy** — set both as a `<meta>` tag in `Layout.astro` and as an
  HTTP header in `public/_headers` (Netlify/Cloudflare Pages). Allows only self-hosted
  scripts, styles from self + cdnjs (with SRI), fonts from self + cdnjs, and API calls
  to `api.open-meteo.com` only. Blocks framing, plugins, and form submissions.
- **Subresource Integrity** — SHA-384 hashes on the cdnjs stylesheets
  (Font Awesome, weather-icons).
- **HSTS, X-Content-Type-Options, Referrer-Policy, Permissions-Policy, COOP/CORP** —
  in `public/_headers`.
- External links use `rel="noopener noreferrer"`.

> **Maintenance note:** Astro inlines the page/component `<script>` blocks, so the CSP
> `script-src` pins them by SHA-256 hash. After editing any `<script>` in `.astro` files,
> rebuild and recompute the hashes, then update both `Layout.astro` and
> `public/_headers`:
>
> ```sh
> npm run build && node -e "
> const fs=require('fs'),crypto=require('crypto');
> const html=fs.readFileSync('dist/index.html','utf8');
> const re=/<script(?![^>]*src)[^>]*>([\s\S]*?)<\/script>/g;let m;
> while((m=re.exec(html)))console.log('sha256-'+crypto.createHash('sha256').update(m[1]).digest('base64'));
> "
> ```
>
> Alternatively, relax `script-src` to `'self' 'unsafe-inline'` in both places if hash
> maintenance is unwanted (weaker XSS protection).

## Deployment

Static output in `dist/` — deployable to any static host. `public/_headers` is honored
natively by Netlify and Cloudflare Pages; on other platforms, replicate those headers in
the host's configuration.
