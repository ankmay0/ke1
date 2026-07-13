import { useState, useLayoutEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Reveal, SectionHead } from '../../ui/ui'
import { CornerTicks } from '../../ui/tech'
import { gsap, ScrollTrigger, MOTION_OFF } from '../../lib/motion'
import { WRAP, SECTION, LEAD, DOT } from '../../lib/cx'
import { PROJECTS } from '../../lib/data'

const CATS = ['All', ...Array.from(new Set(PROJECTS.map((p) => p.cat)))]

/* staggered reveal for an opened record's contents (click animation) */
const REC_PANEL = {
  hidden: {},
  show: { transition: { staggerChildren: MOTION_OFF ? 0 : 0.07, delayChildren: MOTION_OFF ? 0 : 0.12 } },
}
const REC_ITEM = {
  hidden: { y: MOTION_OFF ? 0 : 20, opacity: MOTION_OFF ? 1 : 0 },
  show: { y: 0, opacity: 1, transition: { duration: MOTION_OFF ? 0 : 0.5, ease: [0.22, 1, 0.36, 1] } },
}

/* ---------------------------------------- one expandable ledger record */
function LedgerRow({ p, n, open, onToggle }) {
  return (
    <div data-ledger-row className="border-t border-rule last:border-b dark:border-line">
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={open}
        className="group grid w-full grid-cols-[46px_96px_1fr_auto] items-center gap-x-[clamp(14px,2vw,30px)] py-[clamp(18px,2vw,26px)] text-left transition-colors hover:bg-black/[0.015] dark:hover:bg-white/[0.02] max-[680px]:grid-cols-[34px_1fr_auto]"
      >
        <span data-ledger-num className="font-cond text-[clamp(22px,2vw,30px)] font-semibold leading-none text-steel/70">
          {String(n).padStart(2, '0')}
        </span>

        <span className="relative aspect-[4/3] w-full overflow-hidden rounded-[6px] border border-rule dark:border-line max-[680px]:hidden">
          <img data-ledger-thumb src={p.img} alt="" loading="lazy" className="h-full w-full object-cover contrast-[1.03] transition-transform duration-[700ms] ease-smooth group-hover:scale-[1.06]" />
        </span>

        <span className="min-w-0">
          <span className="font-mono text-[10.5px] uppercase tracking-[0.12em] text-yellow-deep">{p.cat}</span>
          <span className="mt-1.5 block truncate font-display text-[clamp(17px,1.7vw,23px)] font-bold leading-[1.12] text-ink dark:text-text">{p.title}</span>
          <span className="mt-1 block truncate font-mono text-[11.5px] leading-[1.4] text-steel">{p.client} · {p.location}</span>
        </span>

        <span className="flex items-center gap-[clamp(14px,2vw,26px)] justify-self-end">
          {p.duration && (
            <span className="text-right max-[680px]:hidden">
              <b className="block font-cond text-[clamp(20px,1.8vw,28px)] font-semibold leading-none text-ink dark:text-text">{p.duration.split(' ')[0]}</b>
              <span className="font-mono text-[9.5px] uppercase tracking-[0.08em] text-steel">{p.duration.split(' ').slice(1).join(' ')}</span>
            </span>
          )}
          <span className={`grid h-9 w-9 shrink-0 place-items-center rounded-full border border-rule text-ink transition-[transform,background,border-color,color] duration-300 ease-smooth group-hover:border-yellow dark:border-line dark:text-text ${open ? 'rotate-45 bg-yellow text-on-accent' : ''}`} aria-hidden="true">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round"><path d="M12 5v14M5 12h14" /></svg>
          </span>
        </span>
      </button>

      {/* expanded portfolio record — advanced accordion open / close */}
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key="record"
            initial={{ height: 0, opacity: 0, y: -6 }}
            animate={{ height: 'auto', opacity: 1, y: 0 }}
            exit={{ height: 0, opacity: 0, y: -6 }}
            transition={{
              duration: MOTION_OFF ? 0 : 0.5,
              ease: [0.22, 1, 0.36, 1],
              opacity: { duration: MOTION_OFF ? 0 : 0.34 },
            }}
            className="overflow-hidden"
          >
            <motion.div
              variants={REC_PANEL}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="grid grid-cols-[1.05fr_0.95fr] gap-x-[clamp(28px,4vw,60px)] gap-y-8 pb-[clamp(26px,3.4vw,48px)] pt-1 pl-[clamp(0px,calc(46px+96px+2vw),160px)] max-[860px]:grid-cols-1 max-[680px]:pl-0"
            >
              <div>
                <motion.p variants={REC_ITEM} className="max-w-[54ch] text-[clamp(14.5px,1.3vw,17px)] leading-[1.62] text-steel">{p.overview}</motion.p>

                {p.highlight && (
                  <motion.div variants={REC_ITEM} className="mt-6 flex items-start gap-3 border-l-2 border-yellow bg-yellow-soft/60 px-4 py-3 dark:bg-white/[0.04]">
                    <span className="mt-[3px] shrink-0 font-mono text-[10px] font-bold uppercase tracking-[0.1em] text-yellow-deep">Highlight</span>
                    <span className="text-[13.5px] leading-[1.5] text-ink dark:text-text">{p.highlight}</span>
                  </motion.div>
                )}

                <motion.div variants={REC_ITEM} className="mt-7">
                  <span className="font-mono text-[10.5px] uppercase tracking-[0.14em] text-steel">Key activities executed</span>
                  <ul className="mt-3 grid grid-cols-2 gap-x-6 gap-y-2.5 max-[460px]:grid-cols-1">
                    {p.activities.map((a) => (
                      <li key={a} className="flex items-start gap-2.5 text-[13.5px] leading-[1.4] text-ink dark:text-text">
                        <span className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-yellow" />{a}
                      </li>
                    ))}
                  </ul>
                </motion.div>

                <motion.div variants={REC_ITEM} className="mt-7 flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <span key={t} className="rounded-full border border-rule px-3 py-1.5 font-mono text-[10.5px] uppercase tracking-[0.06em] text-steel dark:border-line">{t}</span>
                  ))}
                </motion.div>
              </div>

              <motion.div variants={REC_ITEM}>
                <div className="relative overflow-hidden rounded-[8px] border border-rule dark:border-line">
                  <div className="relative aspect-[16/11] overflow-hidden">
                    <img src={p.img} alt={p.title} loading="lazy" className="h-full w-full object-cover contrast-[1.04]" />
                    <CornerTicks />
                  </div>
                </div>
                <p className="mt-3.5 font-mono text-[11.5px] leading-[1.55] text-steel">
                  <span className="text-yellow-deep">Contract · </span>{p.projectName}
                </p>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

