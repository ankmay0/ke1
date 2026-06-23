import { useState, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { SEC_EYEBROW, IDX, KICKER, H_SEC } from './cx'

// screenshot/verification mode: render everything immediately, no animation gating
export const SHOT = typeof window !== 'undefined' && window.location.search.includes('shot')

/* Count-up that triggers when the number scrolls into view (instant in SHOT mode). */
export function CountUp({ to, dur = 1600, className = 'count' }) {
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
  return <span className={className} ref={ref}>{val}</span>
}

/* Scroll-triggered reveal. variant: 'up' (fade + slide-up), 'fade', 'scale' (zoom-in). */
const REVEAL_VARIANTS = {
  up: (y) => ({ hidden: { opacity: 0, y }, show: { opacity: 1, y: 0 } }),
  fade: () => ({ hidden: { opacity: 0 }, show: { opacity: 1 } }),
  scale: () => ({ hidden: { opacity: 0, scale: 0.9 }, show: { opacity: 1, scale: 1 } }),
}
export function Reveal({ children, delay = 0, y = 26, variant = 'up', as = 'div', className = '', ...rest }) {
  const M = motion[as] || motion.div
  if (SHOT) {
    const Tag = as
    return <Tag className={className} {...rest}>{children}</Tag>
  }
  const variants = (REVEAL_VARIANTS[variant] || REVEAL_VARIANTS.up)(y)
  return (
    <M
      className={className}
      initial="hidden"
      whileInView="show"
      variants={variants}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
      {...rest}
    >
      {children}
    </M>
  )
}

/* Line-by-line text reveal — each line slides up from behind a clip mask,
   staggered as the heading scrolls into view. Pass `lines` as an array of
   strings or nodes. Renders the final visible state in screenshot mode. */
const RT_LINE = 'block overflow-hidden pb-[0.04em] -mb-[0.04em]'
const RT_INNER = 'block will-change-transform'
export function RevealText({ lines, as = 'h1', className = '', stagger = 0.09, delay = 0 }) {
  const Tag = as
  if (SHOT) {
    return (
      <Tag className={className}>
        {lines.map((line, i) => <span className={RT_LINE} key={i}><span className={RT_INNER}>{line}</span></span>)}
      </Tag>
    )
  }
  return (
    <Tag className={className}>
      {lines.map((line, i) => (
        <span className={RT_LINE} key={i}>
          <motion.span
            className={RT_INNER}
            initial={{ y: '115%' }}
            whileInView={{ y: '0%' }}
            viewport={{ once: true, margin: '-70px' }}
            transition={{ duration: 0.8, delay: delay + i * stagger, ease: [0.22, 1, 0.36, 1] }}
          >
            {line}
          </motion.span>
        </span>
      ))}
    </Tag>
  )
}

/* Right-to-left marquee that duplicates its content for a seamless loop */
const MQ_TRACK = 'flex min-w-full shrink-0 items-center gap-[56px] animate-mq group-hover:[animation-play-state:paused] motion-reduce:animate-none'
export function Marquee({ items, render, light = false }) {
  const base =
    'group flex overflow-hidden border-y py-[18px] ' +
    (light
      ? 'bg-surface text-ink border-line dark:bg-surface-2 dark:text-text'
      : 'bg-ink text-white border-line-dark dark:border-line dark:[background:linear-gradient(90deg,#0a0d14,#0e1320,#0a0d14)]')
  return (
    <div className={base}>
      <div className={MQ_TRACK} aria-hidden="false">
        {items.map((it, i) => render(it, i))}
      </div>
      <div className={MQ_TRACK} aria-hidden="true">
        {items.map((it, i) => render(it, `dup-${i}`))}
      </div>
    </div>
  )
}

/* Numbered, editorial section header — varies the rhythm vs. a bare kicker. */
export function SectionHead({ idx, kicker, children, className = '', dark = false, ...rest }) {
  return (
    <Reveal className={className} {...rest}>
      <div className={`${SEC_EYEBROW} ${dark ? 'border-white/[0.28]' : 'border-rule'}`}>
        {idx && <span className={dark ? 'font-mono text-[13px] font-bold tracking-[0.04em] text-white' : IDX}>{idx}</span>}
        <span className={dark ? 'inline-flex items-center gap-2.5 font-mono text-xs font-medium uppercase tracking-[0.1em] text-on-dark-mute' : KICKER}>{kicker}</span>
      </div>
      <h2 className={H_SEC}>{children}</h2>
    </Reveal>
  )
}

/* ---- distinct geotech capability icons ---- */
const geoSvg = (paths) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="#0e1217" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">{paths}</svg>
)
export const GeoIcon = {
  gabion: geoSvg(<><rect x="3" y="4" width="18" height="16" rx="1" /><path d="M3 9h18M3 14h18M9 4v5M15 9v5M9 14v6" /></>),
  erosion: geoSvg(<><path d="M3 20h18" /><path d="M4 20c3-7 6-10 10-12" /><path d="M14 8l3-1-1 3" /><path d="M8 20c1.5-3 3-5 5-6" /></>),
  rsw: geoSvg(<><path d="M3 6h18M3 10h18M3 14h18M3 18h18" /><path d="M8 6v12M14 6v12" /></>),
  culvert: geoSvg(<><path d="M3 19V11a9 9 0 0 1 18 0v8" /><path d="M3 19h18" /><path d="M9 19v-6a3 3 0 0 1 6 0v6" /></>),
  bridge: geoSvg(<><path d="M2 9c4 4 16 4 20 0" /><path d="M2 9v9M22 9v9M8 12v6M16 12v6M2 18h20" /></>),
  geocell: geoSvg(<><path d="M7 4l4 2v4l-4 2-4-2V6zM17 4l4 2v4l-4 2-4-2V6zM12 13l4 2v4l-4 2-4-2v-4z" /></>),
}

