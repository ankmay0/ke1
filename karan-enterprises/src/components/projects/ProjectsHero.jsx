import { motion } from 'framer-motion'
import { Reveal, CountUp } from '../../ui/ui'
import { MOTION_OFF } from '../../lib/motion'
import { WRAP } from '../../lib/cx'
import { COMPANY, PROJECTS } from '../../lib/data'

const KPIS = [
  { to: PROJECTS.length, sup: '', label: 'Contracts on record' },
  { to: new Set(PROJECTS.map((p) => p.cat)).size, sup: '', label: 'Disciplines' },
  { to: 3, sup: '', label: 'States delivered' },
  { text: COMPANY.since, label: 'Operating since' },
]

/* Typographic title with a mount-driven clip-mask reveal — mirrors
   ServicesMasthead (the H1 sits above the fold, so it animates on MOUNT, not
   whileInView). Yellow period accent. */
const TITLE_LINES = [
  <span key="t1">Selected&nbsp;works<span className="text-yellow">.</span></span>,
]
const TITLE_CLASS =
  'font-display text-[clamp(24px,3.8vw,52px)] font-black uppercase leading-[0.9] tracking-[-0.04em] text-ink dark:text-text'

function MastheadTitle() {
  if (MOTION_OFF) {
    return (
      <h1 className={TITLE_CLASS}>
        {TITLE_LINES.map((l, i) => <span className="block whitespace-nowrap" key={i}>{l}</span>)}
      </h1>
    )
  }
  return (
    <h1 className={TITLE_CLASS}>
      {TITLE_LINES.map((l, i) => (
        <span className="block overflow-hidden pb-[0.06em] -mb-[0.06em]" key={i}>
          <motion.span
            className="block whitespace-nowrap will-change-transform"
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

/* --------------------------------------------------------- 00 · HERO
   Projects index opener — compact light masthead. Heading follows the
   ServicesMasthead pattern: clip-reveal title left, intro in a yellow-rule
   column right — with a full-width KPI strip beneath. */
export function ProjectsHero() {
  return (
    <header className="relative isolate overflow-hidden bg-white dark:bg-transparent pb-[clamp(16px,1.9vw,26px)] pt-[clamp(12px,1.6vw,22px)]">
      <div className={WRAP}>
        {/* record meta line */}
        <Reveal className="flex flex-wrap items-center justify-between gap-3 border-b border-rule pb-[clamp(9px,1vw,14px)] font-mono text-[11px] uppercase tracking-[0.18em] text-steel dark:border-line">
          <span className="inline-flex items-center gap-2.5">
            <a href="/" className="transition-colors hover:text-ink dark:hover:text-text">Home</a>
            <span className="text-steel/40">/</span>
            <span className="font-semibold text-ink dark:text-text">Projects</span>
          </span>
          <span className="inline-flex items-center gap-2.5 max-[560px]:hidden">
            <span className="h-1.5 w-1.5 rounded-full bg-yellow" />
            Contract ledger · {COMPANY.since}—2026 · Jharkhand · Bihar · Chhattisgarh
          </span>
        </Reveal>

        {/* masthead — clip-reveal title left, intro in a yellow-rule column right */}
        <div className="mt-[clamp(14px,1.8vw,24px)] grid grid-cols-[1fr_auto] items-center gap-x-[clamp(24px,4vw,64px)] gap-y-5 max-[860px]:grid-cols-1">
          <MastheadTitle />
          <Reveal delay={0.12} className="max-w-[clamp(230px,25vw,330px)] border-l-2 border-yellow pl-5 max-[860px]:border-l-0 max-[860px]:pl-0">
            <p className="text-[clamp(13.5px,1.15vw,16px)] leading-[1.55] text-steel">
              {PROJECTS.length} completed contracts for Indian Railways, IPRCL, NTPC, RVNL and
              government departments — railway sidings, formation, slope protection, roadways and
              civil works. <span className="text-ink dark:text-text">Delivered, certified, signed off.</span>
            </p>
          </Reveal>
        </div>

        {/* KPI instrument panel — full-width divided stat strip */}
        <Reveal
          delay={0.2}
          className="mt-[clamp(16px,2vw,28px)] grid grid-cols-4 overflow-hidden border-t border-rule dark:border-line max-[560px]:grid-cols-2"
        >
          {KPIS.map((k, i) => (
            <div
              key={k.label}
              className={`group/kpi relative py-[clamp(10px,1.2vw,16px)] pr-[clamp(12px,1.5vw,24px)] transition-colors duration-300 hover:bg-black/[0.02] dark:hover:bg-white/[0.03] ${
                i === 0 ? 'pl-0' : 'border-l border-rule pl-[clamp(12px,1.5vw,24px)] dark:border-line'
              } ${i >= 2 ? 'max-[560px]:border-t max-[560px]:border-rule max-[560px]:dark:border-line' : ''} ${
                i === 2 ? 'max-[560px]:border-l-0 max-[560px]:pl-0' : ''
              }`}
            >
              {/* top accent that draws in on hover */}
              <span
                aria-hidden="true"
                className="absolute left-0 top-[-1px] h-px w-0 bg-yellow transition-[width] duration-500 ease-smooth group-hover/kpi:w-full"
              />
              <span className="font-mono text-[10px] tracking-[0.1em] text-yellow-deep">/{String(i + 1).padStart(2, '0')}</span>
              <b className="mt-1.5 flex items-baseline font-cond text-[clamp(24px,2.6vw,38px)] font-semibold leading-[0.85] text-ink dark:text-text">
                {k.text ? k.text : <><CountUp to={k.to} /><em className="ml-0.5 text-[0.4em] not-italic text-yellow-deep">{k.sup}</em></>}
              </b>
              <span className="mt-1.5 block font-mono text-[10px] uppercase leading-[1.35] tracking-[0.1em] text-steel">{k.label}</span>
            </div>
          ))}
        </Reveal>
      </div>
    </header>
  )
}