/* ---------------------------------------------- 01 · THE LEDGER INDEX */
export function Ledger() {
  const [cat, setCat] = useState('All')
  const [openTitle, setOpenTitle] = useState(PROJECTS[0].title)
  const list = cat === 'All' ? PROJECTS : PROJECTS.filter((p) => p.cat === cat)

  const countFor = (c) => (c === 'All' ? PROJECTS.length : PROJECTS.filter((p) => p.cat === c).length)

  // Advanced per-row reveal: as each record scrolls into view it rises + fades
  // in, its thumbnail wipes open via clip-path and its index number slides in —
  // staggered one-by-one, and re-run when the discipline filter changes.
  const listRef = useRef(null)
  useLayoutEffect(() => {
    if (MOTION_OFF || !listRef.current) return
    const ctx = gsap.context(() => {
      const rows = gsap.utils.toArray(listRef.current.querySelectorAll('[data-ledger-row]'))
      rows.forEach((row) => {
        const thumb = row.querySelector('[data-ledger-thumb]')
        const num = row.querySelector('[data-ledger-num]')
        gsap.set(row, { autoAlpha: 0, y: 42 })
        if (thumb) gsap.set(thumb, { clipPath: 'inset(0% 100% 0% 0%)' })
        if (num) gsap.set(num, { xPercent: -60, autoAlpha: 0 })

        const tl = gsap.timeline({ scrollTrigger: { trigger: row, start: 'top 90%', once: true } })
        tl.to(row, { autoAlpha: 1, y: 0, duration: 0.7, ease: 'power3.out' }, 0)
        if (thumb) tl.to(thumb, { clipPath: 'inset(0% 0% 0% 0%)', duration: 0.85, ease: 'power3.out' }, 0.05)
        if (num) tl.to(num, { xPercent: 0, autoAlpha: 1, duration: 0.6, ease: 'power2.out' }, 0.12)
      })
      ScrollTrigger.refresh()
    }, listRef)
    return () => ctx.revert()
  }, [cat])

  return (
    <section className={`${SECTION} bg-surface dark:bg-transparent`} id="ledger">
      <div className={WRAP}>
        <SectionHead idx="01" kicker="The contract ledger">
          Every contract<em className={DOT}>,</em> on record.
        </SectionHead>
        <Reveal delay={0.05}>
          <p className={LEAD}>Filter the record by discipline, then open any contract for its full scope, activities and site imagery.</p>
        </Reveal>

        {/* discipline filter — mono record tabs */}
        <Reveal delay={0.08} className="mt-[clamp(26px,3vw,40px)] flex flex-wrap gap-2.5 border-b border-rule pb-[clamp(18px,2vw,26px)] dark:border-line">
          {CATS.map((c) => {
            const on = cat === c
            return (
              <button
                key={c}
                type="button"
                onClick={() => setCat(c)}
                className={`inline-flex items-center gap-2 rounded-full border px-[15px] py-2 font-mono text-[11px] uppercase tracking-[0.08em] transition-[background,border-color,color] duration-200 ${
                  on
                    ? 'border-yellow bg-yellow text-on-accent'
                    : 'border-rule text-steel hover:border-ink hover:text-ink dark:border-line dark:hover:border-text dark:hover:text-text'
                }`}
              >
                {c}
                <span className={`font-bold ${on ? 'text-on-accent/70' : 'text-steel/60'}`}>{countFor(c)}</span>
              </button>
            )
          })}
        </Reveal>

        {/* the record itself */}
        <div ref={listRef} className="mt-[clamp(6px,1vw,14px)]">
          {list.map((p, i) => (
            <LedgerRow
              key={p.title}
              p={p}
              n={i + 1}
              open={openTitle === p.title}
              onToggle={() => setOpenTitle(openTitle === p.title ? null : p.title)}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
