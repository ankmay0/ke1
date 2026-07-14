import { STATS, TRUST } from '../../lib/data'
import { Reveal, SectionHead, CountUp } from '../../ui/ui'
import { WRAP, SECTION_DARK, U } from '../../lib/cx'

export function Stats() {
  return (
    <section className="relative py-[clamp(40px,6vw,96px)]" id="stats">
      <div className={WRAP}>
       <div className={`${SECTION_DARK} overflow-hidden rounded-[clamp(16px,2vw,28px)] p-[clamp(40px,5vw,80px)_clamp(28px,4vw,72px)] shadow-[0_60px_120px_-50px_rgba(14,18,23,0.65)] dark:border dark:border-glass-brd dark:shadow-[var(--glow-soft),0_0_120px_-40px_rgba(255,214,10,0.3)]`}>
        <span className="pointer-events-none absolute -z-[1] bottom-[clamp(-30px,-1vw,-10px)] right-[clamp(10px,3vw,48px)] select-none font-cond text-[clamp(110px,17vw,240px)] font-bold leading-[0.74] tracking-[-0.03em] text-white opacity-[0.07]" aria-hidden="true">12</span>
        <SectionHead idx="06" kicker="Growing stronger each year" dark className="mb-14">
          Twelve years, one <span className={U}>standard of execution.</span>
        </SectionHead>

        <div className="grid grid-cols-2 items-center gap-[clamp(40px,6vw,90px)] max-[1024px]:grid-cols-1 max-[1024px]:gap-12">
          <Reveal className="grid grid-cols-3 gap-[30px] max-[760px]:grid-cols-1">
            {STATS.map((s) => (
              <div key={s.label}>
                <b className="block font-cond text-[clamp(48px,7vw,86px)] font-semibold leading-[0.9] text-white [&_em]:not-italic [&_em]:text-yellow"><CountUp to={parseInt(s.num, 10)} /><em>{s.sup}</em></b>
                <span className="mt-3 block max-w-[18ch] text-[13.5px] text-on-dark-mute">{s.label}</span>
              </div>
            ))}
          </Reveal>

          <Reveal delay={0.12}>
            <ul className="flex list-none flex-col gap-0.5">
              {TRUST.map((t) => (
                <li key={t.n} className="flex items-baseline gap-4 border-b border-line-dark py-4">
                  <span className="font-cond text-[15px] text-yellow">/{t.n}</span>
                  <span><b className="font-display text-base font-bold text-white">{t.b}</b> <span className="text-sm text-on-dark-mute">{t.s}</span></span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
       </div>
      </div>
    </section>
  )
}
