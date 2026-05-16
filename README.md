# Luxe Estates — Quiet Luxury Real Estate

A cinematic, ultra-modern real-estate homepage inspired by the visual language of high-end developer brands. Built as a Next.js 14 App-Router project and configured for one-command deployment to **Cloudflare Workers with Static Assets** — Cloudflare's modern, recommended path for static sites.

> Dark, minimal, futuristic. Soft ivory typography over deep ink. Big serif headlines, italic script accents, parallax, scroll-triggered reveals, animated SVG silk lines, marquee ticker, rotating play CTA, custom magnetic cursor, glassmorphism.

## Stack

- **Next.js 14.2.35** (App Router, JS) with `output: 'export'` — emits a fully static `./out`
- **React 18.3.1 / React-DOM 18.3.1**
- **Tailwind CSS 3.4** with a custom luxury palette (`ink`, `ivory`, `sage`)
- **Framer Motion 11** for scroll-triggered + entrance animation
- **Lenis 1.1** for buttery smooth scrolling
- **lucide-react** icons
- **Google Fonts** (Fraunces / Playfair Display / Inter) loaded over `<link>` so the build has no network dependency
- **Cloudflare Workers + Static Assets** for deployment — no Worker code required, Cloudflare serves `./out` directly from the edge

## Run locally

```bash
cd luxe-estates
npm install
npm run dev
# → http://localhost:3000
```

Production build (emits to `./out`):

```bash
npm run build
```

## Deploy to Cloudflare

The project ships as a **Cloudflare Worker with Static Assets** (the modern replacement for Pages). The `wrangler.toml` already points at `./out`, so all you need to do is wire up the build.

### Option A — Auto-deploy from Git via the Workers dashboard (recommended)

1. Push the project to GitHub / GitLab.
2. Cloudflare dashboard → **Workers & Pages → Create → Workers → Connect to Git** (pick the repo).
3. Under **Build configuration**, set both fields exactly:
   - **Build command**: `npm install && npm run build`
   - **Deploy command**: `npx wrangler deploy`
   - **Root directory**: leave as `/`
4. Under **Variables and Secrets**, add:
   - `NODE_VERSION` = `20.18.0`
5. Save and deploy. Subsequent pushes auto-deploy.

> **Why the build command matters.** Cloudflare runs `npm install` automatically but does **not** run a build unless you tell it to. The `[build] command` line inside `wrangler.toml` also runs the build before deploy as a safety net — so even if the dashboard's Build command is left empty, wrangler will still produce `./out` itself.

The `[assets] directory = "./out"` block in `wrangler.toml` tells Wrangler exactly where to find the static site.

### Option B — Local deploy with Wrangler

```bash
# One-time
npx wrangler@latest login

# Build + ship to production
npm run deploy

# Build + run a local edge preview
npm run preview     # → http://localhost:8787
```

## Project structure

```
luxe-estates/
├── app/
│   ├── layout.jsx        # Fonts via <link>, smooth scroll, custom cursor, metadata
│   ├── page.jsx          # Homepage composition
│   └── globals.css       # Tailwind layers + luxury utilities
├── components/
│   ├── SmoothScroll.jsx  # Lenis wrapper
│   ├── CustomCursor.jsx  # Magnetic dot + ring cursor
│   ├── Navbar.jsx        # Sticky nav, language toggle, mobile drawer
│   ├── Hero.jsx          # Fullscreen cinematic hero w/ parallax silk lines
│   ├── Marquee.jsx       # Infinite ticker of services
│   ├── About.jsx         # Split layout, parallax image, founder card
│   ├── Projects.jsx      # 4-card luxury portfolio grid with hover reveals
│   ├── Experience.jsx    # Cinematic video section + rotating play CTA
│   ├── Contact.jsx       # Glass consultation form
│   └── Footer.jsx        # Giant wordmark + minimal luxury footer
├── public/
│   └── _headers          # Cloudflare caching + security headers (copied into ./out at build time)
├── wrangler.toml         # Cloudflare Workers config — points `[assets]` at ./out
├── .node-version         # 20.18.0
├── .nvmrc                # 20.18.0
├── .npmrc                # legacy-peer-deps=true (resilient installs in CI)
├── tailwind.config.js
├── postcss.config.js
├── next.config.mjs       # output: 'export', images.unoptimized
├── jsconfig.json
└── package.json
```

## Design notes

- **Palette** — `#0a0d0c` ink ground; `#f4ecd0` ivory accents; soft sage greens; selective dusty gradients via `bg-ivory-gradient`.
- **Type system** — Fraunces (300/400) as the display serif, Playfair Display *italic* as the script accent, Inter for body and eyebrows. `display-serif` and `script-accent` utility classes in `globals.css`.
- **Motion** — Scroll-triggered y-translate + opacity reveals, mask-style "from below" word reveals on big headings, parallax via `useScroll` + `useTransform`, infinite marquee, animated SVG silk lines, rotating circle text around the play button, hover-only project descriptions.
- **Texture** — Subtle SVG-noise grain layer (`.grain`) and a `vignette` overlay on cinematic sections.
- **Cursor** — Custom 2-element cursor (dot + ring). Ring expands to `View` on cards (`data-cursor="view"`) and contracts on links/buttons. Disabled on touch.
- **Smooth scroll** — Lenis is mounted globally inside `app/layout.jsx`; tuned lerp + custom easing.
- **Responsive** — Fluid typography uses `vw` for big serifs; layout collapses to a single elegant column under `lg`; mobile fullscreen menu with staggered entrance.

## Cloudflare-specific notes

- **Static export** — `output: 'export'` in `next.config.mjs` means Next emits the whole site to `./out`. Cloudflare Workers Static Assets serves it directly: no edge runtime, no Worker code, no cold starts — every URL is a CDN-cached HTML/JS/CSS file at the edge.
- **`[assets]` block** — `wrangler.toml` declares `directory = "./out"` and `not_found_handling = "404-page"` so unknown URLs cleanly land on Next's emitted `404.html`.
- **`_headers`** — Long-cache headers for `_next/static/*` and fonts, immediate-cache for HTML, plus `X-Content-Type-Options`, `Referrer-Policy`, `X-Frame-Options`, and `Permissions-Policy` — all shipped via `public/_headers`, which Next copies into `out/_headers` at build time.
- **Compatibility flag** — `nodejs_compat` is declared in `wrangler.toml` so any transitive dep that pokes at Node built-ins keeps working if you later add a Worker function.
- **Images** — `images.unoptimized = true` is required for `output: 'export'`. If you later want optimization, plug in [Cloudflare Images](https://developers.cloudflare.com/images/) with a custom loader.
- **Fonts** — Loaded via `<link rel="stylesheet">` with preconnects. No build-time font fetching, so the build is fully deterministic and works in any CI.
- **Peer-dep safety** — `.npmrc` sets `legacy-peer-deps=true` for resilient installs in any environment.
