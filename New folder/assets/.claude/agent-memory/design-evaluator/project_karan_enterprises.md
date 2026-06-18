---
name: Karan Enterprises site — design evaluation context
description: Design system, brand tokens, file locations, section structure, and recurring issues for the KE single-page marketing site
type: project
---

Single-file static marketing site for Karan Enterprises (railway/roadway infrastructure contractor, Ranchi, Jharkhand, est. 2013).

**File locations:**
- Source: `C:\Users\workf\OneDrive\Desktop\KE\index.html` (~1524 lines, ~45k tokens)
- Assets: `C:\Users\workf\OneDrive\Desktop\KE\assets\` — logo.png, excavator.png, worker.png, photo1–photo12.jpg
- Prior eval: `C:\Users\workf\OneDrive\Desktop\KE\eval.txt` (v0 baseline, 7.4/10)
- Reports: `C:\Users\workf\OneDrive\Desktop\KE\designReport\` — vNNN-design-report.md format, next = v002

**Brand tokens (CSS :root) — updated v002:**
- `--paper: #f5f3ec`, `--paper-2: #ebe7dd`
- `--ink: #0c0c0c`, `--ink-2: #1c1c1c`, `--ink-3: #3a3a3a`
- `--mute: #403e38` (updated v002 — contrast ~9.7:1 vs paper, WCAG AAA compliant)
- `--yellow: #f0ce21`, `--yellow-2: #ffd60a`, `--yellow-soft: #fff2a8`
- `--display: Archivo`, `--serif: Instrument Serif`, `--mono: JetBrains Mono`
- 8pt grid, clamp-based type scale (--t-hero to --t-micro)
- Responsive breakpoint: 980px (max-width)
- Wide-screen centering: 1760px+ with calc padding

**Current section structure (v004, 2026-05-11):**
Chapter I (Identity) → I.01 About (with M&V inline via .about .mv CSS class) → Chapter II (Track Record) → II.01 Work (bento+filter) → II.02 Clients → II.03 Stats → II.04 Testimonials → Chapter III (Capabilities) → III.01 Services → III.02 Spec Caps (tabbed) → Chapter IV dark (Delivery) → IV.01 Project Delivery (steps+exec-flow) → IV.03 Safety & Quality (RESTORED — but numbered 03 in DOM, should be 02) → IV.02 Why Choose Us (numbered 02 in DOM, should be 03) → Chapter V (Connect) → V.01 CTA → Footer

**Design system patterns:**
- Yellow wipe-up from bottom: `.cal`, `.step`, `.svc`, `.rehab-list li`, `.sub-card`, `.nf-card`, `.std`
- Top-bar scale-in (3px): `.cl-card::before`, `.why-card::before`
- Lift + border + tint: `.stat:hover`
- Underline grow: `.es h3::after`
- Custom cursor: `@media(pointer:fine) and (hover:hover)` — dot + ring + label (`.mark{cursor:none}` now correctly inside this block)
- Scroll reveals: IntersectionObserver on `.reveal`, `.split`, `.worker-cut`, `.exec-flow`, `.mv-card`
- Tab toggle: `.caps-tab` / `.caps-panel` with full ARIA (tablist/tab/tabpanel/aria-selected/aria-controls)

**:active coverage status (v002):**
HAS :active::before: `.cal`, `.svc`, `.rehab-list li`, `.sub-card`, `.nf-card`
MISSING :active::before: `.step`, `.why-card`, `.standards-grid .std`, `.btn`

**Known recurring issues (updated v004):**
RESOLVED: M&V now uses .about .mv CSS class (no more inline grid-column breakout)
RESOLVED: reduced-motion wildcard gone (v003)
RESOLVED: RAF cursor has idle+visibilitychange handling (v003)
RESOLVED: Why card 04 rewritten to "Follow-on contracts without re-tendering" (v003)
RESOLVED: Why card 07 rewritten to "Zero defect notices across all active contracts" (v004)
RESOLVED: Safety section restored as IV.03 (v004)
RESOLVED: .about .mv callout 01 now "5 PSU & govt clients" instead of "12+ Years" (v004)

PERSISTENT (flagged every version):
- Hero: seal + excavator coexist on desktop (right:var(--pad) both) — "pick one" unresolved v0→v004
- Avatar circles in testimonials: empty 42px ink discs with no content (all versions)
- Why cards 02 and 07: both cite RDSO/IRS-0004 compliance — 07 rewrite improved but standard still cited in both
- `.svc .tags{display:none}` at 980px — B2B spec tags hidden on mobile
- Inline styles: 3× sub-head section-tags + exec-flow divider (#2a2a2a off-token)
- footer .wm-2 missing counter-translate on hover (wm-1 animates, wm-2 static)
- "better tomorrow" phrase: 4 occurrences (hero h1, CTA h2, preloader, footer)
- "v.4.2" visible in footer public-facing

NEW issues found in v004:
- Section numbering error: IV.03 Safety appears BEFORE IV.02 Why in DOM — should be reversed
- Dead CSS: .hs (hero stat card, 12 lines), .about-body (10 lines), .tile .num, .exec (section selector), .about-head, .standards (vs .standards-grid)
- 9× hard-coded #1d1d1d throughout stylesheet, should be var(--ink-2)
- Hero lede inline style on em (5 declarations)
- "Email the studio" cursor label — wrong register for construction firm
- "footer v.4.2" should not be public-facing

**Score history:**
- v0 (eval.txt baseline): 7.4/10
- v001 (2026-05-11): 8.1/10 — +0.7 gain from accessibility, filter function, IA merge, interaction variety
- v002 (2026-05-11): 8.5/10 — +0.4 gain from tab consolidation, clean numbering, mute contrast fix, footer links, partial :active coverage
- v003 (2026-05-11): 8.7/10 — +0.2 from chapter banners, full :active coverage, cursor RAF idle handling, reduced-motion wildcard removal, Why card 04 rewrite
- v004 (2026-05-11): 9.0/10 — +0.3 from subtitle removal on chapter banners, Safety section restoration, M&V inline style → CSS class, Why card 07 rewrite, About callout 01 change from "12+ Years" to "5 PSU & govt clients"

**17-dimension v004 scores (senior designer dimensions added):**
Standard 10: Brand 9.0, Typography 8.5, Color 8.5, Layout 8.5, Micro-interaction 8.5, IA 8.5, Originality 7.5, Accessibility 8.0, Performance 6.5, Mobile 7.0
Senior 7: Compositional intelligence 7.5, Editorial voice 7.0, Detail craft 7.5, Material honesty 7.0, Decision economy 8.0, Cultural specificity 5.5, Cohesion 7.5

**Why:** Establishes baseline for all future evaluations. Score comparisons must use the same 10 dimensions as eval.txt.
**How to apply:** On future evaluations, check this file first to avoid re-deriving brand tokens, section structure, and issue history from scratch.
