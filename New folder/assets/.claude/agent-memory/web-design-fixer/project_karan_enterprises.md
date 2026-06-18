---
name: Karan Enterprises site — codebase snapshot
description: Single-file static site for KE; v004 fixer pass applied May 2026
type: project
---

Single HTML file at `C:\Users\workf\OneDrive\Desktop\KE\index.html`. No build step. Brand assets in `assets/` (logo.png, excavator.png, worker.png, photo1–photo8.jpg).

**Design tokens:** `--yellow:#f0ce21`, `--ink:#0c0c0c`, `--paper:#f5f3ec`, `--mute:#403e38`, `--ink-2:#1c1c1c`. Fonts: Archivo (display/sans), Instrument Serif (italic accents), JetBrains Mono (labels/mono).

**Chapter/section structure after v004 fixer pass (CORRECTED):**
- Chapter I Identity: I.01 About (includes M&V full-bleed block)
- Chapter II Track Record: II.01 Major projects · II.02 Major clients · II.03 Stats · II.04 Testimonials
- Chapter III Capabilities: III.01 Core competencies · III.02 Specialized capabilities (tabbed)
- Chapter IV Delivery: IV.01 Project delivery · IV.02 Safety & quality standards · IV.03 Why choose us
- Chapter V Connect: V.01 Begin a project

**v004 fixer changes applied:**
1. IV.03/IV.02 numbering fixed: Safety now IV.02, Why now IV.03 (DOM order was Safety before Why).
2. "Better tomorrow" reduced to 1 occurrence (CTA h2 only). Preloader: "Est. 2013 · Building infrastructure that lasts". About h2: "Serving infrastructure development *across* East India." About lede: "...across the transport sector." Footer copyright: "Infrastructure excellence across East India."
3. Dead CSS removed: `.hs` + all descendants (~13 lines), `.about-body` + col/p rules (~4 lines + 1 mobile override), `.tile .num` (display:none), `.exec` + `.exec-head` block (~8 lines + 2 mobile overrides).
4. All `#1d1d1d` literals (9 instances) replaced with `var(--ink-2)` system-wide.
5. 6 inline `style=""` attributes extracted to CSS classes: `.center` (hero-top center cell), `.lede-hl` (hero lede em highlight), `.muted` (3 sub-head section-tags in spec-caps). Also `.exec-flow-divider` (exec-flow inline style with `#2a2a2a` off-token color).
6. Seal CSS removed entirely (`.seal` + keyframes `rot`/`rot-r` + reduced-motion override + responsive display:none). No seal HTML was present in the body.
7. `.mark .wm-lg .wm-2` now has `transition:transform .9s var(--ease-spring) .05s` and `.mark:hover .wm-lg .wm-2{transform:translateY(-4px)}` — staggered spring with .wm-1.
8. All 6 service `.svc .t` titles now have `<em>` italic serif: /01 `<em>& bridges</em>`, /02 `<em>drains</em>`, /03 `<em>protection</em>`, /04 `<em>transportation</em>`, /05 `<em>ground</em>`, /06 `<em>works</em>`.
9. `v.4.2` removed from footer-bottom. Footer now ends "Ranchi · Jharkhand".
10. `.av` empty avatar elements removed from all 3 testimonial `<cite>` blocks. `.t-sect cite .av` CSS rule deleted.

**Score history:** v0=7.4 · v001=8.1 · v002=8.5 · v003=8.7 · v004=9.0

**Interaction patterns (all preserved):**
- Yellow wipe-up with `:active::before` mirror: `.svc`, `.cal`, `.rehab-list li`, `.sub-card`, `.nf-card`, `.step`, `.why-card`, `.standards-grid .std`, `.btn`
- Lift + border + shadow: `.stat`
- Underline-grow + content reveal: `.es`
- Top-bar scale-in: `.cl-card`, `.why-card`

**Key technical features (all preserved):**
- `focus-visible` rings — 3 rules covering light/dark backgrounds
- `prefers-reduced-motion` — individually-targeted (no wildcard); 1 block only
- Cursor RAF with `visibilitychange` + 5s idle `stopLoop()`
- `loading="lazy"` on photos 2–8; photo1 = eager
- Tabbed spec-caps (`role="tablist"`, `aria-selected`, `aria-controls`)
- `--mute:#403e38` token used throughout
- Sequential nav pill scroll-spy map: about→[0], work/clients→[1], services→[2], process/why→[3], contact→[4]
- No `#1d1d1d` literals remain; all use `var(--ink-2)`
- No inline `style=""` attributes in HTML body (excluding SVG)
