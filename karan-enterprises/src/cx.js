/* =====================================================================
   Shared Tailwind class compositions.
   These are NOT CSS component classes (@layer components) — they are plain
   JavaScript strings of Tailwind utilities, composed here so the repeated
   design-system primitives (buttons, section wrappers, eyebrows, headings)
   stay DRY without leaving any hand-written CSS rules behind.
   Tailwind's content scanner sees the full literal class names in this file.
   ===================================================================== */

/* layout */
export const WRAP = 'w-full max-w-site mx-auto px-[var(--pad)]'
export const SECTION = 'relative py-[var(--sec)]'

/* dark "feature" band — obsidian + radial yellow glow + grain overlay */
export const SECTION_DARK =
  'relative isolate text-on-dark bg-dark ' +
  '[background-image:radial-gradient(120%_80%_at_85%_0%,rgba(255,205,0,0.10),transparent_60%),radial-gradient(90%_70%_at_0%_100%,rgba(255,205,0,0.05),transparent_55%)] ' +
  'dark:[background-image:radial-gradient(120%_80%_at_85%_0%,rgba(255,214,10,0.12),transparent_58%),radial-gradient(90%_70%_at_0%_100%,rgba(255,176,10,0.07),transparent_55%)] ' +
  'dark:border-y dark:border-line ' +
  "before:content-[''] before:pointer-events-none before:absolute before:inset-0 before:-z-[1] before:bg-grain before:[background-size:160px_160px] before:opacity-50 before:[mix-blend-mode:overlay]"

/* buttons */
export const BTN =
  'inline-flex items-center gap-3 rounded-[10px] px-7 py-[17px] font-mono text-[12.5px] font-semibold uppercase tracking-[0.06em] ' +
  'transition-[transform,background,box-shadow,color] duration-[250ms] ease-smooth ' +
  '[&_.arr]:transition-transform [&_.arr]:duration-300 [&_.arr]:ease-smooth hover:[&_.arr]:translate-x-1'
export const BTN_PRIMARY =
  BTN +
  ' bg-yellow text-on-accent shadow-[0_10px_40px_-12px_rgba(255,214,10,0.55)] hover:-translate-y-0.5 hover:bg-yellow-deep hover:shadow-[0_14px_50px_-10px_rgba(255,214,10,0.7)]'
export const BTN_DARK =
  BTN +
  ' bg-ink text-white hover:-translate-y-0.5 hover:bg-ink-2 ' +
  'dark:border dark:border-glass-brd dark:bg-glass-2 dark:[backdrop-filter:blur(10px)] dark:hover:border-yellow dark:hover:bg-white/[0.12]'
/* white-on-photo ghost used in the hero CTA */
export const BTN_GHOST_HERO =
  BTN + ' border border-white/50 bg-transparent text-white hover:border-white hover:bg-white hover:text-on-accent'

/* eyebrow / kicker / numeric index / heading / lead */
export const KICKER = 'inline-flex items-center gap-2.5 font-mono text-xs font-medium uppercase tracking-[0.1em] text-steel'
/* eyebrow: caller appends the border colour (`border-rule` on light, `border-white/[0.28]` on dark bands) */
export const SEC_EYEBROW = 'flex flex-wrap items-baseline gap-4 border-t-2 pt-4'
export const IDX = 'font-mono text-[13px] font-bold tracking-[0.04em] text-ink dark:text-text'
export const H_SEC =
  'mt-[clamp(16px,1.8vw,26px)] font-display text-[clamp(28px,4.2vw,58px)] font-black uppercase leading-[0.98] tracking-[-0.03em]'
export const LEAD = 'mt-[18px] max-w-[60ch] text-[clamp(16px,1.5vw,19px)] text-steel'

/* behind-text yellow underline (used inside headings) */
export const U =
  "relative whitespace-nowrap after:content-[''] after:absolute after:inset-x-0 after:bottom-[0.04em] after:-z-[1] after:h-[0.16em] after:bg-yellow"
/* yellow full-stop accent in headings */
export const DOT = 'not-italic text-yellow'

/* oversized editorial watermark numeral (bleeds off-canvas) */
export const WM =
  'pointer-events-none select-none absolute -z-[1] top-[clamp(-10px,1vw,30px)] right-[calc(-1*clamp(8px,3vw,56px))] ' +
  'font-cond text-[clamp(110px,17vw,240px)] font-bold leading-[0.74] tracking-[-0.03em] text-ink opacity-[0.045] ' +
  'dark:text-white dark:opacity-[0.05]'
export const WM_LEFT = 'left-[calc(-1*clamp(8px,3vw,56px))] right-auto'

/* glass card chrome shared by credentials / geo-cap / testimonials.
   Light: paper + hairline, lifts to a soft yellow glow on hover.
   Dark:  frosted glass + glow, hover edge turns yellow. (add your own
   hover:-translate-y-* per card) */
export const CARD =
  'relative overflow-hidden rounded border border-line bg-paper transition-[transform,box-shadow,border-color] duration-300 ease-smooth ' +
  'hover:border-line-2 hover:shadow-[var(--glow-soft),var(--glow-y)] ' +
  'dark:border-glass-brd dark:bg-glass dark:shadow-glow-soft dark:[backdrop-filter:blur(14px)_saturate(130%)] dark:hover:border-[rgba(255,214,10,0.45)]'

/* solid/soft yellow icon chip (geo-cap, credentials). Dark = solid yellow. */
export const ICON_CHIP =
  'grid place-items-center rounded bg-yellow-soft text-ink transition-[background] duration-300 ease-smooth dark:bg-yellow dark:text-on-accent dark:[&_svg]:stroke-on-accent'

/* capability metric strip: container + pill + dot. `brd` differs by context. */
export const METRIC_STRIP = 'mt-[38px] flex flex-wrap gap-3'
export const metricPill = (brd = 'border-line-2') =>
  `inline-flex items-center gap-2.5 rounded-full border ${brd} px-[18px] py-2.5 font-display text-[13.5px] font-semibold dark:border-glass-brd dark:bg-glass dark:text-text`
export const METRIC_DOT = 'h-[7px] w-[7px] rounded-full bg-yellow dark:shadow-[0_0_12px_rgba(255,214,10,0.9)]'
