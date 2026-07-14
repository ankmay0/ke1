import { useState, useRef, useLayoutEffect } from 'react'
import { Reveal, SectionHead, CountUp } from '../../ui/ui'
import { CornerTicks } from '../../ui/tech'
import { gsap, ScrollTrigger, MOTION_OFF } from '../../lib/motion'
import { WRAP, SECTION, LEAD, U, DOT, WM, WM_LEFT } from '../../lib/cx'
import { CRITICAL_WORKS } from '../../lib/data'

/* ------------------------------------ 04 · CRITICAL & FLAGSHIP WORKS */
/* Spotlight on the most demanding contracts on record. Each contract is a full
   detail panel (headline metrics + contract reference + two site photographs),
   and on desktop the section pins so one scroll advances one project: panels
   perform a cinematic hand-off — the outgoing panel scales back, blurs and
   lifts away while the incoming panel rushes forward out of a blur, its ghost
   numeral slides in, the info column and metric card cascade, and the two
   photographs wipe open in sequence. On touch / reduced-motion / SHOT the
   panels stack and scroll normally (this static layout is the fallback). */

/* one headline metric — numeric metrics count up, qualitative specs render flat */
function CritMetric({ m, small = false }) {
  return (
    <div>
      <b className={`flex items-baseline font-cond ${small ? 'text-[clamp(30px,3.4vw,52px)]' : 'text-[clamp(38px,4.4vw,64px)]'} font-semibold leading-[0.85] text-ink dark:text-text`}>
        {typeof m.value === 'number' ? <CountUp to={m.value} /> : m.value}
        {m.unit && <em className="ml-1 text-[0.4em] not-italic text-yellow-deep">{m.unit}</em>}
      </b>
      <span className="mt-2.5 block font-mono text-[10.5px] uppercase leading-[1.5] tracking-[0.08em] text-steel">{m.label}</span>
    </div>
  )
}

/* one flagship contract, fully detailed — the shared panel design */
function CritPanel({ c }) {
  return (
    <article data-crit-panel className="relative pb-[clamp(8px,1vw,16px)]">
      {/* oversized ghost numeral drifting behind the panel */}
      <span
        data-crit-ghost
        aria-hidden="true"
        className="pointer-events-none absolute right-0 top-[-6%] -z-[1] select-none font-cond text-[clamp(120px,20vw,280px)] font-bold leading-[0.7] tracking-[-0.04em] text-ink opacity-[0.04] dark:text-white dark:opacity-[0.05]"
      >
        {c.n}
      </span>

      <div className="grid grid-cols-[1fr_0.82fr] items-end gap-x-[clamp(28px,4vw,64px)] gap-y-5 max-[900px]:grid-cols-1">
        <div data-crit-info>
          <span className="font-mono text-[13px] font-bold tracking-[0.04em] text-steel-2">{c.n} / {String(CRITICAL_WORKS.length).padStart(2, '0')}</span>
          <h3 className="mt-3 font-display text-[clamp(21px,2.5vw,38px)] font-black uppercase leading-[1.02] tracking-[-0.03em] dark:text-text">
            {c.title}
          </h3>
        </div>
        <p className="text-[clamp(14px,1.3vw,17px)] leading-[1.6] text-steel">{c.desc}</p>
      </div>

      <div className="mt-[clamp(18px,2.2vw,30px)] grid grid-cols-[0.62fr_1.4fr_1fr] gap-3 max-[900px]:grid-cols-2 max-[560px]:grid-cols-1">
        {/* metric card */}
        <div data-crit-card className="flex flex-col justify-between gap-6 border border-line bg-paper p-[clamp(22px,2vw,30px)] dark:border-glass-brd dark:bg-white/[0.02] max-[900px]:col-span-2 max-[900px]:flex-row max-[560px]:col-span-1 max-[560px]:flex-col">
          <CritMetric m={c.metrics[0]} />
          <div className="border-t border-line pt-5 dark:border-glass-brd max-[900px]:border-l max-[900px]:border-t-0 max-[900px]:pl-5 max-[900px]:pt-0 max-[560px]:border-l-0 max-[560px]:border-t max-[560px]:pl-0 max-[560px]:pt-5">
            <CritMetric m={c.metrics[1]} small />
            <span className="mt-4 inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.08em] text-steel-2">
              <i className="h-1.5 w-1.5 rounded-full bg-yellow" />Ref · {c.ref}
            </span>
          </div>
        </div>
        {/* two site photographs */}
        {c.images.map((im) => (
          <div key={im.src} data-crit-media className="group relative h-[clamp(200px,25vw,300px)] overflow-hidden border border-line dark:border-glass-brd max-[560px]:h-[220px]">
            <img className="h-full w-full object-cover contrast-[1.03] transition-transform duration-[800ms] ease-smooth group-hover:scale-[1.04]" src={im.src} alt={im.alt} loading="lazy" />
            <CornerTicks />
          </div>
        ))}
      </div>

      <span className="mt-5 inline-flex w-max items-center gap-2 border-l-2 border-yellow bg-yellow-soft px-3.5 py-1.5 font-mono text-[10.5px] uppercase tracking-[0.06em] text-ink dark:bg-yellow dark:text-on-accent">
        {c.tag}
      </span>
    </article>
  )
}