/* ---- icons (stroke style, inherit color) ---- */
export const Icon = {
  arrow: (
    <svg className="arr" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
  ),
  check: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#ffcd00" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5" /></svg>
  ),
  phone: (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92Z" /></svg>
  ),
  mail: (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="4" width="20" height="16" rx="2" /><path d="m22 7-10 6L2 7" /></svg>
  ),
  linkedin: (
    <svg viewBox="0 0 24 24" fill="currentColor"><path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.13 1.45-2.13 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.07 2.07 0 1 1 0-4.14 2.07 2.07 0 0 1 0 4.14zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0z" /></svg>
  ),
  whatsapp: (
    <svg viewBox="0 0 24 24" fill="#fff"><path d="M.057 24l1.687-6.163a11.867 11.867 0 0 1-1.587-5.946C.16 5.335 5.495 0 12.05 0a11.82 11.82 0 0 1 8.413 3.488 11.82 11.82 0 0 1 3.48 8.414c-.003 6.557-5.338 11.892-11.893 11.892a11.9 11.9 0 0 1-5.688-1.448L.057 24zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884a9.86 9.86 0 0 0 1.51 5.26l-.999 3.648 3.978-.607zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.096 3.2 5.077 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" /></svg>
  ),
  sun: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="4" /><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" /></svg>
  ),
  moon: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" /></svg>
  ),
}

/* Persistent dark/light switch. Reads/writes html[data-theme] + localStorage. */
export function ThemeToggle() {
  const [theme, setTheme] = useState(() => {
    if (typeof document === 'undefined') return 'dark'
    return document.documentElement.getAttribute('data-theme') || 'dark'
  })
  const toggle = () => {
    const next = theme === 'dark' ? 'light' : 'dark'
    setTheme(next)
    document.documentElement.setAttribute('data-theme', next)
    try { localStorage.setItem('ke_theme', next) } catch (e) { /* ignore */ }
  }
  return (
    <button
      type="button"
      className="inline-grid h-[42px] w-[42px] shrink-0 place-items-center rounded-xl border border-line-2 bg-glass text-text [backdrop-filter:blur(8px)] transition-[transform,border-color,background] duration-300 ease-smooth hover:-translate-y-0.5 hover:border-yellow [&_svg]:block [&_svg]:h-[19px] [&_svg]:w-[19px]"
      onClick={toggle}
      aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
      title={theme === 'dark' ? 'Light mode' : 'Dark mode'}
    >
      <span className="hidden dark:block">{Icon.sun}</span>
      <span className="block dark:hidden">{Icon.moon}</span>
    </button>
  )
}
