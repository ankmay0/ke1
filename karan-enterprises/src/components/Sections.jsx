import { useLayoutEffect, useRef, useState } from 'react'
import {
  ABOUT_CALLOUTS, SERVICES, SEQUENCE, PROCESS,
  GEO_CAPS, PROJECTS, STATS, TRUST, CLIENTS, TESTIMONIALS, COMPLIANCE,
} from '../data'
import { Reveal, SectionHead, GeoIcon, Icon, CountUp } from '../ui'
import { gsap, MOTION_OFF, useScrubScale, useColorMorph } from '../motion'
import { TiltPlate } from '../fx'
import {
  WRAP, SECTION, SECTION_DARK, BTN_PRIMARY, BTN_DARK,
  SEC_EYEBROW, IDX, KICKER, H_SEC, LEAD, U, DOT, WM, WM_LEFT,
  CARD, ICON_CHIP, METRIC_STRIP, metricPill, METRIC_DOT,
} from '../cx'

/* ------------------------------------------------------------------ ABOUT */
export function About() {
  const photo = useScrubScale({ from: 1.16, to: 1 })
  return (
    <section className={`${SECTION} z-[2]`} id="about">
      <span className={`${WM} ${WM_LEFT}`} aria-hidden="true">01</span>
      <div className={`${WRAP} grid grid-cols-[1.05fr_0.95fr] items-start gap-[clamp(36px,5vw,80px)] max-[1024px]:grid-cols-1`}>
        <Reveal>
          <div className={`${SEC_EYEBROW} border-rule`}>
            <span className={IDX}>01</span><span className={KICKER}>About M/s Karan Enterprises</span>
          </div>
          <h2 className={H_SEC}>Integrated infrastructure,<br />delivered end to end<em className={DOT}>.</em></h2>
          <p className={LEAD}>
            Since 2013, M/s Karan Enterprises has executed railway formation, roadway and civil
            infrastructure for government bodies and PSUs — combining RDSO-grade engineering, a
            230-strong workforce and modern machinery to deliver safely and on schedule.
          </p>

          <ul className="mt-8 list-none border-t border-line">
            {ABOUT_CALLOUTS.map((c) => (
              <li
                key={c.n}
                className="flex items-baseline gap-5 border-b border-line px-0.5 py-4 transition-[padding-left] duration-300 ease-smooth hover:pl-2 dark:hover:[background:linear-gradient(90deg,var(--glass),transparent)]"
              >
                <span className="shrink-0 font-cond text-sm tracking-[0.12em] text-yellow-deep">{c.n}</span>
                <span>{c.text}</span>
                <span className="font-display text-base font-semibold text-ink dark:text-text" aria-hidden="true">{Icon.arrow}</span>
              </li>
            ))}
          </ul>

          <a className={`${BTN_PRIMARY} mt-[30px]`} href="#quote">Start a conversation {Icon.arrow}</a>
        </Reveal>

        <Reveal delay={0.15} className="relative mt-0 max-[1024px]:mt-0">
          <span className="absolute right-[-16px] top-[-16px] -z-[1] h-[120px] w-[120px] rounded border-[3px] border-yellow dark:shadow-glow-y" />
          <TiltPlate strength={6}>
            <div className="relative aspect-[4/5] overflow-hidden rounded dark:shadow-glow-soft">
              <img ref={photo} className="h-full w-full object-cover" src="/assets/photo2.jpg" alt="Site engineer at a railway formation site" />
              <span aria-hidden="true" />
              <span className="font-mono">ON-SITE · RANCHI</span>
            </div>
          </TiltPlate>
          <div className="absolute bottom-7 left-[-22px] max-w-[230px] rounded bg-yellow px-6 py-5 text-ink shadow-[0_24px_50px_-20px_rgba(0,0,0,0.4)] dark:shadow-[var(--glow-y),0_24px_50px_-20px_rgba(0,0,0,0.7)] max-[760px]:left-0">
            <b className="block font-cond text-[40px] font-semibold leading-none">2013</b>
            <span className="text-[13px] font-semibold">Delivering India's rail &amp; road infrastructure since</span>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

/* --------------------------------------------------------------- SERVICES */
export function Services() {
  return (
    <section className={SECTION} id="services">
      <div className={WRAP}>
        <div className="mb-[52px] grid grid-cols-[1fr_auto] items-end gap-[30px] max-[760px]:grid-cols-1">
          <SectionHead idx="02" kicker="Our Capabilities">
            Solutions engineered to perform
          </SectionHead>
          <Reveal delay={0.1}>
            <a className={BTN_DARK} href="#quote">Request a capability brief {Icon.arrow}</a>
          </Reveal>
        </div>

        <div className="grid grid-cols-4 gap-5 max-[1024px]:grid-cols-2 max-[760px]:grid-cols-1">
          {SERVICES.map((s, i) => (
            <Reveal
              as="article"
              variant="scale"
              key={s.title}
              delay={i * 0.08}
              className="group relative isolate flex min-h-[400px] items-end overflow-hidden rounded text-white transition-[transform,box-shadow] duration-[400ms] ease-smooth hover:-translate-y-[5px] hover:shadow-[0_30px_50px_-28px_rgba(0,0,0,0.5)] after:absolute after:inset-0 after:-z-[1] after:transition-[background] after:duration-[400ms] after:content-[''] after:[background:linear-gradient(0deg,rgba(14,18,23,0.96)_18%,rgba(14,18,23,0.55)_54%,rgba(14,18,23,0.12)_100%)] hover:after:[background:linear-gradient(0deg,rgba(14,18,23,0.97)_22%,rgba(20,40,30,0.55)_72%)] dark:shadow-glow-soft dark:[outline:1px_solid_var(--glass-brd)] dark:[outline-offset:-1px] dark:hover:shadow-[var(--glow-soft),var(--glow-y)]"
            >
              <img className="absolute inset-0 -z-[2] h-full w-full object-cover transition-transform duration-[900ms] ease-smooth group-hover:scale-[1.07]" src={s.img} alt={s.title} loading="lazy" />
              <span className="absolute left-[18px] top-[18px] z-[1] rounded-[3px] bg-yellow px-[11px] py-[5px] font-cond text-[15px] font-semibold tracking-[0.06em] text-ink">{s.n}</span>
              <div className="p-6">
                <h3 className="font-display text-[21px] font-bold">{s.title}</h3>
                <p className="mt-2.5 text-sm leading-[1.5] text-white/[0.84]">{s.desc}</p>
                <div className="mt-4 flex flex-wrap gap-[7px]">
                  {s.tags.map((t, ti) => (
                    <span
                      key={t}
                      className={`rounded-full border border-white/30 px-[11px] py-[5px] font-body text-[11px] font-semibold tracking-[0.03em] text-white transition-[background,color,border-color] duration-300 dark:border-white/[0.32] ${ti === 0 ? 'group-hover:border-yellow group-hover:bg-yellow group-hover:text-ink' : ''}`}
                    >
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

/* ------------------------------------------------------- RAILWAY FORMATION */
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

/* ------------------------------------------------------------- GEOTECH */
export function Geotech() {
  return (
    <section className={SECTION} id="geotech">
      <div className={`${WRAP} grid grid-cols-[0.85fr_1.15fr] items-start gap-[clamp(40px,6vw,90px)] max-[1024px]:grid-cols-1`}>
        <Reveal className="min-[1025px]:sticky min-[1025px]:top-[104px] min-[1025px]:self-start">
          <div className={`${SEC_EYEBROW} border-rule`}>
            <span className={IDX}>04</span><span className={KICKER}>Specialised Capability</span>
          </div>
          <h2 className={H_SEC}>Advanced Geotechnical Solutions<em className={DOT}>.</em></h2>
          <p className={LEAD}>
            Leveraging globally recognised geotechnical technologies and high-performance materials to
            deliver durable, sustainable and engineered solutions for complex infrastructure projects.
          </p>
          <div className="mt-[26px] inline-flex flex-col gap-[14px] rounded border border-line bg-paper p-[26px] dark:border-glass-brd dark:bg-glass dark:[backdrop-filter:blur(14px)_saturate(130%)]">
            <span className="text-[11px] font-bold uppercase tracking-[0.16em] text-steel">Powered by</span>
            <img className="w-[220px] max-w-full" src="/assets/maccaferri-logo.png" alt="Maccaferri Engineering Solutions" />
            <small className="text-[13px] leading-[1.5] text-steel">Authorised applicator of Maccaferri engineered systems — gabions, geocell, reinforced soil and erosion control.</small>
          </div>
        </Reveal>

        <div className="grid grid-cols-2 gap-[18px] max-[620px]:grid-cols-1">
          {GEO_CAPS.map((c, i) => (
            <Reveal
              as="article"
              variant="scale"
              key={c.title}
              delay={i * 0.06}
              className={`${CARD} group p-[26px_24px] hover:-translate-y-1 before:absolute before:inset-x-0 before:top-0 before:h-[3px] before:origin-left before:scale-x-0 before:bg-yellow before:transition-transform before:duration-[350ms] before:ease-smooth before:content-[''] hover:before:scale-x-100`}
            >
              <span className="absolute right-6 top-[22px] font-cond text-[15px] font-semibold tracking-[0.12em] text-steel-2">{String(i + 1).padStart(2, '0')}</span>
              <span className={`${ICON_CHIP} mb-[18px] h-[50px] w-[50px] group-hover:bg-yellow dark:group-hover:bg-yellow-deep [&_svg]:h-[26px] [&_svg]:w-[26px]`}>{GeoIcon[c.icon]}</span>
              <h4 className="font-display text-[17px] font-bold">{c.title}</h4>
              <p className="mt-2.5 text-sm text-steel">{c.desc}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ------------------------------------------------------------- PROJECTS */
// Flat editorial project card — image on top (grayscale → colour on hover),
// contract detail on a solid caption plate below. No gradient scrim.
const PH_CARD =
  'group relative flex w-[clamp(320px,34vw,460px)] shrink-0 grow-0 flex-col overflow-hidden border border-line bg-paper text-ink [scroll-snap-align:start] transition-colors duration-300 ' +
  'hover:border-ink dark:border-glass-brd dark:bg-white/[0.02] dark:text-text dark:hover:border-[rgba(255,214,10,0.5)]'

export function Projects() {
  const pin = useRef(null)
  const track = useRef(null)
  const [pinned, setPinned] = useState(false)

  useLayoutEffect(() => {
    if (MOTION_OFF) return
    if (!window.matchMedia('(min-width: 920px)').matches) return

    const section = pin.current
    const t = track.current
    const viewport = t.parentElement
    setPinned(true)

    const ctx = gsap.context(() => {
      const distance = () => Math.max(0, t.scrollWidth - viewport.clientWidth)
      gsap.to(t, {
        x: () => -distance(),
        ease: 'none',
        scrollTrigger: {
          trigger: section,
          start: 'top top',
          end: () => '+=' + distance(),
          scrub: 0.6,
          pin: true,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      })
    }, pin)

    return () => {
      ctx.revert()
      setPinned(false)
    }
  }, [])

  const cardH = pinned ? 'h-[min(60vh,540px)]' : 'h-[clamp(420px,60vh,560px)]'

  return (
    <section
      className={`relative overflow-hidden bg-paper dark:bg-transparent ${pinned ? 'flex h-screen flex-col' : ''}`}
      id="projects"
      ref={pin}
    >
      <span className={WM} aria-hidden="true">05</span>
      <div className={`${WRAP} grid grid-cols-[1fr_auto] items-end gap-x-10 gap-y-[18px] pb-[clamp(34px,4vw,54px)] pt-[var(--sec)] max-[760px]:grid-cols-1 ${pinned ? 'flex-none' : ''}`}>
        <SectionHead idx="05" kicker="Major Projects · Contract Record">
          Delivered, certified, signed off
        </SectionHead>
        <Reveal delay={0.1}>
          <p className={`${LEAD} mt-0 max-w-[46ch] self-end`}>
            Railway sidings, formation, slope protection, roadways and civil works — executed for PSU
            and government clients across Jharkhand, Bihar and Chhattisgarh.
          </p>
        </Reveal>
        <span className="col-span-full inline-flex items-center gap-2.5 font-display text-[12px] font-bold uppercase tracking-[0.16em] text-steel" aria-hidden="true">
          Scroll{' '}
          <span className="relative h-0.5 w-4 bg-current animate-phHint motion-reduce:animate-none after:absolute after:-right-px after:-top-[3px] after:h-[7px] after:w-[7px] after:rotate-45 after:border-r-2 after:border-t-2 after:border-current after:content-['']" />
        </span>
      </div>

      <div className={`overflow-x-auto overflow-y-hidden [scroll-snap-type:x_proximity] [-webkit-overflow-scrolling:touch] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden ${pinned ? 'flex flex-1 items-center overflow-hidden pb-0' : 'pb-[var(--sec)]'}`}>
        <div className="flex w-max gap-[22px] px-[var(--pad)]" ref={track}>
          {PROJECTS.map((p, i) => (
            <article className={`${PH_CARD} ${cardH}`} key={p.title}>
              {/* image — desaturated at rest, full colour on hover */}
              <div className="relative min-h-0 flex-1 overflow-hidden">
                <img className="h-full w-full object-cover grayscale contrast-[1.03] transition-[transform,filter] duration-[900ms] ease-smooth group-hover:scale-[1.05] group-hover:grayscale-0" src={p.img} alt={p.title} loading="lazy" />
                <span className="absolute left-0 top-0 grid h-9 w-11 place-items-center bg-yellow font-cond text-[15px] font-semibold leading-none text-on-accent">{String(i + 1).padStart(2, '0')}</span>
                <span className="absolute right-3 top-3 border border-white/60 bg-black/35 px-2.5 py-[5px] font-mono text-[10px] font-semibold uppercase tracking-[0.12em] text-white [backdrop-filter:blur(4px)]">{p.cat}</span>
              </div>
              {/* caption plate — contract record */}
              <div className="flex flex-col gap-3 p-[clamp(20px,1.5vw,26px)]">
                <h3 className="font-display text-[clamp(17px,1.35vw,21px)] font-bold leading-[1.16] dark:text-text">{p.title}</h3>
                <p className="text-[13px] leading-[1.5] text-steel">{p.scope}</p>
                <dl className="grid grid-cols-[auto_1fr] gap-x-4 gap-y-2 border-t border-line pt-3 font-mono text-[11px] leading-[1.35] dark:border-glass-brd">
                  <dt className="uppercase tracking-[0.08em] text-steel-2">Client</dt><dd className="text-ink dark:text-text">{p.client}</dd>
                  <dt className="uppercase tracking-[0.08em] text-steel-2">Location</dt><dd className="text-steel">{p.location}</dd>
                  {p.duration && (<><dt className="uppercase tracking-[0.08em] text-steel-2">Duration</dt><dd className="text-steel">{p.duration}</dd></>)}
                </dl>
                <div className="mt-auto flex flex-wrap gap-1.5 pt-1">
                  {p.tags.map((t) => (
                    <span key={t} className="border border-line px-2 py-[3px] font-mono text-[9px] uppercase tracking-[0.06em] text-steel dark:border-glass-brd">{t}</span>
                  ))}
                </div>
              </div>
            </article>
          ))}
          <a className={`group relative flex w-[clamp(260px,24vw,350px)] shrink-0 grow-0 items-center justify-start overflow-hidden border border-glass-brd bg-dark text-white [scroll-snap-align:start] ${cardH}`} href="#quote">
            <span className="flex flex-col gap-3 p-8">
              <span className="font-body text-[13px] font-semibold uppercase tracking-[0.08em] text-on-dark-mute">Have a similar project?</span>
              <span className="inline-flex items-center gap-3 font-display text-[clamp(24px,2.4vw,34px)] font-extrabold leading-[1.06] text-white [&_.arr]:transition-transform [&_.arr]:duration-300 [&_.arr]:ease-smooth group-hover:[&_.arr]:translate-x-1.5">Let's talk {Icon.arrow}</span>
            </span>
          </a>
        </div>
      </div>
    </section>
  )
}

/* --------------------------------------------------------------- STATS */
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

        <Reveal delay={0.1} className="mt-11">
          <div className={METRIC_STRIP}>
            {COMPLIANCE.map((c) => <span className={metricPill('border-line-dark')} key={c}><i className={METRIC_DOT} />{c}</span>)}
          </div>
        </Reveal>
       </div>
      </div>
    </section>
  )
}

/* -------------------------------------------------------------- CLIENTS */
export function Clients() {
  const morph = useColorMorph({ from: '#e9edf3', to: '#ffffff' })
  return (
    <section className={SECTION} id="clients" ref={morph}>
      <div className={WRAP}>
        <SectionHead idx="07" kicker="Major Clients · Trusted Partners">
          Relied upon by government &amp; PSU bodies
        </SectionHead>

        <div className="mt-[52px] grid grid-cols-4 gap-px overflow-hidden rounded border border-line bg-line max-[1024px]:grid-cols-2 max-[480px]:grid-cols-1 dark:border-glass-brd">
          {CLIENTS.map((c) => (
            <Reveal
              className="relative bg-paper px-[30px] pb-8 pt-[34px] transition-[background] duration-300 ease-smooth hover:bg-surface dark:hover:bg-glass-2 before:absolute before:left-[30px] before:top-0 before:h-[3px] before:w-8 before:origin-left before:scale-x-0 before:bg-yellow before:transition-transform before:duration-[350ms] before:ease-smooth before:content-['']"
              key={c.abbr}
            >
              <span className="block font-display text-[30px] font-extrabold leading-none tracking-[0.01em] text-ink dark:text-white">{c.abbr}</span>
              <span className="mt-2.5 block text-[13px] font-medium leading-[1.4] text-steel">{c.full}</span>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

/* --------------------------------------------------------- TESTIMONIALS */
const initials = (name) =>
  name.split(' ').filter(Boolean).map((w) => w[0]).slice(0, 2).join('').toUpperCase()

export function Testimonials() {
  return (
    <section className={SECTION} id="testimonials">
      <div className={WRAP}>
        <SectionHead idx="08" kicker="In their words" className="mb-[52px]">
          Trusted on the ground<em className={DOT}>.</em>
        </SectionHead>
        <div className="grid grid-cols-3 gap-5 max-[1024px]:grid-cols-1">
          {TESTIMONIALS.map((t, i) => (
            <Reveal
              as="figure"
              key={i}
              delay={i * 0.1}
              className={`${CARD} flex flex-col gap-6 p-[40px_32px_30px] hover:-translate-y-[5px] before:absolute before:inset-x-0 before:top-0 before:h-1 before:bg-yellow before:content-[''] after:absolute after:right-6 after:top-1 after:z-0 after:pointer-events-none after:font-display after:text-[150px] after:font-extrabold after:leading-none after:text-yellow after:opacity-[0.13] after:content-['\\201D'] dark:after:opacity-[0.12]`}
            >
              <p className="relative z-[1] flex-1 text-[16.5px] leading-[1.6] text-ink-2">{t.quote}</p>
              <figcaption className="flex items-center gap-[14px] border-t border-line pt-[22px]">
                <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-yellow font-display text-[15px] font-extrabold tracking-[0.02em] text-ink" aria-hidden="true">{initials(t.name)}</span>
                <span>
                  <b className="block font-display text-[15px] font-bold leading-[1.2] dark:text-white">{t.name}</b>
                  <span className="text-[13px] text-steel">{t.role}</span>
                </span>
              </figcaption>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
