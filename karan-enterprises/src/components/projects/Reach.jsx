import { Reveal, SectionHead, CountUp } from '../../ui/ui'
import { WRAP, SECTION_DARK, DOT } from '../../lib/cx'
import { PROJECTS } from '../../lib/data'

/* ------------------------------------------------ 02 · REACH / STATS */
const REACH = [
  { to: PROJECTS.filter((p) => p.cat === 'Railway').length, label: 'Railway contracts' },
  { to: PROJECTS.filter((p) => p.cat === 'Geotechnical').length, label: 'Geotechnical works' },
  { to: PROJECTS.filter((p) => p.cat === 'Roadway').length, label: 'Roadway contracts' },
  { to: 9, sup: '', label: 'PSU & govt clients' },
]

export function Reach() {
  return (
    <section className={`${SECTION_DARK} py-[var(--sec)]`}>
      <div className={WRAP}>
        <div className="grid grid-cols-[0.9fr_1.1fr] items-end gap-x-[clamp(32px,5vw,72px)] gap-y-8 max-[860px]:grid-cols-1">
          <SectionHead idx="02" kicker="Delivered wherever the work is" dark>
            Rail<em className={DOT}>.</em> Road. Every terrain in between.
          </SectionHead>
          <Reveal delay={0.06}>
            <p className="text-[clamp(15px,1.4vw,18px)] leading-[1.62] text-on-dark">
              A decade of execution for Indian Railways zonal units, IPRCL, NTPC, RVNL and state
              works departments — coal-siding infrastructure, slope protection, roadways and civil
              structures, each delivered to client and RDSO specification.
            </p>
          </Reveal>
        </div>

        <Reveal delay={0.1} className="mt-[clamp(30px,3.6vw,52px)] grid grid-cols-4 overflow-hidden rounded-[10px] border border-white/12 max-[560px]:grid-cols-2">
          {REACH.map((k, i) => (
            <div
              key={k.label}
              className={`flex flex-col gap-1.5 p-[clamp(18px,1.8vw,30px)] ${i % 4 !== 0 ? 'border-l border-white/12' : ''} max-[560px]:[&:nth-child(odd)]:border-l-0 max-[560px]:[&:nth-child(n+3)]:border-t max-[560px]:border-white/12`}
            >
              <b className="flex items-baseline font-cond text-[clamp(38px,4.4vw,60px)] font-semibold leading-[0.85] text-white">
                <CountUp to={k.to} /><em className="ml-0.5 text-[0.4em] not-italic text-yellow-deep">{k.sup ?? '+'}</em>
              </b>
              <span className="font-mono text-[10.5px] uppercase tracking-[0.1em] text-on-dark-mute">{k.label}</span>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  )
}
