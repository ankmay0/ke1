import { useState } from 'react'
import Preloader from '../components/Preloader'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import { ScrollProgress } from '../components/Chrome'
import { Reveal, Icon, CountUp, SectionHead } from '../ui'
import { CornerTicks } from '../tech'
import { WRAP, SECTION, SECTION_DARK, BTN_PRIMARY, LEAD, DOT } from '../cx'
import { COMPANY, PROJECTS, PROJECT_GALLERY } from '../data'

/* =====================================================================
   Projects — "The Ledger". A record/archive aesthetic, deliberately
   unlike the Services capabilities dossier: a dark full-bleed record
   header, a ruled inline KPI ledger, and a filterable index of every
   contract that expands into its full portfolio record. Shared brand
   materials (nav/footer/fonts/yellow/grain), new architecture.
   Project VALUES are never disclosed (house rule) — scope, client,
   location, duration and activities carry the credibility instead.
   ===================================================================== */

const CATS = ['All', ...Array.from(new Set(PROJECTS.map((p) => p.cat)))]

const KPIS = [
  { to: PROJECTS.length, sup: '', label: 'Contracts on record' },
  { to: new Set(PROJECTS.map((p) => p.cat)).size, sup: '', label: 'Disciplines' },
  { to: 3, sup: '', label: 'States' },
  { text: COMPANY.since, label: 'Operating since' },
]

/* --------------------------------------------------------- 00 · HERO */
function ProjectsHero() {
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
        <div className="mt-[clamp(28px,3.4vw,50px)] grid grid-cols-[1.05fr_0.95fr] items-end gap-x-[clamp(32px,5vw,72px)] gap-y-[clamp(28px,3vw,40px)] max-[860px]:grid-cols-1">
          <div>
            <Reveal className="font-mono text-[12px] uppercase tracking-[0.18em] text-yellow">
              <span className="text-yellow-deep">/</span> The contract record
            </Reveal>
            <Reveal delay={0.06}>
              <h1 className="mt-4 font-display text-[clamp(46px,7vw,104px)] font-black uppercase leading-[0.84] tracking-[-0.045em] text-white">
                Selected<br />works<em className="not-italic text-yellow">.</em>
              </h1>
            </Reveal>
            <Reveal delay={0.12}>
              <p className="mt-6 max-w-[52ch] text-[clamp(15px,1.35vw,18px)] leading-[1.6] text-on-dark">
                {PROJECTS.length} completed contracts for Indian Railways, IPRCL, NTPC, RVNL and
                government departments — railway sidings, formation, slope protection, roadways and
                civil works. Delivered, certified, signed off.
              </p>
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

        {/* KPI ledger — a clean, contained bordered strip */}
        <Reveal delay={0.18} className="mt-[clamp(30px,3.4vw,50px)] grid grid-cols-4 overflow-hidden rounded-[10px] border border-white/12 max-[560px]:grid-cols-2">
          {KPIS.map((k, i) => (
            <div
              key={k.label}
              className={`flex flex-col gap-1.5 p-[clamp(18px,1.8vw,30px)] ${i % 4 !== 0 ? 'border-l border-white/12' : ''} max-[560px]:[&:nth-child(odd)]:border-l-0 max-[560px]:[&:nth-child(n+3)]:border-t max-[560px]:border-white/12`}
            >
              <b className="flex items-baseline font-cond text-[clamp(38px,4.4vw,60px)] font-semibold leading-[0.85] text-white">
                {k.text ? k.text : <><CountUp to={k.to} /><em className="ml-0.5 text-[0.4em] not-italic text-yellow-deep">{k.sup}</em></>}
              </b>
              <span className="font-mono text-[10.5px] uppercase tracking-[0.1em] text-on-dark-mute">{k.label}</span>
            </div>
          ))}
        </Reveal>
      </div>
    </header>
  )
}

