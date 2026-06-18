---
name: Karan Enterprises site — design evaluation context (veteran-design-evaluator)
description: Design system, brand tokens, file locations, section structure, and recurring issues for the KE single-page marketing site — maintained by veteran-design-evaluator agent
type: project
---

Single-file static marketing site for Karan Enterprises (railway/roadway infrastructure contractor, Ranchi, Jharkhand, est. 2013).

**File locations:**
- Source: `C:\Users\workf\OneDrive\Desktop\KE\index.html` (~1682 lines)
- Assets: `C:\Users\workf\OneDrive\Desktop\KE\assets\` — logo.png, excavator.png, worker.png, photo1–photo12.jpg
- Prior eval (baseline): `C:\Users\workf\OneDrive\Desktop\KE\eval.txt` (v0 baseline, 7.4/10)
- Reports: `C:\Users\workf\OneDrive\Desktop\KE\designReport\` — design-evaluation-YYYY-MM-DD.md format
- This memory: `C:\Users\workf\OneDrive\Desktop\KE\assets\.claude\agent-memory\veteran-design-evaluator\`

**Brand tokens (CSS :root) — current:**
- `--paper: #f5f3ec`, `--paper-2: #ebe7dd`
- `--ink: #0c0c0c`, `--ink-2: #1c1c1c`, `--ink-3: #3a3a3a`
- `--mute: #403e38` (~9.7:1 contrast vs paper — WCAG AAA)
- `--yellow: #f0ce21`, `--yellow-2: #ffd60a`, `--yellow-soft: #fff2a8`
- `--display: Archivo`, `--serif: Instrument Serif`, `--mono: JetBrains Mono`
- 8pt grid, clamp-based type scale (--t-hero to --t-micro, 7 steps)
- Single breakpoint: 980px
- Wide-screen centering: 1760px+ with calc padding, --max: 1680px

**Current section structure (v004 DOM order):**
Chapter I (Identity) → I.01 About (with M&V .about .mv CSS class) → Chapter II (Track Record) → II.01 Work (bento+filter) → II.02 Clients → II.03 Stats → II.04 Testimonials → Chapter III (Capabilities) → III.01 Services → III.02 Spec Caps (tabbed) → Chapter IV dark (Delivery) → IV.01 Project Delivery (steps+exec-flow) → IV.02 Safety & Quality (tagged IV.02 but appears BEFORE Why in DOM — should be reversed per M-01) → IV.03 Why Choose Us (tagged IV.03 but appears AFTER Safety in DOM) → Chapter V (Connect) → V.01 CTA → Footer

NOTE: The DOM order is Safety(tagged IV.02) then Why(tagged IV.03) — this is CORRECT per naming but was flagged as wrong in v004 notes. Re-read: safety section has tag IV.02, why section has IV.03, safety appears first in DOM. The section tag numbering IS consistent with DOM order in v004. The v004 memory note said this was an error — on re-read of the actual HTML, IV.02 Safety appears at line 1252 and IV.03 Why at line 1285. This is correct DOM order and correct numbering. The v004 notes were INCORRECT about this being a bug. Do not flag as M-01 in future evaluations unless DOM order changes.

**Design system patterns (confirmed in code):**
- Yellow wipe-up from bottom: `.cal`, `.step`, `.svc`, `.rehab-list li`, `.sub-card`, `.nf-card`, `.std`, `.standards-grid .std`
- Top-bar scale-in (3px): `.cl-card::before`, `.why-card::before`, `.mv-card::before`
- Lift + border + tint: `.stat:hover`
- Underline grow: `.es h3::after`
- Custom cursor: `@media(pointer:fine) and (hover:hover)` — dot(6px) + ring(32px) + label
- Scroll reveals: IntersectionObserver on `.reveal`, `.split`, `.worker-cut`, `.exec-flow`, `.mv-card`, `.chapter`
- Tab toggle: `.caps-tab` / `.caps-panel` with full ARIA (tablist/tab/tabpanel/aria-selected/aria-controls)
- Text scramble: `.hero-title .em` on mouseenter (chars: '█▓▒░#*/\<>=+-', 28ms interval)
- Magnetic buttons: `.btn`, `.cta-mini`, `.t-nav button`, `.svc .ico`
- Bento parallax: scroll-driven translateY on `.tile .img`
- Cursor-origin yellow overlay: `.tile .ovl` tracks mouse position

**:active coverage status:**
HAS :active::before: `.cal`, `.svc`, `.rehab-list li`, `.sub-card`, `.nf-card`, `.nf-card`, `.std`, `.standards-grid .std`, `.why-card`, `.step`
CHECK: Review whether `.step:active::before` and `.why-card:active::before` are in current code before flagging as missing

**Known persistent issues (as of 2026-05-11 v005 evaluation):**
- Hero: seal + excavator both at right:var(--pad) — "pick one" unresolved
- Emoji icons in `.why-card .why-icon`: ⏱ ✓ ⚒ ★ ◐ ↻ ⊕ — render inconsistently across OS
- Gmail contact address (karant7568@gmail.com) — should be domain email for PSU credibility
- "better tomorrow" phrase: appears in hero h1, CTA h2, preloader .pre-bot, possibly footer — reduce to 2 instances
- `data-label="Email the studio"` on nav CTA — wrong register for construction firm, should be "Get in touch" or "Start a project"
- 9× hard-coded #1d1d1d in stylesheet — should be var(--ink-2)
- `.svc .tags{display:none}` at 980px — technical spec tags hidden on mobile
- Mobile: no navigation alternative when .nav-lnks is display:none
- About section mobile padding conflict (two competing .about rules in same media query)
- footer .wm-2 hover differential animation (8px/4px split may read as broken)
- Dead CSS: .hs, .about-body, .tile .num, .exec, .about-head, .standards (vs .standards-grid)
- Bento tiles .tile: no aria-label on anchor elements (only data-label for cursor)
- Testimonial carousel: no keyboard ArrowLeft/ArrowRight support
- .exec-flow-divider border uses #2a2a2a (off-token — should be var(--ink-2))
- Hero lede .lede-hl: possibly has inline styles (verify in current code)
- Section tag inline styles: 3 instances using inline style= instead of CSS classes

**Score history:**
- v0 (eval.txt baseline): 7.4/10
- v001 (2026-05-11): 8.1/10 — +0.7 from accessibility, filter function, IA merge, interaction variety
- v002 (2026-05-11): 8.5/10 — +0.4 from tab consolidation, clean numbering, mute contrast fix, footer links
- v003 (2026-05-11): 8.7/10 — +0.2 from chapter banners, full :active coverage, cursor RAF idle handling
- v004 (2026-05-11): 9.0/10 — +0.3 from subtitle removal on chapter banners, Safety restoration, M&V CSS class, Why card rewrites
- v005 (2026-05-11, veteran-design-evaluator): 9.0/10 — comprehensive re-evaluation, same score confirmed; critical path to 9.4 identified

**Why:** Establishes baseline for all future evaluations. Score comparisons must use the same 10 dimensions as eval.txt.
**How to apply:** On future evaluations, check this file first to avoid re-deriving brand tokens, section structure, and issue history from scratch. Verify any issue flagged as "persistent" by actually reading the current HTML — some prior-version bugs may already be fixed.
