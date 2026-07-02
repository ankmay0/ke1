/* =====================================================================
   Shared "technical editorial" primitives (gradient-free) used by the
   Services and Projects pages. Depth is carried by flat tone, hairline
   rules, grain and shadow — never a gradient fill.
   ===================================================================== */

/* Flat obsidian panel — the gradient-free replacement for SECTION_DARK.
   Depth = flat --dark (elevated to --dark-2 in dark theme) + grain + the
   caller's shadow. No radial glow. */
export const PANEL_DARK =
  'relative isolate text-on-dark bg-dark dark:bg-dark-2 dark:border dark:border-glass-brd ' +
  "before:content-[''] before:pointer-events-none before:absolute before:inset-0 before:-z-[1] " +
  'before:bg-grain before:[background-size:150px_150px] before:opacity-40 before:[mix-blend-mode:overlay]'

/* Flat framed card — squared hairline panel, no gradient, no glow. The
   border resolves darker (light) / yellow (dark) on hover. */
export const TECH_PANEL =
  'relative overflow-hidden border border-line bg-paper transition-colors duration-300 ' +
  'hover:border-ink dark:border-glass-brd dark:bg-white/[0.02] dark:hover:border-[rgba(255,214,10,0.5)]'

/* Two asymmetric corner ticks (top-left / bottom-right) — one restrained
   blueprint keyline that resolves on hover. Purely decorative. */
export function CornerTicks({ tone = 'border-yellow' }) {
  const t = `pointer-events-none absolute h-3.5 w-3.5 ${tone} opacity-0 transition-opacity duration-300 group-hover:opacity-100`
  return (
    <span aria-hidden="true">
      <span className={`${t} left-[7px] top-[7px] border-l-2 border-t-2`} />
      <span className={`${t} bottom-[7px] right-[7px] border-b-2 border-r-2`} />
    </span>
  )
}
