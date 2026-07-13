import { Reveal, SectionHead, CountUp } from '../../ui/ui'
import { TECH_PANEL, CornerTicks } from '../../ui/tech'
import { WRAP, SECTION, LEAD, U, DOT, WM, WM_LEFT } from '../../lib/cx'
import { CRITICAL_BANNER, CRITICAL_WORKS } from '../../lib/data'

/* ------------------------------------ 04 · CRITICAL & FLAGSHIP WORKS */
/* Spotlight on the most demanding contracts on record — time-bound railway
   block works, gabion walls, water-front reinforced-soil structures and ROB
   expertise. Lives on the Projects page as the flagship-capability chapter. */
export function CriticalInfra() {
  return (
    <section className={SECTION} id="critical">
      <span className={`${WM} ${WM_LEFT}`} aria-hidden="true">04</span>
      <div className={WRAP}>
        <div className="grid grid-cols-[1fr_0.78fr] items-end gap-x-[clamp(32px,5vw,80px)] gap-y-7 max-[900px]:grid-cols-1">
          <SectionHead idx="04" kicker="Flagship &amp; critical works">
            Complex works, delivered under <span className={U}>time-bound blocks</span><em className={DOT}>.</em>
          </SectionHead>
          <Reveal delay={0.1}>
            <p className={`${LEAD} mt-0`}>
              Time-bound railway block works, gabion wall construction, water-front reinforced soil walls and
              Rail Over Bridge expertise — engineered for rapid deployment without compromising structural
              integrity.
            </p>
          </Reveal>
        </div>

        {/* feature stat band + banner imagery */}
        <Reveal className="mt-[clamp(28px,3vw,44px)] grid grid-cols-[0.62fr_1.4fr_1fr] gap-3 max-[900px]:grid-cols-2 max-[560px]:grid-cols-1">
          <div className="flex flex-col justify-between gap-6 border border-line bg-paper p-[clamp(22px,2vw,30px)] dark:border-glass-brd dark:bg-white/[0.02] max-[900px]:col-span-2 max-[900px]:flex-row max-[560px]:col-span-1 max-[560px]:flex-col">
            <div>
              <b className="flex items-baseline font-cond text-[clamp(46px,5.5vw,76px)] font-semibold leading-[0.85] text-ink dark:text-text">
                <CountUp to={72} /><em className="ml-1 text-[0.42em] not-italic text-yellow-deep">hr</em>
              </b>
              <span className="mt-2.5 block font-mono text-[10.5px] uppercase leading-[1.5] tracking-[0.08em] text-steel">Block window per 500-m stretch</span>
            </div>
            <div className="border-t border-line pt-5 dark:border-glass-brd max-[900px]:border-l max-[900px]:border-t-0 max-[900px]:pl-5 max-[900px]:pt-0 max-[560px]:border-l-0 max-[560px]:border-t max-[560px]:pl-0 max-[560px]:pt-5">
              <b className="flex items-baseline font-cond text-[clamp(38px,4.4vw,60px)] font-semibold leading-[0.85] text-ink dark:text-text">
                <CountUp to={500} /><em className="ml-1 text-[0.4em] not-italic text-yellow-deep">m</em>
              </b>
              <span className="mt-2.5 block font-mono text-[10.5px] uppercase leading-[1.5] tracking-[0.08em] text-steel">Rebuilt formation · zero incidents</span>
              <span className="mt-4 inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.08em] text-steel-2">
                <i className="h-1.5 w-1.5 rounded-full bg-yellow" />Ref · IPRCL Karo Railway Siding
              </span>
            </div>
          </div>
          {CRITICAL_BANNER.map((b) => (
            <div key={b.img} className="group relative h-[clamp(220px,30vw,320px)] overflow-hidden border border-line dark:border-glass-brd max-[560px]:h-[220px]">
              <img className="h-full w-full object-cover grayscale contrast-[1.03] transition-[transform,filter] duration-[800ms] ease-smooth group-hover:scale-[1.04] group-hover:grayscale-0 max-[900px]:grayscale-0" src={b.img} alt={b.alt} loading="lazy" />
              <CornerTicks />
            </div>
          ))}
        </Reveal>

        <div className="mt-[clamp(20px,2vw,28px)] grid grid-cols-2 gap-5 max-[760px]:grid-cols-1">
          {CRITICAL_WORKS.map((c, i) => (
            <Reveal as="div" key={c.n} delay={i * 0.06} className="h-full">
              <article
                className={`${TECH_PANEL} group h-full p-[clamp(26px,2.4vw,38px)] before:absolute before:inset-x-0 before:top-0 before:z-[2] before:h-[3px] before:origin-left before:scale-x-0 before:bg-yellow before:transition-transform before:duration-[400ms] before:ease-smooth before:content-[''] hover:before:scale-x-100`}
              >
                <CornerTicks />
                <div className="relative z-[1] flex h-full flex-col">
                  <span className="font-cond text-[clamp(34px,3.4vw,52px)] font-semibold leading-none text-steel-2">{c.n}</span>
                  <h4 className="mt-4 font-display text-[clamp(18px,1.8vw,23px)] font-bold leading-[1.15] dark:text-text">{c.title}</h4>
                  <p className="mt-2.5 text-[14.5px] leading-[1.55] text-steel">{c.desc}</p>
                  <span className="mt-5 inline-flex w-max items-center gap-2 border-l-2 border-yellow bg-yellow-soft px-3.5 py-1.5 font-mono text-[10.5px] uppercase tracking-[0.06em] text-ink dark:bg-yellow dark:text-on-accent">
                    {c.tag}
                  </span>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
