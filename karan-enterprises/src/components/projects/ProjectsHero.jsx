import { Reveal, CountUp } from '../../ui/ui'
import { CornerTicks } from '../../ui/tech'
import { WRAP } from '../../lib/cx'
import { COMPANY, PROJECTS } from '../../lib/data'

const KPIS = [
  { to: PROJECTS.length, sup: '', label: 'Contracts on record' },
  { to: new Set(PROJECTS.map((p) => p.cat)).size, sup: '', label: 'Disciplines' },
  { to: 3, sup: '', label: 'States' },
  { text: COMPANY.since, label: 'Operating since' },
]

/* --------------------------------------------------------- 00 · HERO */
export function ProjectsHero() {
  const flagship = PROJECTS[0]
  const [dNum, dUnit] = (flagship.duration || '').split(' ')
  return (
    <header className="relative isolate overflow-hidden bg-dark text-on-dark">
      {/* grain + blueprint grid — same material language as the rest of the site */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-[1] bg-grain [background-size:150px_150px] opacity-40 [mix-blend-mode:overlay]"
      />
      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-[1] opacity-50 [background-size:46px_46px] [background-image:linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] [mask-image:radial-gradient(130%_100%_at_15%_-10%,#000_24%,transparent_66%)]"
      />

      <div className={`${WRAP} pb-[clamp(30px,3.6vw,52px)] pt-[clamp(30px,4vw,60px)]`}>
        {/* record header line */}
        <Reveal className="flex flex-wrap items-center justify-between gap-3 border-b border-white/12 pb-4 font-mono text-[11px] uppercase tracking-[0.16em] text-on-dark-mute">
          <span className="inline-flex items-center gap-2.5">
            <a href="/" className="transition-colors hover:text-white">Home</a>
            <span className="text-white/30">/</span>
            <span className="font-semibold text-white">Projects</span>
          </span>
          <span className="max-[560px]:hidden">Contract ledger · {COMPANY.since}—2026 · Jharkhand · Bihar · Chhattisgarh</span>
        </Reveal>

        {/* asymmetric masthead — copy left, flagship feature right */}
        <div className="mt-[clamp(28px,3.4vw,50px)] grid grid-cols-[1.05fr_0.95fr] items-start gap-x-[clamp(32px,5vw,72px)] gap-y-[clamp(28px,3vw,40px)] max-[860px]:grid-cols-1">
          <div>
            <Reveal className="font-mono text-[12px] uppercase tracking-[0.18em] text-yellow">
              <span className="text-yellow-deep">/</span> The contract record
            </Reveal>
            <Reveal delay={0.06}>
              <h1 className="mt-4 font-display text-[clamp(46px,7vw,104px)] font-black uppercase leading-[0.84] tracking-[-0.045em] text-white">
                Selected<br />works
              </h1>
            </Reveal>
            <Reveal delay={0.12}>
              <p className="mt-6 max-w-[52ch] text-[clamp(15px,1.35vw,18px)] leading-[1.6] text-on-dark">
                {PROJECTS.length} completed contracts for Indian Railways, IPRCL, NTPC, RVNL and
                government departments — railway sidings, formation, slope protection, roadways and
                civil works. Delivered, certified, signed off.
              </p>
            </Reveal>

            {/* KPI ledger — stat row directly below the header text */}
            <Reveal delay={0.18} className="mt-[clamp(26px,3vw,44px)] grid grid-cols-4 gap-x-[clamp(14px,1.6vw,24px)] gap-y-5 border-t border-white/12 pt-[clamp(18px,2vw,26px)] max-[560px]:grid-cols-2">
              {KPIS.map((k) => (
                <div key={k.label}>
                  <b className="flex items-baseline font-cond text-[clamp(30px,3.4vw,46px)] font-semibold leading-[0.85] text-white">
                    {k.text ? k.text : <><CountUp to={k.to} /><em className="ml-0.5 text-[0.4em] not-italic text-yellow-deep">{k.sup}</em></>}
                  </b>
                  <span className="mt-2 block font-mono text-[10px] uppercase leading-[1.4] tracking-[0.1em] text-on-dark-mute">{k.label}</span>
                </div>
              ))}
            </Reveal>
          </div>

          {/* flagship feature — one strong image (in colour) fills the right */}
          <Reveal delay={0.14} variant="scale">
            <a href="#ledger" className="group relative block overflow-hidden border border-white/12 bg-white/[0.02]" aria-label={flagship.title}>
              <div className="relative aspect-[16/11] overflow-hidden">
                <img src={flagship.img} alt={flagship.title} className="h-full w-full object-cover contrast-[1.04] transition-transform duration-[900ms] ease-smooth group-hover:scale-[1.05]" />
                <span className="absolute left-0 top-0 inline-flex items-center gap-2 bg-yellow px-3 py-2 font-mono text-[10.5px] font-bold uppercase tracking-[0.12em] text-on-accent">
                  <i className="h-1.5 w-1.5 rounded-full bg-on-accent" />Flagship contract
                </span>
                <CornerTicks tone="border-white" />
              </div>
              <div className="grid grid-cols-[1fr_auto] items-end gap-4 p-[clamp(18px,1.6vw,26px)]">
                <div>
                  <span className="font-mono text-[10.5px] uppercase tracking-[0.1em] text-yellow-deep">{flagship.cat} · {flagship.location}</span>
                  <h2 className="mt-2 font-display text-[clamp(18px,1.7vw,24px)] font-bold leading-[1.15] text-white">{flagship.title}</h2>
                  <span className="mt-1.5 block font-mono text-[11px] leading-[1.4] text-on-dark-mute">{flagship.client}</span>
                </div>
                {dNum && (
                  <div className="shrink-0 border-l border-white/12 pl-4 text-right">
                    <b className="block font-cond text-[clamp(34px,3vw,46px)] font-semibold leading-[0.85] text-white">{dNum}</b>
                    <span className="font-mono text-[10px] uppercase tracking-[0.08em] text-on-dark-mute">{dUnit}</span>
                  </div>
                )}
              </div>
            </a>
          </Reveal>
        </div>
      </div>
    </header>
  )
}
