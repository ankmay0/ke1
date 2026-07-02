import { motion } from 'framer-motion'
import Preloader from '../components/Preloader'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import { ScrollProgress, Magnetic } from '../components/Chrome'
import { Reveal, SectionHead, Icon, CountUp } from '../ui'
import { MOTION_OFF } from '../motion'
import { PANEL_DARK, TECH_PANEL, CornerTicks } from '../tech'
import {
  WRAP, SECTION, BTN_PRIMARY,
  SEC_EYEBROW, H_SEC, LEAD, U, DOT, WM, WM_LEFT,
} from '../cx'
import {
  COMPANY, SERVICES_FULL, RF_FIELD_STRIP, RF_SEQUENCE, CRITICAL_BANNER,
  CRITICAL_WORKS, DELIVERY_PHASES, EXEC_STAGES, SAFETY_STANDARDS, COMPLIANCE,
  CLIENTS, TESTIMONIALS,
} from '../data'

/* =====================================================================
   Services — a content-first capabilities & delivery dossier.
   The opening is deliberately NOT a hero: no photo, no aurora, no glass
   stat bar. It reads like the cover of an engineering directory — a
   typographic masthead over a full-width index of the eight disciplines,
   with credentials kept as a quiet static caption. Five elevated chapters
   follow; the cursor-tracked sticky capability list is the centrepiece.
   Light + dark parity throughout; motion degrades to static in SHOT mode.
   ===================================================================== */

const INTRO_META = ['08 disciplines', '230+ workforce', `Since ${COMPANY.since}`, COMPANY.rdso]

/* Masthead headline. Because this H1 sits at the very top (always in view
   on load, often behind the preloader), its clip-mask reveal is driven on
   MOUNT — not whileInView, which never reliably fires for above-the-fold
   content and would leave the text trapped below its overflow-hidden mask.
   Renders fully static in SHOT / reduced-motion. */
const TITLE_LINES = ['Capabilities', <span key="d">&amp; delivery<em className={DOT}>.</em></span>]
const TITLE_CLASS =
  'font-display text-[clamp(40px,6.4vw,92px)] font-black uppercase leading-[0.86] tracking-[-0.045em] text-ink dark:text-text'