export function CriticalInfra() {
  const [active, setActive] = useState(0)
  const [pinned, setPinned] = useState(false)
  const pinRef = useRef(null)
  const stackRef = useRef(null)
  const stRef = useRef(null)
  const idxRef = useRef(0)
  const tlRef = useRef(null)
  const showRef = useRef(null)
  const n = CRITICAL_WORKS.length

  // Pin + snap (no scrub). Scroll position only decides WHICH project is
  // committed — the crossfade is a self-contained timed tween (`showPanel`)
  // that always converges to exactly one visible panel. So between commits the
  // active panel is static and fully shown (never a scroll-blended mid-state),
  // and a committed change plays the full cinematic hand-off. Strictness comes
  // from ±0.6-segment hysteresis in both the index commit and the snap.
  useLayoutEffect(() => {
    if (MOTION_OFF || !pinRef.current || !stackRef.current) return
    if (!window.matchMedia('(min-width: 901px)').matches) return // touch / narrow → static stack
    const ctx = gsap.context(() => {
      const panels = gsap.utils.toArray(stackRef.current.querySelectorAll('[data-crit-panel]'))
      if (panels.length < 2) return

      const h = Math.max(...panels.map((p) => p.offsetHeight))
      gsap.set(stackRef.current, { height: h })
      panels.forEach((p, i) => gsap.set(p, { position: 'absolute', top: 0, left: 0, width: '100%', autoAlpha: i === 0 ? 1 : 0 }))

      // crossfade to panel t — every call ends with t at opacity 1, rest at 0
      const showPanel = (t) => {
        tlRef.current && tlRef.current.kill()
        const inn = panels[t]
        const ghost = inn.querySelector('[data-crit-ghost]')
        const info = inn.querySelector('[data-crit-info]')
        const card = inn.querySelector('[data-crit-card]')
        const media = inn.querySelectorAll('[data-crit-media]')
        const tl = gsap.timeline({ defaults: { overwrite: 'auto' } })
        // every other panel blurs / scales back and fades out
        panels.forEach((p, i) => {
          if (i !== t) tl.to(p, { autoAlpha: 0, scale: 0.92, filter: 'blur(10px)', duration: 0.4, ease: 'power2.in' }, 0)
        })
        // incoming panel rushes forward out of a blur
        tl.fromTo(inn, { autoAlpha: 0, scale: 1.16, yPercent: 9, filter: 'blur(16px)' },
          { autoAlpha: 1, scale: 1, yPercent: 0, filter: 'blur(0px)', duration: 0.75, ease: 'power3.out' }, 0.05)
        if (ghost) tl.fromTo(ghost, { xPercent: -16 }, { xPercent: 0, duration: 0.8, ease: 'power2.out' }, 0.05)
        if (info) tl.fromTo(info, { xPercent: -7, autoAlpha: 0 }, { xPercent: 0, autoAlpha: 1, duration: 0.55, ease: 'power3.out' }, 0.2)
        if (card) tl.fromTo(card, { yPercent: 16, autoAlpha: 0 }, { yPercent: 0, autoAlpha: 1, duration: 0.55, ease: 'power3.out' }, 0.24)
        if (media.length) tl.fromTo(media, { clipPath: 'inset(0% 0% 100% 0%)', scale: 1.18 },
          { clipPath: 'inset(0% 0% 0% 0%)', scale: 1, duration: 0.65, ease: 'power3.out', stagger: 0.11 }, 0.28)
        tlRef.current = tl
      }
      showRef.current = showPanel

      ScrollTrigger.create({
        trigger: pinRef.current,
        start: 'top 92px',
        // widen each project's segment to 1.25 viewports so advancing takes a
        // deliberate scroll rather than a nudge
        end: () => '+=' + (n - 1) * window.innerHeight * 1.25,
        pin: true,
        // strict snapping with hysteresis — rests the scroll on a project
        snap: {
          snapTo: (value) => {
            const step = 1 / (n - 1)
            const raw = value / step
            const base = Math.floor(raw + 1e-6)
            const idx = raw - base >= 0.6 ? base + 1 : base
            return gsap.utils.clamp(0, n - 1, idx) * step
          },
          duration: { min: 0.2, max: 0.5 },
          ease: 'power2.inOut',
          directional: false,
        },
        invalidateOnRefresh: true,
        onUpdate: (self) => {
          // commit the index only when scroll passes 0.6 of a segment past the
          // current project (in either direction) — this is the strictness
          const exact = self.progress * (n - 1)
          let idx = idxRef.current
          while (idx < n - 1 && exact >= idx + 0.6) idx++
          while (idx > 0 && exact <= idx - 0.6) idx--
          if (idx !== idxRef.current) {
            idxRef.current = idx
            setActive(idx)
            showPanel(idx)
          }
        },
        onRefresh: (self) => { stRef.current = self },
      })

      setPinned(true)
      ScrollTrigger.refresh()
    }, pinRef)
    return () => ctx.revert()
  }, [n])

  // jump to a project when its rail marker is clicked
  const goTo = (i) => {
    const st = stRef.current
    if (!st) return
    window.scrollTo({ top: st.start + (i / (n - 1)) * (st.end - st.start), behavior: 'smooth' })
  }

  return (
    <section className={SECTION} id="critical">
      <span className={`${WM} ${WM_LEFT}`} aria-hidden="true">04</span>
      <div className={WRAP}>
        <div className="grid grid-cols-[1fr_0.78fr] items-end gap-x-[clamp(32px,5vw,80px)] gap-y-7 max-[900px]:grid-cols-1">
          <SectionHead idx="04" kicker="Flagship &amp; critical works">
            Complex works, delivered under <span className={U}>time-bound blocks</span>
          </SectionHead>
          <Reveal delay={0.1}>
            <p className={`${LEAD} mt-0`}>
              Time-bound railway block works, gabion wall construction, water-front reinforced soil walls and
              Rail Over Bridge expertise — engineered for rapid deployment without compromising structural
              integrity.
            </p>
          </Reveal>
        </div>

        {/* pinned wrapper — one scroll per project on desktop */}
        <div ref={pinRef} className="mt-[clamp(28px,3.4vw,48px)]">
          {/* progress rail — only meaningful while pinned */}
          {pinned && (
            <div className="mb-[clamp(20px,2.4vw,34px)] flex items-stretch gap-3 max-[900px]:hidden">
              {CRITICAL_WORKS.map((c, i) => (
                <button
                  key={c.n}
                  type="button"
                  onClick={() => goTo(i)}
                  className="group flex flex-1 flex-col gap-2 text-left"
                  aria-label={`View ${c.title}`}
                >
                  <span className={`font-mono text-[11px] font-bold uppercase tracking-[0.1em] transition-colors duration-300 ${i === active ? 'text-ink dark:text-text' : 'text-steel/50 group-hover:text-steel'}`}>
                    {c.n}
                  </span>
                  <span className="relative h-[3px] overflow-hidden bg-line dark:bg-glass-brd">
                    <span className={`absolute inset-0 origin-left bg-yellow transition-transform duration-500 ease-smooth ${i <= active ? 'scale-x-100' : 'scale-x-0'}`} />
                  </span>
                </button>
              ))}
            </div>
          )}

          <div ref={stackRef} className="relative">
            {CRITICAL_WORKS.map((c) => (
              <CritPanel key={c.n} c={c} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
