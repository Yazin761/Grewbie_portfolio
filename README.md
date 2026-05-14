# GrewBie Tech — Portfolio / Marketing Site

A single-page, scroll-driven marketing site built in the style of Awwwards-level portfolios: smooth motion, dark theme, emerald hero gradient, and section-based layout. Use this repo as a **template** for similar agency, product, or portfolio sites.

---

## What this site is

- **One long page** (not multi-route) with anchored sections: Home → Services → About → Works → Contact
- **Content-driven**: most copy and lists live in `src/constants/`
- **Animation-heavy**: GSAP scroll triggers, Lenis smooth scroll, marquees, hover interactions
- **Deployable as static files** via Vite (`dist/` → Vercel, Netlify, Cloudflare Pages, etc.)

---

## Tech stack

| Layer | Technology | Role |
|--------|------------|------|
| **Framework** | React 19 | UI components and state |
| **Bundler** | Vite 6 | Dev server and production build |
| **Styling** | Tailwind CSS v4 (`@tailwindcss/vite`) | Layout, typography, colors, responsive design |
| **Animation** | GSAP 3 + `@gsap/react` | Timelines, scroll triggers, hovers, reveals |
| **Smooth scroll** | Lenis (`lenis/react`) | Smooth scrolling for the whole page |
| **Icons** | Iconify (`@iconify/react`) | UI icons (arrows, menu, etc.) |
| **In-page nav** | `react-scroll` | Navbar scrolls to `#home`, `#services`, etc. |
| **Breakpoints** | `react-responsive` | Mobile vs desktop behavior (e.g. sticky services) |
| **SEO** | `Seo.jsx` + `constants/seo.js` | Title, meta tags, JSON-LD at runtime |
| **Utilities** | `classnames` | Conditional CSS classes in UI components |
| **Hero background** | `BackgroundGradientAnimation` | Animated emerald gradient mesh (Aceternity-style) |

**Note:** `three`, `@react-three/fiber`, and `@react-three/drei` are still in `package.json` from the original template (3D planet hero). The current hero uses the gradient component instead. You can remove Three.js dependencies if you do not use 3D.

---

## Project structure

```
src/
├── App.jsx                 # Root: Lenis wrapper + section order
├── main.jsx                # React entry point
├── index.css               # Fonts, Tailwind theme, custom utilities
├── constants/
│   ├── index.js            # Services, projects (works), social links
│   └── seo.js              # SEO copy, site URL, structured data
├── components/
│   ├── AnimatedHeaderSection.jsx   # Section titles + intro blocks
│   ├── AnimatedTextLines.jsx       # Line-by-line scroll animation
│   ├── Marquee.jsx                 # Infinite horizontal text
│   ├── Seo.jsx                     # Injects meta / JSON-LD on load
│   └── ui/
│       └── BackgroundGradientAnimation.jsx
└── sections/               # One file per page block
    ├── Navbar.jsx
    ├── Hero.jsx
    ├── ServiceSummary.jsx
    ├── Services.jsx
    ├── About.jsx
    ├── Works.jsx
    ├── ContactSummary.jsx
    └── Contact.jsx

public/
├── assets/                 # Images, backgrounds, project previews
├── fonts/                  # Custom fonts (Amiamie)
└── site.webmanifest
```

**Pattern to reuse:**

- `sections/` = full-width page blocks
- `components/` = reusable UI patterns
- `constants/` = data you change without touching layout logic

---

## How the page is assembled

1. `main.jsx` mounts React and loads global CSS.
2. `App.jsx` wraps the site in `ReactLenis` for smooth scroll.
3. Sections are stacked vertically in a fixed order (no React Router).
4. Each section has an `id` (`#home`, `#services`, `#about`, `#work`, `#contact`) for navbar links.
5. Lists and copy come from `src/constants/index.js`.

---

## What makes it feel “premium”

### GSAP scroll animations

- `useGSAP` runs animations when elements enter the viewport (`ScrollTrigger`).
- Used for: header entrances, staggered project rows, About cards, Services sticky stack (desktop).

