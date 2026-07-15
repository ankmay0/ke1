import { useLayoutEffect, useRef } from 'react'
import { SHOT, CountUp, Icon, RevealText } from '../ui/ui'
import { useParallax, gsap, MOTION_OFF } from '../lib/motion'
import { Magnetic } from './Chrome'
import { Aurora, SpotlightCard } from '../ui/fx'
import { HERO_STATS } from '../lib/data'
import { WRAP, BTN_PRIMARY, BTN_GHOST_HERO } from '../lib/cx'

/* Relevant site imagery cycled behind the hero — formation crew, twin tracks,
   ROB / retaining structures, slope protection and ballast works. */
const HERO_SLIDES = [
  { src: '/assets/photo1.jpg', alt: 'M/s Karan Enterprises crew executing RDSO-grade railway formation and track-laying' },
  { src: '/assets/photo11.jpg', alt: 'Completed twin railway tracks with ballast — block-time delivery' },
  { src: '/assets/photo3.jpg', alt: 'Rail Over Bridge with retaining structures and approach' },
  { src: '/assets/photo6.jpg', alt: 'Geocell slope protection and ground improvement on a railway embankment' },
  { src: '/assets/photo4.jpg', alt: 'Ballast spreading and track-bed completion on a rail corridor' },
]

/* On phones we keep the EXACT desktop hero and simply scale the whole thing
   down, so the image + all content shrink by one factor and the width:height
   ratio matches the PC screen. The hero is laid out at a fixed design width and
   transform-scaled by (viewport / DESIGN_W) below MOBILE_BP; above it, the
   canvas is 100% wide and behaves exactly like the desktop hero.
   DESIGN_W is the knob — larger ⇒ smaller mobile hero. */
const DESIGN_W = 600
const MOBILE_BP = 900

/* Full-bleed cinematic hero — the headline over a slow cross-fading carousel of
   railway & road site imagery, under a dark scrim + electric aurora, with a
   floating glass stat bar. Intentionally dark in both themes; degrades to the
   first static frame in SHOT / reduced-motion. */