function MastheadTitle() {
  if (MOTION_OFF) {
    return (
      <h1 className={TITLE_CLASS}>
        {TITLE_LINES.map((l, i) => <span className="block" key={i}>{l}</span>)}
      </h1>
    )
  }
  return (
    <h1 className={TITLE_CLASS}>
      {TITLE_LINES.map((l, i) => (
        <span className="block overflow-hidden pb-[0.06em] -mb-[0.06em]" key={i}>
          <motion.span
            className="block will-change-transform"
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

/* ---------------------------------------------------------- OPENING */
function ServicesIntro() {
  return (
    <header className="relative isolate overflow-hidden border-b border-line bg-surface pb-[clamp(34px,4vw,58px)] pt-[clamp(38px,4.6vw,72px)] dark:bg-transparent">
      <span
        aria-hidden="true"
        className="pointer-events-none absolute right-[calc(-1*clamp(8px,3vw,52px))] top-[clamp(-6px,1vw,16px)] -z-[1] select-none font-cond text-[clamp(120px,18vw,260px)] font-bold leading-[0.7] tracking-[-0.04em] text-ink opacity-[0.035] dark:text-white dark:opacity-[0.05]"
      >
        SVC
      </span>

      <div className={WRAP}>
        {/* document masthead */}
        <Reveal className="flex flex-wrap items-center justify-between gap-3 font-mono text-[11px] uppercase tracking-[0.16em] text-steel">
          <span className="inline-flex items-center gap-2.5">
            <a href="/" className="transition-colors hover:text-ink dark:hover:text-text">Home</a>
            <span className="text-line-2">/</span>
            <span className="font-semibold text-ink dark:text-text">Services</span>
          </span>
          <span className="text-steel-2 max-[560px]:hidden">Capabilities directory · 01—08</span>
        </Reveal>

        <div className="mt-[clamp(20px,2.4vw,34px)] grid grid-cols-[1fr_auto] items-end gap-x-[clamp(24px,4vw,64px)] gap-y-6 max-[860px]:grid-cols-1">
          <MastheadTitle />
          <Reveal delay={0.12} className="max-w-[clamp(280px,30vw,400px)] border-l-2 border-yellow pl-5 max-[860px]:border-l-0 max-[860px]:pl-0">
            <p className="text-[clamp(14.5px,1.25vw,17px)] leading-[1.62] text-steel">
              Eight engineering disciplines, executed under RDSO specifications and the Indian Railways
              Construction Manual — built for safety, performance and long-term durability.
            </p>
          </Reveal>
        </div>

        {/* credential caption */}
        <Reveal delay={0.06} className="mt-[clamp(18px,2vw,30px)] flex flex-wrap items-center gap-x-7 gap-y-2.5 font-mono text-[10.5px] uppercase tracking-[0.1em] text-steel">
          {INTRO_META.map((m) => (
            <span key={m} className="inline-flex items-center gap-2.5">
              <i className="h-1.5 w-1.5 rounded-full bg-yellow dark:shadow-[0_0_8px_rgba(255,214,10,0.8)]" />
              {m}
            </span>
          ))}
        </Reveal>
      </div>
    </header>
  )
}

/* ----------------------------------------------- 01 · CAPABILITIES */
/* Visual capability gallery — the eight disciplines as full-bleed photo
   tiles. At rest the imagery leads (number badge + title only); detail
   (description + tags) expands on hover, and stays open on touch / small
   screens where there is no hover. */
function CapabilitiesGrid() {
  return (
    <section className={SECTION} id="services">
      <span className={WM} aria-hidden="true">01</span>
      <div className={WRAP}>
        <div className="grid grid-cols-[1fr_0.9fr] items-end gap-x-[clamp(32px,5vw,80px)] gap-y-6 max-[900px]:grid-cols-1">
          <SectionHead idx="01" kicker="Core competencies">
            Eight disciplines. <span className={U}>One standard</span><em className={DOT}>.</em>
          </SectionHead>
          <Reveal delay={0.1}>
            <p className={`${LEAD} mt-0`}>
              Each capability is delivered to specification — the same engineering discipline, safety
              culture and documentation our government and PSU clients rely on.
            </p>
          </Reveal>
        </div>

        <div className="mt-[clamp(32px,3.6vw,52px)] grid grid-cols-4 gap-[clamp(10px,1vw,16px)] max-[900px]:grid-cols-2 max-[520px]:grid-cols-1">
          {SERVICES_FULL.map((s, i) => (
            <Reveal
              as="article"
              variant="scale"
              key={s.n}
              delay={Math.min(i * 0.05, 0.32)}
              className="group relative flex flex-col overflow-hidden border border-line bg-paper transition-colors duration-300 hover:border-ink dark:border-glass-brd dark:bg-white/[0.02] dark:hover:border-[rgba(255,214,10,0.5)]"
            >
              {/* image — desaturated at rest so eight mismatched site photos
                  read as one editorial set; resolves to full colour on hover */}
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={s.img}
                  alt={s.short}
                  loading="lazy"
                  className="h-full w-full object-cover grayscale contrast-[1.03] transition-[transform,filter] duration-[800ms] ease-smooth group-hover:scale-[1.05] group-hover:grayscale-0 max-[900px]:grayscale-0"
                />
                {/* solid index plate — a flat colour block, not a scrim */}
                <span className="absolute left-0 top-0 grid h-9 w-11 place-items-center bg-yellow font-cond text-[15px] font-semibold leading-none text-on-accent">
                  {s.n}
                </span>
                <CornerTicks />
              </div>

              {/* caption plate — title/spec sit on a flat surface below the image */}
              <div className="relative flex flex-1 flex-col p-[clamp(15px,1.2vw,19px)]">
                <div className="flex items-baseline justify-between gap-2">
                  <h3 className="font-display text-[clamp(16px,1.4vw,20px)] font-bold leading-[1.12] text-ink dark:text-text">
                    {s.short}
                  </h3>
                  <span className="shrink-0 font-mono text-[10px] tracking-[0.06em] text-steel-2">/{s.n}</span>
                </div>
                <p className="mt-2.5 flex-1 text-[12.5px] leading-[1.5] text-steel">{s.desc}</p>
                <div className="mt-4 flex flex-wrap gap-1.5 border-t border-line pt-3.5 dark:border-glass-brd">
                  {s.tags.map((t) => (
                    <span key={t} className="border border-line px-2 py-[3px] font-mono text-[9px] uppercase tracking-[0.06em] text-steel dark:border-glass-brd">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

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

function ProofBand() {
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

/* ---------------------------------- 02 · RAILWAY FORMATION & REHAB */
function RailwayFormationRehab() {
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
          {RF_SEQUENCE.map((p, i) => (
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

/* ------------------------------------ 03 · CRITICAL INFRASTRUCTURE */
function CriticalInfra() {
  return (
    <section className={SECTION} id="critical">
      <span className={`${WM} ${WM_LEFT}`} aria-hidden="true">03</span>
      <div className={WRAP}>
        <div className="grid grid-cols-[1fr_0.78fr] items-end gap-x-[clamp(32px,5vw,80px)] gap-y-7 max-[900px]:grid-cols-1">
          <SectionHead idx="03" kicker="Critical railway infrastructure">
            500 metres rebuilt in a <span className={U}>72-hour block</span><em className={DOT}>.</em>
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

/* ------------------------------------------ 04 · PROJECT DELIVERY */
function ProjectDelivery() {
  return (
    <section className="relative py-[clamp(40px,6vw,96px)]" id="process">
      <div className={WRAP}>
        <div className={`${PANEL_DARK} overflow-hidden rounded-[clamp(16px,2vw,28px)] p-[clamp(36px,4.5vw,72px)_clamp(24px,4vw,64px)] shadow-[0_60px_120px_-50px_rgba(14,18,23,0.65)]`}>
          {/* blueprint grid — gives the type-only framework panel a visual anchor
              and keeps the band reading as elevated even in dark theme */}
          <span
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 -z-[1] opacity-60 [background-size:40px_40px] [background-image:linear-gradient(rgba(255,255,255,0.045)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.045)_1px,transparent_1px)] [mask-image:radial-gradient(120%_95%_at_82%_0%,#000_28%,transparent_74%)]"
          />
          <div className="relative max-w-[940px]">
            <SectionHead idx="04" kicker="Project execution framework" dark>
              Efficient planning. Expert execution. <span className={U}>Delivered with excellence</span><em className={DOT}>.</em>
            </SectionHead>
            <Reveal delay={0.1}>
              <p className="mt-[18px] max-w-[64ch] text-[clamp(15px,1.4vw,18px)] leading-[1.6] text-on-dark-mute">
                A streamlined approach that ensures safety, quality, timely delivery and seamless
                coordination at every stage — four planning phases, five execution gates.
              </p>
            </Reveal>
          </div>

          {/* four planning phases */}
          <div className="mt-[clamp(32px,3.5vw,52px)] grid grid-cols-2 gap-px overflow-hidden rounded-[12px] border border-white/10 bg-white/10 max-[760px]:grid-cols-1">
            {DELIVERY_PHASES.map((p) => (
              <div className="bg-dark p-[clamp(26px,2.6vw,42px)]" key={p.n}>
                <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-on-dark-mute">— Phase {p.n}</span>
                <div className="mt-2 font-cond text-[clamp(40px,4vw,60px)] font-semibold leading-none text-yellow">{p.n}</div>
                <h3 className="mt-3 font-display text-[clamp(18px,1.8vw,23px)] font-bold text-white">{p.title}</h3>
                <p className="mt-2 text-[14px] leading-[1.55] text-on-dark-mute">{p.desc}</p>
                <ul className="mt-5 grid gap-2.5">
                  {p.checks.map((ch) => (
                    <li key={ch} className="flex items-start gap-2.5 text-[13.5px] leading-[1.45] text-on-dark">
                      <span className="mt-px shrink-0 [&_svg]:h-[18px] [&_svg]:w-[18px]">{Icon.check}</span>
                      {ch}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* five execution stages — connected timeline */}
          <Reveal className="mt-[clamp(36px,4vw,64px)] border-t border-line-dark pt-[clamp(28px,3vw,40px)]">
            <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-yellow-deep">Execution stages</span>
            <div className="mt-7 grid grid-cols-5 gap-x-7 gap-y-10 max-[1024px]:grid-cols-2 max-[560px]:grid-cols-1">
              {EXEC_STAGES.map((e) => (
                <div className="relative border-t border-white/[0.14] pt-7" key={e.n}>
                  <span aria-hidden="true" className="absolute left-0 top-[-5px] h-[10px] w-[10px] rounded-full bg-yellow shadow-[0_0_12px_rgba(255,214,10,0.85)]" />
                  <span className="font-cond text-[clamp(30px,2.6vw,42px)] font-semibold leading-none text-yellow">{e.n}</span>
                  <h3 className="mt-3 font-display text-[15px] font-bold text-white">{e.title}</h3>
                  <p className="mt-2 text-[13px] leading-[1.5] text-on-dark-mute">{e.desc}</p>
                  <span className="mt-3.5 block font-mono text-[10px] uppercase tracking-[0.06em] text-steel-2">{e.tag}</span>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

/* -------------------------------------------- 05 · SAFETY & QUALITY */
function SafetyQuality() {
  return (
    <section className={SECTION} id="safety">
      <span className={WM} aria-hidden="true">05</span>
      <div className={WRAP}>
        <div className="max-w-[760px]">
          <SectionHead idx="05" kicker="Safety & quality assurance">
            Safety. Quality. Compliance<em className={DOT}>.</em>
          </SectionHead>
          <p className={LEAD}>
            Engineering infrastructure that meets the highest operational and regulatory standards — at
            every phase, on every site.
          </p>
        </div>

        <div className="mt-[clamp(28px,3vw,44px)] grid grid-cols-[0.82fr_1.18fr] items-start gap-[clamp(16px,1.6vw,24px)] max-[900px]:grid-cols-1">
          {/* compliance dossier — the section's trust marks made visual */}
          <Reveal className="min-[900px]:sticky min-[900px]:top-24">
            <aside className={`${PANEL_DARK} overflow-hidden rounded-[clamp(14px,1.6vw,20px)] p-[clamp(26px,2.6vw,38px)]`}>
              <span className="font-mono text-[10.5px] uppercase tracking-[0.14em] text-yellow-deep">Compliance dossier</span>
              <div className="mt-4 font-cond text-[clamp(23px,2.4vw,31px)] font-semibold leading-[1.05] text-white">{COMPANY.rdso}</div>
              <span className="mt-1.5 block font-mono text-[10.5px] uppercase tracking-[0.08em] text-on-dark-mute">RDSO specification · railway formation</span>
              <ul className="mt-6 grid gap-0">
                {COMPLIANCE.map((c) => (
                  <li key={c} className="flex items-start gap-3 border-t border-line-dark py-3.5 text-[13.5px] leading-[1.4] text-on-dark">
                    <span className="mt-px shrink-0 [&_svg]:h-[17px] [&_svg]:w-[17px]">{Icon.check}</span>
                    {c}
                  </li>
                ))}
              </ul>
              <div className="mt-6 flex items-center gap-3.5 border-t border-line-dark pt-6">
                <img className="h-9 w-auto" src="/assets/maccaferri-logo.png" alt="Maccaferri" />
                <span className="font-mono text-[10px] uppercase leading-[1.5] tracking-[0.1em] text-on-dark-mute">Authorised applicator · since {COMPANY.since}</span>
              </div>
            </aside>
          </Reveal>

          {/* four assurance standards */}
          <div className="grid grid-cols-2 gap-[clamp(14px,1.4vw,20px)] max-[560px]:grid-cols-1">
            {SAFETY_STANDARDS.map((s, i) => (
              <Reveal as="div" key={s.n} delay={i * 0.06} className="h-full">
                <article className={`${TECH_PANEL} group h-full p-[clamp(24px,2.2vw,34px)]`}>
                  <CornerTicks />
                  <div className="relative z-[1]">
                    <span className="font-cond text-[15px] font-semibold tracking-[0.06em] text-yellow-deep">/{s.n}</span>
                    <h4 className="mt-3 font-display text-[clamp(17px,1.6vw,21px)] font-bold dark:text-text">{s.title}</h4>
                    <p className="mt-2.5 text-[13.5px] leading-[1.6] text-steel">{s.desc}</p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

/* ------------------------------------------------------------- CTA */
function ServicesCTA() {
  return (
    <section className="relative pb-[clamp(48px,7vw,110px)] pt-[clamp(8px,1vw,16px)]">
      <div className={WRAP}>
        <div className={`${PANEL_DARK} grid grid-cols-[1.2fr_0.9fr] items-center gap-[clamp(28px,4vw,64px)] rounded-[clamp(16px,2vw,28px)] p-[clamp(34px,4.4vw,68px)] max-[860px]:grid-cols-1`}>
          <div>
            <div className={`${SEC_EYEBROW} border-white/[0.28]`}>
              <span className="font-mono text-[13px] font-bold tracking-[0.04em] text-white">→</span>
              <span className="inline-flex items-center gap-2.5 font-mono text-xs font-medium uppercase tracking-[0.1em] text-on-dark-mute">Let's build</span>
            </div>
            <h2 className={`${H_SEC} max-w-[16ch] text-white`}>Ready to start a <span className={U}>build</span><em className={DOT}>?</em></h2>
            <p className="mt-5 max-w-[46ch] text-[clamp(14.5px,1.3vw,17px)] leading-[1.6] text-on-dark-mute">
              Share your scope, block window and specifications — we respond with a capability brief and a phased execution plan.
            </p>
          </div>

          <div className="flex flex-col gap-3.5">
            <Magnetic className="w-full"><a className={`${BTN_PRIMARY} w-full justify-between`} href="/#quote">Begin a project {Icon.arrow}</a></Magnetic>
            <a className="flex items-center justify-between gap-4 rounded-[12px] border border-white/[0.16] bg-white/[0.04] px-5 py-4 transition-[border-color,background] duration-300 ease-smooth hover:border-yellow hover:bg-white/[0.08]" href={`tel:+${COMPANY.phoneRaw}`}>
              <span className="flex items-center gap-3 text-white [&_svg]:h-[18px] [&_svg]:w-[18px] [&_svg]:text-yellow">{Icon.phone}
                <span className="font-display text-[15px] font-bold">{COMPANY.phone}</span>
              </span>
              <span className="font-mono text-[10px] uppercase tracking-[0.1em] text-on-dark-mute max-[420px]:hidden">Call</span>
            </a>
            <a className="flex items-center justify-between gap-4 rounded-[12px] border border-white/[0.16] bg-white/[0.04] px-5 py-4 transition-[border-color,background] duration-300 ease-smooth hover:border-yellow hover:bg-white/[0.08]" href={`mailto:${COMPANY.emails[0]}`}>
              <span className="flex min-w-0 items-center gap-3 text-white [&_svg]:h-[18px] [&_svg]:w-[18px] [&_svg]:shrink-0 [&_svg]:text-yellow">{Icon.mail}
                <span className="truncate font-display text-[15px] font-bold">{COMPANY.emails[0]}</span>
              </span>
              <span className="font-mono text-[10px] uppercase tracking-[0.1em] text-on-dark-mute max-[420px]:hidden">Email</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ------------------------------------------------------------ PAGE */
export default function ServicesPage() {
  return (
    <>
      <ScrollProgress />
      <Preloader />
      <Nav />
      <main>
        <ServicesIntro />
        <CapabilitiesGrid />
        <ProofBand />
        <RailwayFormationRehab />
        <CriticalInfra />
        <ProjectDelivery />
        <SafetyQuality />
        <ServicesCTA />
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