### Reusable header pattern

`AnimatedHeaderSection` appears on most sections:

- Small subtitle (uppercase)
- Large title
- Optional divider line
- Right-aligned body text via `AnimatedTextLines`

### Hero

- `BackgroundGradientAnimation`: emerald/teal animated gradient, optional pointer interaction.
- Copy passed as props: `subTitle`, `title`, `text`.

### Navbar

- Fixed burger; slide-in panel animated with GSAP.
- `react-scroll` links smooth-scroll to sections.

### Marquee

- `Marquee.jsx`: GSAP horizontal loop for Contact and Contact Summary strips.

### Works section

- Projects from `constants/index.js` (e.g. DemoAgent, Brand Cure).
- Desktop: hover inverts row + floating image follows cursor.
- Mobile: inline preview images.

### Typography and theme

- Custom font **Amiamie** via `@font-face` in `index.css`.
- Tailwind `@theme` for brand tokens (`gold`, `primary`, etc.).
- Custom utilities: `banner-text-responsive`, `value-text-responsive`, `marquee-text-responsive`, `contact-text-responsive`.

### Dark theme

- Base: `bg-zinc-950`, `text-zinc-100`, emerald accents on hero and interactive elements.

---

## Commands

```bash
npm install
npm run dev       # http://localhost:5173
npm run build     # output → dist/
npm run preview   # test production build locally
npm run lint
```

---

## Environment

Copy `.env.example` to `.env` and set your production URL for SEO:

```env
VITE_SITE_URL=https://grewbie.com
```

Used by `src/constants/seo.js` for canonical URLs, Open Graph, and JSON-LD.

---

## Customization checklist (new site from this template)

1. Fork or clone this repo (or `npm create vite@latest` and add the same dependencies).
2. Replace content in `src/constants/index.js` (services, projects, socials).
3. Edit section copy in `src/sections/*.jsx`.
4. Tune colors, fonts, and utilities in `src/index.css`.
5. Reuse `AnimatedHeaderSection` per block for consistent rhythm.
6. Add GSAP only where motion adds value (avoid over-animating).
7. Put assets in `public/` and reference as `/assets/...`.
8. Update `src/constants/seo.js` and `src/components/Seo.jsx`.
9. Set `VITE_SITE_URL` before deploy.

**Quick edit map:**

| What to change | Where |
|----------------|--------|
| Services cards | `src/constants/index.js` → `servicesData` |
| Works / products | `src/constants/index.js` → `projects` |
| Social links | `src/constants/index.js` → `socials` |
| Email / contact | `src/sections/Contact.jsx`, `src/sections/Navbar.jsx` |
| Hero text | `src/sections/Hero.jsx` |
| SEO | `src/constants/seo.js` |
| Colors / fonts | `src/index.css` (`@theme`, `@font-face`, utilities) |

---

## Minimal dependencies for a similar site

If you drop 3D and keep the same feel:

```
react react-dom
vite @vitejs/plugin-react
tailwindcss @tailwindcss/vite
gsap @gsap/react
lenis
react-scroll
react-responsive
@iconify/react
classnames
```

---

## Good fit / not a fit

**Good for:**

- Agency, portfolio, or product landing pages
- Long-scroll storytelling sites
- Dark, motion-forward marketing sites

**Not ideal for (without changes):**

- Multi-page blogs or CMS-heavy sites (content is in JS files)
- Server-rendered SEO-critical apps (this is a client-side SPA; meta is set via `Seo.jsx` + static `index.html`)
- Many routes (add React Router or migrate to Next.js if needed)

---

## One-line mental model

**Vite + React + Tailwind for layout, GSAP + Lenis for motion and scroll feel, section components + a constants file for content** — reuse that recipe for other sites in the same style.

---

## Credits

Original template inspired by [Awwwards-style portfolios](https://youtu.be/i0229UsdBwc). Customized for **Grewbie Technologies** (DemoAgent, Brand Cure, agentic engineering).
