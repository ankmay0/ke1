# M/s Karan Enterprises — Website (React)

A redesigned, single-page React site for M/s Karan Enterprises (railway & roadway
infrastructure contractor). Rebuilt from the previous static HTML to look like a modern
corporate website rather than a slide deck.

## Run

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # production build → dist/
npm run preview  # preview the production build
```

## Tech
- **Vite + React 18**
- **framer-motion** for scroll reveals / hero motion
- **Montserrat** (display) + **Inter** (body) + **Oswald** (numerals) — strong corporate type, no italic serifs
- Tailwind CSS design system — tokens in `src/styles/index.css`, shared class
  compositions in `src/lib/cx.js` (white / steel-grey / safety-yellow)

## Structure
```
src/
  main.jsx                 entry — home (index.html)
  services-main.jsx        entry — services.html
  projects-main.jsx        entry — projects.html
  blogs-main.jsx           entry — blogs.html
  App.jsx                  home-page composition
  components/              UI building blocks
    Preloader.jsx          light loader, home only, once per session
    Nav.jsx                top bar + sticky nav (mobile menu)
    Hero.jsx               landing hero
    Sections.jsx           About, MissionVision, Services, RailwayFormation,
                           Geotech, Projects, Stats, Clients, Testimonials
    Banner.jsx  Chrome.jsx  Credentials.jsx
    Quote.jsx              "Have a project requirement?" → WhatsApp + email
    Footer.jsx
  pages/                   ServicesPage, ProjectsPage, BlogsPage
  ui/                      presentational primitives — ui.jsx (Reveal, Marquee,
                           icons), fx.jsx (Aurora, Tilt…), tech.jsx
  lib/                     non-visual logic — data.js (all copy, single source of
                           truth), cx.js (Tailwind class sets), motion.js
  styles/                  index.css (Tailwind entry + tokens), fonts.css (self-hosted)
```

Dev tooling lives in `scripts/`; generated screenshots, logs and one-off reports
are parked in `garbage/` (not used by the app or the build).

## Changes made vs. the old site (per client feedback)
- Dropped the italic-serif / yellow-highlight "PPT" styling for a clean corporate look.
- Hero rewritten to **"Building the Foundations of Tomorrow."**; About & Contact headings
  differentiated so there aren't duplicate headlines.
- New **Get a Quote** section ("Have a project requirement?") wired to **WhatsApp + email**.
- Preloader is now **light** and shows **once per session on the home page only**.
- **Clients** is a right-to-left marquee with labelled cards.
- **Maccaferri** split into its own "Advanced Geotechnical Solutions" section.
- **Railway formation** uses a strong uppercase heading, a numbered construction sequence,
  and six process cards.
- Branding standardised to **M/s Karan Enterprises**; "East India" removed; project values
  not disclosed; LinkedIn points to the **business** page.

## Notes
- `Gallery` and `Blogs` nav links are placeholders — those pages are the next build phase
  (this pass is the Home page).
- The quote form uses the business WhatsApp number / email in `src/data.js`. Update
  `COMPANY.phoneRaw`, `emails`, and `linkedin` there if they change.
- `scripts/shoot.mjs` / `scripts/shoot-mobile.mjs` are dev-only screenshot helpers
  (puppeteer-core); run them from the repo root, e.g. `node scripts/shoot.mjs`.
- Images live in `public/assets/` (copied from the original site's photo set).
```
