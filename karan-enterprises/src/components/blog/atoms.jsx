/* Small shared UI atoms used across the blog sections and article bodies. */

/* small round author badge — "KE" monogram, reused across cards + bylines */
export function Avatar({ className = '' }) {
  return (
    <span className={`grid shrink-0 place-items-center rounded-full bg-yellow font-display text-[11px] font-extrabold text-on-accent ${className}`} aria-hidden="true">
      KE
    </span>
  )
}

/* category chip */
export function Chip({ children, solid = false }) {
  return (
    <span
      className={
        solid
          ? 'inline-flex items-center rounded-full bg-yellow px-3 py-1 font-mono text-[10px] font-semibold uppercase tracking-[0.1em] text-on-accent'
          : 'inline-flex items-center rounded-full border border-line px-3 py-1 font-mono text-[10px] font-semibold uppercase tracking-[0.1em] text-steel dark:border-glass-brd'
      }
    >
      {children}
    </span>
  )
}
