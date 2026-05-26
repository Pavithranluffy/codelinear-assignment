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

| File                   | Used in                                      | Description |
| ---------------------- | -------------------------------------------- | ----------- |
| `womenwithphone.png`   | `Hero.jsx`                                   | Main hero section illustration (user with floating dashboard UI) |
| `dashboardONe.png`     | `CB7Section.jsx`                             | AML Dashboard preview |
| `DashboardTwo.png`     | `CB7Section.jsx`                             | CKYC Dashboard preview |
| `phone1.png`           | `DigitalBanking.jsx`                         | Phone mockup 1 (Home activity screen) |
| `phone2.png`           | `DigitalBanking.jsx`                         | Phone mockup 2 (Monthly chart screen) |
| `phone3.png`           | `DigitalBanking.jsx`                         | Phone mockup 3 (Settings & Profile screen) |
| `CB7.png`              | `CB7Section.jsx`, `CB7CTA.jsx`               | Unified CB7 watermark logo graphic |
| `leftsidevector.png`   | `DigitalBanking.jsx`                         | Decorative clover outline background vector |
| `7.png`                | `DigitalBanking.jsx`                         | Decorative giant "7" background vector |
| `beneathn7.png`        | `DigitalBanking.jsx`                         | Decorative giant "N7" background vector |

All images render through standard `next/image` tags or optimized HTML tags for automatic optimization (lazy-loading, responsive sizes).

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

## 🛠️ Design Refinements, Bug Fixes & Enhancements

To achieve a production-grade standard and perfectly match the visual mockups, the following refinements have been implemented in the codebase:

1. **Pixel-Perfect 3-Phone Grid Alignment** (`DigitalBanking.jsx`):
   - Corrected the vertical layout in Row 2 (the middle section).
   - Placed the *"No legacy IT systems"* text inside the middle column (`lg:col-start-2`) and Phone 2 inside the right column (`lg:col-start-3`). This matches the mockup's center-right alignment and allows the faint blue clover outline vector on the left column to display unobstructed.

2. **Smart Anchor Scrolling & Navigation** (`Footer.jsx`):
   - Mapped all main footer navigation links (*"Core Banking CB7"*, *"Digital Banking N7"*, *"Solutions"*, *"Insights"*, *"Contact"*, and *"About Us"*) to their exact HTML section IDs across the landing page.
   - Designed a safe navigation event handler using `scrollIntoView({ behavior: 'smooth' })`.
   - Intercepted click events to prevent default `#` redirects, **completely avoiding annoying page-top jumps** when clicking unmapped or placeholder items (a major user-experience improvement).

3. **Unified Brand Watermarks** (`CB7Section.jsx` & `CB7CTA.jsx`):
   - Replaced raw text-stroke CSS placeholders with the unified transparent brand graphic asset `/images/CB7.png`.
   - In `CB7CTA.jsx` (the Dark CTA card), the graphic is absolute-positioned and perfectly scaled (`h-[120%] object-right`), and clipped strictly **inside** the card boundaries using `overflow-hidden` to match the exact figma outline spec.
   - In `CB7Section.jsx` (Core Banking dashboard), the asset is scaled horizontally and centered at a subtle opacity (`opacity-[0.65]`) to create a unified design language.

4. **Dynamic N7 Browser Tab Icon (Favicon)** (`src/app/icon.js`):
   - Engineered a dynamic Next.js API-based favicon that generates a PNG tab icon.
   - Features a custom linear gradient background (`#00C2FF` to `#0A2BFA`) with the bold white **"N7"** logo centered inside it, replacing default browser icons.

5. **Optimized Spacing Rhythm** (`TrustedBy.jsx`):
   - Adjusted the layout offsets on the brand logos container from `pb-16 md:pb-24` to `pt-12 md:pt-20 pb-4 md:pb-8`.
   - Shunted the TrustedBy strip further down (away from Hero content) and pulled it closer to the Solutions grid to establish a balanced vertical layout flow.

## 📝 Notes

- All interactive controls (e.g. navigation, carousel, mobile drawer) are active. The footer anchors are mapped to real section IDs.
- The infinite text marquee pauses automatically on mouse hover (see `.marquee-track:hover` in `globals.css`).
- Typography utilizes responsive `clamp()` to scale header sizes smoothly across desktop, tablet, and mobile views.
