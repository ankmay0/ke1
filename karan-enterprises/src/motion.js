// =====================================================================
//  Motion foundation — GSAP + ScrollTrigger helpers
//  All hooks are no-ops in SHOT (screenshot) mode and when the user
//  prefers reduced motion, so the page degrades to a clean static layout.
// =====================================================================
import { useLayoutEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { SHOT } from './ui'

gsap.registerPlugin(ScrollTrigger)

export const REDUCED =
  typeof window !== 'undefined' &&
  window.matchMedia &&
  window.matchMedia('(prefers-reduced-motion: reduce)').matches

export const MOTION_OFF = SHOT || REDUCED

/* Scroll-linked parallax: drifts an element vertically as its trigger
   scrolls through the viewport. `amount` is the total px travel.
   `start`/`end` follow ScrollTrigger syntax — use 'top top' for a hero
   pinned at the very top, 'top bottom' for mid-page elements. */
export function useParallax({
  amount = 80,
  from = 0,
  start = 'top bottom',
  end = 'bottom top',
} = {}) {
  const ref = useRef(null)
  useLayoutEffect(() => {
    if (MOTION_OFF || !ref.current) return
    const el = ref.current
    const ctx = gsap.context(() => {
      gsap.fromTo(
        el,
        { y: from },
        {
          y: from + amount,
          ease: 'none',
          scrollTrigger: {
            trigger: el.parentElement || el,
            start,
            end,
            scrub: true,
          },
        }
      )
    })
    return () => ctx.revert()
  }, [amount, from, start, end])
  return ref
}

/* Scroll-scrubbed scale ("zoom") — element grows/shrinks in sync with scroll. */
export function useScrubScale({
  from = 1.18,
  to = 1,
  start = 'top bottom',
  end = 'bottom top',
} = {}) {
  const ref = useRef(null)
  useLayoutEffect(() => {
    if (MOTION_OFF || !ref.current) return
    const el = ref.current
    const ctx = gsap.context(() => {
      gsap.fromTo(
        el,
        { scale: from },
        {
          scale: to,
          ease: 'none',
          scrollTrigger: { trigger: el.parentElement || el, start, end, scrub: true },
        }
      )
    })
    return () => ctx.revert()
  }, [from, to, start, end])
  return ref
}

/* Scroll-scrubbed background-color morph — colour shifts in sync with scroll. */
export function useColorMorph({
  from,
  to,
  start = 'top 80%',
  end = 'bottom 60%',
} = {}) {
  const ref = useRef(null)
  useLayoutEffect(() => {
    if (MOTION_OFF || !ref.current) return
    const el = ref.current
    const ctx = gsap.context(() => {
      gsap.fromTo(
        el,
        { backgroundColor: from },
        {
          backgroundColor: to,
          ease: 'none',
          scrollTrigger: { trigger: el, start, end, scrub: true },
        }
      )
    })
    return () => ctx.revert()
  }, [from, to, start, end])
  return ref
}

/* Magnetic hover — element eases toward the cursor, springs back on leave. */
export function useMagnetic({ strength = 0.35 } = {}) {
  const ref = useRef(null)
  useLayoutEffect(() => {
    if (MOTION_OFF || !ref.current) return
    const el = ref.current
    const xTo = gsap.quickTo(el, 'x', { duration: 0.5, ease: 'power3' })
    const yTo = gsap.quickTo(el, 'y', { duration: 0.5, ease: 'power3' })
    const move = (e) => {
      const r = el.getBoundingClientRect()
      xTo((e.clientX - (r.left + r.width / 2)) * strength)
      yTo((e.clientY - (r.top + r.height / 2)) * strength)
    }
    const reset = () => { xTo(0); yTo(0) }
    el.addEventListener('mousemove', move)
    el.addEventListener('mouseleave', reset)
    return () => {
      el.removeEventListener('mousemove', move)
      el.removeEventListener('mouseleave', reset)
    }
  }, [strength])
  return ref
}

export { gsap, ScrollTrigger }
