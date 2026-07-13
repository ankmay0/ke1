import { SEQUENCE, PROCESS } from '../../lib/data'
import { Reveal } from '../../ui/ui'
import {
  WRAP, SECTION, SEC_EYEBROW, IDX, KICKER, LEAD, WM, METRIC_STRIP, metricPill, METRIC_DOT,
} from '../../lib/cx'

export function RailwayFormation() {
  return (
    <section className={`${SECTION} isolate`} id="railway">
      <span className={WM} aria-hidden="true">03</span>
      <div className={WRAP}>
        <Reveal className="max-w-[760px]">
          <div className={`${SEC_EYEBROW} border-rule`}>
            <span className={IDX}>03</span><span className={KICKER}>Core Discipline · Railway Works</span>
          </div>
          <h2 className="mt-[18px] font-display text-[clamp(28px,4.2vw,54px)] font-black uppercase leading-[1.0] tracking-[-0.02em] dark:text-text [&_em]:mt-2 [&_em]:block [&_em]:text-[0.62em] [&_em]:font-bold [&_em]:not-italic [&_em]:tracking-[0.01em] [&_em]:text-steel-2">
            RDSO-Grade Railway Formation
            <em>From earthwork to track commissioning — executed end to end.</em>
          </h2>
          <p className={`${LEAD} mt-[22px]`}>
            End-to-end railway formation and rehabilitation works executed in accordance with RDSO
            specifications and the Indian Railway Construction Manual — ensuring safety, accuracy and
            long-term performance.
          </p>
          <div className={METRIC_STRIP}>
            {['RDSO Standards', 'Indian Railway CM', '230+ Workforce', 'Modern Machinery'].map((t) => (
              <span className={metricPill('border-line-2')} key={t}><i className={METRIC_DOT} />{t}</span>
            ))}
          </div>
        </Reveal>

        {/* numbered construction sequence */}
        <div className="mt-[52px] grid grid-cols-4 gap-4 max-[1024px]:grid-cols-2 max-[760px]:grid-cols-1">
          {SEQUENCE.map((s, i) => (
            <Reveal className="group" key={s.n} delay={i * 0.08}>
              <div className="relative aspect-[4/3] overflow-hidden rounded dark:shadow-glow-soft dark:[outline:1px_solid_var(--glass-brd)] dark:[outline-offset:-1px]">
                <span className="absolute left-3 top-3 rounded-[3px] bg-yellow px-2.5 py-1.5 font-cond text-[26px] font-semibold leading-none text-ink">{s.n}</span>
                <img className="h-full w-full object-cover transition-transform duration-[800ms] ease-smooth group-hover:scale-[1.07]" src={s.img} alt={s.title} loading="lazy" />
              </div>
              <h4 className="mt-4 font-display text-[15px] font-bold dark:text-text">{s.title}</h4>
              <p className="mt-1.5 text-[13.5px] text-steel">{s.desc}</p>
            </Reveal>
          ))}
        </div>

        {/* six process cards */}
        <div className="mt-16 grid grid-cols-3 gap-px overflow-hidden rounded-[10px] bg-white/[0.08] shadow-[0_40px_80px_-44px_rgba(14,18,23,0.55)] max-[1024px]:grid-cols-2 max-[760px]:grid-cols-1 dark:border dark:border-glass-brd dark:bg-glass-brd">
          {PROCESS.map((p) => (
            <div className="flex gap-5 bg-dark p-[32px_28px] text-on-dark transition-[background] duration-300 hover:bg-dark-2 dark:bg-white/[0.025] dark:hover:bg-glass-2" key={p.n}>
              <span className="shrink-0 font-cond text-[34px] font-semibold leading-none text-yellow">{p.n}</span>
              <div>
                <h4 className="font-display text-[17px] font-bold">{p.title}</h4>
                <p className="mt-2 text-[13.5px] text-on-dark-mute">{p.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
