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
- Plain CSS design system in `src/styles.css` (white / steel-grey / safety-yellow)

## Structure
```
src/
  data.js                  all copy + content (single source of truth)
  styles.css               design system
  ui.jsx                   Reveal, Marquee, icons
  components/
    Preloader.jsx          light loader, home only, once per session
    Nav.jsx                top bar + sticky nav (mobile menu)
    Hero.jsx               "Building the Foundations of Tomorrow."
    Sections.jsx           About, Services, RailwayFormation, Geotech,
                           Projects, Stats, Clients, Testimonials
    Quote.jsx              "Have a project requirement?" → WhatsApp + email
    Footer.jsx
```

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
- `shoot.mjs` / `shoot-mobile.mjs` are dev-only screenshot helpers (puppeteer-core).
- Images live in `public/assets/` (copied from the original site's photo set).
```
