import { useRef, useState, useEffect } from 'react'
import { SHOT } from './ui'
import { MOTION_OFF } from './motion'

/* =====================================================================
   FX — advanced reusable motion primitives for the Kinetic Industrial
   redesign. Every primitive short-circuits in SHOT (screenshot) and
   reduced-motion so the page always renders a clean, readable final
   state with no blank/animating-in content.
   ===================================================================== */

/* ---- Aurora: animated electric-yellow mesh blobs over obsidian.
   Pure CSS animation (no JS rAF), so it degrades for free; reduced-motion
   simply freezes the gradient via the stylesheet. Decorative only. */
const BLOB = 'absolute rounded-full will-change-transform opacity-[0.32] blur-[90px] [mix-blend-mode:multiply] dark:opacity-40 dark:blur-[70px] dark:[mix-blend-mode:screen]'
export function Aurora({ className = '' }) {
  const anim = (k) => (MOTION_OFF ? '' : k)
  return (
    <div className={`pointer-events-none absolute inset-0 z-[1] overflow-hidden ${className}`} aria-hidden="true">
      <span className={`${BLOB} ${anim('animate-aur1')} top-[-14%] right-[-6%] h-[46vw] w-[46vw] [background:radial-gradient(circle_at_30%_30%,rgba(255,214,10,0.6),transparent_65%)]`} />
      <span className={`${BLOB} ${anim('animate-aur2')} bottom-[-18%] left-[-8%] h-[40vw] w-[40vw] [background:radial-gradient(circle_at_50%_50%,rgba(255,160,10,0.42),transparent_65%)]`} />
      <span className={`${BLOB} ${anim('animate-aur3')} top-[30%] left-[38%] h-[30vw] w-[30vw] opacity-[0.18] dark:opacity-40 [background:radial-gradient(circle_at_50%_50%,rgba(120,200,255,0.16),transparent_65%)]`} />
      <span className="absolute inset-0 opacity-50 [background-size:64px_64px] [mask-image:radial-gradient(120%_90%_at_60%_10%,#000_30%,transparent_78%)] [background-image:linear-gradient(rgba(15,18,23,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(15,18,23,0.05)_1px,transparent_1px)] dark:[background-image:linear-gradient(rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.035)_1px,transparent_1px)]" />
    </div>
  )
}

/* ---- SpotlightCard: glass card that tracks the cursor with a radial
   light + subtle 3D tilt. Falls back to a plain element in SHOT/reduced. */
export function SpotlightCard({ as = 'div', className = '', children, tilt = 6, ...rest }) {
  const Tag = as
  const ref = useRef(null)

  const onMove = (e) => {
    const el = ref.current
    if (!el) return
    const r = el.getBoundingClientRect()
    const px = (e.clientX - r.left) / r.width
    const py = (e.clientY - r.top) / r.height
    el.style.setProperty('--mx', `${px * 100}%`)
    el.style.setProperty('--my', `${py * 100}%`)
    el.style.setProperty('--rx', `${(0.5 - py) * tilt}deg`)
    el.style.setProperty('--ry', `${(px - 0.5) * tilt}deg`)
  }
  const onLeave = () => {
    const el = ref.current
    if (!el) return
    el.style.setProperty('--rx', '0deg')
    el.style.setProperty('--ry', '0deg')
  }

  if (MOTION_OFF) {
    return <Tag className={`relative ${className}`} {...rest}>{children}</Tag>
  }
  return (
    <Tag
      ref={ref}
      className={`group relative [transform:perspective(900px)_rotateX(var(--rx,0deg))_rotateY(var(--ry,0deg))] [transform-style:preserve-3d] transition-transform duration-[400ms] ease-smooth ${className}`}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      {...rest}
    >
      <span
        className="pointer-events-none absolute inset-0 z-0 rounded-[inherit] opacity-0 transition-opacity duration-300 [background:radial-gradient(220px_circle_at_var(--mx,50%)_var(--my,0%),rgba(255,214,10,0.18),transparent_60%)] group-hover:opacity-100"
        aria-hidden="true"
      />
      {children}
    </Tag>
  )
}

/* ---- TiltPlate: parallax/tilt wrapper for the hero photo plate. */
export function TiltPlate({ className = '', children, strength = 8 }) {
  const ref = useRef(null)
  const onMove = (e) => {
    const el = ref.current
    if (!el) return
    const r = el.getBoundingClientRect()
    const px = (e.clientX - r.left) / r.width
    const py = (e.clientY - r.top) / r.height
    el.style.setProperty('--prx', `${(0.5 - py) * strength}deg`)
    el.style.setProperty('--pry', `${(px - 0.5) * strength}deg`)
  }
  const reset = () => {
    const el = ref.current
    if (!el) return
    el.style.setProperty('--prx', '0deg')
    el.style.setProperty('--pry', '0deg')
  }
  if (MOTION_OFF) return <div className={`[perspective:1100px] ${className}`}>{children}</div>
  return (
    <div
      ref={ref}
      className={`[perspective:1100px] [&>*]:[transform:rotateX(var(--prx,0deg))_rotateY(var(--pry,0deg))] [&>*]:[transform-style:preserve-3d] [&>*]:transition-transform [&>*]:duration-500 [&>*]:ease-smooth ${className}`}
      onMouseMove={onMove}
      onMouseLeave={reset}
    >
      {children}
    </div>
  )
}

/* ---- ScrambleText: short mono labels "decode" from random glyphs when
   they scroll into view. Reserved for kickers (NOT headings) so screen
   readers and responsive wrapping stay intact. Final text in SHOT/reduced. */
const GLYPHS = '█▓▒░/\\<>*#%&$01ABCDEFKRNX'
export function ScrambleText({ text, className = '', as = 'span', speed = 1.6 }) {
  const Tag = as
  const [out, setOut] = useState(SHOT || MOTION_OFF ? text : '')
  const ref = useRef(null)

  useEffect(() => {
    if (SHOT || MOTION_OFF) return
    const el = ref.current
    if (!el) return
    let raf, started = false
    const run = () => {
      const start = performance.now()
      const total = text.length * 55 * (1 / speed) + 240
      const tick = (now) => {
        const p = Math.min(1, (now - start) / total)
        const revealed = Math.floor(p * text.length)
        let s = text.slice(0, revealed)
        for (let i = revealed; i < text.length; i++) {
          s += text[i] === ' ' ? ' ' : GLYPHS[(Math.floor(now / 40) + i) % GLYPHS.length]
        }
        setOut(s)
        if (p < 1) raf = requestAnimationFrame(tick)
        else setOut(text)
      }
      raf = requestAnimationFrame(tick)
    }
    const io = new IntersectionObserver(
      (es) => es.forEach((e) => { if (e.isIntersecting && !started) { started = true; run() } }),
      { threshold: 0.6 }
    )
    io.observe(el)
    return () => { io.disconnect(); cancelAnimationFrame(raf) }
  }, [text, speed])

  return <Tag className={className} ref={ref}>{out || ' '}</Tag>
}
