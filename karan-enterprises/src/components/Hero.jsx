import { useEffect, useRef, useState } from 'react'
import { SHOT } from '../ui'

/* count-up that triggers when the number scrolls into view (instant in SHOT mode) */
function CountUp({ to, dur = 1500 }) {
  const [val, setVal] = useState(SHOT ? to : 0)
  const ref = useRef(null)
  useEffect(() => {
    if (SHOT) return
    const el = ref.current
    if (!el) return
    let raf, started = false
    const run = (t0) => {
      const tick = (now) => {
        const p = Math.min(1, (now - t0) / dur)
        setVal(Math.round(to * (1 - Math.pow(1 - p, 3))))
        if (p < 1) raf = requestAnimationFrame(tick)
      }
      raf = requestAnimationFrame(tick)
    }
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => {
        if (e.isIntersecting && !started) { started = true; run(performance.now()) }
      }),
      { threshold: 0.4 }
    )
    io.observe(el)
    return () => { io.disconnect(); cancelAnimationFrame(raf) }
  }, [to, dur])
  return <span className="count" ref={ref}>{val}</span>
}

const ICON = {
  calendar: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4.5" width="18" height="16" rx="1.5" /><path d="M3 9h18M8 3v3M16 3v3" /><path d="M7.5 13h2M11 13h2M14.5 13h2M7.5 16.5h2M11 16.5h2" /></svg>
  ),
  team: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="9" cy="8" r="3" /><path d="M3.5 19a5.5 5.5 0 0 1 11 0" /><path d="M16 6.2a3 3 0 0 1 0 5.6" /><path d="M17 14.2A5.5 5.5 0 0 1 20.5 19" /></svg>
  ),
  helmet: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M4 15a8 8 0 0 1 16 0" /><path d="M3 15h18v1.5a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V15z" /><path d="M12 7V5.5M10 7.4a4.5 4.5 0 0 0-2.8 3M14 7.4a4.5 4.5 0 0 1 2.8 3" /></svg>
  ),
}

const STATS = [
  { icon: ICON.calendar, to: 12, sup: '+', l1: 'Years of', l2: 'experience' },
  { icon: ICON.team, to: 230, sup: '+', l1: 'Strong', l2: 'workforce' },
  { icon: ICON.helmet, to: 100, sup: '+', l1: 'On-roll +', l2: '130 contractual' },
]

export default function Hero() {
  return (
    <section className={`hero${SHOT ? ' no-anim' : ''}`} id="home">
      <img className="hero-sketch" src="/assets/hero-tracks.png" alt="" aria-hidden="true" />

      <div className="hero-top">
        <div className="c"><i /><span><b>M/s Karan Enterprises</b> · Infrastructure excellence since 2013</span></div>
        <div className="c center"><span>New railway formation &amp; existing track maintenance · <b>as per RDSO guidelines</b></span></div>
        <div className="c right"><span><b>Jharkhand · India</b></span></div>
      </div>

      <div className="hero-main">
        <h1 className="hero-title">
          <span className="ln"><span>Building <span className="em">infrastructure</span></span></span>
          <span className="ln"><span>for a better <span className="em">tomorrow.</span></span></span>
        </h1>
        <p className="hero-sub">
          A leading railway and roadway infrastructure contractor delivering projects with{' '}
          <em className="lede-hl">precision, safety, and commitment</em>.
        </p>
        <div className="hero-cta">
          <a href="#services" className="hero-btn primary">Explore our services <span>&rarr;</span></a>
          <a href="#quote" className="hero-btn ghost">Get a quote <span>&rarr;</span></a>
        </div>
      </div>

      <div className="hero-bot">
        {STATS.map((s) => (
          <div className="stat" key={s.l1 + s.to}>
            <span className="stat-icon" aria-hidden="true">{s.icon}</span>
            <span className="stat-main">
              <b><CountUp to={s.to} /><em>{s.sup}</em></b>
              <span className="stat-lbl">{s.l1}<br />{s.l2}</span>
            </span>
          </div>
        ))}
      </div>

      <img className="excavator" src="/assets/excavator.png" alt="" aria-hidden="true" />

      <span className="scroll-cue">Scroll to enter <i /></span>
    </section>
  )
}
