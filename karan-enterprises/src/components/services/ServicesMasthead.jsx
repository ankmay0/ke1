import { motion } from 'framer-motion'
import { Reveal } from '../../ui/ui'
import { MOTION_OFF } from '../../lib/motion'
import { WRAP, DOT } from '../../lib/cx'

/* ---------------------------------------------------------- MASTHEAD */
/* Typographic page opener — the promise stated once, above the capability
   index. The H1 sits at the very top (often behind the preloader), so its
   clip-mask reveal is driven on MOUNT — not whileInView, which never reliably
   fires above the fold. Renders static in SHOT / reduced-motion. */
const TITLE_LINES = [
  <span key="t1">From Rail to Road:</span>,
  <span key="t2">Engineering Every Journey</span>,
]
const TITLE_CLASS =
  'font-display text-[clamp(24px,3.8vw,52px)] font-black uppercase leading-[0.9] tracking-[-0.04em] text-ink dark:text-text'

function MastheadTitle() {
  if (MOTION_OFF) {
    return (
      <h1 className={TITLE_CLASS}>
        {TITLE_LINES.map((l, i) => <span className="block" key={i}>{l}</span>)}
      </h1>
    )
  }
  return (
    <h1 className={TITLE_CLASS}>
      {TITLE_LINES.map((l, i) => (
        <span className="block overflow-hidden pb-[0.06em] -mb-[0.06em]" key={i}>
          <motion.span
            className="block will-change-transform"
            initial={{ y: '115%' }}
            animate={{ y: '0%' }}
            transition={{ duration: 0.8, delay: 0.1 + i * 0.09, ease: [0.22, 1, 0.36, 1] }}
          >
            {l}
          </motion.span>
        </span>
      ))}
    </h1>
  )
}

export function ServicesMasthead() {
  return (
    <header className="relative isolate overflow-hidden pb-[clamp(14px,1.7vw,24px)] pt-[clamp(12px,1.6vw,22px)]" id="services">
      <div className={WRAP}>
        <div className="grid grid-cols-[1fr_auto] items-center gap-x-[clamp(24px,4vw,64px)] gap-y-5 max-[860px]:grid-cols-1">
          <MastheadTitle />
          <Reveal delay={0.12} className="max-w-[clamp(230px,25vw,330px)] border-l-2 border-yellow pl-5 max-[860px]:border-l-0 max-[860px]:pl-0">
            <p className="text-[clamp(14px,1.2vw,16.5px)] leading-[1.6] text-steel">
              With deep expertise in railway infrastructure and a strong footprint across roads, bridges,
              and civil construction, Karan Enterprises delivers projects that connect communities and
              build the nation's infrastructure.
            </p>
          </Reveal>
        </div>
      </div>
    </header>
  )
}