/* ---------------------------------------- one expandable ledger record */
function LedgerRow({ p, n, open, onToggle }) {
  return (
    <div className="border-t border-rule last:border-b dark:border-line">
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={open}
        className="group grid w-full grid-cols-[46px_96px_1fr_auto] items-center gap-x-[clamp(14px,2vw,30px)] py-[clamp(18px,2vw,26px)] text-left transition-colors hover:bg-black/[0.015] dark:hover:bg-white/[0.02] max-[680px]:grid-cols-[34px_1fr_auto]"
      >
        <span className="font-cond text-[clamp(22px,2vw,30px)] font-semibold leading-none text-steel/70">
          {String(n).padStart(2, '0')}
        </span>

        <span className="relative aspect-[4/3] w-full overflow-hidden rounded-[6px] border border-rule dark:border-line max-[680px]:hidden">
          <img src={p.img} alt="" loading="lazy" className="h-full w-full object-cover contrast-[1.03] transition-transform duration-[700ms] ease-smooth group-hover:scale-[1.06]" />
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

      {/* expanded portfolio record */}
      {open && (
        <div className="grid grid-cols-[1.05fr_0.95fr] gap-x-[clamp(28px,4vw,60px)] gap-y-8 pb-[clamp(26px,3.4vw,48px)] pl-[clamp(0px,calc(46px+96px+2vw),160px)] max-[860px]:grid-cols-1 max-[680px]:pl-0">
          <div>
            <p className="max-w-[54ch] text-[clamp(14.5px,1.3vw,17px)] leading-[1.62] text-steel">{p.overview}</p>

            {p.highlight && (
              <div className="mt-6 flex items-start gap-3 border-l-2 border-yellow bg-yellow-soft/60 px-4 py-3 dark:bg-white/[0.04]">
                <span className="mt-[3px] shrink-0 font-mono text-[10px] font-bold uppercase tracking-[0.1em] text-yellow-deep">Highlight</span>
                <span className="text-[13.5px] leading-[1.5] text-ink dark:text-text">{p.highlight}</span>
              </div>
            )}

            <div className="mt-7">
              <span className="font-mono text-[10.5px] uppercase tracking-[0.14em] text-steel">Key activities executed</span>
              <ul className="mt-3 grid grid-cols-2 gap-x-6 gap-y-2.5 max-[460px]:grid-cols-1">
                {p.activities.map((a) => (
                  <li key={a} className="flex items-start gap-2.5 text-[13.5px] leading-[1.4] text-ink dark:text-text">
                    <span className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-yellow" />{a}
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-7 flex flex-wrap gap-2">
              {p.tags.map((t) => (
                <span key={t} className="rounded-full border border-rule px-3 py-1.5 font-mono text-[10.5px] uppercase tracking-[0.06em] text-steel dark:border-line">{t}</span>
              ))}
            </div>
          </div>

          <div>
            <div className="relative overflow-hidden rounded-[8px] border border-rule dark:border-line">
              <div className="relative aspect-[16/11] overflow-hidden">
                <img src={p.img} alt={p.title} loading="lazy" className="h-full w-full object-cover contrast-[1.04]" />
                <CornerTicks />
              </div>
            </div>
            <p className="mt-3.5 font-mono text-[11.5px] leading-[1.55] text-steel">
              <span className="text-yellow-deep">Contract · </span>{p.projectName}
            </p>
          </div>
        </div>
      )}
    </div>
  )
}

/* ---------------------------------------------- 01 · THE LEDGER INDEX */
function Ledger() {
  const [cat, setCat] = useState('All')
  const [openTitle, setOpenTitle] = useState(PROJECTS[0].title)
  const list = cat === 'All' ? PROJECTS : PROJECTS.filter((p) => p.cat === cat)

  const countFor = (c) => (c === 'All' ? PROJECTS.length : PROJECTS.filter((p) => p.cat === c).length)

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
        <div className="mt-[clamp(6px,1vw,14px)]">
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

/* ------------------------------------------------ 02 · REACH / STATS */
const REACH = [
  { to: PROJECTS.filter((p) => p.cat === 'Railway').length, label: 'Railway contracts' },
  { to: PROJECTS.filter((p) => p.cat === 'Geotechnical').length, label: 'Geotechnical works' },
  { to: PROJECTS.filter((p) => p.cat === 'Roadway').length, label: 'Roadway contracts' },
  { to: 9, sup: '', label: 'PSU & govt clients' },
]

function Reach() {
  return (
    <section className={`${SECTION_DARK} py-[var(--sec)]`}>
      <div className={WRAP}>
        <div className="grid grid-cols-[0.9fr_1.1fr] items-end gap-x-[clamp(32px,5vw,72px)] gap-y-8 max-[860px]:grid-cols-1">
          <SectionHead idx="02" kicker="Delivered across the region" dark>
            Jharkhand<em className={DOT}>.</em> Bihar. Chhattisgarh.
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

/* ---------------------------------------------------- 03 · FIELD GALLERY */
function Gallery() {
  return (
    <section className={`${SECTION} bg-surface dark:bg-transparent`} id="gallery">
      <div className={WRAP}>
        <SectionHead idx="03" kicker="From the field">
          On site<em className={DOT}>.</em>
        </SectionHead>
        <Reveal delay={0.05}>
          <p className={LEAD}>Authentic imagery from our railway, slope-protection and roadway sites.</p>
        </Reveal>

        <div className="mt-[clamp(26px,3vw,44px)] grid grid-cols-4 auto-rows-[clamp(120px,13vw,188px)] gap-[clamp(8px,1vw,14px)] max-[860px]:grid-cols-3 max-[560px]:grid-cols-2">
          {PROJECT_GALLERY.map((g, i) => (
            <Reveal
              key={g.img}
              delay={(i % 4) * 0.05}
              variant="scale"
              className={`group relative overflow-hidden rounded-[8px] border border-rule dark:border-line ${i % 5 === 0 ? 'col-span-2 row-span-2' : ''}`}
            >
              <img src={g.img} alt={g.alt} loading="lazy" className="h-full w-full object-cover contrast-[1.04] transition-transform duration-[800ms] ease-smooth group-hover:scale-[1.07]" />
              <span className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              <span className="pointer-events-none absolute bottom-0 left-0 right-0 translate-y-2 p-3 font-mono text-[10.5px] leading-[1.35] text-white opacity-0 transition-[opacity,transform] duration-300 group-hover:translate-y-0 group-hover:opacity-100">{g.alt}</span>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ------------------------------------------------------------ 04 · CTA */
function ProjectsCTA() {
  return (
    <section className="relative pb-[clamp(48px,7vw,110px)] pt-[clamp(8px,1vw,16px)]">
      <div className={WRAP}>
        <Reveal className="relative overflow-hidden rounded-[14px] border border-rule bg-dark px-[clamp(24px,4vw,64px)] py-[clamp(36px,5vw,72px)] text-on-dark dark:border-line">
          <span aria-hidden="true" className="pointer-events-none absolute inset-0 -z-[1] bg-grain [background-size:150px_150px] opacity-40 [mix-blend-mode:overlay]" />
          <div className="grid grid-cols-[1.1fr_auto] items-center gap-x-[clamp(24px,4vw,60px)] gap-y-8 max-[720px]:grid-cols-1">
            <div>
              <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-yellow"><span className="text-yellow-deep">/</span> Add your project to the record</span>
              <h2 className="mt-4 font-display text-[clamp(30px,4.2vw,56px)] font-black uppercase leading-[0.94] tracking-[-0.03em] text-white">
                Have a contract<br />to execute<em className="not-italic text-yellow">?</em>
              </h2>
              <p className="mt-5 max-w-[46ch] text-[clamp(15px,1.35vw,18px)] leading-[1.6] text-on-dark">
                Railway sidings, formation, slope protection, roadways or civil works — talk to the team that delivers, certifies and signs off on time.
              </p>
            </div>
            <a className={`${BTN_PRIMARY} justify-self-start`} href="/#quote">Request a quote{Icon.arrow}</a>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

/* ------------------------------------------------------------ PAGE */
export default function ProjectsPage() {
  return (
    <>
      <ScrollProgress />
      <Preloader />
      <Nav />
      <main>
        <ProjectsHero />
        <Ledger />
        <Reach />
        <Gallery />
        <ProjectsCTA />
      </main>
      <Footer />

      <a
        className="fixed bottom-[22px] right-[22px] z-[150] grid h-14 w-14 place-items-center rounded-full bg-whatsapp shadow-[0_14px_40px_-8px_rgba(37,211,102,0.7)] transition-transform duration-[250ms] ease-smooth hover:scale-[1.08] [&_svg]:h-[30px] [&_svg]:w-[30px]"
        href={`https://wa.me/${COMPANY.phoneRaw}`}
        target="_blank"
        rel="noopener"
        aria-label="Chat on WhatsApp"
      >
        {Icon.whatsapp}
      </a>
    </>
  )
}
