import { SHOT, CountUp, Icon, RevealText } from '../ui'
import { useParallax } from '../motion'
import { Magnetic } from './Chrome'
import { Aurora, SpotlightCard, ScrambleText } from '../fx'
import { HERO_STATS } from '../data'
import { WRAP, BTN_PRIMARY, BTN_GHOST_HERO } from '../cx'

/* Full-bleed cinematic hero — a single immersive railway photograph under a
   dark scrim + electric aurora, with the headline anchored bottom-left and a
   floating glass stat bar. Intentionally dark in both themes, so its colours
   are fixed; every animation degrades to a clean static state in SHOT /
   reduced-motion. */
export default function Hero() {
  const bg = useParallax({ amount: 70, from: -35, start: 'top top', end: 'bottom top' })
  return (
    <section
      className="relative isolate flex min-h-[clamp(520px,70vh,680px)] items-stretch overflow-hidden bg-[#05060a] pb-[clamp(22px,2.4vw,36px)] pt-[clamp(20px,2.4vw,34px)] text-white max-[900px]:min-h-[88vh]"
      id="home"
    >
      <div className="absolute inset-0 z-0 overflow-hidden">
        <img
          ref={bg}
          className="absolute left-0 top-[-8%] h-[118%] w-full object-cover object-[center_50%] will-change-transform"
          src="/assets/photo1.jpg"
          alt="M/s Karan Enterprises crew executing RDSO-grade railway formation and track-laying"
        />
        <span
          className="absolute inset-0 [background:linear-gradient(90deg,rgba(5,6,10,0.92)_0%,rgba(5,6,10,0.72)_34%,rgba(5,6,10,0.30)_66%,rgba(5,6,10,0.10)_100%),linear-gradient(0deg,rgba(5,6,10,0.95)_4%,rgba(5,6,10,0.45)_38%,rgba(5,6,10,0.12)_70%)]"
          aria-hidden="true"
        />
      </div>
      <Aurora />

      <div className={`${WRAP} relative z-[2] flex w-full flex-col`}>
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-white/[0.14] pb-[18px] font-mono text-[11.5px] uppercase tracking-[0.14em] text-white/[0.62]">
          <span className="inline-flex items-center gap-2.5 text-white">
            <i className={`h-2 w-2 rounded-full bg-yellow shadow-[0_0_0_0_rgba(255,214,10,0.7)] motion-reduce:animate-none ${SHOT ? '' : 'animate-khPulse'}`} />
            M/S&nbsp;KARAN&nbsp;ENTERPRISES
          </span>
          <span className="max-[480px]:hidden">EST.&nbsp;2013 &nbsp;—&nbsp; RANCHI · JHARKHAND · IN</span>
        </div>

        <div className="mt-auto max-w-[min(760px,100%)] pt-[clamp(22px,3vw,44px)] max-[900px]:max-w-full">
          <ScrambleText
            as="span"
            className="mb-[clamp(12px,1.4vw,18px)] inline-block min-h-[1em] font-mono text-[11.5px] uppercase tracking-[0.12em] text-yellow-deep [text-shadow:0_2px_20px_rgba(0,0,0,0.5)]"
            text="( 01 )  RAILWAY & ROADWAY INFRASTRUCTURE"
          />
          <RevealText
            as="h1"
            className="whitespace-nowrap font-display text-[clamp(29px,4.8vw,66px)] font-black uppercase leading-[0.94] tracking-[-0.04em] text-white [text-shadow:0_8px_50px_rgba(0,0,0,0.5)]"
            lines={[
              'Railway & Road',
              'Infrastructure,',
              <span
                key="g"
                className="bg-clip-text text-transparent [background-image:linear-gradient(92deg,#ffe14d_0%,var(--yellow)_42%,#ffb20a_100%)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]"
              >
                Built to Last.
              </span>,
            ]}
          />
          <p className="mt-[clamp(18px,2vw,26px)] max-w-[52ch] text-[clamp(15px,1.15vw,18.5px)] leading-[1.62] text-white/[0.84] [&_b]:font-bold [&_b]:text-white">
            RDSO-grade formation, track and civil works for
            <b> government &amp; PSU clients</b> across India — engineered with
            precision, safety and on-schedule execution.
          </p>
          <div className="mt-[clamp(24px,2.8vw,34px)] flex flex-wrap gap-[14px]">
            <Magnetic><a href="#services" className={BTN_PRIMARY}>Explore capabilities {Icon.arrow}</a></Magnetic>
            <Magnetic strength={0.25}><a href="#quote" className={BTN_GHOST_HERO}>Get a quote {Icon.arrow}</a></Magnetic>
          </div>
        </div>

        <div className="mt-[clamp(28px,3.4vw,48px)] grid grid-cols-4 overflow-hidden rounded border border-white/[0.12] bg-white/[0.06] shadow-[0_30px_80px_-40px_rgba(0,0,0,0.9)] [backdrop-filter:blur(16px)_saturate(130%)] max-[900px]:grid-cols-2 max-[480px]:rounded-sm">
          {HERO_STATS.map((s, i) => {
            const b = ['', 'border-l', 'border-l max-[900px]:border-l-0 max-[900px]:border-t', 'border-l max-[900px]:border-t'][i]
            return (
              <SpotlightCard className={`overflow-hidden border-white/10 p-[clamp(18px,1.8vw,26px)_clamp(16px,1.6vw,26px)] ${b}`} key={s.label}>
                <span className="relative z-[1] mb-3 block font-mono text-[11px] tracking-[0.04em] text-yellow-deep">/{String(i + 1).padStart(2, '0')}</span>
                <b className="relative z-[1] flex items-baseline font-cond text-[clamp(32px,3.4vw,52px)] font-semibold leading-[0.9] text-white">
                  <CountUp to={parseInt(s.num, 10)} />{s.sup && <em className="ml-[3px] text-[0.5em] not-italic text-yellow">{s.sup}</em>}
                </b>
                <span className="relative z-[1] mt-2.5 block font-mono text-[10.5px] uppercase leading-[1.45] tracking-[0.04em] text-white/[0.62]">{s.label}</span>
              </SpotlightCard>
            )
          })}
        </div>
      </div>

      <div
        className="absolute right-[var(--pad)] top-1/2 z-[3] flex -translate-y-1/2 flex-col items-center gap-3 font-mono text-[10px] tracking-[0.2em] text-white/60 [writing-mode:vertical-rl] max-[900px]:hidden"
        aria-hidden="true"
      >
        <span>SCROLL</span>
        <i className={`relative block h-[46px] w-px overflow-hidden bg-white/25 after:absolute after:inset-x-0 after:top-0 after:h-1/2 after:bg-yellow after:content-[''] motion-reduce:after:animate-none ${SHOT ? '' : 'after:animate-khDrop'}`} />
      </div>
    </section>
  )
}
