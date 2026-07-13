import { Reveal, SectionHead } from '../../ui/ui'
import { CornerTicks } from '../../ui/tech'
import { WRAP, LEAD, DOT } from '../../lib/cx'
import { COMPANY, RF_FIELD_STRIP, RF_SEQUENCE } from '../../lib/data'

/* ---------------------------------- 02 · RAILWAY FORMATION & REHAB */
export function RailwayFormationRehab() {
  return (
    <section className="relative bg-surface py-[var(--sec)] dark:bg-transparent" id="railway-formation">
      <div className={WRAP}>
        <div className="max-w-[820px]">
          <SectionHead idx="02" kicker="Railway formation & rehabilitation">
            RDSO-grade formation works, end to end<em className={DOT}>.</em>
          </SectionHead>
          <p className={LEAD}>
            End-to-end execution of railway formation construction and rehabilitation works in accordance
            with RDSO specifications ({COMPANY.rdso}) and the Indian Railways Construction Manual — for
            safety, performance and long-term durability.
          </p>
        </div>

        {/* field strip — formation works in motion */}
        <Reveal className="mt-[clamp(28px,3vw,44px)] grid grid-cols-4 gap-3 max-[760px]:grid-cols-2">
          {RF_FIELD_STRIP.map((f) => (
            <div key={f.img} className="group relative aspect-[4/3] overflow-hidden border border-line dark:border-glass-brd">
              <img className="h-full w-full object-cover grayscale contrast-[1.03] transition-[transform,filter] duration-[800ms] ease-smooth group-hover:scale-[1.06] group-hover:grayscale-0 max-[900px]:grayscale-0" src={f.img} alt={f.alt} loading="lazy" />
              <CornerTicks />
            </div>
          ))}
        </Reveal>

        {/* Maccaferri authorised-applicator credit */}
        <Reveal className="mt-6 flex flex-wrap items-center gap-4">
          <img className="h-[42px] w-auto" src="/assets/maccaferri-logo.png" alt="Maccaferri" />
          <span className="border-l border-line pl-4 font-mono text-[10.5px] uppercase leading-[1.5] tracking-[0.12em] text-steel dark:border-glass-brd">
            Authorised applicator · geocell, geogrid &amp; geosynthetic ground-improvement systems
          </span>
        </Reveal>

        {/* six-stage sequence — connected numbered timeline */}
        <Reveal className="mt-[clamp(30px,3.4vw,48px)] flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.14em] text-steel">
          <span className="font-semibold text-ink dark:text-text">Construction sequence</span>
          <span className="h-px flex-1 bg-line dark:bg-glass-brd" />
          <span>Six stages</span>
        </Reveal>
        <div className="grid grid-cols-3 gap-px overflow-hidden rounded-[10px] bg-line max-[760px]:grid-cols-1 dark:border dark:border-glass-brd dark:bg-glass-brd">
          {RF_SEQUENCE.map((p) => (
            <div
              className="group relative flex gap-5 bg-paper p-[clamp(24px,2vw,34px)] transition-[background] duration-300 hover:bg-surface dark:bg-white/[0.025] dark:hover:bg-glass-2"
              key={p.n}
            >
              <span aria-hidden="true" className="absolute left-0 top-0 h-[3px] w-full origin-left scale-x-0 bg-yellow transition-transform duration-[400ms] ease-smooth group-hover:scale-x-100" />
              <span className="shrink-0 font-cond text-[clamp(30px,2.6vw,38px)] font-semibold leading-none text-steel-2 transition-colors duration-300 group-hover:text-yellow-deep">{p.n}</span>
              <div>
                <h4 className="font-display text-[17px] font-bold dark:text-text">{p.title}</h4>
                <p className="mt-2 text-[13.5px] leading-[1.5] text-steel">{p.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
