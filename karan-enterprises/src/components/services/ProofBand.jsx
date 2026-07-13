import { Reveal, SectionHead, CountUp } from '../../ui/ui'
import { PANEL_DARK } from '../../ui/tech'
import { WRAP, DOT } from '../../lib/cx'
import { CLIENTS, TESTIMONIALS } from '../../lib/data'

/* --------------------------------------------- PROOF · TRACK RECORD */
/* Tier-1 credibility layer. Every claim on this page now sits one scroll
   from evidence: a hard-number stat strip, the eight government/PSU bodies
   we deliver for, and a named, on-the-record client voice. Distinct rhythm
   (numbers → client wall → wide pull-quote) deliberately breaks the
   SectionHead+grid cadence the rest of the page repeats. */
const PROOF_STATS = [
  { to: 12, sup: '+', label: 'Years executing railway & road works' },
  { to: 230, sup: '', label: 'Strong workforce · 100 on-roll + 130 contractual' },
  { to: 8, sup: '', label: 'Government & PSU bodies served' },
  { to: 0, sup: '', label: 'Safety incidents on block-time works' },
]

export function ProofBand() {
  const featured = TESTIMONIALS[0]
  return (
    <section className="relative bg-surface py-[var(--sec)] dark:bg-transparent" id="proof">
      <div className={WRAP}>
        <div className="max-w-[720px]">
          <SectionHead idx="—" kicker="Track record · Proven in the field">
            Every claim, backed on the ground<em className={DOT}>.</em>
          </SectionHead>
        </div>

        {/* hard-number stat strip */}
        <div className="mt-[clamp(30px,3.4vw,48px)] grid grid-cols-4 gap-px overflow-hidden rounded-[12px] border border-line bg-line max-[760px]:grid-cols-2 max-[420px]:grid-cols-1 dark:border-glass-brd dark:bg-glass-brd">
          {PROOF_STATS.map((s, i) => (
            <Reveal key={s.label} delay={Math.min(i * 0.06, 0.24)} className="bg-paper p-[clamp(22px,2.2vw,34px)] dark:bg-white/[0.025]">
              <b className="flex items-baseline font-cond text-[clamp(42px,5vw,68px)] font-semibold leading-[0.85] text-ink dark:text-text">
                <CountUp to={s.to} /><em className="ml-1 text-[0.4em] not-italic text-yellow-deep">{s.sup}</em>
              </b>
              <span className="mt-3 block max-w-[22ch] font-mono text-[10.5px] uppercase leading-[1.55] tracking-[0.06em] text-steel">{s.label}</span>
            </Reveal>
          ))}
        </div>

        {/* government / PSU client wall */}
        <Reveal delay={0.06} className="mt-[clamp(30px,3.4vw,48px)] flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.14em] text-steel">
          <span className="font-semibold text-ink dark:text-text">Trusted by</span>
          <span className="h-px flex-1 bg-line dark:bg-glass-brd" />
          <span>Government &amp; PSU bodies</span>
        </Reveal>
        <div className="mt-4 grid grid-cols-4 gap-px overflow-hidden rounded-[12px] border border-line bg-line max-[1024px]:grid-cols-2 max-[420px]:grid-cols-1 dark:border-glass-brd dark:bg-glass-brd">
          {CLIENTS.map((c, i) => (
            <Reveal
              key={c.abbr}
              delay={Math.min(i * 0.04, 0.28)}
              className="group relative bg-paper px-[clamp(22px,2vw,30px)] pb-7 pt-8 transition-[background] duration-300 ease-smooth hover:bg-surface dark:bg-white/[0.025] dark:hover:bg-glass-2 before:absolute before:left-[clamp(22px,2vw,30px)] before:top-0 before:h-[3px] before:w-8 before:origin-left before:scale-x-0 before:bg-yellow before:transition-transform before:duration-[350ms] before:ease-smooth before:content-['']"
            >
              <span className="block font-display text-[clamp(24px,2.4vw,30px)] font-extrabold leading-none tracking-[0.01em] text-ink dark:text-white">{c.abbr}</span>
              <span className="mt-2.5 block text-[12.5px] font-medium leading-[1.4] text-steel">{c.full}</span>
            </Reveal>
          ))}
        </div>

        {/* on-the-record client voice */}
        <Reveal delay={0.1}>
          <figure className={`${PANEL_DARK} mt-[clamp(30px,3.4vw,48px)] overflow-hidden rounded-[clamp(14px,1.6vw,22px)] p-[clamp(30px,4vw,56px)]`}>
            <span aria-hidden="true" className="pointer-events-none absolute right-[clamp(16px,4vw,48px)] top-[clamp(-6px,1vw,10px)] select-none font-display text-[clamp(120px,16vw,190px)] font-extrabold leading-none text-yellow opacity-[0.14]">&rdquo;</span>
            <blockquote className="relative max-w-[52ch] text-[clamp(18px,2.1vw,27px)] font-medium leading-[1.4] text-white">
              &ldquo;{featured.quote}&rdquo;
            </blockquote>
            <figcaption className="relative mt-6 flex items-center gap-3.5">
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-yellow font-display text-[14px] font-extrabold text-on-accent" aria-hidden="true">
                {featured.name.split(' ').filter(Boolean).map((w) => w[0]).slice(0, 2).join('').toUpperCase()}
              </span>
              <span>
                <b className="block font-display text-[15px] font-bold leading-[1.2] text-white">{featured.name}</b>
                <span className="text-[13px] text-on-dark-mute">{featured.role}</span>
              </span>
            </figcaption>
          </figure>
        </Reveal>
      </div>
    </section>
  )
}
