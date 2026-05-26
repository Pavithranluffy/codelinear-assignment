# N7 — Landing Page

A pixel-perfect, fully responsive implementation of the N7 fintech landing page based on the Figma design. Built with Next.js 14 (App Router), Tailwind CSS, and Framer Motion.

## ✨ Features

- **Modern stack**: Next.js 14 App Router, React 18, Tailwind CSS, Framer Motion
- **Fully responsive**: Mobile-first design with breakpoints for tablet and desktop
- **Typography**: Geist Sans for body/headlines, Geist Mono for tracked-out labels
- **Animations**: Subtle scroll-triggered fade/slide reveals, animated marquee, smooth carousel transitions
- **Reusable architecture**: Self-contained section components in `src/components/sections/`
- **Performance**: Static generation, no client-side data fetching, minimal JS, optimized fonts via `next/font`
- **Accessibility**: Semantic HTML, ARIA labels on interactive controls, keyboard-navigable carousel

## 🚀 Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

### Available scripts

| Command         | Description                  |
| --------------- | ---------------------------- |
| `npm run dev`   | Start the dev server         |
| `npm run build` | Build for production         |
| `npm start`     | Run the production build     |
| `npm run lint`  | Lint with ESLint             |

## 📁 Project structure

```
src/
├── app/
│   ├── globals.css        # Tailwind + custom utilities (buttons, cards, links)
│   ├── layout.js          # Root layout with Geist font setup
│   └── page.js            # Page composition (imports all sections)
└── components/
    ├── Navbar.jsx         # Pill-shaped floating top nav (mobile drawer)
    ├── sections/
    │   ├── Hero.jsx               # Headline + CSS-rendered floating banking UI cards
    │   ├── TrustedBy.jsx          # Customer logo strip
    │   ├── Solutions.jsx          # 5-card solution grid w/ sticky heading
    │   ├── CB7Section.jsx         # Core banking pitch + CSS-rendered dashboard mocks
    │   ├── CB7CTA.jsx             # Dark CTA card with CB7 watermark
    │   ├── Marquee.jsx            # Light-theme infinite marquee "N7 ✦ Say 👋 …"
    │   ├── DigitalBanking.jsx     # Light-theme section with 3 phone mockups
    │   ├── N7CTA.jsx              # Dark CTA card with N7 watermark
    │   ├── Insights.jsx           # Featured + 2 secondary article cards
    │   ├── CaseStudies.jsx        # Animated carousel w/ arrows + dot navigation
    │   ├── FinalCTA.jsx           # Pre-footer CTA
    │   └── Footer.jsx             # Big gradient N7 + addresses + link columns
    └── ui/
        └── Icons.jsx              # All custom SVG icons (logo marks, decorative)
```

## 🎨 Design tokens

Centralized in `tailwind.config.js`:

- **Colors**: `ink-{900,800,700,600}`, `accent`, `accent-glow`, `link`, `sky-{50,100,200}`
- **Fonts**: `font-sans` (Geist), `font-mono` (Geist Mono)
- **Letter spacing**: `tracking-btn` for uppercase button labels (0.18em)
- **Animations**: `animate-marquee`, `animate-fade-up`, `animate-glow-pulse`
- **Shadows**: `shadow-btn-glow`, `shadow-card-glow`
- **Gradients**: `bg-btn-gradient`, `bg-hero-glow`, `bg-n7-gradient`

Reusable component utility classes in `globals.css`:
`.btn-primary`, `.btn-ghost`, `.btn-ghost-dark`, `.link-underline`, `.card-dark`, `.container-wide`

## 🖼️ Image assets

All Figma image exports are bundled in `public/images/`:

| File                   | Used in            |
| ---------------------- | ------------------ |
| `hero.png`             | `Hero.jsx`         |
| `dashboard-aml.png`    | `CB7Section.jsx`   |
| `dashboard-ckyc.png`   | `CB7Section.jsx`   |
| `phone-home.png`       | `DigitalBanking.jsx` |
| `phone-chart.png`      | `DigitalBanking.jsx` |
| `phone-profile.png`    | `DigitalBanking.jsx` |

All images render through `next/image` for automatic optimization (lazy-loading, WebP, responsive sizes). The hero image has `priority` set since it's above the fold.

### Still placeholder (text-only):
- **Trusted-By logos** in `TrustedBy.jsx` — currently a small gray square + brand name. Drop brand SVGs into `public/images/logos/` and swap as needed.
- **Zoomerr brand mark** in `CaseStudies.jsx` — currently a lightning emoji.

## 📱 Responsiveness

Tested layout breakpoints:

- **Mobile** (< 640px): Stacked single-column, mobile drawer nav, smaller type scale
- **Tablet** (640–1024px): 2-column grids, full-width carousel, partial phone visibility
- **Desktop** (≥ 1024px): Full 2-/3-column layouts, sticky headings, larger phone mockups

Typography uses fluid `clamp()` for the largest headlines so they scale smoothly between breakpoints.

## ☁️ Deploy to Vercel

The easiest way:

```bash
# Once your repo is on GitHub:
# 1. Visit https://vercel.com/new
# 2. Import your GitHub repo
# 3. Vercel auto-detects Next.js — just click Deploy
```

Or via CLI:

```bash
npm i -g vercel
vercel
```

No environment variables are needed.

## 📝 Notes

- All interactive elements (buttons, carousel arrows, mobile menu) are functional. The href targets are `#` placeholders — wire them up to real routes when content is finalized.
- The marquee pauses on hover (see `.marquee-track:hover` in `globals.css`).
- Headlines, copy, and microcopy are transcribed verbatim from the Figma screenshots.