export default function Hero() {
  const bg = useParallax({ amount: 70, from: -35, start: 'top top', end: 'bottom top' })
  const stageRef = useRef(null)
  const sectionRef = useRef(null)
  const canvasRef = useRef(null)

  // Scale the fixed-width desktop hero down to fit the phone viewport, keeping
  // the desktop proportions intact. Above MOBILE_BP we clear everything and the
  // canvas flows full-width like the original desktop hero. Runs pre-paint so
  // phones never flash the unscaled (desktop-sized) layout.
  useLayoutEffect(() => {
    const section = sectionRef.current
    const canvas = canvasRef.current
    if (!section || !canvas) return
    const apply = () => {
      const vw = document.documentElement.clientWidth
      if (vw <= MOBILE_BP) {
        const s = vw / DESIGN_W
        canvas.style.width = DESIGN_W + 'px'
        canvas.style.transformOrigin = 'top left'
        canvas.style.transform = `scale(${s})`
        // offsetHeight is measured pre-transform (at DESIGN_W), so the section
        // reserves exactly the scaled visual height.
        section.style.height = canvas.offsetHeight * s + 'px'
      } else {
        canvas.style.width = ''
        canvas.style.transform = ''
        canvas.style.transformOrigin = ''
        section.style.height = ''
      }
    }
    apply()
    window.addEventListener('resize', apply)
    // Re-measure once the eager hero image has decoded (its load can nudge height).
    const img = canvas.querySelector('[data-hero-slide]')
    if (img && !img.complete) img.addEventListener('load', apply, { once: true })
    return () => window.removeEventListener('resize', apply)
  }, [])

  useLayoutEffect(() => {
    if (MOTION_OFF || !stageRef.current) return
    const ctx = gsap.context(() => {
      const slides = gsap.utils.toArray(stageRef.current.querySelectorAll('[data-hero-slide]'))
      const n = slides.length
      if (n < 2) return
      const HOLD = 5, FADE = 1.4, SEG = HOLD + FADE

      // Slow Ken Burns while static, plain crossfade on the change: each slide
      // zooms gently in the whole time it holds, then simply cross-fades to the
      // next (no zoom during the swap). The next slide fades in at scale 1 and
      // begins its own slow zoom once settled. The final hand-off (→ slide 0)
      // lands on the loop boundary, so the repeat is seamless.
      gsap.set(slides, { autoAlpha: 0, scale: 1.0, transformOrigin: 'center center' })
      gsap.set(slides[0], { autoAlpha: 1, scale: 1.0 })

      const tl = gsap.timeline({ repeat: -1 })
      slides.forEach((slide, i) => {
        const next = slides[(i + 1) % n]
        const at = i * SEG + HOLD
        // slow zoom during the static hold
        tl.fromTo(slide, { scale: 1.0 }, { scale: 1.1, duration: HOLD, ease: 'sine.inOut', immediateRender: false }, i * SEG)
        // change — plain crossfade, no zoom
        tl.to(slide, { autoAlpha: 0, duration: FADE, ease: 'power1.inOut' }, at)
        tl.fromTo(next, { autoAlpha: 0, scale: 1.0 }, { autoAlpha: 1, duration: FADE, ease: 'power1.inOut', immediateRender: false }, at)
      })
    }, stageRef)
    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={sectionRef}
      className="relative w-full overflow-hidden bg-[#05060a] text-white"
      id="home"
    >
      {/* Fixed design-width canvas — scaled down as one unit on phones. Every
          vw/clamp size is pinned to its desktop value at <=MOBILE_BP so the
          canvas always renders the desktop layout regardless of viewport. */}
      <div
        ref={canvasRef}
        className="relative isolate flex min-h-[clamp(360px,43vh,450px)] w-full items-stretch overflow-hidden pb-[clamp(10px,1.2vw,18px)] pt-[clamp(9px,1.2vw,16px)] max-[900px]:min-h-[450px] max-[900px]:pb-[18px] max-[900px]:pt-[16px] max-[900px]:[--pad:24px]"
      >
        <div className="absolute inset-0 z-0 overflow-hidden">
          <div ref={bg} className="absolute left-0 top-[-9%] h-[118%] w-full will-change-transform">
            <div ref={stageRef} className="absolute inset-0">
              {HERO_SLIDES.map((s, i) => (
                <img
                  key={s.src}
                  data-hero-slide
                  className={`absolute inset-0 h-full w-full object-cover object-[center_50%] will-change-[transform,opacity] ${i === 0 ? 'opacity-100' : 'opacity-0'}`}
                  src={s.src}
                  alt={i === 0 ? s.alt : ''}
                  loading={i === 0 ? 'eager' : 'lazy'}
                  fetchPriority={i === 0 ? 'high' : undefined}
                />
              ))}
            </div>
          </div>
          <span
            className="absolute inset-0 [background:linear-gradient(90deg,rgba(5,6,10,0.92)_0%,rgba(5,6,10,0.72)_34%,rgba(5,6,10,0.30)_66%,rgba(5,6,10,0.10)_100%),linear-gradient(0deg,rgba(5,6,10,0.95)_4%,rgba(5,6,10,0.45)_38%,rgba(5,6,10,0.12)_70%)]"
            aria-hidden="true"
          />
        </div>
        <Aurora />

        <div className={`${WRAP} relative z-[2] flex w-full flex-col`}>
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-white/[0.14] pb-[10px] font-mono text-[11.5px] max-[900px]:text-[15px] uppercase tracking-[0.14em] text-white/[0.62]">
            <span className="inline-flex items-center gap-2.5 text-white">
              <i className={`h-2 w-2 rounded-full bg-yellow shadow-[0_0_0_0_rgba(255,214,10,0.7)] motion-reduce:animate-none ${SHOT ? '' : 'animate-khPulse'}`} />
              M/S&nbsp;KARAN&nbsp;ENTERPRISES
            </span>
            <span>EST.&nbsp;2013 &nbsp;—&nbsp; RANCHI · JHARKHAND · IN</span>
          </div>

          <div className="mt-auto max-w-[min(760px,100%)] pt-[clamp(8px,1.1vw,15px)]">
            <RevealText
              as="h1"
              className="whitespace-nowrap font-display text-[clamp(22px,5.2vw,46px)] max-[900px]:text-[29px] font-black uppercase leading-[0.98] tracking-[-0.04em] text-white [text-shadow:0_8px_50px_rgba(0,0,0,0.5)]"
              lines={[
                'Railway & Road',
                'Infrastructure,',
                <span
                  key="g"
                  className="bg-clip-text text-transparent [background-image:linear-gradient(92deg,#ffe14d_0%,var(--yellow)_42%,#ffb20a_100%)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]"
                >
                  Built to Last
                </span>,
              ]}
            />
            <p className="mt-[clamp(9px,1.1vw,14px)] max-[900px]:mt-[14px] max-w-[52ch] text-[clamp(14.5px,1.1vw,17.5px)] max-[900px]:text-[24px] leading-[1.5] text-white/[0.84] [&_b]:font-bold [&_b]:text-white">
              RDSO-grade formation, track and civil works for
              <b> government &amp; PSU clients</b> across India — engineered with
              precision, safety and on-schedule execution.
            </p>
            <div className="mt-[clamp(11px,1.4vw,18px)] max-[900px]:mt-[18px] flex flex-wrap gap-[12px]">
              <Magnetic><a href="#services" className={`${BTN_PRIMARY} max-[900px]:px-8 max-[900px]:py-[18px] max-[900px]:text-[17px]`}>Explore capabilities {Icon.arrow}</a></Magnetic>
              <Magnetic strength={0.25}><a href="#quote" className={`${BTN_GHOST_HERO} max-[900px]:px-8 max-[900px]:py-[18px] max-[900px]:text-[17px]`}>Get a quote {Icon.arrow}</a></Magnetic>
            </div>
          </div>

          <div className="mt-[clamp(10px,1.3vw,18px)] max-[900px]:mt-[18px] grid grid-cols-4 overflow-hidden rounded border border-white/[0.12] bg-white/[0.06] shadow-[0_30px_80px_-40px_rgba(0,0,0,0.9)] [backdrop-filter:blur(16px)_saturate(130%)]">
            {HERO_STATS.map((s, i) => {
              const b = ['', 'border-l', 'border-l', 'border-l'][i]
              return (
                <SpotlightCard className={`overflow-hidden border-white/10 p-[clamp(12px,1.3vw,17px)_clamp(16px,1.6vw,24px)] max-[900px]:p-[17px_24px] ${b}`} key={s.label}>
                  <span className="relative z-[1] mb-2 block font-mono text-[11px] max-[900px]:text-[15px] tracking-[0.04em] text-yellow-deep">/{String(i + 1).padStart(2, '0')}</span>
                  <b className="relative z-[1] flex items-baseline font-cond text-[clamp(32px,3.4vw,52px)] max-[900px]:text-[52px] font-semibold leading-[0.9] text-white">
                    <CountUp to={parseInt(s.num, 10)} />{s.sup && <em className="ml-[3px] text-[0.5em] not-italic text-yellow">{s.sup}</em>}
                  </b>
                  <span className="relative z-[1] mt-2 block font-mono text-[10.5px] max-[900px]:text-[14px] uppercase leading-[1.4] tracking-[0.04em] text-white/[0.62]">{s.label}</span>
                </SpotlightCard>
              )
            })}
          </div>
        </div>

        <a
          href="#about"
          aria-label="Scroll to explore"
          className="group absolute right-[var(--pad)] top-1/2 z-[3] flex -translate-y-1/2 flex-col items-center gap-3 text-white/70 transition-colors duration-300 hover:text-white"
        >
          <span className="font-mono text-[10px] tracking-[0.24em] text-white/60 transition-colors duration-300 [writing-mode:vertical-rl] group-hover:text-white/85">SCROLL</span>
          <span className="flex h-[34px] w-[21px] justify-center rounded-full border border-white/35 pt-[6px] transition-colors duration-300 group-hover:border-yellow">
            <span className={`h-[6px] w-[3px] rounded-full bg-yellow motion-reduce:animate-none ${SHOT ? '' : 'animate-scrollWheel'}`} />
          </span>
          <svg
            className={`h-3.5 w-3.5 motion-reduce:animate-none ${SHOT ? '' : 'animate-scrollNudge'}`}
            viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"
          >
            <path d="M6 9l6 6 6-6" />
          </svg>
        </a>
      </div>
    </section>
  )
}
